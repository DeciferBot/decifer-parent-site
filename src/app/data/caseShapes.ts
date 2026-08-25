/**
 * Anonymised client work, except where a client has given written
 * permission to be named (see legal/client-confidentiality: "if you later
 * want to be named, that is your call to make, in writing, at any time").
 *
 * RULE: no client is named here without that written permission, and no
 * anonymised entry may carry a detail specific enough to identify one.
 * Describe the shape of the business and the shape of the work. If an
 * anonymised entry would let a reader guess the client, cut the entry
 * rather than soften it. Every outcome must be something the client
 * actually observed. Do not invent percentages. Numbers ship only with the
 * before measurement, the after measurement taken the same way, the period,
 * the confounders, and written permission. Prices, revenue, margins and
 * contract values are never published, named client or not.
 *
 * "boundaries" is the design made visible: where a person stays in charge,
 * and why that is the right shape for this system. "withheld" is the trust move competitors will not
 * print.
 *
 * Read by: the homepage case shapes section, /work, /work/[slug], service
 * pages (via Service.key match) and the sitemap.
 *
 * Status: DRAFT pending founder line-by-line review (plan phase 1 gate).
 */

import type { ServiceKey } from "./services";
import type { StackKey } from "./stack";

export type Sector =
  | "Hospitality and catering"
  | "Group marketing"
  | "Private events and travel"
  | "Healthcare and counselling"
  | "Creator and personal brand"
  | "Property";

export interface CaseShape {
  /** Stable key. Also the URL slug: /work/{key}. Describes the work, never the client. */
  key: string;
  /** Short title for cards and the page H1. */
  title: string;
  /** How the client is described publicly. Shape only. */
  clientShape: string;
  sector: Sector;
  /** Where the client operates. Country level only. */
  region: string;
  /** What was happening before, in plain terms. */
  situation: string;
  /** What was built or changed. */
  work: string[];
  /** What changed afterwards. Observable only. No invented numbers. */
  outcome: string[];
  /** How the outcome was or will be checked. Forces honesty. */
  measurement: string;
  /** Where a person stays in charge, and why that is the right shape. */
  boundaries: string[];
  /** What stays confidential, stated plainly. */
  withheld: string;
  serviceKeys: ServiceKey[];
  stackKeys: StackKey[];
  /** Show on the site now, or hold for a later batch. */
  published: boolean;
  /** ISO date the copy last changed. Drives sitemap lastModified. */
  updatedAt: string;
  order: number;
}

