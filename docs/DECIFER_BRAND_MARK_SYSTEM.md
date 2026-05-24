# DECIFER Brand Mark System

> Locked: May 2026. This document defines the master mark and sub-brand lockup system.
> All product surfaces must use components or assets from this system — no ad-hoc recreations.

---

## The idea

The DECIFER mark is two opposing angle brackets facing each other, like two voices in dialogue.

`< >` — human intelligence and machine intelligence in conversation, turning complexity into clarity.

The left bracket represents the question. The right bracket represents the answer. The space between them is where meaning is made.

The vertical offset is intentional. Both brackets are in motion — not at rest, not finished — because understanding is always a process.

---

## Mark construction

The master mark is an SVG polyline pair on a `40×32` viewBox.

| Element | Values |
|---|---|
| ViewBox | `0 0 40 32` |
| Left bracket | `points="13,5 5,15 13,25"` |
| Right bracket | `points="27,7 35,17 27,27"` |
| Stroke | `#F05A28` |
| Stroke width | `2.5` |
| Stroke linecap | `round` |
| Stroke linejoin | `round` |
| Fill | `none` |

**Vertical offset rule:** The left bracket is centred at `y=15`. The right bracket is centred at `y=17`. Offset is 2 units on a 20-unit arm — 10% of arm height. This is the maximum permitted offset. Do not increase it.

**Why round linecap:** Sharp linecaps make the mark read as code. Round linecaps make it read as dialogue. Do not change to `square` or `butt`.

---

## Orange

| Token | Hex | Usage |
|---|---|---|
| `--color-mark` | `#F05A28` | The DECIFER bracket mark, always |
| `mark` (Tailwind) | `#F05A28` | Same, in Tailwind contexts |

This is the only permitted colour for the master mark in primary brand use. No exceptions for Trading, Learning, or any sub-brand.

**Do not** use the site's primary brand blue (`#3d7eff`) or learning violet (`#7c5ce0`) for the bracket mark. Those are product accent colours, not mark colours.

---

## Spacing rules

**Internal gap:** The distance between the tips of the two brackets is 14 units in viewBox coordinates (x: 13 to x: 27). Do not narrow this gap. The space carries meaning.

**Clear space:** Surround the mark with a minimum clear space equal to the mark's height on all sides. On mobile at `sm` size (18px mark height), that is 18px of clear space.

**Wordmark gap:** In horizontal lockups, the gap between the mark and the wordmark is `gap-2` (8px) at `sm`, `gap-2.5` (10px) at `md`.

---

## Minimum size

| Context | Minimum mark height |
|---|---|
| Nav header | 14px (xs) |
| Footer brand | 18px (sm) |
| Hero lockup | 30px (lg) |
| App icon | 512px SVG (or 192px PNG) |
| Favicon | 32px viewBox SVG |

Below 14px the offset and round caps are not legible. Use the favicon version (thicker stroke, `2.75`) for sizes under 20px.

---

## Correct usage

- Orange brackets (`#F05A28`) on dark or light backgrounds
- Both brackets the same colour — never split the colours
- Mark with DECIFER wordmark in bold, tracked wide, uppercase
- Sub-brand product name in regular weight, title case, muted colour
- SVG source files from `/public/brand/` or React components from `components/ui/`

---

## Incorrect usage

- Do not use guillemets `‹ ›` (U+2039 / U+203A) as a substitute — they are not the mark
- Do not use standard keyboard `<` `>` ASCII characters as a substitute
- Do not use blue (`#3d7eff`) or purple (`#7c5ce0`) for the bracket mark
- Do not split the bracket colours (blue left, purple right) — that is the old system
- Do not rotate, skew, or distort the mark
- Do not add drop shadows, gradients, or glow to the mark itself (use page-level decoration only)
- Do not increase the vertical offset beyond 10% of arm height
- Do not decrease the offset to zero — the mark must have asymmetry
- Do not add a stroke to the wordmark to match the mark weight
- Do not recreate the mark as text characters

---

## Asset files

