# DECIFER Digital Experience System
## Sprint 1: Design System Foundation — May 2026

> This document locks the visual language for all current and future DECIFER digital products.
> Every design decision recorded here is reasoned. No choice is aesthetic preference alone.
> Sprint 0 locked the brand mark. Sprint 1 locks the wider system.

---

## 1. Design Philosophy

DECIFER's product promise is: **structure over noise, clarity over decoration, intelligence over hype.**

Every visual decision must survive this test: does this element help the user understand something, or does it only look impressive? If the honest answer is the latter, it does not belong.

**Four operating principles:**

**1. Signal, not decoration.** Colour, motion, and emphasis are scarce resources. Use them only where they carry meaning — to distinguish hierarchy, indicate state, or direct attention. Decoration that creates visual noise without communicating anything is a failure of design, not a feature.

**2. Structure reveals intelligence.** DECIFER products work because they impose structure on complex, noisy information. The visual system must express that structure. Cards, typographic hierarchy, spacing, and data layout are not stylistic choices — they are the product.

**3. Earned trust requires restraint.** Trust in an intelligence product is eroded by visual hype. Generic AI gradients, particle animations, glow effects without function, and oversized claims undermine the very credibility the product must establish. When in doubt, do less.

**4. Consistent at the system level.** Users who move between DECIFER products should feel a family resemblance even when the colour environment changes. The mark, the type treatment, the spacing, the motion behaviour, and the proof-module style are universal. The product colour is where products differentiate.

---

## 2. Typography System

### 2.1 Font decision

DECIFER uses **two fonts, with one permitted exception**:

| Role | Font | Scope |
|---|---|---|
| Editorial display | Instrument Serif 400 | Parent site hero headlines only |
| Everything else | Inter Variable | All products, all UI, all data |

**Why Inter:** Inter is designed for screens, not paper. It renders cleanly at 12px and remains legible at 64px. Its tabular number set is essential for financial and data-heavy products. It is not beautiful in a decorative sense — it is correct in a functional sense. That is what DECIFER needs.

**Why Instrument Serif (limited):** The parent marketing site uses editorial headlines to signal intellectual ambition. Serif type in a tech context is a deliberate choice — it suggests depth over speed. This use is strictly limited to the parent site hero and section pull-quotes. It must never appear in product UIs, dashboards, or data contexts.

**What to retire:**
- Nunito (decifer-learning) — too playful for a credible intelligence product. Learning's warmth must come from design decisions, not a rounded cartoon font. Migrate to Inter in Sprint 2.
- Plus Jakarta Sans (decifer-trading) — not wrong, but inconsistent with the family. Migrate to Inter in Sprint 2.
- DM Sans (decifer.io body) — functionally similar to Inter, low-risk to migrate. Replace in Sprint 2.

### 2.2 Type scale

| Step | Size | Line-height | Tracking | Usage |
|---|---|---|---|---|
| `text-xs` | 12px / 0.75rem | 1.5 | 0.04em | Captions, labels, disclaimer text |
| `text-sm` | 14px / 0.875rem | 1.5 | 0.01em | Body copy, secondary text, UI labels |
| `text-base` | 16px / 1rem | 1.625 | 0 | Primary body, descriptions |
| `text-lg` | 18px / 1.125rem | 1.5 | -0.01em | Large body, feature descriptions |
| `text-xl` | 20px / 1.25rem | 1.4 | -0.01em | Sub-headings, card headlines |
| `text-2xl` | 24px / 1.5rem | 1.3 | -0.02em | Section titles |
| `text-3xl` | 30px / 1.875rem | 1.2 | -0.02em | Page titles, hero sub |
| `text-4xl` | 36px / 2.25rem | 1.15 | -0.03em | Hero headline (sans) |
| `text-5xl` | 48px / 3rem | 1.1 | -0.03em | Hero headline (large) |
| `text-6xl` | 60px / 3.75rem | 1.05 | -0.04em | Display, editorial (serif only) |

### 2.3 Heading rules

- Headings never use `font-black` (900 weight) in product UIs — that is a learning-app convention. Use `font-bold` (700) maximum in product interfaces.
- Parent marketing headlines may use `font-black` for visual impact, with Instrument Serif for the primary hero phrase only.
- All headings in data contexts (dashboards, tables, chart labels) use `font-semibold` (600) at most.
- `tracking-widest` is reserved for category labels and section badges only — never for body or heading copy.

### 2.4 Wordmark treatment

- `DECIFER` in the wordmark always uses `tracking-[0.18em]` at `text-sm`, reducing proportionally as size increases.
- The wordmark never uses Instrument Serif. It uses Inter (or DM Sans as an interim).
- Product names (Trading, Learning) use the same font as the wordmark, in normal weight, with normal tracking.

### 2.5 Data and numbers

- All numerical data uses `font-variant-numeric: tabular-nums` so columns align.
- Large financial figures use `font-variant-numeric: tabular-nums; letter-spacing: -0.02em` for density.
- Percentage labels and score indicators use `font-semibold`, not bold, to avoid visual clash with surrounding data.
- Never use Instrument Serif for data, numbers, prices, or statistics.

---

## 3. Master Colour System

### 3.1 Core principle

DECIFER orange (`#F05A28`) is the master brand signal. It appears on the mark, on the primary call-to-action, and on critical status indicators. It does not appear as a decorative background, a border fade, or an ambient glow. **Orange must be earned.**

Every other colour in the system has a defined role. No colour exists for visual variety.

### 3.2 Universal tokens

These apply to every DECIFER product surface.

