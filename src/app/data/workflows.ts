/**
 * Named workflows, written the way a buyer searches for them.
 *
 * The four entries in services.ts are how an engagement is shaped. These are
 * the things people actually type into a search box: "AI chatbot for customer
 * service", "AI research agent", "intelligent document processing". Each one
 * is a workflow we have already built and are running, drafted from
 * docs/WORKFLOW_CATALOGUE.md, which is the source of truth for what exists.
 *
 * Rules, same as everywhere else on this site:
 *   - `provenIn` names the real system behind the page, anonymised. No client
 *     is named. A page with nothing to put in that field does not ship.
 *   - Every figure quoted in the copy exists in proof.ts with a source.
 *   - Nothing here may claim something the catalogue lists as a gap. In
 *     particular: no WhatsApp automation, no Arabic or bilingual delivery,
 *     no phone answering, no SEO agent.
 *
 * These render through the same /services/[slug] page and the same row
 * component as services.ts, so a workflow carries every field a service does.
 * They are deliberately kept out of `servicesOrdered`, which drives the nav,
 * the footer, the homepage and the enquiry form: those stay at four.
 */

import type { Service } from "./services";

export type WorkflowKey =
  | "ai-chatbot-for-customer-service"
  | "ai-research-agent"
  | "intelligent-document-processing";

export interface Workflow extends Omit<Service, "key"> {
  key: WorkflowKey;
  /** The phrase this page is written to be found by. */
  searchTerm: string;
  /** Other phrasings for the same job. Rendered as alternateName. */
  alsoCalled: string[];
  /** The system this workflow already runs in, anonymised. Never empty. */
  provenIn: string;
  /** Published case shapes that prove it, by caseShapes.ts key. */
  caseKeys: string[];
}

