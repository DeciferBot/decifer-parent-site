# DECIFER Brand Guidelines

> Internal reference. Last updated: May 2026.

---

## Parent brand

**DECIFER** (all caps) is the parent company and platform.

Use `DECIFER` wherever you refer to the company, the platform as a whole, or the brand identity.

Never write `Decifer` when referring to the parent brand in marketing, product, or legal copy.

---

## Product naming

Product names use title case. Never all caps for product names.

| Product | Correct | Incorrect |
|---|---|---|
| Market intelligence | Decifer Trading | DECIFER TRADING |
| AI-assisted learning | Decifer Learning | DECIFER Learning |
| Personal finance (future) | Decifer Money | DECIFER Money |
| Global context (future) | Decifer World | DECIFER World |
| Work intelligence (future) | Decifer Work | DECIFER Work |

When referring to a product within a sentence, use: "Decifer Trading" or "the Decifer Trading product". Do not add a comma after "Decifer".

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

| Token | Hex | Usage |
|---|---|---|
| `--color-mark` | `#F05A28` | DECIFER bracket mark — all products |
| `--color-brand` | `#3d7eff` | Primary blue, CTAs, Trading accent |
| `--color-learn` | `#7c5ce0` | Learning accent, violet gradient |
| `--color-live` | `#0dc47c` | Success, live status, confirmations |
| `--color-canvas` | `#060b18` | Page background |
| `--color-surface` | `#0b1328` | Card background |
| `--color-ink` | `#eef2ff` | Primary text |
| `--color-muted` | `#5d7299` | Secondary text |
| `--color-faint` | `#2a3860` | Disabled/tertiary |
| `--color-line` | `#172038` | Borders |

---

## Typography

Font: **Inter** (loaded via `next/font/google`)

| Role | Style |
|---|---|
| Page headline | 800 weight, tight tracking, large |
| Section headline | 700 weight |
| Body | 400 weight, relaxed line-height |
| Label / caption | 500 weight, uppercase, widest tracking |
| Form input | 400 weight, 0.9375rem |

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

**AI outputs:**
> AI-generated outputs are source-referenced and confidence-bounded. They may contain errors. Apply your own judgement for important decisions.

**Children:**
> Decifer Learning is designed for children in supervised, age-appropriate contexts. Parental oversight is part of the design.

---

## CTA hierarchy

1. **Primary CTA:** "Join Early Access" (bg-brand, white text)
2. **Secondary CTA:** "Explore Products" (bordered, muted text)
3. **Product link:** "Visit Decifer Trading / Decifer Learning" (text link with arrow)

Avoid: "Sign Up", "Start Free", "Try Now" (too generic or implies a free tier that may not exist).

---

## Analytics event names

Standard events to use across all DECIFER product surfaces:

| Event | When to fire |
|---|---|
| `early_access_viewed` | User scrolls to or lands on the early access section |
| `early_access_submitted` | Successful form submission |
| `product_card_clicked` | Any product card interaction |
| `trading_clicked` | Decifer Trading card or link clicked |
| `learning_clicked` | Decifer Learning card or link clicked |
| `legal_page_viewed` | Any legal page visited |

---

*This document should be reviewed before commercial launch and updated as the brand evolves.*
