/**
 * Global DevRel — Contact Form Cloudflare Worker (Resend)
 *
 * Receives POST /api/contact with JSON body { name, email, subject, message, honeypot }
 * Forwards the message via Resend API.
 *
 * Environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   RESEND_API_KEY   — your Resend API key (re_...)
 *   RECIPIENT_EMAIL  — where messages are delivered (e.g. consulting@globaldevrel.com)
 *   ALLOWED_ORIGIN   — the frontend origin for CORS (e.g. https://globaldevrel.com)
 *
 * Deploy:
 *   1. Create a new Worker in the Cloudflare dashboard (or via Wrangler CLI)
 *   2. Paste this code
 *   3. Set the three environment variables above
 *   4. Optionally add a custom route: api.globaldevrel.com/*
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

function corsHeaders(origin, allowedOrigin) {
  const allowed =
    origin === allowedOrigin ||
    origin?.startsWith("http://localhost") ||
    origin?.startsWith("https://localhost");

  return {
    ...CORS_HEADERS,
    "Access-Control-Allow-Origin": allowed ? origin : allowedOrigin,
  };
}

function jsonResponse(body, status, origin, allowedOrigin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin, allowedOrigin),
    },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://globaldevrel.com";

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, allowedOrigin),
      });
    }

    const url = new URL(request.url);

    // POST /api/contact
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const { name, email, subject, message, honeypot } = body;

        // Honeypot check — bots fill hidden fields
        if (honeypot) {
          return jsonResponse(
            { success: true, message: "Thank you! Your message has been sent." },
            200,
            origin,
            allowedOrigin
          );
        }

        // Basic validation
        if (!name || !email || !message) {
          return jsonResponse(
            { success: false, error: "Name, email, and message are required." },
            400,
            origin,
            allowedOrigin
          );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return jsonResponse(
            { success: false, error: "Please provide a valid email address." },
            400,
            origin,
            allowedOrigin
          );
        }

        const recipientEmail = env.RECIPIENT_EMAIL || "consulting@globaldevrel.com";
        const resendApiKey = env.RESEND_API_KEY;

        if (!resendApiKey) {
          console.error("RESEND_API_KEY not configured");
          return jsonResponse(
            { success: false, error: "Email service not configured. Please try again later." },
            500,
            origin,
            allowedOrigin
          );
        }

        // Send email via Resend API
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Global DevRel <noreply@dvinnik.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `[Global DevRel] ${subject || "New Contact Form Submission"} — from ${name}`,
            text: [
              `New message from globaldevrel.com contact form`,
              ``,
              `Name: ${name}`,
              `Email: ${email}`,
              `Subject: ${subject || "General Inquiry"}`,
              ``,
              `Message:`,
              message,
              ``,
              `---`,
              `Sent via Global DevRel contact form`,
            ].join("\n"),
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="border-bottom: 2px solid #E63B2E; padding-bottom: 16px; margin-bottom: 24px;">
                  <h2 style="margin: 0; color: #1A1A1A; font-size: 20px;">New Contact Form Submission</h2>
                  <p style="margin: 4px 0 0; color: #8A8578; font-size: 14px;">globaldevrel.com</p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 8px 0; color: #8A8578; font-size: 14px; width: 80px; vertical-align: top;">Name</td>
                    <td style="padding: 8px 0; color: #1A1A1A; font-size: 14px;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8A8578; font-size: 14px; vertical-align: top;">Email</td>
                    <td style="padding: 8px 0; color: #1A1A1A; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #E63B2E;">${escapeHtml(email)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8A8578; font-size: 14px; vertical-align: top;">Subject</td>
                    <td style="padding: 8px 0; color: #1A1A1A; font-size: 14px;">${escapeHtml(subject || "General Inquiry")}</td>
                  </tr>
                </table>
                <div style="background: #FAF7F2; padding: 20px; border-left: 3px solid #E63B2E;">
                  <p style="margin: 0; color: #8A8578; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
                  <p style="margin: 0; color: #1A1A1A; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
                </div>
                <p style="margin-top: 24px; color: #8A8578; font-size: 12px;">Sent via Global DevRel contact form</p>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          return jsonResponse(
            {
              success: true,
              message: "Thank you! Your message has been sent. We'll get back to you soon.",
            },
            200,
            origin,
            allowedOrigin
          );
        } else {
          const errorData = await emailResponse.json().catch(() => ({}));
          console.error("Resend error:", emailResponse.status, JSON.stringify(errorData));
          return jsonResponse(
            {
              success: false,
              error: "Unable to send message right now. Please try again or email us directly.",
            },
            500,
            origin,
            allowedOrigin
          );
        }
      } catch (err) {
        console.error("Worker error:", err);
        return jsonResponse(
          {
            success: false,
            error: "Something went wrong. Please try again or email us directly.",
          },
          500,
          origin,
          allowedOrigin
        );
      }
    }

    // All other routes → 404
    return jsonResponse(
      { error: "Not found" },
      404,
      origin,
      allowedOrigin
    );
  },
};

/** Escape HTML to prevent XSS in email content */
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
