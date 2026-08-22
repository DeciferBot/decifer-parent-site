/**
 * Every number the site is allowed to state, with where it came from.
 *
 * Read by: the homepage proof bar, /about, service pages (via
 * Service.proofRefs) and the pre-launch claims audit. If a figure is not in
 * this file it must not appear on the site. Each entry names its source so
 * anyone can re-check it. Dates are when the figure was last verified.
 *
 * Hard rules:
 *   - The trading system runs on a broker PAPER account. Never imply real
 *     money. The wording in "paperAccount" is the only permitted framing.
 *   - Nothing abandoned, unpublished or deleted counts as proof.
 *   - No client is ever named.
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
  /** Plain-English label, sentence case. */
  label: string;
  /** Longer framing for /about and hover detail. */
  detail: string;
  /** Where the figure was read from. Repo, file, or count method. */
  source: string;
  /** ISO date the figure was last verified. */
  verifiedAt: string;
}

export const proof: ProofPoint[] = [
  {
    key: "liveProducts",
    value: "3",
    label: "public products you can open today",
    detail: "Decifer Markets, Decifer Learning and Decifer Marketing are live, public, and built with the same method we use for client work.",
    source: "products.ts; each href resolves",
    verifiedAt: "2026-08-22",
  },
  {
    key: "monthsLive",
    value: "5",
    label: "months of continuous production operation",
    detail: "The market intelligence system has run continuously since March 2026, through dated incidents that each produced a permanent fix.",
    source: "decifer-trading git history, first commit 2026-03-25",
    verifiedAt: "2026-08-22",
  },
  {
    key: "commits",
    value: "7,500+",
    label: "commits across the portfolio in five months",
    detail: "Roughly 7,500 commits across 16 repositories between March and August 2026, built solo with Claude Code and Codex.",
    source: "git rev-list --count across DeciferBot org repos",
    verifiedAt: "2026-08-22",
  },
  {
    key: "repositories",
    value: "12",
    label: "live products and systems",
    detail: "Twelve of sixteen repositories are deployed and in use. The other four are superseded or abandoned and are not counted.",
    source: "DeciferBot org audit, 2026-08-22",
    verifiedAt: "2026-08-22",
  },
  {
    key: "routes",
    value: "380+",
    label: "page and API routes in production",
    detail: "Around 235 page routes and 145 API routes across the live products.",
    source: "route counts per repo, summed",
    verifiedAt: "2026-08-22",
  },
  {
    key: "tables",
    value: "120+",
    label: "database tables across five Supabase projects",
    source: "schema and migration files per repo, summed",
    detail: "Every product keeps its data in standard Postgres that the owner can export at any time.",
    verifiedAt: "2026-08-22",
  },
  {
    key: "scheduledJobs",
    value: "30+",
    label: "scheduled jobs running unattended",
    detail: "Cron jobs on servers and on Vercel, including a watchdog that restores its own scheduler and pages a human if it cannot.",
    source: "crontab, vercel.json and launchd files per repo",
    verifiedAt: "2026-08-22",
  },
  {
    key: "integrations",
    value: "25+",
    label: "third-party APIs wired and in use",
    detail: "Brokers, market data, analytics, advertising, messaging, payments, email and four different model providers.",
    source: "integration clients per repo, deduplicated",
    verifiedAt: "2026-08-22",
  },
  {
    key: "testFunctions",
    value: "9,000+",
    label: "automated tests in the largest system alone",
    detail: "9,074 test functions across 420 files in the market intelligence system, plus eval suites that grade agents against the live database.",
    source: "decifer-trading tests/, counted 2026-08-22",
    verifiedAt: "2026-08-22",
  },
  {
    key: "paperAccount",
    value: "Paper",
    label: "broker account, not real money",
    detail: "The investing system trades a broker paper account. It has never submitted a live order and is not a real-money track record. We say this everywhere it is mentioned.",
    source: "decifer-trading CLAUDE.md, LIVE_TRADING_GATE.md",
    verifiedAt: "2026-08-22",
  },
  {
    key: "documentsLiberated",
    value: "719",
    label: "order documents turned into one queryable database",
    detail: "388 PDFs, 331 Word files and 25 spreadsheets from thirty years of a catering business, parsed into customers, events and a priced menu.",
    source: "cater-command-center data pipeline, DATA_REPORT.md",
    verifiedAt: "2026-08-22",
  },
  {
    key: "dishesPriced",
    value: "1,312",
    label: "dishes priced live in a self-serve quoting engine",
    detail: "A public menu builder runs the business's real function-sheet maths, including staffing, transport and VAT, before a human ever sees the enquiry.",
    source: "cater-command-center menu_items table",
    verifiedAt: "2026-08-22",
  },
  {
    key: "connectors",
    value: "16",
    label: "live data connectors in one reporting platform",
    detail: "GA4, Search Console, Meta, LinkedIn, X, YouTube, Shopify, Klaviyo, HubSpot and more, pulling nightly into one fact store.",
    source: "decifer-marketing connector catalog, status live",
    verifiedAt: "2026-08-22",
  },
  {
    key: "conciergeEvals",
    value: "40/40",
    label: "on a concierge eval graded against the live database",
    detail: "Forty-two real guest questions with known answers, seven of which pass only by refusing to leak or invent. Documented runs went 35 to 38 to 40 out of 40.",
    source: "rebiza evals/concierge.json and run log",
    verifiedAt: "2026-08-22",
  },
  {
    key: "deletedAi",
    value: "5",
    label: "times we removed AI from a working system",
    detail: "Each time a deterministic check was cheaper, faster and could not invent anything. We write about every one.",
    source: "rebiza, atlas, healcounselling: documented in code comments",
    verifiedAt: "2026-08-22",
  },
];

export const proofByKey = Object.fromEntries(
  proof.map((p) => [p.key, p])
) as Record<ProofKey, ProofPoint>;

export function getProof(keys: ProofKey[]): ProofPoint[] {
  return keys.map((k) => proofByKey[k]).filter(Boolean);
}
