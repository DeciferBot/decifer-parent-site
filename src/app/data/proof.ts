/**
 * Every number about Decifer that the site is allowed to state, with where
 * it came from.
 *
 * Read by: the homepage proof bar, /about, service pages (via
 * Service.proofRefs) and the pre-launch claims audit. If a figure about
 * Decifer is not in this file it must not appear on the site. Each entry
 * names its source so anyone can re-check it. Dates are when the figure was
 * last verified.
 *
 * Scope (clarified 2026-08-24): this file governs first-party figures, the
 * ones only we can vouch for. Published third-party research may also be
 * cited on the site, but only with the publisher and date rendered next to
 * the figure, and only where the primary source has been checked. Those
 * citations live with the copy that uses them; see EvidenceSection.tsx and
 * docs/REPOSITIONING_2026-08-24.md for the current set and their links.
 *
 * Hard rules:
 *   - The trading system runs on a broker PAPER account. Never imply real
 *     money. The wording in "paperAccount" is the only permitted framing.
 *   - Nothing abandoned, unpublished or deleted counts as proof.
 *   - No client is named without written permission (see caseShapes.ts).
 *   - The `label` says what the figure means to a buyer, not what was
 *     counted. "9,000+ automated tests" is a fact about our repository and
 *     tells a stranger nothing; "9,000+ automatic checks that run before
 *     any change reaches a user" is the same fact and answers "so what".
 *     The engineering wording, where it is worth keeping, lives in
 *     `detail` and `source`. A label a buyer cannot act on is a label to
 *     rewrite (rewritten 2026-08-25).
 */

export type ProofKey =
  | "liveProducts"
  | "commits"
  | "repositories"
  | "routes"
  | "tables"
  | "scheduledJobs"
  | "integrations"
  | "testFunctions"
  | "paperAccount"
  | "documentsLiberated"
  | "dishesPriced"
  | "connectors"
  | "conciergeEvals"
  | "deletedAi"
  | "monthsLive";

export interface ProofPoint {
  key: ProofKey;
  /** The number or short figure, as displayed. */
  value: string;
  /** What the figure means to a buyer, sentence case. Never the count alone. */
  label: string;
  /** Longer framing for /about and hover detail. Where the method belongs. */
  detail: string;
  /** Where the figure was read from. Repo, file, or count method. */
  source: string;
  /** ISO date the figure was last verified. */
  verifiedAt: string;
  /** True to keep the figure internal. Not rendered anywhere on the site. */
  internal?: boolean;
}