| Token | Value | Role |
|---|---|---|
| `--color-mark` | `#F05A28` | Brand mark, primary CTA, key signal |
| `--color-ink` | Light or dark per product | Primary readable text |
| `--color-muted` | Adjusted per product | Secondary text — must pass WCAG AA |
| `--color-faint` | Decorative only | Borders, dividers, placeholders — never body text |
| `--color-line` | Decorative only | Borders and dividers |
| `--color-canvas` | Product-specific | Page background |
| `--color-surface` | Product-specific | Card and panel background |
| `--color-surface-alt` | Product-specific | Elevated or interactive surface |

### 3.3 State colours

State colours are universal — they do not change per product. A red error is red everywhere. A green success is green everywhere.

| Token | Value | Usage |
|---|---|---|
| `--color-success` | `#0dc47c` | Success state, completed actions, live indicators |
| `--color-warning` | `#f59e0b` | Warning, caution, pending states |
| `--color-error` | `#ef4444` | Error, failure, invalid input |
| `--color-info` | `#3b82f6` | Informational, neutral notice |

State colours must meet WCAG AA contrast on the surface they appear against. In dark product environments, verify each state colour at deployment.

### 3.4 Data signal colours

For chart and graph use across financial and intelligence products.

| Token | Value | Role |
|---|---|---|
| `--color-data-positive` | `#0dc47c` | Upward movement, improvement, gain |
| `--color-data-negative` | `#ef4444` | Downward movement, loss, decline |
| `--color-data-neutral` | `#6e88a8` | Flat movement, unchanged states |
| `--color-data-highlight` | `#F05A28` | Key signal called out on a chart |

**Rule:** Do not use data colours for anything other than data visualisation. Do not reuse `--color-data-positive` as a CTA or branding element.

---

## 4. Current Product Palettes

### 4.1 DECIFER Parent Site (decifer.io)

Environment: dark. The parent site is a prestige document — deep navy, considered, editorial. It does not feel like a SaaS product. It feels like an intelligence brief.

| Token | Value | Role |
|---|---|---|
| `--color-canvas` | `#060b18` | Page background |
| `--color-surface` | `#0b1328` | Card surface |
| `--color-surface-alt` | `#101c3a` | Hover/elevated surface |
| `--color-ink` | `#eef2ff` | Primary text |
| `--color-muted` | `#6e88a8` | Secondary text (contrast-corrected) |
| `--color-faint` | `#2a3860` | Decorative borders and placeholders only |
| `--color-brand` | `#3d7eff` | Trading product accent on parent site |
| `--color-trading` | `#3d7eff` | Explicit Trading accent (preferred alias) |
| `--color-learn` | `#9578e8` | Learning product accent (contrast-corrected) |
| `--color-mark` | `#F05A28` | Master mark, primary CTA |
| `--color-live` | `#0dc47c` | Live status, success signals |
| `--color-line` | `#172038` | Borders |

**Migration note:** `--color-brand` on the parent site currently serves as the Trading product accent AND the primary CTA colour. Sprint 2 will migrate primary CTAs to `--color-mark` (orange) and rename `--color-brand` to `--color-trading` everywhere. Do not use `--color-brand` in new parent site code — use `--color-trading` or `--color-mark` per context.

**Purple role:** `--color-learn` is the Learning product accent on the parent site only. It may appear as text, borders, and icon fills in the Learning product card context. It must never be used for body text on `--color-surface-alt` backgrounds. It must always meet 4.5:1 contrast on the surface it is used against.

### 4.2 DECIFER Trading

Environment: dark. Even darker than the parent site. Trading information demands maximum attention and minimum visual distraction. The palette is close to a terminal display — disciplined and precise.

| Token | Recommended value | Role |
|---|---|---|
| `--bg-deep` | `#04060c` | Deepest background (page chrome) |
| `--bg` | `#070a12` | Standard page background |
| `--surface` | `#0c1220` | Card surface |
| `--surface-2` | `#111826` | Elevated panel |
| `--surface-3` | `#162034` | Active/hover surface |
| `--border` | `#1a2840` | Default border |
| `--border-strong` | `#253650` | Strong border, active state |
| `--text-1` | `#e8f0fa` | Primary text |
| `--text-2` | `#7a8fa8` | Secondary text |
| `--text-3` | `#4f6a84` | Tertiary text (contrast-corrected from `#3d5166`) |
| `--orange` | `#F05A28` | DECIFER mark colour (align with master) |
| `--green` | `#10b981` | Positive market signal |
| `--amber` | `#f59e0b` | Caution or neutral signal |
| `--red` | `#f43f5e` | Negative market signal |

**Contrast note:** The original `--text-3: #3d5166` fails WCAG AA at 2.4:1 on `--bg`. Correct to `#4f6a84` which achieves 3.5:1 (passes for large text). For normal body text at that tier, increase further to `#5a779a` (≥4.5:1). Tertiary text at this level should only appear at 14px+ and in non-critical contexts.

**Orange alignment:** Trading currently uses `--orange: #f97316`. Align to master mark `#F05A28`. The visual difference is subtle (slight darkening) but it ensures the mark reads the same colour across all contexts.

### 4.3 DECIFER Learning

Environment: light. Learning is the only DECIFER product on a light background. This is intentional — children and parents interact in contexts where screen glare matters, and a light UI reduces cognitive load for younger users.

| Token | Value | Role |
|---|---|---|
| `background` | `#FAFBFF` | Page background |
| `surface` | `#FFFFFF` | Card surface |
| `brand` | `#F05A28` | Learning CTA, accent (aligned with master mark) |
| `brand-50` | `#FEF0E8` | Light orange surface, badge backgrounds |
| `brand-600` | `#CC4A21` | Hover state for brand CTAs |
| `ink` | `#2D3748` | Primary text |
| `muted` | `#718096` | Secondary text |
| `mark` | `#F05A28` | Brand mark colour (same as brand in this context) |