All brand assets live at `/public/brand/` in each product repo.

| File | Use |
|---|---|
| `decifer-mark.svg` | Standalone bracket mark, transparent bg |
| `decifer-favicon.svg` | Favicon, 32×32 viewBox, thicker stroke |
| `decifer-app-icon.svg` | App icon, 512×512, dark rounded bg |
| `decifer-wordmark.svg` | DECIFER text only, light bg |
| `decifer-lockup-horizontal.svg` | Mark + wordmark, side by side, light bg |
| `decifer-lockup-stacked.svg` | Mark above wordmark, centred, light bg |
| `decifer-trading-lockup.svg` | DECIFER Trading product lockup |
| `decifer-learning-lockup.svg` | DECIFER Learning product lockup |

**Note:** SVG text nodes in lockup files use `font-family="'DM Sans', system-ui, sans-serif"`. For use outside web contexts (print, email, OG image generation), convert text to paths in a design tool.

---

## React components

| Component | File | Purpose |
|---|---|---|
| `DeciferMark` | `components/DeciferMark.tsx` | SVG bracket symbol only |
| `DeciferLogo` | `components/DeciferLogo.tsx` | Mark + DECIFER wordmark lockup |
| `DeciferProductLogo` | `components/DeciferProductLogo.tsx` | Mark + DECIFER + product name |

### DeciferMark props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `size` | `xs\|sm\|md\|lg\|xl` | `md` | Maps to px heights: 14/18/22/30/44 |
| `color` | `string` | `#F05A28` | Override only for inverted/monochrome contexts |
| `className` | `string` | `''` | Additional CSS classes |

### DeciferLogo props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `size` | `xs\|sm\|md\|lg\|xl` | `md` | Scales both mark and wordmark |
| `className` | `string` | `''` | Additional CSS classes |

### DeciferProductLogo props (decifer-learning)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `product` | `string` | required | e.g. `"Learning"`, `"Trading"` |
| `size` | `xs\|sm\|md\|lg` | `md` | |
| `className` | `string` | `''` | |

---

## Product lockup rules

Sub-brand lockups use the master mark unchanged. The mark is never recoloured for sub-brands.

**Format:** `[mark] DECIFER [product]`

- `DECIFER` — bold, tracked wide, uppercase, `text-ink`
- `[product]` — medium weight, title case, `text-muted`
- Separated by a single space (no divider, slash, or pipe)

**Products:**
- DECIFER Trading
- DECIFER Learning
- DECIFER Money (future)
- DECIFER World (future)
- DECIFER Work (future)

---

## Favicon rules

Use `decifer-favicon.svg` as the primary favicon. This version uses:
- `32×32` viewBox (square, browser-optimised)
- Stroke width `2.75` (heavier than the standard `2.5`, for legibility at 16–32px)
- Slightly larger vertical offset (4px on 16px arm = 25%) for recognisability at small sizes

For Safari pinned tabs and older IE, a fallback PNG favicon (32×32) is a non-blocker follow-up.

---

## App icon rules

The app icon (`decifer-app-icon.svg`) uses:
- `512×512` viewBox
- `rx="112"` rounded rectangle background (`#060B18`) — approximately iOS squircle
- Mark centred at `(256, 256)` with 10% offset maintained at scale
- Stroke width `18` (equivalent to `2.5` at standard 40×32 scale)

For PWA use, generate 192×192 and 512×512 PNG exports from this SVG. The manifest references these PNGs. SVG icons are declared in Next.js metadata for browser favicon use.

---

## Motion rules

The bracket mark may animate in two ways only:

1. **Entry:** Each bracket slides in from outside the viewport on its respective side (left bracket from left, right bracket from right), meeting at the final position. Duration 0.4s, ease-out.

2. **Idle pulse:** A very subtle scale pulse (1.0 → 1.02 → 1.0) on hover, duration 0.3s, ease-in-out. Applied to the mark container, not individual brackets.

Do not animate the vertical offset. Do not animate the colour. Do not use rotation or spin.
