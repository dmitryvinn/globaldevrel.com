/*
  EDITORIAL DESIGN — Contact Section
  Real contact form with honeypot spam protection, status states, and validation.
  Modeled after dvinnik.dev contact form pattern.
  Left: headline + contact info + consulting topics.
  Right: form with proper validation and status feedback.
  Ready to connect to Cloudflare Worker endpoint.
*/

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Cloudflare Worker endpoint — same pattern as api.dvinnik.dev
const WORKER_URL = "https://globaldevrel-contact.dmitryvinn.workers.dev";

const consultingTopics = [
  "DevRel Program Strategy & Audit",
  "Developer Content Production",
  "Community Building & Architecture",
  "Conference Speaking & Event Strategy",
  "DX & Documentation Review",
  "DevRel Hiring & Team Building",
  "Podcast Production & Hosting",
  "AI-Readiness & Agent Relations",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    honeypot: "", // spam trap — hidden field
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot is filled, silently "succeed" (it's a bot)
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    // Validate message length
    if (formData.message.length < 10) {
      setStatus("error");
      setErrorMessage("Please provide a bit more detail (at least 10 characters).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // If Worker URL is configured, use it
    if (WORKER_URL) {
      try {
        const response = await fetch(`${WORKER_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          setFormData({ name: "", email: "", company: "", subject: "", message: "", honeypot: "" });
        } else {
          setStatus("error");
          setErrorMessage(data.error || "Something went wrong. Please try again.");
        }
      } catch {
        setStatus("error");
        setErrorMessage("Unable to send message. Please try again or reach out via LinkedIn.");
      }
    } else {
      // Fallback: open mailto
      const subject = encodeURIComponent(
        formData.subject || `DevRel Consulting Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:consulting@globaldevrel.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setFormData({ name: "", email: "", company: "", subject: "", message: "", honeypot: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#1A1A1A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — headline + contact info + topics */}
          <div className="lg:col-span-5">
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-6">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-tight mb-8">
              Let's start a{" "}
              <span className="italic text-[#E63B2E]">conversation</span>
            </h2>
            <p className="font-body text-lg text-[#8A8578] leading-relaxed mb-10">
              Whether you need a full DevRel strategy or hands-on content
              production, the first call is always free. Tell us about your
              needs and we'll find the right approach together.
            </p>

            {/* Direct contact */}
            <div className="border-t border-[#333] pt-8 space-y-4 mb-10">
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-1">
                  Email
                </p>
                <a
                  href="mailto:consulting@globaldevrel.com"
                  className="font-body text-base text-[#FAF7F2] hover:text-[#E63B2E] transition-colors duration-200"
                >
                  consulting@globaldevrel.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/dmitry-vinnik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-[#FAF7F2] hover:text-[#E63B2E] transition-colors duration-200"
                >
                  linkedin.com/in/dmitry-vinnik
                </a>
              </div>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-1">
                  Availability
                </p>
                <p className="font-body text-base text-[#FAF7F2]">
                  Available globally — remote &amp; on-site
                </p>
              </div>
            </div>

            {/* Consulting Topics */}
            <div className="border-t border-[#333] pt-8">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-4">
                Consulting Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {consultingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="font-body text-xs text-[#8A8578] border border-[#333] px-3 py-1.5 hover:border-[#E63B2E] hover:text-[#FAF7F2] transition-colors duration-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form with status states */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <CheckCircle className="w-12 h-12 text-[#E63B2E] mb-6" />
                <h3 className="font-display text-2xl font-bold text-[#FAF7F2] mb-3">
                  Message sent!
                </h3>
                <p className="font-body text-base text-[#8A8578] mb-6 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-body text-sm font-semibold text-[#E63B2E] border-b border-[#E63B2E] pb-0.5 hover:text-[#FAF7F2] hover:border-[#FAF7F2] transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — hidden from real users, bots will fill it */}
                <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this empty</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-2">
                      Name <span className="text-[#E63B2E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-[#333] text-[#FAF7F2] font-body text-base placeholder:text-[#555] focus:border-[#E63B2E] focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-2">
                      Email <span className="text-[#E63B2E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-[#333] text-[#FAF7F2] font-body text-base placeholder:text-[#555] focus:border-[#E63B2E] focus:outline-none transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-[#333] text-[#FAF7F2] font-body text-base placeholder:text-[#555] focus:border-[#E63B2E] focus:outline-none transition-colors duration-200"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-2">
                      Subject <span className="text-[#E63B2E]">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-[#333] text-[#FAF7F2] font-body text-base focus:border-[#E63B2E] focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#1A1A1A]">Select a topic...</option>
                      <option value="DevRel Strategy" className="bg-[#1A1A1A]">DevRel Strategy & Audit</option>
                      <option value="Content Production" className="bg-[#1A1A1A]">Content Production</option>
                      <option value="Community Building" className="bg-[#1A1A1A]">Community Building</option>
                      <option value="Conference & Events" className="bg-[#1A1A1A]">Conference & Events</option>
                      <option value="DX & Documentation" className="bg-[#1A1A1A]">DX & Documentation</option>
                      <option value="Hiring & Team Building" className="bg-[#1A1A1A]">Hiring & Team Building</option>
                      <option value="General Inquiry" className="bg-[#1A1A1A]">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold tracking-[0.15em] uppercase text-[#8A8578] mb-2">
                    How can we help? <span className="text-[#E63B2E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#333] text-[#FAF7F2] font-body text-base placeholder:text-[#555] focus:border-[#E63B2E] focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your DevRel needs, team size, and timeline..."
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-body text-xs text-[#555]">
                      {formData.message.length > 0 && formData.message.length < 10
                        ? "Minimum 10 characters required"
                        : "\u00A0"}
                    </span>
                    <span className="font-body text-xs text-[#555]">
                      {formData.message.length}/5000
                    </span>
                  </div>
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-[#E63B2E] font-body text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-3 font-body text-base font-semibold text-[#FAF7F2] border-b-2 border-[#E63B2E] pb-1 hover:text-[#E63B2E] transition-colors duration-200 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