**Subject colours (Learning-specific):**

Subject colours are unique to the Learning product. They exist only in the educational context to create visual associations between subjects and colours. They must never appear on the parent site.

| Token | Value | Subject |
|---|---|---|
| `maths` | `#6C9EFF` | Mathematics |
| `english` | `#FF8FAB` | English |
| `science` | `#52D9A0` | Science |

**Gamification tiers (Learning-specific):**

| Token | Value | Tier |
|---|---|---|
| `sprout` | `#A8E6CF` | Beginner |
| `explorer` | `#74C0FC` | Intermediate |
| `lightning` | `#FFD43B` | Advanced |

**Icon treatment for Learning:** Emoji are used in gamification and reward contexts because they are immediately recognisable to children. However, structural UI icons (navigation, status, actions) must use consistent SVG icons — not emoji — to meet accessibility requirements. Emoji must always include `aria-hidden="true"` and have surrounding text context.

---

## 5. Future Industry Design Rules

> No future product names are defined in this sprint. The rules below define design language by industry category. When a future DECIFER product is launched in one of these categories, the relevant category rules apply.

The master mark, orange token, typography system, spacing scale, and motion principles are non-negotiable regardless of category. What changes per category is: product accent colour, icon vocabulary, data visualisation style, motion behaviour, proof module format, tone, and trust treatment.

---

### 5.1 Financial Intelligence

**Category description:** Products that provide intelligence on financial markets, personal wealth, investment information, or economic conditions.

**Product accent:** Deep signal blue — `#1e4adb` or equivalent high-chroma blue. Blue in financial contexts signals precision, authority, and trust. It is not a coincidence that major financial institutions and terminals use blue. Do not use green (conflated with "positive") or red (conflated with "loss") as the product accent.

**Background environment:** Dark, as with Trading. Financial information demands concentration. Light mode is acceptable in institutional or enterprise-grade reporting contexts with deliberate justification.

**Icon language:**
- Line-stroke, not filled
- Stroke-weight: 1.5–2px
- Vocabulary: arrows (directional), percentage, currency symbols, bar charts, line charts, candlestick representations, calendar, clock
- Never: emoji, illustrations, cartoon representations of money or markets

**Graph and data visualisation:**
- Line charts for time-series (with no fill, or a very low-opacity fill)
- Candlestick charts for OHLC data, using standard green/red convention with explicit labelling
- Area charts only where trend shape matters more than precise value
- Bar charts for categorical comparison
- No pie charts for financial data — they obscure relative scale
- Gridlines: subtle, `rgba(255,255,255,0.05)` on dark, `rgba(0,0,0,0.06)` on light
- Axes: labelled, precise, with correct decimal places for the data type
- Colour in charts: data colours only (positive/negative/neutral/highlight), never decorative

**Motion behaviour:**
- No entry animations on data displays — data must appear immediately on load
- Micro-interactions only: hover states reveal tooltips, click states highlight data points
- No loading spinners on chart areas — use skeleton states that mirror chart dimensions
- If values update in real time, use a brief single-frame flash (100ms opacity pulse) to signal the update, nothing more

**Proof modules:**
- Data source with link or reference
- Timestamp of last update (precise, with timezone)
- Confidence level or model accuracy metric where applicable
- Methodology note (collapsed, expandable)
- Regulatory disclaimer: clearly visible, not buried in footer

**Tone of voice:**
- Precise and measured
- Present data as fact, interpretation as interpretation — always distinguish between them
- Never use urgency language ("act now", "don't miss")
- Never imply predictions are certainties
- Use "signals suggest" rather than "will", "data shows" rather than "proves"

**Risk and disclaimer treatment:**
- Regulatory disclaimer must appear before or immediately adjacent to any specific financial data display
- Never bury disclaimer in footer only
- Plain English: "This is information, not advice" expressed clearly, not in legal boilerplate alone

---

### 5.2 Global Affairs and News Intelligence

**Category description:** Products that provide intelligence on geopolitical events, international news, conflict, policy, and global context.

**Product accent:** Slate blue-gray — `#475569` or a similarly neutral, cool tone. Global affairs are not positive or negative by definition. The accent should feel like a newspaper masthead: authoritative and neutral, not partisan.

**Background environment:** Light or dark both viable. A light background with dark text evokes editorial credibility (newspaper-style). A dark background can work for operational/analyst-facing interfaces.

**Icon language:**
- Globe, map pin, compass, timeline, document, connections/network nodes
- Stroke-based, neutral weight
- Never: emoji flags (inconsistent across platforms), cartoon geopolitical imagery
- Region/country references use ISO map data, not illustrative representations

**Graph and data visualisation:**
- Choropleth maps for geographic distribution of data (conflict, election, economic)
- Timeline charts for event sequences
- Network graphs for relationship mapping (key figures, organisations, connections)
- Small multiples for cross-country comparison
- Colour on maps: use a neutral-to-signal gradient (gray → accent), not a traffic-light system
- Do not use red/green for geopolitical data — it implies value judgement

**Motion behaviour:**
- Timeline scrubs and transitions for historical data
- Map transitions: smooth zoom and region transitions, 300–400ms ease
- No animated backgrounds or ambient effects
- Breaking news / live updates: single-line status badge with subtle pulse, no aggressive alerts

**Proof modules:**
- Primary source citation with link
- Publication date and time (with timezone)
- Publication or author attribution
- Methodology: how the intelligence was synthesised (AI-assisted, curated, automated)
- Bias acknowledgment note where applicable

