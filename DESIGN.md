# Design

Visual system for decifer.io. Written 2026-08-23, revised 2026-08-24 to the "control room" direction after founder feedback (no bold single-colour headlines). Tokens live in `src/app/globals.css`.

## The direction in one line

A control room on paper: a grey ground, white panels with instrument labels, serif headlines at medium weight, one dark systems board, orange reserved for the rule panel and the CTA panel.

## Scene

An operations director in a Dubai office at 11am, on a MacBook, reading a link a colleague forwarded with the note "these people seem real". Bright room, forty seconds of attention. That forces a light theme, high contrast, proof above the fold, and no decoration that has to be explained.

## Colour strategy

Committed. One saturated colour (Decifer orange) carries whole sections, not just buttons. Cool-neutral greys everywhere else so the orange reads as the only warm thing on the page. Three surfaces, used as art direction per section:

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Ground | `--color-canvas` | `oklch(96% 0.004 250)` | The page itself |
| Panel | `--color-panel` | `#ffffff` | White cards on the ground; most content lives here |
| Board | `--color-dark` | `oklch(17% 0.014 255)` | The systems board and the footer |
| Ink | `--color-ink` | `oklch(18% 0.012 250)` | Headings, primary text |
| Body | `--color-ink-2` | `oklch(32% 0.012 250)` | Paragraphs |
| Muted | `--color-ink-3` | `oklch(46% 0.014 250)` | Captions, metadata (5:1 on white) |
| Line | `--color-line` | `oklch(89% 0.006 250)` | Hairlines, table rules |
| Line strong | `--color-line-2` | `oklch(78% 0.008 250)` | Input borders, emphasised rules |
| Orange | `--color-orange` | `#F05A28` | Mark, buttons, drench sections. Locked. |
| Orange text | `--color-orange-text` | `oklch(52% 0.19 36)` | Orange used as small text on white (5:1) |
| Dark | `--color-dark` | `oklch(15% 0.012 250)` | The products section and footer |
| On dark | `--color-on-dark` | `oklch(96% 0.004 250)` | Text on the dark surface |

Rules:
- On orange, text is ink (6:1), never white below 24px.
- Primary buttons are ink text on orange. Distinctive and passes AA.
- Product accent colours (blue, violet, teal) from `products.ts` appear only as a small status dot on product cards. They do not colour the parent site.

## Typography

Two families. Source Serif 4 at weight 500 for every heading: quiet authority, nothing shouts. Schibsted Grotesk for body, labels, buttons and data (it was drawn for a newspaper group, built for reporting and dense text). The one uppercase device is the `label` class, used only as a panel or board header.

| Level | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- |
| Display (h1 home) | `clamp(2.5rem, 1.4rem + 4.2vw, 4.5rem)` | 700 | -0.025em | 1.02 |
| H1 (inner pages) | `clamp(2.25rem, 1.4rem + 3vw, 3.5rem)` | 700 | -0.022em | 1.05 |
| H2 | `clamp(1.75rem, 1.2rem + 2vw, 2.75rem)` | 700 | -0.02em | 1.08 |
| H3 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 600 | -0.01em | 1.2 |
| Lede | 1.125rem to 1.25rem | 400 | 0 | 1.55 |
| Body | 1rem | 400 | 0 | 1.6 |
| Small | 0.875rem | 400 or 500 | 0 | 1.5 |
| Mono (only inside log or code mockups) | 0.8125rem | 400 | 0 | 1.5 |

Body measure caps at 68ch. `text-wrap: balance` on headings, `pretty` on prose. No uppercase tracked eyebrows. No numbered section markers except inside a real ordered process.

## Layout

- Container 1200px, gutter `clamp(1.25rem, 4vw, 2.5rem)`.
- Section padding `clamp(4rem, 9vw, 7.5rem)` vertical. Home sections are separated by a single hairline, not by background changes, except the orange and dark bands.
- Section heading cadence: a two-column row. H2 in the left five columns, lede in the right six. Content follows full width.
- Lists of services and cases are ruled rows, not card grids. Cards appear only where an image needs a frame (product screenshots).
- Radius: 4px on buttons and inputs, 8px on image frames, pill on status chips. Nothing above 12px.
- Hairlines are 1px `--color-line`. No drop shadows except a 0 2px 8px at 6% on the hero scope sheet.

## Imagery

- Real product screenshots in `public/products/*.webp`, captured 2026-08-23 at 1440x900 @2x. Framed with a 1px line and 8px radius. No fake browser chrome.
- The hero visual is an example agent scope sheet and action log built in HTML. It is labelled as an example. It depicts two things the AI agents service delivers: a written boundary and a readable log.
- Stack logos via `simple-icons`, rendered in each maker's own brand colour (revised 2026-08-25, replacing the ink-at-60% monochrome treatment: at a glance a reader should recognise the tool, not decode a silhouette). Two tools have no mark in the set, OpenAI and Meta's Llama, and fall back to a monogram tile rather than a borrowed or approximated logo. On the dark board the marks inherit the text colour instead, where brand colours lose contrast. Colour here is recognition, not endorsement, and the caption under every logo surface says so.
- Founder photo slot at `public/founder/amit-chopra.jpg`. If absent, the block renders name and role without a placeholder face.

## Motion

Easing: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for entrances and hovers. `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement.

- Page load (home only): headline, lede, buttons rise 12px and fade in, 480ms, 60ms stagger. The scope sheet reveals with `clip-path: inset(0 0 100% 0)` to `inset(0)` over 700ms. Nothing else on load.
- Buttons: `scale(0.97)` on `:active`, 160ms.
- Links in lists: arrow translates 4px on hover, 200ms.
- Product screenshots: clip-path reveal when they enter the viewport, once.
- Nav: hairline appears on scroll; no blur.
- Reduced motion: all transforms and clip-paths removed, opacity-only, 200ms.

## Components

- `Button` (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-on-orange`, `.btn-on-dark`).
- `SectionHead` (h2 + lede two-column row).
- `RuledList` pattern: `ul` with `border-t` on each `li`, padding block 1.5rem to 2rem.
- `Frame` for screenshots.
- `LogoRow` for stack logos.
- `FaqList` using native `details`/`summary`.
- `EnquiryForm` with 4px inputs, 1px `--color-line-2` border, orange focus ring 2px.
