# DECIFER — Parent Marketing Site

Marketing website for [decifer.io](https://www.decifer.io) — the parent brand for DECIFER, an AI intelligence company.

Built with Next.js 15, TypeScript, and Tailwind CSS v4. Deployed on Vercel.

---

## Prerequisites

- Node.js 20+
- npm 10+

---

## Local development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local and fill in any values you want active locally

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

See [`.env.example`](.env.example) for all supported variables.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Optional | Sends email notification on early-access form submission. Without this, submissions are logged to Vercel Function logs only. |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for storing early-access submissions. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Supabase service role key (server-side only). Uncomment the Supabase block in `src/app/api/early-access/route.ts` to activate. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional | Analytics provider ID (e.g. GA4 measurement ID). Add alongside the analytics script tag in `src/app/layout.tsx`. |

Set these in Vercel Dashboard > Project > Settings > Environment Variables for production and preview.

---

## Project structure

```
src/app/
  components/
    DeciferMark.tsx      # Shared ‹ DECIFER › wordmark
    Nav.tsx              # Fixed header with mobile hamburger
    Footer.tsx           # 4-column footer with legal links
    LegalLayout.tsx      # Shared layout for all legal pages
    EarlyAccessForm.tsx  # Early-access sign-up form (client component)
  api/
    early-access/
      route.ts           # POST handler: validates, logs, emails via Resend
  legal/
    privacy/
    terms/
    financial-disclaimer/
    education-disclaimer/
    ai-policy/
    child-safety/
    refunds/
  globals.css            # Tailwind v4 design tokens and base styles
  layout.tsx             # Root layout with Inter font and metadata
  page.tsx               # Homepage
docs/
  BRAND_GUIDELINES.md    # Naming, colour, tone, disclaimer language
  LAUNCH_CHECKLIST.md    # Pre-launch tasks (infrastructure, legal, analytics)
```

---

## Available scripts

```bash
npm run dev       # Development server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server locally
npm run lint      # ESLint
```

---

## Deployment

The site deploys automatically on every push to `main` via Vercel.

Production URL: [https://www.decifer.io](https://www.decifer.io)

The apex domain (`decifer.io`) redirects to `www` via Next.js redirects in `next.config.ts`.

---

## Related products

| Product | Domain | Notes |
|---|---|---|
| Decifer Trading | decifertrading.com | Separate repo and deployment |
| Decifer Learning | deciferlearning.com | Separate repo and deployment |

Do not modify DNS, Cloudflare, or Vercel settings for those domains from this repo.