**Tone of voice:**
- Geopolitically neutral in presentation (present multiple positions on contested events)
- Factual for events; analytical for context; clearly marked when speculative
- Avoid moral language ("evil", "righteous") — use factual descriptors
- Never characterise audiences ("your side", "our leaders")

**Risk and disclaimer treatment:**
- Acknowledge that AI synthesis of geopolitical data carries inherent limitations
- Note jurisdiction and audience restrictions if applicable (some content may be restricted in certain regions)
- Date every piece of content — geopolitical information decays rapidly

---

### 5.3 Business and Productivity Intelligence

**Category description:** Products that provide operational intelligence, business analytics, workflow insight, or competitive intelligence for professionals and organisations.

**Product accent:** Teal — `#0d9488` or equivalent. Teal sits between blue (rational, data) and green (productive, growth). It communicates efficiency without warmth and analysis without coldness. Avoid pure green (associated with finance) and pure blue (already used by Trading).

**Background environment:** Light-first. Business tools are used in offices, on enterprise devices, and in collaboration contexts. A light, clean environment is appropriate. Dark mode is a secondary consideration.

**Icon language:**
- Functional, familiar: folder, document, chart, calendar, person, organisation
- System icon style (SF Symbols, Heroicons, Lucide) — not custom illustrations
- Use colour only on icons that represent data state; navigation icons remain monochrome

**Graph and data visualisation:**
- Bar charts and grouped bars for comparison
- Funnel charts for conversion and pipeline
- Scatter plots for correlation analysis
- Heatmaps for time-pattern analysis (e.g., activity by day/hour)
- Clear axis labels and legends — never rely on colour alone to distinguish series
- Download and export affordances always present

**Motion behaviour:**
- Functional transitions only: panels slide in, modals fade, tables sort
- Duration: 150–200ms for UI state changes (faster than marketing pages)
- No ambient animation in productivity interfaces — it is distracting

**Proof modules:**
- Data source and integration label (e.g., "from Salesforce CRM")
- Calculation methodology (especially for aggregated or derived metrics)
- Confidence interval or margin of error for predictions
- Last-updated timestamp

**Tone of voice:**
- Commercial and direct
- Avoid jargon where possible; use domain language where unavoidable
- Results-first: lead with the insight, follow with the context
- "Your pipeline shows X" rather than "Analysis suggests that there may be X"

**Risk and disclaimer treatment:**
- Forward-looking projections must be clearly marked as projections, not actuals
- Data integration points must disclose what data is accessed and by what method
- Any AI-generated insight must be marked as AI-generated

---

### 5.4 Health, Wellness, and Sensitive Personal Domain

**Category description:** Products that provide intelligence or guidance touching physical health, mental wellbeing, personal development, or other sensitive and intimate domains.

**Product accent:** Calm teal-green — `#0ea5a1` or similar. This category demands the most careful colour choice. Red is alarming. Blue is clinical. Green is associated with health but can read as pharmaceutical. A desaturated teal-green signals wellbeing without triggering clinical or pharmaceutical associations.

**Background environment:** Soft warm white — `#FDFCF9` or equivalent warm off-white. Not clinical white (`#FFFFFF`). Not medical blue. The environment should feel like a calm, considered space.

**Icon language:**
- Soft, rounded stroke icons — never sharp angles
- Body-neutral: avoid anatomical diagrams or clinical representations unless necessary
- Progress and growth metaphors: plants, paths, rings (not bars that imply deficit)
- No emoji for health or wellness — emoji have inconsistent cultural connotations around health

**Graph and data visualisation:**
- Trend lines with emphasis on direction, not precision
- Progress rings and arcs rather than bar charts (rings convey journey, not deficiency)
- Avoid showing "how far from normal" — frame as "progress toward goal"
- Never use red/green for health data — use neutral-to-accent gradient only
- Smoothed curves, not jagged point-to-point charts

**Motion behaviour:**
- Slow, gentle transitions — 400–500ms, ease-in-out
- No fast or aggressive animations
- Breathing-style animations (very slow scale or opacity pulse, >5s period) are acceptable for ambient calm
- Never: flashing, rapid changes, countdown timers

**Proof modules:**
- Professional consultation recommendation (mandatory and prominent)
- Clinical evidence basis (with citations to published studies)
- Limitation of AI in health contexts (mandatory)
- Source transparency: what data is used, how it is processed

**Tone of voice:**
- Compassionate, non-prescriptive
- Never give direct medical advice
- Always recommend qualified practitioners for decisions
- Supportive language: "this suggests", "consider exploring"
- Acknowledge uncertainty: health data is personal and context-dependent

**Risk and disclaimer treatment:**
- Medical disclaimer must be prominent, not buried
- Explicitly state the product is not a medical device and does not replace professional advice
- For sensitive domains (mental health, addiction, etc.): include crisis resource links

---

### 5.5 Legal, Policy, and Compliance Intelligence

**Category description:** Products that provide intelligence on legal frameworks, regulatory compliance, policy developments, or contract and agreement analysis.

**Product accent:** Deep neutral navy — `#1e2d4a` or a similarly dark, authoritative neutral. Legal products must convey permanence, precision, and authority. Bright or warm colours feel trivial in a legal context.

**Background environment:** Light or near-light. Legal documents are traditionally read on light backgrounds. Dark mode can work for contract analysis or research tools where extended reading is required.

**Icon language:**
- Precise, familiar: document, magnifier, scale/balance, lock, shield, clock (for deadlines), checkmark
- No illustrative or metaphorical icons — a legal product must feel literal
- Use a weight that feels substantial — stroke-width 1.75–2px, no hairline icons

