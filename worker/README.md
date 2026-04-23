# Global DevRel — Contact Form Worker

A Cloudflare Worker that handles contact form submissions from globaldevrel.com and forwards them as emails via MailChannels.

## How It Works

1. The frontend POSTs to `https://api.globaldevrel.com/api/contact`
2. The Worker validates the payload and checks the honeypot field
3. If valid, it sends an email via MailChannels (free for Cloudflare Workers)
4. The email is delivered to `consulting@globaldevrel.com`

## Setup

### Prerequisites
- A Cloudflare account
- The `globaldevrel.com` domain added to Cloudflare (for custom routing)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed

### Deploy

```bash
# Install Wrangler if needed
npm install -g wrangler

# Authenticate
wrangler login

# Deploy
cd globaldevrel-contact-worker
npx wrangler deploy
```

### Environment Variables

Set these in the Cloudflare dashboard (Workers → globaldevrel-contact → Settings → Variables):

| Variable | Value | Description |
|----------|-------|-------------|
| `RECIPIENT_EMAIL` | `consulting@globaldevrel.com` | Where form submissions are delivered |
| `ALLOWED_ORIGIN` | `https://globaldevrel.com` | Frontend origin for CORS |

### Custom Domain

To use `api.globaldevrel.com`:

1. In Cloudflare dashboard, go to Workers → globaldevrel-contact → Triggers
2. Add a Custom Domain: `api.globaldevrel.com`
3. Cloudflare will automatically create the DNS record

### MailChannels DNS Setup

For MailChannels to work with your domain, add this DNS TXT record:

```
Type: TXT
Name: _mailchannels
Value: v=mc1 cfid=globaldevrel-contact.workers.dev
```

And an SPF record (or update existing):

```
Type: TXT
Name: @
Value: v=spf1 include:relay.mailchannels.net -all
```

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

## Pattern

This follows the same architecture as `api.dvinnik.dev` — a standalone Cloudflare Worker on an `api.` subdomain, handling CORS and email delivery independently from the static frontend.
