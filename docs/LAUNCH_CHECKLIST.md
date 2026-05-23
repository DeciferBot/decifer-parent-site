# DECIFER Launch Checklist

> Pre-launch tasks for www.decifer.io. Last updated: May 2026.

Tick off each item before announcing publicly.

---

## Infrastructure

- [ ] **Cloudflare Redirect Rule** — Add a native Cloudflare Redirect Rule for `decifer.io/*` → `https://www.decifer.io/$1` (301). Currently handled via Next.js `next.config.ts`, which works. A Cloudflare edge rule is faster and removes the Vercel hop. Requires `zone:rulesets:edit` permission on the Cloudflare API token.

- [ ] **SSL: Full (Strict)** — Upgrade Cloudflare SSL mode from "Full" to "Full (Strict)" in: Cloudflare Dashboard > SSL/TLS > Overview. Requires Vercel's origin certificate to be confirmed valid, which it is. This prevents any potential MITM between Cloudflare and Vercel.

- [ ] **DNSSEC** — Enable DNSSEC for `decifer.io` in: Cloudflare Dashboard > DNS > Settings > Enable DNSSEC. Then add the DS record at the domain registrar. Only do this once the registrar is confirmed and nameservers are stable.

- [ ] **Vercel domain verification** — Complete the Vercel domain ownership verification email if prompted. Check the Vercel dashboard > decifer-parent-site > Domains. Both `www.decifer.io` and `decifer.io` should show as Verified.

- [ ] **Vercel production branch** — Confirm the production branch is `main` in: Vercel Dashboard > decifer-parent-site > Settings > Git.

---

## Legal and compliance

- [ ] **Legal review** — All 7 legal pages are currently early-access drafts. Engage a qualified legal adviser to review and finalise before commercial launch:
  - Privacy Policy
  - Terms of Use
  - Financial Information Disclaimer
  - Education Disclaimer
  - AI Accuracy and Source Policy
  - Child Safety Policy
  - Refund Policy

- [ ] **FCA consideration** — If Decifer Trading is publicly accessible and provides market intelligence in the UK, seek legal advice on whether FCA authorisation or an exemption applies.

- [ ] **GDPR / UK GDPR** — Register with the ICO as a data controller if not already done.

- [ ] **Children's Code (Age Appropriate Design Code)** — Review compliance before Decifer Learning launches publicly to UK users under 18.

- [ ] **Cookie banner** — Add a compliant cookie consent banner if analytics or tracking cookies are activated.

---

## Analytics

- [ ] **Choose analytics provider** — Options: Vercel Analytics (built-in, privacy-friendly), Plausible, PostHog, or GA4. Decision required before launch.

- [ ] **Configure `NEXT_PUBLIC_ANALYTICS_ID`** — Add to Vercel environment variables once provider is chosen.

- [ ] **Verify events are firing** — Confirm these events are tracked correctly in the analytics tool:
  - `early_access_viewed`
  - `early_access_submitted`
  - `product_card_clicked`
  - `trading_clicked`
  - `learning_clicked`

---

## Early access capture

- [ ] **Configure `RESEND_API_KEY`** — Add to Vercel environment variables (production + preview) to enable email notification on form submission. Without this, submissions are still logged to Vercel Function logs but no email is sent.

- [ ] **Set up Supabase table (optional but recommended)** — Create an `early_access` table and add `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` to Vercel env vars. Uncomment the Supabase block in `src/app/api/early-access/route.ts`.

  Recommended table schema:
  ```sql
  create table early_access (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    interest text not null,
    message text,
    created_at timestamptz default now()
  );
  ```

- [ ] **Test form end-to-end** — Submit a test entry on the live site. Confirm the email is received and/or the Supabase row is created.

- [ ] **Set up spam filter** — Monitor Vercel logs for honeypot triggers. If spam volume is high, consider adding rate limiting to the API route.

---

## Content

- [ ] **Remove "Early Access Draft" notices** from legal pages once legal review is complete.

- [ ] **Update "Effective date"** on each legal page once they are finalised.

- [ ] **Write full legal document bodies** for each of the 7 policy pages (currently draft quality).

- [ ] **Add a Pricing section** — The nav links to `#pricing` but no Pricing section exists yet. Either add one or remove the nav link before launch.

- [ ] **Hero A/B test** — Consider testing the hero headline and CTA before broad traffic.

---

## Performance and quality

- [ ] **Lighthouse audit** — Run Lighthouse on the live site. Target: Performance 90+, Accessibility 95+, Best Practices 95+.

- [ ] **Mobile test** — Manually test on iOS Safari and Android Chrome. Especially the early access form and nav hamburger.

- [ ] **Cross-browser test** — Safari, Chrome, Firefox, Edge.

- [ ] **Check OG image** — Add an `opengraph-image` file to `src/app/` for social sharing previews.

- [ ] **Add `robots.txt` and `sitemap.xml`** — Next.js can generate these automatically. Add `src/app/robots.ts` and `src/app/sitemap.ts`.

---

## Security

- [ ] **Confirm no secrets in repo** — Run `git log --all -p | grep -i "api_key\|secret\|password"` to verify.

- [ ] **Add rate limiting to the API route** — Consider adding a simple IP-based rate limit to `/api/early-access` to prevent abuse.

- [ ] **Review Content Security Policy** — Add a CSP header via `next.config.ts` headers before launch.

---

## Go/Hold

All items in **Legal and compliance**, **Early access capture**, and **Infrastructure** must be complete before promoting DECIFER publicly.

Analytics and content items can be completed in parallel with the soft launch.
