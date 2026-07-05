/**
 * Single source of truth for the DECIFER product family.
 *
 * Everything that enumerates products reads from here: the homepage product
 * cards, the principles/boundary lines, the footer, the early-access form,
 * the early-access API validation, and the Organization structured data.
 * Adding a fourth product is a single edit to this array.
 *
 * Accent colours follow the DECIFER Digital Experience System (docs §4, §5):
 *   Trading  → signal blue    (financial intelligence)
 *   Learning → violet         (learning accent, parent site)
 *   Marketing → teal          (business & productivity intelligence, §5.3)
 */

export type ProductStatus = "Live" | "Beta" | "Coming soon";

export interface Product {
  /** Stable key — used for icon lookup and React keys. */
  key: "trading" | "learning" | "marketing";
  /** Full product name, title case per brand guidelines. */
  name: string;
  /** Short category label shown above the name. */
  category: string;
  status: ProductStatus;
  /** Accent colour as hex + "r,g,b" so cards can drive CSS variables. */
  accent: { hex: string; rgb: string };
  /** Outbound product URL, or null when there is nothing to link to yet. */
  href: string | null;
  /** Analytics event fired when the card/link is clicked. */
  event: string;
  /** One-paragraph description. No em dashes (brand rule). */
  tagline: string;
  /** Four "what it helps with" bullets. */
  bullets: string[];
  /** Full boundary line for the product card. */
  boundary: string;
  /** Short boundary line for the principles grid. */
  boundaryShort: string;
  /** Value submitted by the early-access form for this product. */
  interestValue: string;
}

export const products: Product[] = [
  {
    key: "trading",
    name: "Decifer Trading",
    category: "Market intelligence",
    status: "Live",
    accent: { hex: "#5a92ff", rgb: "90,146,255" },
    href: "https://decifertrading.com",
    event: "trading_clicked",
    tagline:
      "Decifer Trading turns market noise into a plain-English read on what is moving, why it matters and what to watch, across stocks, themes and catalysts.",
    bullets: [
      "A plain-English daily market briefing",
      "The forces and catalysts moving prices",
      "Themes that connect related stocks",
      "Company research without the jargon",
    ],
    boundary: "For intelligence and research context only. Not financial advice.",
    boundaryShort: "is not financial advice.",
    interestValue: "Trading",
  },
  {
    key: "learning",
    name: "Decifer Learning",
    category: "Learning intelligence",
    status: "Beta",
    accent: { hex: "#a48eee", rgb: "164,142,238" },
    href: "https://deciferlearning.com",
    event: "learning_clicked",
    tagline:
      "Decifer Learning is a guided companion for the UK National Curriculum. Children learn, practise and quiz through each topic while parents see real progress.",
    bullets: [
      "Guided Learn, Practise and Quiz for each topic",
      "Curriculum-aligned practice and feedback",
      "A parent view of progress and weak areas",
      "Encouraging support that never punishes mistakes",
    ],
    boundary:
      "Supports learning. Does not replace teachers, schools or parents.",
    boundaryShort:
      "supports learning and does not replace teachers, schools or parents.",
    interestValue: "Learning",
  },
  {
    key: "marketing",
    name: "Decifer Marketing",
    category: "Marketing intelligence",
    status: "Live",
    accent: { hex: "#2dd4bf", rgb: "45,212,191" },
    href: "https://decifermarketing.com",
    event: "marketing_clicked",
    tagline:
      "Decifer Marketing turns campaign, channel and audience data into a plain-English read on what is working, why, and what to do next.",
    bullets: [
      "A plain-English read on campaign performance",
      "Which channels and audiences are driving results",
      "What changed week to week, and why it changed",
      "Clear next actions instead of vanity metrics",
    ],
    boundary:
      "For insight and research context only. Not a substitute for professional marketing advice.",
    boundaryShort:
      "is marketing insight, not a substitute for professional advice.",
    interestValue: "Marketing",
  },
];

/** Early-access interest options: every product, plus a general option. */
export const earlyAccessInterests: { value: string; label: string }[] = [
  ...products.map((p) => ({ value: p.interestValue, label: p.name })),
  { value: "General", label: "General interest in DECIFER" },
];

/** Valid interest values accepted by the early-access API. */
export const validInterestValues: string[] = earlyAccessInterests.map(
  (i) => i.value
);
