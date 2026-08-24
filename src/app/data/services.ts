/**
 * Single source of truth for the services DECIFER sells.
 *
 * Everything that enumerates services reads from here: the homepage services
 * section, /services, /services/[slug], the enquiry form select, the enquiry
 * API validation, the sitemap, the nav, and the hasOfferCatalog node in the
 * Organization structured data. Adding a service is a single edit.
 *
 * Naming rule: plain descriptive names. Never "Decifer Something"; that
 * pattern is reserved for products (docs/BRAND_GUIDELINES.md).
 *
 * The slug and page title carry the search term. The card headline carries
 * the outcome a buyer actually wants. Both jobs matter; do not merge them.
 */

import type { StackKey } from "./stack";
import type { ProofKey } from "./proof";

export type ServiceKey =
  | "ai-agents"
  | "data-and-reporting"
  | "ai-product-development"
  | "ai-advisory";

export interface Service {
  /** Stable key. Also the URL slug: /services/{key}. Never change once live. */
  key: ServiceKey;
  /** H1 and page title. Carries the search term. */
  name: string;
  /** Short label for nav, chips and the enquiry select. */
  navLabel: string;
  /** The outcome, for cards. What the buyer actually wants. */
  cardHeadline: string;
  /** One sentence. Cards and the meta description base. */
  summary: string;
  /** The situation a client is in before this work starts. */
  problem: string;
  /** Two or three sentences of body copy. */
  description: string;
  /** What the client actually receives. Concrete nouns. */
  deliverables: string[];
  /** Qualifying signals so the reader can self-select in. */
  goodFit: string[];
  /** Disqualifying signals so the sales conversation stays honest. */
  notAFit: string[];
  stackKeys: StackKey[];
  /** Which verified figures this page may cite. */
  proofRefs: ProofKey[];
  /** Product that proves this service, or null. */
  proofProduct: "trading" | "learning" | "marketing" | null;
  /** Shape and rough duration. No prices on the public site. */
  typicalEngagement: string;
  /** The same, in five words or fewer, for list rows. */
  engagementShort: string;
  /** Right-column fact for list rows: the commercial shape. */
  commercial: string;
  /** One supporting line under it. */
  commercialSub: string;
  /** Analytics event, same convention as products.ts. */
  event: string;
  /** ISO date the copy last changed. Drives sitemap lastModified. */
  updatedAt: string;
  order: number;
}