export const workflows: Workflow[] = [
  {
    key: "ai-chatbot-for-customer-service",
    icon: "agent",
    hue: "plum",
    name: "AI chatbot for customer service",
    navLabel: "AI chatbot for customer service",
    searchTerm: "AI chatbot for customer service",
    alsoCalled: [
      "AI concierge",
      "AI customer support agent",
      "customer service automation",
    ],
    seoTitle: "AI chatbot for customer service in Dubai",
    seoDescription:
      "A customer service chatbot wired to your live records, so every answer comes from what your systems actually say. Ours scored 40 out of 40 on a graded test set, including the questions that only pass by refusing.",
    cardHeadline: "Answer customers at 2am, from what your systems actually say.",
    summary:
      "A chatbot connected to your live records rather than a page of FAQs. It answers from the data, hands over to a person where you decide, and says it does not know instead of inventing.",
    problem:
      "The same questions arrive all day and half the night. Where is my order, what does it cost, what time does it start, what do I still owe. One or two people answer them by hand, the answer changes with whoever is on shift, and anything asked after six waits until morning. The customer who waits asks someone else.",
    description:
      "We wire the chatbot to the systems that hold the answers, so it reads live records instead of a document someone wrote six months ago. Then we grade it the way a customer will use it: a test set of real questions with known answers, including the ones where the only correct reply is to refuse or fetch a person. It ships with its limits written down, and every conversation lands in one log your team can read.",
    deliverables: [
      "A chatbot on your site, and in the messaging app your customers already use, answering from your live data",
      "A written boundary: what it answers, what it hands to a person, and what it must never say",
      "A graded test set of real customer questions, refusals included, re-run on every change",
      "Handover to a named person at the points you choose, with the conversation attached",
      "One log of every conversation and every change the chatbot made, readable without an engineer",
      "A handover session so your team can change its answers without us",
    ],
    goodFit: [
      "The same questions arrive twenty or more times a week",
      "The answers already live in a system, even if that system is a spreadsheet",
      "Someone inside the business can own the answers after launch",
    ],
    elsewhere: [
      {
        situation: "The answers live in documents nobody can search",
        solution:
          "Start with document processing. Once the paperwork is a database, the chatbot has something true to answer from.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "You want the phone answered too",
        solution:
          "Start with the written channels, where every answer is graded and logged. Bring the phone requirement to the first call and we will tell you what it takes.",
        href: "/contact",
      },
      {
        situation: "Nobody has written down what a good answer is",
        solution:
          "The two-week assessment settles that first: the real questions, the correct answers, and who signs them off. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["nextjs", "supabase", "claude", "telegram", "vercel"],
    proofRefs: ["conciergeEvals", "tables", "integrations"],
    proofProduct: null,
    provenIn:
      "Built for a private multi-day event running across two countries: a concierge on the web and inside the guests' own messaging app, answering from the live plan rather than a copy of it. When it updates the plan it uses the same path a person does, so there is one audit log. It scored 40 out of 40 on a test set of real guest questions, including seven where the correct answer was to refuse. The same shape answers market questions inside a messaging app for our own market intelligence product.",
    caseKeys: ["private-event-concierge"],
    typicalEngagement:
      "Three to six weeks from scope to a chatbot answering customers in production, then a monthly retainer to run it, widen what it can answer and re-run the test set.",
    engagementShort: "Three to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Graded on real questions before launch",
    event: "workflow_chatbot_clicked",
    updatedAt: "2026-08-25",
    order: 1,
  },
  {
    key: "ai-research-agent",
    icon: "data",
    hue: "green",
    name: "AI research agent",
    navLabel: "AI research agent",
    searchTerm: "AI research agent",
    alsoCalled: [
      "automated research reports",
      "AI market research agent",
      "overnight research automation",
    ],
    seoTitle: "AI research agent in Dubai: the brief written overnight",
    seoDescription:
      "An agent that reads your sources overnight and writes the brief before anyone is awake, with every figure computed in code rather than by a model. Running in production daily since March 2026.",
    cardHeadline: "The reading is done and the brief is written before anyone is awake.",
    summary:
      "An agent that reads your sources overnight, works out what changed, and writes it up in plain English, with every figure computed in code rather than by a model.",
    problem:
      "Someone senior starts the day reading. Filings, news, competitor sites, portals, an inbox. Two hours later they have a view, and tomorrow it is the same two hours. The reading cannot be skipped, because the decision at the end of it is real.",
    description:
      "The agent collects from your named sources on a schedule and computes every figure in code before a model sees it. The model writes the sentence around a number it was handed; it is never the source of the number. A watchdog restores the schedule if a job goes missing and pages a person when it cannot, and checks run before any change reaches a reader.",
    deliverables: [
      "A written list of sources, and the schedule each one is read on",
      "The brief itself, in the format your team will actually read, delivered by email or into the tool they already use",
      "Every figure computed in code, with the model allowed to write the sentences but never the numbers",
      "A run log, and an alert to a named person when a source fails or a run does not finish",
      "The collected material kept in a database you own, so the history is yours",
      "A handover session so your team can add a source without us",
    ],
    goodFit: [
      "Someone spends an hour or more a day reading the same sources",
      "The sources are stable enough to name in a list",
      "There is a decision at the end of the reading",
    ],
    elsewhere: [
      {
        situation: "The sources are internal documents nobody can search",
        solution:
          "Start with document processing. The archive becomes a database first, and the agent reads it from there.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "You want the numbers on a dashboard, not in a brief",
        solution:
          "That is reporting automation: the same figures computed in code, assembled into a report that builds itself.",
        href: "/services/data-and-reporting",
      },
      {
        situation: "The reading happens, but nothing is decided afterwards",
        solution:
          "The two-week assessment maps the decision the reading feeds, then names what the brief has to say to move it. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "digitalocean", "resend", "vercel"],
    proofRefs: ["monthsLive", "scheduledJobs", "testFunctions"],
    proofProduct: "trading",
    provenIn:
      "Our own market intelligence product has run this way in production since March 2026: overnight collection, company and filing reading, earnings transcript analysis, and a morning brief written in plain English. Nobody starts it in the morning. The same shape reviews a private event plan overnight and lists what has been overlooked, for a person to approve.",
    caseKeys: ["market-intelligence-platform"],
    typicalEngagement:
      "Two to six weeks from scope to a brief arriving on schedule, then a monthly retainer to run it and add sources as they change.",
    engagementShort: "Two to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Figures computed in code, not by a model",
    event: "workflow_research_agent_clicked",
    updatedAt: "2026-08-25",
    order: 2,
  },
  {
    key: "intelligent-document-processing",
    icon: "record",
    hue: "amber",
    name: "Intelligent document processing",
    navLabel: "Intelligent document processing",
    searchTerm: "intelligent document processing",
    alsoCalled: [
      "AI document extraction",
      "document data extraction",
      "automated data entry from documents",
    ],
    seoTitle: "Intelligent document processing in Dubai",
    seoDescription:
      "PDFs, Word files and spreadsheets turned into one database your team can query, in standard Postgres you own. We turned 719 documents from thirty years of trading into customers, events and a priced menu.",
    cardHeadline: "Thirty years of paperwork, searchable in weeks.",
    summary:
      "Your PDFs, Word files and spreadsheets become one database anyone in the office can query, held in standard Postgres in your own account.",
    problem:
      "The information is already yours. It is in folders of proposals, invoices, order forms and function sheets, in three file formats and four naming conventions. Answering a simple question means opening files one at a time, so the questions that would take an afternoon never get asked.",
    description:
      "We read the documents and extract the fields into a database designed around the questions you need answered. The schema is the control: if there is no field for a passport number, the model has nowhere to write one down. Every extraction is checked against the source, anything uncertain is flagged to a person rather than filed quietly, and the result lands in standard Postgres you own.",
    deliverables: [
      "Your document archive turned into one queryable database, in standard Postgres held in your account",
      "A schema built around the questions you actually ask, and around the fields you have decided not to store",
      "A confidence check on every extraction, with anything uncertain flagged to a person instead of filed quietly",
      "A plain-English question box over the result, so the team asks rather than requests a report",
      "The raw data exported to you, so the records are yours",
      "A written runbook for putting the next batch of documents through",
    ],
    goodFit: [
      "The archive runs to hundreds of files or more",
      "The same fields appear in most of them, even in different layouts",
      "There is a question the business would ask weekly if the answer were quick",
    ],
    elsewhere: [
      {
        situation: "New documents keep arriving",
        solution:
          "Extraction runs on a schedule once the archive is done, so incoming paperwork lands in the same database. We build that agent alongside the first pass.",
        href: "/services/ai-agents",
      },
      {
        situation: "The result has to reach a board pack every month",
        solution:
          "Add reporting automation on top. The report assembles itself from the same database, with every figure computed in code.",
        href: "/services/data-and-reporting",
      },
      {
        situation: "Two teams mean different things by the same field",
        solution:
          "The two-week assessment settles one definition per field before anything is extracted. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "nextjs", "vercel", "cloudflare"],
    proofRefs: ["documentsLiberated", "dishesPriced", "tables"],
    proofProduct: null,
    provenIn:
      "Built for a long-established catering business: 719 documents, being 388 PDFs, 331 Word files and 25 spreadsheets covering thirty years of trading, turned into customers, events and a priced menu of 1,312 dishes the business now quotes from live. A plain-English question box answers from the same database, and incoming proposals are extracted as they arrive.",
    caseKeys: ["catering-quotes-and-kitchen"],
    typicalEngagement:
      "Three to six weeks for the first archive, depending on how many document layouts there are. Extraction of new documents as they arrive runs as a monthly line after that.",
    engagementShort: "Three to six weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "Raw data exported to you",
    event: "workflow_document_processing_clicked",
    updatedAt: "2026-08-25",
    order: 3,
  },
];

export const workflowsOrdered: Workflow[] = workflows
  .slice()
  .sort((a, b) => a.order - b.order);

export const workflowsByKey = Object.fromEntries(
  workflows.map((w) => [w.key, w])
) as Record<WorkflowKey, Workflow>;
