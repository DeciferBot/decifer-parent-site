# Decifer Brand Guidelines

> Internal reference. Last updated: 23 August 2026 (marketing overhaul). Visual system detail lives in `DESIGN.md` at the repo root.

---

## Parent brand

**Decifer** (title case) is the parent company and platform.

Changed 23 August 2026: the three product sites all set the wordmark as `Decifer`, so the parent site now matches. Write `Decifer` in marketing, product and email copy. The all-caps form survives only in existing legal pages (untouched until the UAE registration is issued) and in code comments and log tags.

---

## Product naming

Product names use title case. Never all caps for product names.

| Product | Correct | Incorrect |
|---|---|---|
| Market intelligence | Decifer Markets | DECIFER MARKETS |
| AI-assisted learning | Decifer Learning | DECIFER Learning |
| Marketing intelligence | Decifer Marketing | DECIFER MARKETING |
| Personal finance (future) | Decifer Money | DECIFER Money |
| Global context (future) | Decifer World | DECIFER World |
| Work intelligence (future) | Decifer Work | DECIFER Work |

When referring to a product within a sentence, use: "Decifer Markets" or "the Decifer Markets product". Do not add a comma after "Decifer".

---

## Logo and wordmark

> Full mark system documentation: `docs/DECIFER_BRAND_MARK_SYSTEM.md`

**The DECIFER mark** is two opposing orange angle brackets, facing each other like two voices in dialogue.

- Both brackets are `#F05A28` (DECIFER orange). Never split the colours.
- The left bracket is offset slightly upward; the right bracket is offset slightly downward.
- The mark is SVG-based. Do not recreate it as text characters or guillemets.

**Components:**
- `DeciferMark` — bracket symbol only
- `DeciferLogo` — mark + DECIFER wordmark (use in nav and footer)
- `DeciferProductLogo` — mark + DECIFER + product name (use in product headers)

**Static assets:** `/public/brand/decifer-*.svg`

**Do not:**
- Use the old guillemet mark (`‹ DECIFER ›`) — it is retired
- Use blue or purple for the brackets
- Recreate the mark as keyboard characters (`< >`)
- Stretch, rotate, or distort the mark

---

## Colour palette

Light theme, cool-neutral greys, one committed orange. Full token list in `src/app/globals.css` and `DESIGN.md`.

| Token | Value | Usage |
|---|---|---|
| `--color-orange` | `#F05A28` | Locked. The mark, primary buttons, the orange drench sections (the rule, the CTA band) |
| `--color-orange-text` | `oklch(52% 0.19 36)` | Orange as small text or links on white (passes AA) |
| `--color-canvas` | `#FFFFFF` | Page background |
| `--color-surface` | `oklch(97% 0.004 250)` | Quiet panels |
| `--color-dark` | `oklch(15% 0.012 250)` | The products band and the footer only |
| `--color-ink` | `oklch(18% 0.012 250)` | Headings |
| `--color-body` | `oklch(32% 0.012 250)` | Paragraphs |
| `--color-muted` | `oklch(46% 0.014 250)` | Metadata (5:1 on white) |
| `--color-line` | `oklch(89% 0.006 250)` | Hairlines |
| `--color-live` | `oklch(52% 0.15 155)` | Live status |

Rules: text on orange is ink, never white below 24px. Product accent colours (blue, violet, teal) appear only as a small status dot on product cards. No gradients, no glows, no dot grids.

---

## Typography

One family: **Schibsted Grotesk** (variable), loaded via `next/font/google` as `--font-grotesk`. Hierarchy comes from weight and size, not from a second face.

| Role | Class | Style |
|---|---|---|
| Home headline | `.t-display` | 700, clamp to 68px, -0.025em |
| Page headline | `.t-h1` | 700, clamp to 56px, -0.022em |
| Section headline | `.t-h2` | 700, clamp to 44px, -0.02em |
| Sub heading | `.t-h3` | 600, 20 to 24px |
| Lede | `.t-lede` | 400, 17 to 20px, 1.55 leading |
| Body | `.t-body` | 400, 16px, 1.6 leading |
| Mono | `.t-mono` | System mono, only inside log or code examples |

No uppercase tracked labels above sections. No numbered section markers unless the section is a real ordered sequence.

---

## Tone of voice

**DECIFER writes like a knowledgeable colleague, not a press release.**

- **Plain English.** Write as if explaining to a smart person who is busy. No jargon for its own sake.
- **Confident, not arrogant.** State things clearly. Do not hedge everything to the point of saying nothing.
- **Commercially credible.** This is a product people trust with real decisions. Write accordingly.
- **No fake excitement.** Do not use exclamation marks in product copy. Do not write "game-changing", "revolutionary", or "unleash".
- **No overclaiming.** Do not imply DECIFER can predict markets, guarantee learning outcomes, or eliminate risk.

---

## Words to avoid

| Avoid | Use instead |
|---|---|
| Em dash `—` | Rewrite the sentence. Use a comma or full stop. |
| "Game-changing" | Describe what it actually does |
| "Revolutionary" | Describe what it actually does |
| "Cutting-edge AI" | "AI-assisted interpretation" |
| "Powerful" | Be specific |
| "Seamless" | Be specific |
| "Leverage" (verb) | Use / apply |
| "Unlock" | Give access to |
| "Curate" (overused) | Organise / select |
| "Ecosystem" | Platform / suite |
| "Journey" | Use, experience |
| "Alpha" (trading) | Only use if context is specific |

---

## Disclaimer language

These phrases must appear wherever relevant. Do not soften or remove them.

**Trading / finance:**
> DECIFER provides intelligence, not financial advice. Nothing on this platform constitutes a recommendation to buy, sell, or hold any security or asset. Financial markets carry risk. Your decisions are your own.

**Learning / education:**
> Decifer Learning supports learning. It does not replace qualified teachers, tutors, or formal education. We make no claims about academic outcomes.

**Marketing:**
> Decifer Marketing provides marketing insight, not a substitute for professional marketing advice. It is for research and context only. We make no guarantees about campaign performance or results.

**AI outputs:**
> AI-generated outputs are source-referenced and confidence-bounded. They may contain errors. Apply your own judgement for important decisions.

**Children:**
> Decifer Learning is designed for children in supervised, age-appropriate contexts. Parental oversight is part of the design.

---

## CTA hierarchy

1. **Primary CTA:** "Discuss a business process" (bg-brand, white text)
2. **Secondary CTA:** "See the work" (bordered, muted text)
3. **Product link:** "Visit Decifer Markets / Decifer Learning" (text link with arrow)

Avoid: "Sign Up", "Start Free", "Try Now" (too generic or implies a free tier that may not exist), and "Join Early Access" (the early-access signup was retired on 2026-08-24 with the repositioning).

---

## Analytics event names

Standard events to use across all DECIFER product surfaces:

| Event | When to fire |
|---|---|
| `early_access_viewed` | User scrolls to or lands on the early access section |
| `early_access_submitted` | Successful form submission |
| `product_card_clicked` | Any product card interaction |
| `trading_clicked` | Decifer Markets card or link clicked |
| `learning_clicked` | Decifer Learning card or link clicked |
| `marketing_clicked` | Decifer Marketing card or link clicked |
| `legal_page_viewed` | Any legal page visited |

---

*This document should be reviewed before commercial launch and updated as the brand evolves.*