export const proof: ProofPoint[] = [
  {
    key: "liveProducts",
    value: "3",
    label: "live systems you can open and use before you hire us",
    detail:
      "Decifer Markets, Decifer Learning and Decifer Marketing are public and running, built the same way we build for clients. You can try the standard of work before you commit to it.",
    source: "products.ts; each href resolves",
    verifiedAt: "2026-08-22",
  },
  {
    key: "monthsLive",
    value: "5",
    label: "months running every day with nobody operating it",
    detail:
      "The market intelligence system has run since March 2026. Nobody starts it in the morning and nobody restarts it at night. That is the standard a system has to reach before it takes work off your team rather than adding some.",
    source: "decifer-trading git history, first commit 2026-03-25",
    verifiedAt: "2026-08-22",
  },
  {
    key: "commits",
    value: "7,500+",
    label: "commits across the portfolio in five months",
    detail:
      "Roughly 7,500 commits across 16 repositories between March and August 2026, built solo with Claude Code and Codex.",
    source: "git rev-list --count across DeciferBot org repos",
    verifiedAt: "2026-08-22",
    internal: true,
  },
  {
    key: "repositories",
    value: "12",
    label: "live products and systems",
    detail:
      "Twelve of sixteen repositories are deployed and in use. The other four are superseded or abandoned and are not counted.",
    source: "DeciferBot org audit, 2026-08-22",
    verifiedAt: "2026-08-22",
    internal: true,
  },
  {
    key: "routes",
    value: "380+",
    label: "working screens and system connections in daily use",
    detail:
      "Around 235 screens people use and 145 connections between systems, across the live products. Shipped and in use, not demonstrations.",
    source: "route counts per repo, summed",
    verifiedAt: "2026-08-22",
  },
  {
    key: "tables",
    value: "120+",
    label: "tables of business data you could export tomorrow",
    detail:
      "Every product keeps its data in standard Postgres. There is no Decifer format and nothing has to be rescued from us, so replacing us stays a commercial decision rather than a technical one.",
    source: "schema and migration files per repo, summed",
    verifiedAt: "2026-08-22",
  },
  {
    key: "scheduledJobs",
    value: "30+",
    label: "jobs that run overnight so nobody has to remember to start them",
    detail:
      "Scheduled work running unattended on servers and on Vercel, including a watchdog that repairs its own scheduler and pages a human if it cannot.",
    source: "crontab, vercel.json and launchd files per repo",
    verifiedAt: "2026-08-22",
  },
  {
    key: "integrations",
    value: "25+",
    label: "business systems already connected: CRM, email, ads, payments",
    detail:
      "Brokers, market data, analytics, advertising, messaging, payments, email and four model providers. Wiring your systems together is work we have already done elsewhere, not work we learn on your budget.",
    source: "integration clients per repo, deduplicated",
    verifiedAt: "2026-08-22",
  },
  {
    key: "testFunctions",
    value: "9,000+",
    label: "automatic checks that run before any change reaches a user",
    detail:
      "9,064 checks across 411 files in the market intelligence system, plus suites that grade the agents against the live database. They are the reason a fault is caught by the build and not by your customer.",
    source: "decifer-trading tests/, counted 2026-08-22",
    verifiedAt: "2026-08-22",
  },
  {
    key: "paperAccount",
    value: "Paper",
    label: "broker account, not real money",
    detail:
      "The investing system trades a broker paper account. It has never submitted a live order and is not a real-money track record. We say this everywhere it is mentioned.",
    source: "decifer-trading CLAUDE.md, LIVE_TRADING_GATE.md",
    verifiedAt: "2026-08-22",
  },
  {
    key: "documentsLiberated",
    value: "719",
    label: "documents from thirty years of trading, searchable in weeks",
    detail:
      "388 PDFs, 331 Word files and 25 spreadsheets from a catering business, turned into customers, events and a priced menu that anyone in the office can look up in seconds.",
    source: "cater-command-center data pipeline, DATA_REPORT.md",
    verifiedAt: "2026-08-22",
  },
  {
    key: "dishesPriced",
    value: "1,312",
    label: "prices a customer can quote themselves, at any hour",
    detail:
      "A public menu builder runs the business's real function-sheet maths, including staffing, transport and VAT, so an enquiry arrives already priced instead of waiting for someone to open a spreadsheet on Monday.",
    source: "cater-command-center menu_items table",
    verifiedAt: "2026-08-22",
  },
  {
    key: "connectors",
    value: "16",
    label: "data sources feeding one set of numbers everyone reads",
    detail:
      "GA4, Search Console, Meta, LinkedIn, X, YouTube, Shopify, Klaviyo, HubSpot and more, pulling in nightly, so the report assembles itself instead of costing someone two days a month.",
    source: "decifer-marketing connector catalog, status live",
    verifiedAt: "2026-08-22",
  },
  {
    key: "conciergeEvals",
    value: "40/40",
    label: "guest questions answered correctly, including the ones set to trip it up",
    detail:
      "Forty-two real guest questions with known answers, seven of which pass only by refusing to leak or invent. Documented runs went 35 to 38 to 40 out of 40, which is how you know an agent is safe to put in front of a customer.",
    source: "rebiza evals/concierge.json and run log",
    verifiedAt: "2026-08-22",
  },
  {
    key: "deletedAi",
    value: "5",
    label: "times we swapped AI for plain code that costs less to run",
    detail:
      "Each time a simple rule-based check was cheaper, faster and could not invent anything. You pay for the result, not for a model doing work that does not need one.",
    source: "rebiza, atlas, healcounselling: documented in code comments",
    verifiedAt: "2026-08-22",
  },
];

export const proofByKey = Object.fromEntries(
  proof.map((p) => [p.key, p])
) as Record<ProofKey, ProofPoint>;

export function getProof(keys: ProofKey[]): ProofPoint[] {
  return keys.map((k) => proofByKey[k]).filter((p) => p && !p.internal);
}

/** Figures allowed on the public site. */
export const publicProof: ProofPoint[] = proof.filter((p) => !p.internal);
