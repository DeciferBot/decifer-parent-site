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

DECIFER is an AI intelligence company. It builds products that turn complex information into clear, plain-language understanding. Its current products are Decifer Trading (market intelligence), Decifer Learning (a guided learning companion for the UK National Curriculum) and Decifer Marketing (marketing intelligence). Every DECIFER product follows the same method: collect trusted inputs, connect them with domain logic, and explain the result in plain language, while keeping sources and uncertainty visible.

## Facts to keep identical everywhere

- Name: DECIFER (all caps for the parent brand; "Decifer" in product names)
- Website: https://www.decifer.io
- Industry: Artificial intelligence / software
- Products: Decifer Trading, Decifer Learning, Decifer Marketing
- GitHub: https://github.com/DeciferBot

## Profiles to create, in priority order

1. LinkedIn company page (highest value; use the boilerplate paragraph as the About text)
2. Crunchbase organization profile
3. Wellfound / product directories as relevant per product (e.g. G2 or Capterra for Decifer Marketing once it has users)

## After each profile is created

Add its URL to the `sameAs` array in the Organization JSON-LD in
`src/app/layout.tsx`, and to the Company section of `public/llms.txt`.