**Graph and data visualisation:**
- Decision trees and flowcharts for compliance pathways
- Comparison matrices for regulatory differences across jurisdictions
- Timeline visualisations for regulatory change over time
- No decorative data visualisation — every chart must earn its presence
- Tables are often better than charts in legal contexts — do not force data into visual formats where a table is clearer

**Motion behaviour:**
- Deliberate and controlled — 200–250ms, ease
- No surprise motion
- Disclosure expansions (accordions, expandable clauses) should animate smoothly without feeling playful
- No ambient effects

**Proof modules:**
- Jurisdiction label (mandatory — legal information is inherently jurisdictional)
- Effective date (the date the legal information applies from)
- Version number (legal documents change — always show the version)
- Last reviewed date
- Source citation (legislation, regulation, case law, or policy document)
- Non-advice disclaimer (mandatory and visible)

**Tone of voice:**
- Precise and technical where necessary — do not oversimplify at the cost of accuracy
- Flag complexity: "this varies by jurisdiction — consult local counsel"
- Never advise — present information and direct to qualified practitioners
- Acknowledge that AI analysis of legal text carries risk of error or omission

**Risk and disclaimer treatment:**
- Not legal advice disclaimer: prominent, on every page that presents legal information
- Jurisdiction specificity required for any legal statement
- Limitation disclaimer for AI-generated legal analysis: mandatory

---

### 5.6 Property, Infrastructure, and Asset Intelligence

**Category description:** Products that provide intelligence on property markets, real estate, infrastructure projects, asset valuation, or physical-world investment contexts.

**Product accent:** Warm amber-stone — `#d97706` or equivalent. Property carries connotations of physicality, investment, and long-term value. Amber reads as premium and grounded — it occupies the warm zone of the spectrum without the energy of DECIFER orange.

**Background environment:** Neutral light — `#F8F7F5` or similar warm neutral. Property products feel different from tech products. A slightly warm, slightly off-white background gives the correct register: premium but accessible.

**Icon language:**
- Building outlines, floor plan marks, location pins, compass, map scales
- Architectural line-drawing style: thin, precise, structural
- No illustrations — use structural diagrams that mirror technical drawings
- Geographic reference: maps with property overlay are a primary interface element

**Graph and data visualisation:**
- Price-over-time line charts for market trend
- Geographic heatmaps for area analysis
- Comparison bar charts for property metrics (yield, capital growth, rental coverage)
- Valuation range visualisations (confidence interval style, not point values)
- Transaction volume charts (bar, not line — volume is discrete)
- Do not use red/green for property valuation — use amber (below expectation), neutral, and blue (above)

**Motion behaviour:**
- Map interactions: smooth pan/zoom, 300ms transitions
- Data updates: fade transition on value change, 200ms
- No urgency animations — property decisions are long-cycle and deliberate

**Proof modules:**
- Valuation basis (methodology, date, comparable references)
- Data source (land registry, agent data, market provider)
- Valuation date (property values are time-stamped, always)
- Market area definition (what geography the data covers)
- Disclaimer: past performance ≠ future performance

**Tone of voice:**
- Professional and measured
- Long-term framing: property decisions are not made in minutes
- Evidence-based: all claims reference data
- Acknowledge market uncertainty: "conditions as of [date]"

**Risk and disclaimer treatment:**
- Financial risk disclaimer for investment property contexts
- Past performance disclaimer (mandatory)
- Independent advice recommendation

---

## 6. Contrast Requirements

DECIFER products must meet **WCAG 2.1 AA** as a minimum. Products with higher trust requirements (health, legal, financial) should target **AAA** for critical text.

### 6.1 Minimum requirements

| Text type | Min contrast ratio | Notes |
|---|---|---|
| Normal body text (< 18px) | 4.5:1 | WCAG AA |
| Large text (≥ 18px regular or ≥ 14px bold) | 3:1 | WCAG AA large |
| UI components and graphical elements | 3:1 | WCAG AA non-text |
| Decorative content, disabled state | No requirement | Must not convey information |

### 6.2 Current verified contrast values

**Parent site (dark environment):**