export const services: Service[] = [
  {
    key: "ai-agents",
    name: "AI agent development",
    navLabel: "Workflow automation and agents",
    cardHeadline: "Remove manual work from processes that can be measured.",
    summary:
      "We redesign the process, then build the system around it: agents scoped to one job, with limits you can see and a log you can check.",
    problem:
      "Enquiries arrive by email, WhatsApp, web form and phone, and every one is answered by hand. Quotes mean opening the same files and retyping the same paragraphs. The bottleneck is not selling. It is the hours between the enquiry and the reply, and slow replies lose the work to whoever answered first.",
    description:
      "We build agents that are scoped to a single job, connected to the systems that job needs, and wrapped in checks. Every agent ships with a written boundary: what it may do, what it must hand back to a person, and how you audit it afterwards. Nothing reaches a customer unread unless you decide it should. If we cannot write the boundary down, we do not build the agent.",
    deliverables: [
      "A written scope for the agent, including what it must not do",
      "The agent itself, connected to your tools and your data, running on your accounts",
      "Human review steps at the points where a mistake is expensive",
      "A log of every action the agent takes, readable without an engineer",
      "A handover session so your team can change the rules without us",
    ],
    goodFit: [
      "A person does the same task twenty or more times a week",
      "The task has a clear definition of done",
      "Someone inside the business can own the agent after launch",
    ],
    notAFit: [
      "The process has never been written down",
      "Every case needs a licensed professional to sign it off",
      "The main goal is to cut headcount rather than cut delay",
    ],
    stackKeys: ["claude", "supabase", "resend", "vercel", "cloudflare"],
    proofRefs: ["dishesPriced", "conciergeEvals", "scheduledJobs"],
    proofProduct: null,
    typicalEngagement:
      "Two to eight weeks from scope to a working agent in production, then a monthly retainer to run and improve it. Agents drift, and a build with no maintenance line is a build you will be blamed for.",
    engagementShort: "Two to eight weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Human review where a mistake is expensive",
    event: "service_ai_agents_clicked",
    updatedAt: "2026-08-24",
    order: 1,
  },
  {
    key: "data-and-reporting",
    name: "Data and reporting automation",
    navLabel: "Data and decision intelligence",
    cardHeadline: "Make business information usable.",
    summary:
      "Your data lands in one place you can query, including the data trapped in documents, and the reports assemble themselves from figures computed in code.",
    problem:
      "The information exists. It is in spreadsheets, PDFs, proposals, six dashboards and one person's head. Every month someone spends days assembling a report that is out of date by the time it is read, and nobody can answer a simple question without a meeting.",
    description:
      "We start by getting the data out of wherever it is stuck and into a standard database you own. Then we connect the tools you already pay for, so the numbers pull themselves nightly. Reports are composed from those facts in code, which means nothing in them can be invented. Where a model is used at all, it only writes the sentences, and a test checks that every figure in the sentence is one the code computed.",
    deliverables: [
      "Your historical documents and spreadsheets turned into one queryable database",
      "Connections to the platforms you already use, refreshing on a schedule",
      "A report or dashboard built backwards from the five questions you actually ask",
      "Written definitions so everyone means the same thing by a lead, a sale or a customer",
      "The raw data exported somewhere you control, so the numbers are yours",
    ],
    goodFit: [
      "Someone assembles the same report by hand every week or month",
      "The same fact lives in three places and they disagree",
      "You are about to spend money on AI or marketing and cannot measure the before",
    ],
    notAFit: [
      "The real problem is that two teams disagree about what the numbers should say",
      "There is no data yet, only plans",
    ],
    stackKeys: ["supabase", "bigquery", "ga4", "claude", "vercel"],
    proofRefs: ["documentsLiberated", "connectors", "tables"],
    proofProduct: "marketing",
    typicalEngagement:
      "A measurement setup takes one to two weeks at a fixed fee and is the usual first step. Full data and reporting builds run three to eight weeks.",
    engagementShort: "One to eight weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "Raw data exported to you",
    event: "service_data_reporting_clicked",
    updatedAt: "2026-08-24",
    order: 2,
  },
  {
    key: "ai-product-development",
    name: "AI product development",
    navLabel: "Custom AI products",
    cardHeadline: "From nothing to live in weeks, and you keep the repository.",
    summary:
      "A complete product: website, database, logins, payments, email and analytics, built in weeks and handed over with the code.",
    problem:
      "You have a validated idea, a business launching a new line, or a practice that needs a real booking and client system rather than a brochure site. Agencies quote months and a platform you cannot leave. Tools that promise no code run out at exactly the feature you need.",
    description:
      "We build whole products on a stack we have shipped repeatedly: Next.js on Vercel, Supabase for data and logins, Stripe for payments, Resend for email, Cloudflare in front, GitHub for the code. We build with Claude and Codex, which is why the timeline is weeks, and we have done it enough times to know exactly where AI-assisted building still needs a person who knows what they are doing. At handover the repository, the accounts and a written runbook transfer to you.",
    deliverables: [
      "A live product on your own domain, with your own accounts for every service",
      "Authentication, payments, transactional email and analytics wired and tested",
      "A staging environment, so changes can be seen before they go live",
      "The repository, transferred to you, with a runbook written for whoever comes after us",
      "An optional monthly care plan once it is live",
    ],
    goodFit: [
      "You can describe the first version in a page",
      "Someone on your side can make decisions within a day",
      "You want to own what gets built",
    ],
    notAFit: [
      "The scope is still a list of everything competitors do",
      "The product needs to be perfect before anyone can see it",
    ],
    stackKeys: ["nextjs", "vercel", "supabase", "stripe", "resend", "cloudflare", "github", "claude", "codex"],
    proofRefs: ["repositories", "routes", "tables", "commits"],
    proofProduct: "learning",
    typicalEngagement:
      "Six to twelve weeks depending on scope, fixed fee with staged payments. The repository is transferred at handover, always.",
    engagementShort: "Six to twelve weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "The repository transfers at handover",
    event: "service_product_build_clicked",
    updatedAt: "2026-08-24",
    order: 3,
  },
  {
    key: "ai-advisory",
    name: "AI consulting and audit",
    navLabel: "AI opportunity assessment",
    cardHeadline: "Find the opportunities worth funding, and the ones that are not.",
    summary:
      "A fixed-scope assessment that maps where time actually goes, costs the current process as a baseline, and tells you plainly what to automate first and what to leave alone.",
    problem:
      "You keep being told to adopt AI. Every vendor has a pilot. Nobody has told you which three things in your business would actually change, what it would cost to run, or what could go wrong. So nothing starts, or the wrong thing does.",
    description:
      "We talk to the people doing the work, not just the people describing it. We map where the hours go, score each candidate task on how often it repeats, how clear the rules are, and how expensive a mistake would be, and we hand you a short written recommendation. It includes an explicit list of things not to automate yet. We have removed AI from our own working systems five times because a simpler check was better. We will tell you the same thing about yours when it is true.",
    deliverables: [
      "Interviews with the people who actually do the work",
      "A map of where the time goes, with the delays marked",
      "A costed baseline of the process today, so any build that follows can be measured against it",
      "A shortlist of candidate automations, each with an honest estimate of effort, running cost and risk",
      "An explicit do-not-automate-yet list, with reasons",
      "A one-page recommendation you can act on with or without us",
    ],
    goodFit: [
      "You run or lead operations in a business of roughly ten to two hundred people",
      "You want a decision, not a demo",
      "You are willing to let us talk to your team",
    ],
    notAFit: [
      "You have already chosen the tool and want it justified",
      "The outcome has to be a headcount number",
    ],
    stackKeys: ["claude"],
    proofRefs: ["deletedAi", "liveProducts", "monthsLive"],
    proofProduct: "trading",
    typicalEngagement:
      "Two weeks, fixed fee, credited in full against any build that follows. This is where most engagements start.",
    engagementShort: "Two weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "Credited in full against any build",
    event: "service_ai_advisory_clicked",
    updatedAt: "2026-08-24",
    order: 4,
  },
];

export const servicesByKey = Object.fromEntries(
  services.map((s) => [s.key, s])
) as Record<ServiceKey, Service>;

export const servicesOrdered: Service[] = services
  .slice()
  .sort((a, b) => a.order - b.order);

/** Enquiry form options: every service, plus an honest escape hatch. */
export const enquiryServiceOptions: { value: string; label: string }[] = [
  ...servicesOrdered.map((s) => ({ value: s.key, label: s.navLabel })),
  { value: "not-sure", label: "Not sure yet" },
];

/** Valid service values accepted by the enquiry API. */
export const validServiceValues: string[] = enquiryServiceOptions.map(
  (o) => o.value
);
