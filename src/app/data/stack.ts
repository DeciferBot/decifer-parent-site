/**
 * The tools DECIFER builds with.
 *
 * Read by: the homepage stack strip, /stack, service pages (via
 * Service.stackKeys), work pages (via CaseShape.stackKeys) and the
 * knowsAbout field in the Organization structured data.
 *
 * Rules: "why" must be honest, not promotional. clientOwned encodes a real
 * commercial position: the client can and should hold the account
 * themselves. Nothing abandoned or unpublished may appear here.
 */

export type StackKey =
  | "claude"
  | "codex"
  | "nextjs"
  | "vercel"
  | "supabase"
  | "cloudflare"
  | "github"
  | "resend"
  | "digitalocean"
  | "stripe"
  | "ga4"
  | "bigquery";

export type StackCategory =
  | "Models and agents"
  | "Application"
  | "Data"
  | "Infrastructure"
  | "Communication"
  | "Commerce and analytics";

export interface StackItem {
  key: StackKey;
  name: string;
  category: StackCategory;
  /** What we use it for, in one sentence. */
  role: string;
  /** Why this one rather than an alternative. Honest, not promotional. */
  why: string;
  url: string;
  /** True when the client can and should hold the account themselves. */
  clientOwned: boolean;
  order: number;
}

export const stack: StackItem[] = [
  {
    key: "claude",
    name: "Claude",
    category: "Models and agents",
    role: "The model behind most of the agents and drafting work we build.",
    why: "It follows long, detailed instructions without drifting, and it is straightforward to constrain with tools and explicit limits. That matters more than benchmark scores when the output goes to a customer.",
    url: "https://www.anthropic.com/claude",
    clientOwned: true,
    order: 1,
  },
  {
    key: "codex",
    name: "Codex",
    category: "Models and agents",
    role: "A second engineering agent we use alongside Claude when building.",
    why: "Two independent builders catch each other's mistakes. We use whichever suits the task and never depend on only one vendor.",
    url: "https://openai.com/codex",
    clientOwned: true,
    order: 2,
  },
  {
    key: "digitalocean",
    name: "DigitalOcean",
    category: "Infrastructure",
    role: "Servers for long-running work, and serverless model inference for high-volume AI tasks.",
    why: "A plain server you can inspect beats a black box when a scheduled job misbehaves at 3am. Their serverless inference also lets us run cheaper models for bulk work and keep the premium model for the decisions that matter.",
    url: "https://www.digitalocean.com",
    clientOwned: true,
    order: 3,
  },
  {
    key: "nextjs",
    name: "Next.js",
    category: "Application",
    role: "The framework behind every web product we ship.",
    why: "One codebase covers the page, the API and the rendering strategy. We have shipped it enough times that the first week of a build is never spent on setup.",
    url: "https://nextjs.org",
    clientOwned: true,
    order: 4,
  },
  {
    key: "vercel",
    name: "Vercel",
    category: "Application",
    role: "Hosting, previews and scheduled jobs for our web applications.",
    why: "Every change gets its own preview link before it goes live, and deploys roll back in one click. For most businesses that is the difference between shipping weekly and shipping quarterly.",
    url: "https://vercel.com",
    clientOwned: true,
    order: 5,
  },
  {
    key: "supabase",
    name: "Supabase",
    category: "Data",
    role: "Postgres, authentication and file storage for the applications we build.",
    why: "It is standard Postgres underneath, so nothing we build for you is trapped in a proprietary format. Row level security lets us separate data at the database rather than trusting application code to do it.",
    url: "https://supabase.com",
    clientOwned: true,
    order: 6,
  },
  {
    key: "bigquery",
    name: "BigQuery",
    category: "Data",
    role: "The warehouse where analytics data lands so it can be queried for years.",
    why: "Analytics tools show you their window. Exporting the raw data means the numbers are yours, and questions the dashboard cannot answer become one query.",
    url: "https://cloud.google.com/bigquery",
    clientOwned: true,
    order: 7,
  },
  {
    key: "cloudflare",
    name: "Cloudflare",
    category: "Infrastructure",
    role: "DNS, security and edge workers in front of everything we run.",
    why: "It removes a whole class of problems before they reach the application: bots, denial of service, misrouted domains. The free tier covers most businesses honestly.",
    url: "https://www.cloudflare.com",
    clientOwned: true,
    order: 8,
  },
  {
    key: "github",
    name: "GitHub",
    category: "Infrastructure",
    role: "Where every line of code we write lives, including yours.",
    why: "At handover the repository transfers to your account. A build you cannot take away from your vendor is a rental, not an asset.",
    url: "https://github.com",
    clientOwned: true,
    order: 9,
  },
  {
    key: "resend",
    name: "Resend",
    category: "Communication",
    role: "Transactional email: confirmations, notifications, reports and follow-ups.",
    why: "Email that reaches the inbox depends on boring configuration done right. Resend makes the boring part checkable, and its webhooks tell us when a message bounced instead of leaving us guessing.",
    url: "https://resend.com",
    clientOwned: true,
    order: 10,
  },
  {
    key: "stripe",
    name: "Stripe",
    category: "Commerce and analytics",
    role: "Payments and subscriptions in the products we build.",
    why: "It is the payments provider your accountant and your bank already understand. We wire it so the money and the records land in your account, not ours.",
    url: "https://stripe.com",
    clientOwned: true,
    order: 11,
  },
  {
    key: "ga4",
    name: "Google Analytics 4",
    category: "Commerce and analytics",
    role: "Measurement of what visitors actually do, wired with real events rather than default pageviews.",
    why: "Free, standard, and good enough for almost every business when configured properly. Most setups we inherit measure nothing useful. Ours are built backwards from the five questions you need answered.",
    url: "https://marketingplatform.google.com/about/analytics/",
    clientOwned: true,
    order: 12,
  },
];

export const stackByKey = Object.fromEntries(
  stack.map((s) => [s.key, s])
) as Record<StackKey, StackItem>;

export function getStackItems(keys: StackKey[]): StackItem[] {
  return keys.map((k) => stackByKey[k]).filter(Boolean);
}

/** Categories in display order, for grouped rendering on /stack. */
export const stackCategories: StackCategory[] = [
  "Models and agents",
  "Application",
  "Data",
  "Infrastructure",
  "Communication",
  "Commerce and analytics",
];