| Pair | Contrast | Status |
|---|---|---|
| `--color-ink` (#eef2ff) on `--color-surface` (#0b1328) | ~14.5:1 | ✓ AAA |
| `--color-muted` (#6e88a8) on `--color-surface` (#0b1328) | ~5.1:1 | ✓ AA |
| `--color-muted` (#6e88a8) on `--color-canvas` (#060b18) | ~5.4:1 | ✓ AA |
| `--color-learn` (#9578e8) on `--color-surface` (#0b1328) | ~5.5:1 | ✓ AA |
| `--color-brand` (#3d7eff) on `--color-surface` (#0b1328) | ~5.0:1 | ✓ AA |
| `--color-faint` (#2a3860) on `--color-surface` (#0b1328) | ~1.5:1 | Decorative only |

**Learning site (light environment):**

| Pair | Contrast | Status |
|---|---|---|
| `ink` (#2D3748) on `surface` (#FFFFFF) | ~12.6:1 | ✓ AAA |
| `muted` (#718096) on `background` (#FAFBFF) | ~4.6:1 | ✓ AA |
| `brand` (#F05A28) on `surface` (#FFFFFF) | ~3.7:1 | ✓ AA (large text) |
| `brand` (#F05A28) on `brand-50` (#FEF0E8) | ~2.8:1 | ⚠ Decorative only |

**Rule:** Brand orange on a white background (3.7:1) passes for large text and UI components but fails for small body text. Do not use `text-brand` for body copy at `text-sm` or smaller on white backgrounds. Use it for headings, labels at 14px bold or above, and interactive elements (buttons, links).

### 6.3 Colour combinations that are never permitted

- Any light-on-light or dark-on-dark pairing without explicit contrast verification
- Orange on red, or orange on yellow backgrounds
- `--color-faint` as text colour on any background
- Placeholder text colour used as visible label text
- White text on the orange mark (`#F05A28`) — fails AA; use white only at font-bold 16px+ on orange

---

## 7. Spacing Scale

All spacing derives from a 4px base unit. The canonical scale is:

| Token | Value | Pixels |
|---|---|---|
| `space-1` | 0.25rem | 4px |
| `space-2` | 0.5rem | 8px |
| `space-3` | 0.75rem | 12px |
| `space-4` | 1rem | 16px |
| `space-5` | 1.25rem | 20px |
| `space-6` | 1.5rem | 24px |
| `space-8` | 2rem | 32px |
| `space-10` | 2.5rem | 40px |
| `space-12` | 3rem | 48px |
| `space-16` | 4rem | 64px |
| `space-20` | 5rem | 80px |
| `space-24` | 6rem | 96px |
| `space-28` | 7rem | 112px |

**Section padding:** Major page sections use `py-20 sm:py-28` as the standard, with content max-width `max-w-6xl` and horizontal padding `px-5 sm:px-8`. These values must not vary arbitrarily between sections — visual consistency of breathing room is how users perceive structure.

**Card internal padding:** Standard cards use `p-6` or `p-8`. Do not mix these within the same section without a clear size hierarchy reason.

---

## 8. Radius Scale

Border radius is a trust signal. Sharper radii (lower values) feel more precise and professional. Rounder radii feel warmer and more approachable. DECIFER products calibrate radius to the domain trust requirement.

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.375rem` (6px) | Input borders, badge borders, tight UI |
| `--radius-md` | `0.5rem` (8px) | Buttons (smaller contexts), chips |
| `--radius-lg` | `0.75rem` (12px) | Standard buttons, modal headers |
| `--radius-xl` | `1rem` (16px) | Standard cards, panels |
| `--radius-2xl` | `1.5rem` (24px) | Hero cards, featured content |
| `--radius-full` | `9999px` | Pills, badges, avatar containers |

**Domain calibration:**
- Financial / Legal products: maximum `--radius-lg` for cards. Sharper edges feel more precise.
- Parent site / Trading: `--radius-xl` for cards is the standard.
- Learning: `--radius-2xl` for cards is appropriate — warmth without being childish.
- Health / Wellness: `--radius-2xl` or higher — softness signals safety.

---

## 9. Shadow and Elevation

### 9.1 Dark environment products (parent site, Trading)

Shadows do not work on dark backgrounds. On dark-environment products, depth and elevation are expressed through:
1. **Background lightness step:** Each surface level is slightly lighter than the one behind it. Surface-alt is lighter than surface, which is lighter than canvas.
2. **Border presence:** A 1px border (`--color-line`) distinguishes floating cards from the background.
3. **Glow effects (limited use):** A subtle `box-shadow: 0 0 40px rgba(accent, 0.09)` glow on hover is acceptable for product cards. Not for data cells, not for nav elements, not for decorative cards.

**Glow rule:** A glow effect must have a functional reason — it should signal "this is an interactive element with more behind it." A card that glows on hover has a purpose. A section heading that glows has none.

### 9.2 Light environment products (Learning, and future light products)

Shadows are the primary elevation signal on light backgrounds.

| Level | Shadow | Usage |
|---|---|---|
| Flat | `none` | Inline elements, table rows |
| Low | `0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)` | Input fields, small chips |
| Medium | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)` | Standard cards |
| High | `0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)` | Modal, floating panels |
| Focus | `0 0 0 3px rgba(accent, 0.25)` | Focus ring for keyboard navigation |

---

## 10. Icon System

### 10.1 The rule

DECIFER products use **one icon style per product surface**. Mixing stroke SVG icons with filled icons, emoji, or illustrations in the same interface creates visual incoherence and is not permitted.

### 10.2 Standard icon style

- **Source:** Lucide Icons (MIT licence, consistent with Inter's geometric aesthetic)
- **Style:** Stroke-only, 24×24 viewBox
- **Stroke weight:** 1.5px at 24px size; scale proportionally for other sizes
- **Stroke cap:** `round`
- **Stroke join:** `round`
- **Fill:** `none`
- **Colour:** Inherits from text colour (`currentColor`) — never hardcoded

### 10.3 Size rules

| Context | Icon size | Notes |
|---|---|---|
| Navigation | 20px | Compact but readable |
| Inline body text | 16px | Aligned with text baseline |
| Feature icons | 24px | Standard standalone icon |
| Hero / large callout | 32–48px | Scale up stroke proportionally |

### 10.4 Emoji exception (Learning only)

Emoji are permitted in the Learning product for gamification, reward, and engagement contexts because they are universally recognised by children and create emotional connection that SVG icons cannot. All emoji must:
- Have `aria-hidden="true"` 
- Be accompanied by text that communicates the same meaning
- Not be used for navigation, status, or form feedback

### 10.5 What is not permitted

- Mixing filled and stroke icons in the same interface
- Icon fonts (accessibility and rendering issues)
- Illustrations in place of functional icons (illustrations are not icons)
- Using different icon families across sections of the same page
- Decorative icons with no functional meaning adjacent to interactive elements (creates confusion about what is tappable)

---

## 11. Graph and Data Visualisation

### 11.1 Governing principle

Data visualisation in DECIFER products is not decoration. A chart that is present primarily for visual interest rather than analytical value must be removed. Every chart answers a specific question. That question should be stated in the chart title or visible context.

### 11.2 Chart type selection rules

| Question type | Chart type |
|---|---|
| How does X change over time? | Line chart |
| How do multiple things compare at one point? | Bar chart |
| What is the composition of the whole? | Stacked bar (not pie) |
| Where does X fall in a range? | Range bar, box plot |
| How are X and Y correlated? | Scatter plot |
| Where is X distributed geographically? | Choropleth map |
| How does a process flow? | Sankey or flow chart |

**Pie charts are not in this list.** Pie charts are harder to read than bar charts for the same data. They are not used in DECIFER products except in rare cases where part-of-whole proportion is the primary insight and there are ≤5 segments.

### 11.3 Chart construction rules

- **Every chart has a title.** The title states what the chart shows, not what to conclude from it. "MSFT price — past 90 days" is a title. "MSFT up 12%" is a conclusion, which belongs in a proof module, not a title.
- **Every axis is labelled.** Units must be clear. Dates must be clear.
- **Gridlines are subtle.** `rgba(255,255,255,0.05)` on dark; `rgba(0,0,0,0.06)` on light.
- **Tooltips on hover.** Raw data values must be accessible on hover for every data point.
- **Accessible colour.** Never rely on colour alone to distinguish data series. Use labels, patterns, or shape differentiators.
- **Responsive.** Charts must render correctly from 320px width upward.

### 11.4 Colour in charts

Use only the data signal tokens defined in §3.4:
- Positive: `--color-data-positive` (`#0dc47c`)
- Negative: `--color-data-negative` (`#ef4444`)
- Neutral: `--color-data-neutral` (`#6e88a8`)
- Highlighted signal: `--color-data-highlight` (`#F05A28`)

For multi-series charts, use the DECIFER product accent colour for series 1, then step through: `#6e88a8` (neutral), then a muted tint, then use labels to distinguish additional series. Never use red and green together as series colours — they create unintended positive/negative connotation.

---

## 12. Proof Modules

A proof module is a repeatable, structured element that demonstrates the trustworthiness of a piece of intelligence. Every claim that DECIFER makes must have a proof module.

### 12.1 Anatomy of a proof module

A complete proof module contains:

1. **Source label** — what provides the underlying data (e.g., "Bloomberg Market Data", "ONS", "Primary research")
2. **Timestamp** — when the intelligence was generated or last verified
3. **Confidence or accuracy indicator** — a structured signal of reliability (e.g., model confidence percentage, verified/unverified status, editorial quality level)
4. **Methodology note** — expandable, for users who want to know how the intelligence was produced
5. **Caveat** — one-line limitation statement ("This analysis does not constitute financial advice")

### 12.2 Visual treatment

- Proof modules use `--color-faint` borders and `--color-muted` text in dark environments
- In light environments, proof modules use `border border-black/10 bg-surface/50`
- Font size: `text-xs` for source/timestamp, `text-sm` for caveat
- Icon: an information (`i`) icon or a verified shield icon precedes the module
- Position: always adjacent to the intelligence it validates — never only in a footer or terms page

### 12.3 Trust tier requirements by product category

| Category | Required proof elements |
|---|---|
| Financial intelligence | Source, timestamp, methodology, regulatory disclaimer |
| Global affairs | Source, date, author/publication, bias acknowledgment |
| Business / productivity | Source, integration point, calculation methodology |
| Health / wellness | Professional consultation recommendation, clinical basis, limitation note |
| Legal / policy | Jurisdiction, effective date, version, non-advice disclaimer |
| Property / asset | Valuation date, data source, market area, past-performance disclaimer |
| Learning | Content quality tier, curriculum alignment, last-reviewed date |

---

## 13. Motion Principles

### 13.1 Governing principle

Motion in DECIFER products communicates state change, hierarchy, and direction. Motion that communicates nothing is visual noise. DECIFER does not use motion for entertainment.

### 13.2 Permitted motion types

| Type | Purpose | Duration | Easing |
|---|---|---|---|
| Entry reveal | Introduce content as user reaches it | 550–650ms | ease (or custom ease-out) |
| State change | Button hover, active, focus | 150–200ms | ease |
| Panel transition | Drawer, modal, dropdown open/close | 250–300ms | ease-out (open), ease-in (close) |
| Scroll reveal | Content entering viewport | 550ms | ease |
| Value update | Real-time data updating on screen | 100ms opacity pulse | linear |
| Mark entry (brand) | Brand mark entering on first view | 400ms, slide in from sides | ease-out |

### 13.3 Duration rule

- UI state changes (hover, focus, active): 150–200ms. Fast. Imperceptible delay, just smooth.
- Content transitions (modals, panels, drawers): 250–300ms. Deliberate but not slow.
- Page-level reveals (scroll animations, hero entry): 550–650ms. Considered.
- Nothing in a product UI exceeds 700ms. If it does, it is a loading state, not a transition.

### 13.4 Easing rule

- Opening / entering: `ease-out` (starts fast, slows as it arrives — feels responsive)
- Closing / exiting: `ease-in` (starts slow, accelerates out — feels clean)
- UI feedback (button press, value change): `ease` (smooth both ways)
- Never use `linear` for visible motion — it reads as mechanical and unrefined

### 13.5 Reduced motion

All animations must respect `prefers-reduced-motion`. Where motion is applied via CSS, use:

```css
@media (prefers-reduced-motion: reduce) {
  .anim-fade-up, .scroll-reveal, .scroll-reveal-1, .scroll-reveal-2, .scroll-reveal-3 {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

This must be implemented in the globals.css of all three sites. It is not currently present and must be added in this sprint.

### 13.6 What is not permitted

- Continuous ambient animations on content areas (pulsing backgrounds, floating particles)
- Motion that triggers on load without user interaction (exception: very first page entry animation, maximum one per page)
- Rotation animations on non-loading elements
- Parallax scrolling effects that cause layout shift
- Animations on data values in financial contexts (except the 100ms pulse on update)

---

## 14. Accessibility Requirements

### 14.1 Minimum standard

WCAG 2.1 AA across all DECIFER products. Products in health, legal, or financial domains should target AAA where it does not require sacrificing clarity.

### 14.2 Keyboard navigation

- All interactive elements must be reachable by keyboard (`Tab`, `Shift+Tab`)
- Focus rings must be visible: `ring-2 ring-[color-cta] ring-offset-2` at minimum
- Skip-to-content link at the top of every page
- Modal focus must be trapped when open

### 14.3 Screen reader support

- All images have meaningful `alt` text, or `alt=""` if decorative
- All SVG icons use `aria-hidden="true"` when adjacent to labelled text
- Interactive SVGs (buttons using SVG icons) have `aria-label`
- The DECIFER mark SVG uses `aria-hidden="true"` and the surrounding `<a>` or container provides the accessible name
- Form inputs have associated `<label>` elements, not just placeholder text

### 14.4 Colour and information

- Colour is never the sole differentiator for information. Chart series, status indicators, and form validation states all use a second signal (icon, pattern, text label) in addition to colour.
- Error states: red border + error icon + error message text. Not just red border alone.

### 14.5 Touch targets

- Minimum touch target: 44×44px for interactive elements on mobile
- Navigation items in mobile headers: minimum 44px height
- CTA buttons: minimum 44px height

---

## 15. Correct and Incorrect Usage Examples

### Typography

✓ `font-bold text-2xl text-ink` — section heading, correct weight and color  
✓ `text-sm text-muted` — secondary description text, correct hierarchy  
✗ `font-black text-sm text-brand` — black weight on small brand-colored text  
✗ `tracking-widest text-base text-ink` — widest tracking on body copy (reserved for category labels only)  
✗ Instrument Serif in a data table or dashboard — editorial font in functional context

### Colour

✓ `bg-mark text-white` on a primary CTA button — orange carries the action  
✓ `text-muted` (#6e88a8) for secondary descriptions on dark surface  
✓ `text-learn` (#9578e8) for the Learning product card label on dark surface  
✗ `text-faint` as readable body text — faint is a decorative-only token  
✗ `text-brand` (`text-sm`) on `bg-surface` — brand blue (#3d7eff) on surface needs checking if used as small text  
✗ `text-learn` on `bg-surface-alt` at `text-xs` — contrast may fail at this combination  

### Icons

✓ Lucide `<Search size={20} />` with `aria-hidden` beside a labelled search input  
✓ `aria-hidden` on decorative mark SVG with `aria-label` on the containing link  
✗ Emoji as the sole indicator of a form validation state  
✗ Mixing Lucide stroke icons and filled heroicons on the same page  

### Motion

✓ Scroll reveal on section entry, 550ms, ease  
✓ Button hover state, 150ms, ease  
✗ Continuous pulsing glow on a data card  
✗ 800ms modal open animation — too slow for UI  

### Proof modules

✓ Data source citation + timestamp adjacent to chart  
✓ Expandable methodology note on an intelligence summary  
✗ Only a footer disclaimer for content that includes specific financial figures  
✗ "AI-powered" badge with no explanation of what that means or what data it used

---

## 16. Audit Findings and Required Fixes

### 16.1 Applied in this sprint

| Issue | Site | Fix |
|---|---|---|
| `--color-muted` fails WCAG AA on surface and canvas | decifer.io | `#5d7299` → `#6e88a8` |
| `--color-learn` used as small text, fails WCAG AA | decifer.io | `#7c5ce0` → `#9578e8` |
| Learning brand orange misaligned with master mark | decifer-learning | `#F97316` → `#F05A28` |
| Learning brand-50 and brand-600 adjusted to match | decifer-learning | Values updated proportionally |
| State colour tokens missing | Both sites | Added `--color-warning`, `--color-error`, `--color-info` |
| Radius scale not defined | Both sites | Added `--radius-*` token set |
| `prefers-reduced-motion` rule absent | Both sites | Added to globals.css |
| Semantic role tokens missing | decifer.io | Added `--color-trading`, `--color-cta`, data signal tokens |

### 16.2 Non-blockers (next sprint)

| Issue | Site | Action needed |
|---|---|---|
| Nunito → Inter font migration | decifer-learning | Sprint 2 — replace Nunito heading font |
| DM Sans → Inter font migration | decifer.io | Sprint 2 — align body font to system |
| Plus Jakarta Sans → Inter migration | decifer-trading | Sprint 2 — requires local repo access |
| Parent site primary CTA: blue → orange | decifer.io | Sprint 2 — full colour role migration |
| `--color-brand` → `--color-trading` rename | decifer.io | Sprint 2 — after CTA migration |
| `--text-3` contrast fix on Trading site | decifer-trading | Apply when repo is available locally |
| PNG favicon and apple-touch-icon generation | All | Requires design export tool — see Sprint 0 non-blockers |
| Pie chart audit (remove any instances) | All | Audit when full page review is scheduled |
| Emoji icon audit for accessibility | decifer-learning | Sprint 2 — add text equivalents alongside all emoji |
| Focus ring standardisation | All | Sprint 2 — add ring-offset and ring-color utilities |
