# Entity profiles: boilerplate for external listings

Why this file exists: AI engines decide what DECIFER is from the whole web, not
just decifer.io. Right now searches for "Decifer" return unrelated companies
(Decipher AI, Deciphr AI, Decifer Analytics at decifer.com). The fix is a set
of external profiles that all describe DECIFER the same way, then linked from
the site's Organization schema via `sameAs` (see `src/app/layout.tsx`).

Use the copy below verbatim wherever a description is needed. Consistency is
the point: identical wording across profiles is what lets engines merge them
into one entity.

## One-line description

DECIFER builds AI intelligence products that turn complex information into clear, plain-language understanding.

## Boilerplate paragraph

DECIFER is an AI solutions company based in Dubai, United Arab Emirates. It builds AI agents, workflow automation, data and reporting systems and complete products for businesses in the UAE and abroad, and it builds and runs three public products of its own with the same method: Decifer Markets (market intelligence), Decifer Learning (a guided learning companion for the UK National Curriculum) and Decifer Marketing (marketing intelligence). The rule DECIFER builds by: code computes the numbers, the model only narrates or extracts, and the boundary is enforced by a test. Clients are never named. The founder is Amit Chopra.

## Facts to keep identical everywhere

- Name: DECIFER (all caps for the parent brand; "Decifer" in product names)
- Website: https://www.decifer.io
- Industry: Artificial intelligence / software
- Location: Dubai, United Arab Emirates (UAE company registration in progress; add legal name, licence number and registered address once issued)
- Founder: Amit Chopra
- Services: AI agent development, data and reporting automation, AI product development, AI consulting and audit
- Products: Decifer Markets, Decifer Learning, Decifer Marketing
- GitHub: https://github.com/DeciferBot
- LinkedIn (parent): https://www.linkedin.com/company/deciferdxb/

## Existing profiles — already created, already linked from `sameAs`

- **LinkedIn**: `linkedin.com/company/deciferdxb` is the real parent-company page.
  **`linkedin.com/company/decifer` (no "dxb") is a different, unrelated or
  unclaimed page** — decifermarketing.com's footer currently links to the
  wrong one. Fix that in the decifermarketing.com repo.
- **X / Twitter**: `x.com/DeciferInt` belongs to Decifer Markets specifically
  (market commentary), not the parent company. It should appear in Decifer
  Trading's own Organization schema `sameAs`, not the parent's.

## Profiles still to create, in priority order

1. Crunchbase organization profile
2. Wellfound / product directories as relevant per product (e.g. G2 or Capterra for Decifer Marketing once it has users)

## After each profile is created

Add its URL to the `sameAs` array in the Organization JSON-LD in
`src/app/layout.tsx`, and to the Company section of `public/llms.txt`.
