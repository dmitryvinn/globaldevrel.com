# Global DevRel — Contact Form Worker

A Cloudflare Worker that handles contact form submissions from globaldevrel.com and forwards them as emails via [Resend](https://resend.com).

## How It Works

1. The frontend POSTs to the worker's `/api/contact` endpoint
2. The Worker validates the payload and checks the honeypot field
3. If valid, it sends an email via Resend API
4. The email is delivered to the configured recipient

## Setup

### Prerequisites
- A Cloudflare account with the worker deployed
- A [Resend](https://resend.com) account (free tier: 100 emails/day)
- Your domain `globaldevrel.com` verified in Resend

### Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Go to **Domains** → **Add Domain** → enter `globaldevrel.com`
3. Add the DNS records Resend provides (MX, TXT for DKIM/SPF)
4. Wait for verification (usually a few minutes)
5. Go to **API Keys** → **Create API Key** → copy the key (`re_...`)

### Deploy

```bash
npm install -g wrangler    # if not already installed
wrangler login
cd worker
npx wrangler deploy
```

### Environment Variables

Set these in the Cloudflare dashboard (Workers → globaldevrel-contact → Settings → Variables):

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_...` | Your Resend API key |
| `RECIPIENT_EMAIL` | `consulting@globaldevrel.com` | Where form submissions are delivered |
| `ALLOWED_ORIGIN` | `https://globaldevrel.com` | Frontend origin for CORS |

**Important:** Mark `RESEND_API_KEY` as encrypted in the Cloudflare dashboard.

### Custom Domain (Optional)

To use `api.globaldevrel.com`:

1. In Cloudflare dashboard, go to Workers → globaldevrel-contact → Settings → Domains & Routes
2. Add Custom Domain: `api.globaldevrel.com`
3. Cloudflare will automatically create the DNS record

## API

### POST /api/contact

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "DevRel Strategy",
  "message": "We're looking for help with...",
  "honeypot": ""
}
```

**Success response (200):**
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent. We'll get back to you soon."
}
```

**Error response (400/500):**
```json
{
  "success": false,
  "error": "Name, email, and message are required."
}
```