export const caseShapes: CaseShape[] = [
  {
    key: "catering-quotes-and-kitchen",
    title: "Thirty years of orders became a quoting engine",
    clientShape:
      "A long-established catering business serving private and corporate events across two emirates",
    sector: "Hospitality and catering",
    region: "United Arab Emirates",
    situation:
      "Three decades of orders lived in spreadsheets, proposals and function sheets. Every quote was built by hand from memory of the last one. Nobody could say which dishes made money, which customers came back, or what a realistic price for two hundred guests was without a phone call to the owner.",
    work: [
      "Turned hundreds of order documents, spreadsheets and proposals into one database of customers, events and a priced menu",
      "Built a self-serve menu builder on the public site that runs the business's real costing, including staff, transport and VAT, and lands as a qualified lead",
      "Built a pipeline view where moving a deal forward automatically emails the kitchen its prep sheet and creates the client's digital invitation",
      "Added a food-cost model calibrated against the chef's real portions, with a feedback loop after each event",
    ],
    outcome: [
      "Quotes that took a phone call and a day now start from a number the customer built themselves",
      "The kitchen gets its prep sheet without anyone remembering to send it",
      "The owner can see which dishes sell and which make money, on real history rather than instinct",
    ],
    measurement:
      "Time from first enquiry to priced proposal, and the share of enquiries that arrive already priced, compared across the quarter before and after launch.",
    boundaries: [
      "The model answers questions about the business only from figures computed in code. It cannot invent a number.",
      "Financial answers are visible to the owners only. Staff accounts get a refusal, not an estimate.",
      "Outreach messages are templates chosen by rules, not generated text. A human sends every one.",
    ],
    withheld: "The business's name, its customers, its prices and its revenue.",
    serviceKeys: ["data-and-reporting", "ai-agents"],
    stackKeys: ["supabase", "nextjs", "vercel", "resend", "claude"],
    published: true,
    updatedAt: "2026-08-22",
    order: 1,
  },
  {
    key: "group-marketing-one-view",
    title: "Nine businesses, one board-level view",
    clientShape:
      "A family-owned group with operating companies across automotive, infrastructure and financial services",
    sector: "Group marketing",
    region: "United Arab Emirates",
    situation:
      "Each operating company ran its own marketing with its own agency and its own numbers. Group leadership saw performance once a quarter, assembled by hand, and could not compare one company with another or tell whether spend was pacing to budget.",
    work: [
      "Built a single dashboard pulling from Google Analytics, Google Ads, Meta, LinkedIn and X for every operating company",
      "Added a daily snapshot of every follower and engagement figure, because the platforms do not keep history and every missed day is gone for good",
      "Composed a weekly executive memo from facts computed in code, with the model allowed to write sentences but not numbers",
      "Built the whole thing to work offline and on a projector, because that is how a board actually reads it",
    ],
    outcome: [
      "Leadership sees every company on one page, refreshed nightly, instead of quarterly",
      "Agency claims can be checked against the group's own data",
      "A history now exists that the platforms themselves would not have kept",
    ],
    measurement:
      "Hours spent assembling the quarterly review before and after, reported by the group marketing lead. Snapshot completeness is checked automatically every morning.",
    boundaries: [
      "Every figure in the memo must already exist in the computed data. The model cannot round, estimate or invent.",
      "The admin area fails closed: if the password is not configured, nobody gets in.",
    ],
    withheld: "The group's name, its companies, its spend and its results.",
    serviceKeys: ["data-and-reporting"],
    stackKeys: ["vercel", "claude", "resend", "ga4"],
    published: true,
    updatedAt: "2026-08-22",
    order: 2,
  },
  {
    key: "private-event-concierge",
    title: "A week-long private event that answered its own questions",
    clientShape:
      "A private host running a multi-day celebration abroad for around twenty guests",
    sector: "Private events and travel",
    region: "United Kingdom and Spain",
    situation:
      "One host was answering the same questions by message at all hours: what is on, what does it cost, what do I wear, how do I get home, who is coming, what do I owe. The plan lived in a group chat and changed daily.",
    work: [
      "Built a private guest site where the plan lives in the database, not in the code, so a change made once appears everywhere",
      "Built a concierge on the web and in the group's messaging app that answers from the real plan and can update it, using the same write path a human uses, so there is one audit log",
      "Built a money system that records every charge, split and settlement, and moves no money at all, by design",
      "Wrote a daily bulletin and a gentle chase composed from database rows, with no model in the path, so no line can be invented",
    ],
    outcome: [
      "Guests got answers at 2am without the host being awake",
      "Every change to the plan was logged under a name and a time",
      "The concierge scored 40 out of 40 on a test set of real guest questions, including seven where the right answer was to refuse",
    ],
    measurement:
      "The eval suite runs against the live database and is graded on required and forbidden phrases. The host's own count of questions answered by message before and after launch.",
    boundaries: [
      "The concierge refuses to claim a change it cannot verify. If a write fails, it says so.",
      "A nightly check that looked for gaps in the plan had its AI removed after it researched the wrong country. It is now a plain rules check, because it needs to be right and cheap, not clever.",
      "Document extraction has no field for a passport number, so the model has nowhere to write one down.",
      "Every guest's document wallet is deleted thirty days after the event.",
    ],
    withheld: "The host, the guests, the venue and the budget.",
    serviceKeys: ["ai-product-development", "ai-agents"],
    stackKeys: ["nextjs", "supabase", "vercel", "claude", "resend"],
    published: true,
    updatedAt: "2026-08-22",
    order: 3,
  },
  {
    key: "counselling-practice-intake",
    title: "Clinical intake with no AI where a client could meet it",
    clientShape: "A private psychology and counselling practice",
    sector: "Healthcare and counselling",
    region: "Singapore",
    situation:
      "Clinical time was being spent on administration: answering the same questions before a first session, screening, scheduling, reminders and follow-up. Every one of those touches sensitive personal information, so nothing could be automated carelessly.",
    work: [
      "Built a free clarity check using three validated screening instruments, scored by arithmetic against published clinical cutoffs",
      "Automated the administrative edge only: the emailed report, the practitioner notification, and a follow-up sequence on day three and day seven",
      "Built twelve self-help tools and a crisis page with real helpline numbers",
      "Kept every result explicitly non-diagnostic, in the interface, in the email and on every condition page",
    ],
    outcome: [
      "Enquirers get a structured, plain-language report within minutes",
      "The practitioner sees the screening result in the notification subject line, so triage happens before the email is opened",
      "Follow-ups go out on their own, and the practitioner is copied on every one",
    ],
    measurement:
      "Administrative minutes per new enquiry, counted by the practice before and after. Enquiry-to-booking rate tracked in the pipeline.",
    boundaries: [
      "There is no AI anywhere a client can touch it. No chatbot, no model-scored assessment, no triage by a model.",
      "The only AI in the project is a separate content agent for the blog. Its validator blocks any unsourced statistic, bans diagnostic claims, and forces a crisis link on any article that touches crisis terms.",
      "The highest-risk screening question is stored in its own column so it can never be lost in a score.",
    ],
    withheld: "The practice, the practitioner, client numbers, and anything at all about any individual client.",
    serviceKeys: ["ai-advisory", "ai-product-development"],
    stackKeys: ["nextjs", "supabase", "resend", "vercel", "digitalocean"],
    published: true,
    updatedAt: "2026-08-22",
    order: 4,
  },
  {
    key: "creator-business-engine",
    title: "A creator business that runs while the creator creates",
    clientShape:
      "Aastha Chopra (@aastha_sochic), a Dubai-based lifestyle creator working with fashion, beauty, wellness and travel brands, named with her written permission",
    sector: "Creator and personal brand",
    region: "United Arab Emirates",
    situation:
      "Everything ran through one person's memory: which brand approved what, what was due, which posts performed, which prospects were worth chasing, and whether the website's own content was still accurate. Growth made it worse.",
    work: [
      "Built an audience data warehouse that syncs every few hours and archives Instagram media before the platform's links expire",
      "Built a prospecting agent that drafts brand outreach from a fact sheet pulled live from Instagram, so it can only cite numbers that are true right now",
      "Built a budget-capped ad autopilot that boosts her best-performing organic posts, with the daily spend hard-capped in the code and re-checked on every run",
      "Audited and rebuilt the site's blog end to end, then replaced unsupervised auto-publishing with three automatic checks a piece must clear before it goes live",
    ],
    outcome: [
      "Publishing and outreach happen on a schedule, without her at a keyboard",
      "Ad spend has a hard ceiling that cannot creep, re-applied automatically every run",
      "The blog publishes itself again, but only after clearing style rules, an editor pass and a live fact-check; anything that fails is held back, not shipped",
    ],
    measurement:
      "Posts published and prospects contacted per month, read from the system's own run logs. Article accuracy is checked by the same automatic fact-checker that gates publication, re-run weekly against everything already live.",
    boundaries: [
      "Any figure in an outreach email must come from a live fact sheet pulled from Instagram. The model cannot cite a number it was not given.",
      "Ad spend is hard-capped in the code itself, with a separate kill switch and a dry-run mode used before it ever went live.",
      "The blog fails closed: if a check errors, times out, or the piece does not clear the bar, it is held back automatically rather than published and fixed later.",
    ],
    withheld: "Her brand deal terms, her rates, and her exact audience figures.",
    serviceKeys: ["ai-agents", "data-and-reporting"],
    stackKeys: ["supabase", "vercel", "claude", "resend"],
    published: true,
    updatedAt: "2026-08-24",
    order: 5,
  },
  {
    key: "property-sales-agent",
    title: "A sales agent that cannot quote a price that does not exist",
    clientShape: "A residential property brokerage",
    sector: "Property",
    region: "United Arab Emirates",
    situation:
      "Leads arrived from web forms, advertising and developer lists, with no single record per person. First replies were slow and inconsistent, and the best closers spent their day on enquiries that were never going to convert.",
    work: [
      "Built identity resolution so one person across several channels becomes one record",
      "Built a conversational agent grounded in the brokerage's live inventory, configured from a database row so it can be changed without a deploy",
      "Built a second pass that extracts budget, intent and timeline, and decides when to hand a lead to a person",
      "Built a guardrail that blocks any quoted price above the real inventory ceiling, regenerates once, and escalates to a human if it fails again",
    ],
    outcome: [
      "Every enquiry gets a grounded first reply and a structured record",
      "Closers receive a dossier instead of a cold inbox",
      "The guardrail is tested by a seven-case trick suite and enforced live on every reply",
    ],
    measurement:
      "First-reply time and lead-to-viewing rate, read from the conversation and booking tables before and after.",
    boundaries: [
      "The agent may only mention projects, unit types and prices that appear verbatim in the inventory.",
      "Voice and WhatsApp channels are designed but not yet live. The email channel is.",
    ],
    withheld: "The brokerage, the developers, the units and the prices.",
    serviceKeys: ["ai-agents"],
    stackKeys: ["nextjs", "supabase", "claude", "resend", "vercel"],
    published: false,
    updatedAt: "2026-08-22",
    order: 6,
  },
];

export const publishedCaseShapes: CaseShape[] = caseShapes
  .filter((c) => c.published)
  .sort((a, b) => a.order - b.order);

export const caseShapesByKey = Object.fromEntries(
  caseShapes.map((c) => [c.key, c])
) as Record<string, CaseShape>;

export function caseShapesForService(key: ServiceKey): CaseShape[] {
  return publishedCaseShapes.filter((c) => c.serviceKeys.includes(key));
}
