/**
 * Named workflows, written the way a buyer searches for them.
 *
 * The four entries in services.ts are how an engagement is shaped. These are
 * the things people actually type into a search box: "AI chatbot for customer
 * service", "AI research agent", "automated reporting", "AI quoting engine".
 * Each one is a workflow we have already built and are running, drafted from
 * docs/WORKFLOW_CATALOGUE.md, which is the source of truth for what exists.
 *
 * All twenty built rows in that catalogue now have a page. The first three
 * shipped alone in August 2026 because they were the highest-volume search
 * terms; the remaining seventeen were already built and running, and were
 * missing only the copy. Every one of them still has to clear the same bar.
 *
 * Rules, same as everywhere else on this site:
 *   - `provenIn` names the real system behind the page, anonymised. No client
 *     is named. A page with nothing to put in that field does not ship.
 *   - Every figure quoted in the copy exists in proof.ts with a source. Where
 *     the catalogue records a count that proof.ts does not carry, the copy
 *     describes the mechanism instead of quoting the number.
 *   - Nothing here may claim something the catalogue lists as a gap. In
 *     particular: no WhatsApp automation, no Arabic or bilingual delivery,
 *     no phone answering, no SEO agent.
 *
 * These render through the same /services/[slug] page and the same row
 * component as services.ts, so a workflow carries every field a service does.
 * They are deliberately kept out of `servicesOrdered`, which drives the nav,
 * the footer, the homepage and the enquiry form: those stay at four.
 *
 * `family` groups them on /workflows, using the catalogue's own five
 * headings, so the index a reader browses matches the inventory we keep.
 */

import type { Service } from "./services";

export type WorkflowKey =
  | "ai-chatbot-for-customer-service"
  | "ai-research-agent"
  | "intelligent-document-processing"
  | "ask-your-data-agent"
  | "ai-voice-agent"
  | "ai-lead-qualification-agent"
  | "ai-email-agent"
  | "ai-follow-up-automation"
  | "automated-review-requests"
  | "ai-quoting-engine"
  | "ai-outreach-agent"
  | "ai-ad-management-agent"
  | "ai-budget-control-agent"
  | "automated-reporting-agent"
  | "ai-monitoring-agent"
  | "document-generation-automation"
  | "ai-blog-writing-agent"
  | "ai-content-automation"
  | "ai-quality-control-agent"
  | "ai-message-drafting-agent";

/** The catalogue's own five headings. Order here is the order on /workflows. */
export const workflowFamilies = [
  "Research and intelligence",
  "Customer-facing",
  "Commercial",
  "Operations",
  "Content and publishing",
] as const;

export type WorkflowFamily = (typeof workflowFamilies)[number];

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
  /** Which catalogue heading this sits under. Groups the /workflows index. */
  family: WorkflowFamily;
}

export const workflows: Workflow[] = [
  {
    key: "ai-chatbot-for-customer-service",
    family: "Customer-facing",
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
    family: "Research and intelligence",
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
    family: "Research and intelligence",
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
  {
    key: "ask-your-data-agent",
    family: "Research and intelligence",
    icon: "data",
    hue: "teal",
    name: "Ask-your-data agent",
    navLabel: "Ask-your-data agent",
    searchTerm: "ask your data AI",
    alsoCalled: [
      "natural language business intelligence",
      "chat with your database",
      "self-service reporting",
    ],
    seoTitle: "Ask your data: plain-English answers from your own records",
    seoDescription:
      "A question box over your own database. Anyone in the business asks in plain English, the arithmetic is done by the database rather than estimated by a model, and every answer shows the query behind it.",
    cardHeadline: "Ask the business a question and get the answer, not a report request.",
    summary:
      "A plain-English question box over your own records. The model turns the question into a query, the database does the arithmetic, and the answer arrives with the query that produced it.",
    problem:
      "Every question worth asking queues behind the one person who can write the query. How many of these did we do last year, which customers have not ordered since spring, what did this cost us in March. Each one is a request, a wait and a reminder, so most of them are never asked at all.",
    description:
      "We put a question box over the database you already have. The model's job is to turn a question into a query; it never produces the number itself, because the database does the arithmetic and cannot round in your favour. Every answer shows the query it ran, so a sceptical finance person can check it rather than take it on trust. Questions the data cannot answer come back saying so.",
    deliverables: [
      "A question box over your live records, for people who will never write a query",
      "Every figure computed by the database, with the model writing the sentence around it",
      "The query shown under each answer, so any number can be checked at source",
      "A clear answer when the data cannot support the question, rather than a confident guess",
      "Access rules, so a person only ever queries the records they are allowed to see",
      "A log of what was asked, which shows you the reports worth building next",
    ],
    goodFit: [
      "Your records are already in one database, even an untidy one",
      "People wait on someone else to answer routine questions about the business",
      "The same handful of questions come round every week",
    ],
    elsewhere: [
      {
        situation: "The answers are still in documents rather than a database",
        solution:
          "Start with document processing. Once the paperwork is one database, the question box has something true to answer from.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "The same figures are needed every month, on a schedule",
        solution:
          "That is reporting automation: the report assembles itself and arrives, instead of waiting to be asked.",
        href: "/services/automated-reporting-agent",
      },
      {
        situation: "Two teams mean different things by the same word",
        solution:
          "The two-week assessment settles one definition per field first, so an answer means the same thing to everyone reading it. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "nextjs", "vercel"],
    proofRefs: ["tables", "routes", "integrations"],
    proofProduct: null,
    provenIn:
      "Running inside a catering business built from thirty years of paperwork: staff ask about customers, past events and pricing in plain English and get an answer from the live records, without opening a spreadsheet or asking anyone to build a report. The same database holds the priced menu the business quotes from.",
    caseKeys: ["catering-quotes-and-kitchen"],
    typicalEngagement:
      "Two to four weeks over a database that already exists, then a monthly line to widen what it can answer as people find the edges.",
    engagementShort: "Two to four weeks",
    commercial: "Scoped in writing",
    commercialSub: "Arithmetic done by the database",
    event: "workflow_ask_your_data_clicked",
    updatedAt: "2026-08-25",
    order: 4,
  },
  {
    key: "ai-voice-agent",
    family: "Customer-facing",
    icon: "agent",
    hue: "violet",
    name: "AI voice agent",
    navLabel: "AI voice agent",
    searchTerm: "AI voice agent",
    alsoCalled: [
      "voice assistant for business",
      "spoken AI assistant",
      "hands-free business assistant",
    ],
    seoTitle: "AI voice agent: ask out loud, and hear how it got there",
    seoDescription:
      "A voice agent that answers a spoken question in a few sentences and can explain the reasoning behind the answer. Running in our own market intelligence product.",
    cardHeadline: "Ask out loud, get a short answer, and hear how it got there.",
    summary:
      "A voice interface over your own systems. Someone asks a question out loud, gets a few sentences back, and can ask the agent to explain how it reached the answer.",
    problem:
      "Some of your people are never at a desk. They are driving, on site, between meetings or walking a floor. The information they need exists, but reaching it means stopping, opening a laptop and clicking through screens built for someone sitting down.",
    description:
      "We build a voice layer over the systems that already hold the answers, tuned for how people actually listen: a few sentences, not a paragraph. The agent assembles the same context it would for a written answer, and every figure it speaks is computed in code first. It can be asked to explain itself, which is what turns a spoken answer into one somebody will act on.",
    deliverables: [
      "A voice agent answering spoken questions from your live systems, on the device your team already carries",
      "Answers shaped for listening: short, direct, and never a read-aloud dashboard",
      "An explanation on request, so a person can hear what the answer was based on",
      "Every figure computed in code before it is spoken",
      "A written boundary: what it answers out loud, and what it sends as text instead",
      "A transcript of every exchange, in one log your team can read",
    ],
    goodFit: [
      "Your people need answers while their hands and eyes are busy",
      "The information already sits in a system a screen can reach",
      "Short answers are genuinely more useful than a full report",
    ],
    elsewhere: [
      {
        situation: "You want inbound calls answered",
        solution:
          "Start with the written and spoken channels we run today, and bring the telephony requirement to the first call. We will tell you exactly what it takes to add.",
        href: "/contact",
      },
      {
        situation: "Customers, not staff, are the ones asking",
        solution:
          "Start with the chatbot, where every answer is graded against a test set before launch and each conversation is logged.",
        href: "/services/ai-chatbot-for-customer-service",
      },
      {
        situation: "The question is really a report",
        solution:
          "The ask-your-data agent answers in writing from the same records, and shows the query behind every figure.",
        href: "/services/ask-your-data-agent",
      },
    ],
    stackKeys: ["claude", "supabase", "digitalocean", "nextjs"],
    proofRefs: ["monthsLive", "dataStreams", "testFunctions"],
    proofProduct: "trading",
    provenIn:
      "Running inside our own market intelligence product: a spoken question about a position or a market gets a few sentences back, and the agent can be asked to explain what the answer was built from. It reads the same live streams the written brief reads, so the spoken answer and the morning brief never disagree.",
    caseKeys: ["market-intelligence-platform"],
    typicalEngagement:
      "Three to six weeks over systems that already answer in writing, then a monthly line to run it and widen what it covers.",
    engagementShort: "Three to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Explains its own answer on request",
    event: "workflow_voice_agent_clicked",
    updatedAt: "2026-08-25",
    order: 5,
  },
  {
    key: "ai-lead-qualification-agent",
    family: "Customer-facing",
    icon: "advisory",
    hue: "amber",
    name: "AI lead qualification agent",
    navLabel: "AI lead qualification agent",
    searchTerm: "AI lead qualification",
    alsoCalled: [
      "AI sales qualification",
      "automated lead scoring",
      "lead qualification automation",
    ],
    seoTitle: "AI lead qualification: every enquiry answered and scored",
    seoDescription:
      "An agent that replies to every enquiry within minutes, asks the qualifying questions, and scores what comes back, so your team opens the conversations worth having first.",
    cardHeadline: "Every enquiry answered in minutes, and ranked before anyone opens it.",
    summary:
      "An agent that replies to each enquiry, asks the questions that decide whether it is worth pursuing, and scores the answers so your team works the best ones first.",
    problem:
      "Enquiries arrive faster than anyone can work them, and they arrive incomplete. Budget, timing and requirement are all missing, so qualifying means a round of emails that takes two days. By then the serious buyer has spoken to someone else, and the unserious one has taken an hour of your best salesperson's morning.",
    description:
      "The agent replies while the enquiry is still warm, asks the two or three questions that actually decide whether this is a fit, and records the answers against the contact. Scoring runs on rules you set, not on a model's opinion, so a score means the same thing every time and can be argued with. Anything above the line goes to a named person with the conversation attached.",
    deliverables: [
      "A reply to every enquiry within minutes, at any hour, in your own tone",
      "The qualifying questions asked and the answers recorded against the contact",
      "A score computed from rules you set, so it means the same thing every time",
      "Handover to a named person the moment an enquiry passes the line, conversation attached",
      "Every enquiry, answer and score in one database you own",
      "A weekly read on what is actually arriving, so the rules can be tuned against reality",
    ],
    goodFit: [
      "More enquiries arrive than your team can work the same day",
      "The same two or three questions decide most of them",
      "Somebody can own the scoring rules after launch",
    ],
    elsewhere: [
      {
        situation: "Enquiries arrive as email rather than through a form",
        solution:
          "The email agent reads the inbox directly, files what arrives and answers it, then hands qualified conversations on in the same way.",
        href: "/services/ai-email-agent",
      },
      {
        situation: "The problem is the ones that go quiet, not the ones arriving",
        solution:
          "Follow-up automation chases what stalled, at the right interval, without anyone having to remember.",
        href: "/services/ai-follow-up-automation",
      },
      {
        situation: "Nobody agrees what a good lead looks like",
        solution:
          "The two-week assessment settles the rules first, from your own closed deals. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "nextjs", "resend", "vercel"],
    proofRefs: ["routes", "tables", "integrations"],
    proofProduct: null,
    provenIn:
      "Built for a property sales business: inbound enquiries are answered, qualified and scored by an agent, with conversations and contacts held in one database the team works from. It is built so it cannot quote a price that does not exist in the records, which is the difference between an agent that helps and one that has to be checked.",
    caseKeys: [],
    typicalEngagement:
      "Three to five weeks from scope to enquiries being answered and scored in production, then a monthly line to tune the rules against what actually closes.",
    engagementShort: "Three to five weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Scored on your rules, not a model's opinion",
    event: "workflow_lead_qualification_clicked",
    updatedAt: "2026-08-25",
    order: 6,
  },
  {
    key: "ai-email-agent",
    family: "Customer-facing",
    icon: "record",
    hue: "blue",
    name: "AI email agent",
    navLabel: "AI email agent",
    searchTerm: "AI email agent",
    alsoCalled: [
      "automated email response",
      "AI inbox automation",
      "email triage automation",
    ],
    seoTitle: "AI email agent: the inbox that reads, files and answers itself",
    seoDescription:
      "An agent woken by inbound email. It reads the message, files it against the right contact, and drafts or sends the answer under rules you set. Running in production for a property sales business.",
    cardHeadline: "The email is read, filed and answered before anyone opens the inbox.",
    summary:
      "Inbound email wakes the agent. It reads the message, files it against the right contact and conversation, and answers it under rules you wrote down.",
    problem:
      "The inbox is where your business actually runs, and it is the least structured system you have. Enquiries, documents and questions arrive mixed together, get answered in whatever order they were seen, and everything the messages contain stays locked in the mail account of whoever replied.",
    description:
      "The agent is triggered by the email itself, not a schedule, so nothing waits. It reads what arrived, matches it to the contact and thread it belongs to, and files both the message and what it contained into a database you own. Then it answers, under a written rule: some messages it sends, some it drafts for a person, some it hands over untouched. The line between those three is yours to set and change.",
    deliverables: [
      "An agent triggered by inbound email, reading and filing every message against the right contact",
      "A written rule for what it answers, what it drafts for a person, and what it hands over untouched",
      "The contents of the messages landed in a database you own, not locked in a mail account",
      "Answers in your tone, checked against what your records actually say",
      "Handover to a named person with the whole thread attached",
      "One log of every message read, filed and answered",
    ],
    goodFit: [
      "A shared inbox is where the work actually arrives",
      "Most messages fall into a handful of shapes you could name",
      "The answers already exist in a system or a person's head, consistently",
    ],
    elsewhere: [
      {
        situation: "The messages carry documents that need reading",
        solution:
          "Document processing extracts what the attachments contain into the same database, so the record is complete rather than a list of filenames.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "The inbox is really a sales pipeline",
        solution:
          "Lead qualification answers, asks the qualifying questions and scores what comes back, so your team works the best conversations first.",
        href: "/services/ai-lead-qualification-agent",
      },
      {
        situation: "Customers ask the same questions in every channel, not just email",
        solution:
          "The chatbot answers on your site and in messaging from the same records, graded on a test set before launch.",
        href: "/services/ai-chatbot-for-customer-service",
      },
    ],
    stackKeys: ["claude", "supabase", "nextjs", "resend", "vercel"],
    proofRefs: ["routes", "tables", "scheduledJobs"],
    proofProduct: null,
    provenIn:
      "Built for a property sales business: an inbound email wakes the agent through a webhook, the message is read and ingested against contacts and conversations, and the reply goes out under written rules. The inbox became a database the business can query instead of an archive only search can reach.",
    caseKeys: [],
    typicalEngagement:
      "Three to five weeks from scope to the inbox being read and answered in production, then a monthly line to widen the rules as the edges appear.",
    engagementShort: "Three to five weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Send, draft or hand over: your rule",
    event: "workflow_email_agent_clicked",
    updatedAt: "2026-08-25",
    order: 7,
  },
  {
    key: "ai-follow-up-automation",
    family: "Customer-facing",
    icon: "measure",
    hue: "green",
    name: "AI follow-up automation",
    navLabel: "AI follow-up automation",
    searchTerm: "AI follow-up automation",
    alsoCalled: [
      "automated lead nurture",
      "follow-up sequences",
      "re-engagement automation",
    ],
    seoTitle: "AI follow-up automation: nothing goes quiet unnoticed",
    seoDescription:
      "An agent that notices what went quiet and follows up at the right interval, in your tone, without anyone keeping a list. Running in four of our production systems.",
    cardHeadline: "The follow-up happens because it is scheduled, not because someone remembered.",
    summary:
      "An agent that watches for what went quiet, and sends the follow-up at the interval you chose, in your tone, with a record of every nudge.",
    problem:
      "The quote goes out and nothing comes back. The client misses a session and nobody notices for a fortnight. Following up is nobody's job, so it happens when someone feels guilty, which is late, uneven and impossible to measure. The money lost this way never appears on any report.",
    description:
      "We write down what counts as gone quiet in your business, for each kind of thread, and the agent checks for it on a schedule. The intervals, the tone and the give-up point are rules you set, not a model's mood. Every nudge is recorded against the contact, and a reply pulls the thread straight back to a person. What was silently leaking becomes a number you can watch.",
    deliverables: [
      "A written definition of gone quiet for each kind of thread: enquiry, quote, booking, client",
      "Follow-ups sent at the interval you set, in your tone, stopping at the point you chose",
      "A reply routed straight to a named person with the history attached",
      "Every nudge recorded against the contact, so nobody is chased twice",
      "A weekly count of what was chased, what came back and what stayed quiet",
      "The rules editable by your team, without us",
    ],
    goodFit: [
      "Value is leaking between the first contact and the close, and nobody can say how much",
      "The right interval and message are knowable, even if nobody has written them down",
      "There is a system, even a simple one, that records when contact happened",
    ],
    elsewhere: [
      {
        situation: "The enquiries are not being answered in the first place",
        solution:
          "Start with lead qualification, so every enquiry gets a first response in minutes. Following up comes second.",
        href: "/services/ai-lead-qualification-agent",
      },
      {
        situation: "The follow-up you want is a review request",
        solution:
          "That is its own workflow, timed to the moment a happy client is most likely to act on it.",
        href: "/services/automated-review-requests",
      },
      {
        situation: "Nobody can say where the leaks actually are",
        solution:
          "The two-week assessment maps the pipeline and puts a number on each gap, so the first automation is the one that pays. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "resend", "vercel"],
    proofRefs: ["scheduledJobs", "liveProducts", "routes"],
    proofProduct: "learning",
    provenIn:
      "Running in four of our production systems at once: a counselling practice chases unanswered intake on a schedule, an events business nudges hourly on unconfirmed items and retains wallet balances, a creator business follows up inbound enquiries, and our learning product runs streak and engagement nudges. Same mechanism, four businesses, nobody keeping a list.",
    caseKeys: ["counselling-practice-intake", "creator-business-engine"],
    typicalEngagement:
      "Two to four weeks from scope to the first follow-ups going out, then a monthly line to tune intervals and tone against what actually comes back.",
    engagementShort: "Two to four weeks",
    commercial: "Scoped in writing",
    commercialSub: "Intervals and tone are your rules",
    event: "workflow_follow_up_clicked",
    updatedAt: "2026-08-25",
    order: 8,
  },
  {
    key: "automated-review-requests",
    family: "Customer-facing",
    icon: "rule",
    hue: "orange",
    name: "Automated review requests",
    navLabel: "Automated review requests",
    searchTerm: "automated review requests",
    alsoCalled: [
      "reputation automation",
      "review generation",
      "Google review automation",
    ],
    seoTitle: "Automated review requests, sent at the moment that works",
    seoDescription:
      "A review request sent at the moment a happy client is most likely to leave one, chosen by rules you set. Running in production for a counselling practice.",
    cardHeadline: "Ask for the review at the one moment the client wants to give it.",
    summary:
      "An agent that asks a client for a review at the right moment, chosen by rules you set, and never asks the same person twice.",
    problem:
      "Your happiest clients would leave a review if asked at the right moment, and nobody asks, because the right moment is different for every client and remembering it is nobody's job. Meanwhile the one unhappy customer needs no reminder at all, and the public record tilts their way by default.",
    description:
      "We define the trigger with you: the completed booking, the finished engagement, the third visit, whatever marks the moment your clients feel the value. The agent watches for it and sends the request then, in your voice, with the link that takes ten seconds. Who is asked, when, and how often is a written rule; the outcome is a public record that looks like your actual client base.",
    deliverables: [
      "A trigger defined from your own records: the moment a request is most likely to land",
      "The request sent in your voice, with a link that takes seconds to act on",
      "A written rule for who is asked, when, and who is left alone",
      "Nobody asked twice, and no request after a complaint",
      "Every request and outcome recorded, so the ask rate and the response rate are numbers",
      "The trigger editable by your team as the business changes",
    ],
    goodFit: [
      "Clients are happy in person and invisible online",
      "Your records can already say when the good moment happens",
      "Reviews genuinely move buying decisions in your market",
    ],
    elsewhere: [
      {
        situation: "Clients go quiet before the good moment ever arrives",
        solution:
          "Follow-up automation is the workflow for that leak: chase what stalled first, then ask for the review.",
        href: "/services/ai-follow-up-automation",
      },
      {
        situation: "You want the whole client journey handled, not one message",
        solution:
          "That is an agent build: intake, reminders, follow-up and the review request as one system with one log.",
        href: "/services/ai-agents",
      },
      {
        situation: "The reviews exist but nobody is reading what they say",
        solution:
          "A monitoring agent watches what is being said and escalates to a named person when something needs answering.",
        href: "/services/ai-monitoring-agent",
      },
    ],
    stackKeys: ["supabase", "resend", "vercel", "nextjs"],
    proofRefs: ["scheduledJobs", "liveProducts", "deletedAi"],
    proofProduct: null,
    provenIn:
      "Running in production for a counselling practice: the request goes out on a schedule driven by the practice's own records of completed work, in the practice's voice, with a written rule for who is asked and who is left alone. It is one of the systems where we swapped a model out for plain code, because a timing rule does not need one.",
    caseKeys: ["counselling-practice-intake"],
    typicalEngagement:
      "One to three weeks from scope to the first requests going out, usually alongside follow-up automation on the same records.",
    engagementShort: "One to three weeks",
    commercial: "Fixed fee",
    commercialSub: "Timing is a rule, not a model",
    event: "workflow_review_requests_clicked",
    updatedAt: "2026-08-25",
    order: 9,
  },
  {
    key: "ai-quoting-engine",
    family: "Commercial",
    icon: "product",
    hue: "amber",
    name: "AI quoting engine",
    navLabel: "AI quoting engine",
    searchTerm: "AI quoting engine",
    alsoCalled: [
      "instant quote automation",
      "product configurator",
      "self-service pricing",
    ],
    seoTitle: "AI quoting engine: the customer prices it themselves",
    seoDescription:
      "A public configurator running your real costing rules, so a customer designs and prices the job themselves and the enquiry arrives already priced. Ours prices 1,312 dishes live, including staffing, transport and VAT.",
    cardHeadline: "The enquiry arrives already priced, at any hour, by your own rules.",
    summary:
      "A public configurator that runs your real costing rules, so a customer designs the job, sees the price, and sends you an enquiry that is already a quote.",
    problem:
      "Every quote waits for the one person who knows the pricing. The enquiry arrives on Saturday, the spreadsheet opens on Monday, the quote goes out on Wednesday, and the customer bought elsewhere on Tuesday. The pricing knowledge is real, but it lives in one head and one spreadsheet, so it queues.",
    description:
      "We take the costing rules out of the spreadsheet and put them in code: the components, the margins, the staffing, the delivery, the tax. A customer configures what they want on a public page and watches the price move as they change it. The arithmetic is computed, never estimated by a model, so the price on the screen is one you can honour. What arrives in your inbox is a designed, priced job attached to a name.",
    deliverables: [
      "A public configurator running your real costing rules, open at any hour",
      "Every price computed in code, including the parts a spreadsheet hides: staffing, delivery, tax",
      "The enquiry arriving as a designed, priced job attached to a contact",
      "Your pricing rules in one place, editable by your team, instead of one person's spreadsheet",
      "A floor under every price, so nothing can be configured below the margin you set",
      "A record of what people price and abandon, which is the demand you are not meeting",
    ],
    goodFit: [
      "Quotes are assembled from parts by rules a spreadsheet could state",
      "Enquiries arrive outside hours and wait for a person",
      "The pricing knowledge lives with one or two people",
    ],
    elsewhere: [
      {
        situation: "The pricing rules exist only in old quotes and paperwork",
        solution:
          "Document processing first: the archive becomes a database, and the real rules are read out of what you actually charged.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "Every job is priced by judgement, not by rules",
        solution:
          "The two-week assessment writes the rules down first, from your own closed jobs, and tells you honestly how much of the pricing can be computed. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
      {
        situation: "The quote goes out and then goes quiet",
        solution:
          "Follow-up automation chases every open quote at the interval you set, so the configurator's work is not wasted.",
        href: "/services/ai-follow-up-automation",
      },
    ],
    stackKeys: ["nextjs", "supabase", "vercel", "cloudflare"],
    proofRefs: ["dishesPriced", "documentsLiberated", "tables"],
    proofProduct: null,
    provenIn:
      "Built for a long-established catering business: a public menu builder prices 1,312 dishes live using the business's real function-sheet maths, including staffing, transport and VAT. The rules came out of thirty years of paperwork we had already turned into a database. Enquiries now arrive designed and priced instead of as a phone call that starts from zero.",
    caseKeys: ["catering-quotes-and-kitchen"],
    typicalEngagement:
      "Four to eight weeks depending on how much of the pricing lives in heads rather than rules, then a monthly line as products and prices change.",
    engagementShort: "Four to eight weeks",
    commercial: "Scoped in writing",
    commercialSub: "Prices computed, never estimated",
    event: "workflow_quoting_engine_clicked",
    updatedAt: "2026-08-25",
    order: 10,
  },
  {
    key: "ai-outreach-agent",
    family: "Commercial",
    icon: "advisory",
    hue: "plum",
    name: "AI outreach agent",
    navLabel: "AI outreach agent",
    searchTerm: "AI outreach agent",
    alsoCalled: [
      "AI sales agent",
      "automated prospecting",
      "AI pitch generation",
    ],
    seoTitle: "AI outreach agent: pitches grounded in live numbers",
    seoDescription:
      "An agent that scores your prospects daily and writes the top pitches, grounding every figure in live data rather than a claim. Running every day inside a creator business.",
    cardHeadline: "Wake up to today's best prospects, each pitch already grounded in live numbers.",
    summary:
      "An agent that scores your prospect list daily and drafts the pitches worth sending, with every number in them pulled from live data rather than remembered or invented.",
    problem:
      "Outreach dies of friction. Deciding who to contact today takes research, and writing a pitch that quotes real numbers takes more, so the pipeline runs on bursts of effort followed by silence. The generic blast is the alternative, and everyone can smell it.",
    description:
      "The agent runs daily. It scores every prospect on rules you set, picks the few worth pursuing today, and drafts each pitch from live data, so the figures in it are current facts rather than a model's guess. Nothing sends itself: the drafts land with a person, who edits or approves. The agent does the research and the first draft; the relationship stays yours.",
    deliverables: [
      "A daily scored ranking of your prospect list, on rules you set and can change",
      "The top pitches drafted each day, every figure pulled from live data at the moment of writing",
      "A person approving each send: the agent drafts, it does not free-run",
      "Every pitch and outcome recorded, so what works is a number rather than a feeling",
      "The scoring rules editable by your team",
      "One log of everything drafted, approved and sent",
    ],
    goodFit: [
      "There is a real list to work: prospects, partners, sponsors, accounts",
      "A good pitch in your market quotes numbers, and stale ones embarrass",
      "Someone will spend ten minutes a day approving what goes out",
    ],
    elsewhere: [
      {
        situation: "The problem is inbound enquiries, not outbound pitches",
        solution:
          "Lead qualification answers, questions and scores what already arrives, so the fastest win is there.",
        href: "/services/ai-lead-qualification-agent",
      },
      {
        situation: "Pitches go out, then the thread goes quiet",
        solution:
          "Follow-up automation chases every open conversation at the interval you set.",
        href: "/services/ai-follow-up-automation",
      },
      {
        situation: "You cannot yet say what a good prospect looks like",
        solution:
          "The two-week assessment writes the scoring rules from the deals you have actually closed. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "vercel", "resend"],
    proofRefs: ["scheduledJobs", "integrations", "liveProducts"],
    proofProduct: null,
    provenIn:
      "Running every day inside a creator business: a daily agent scores the brand list and generates the top three pitches, grounding every figure in live audience data pulled at the moment of writing. The pitches arrive as drafts for the owner to approve, so the voice stays theirs.",
    caseKeys: ["creator-business-engine"],
    typicalEngagement:
      "Three to five weeks from scope to a daily scored list and drafted pitches, then a monthly line to tune the scoring against what converts.",
    engagementShort: "Three to five weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "A person approves every send",
    event: "workflow_outreach_agent_clicked",
    updatedAt: "2026-08-25",
    order: 11,
  },
  {
    key: "ai-ad-management-agent",
    family: "Commercial",
    icon: "measure",
    hue: "blue",
    name: "AI ad management agent",
    navLabel: "AI ad management agent",
    searchTerm: "AI ad management",
    alsoCalled: [
      "automated campaign optimisation",
      "ad automation",
      "paid ads autopilot",
    ],
    seoTitle: "AI ad management: the campaign lifecycle, run by rules",
    seoDescription:
      "An agent that runs the paid ads lifecycle: sets up audiences, launches, puts more behind what is working, and closes out. With the budget ceiling written in code. Running daily in production.",
    cardHeadline: "Campaigns launched, boosted and closed by rules, not by whoever had time.",
    summary:
      "An agent that runs the campaign lifecycle end to end: audiences set up, campaigns launched, budget moved to what is working, finished campaigns closed out and archived.",
    problem:
      "Paid ads reward attention, and attention is exactly what a small team cannot spare. Campaigns launch late, winners run out of budget while losers keep spending, and closing out is a chore nobody does, so the account fills with zombie campaigns and the numbers stop meaning anything.",
    description:
      "We put the lifecycle in code: how an audience is set up, what launches when, the rule that decides a campaign is working, what more it gets when it is, and how a finished campaign is closed and archived. The agent applies those rules daily, and the hard ceiling on spend is enforced in code rather than written in a prompt, so it cannot be talked past. You read a scoreboard, not a dashboard of fifty campaigns.",
    deliverables: [
      "The campaign lifecycle written as rules: setup, launch, boost, close, archive",
      "Budget moved toward what is working, on a rule you set and can read",
      "A hard spending ceiling enforced in code, which no prompt can argue with",
      "Audiences set up consistently instead of rebuilt by hand each time",
      "Finished campaigns closed and archived, so the account stays readable",
      "A scoreboard of what ran, what it cost and what it returned",
    ],
    goodFit: [
      "Money is already going into paid channels every month",
      "Nobody's whole job is watching the campaigns",
      "You can say, or want help saying, what a working campaign looks like",
    ],
    elsewhere: [
      {
        situation: "The worry is spend running away, more than performance",
        solution:
          "Start with the spend control agent alone: the ceiling in code, on the account you already run.",
        href: "/services/ai-budget-control-agent",
      },
      {
        situation: "The creative exists but the reporting is the mess",
        solution:
          "Reporting automation assembles all channels into one set of numbers, and is often the right first step.",
        href: "/services/automated-reporting-agent",
      },
      {
        situation: "You cannot yet say what a lead is worth",
        solution:
          "The two-week assessment puts a number on it first, so the boost rule optimises for profit rather than clicks. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["supabase", "vercel", "ga4", "stripe"],
    proofRefs: ["scheduledJobs", "integrations", "liveProducts"],
    proofProduct: null,
    provenIn:
      "Running inside a creator business: an ad autopilot sets up audiences, launches reels and carousels, boosts what performs, and completes and archives finished campaigns, with a scoreboard over the top and a hard budget cap enforced in the campaign engine itself.",
    caseKeys: ["creator-business-engine"],
    typicalEngagement:
      "Four to six weeks from scope to the lifecycle running on your account, then a monthly line to tune the rules against returns.",
    engagementShort: "Four to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "The ceiling is in code",
    event: "workflow_ad_management_clicked",
    updatedAt: "2026-08-25",
    order: 12,
  },
  {
    key: "ai-budget-control-agent",
    family: "Commercial",
    icon: "boundary",
    hue: "orange",
    name: "AI budget control agent",
    navLabel: "AI budget control agent",
    searchTerm: "AI budget control",
    alsoCalled: [
      "ad spend automation",
      "spend cap automation",
      "budget guardrails",
    ],
    seoTitle: "AI budget control: the spending cap that lives in code",
    seoDescription:
      "A spending ceiling enforced in code, not written in a prompt, so an automated system can never spend past the line you set. Running live under our own campaign engine.",
    cardHeadline: "The budget line an automated system cannot cross, because it is code.",
    summary:
      "A hard ceiling on automated spend, enforced in code before any money moves, with a scoreboard showing spend against the cap in real time.",
    problem:
      "The moment a system can spend money on its own, the question is what stops it. A prompt that says stay under budget is a request, not a control: models drift, campaigns compound, and the failure arrives as a bill. Automation without a hard limit is a risk your finance team is right to refuse.",
    description:
      "We put the ceiling where it cannot be argued with: in code, checked before any spend is committed, not reviewed after. The cap, the period and what happens at the line are written down and versioned. Alongside it runs a scoreboard, so spend against cap is a number anyone can read at any moment, and an alert to a named person as the line approaches. This is the control that makes the rest of the automation safe to say yes to.",
    deliverables: [
      "A spending ceiling enforced in code, checked before money moves, never after",
      "A written policy: the cap, the period, and exactly what happens at the line",
      "A live scoreboard of spend against cap, readable by anyone",
      "An alert to a named person as the line approaches, not when it is crossed",
      "Every spend decision logged with what was checked and what was allowed",
      "The cap changeable by named people only, with a record of who changed it",
    ],
    goodFit: [
      "A system, ours or anyone's, is about to spend money unattended",
      "Finance needs a control they can audit, not a reassurance",
      "You want automation and a bounded worst case at the same time",
    ],
    elsewhere: [
      {
        situation: "You want the campaigns run, not just capped",
        solution:
          "The ad management agent runs the whole lifecycle with this control built in.",
        href: "/services/ai-ad-management-agent",
      },
      {
        situation: "The concern is what an agent does, not what it spends",
        solution:
          "Every agent we build ships with a scope sheet: what it may do, what it must hand to a person, and how every action is logged.",
        href: "/services/ai-agents",
      },
      {
        situation: "You are choosing how much control the whole system needs",
        solution:
          "The two-week assessment writes the boundary first: what runs alone, what a person approves, and where the caps sit. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["supabase", "vercel", "stripe", "ga4"],
    proofRefs: ["deletedAi", "testFunctions", "scheduledJobs"],
    proofProduct: null,
    provenIn:
      "Running live under our own campaign engine in a creator business: the budget cap is enforced inside the engine's code, a scoreboard reads spend against it continuously, and the cap has held while the automation above it launched and boosted campaigns unattended. The same principle runs through everything we build: the investing system's live-trading gate is a control in code, and it has never been crossed.",
    caseKeys: ["creator-business-engine"],
    typicalEngagement:
      "One to three weeks to put the ceiling and scoreboard over an existing account or system, fixed fee.",
    engagementShort: "One to three weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "Checked before money moves",
    event: "workflow_budget_control_clicked",
    updatedAt: "2026-08-25",
    order: 13,
  },
  {
    key: "automated-reporting-agent",
    family: "Operations",
    icon: "data",
    hue: "green",
    name: "Automated reporting",
    navLabel: "Automated reporting",
    searchTerm: "automated reporting",
    alsoCalled: [
      "AI business intelligence reports",
      "automated management reports",
      "self-assembling reports",
    ],
    seoTitle: "Automated reporting: the report that assembles itself",
    seoDescription:
      "An agent that collects from every source on a schedule, works out what changed, and sends the report people actually read. Five of ours arrive every week without anyone assembling them.",
    cardHeadline: "Monday's report is in the inbox, and nobody spent Friday building it.",
    summary:
      "An agent that collects from every source on a schedule, computes what changed, and sends the report in the format your team actually reads.",
    problem:
      "The monthly report costs somebody two days of copying numbers between tabs, and it arrives describing a month that is already over. Between reports, nobody looks, because looking means assembling. The business is flying on a photograph taken three weeks ago.",
    description:
      "The agent pulls from every named source on a schedule, computes every figure in code, and writes what changed in plain English, because a wall of numbers is a report nobody reads. It arrives where your team already looks: the inbox, the morning, the same time. The model writes the sentences around figures it was handed; it is never the source of a number. When a source breaks, a named person is told, rather than the report quietly shipping a gap.",
    deliverables: [
      "Every source connected and pulled on a schedule, with the list written down",
      "Every figure computed in code, with the model writing sentences, never numbers",
      "What changed, said in plain English at the top, before the tables",
      "Delivery where your team already looks, on the schedule you set",
      "An alert to a named person when a source fails, instead of a silent gap",
      "The history kept in a database you own, so any figure can be traced back",
    ],
    goodFit: [
      "Somebody assembles the same report by hand every week or month",
      "The numbers live in three or more systems",
      "Decisions wait on the report arriving",
    ],
    elsewhere: [
      {
        situation: "The questions change every day rather than repeating",
        solution:
          "The ask-your-data agent answers ad hoc questions from the same records, showing the query behind each figure.",
        href: "/services/ask-your-data-agent",
      },
      {
        situation: "You need to be told the moment something moves, not on Monday",
        solution:
          "A monitoring agent watches continuously and escalates to a named person when a threshold is crossed.",
        href: "/services/ai-monitoring-agent",
      },
      {
        situation: "The sources are external: news, filings, competitors",
        solution:
          "That is the research agent: it reads overnight and writes the brief before anyone is awake.",
        href: "/services/ai-research-agent",
      },
    ],
    stackKeys: ["supabase", "claude", "resend", "vercel", "bigquery"],
    proofRefs: ["connectors", "scheduledJobs", "monthsLive"],
    proofProduct: "marketing",
    provenIn:
      "Five reports arrive on schedule across our own systems with nobody assembling them: a Monday memo and daily digest from sixteen marketing data sources, a Monday digest across a nine-company group, a weekly parent digest in our learning product, and a morning brief and end-of-day wrap in our market intelligence product. The mechanism is identical whatever the sources are.",
    caseKeys: ["group-marketing-one-view", "market-intelligence-platform"],
    typicalEngagement:
      "Two to six weeks depending on how many sources need connecting, then a monthly line to keep the connectors healthy as the platforms change.",
    engagementShort: "Two to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Figures computed in code",
    event: "workflow_reporting_clicked",
    updatedAt: "2026-08-25",
    order: 14,
  },
  {
    key: "ai-monitoring-agent",
    family: "Operations",
    icon: "log",
    hue: "violet",
    name: "AI monitoring agent",
    navLabel: "AI monitoring agent",
    searchTerm: "AI monitoring agent",
    alsoCalled: [
      "anomaly detection automation",
      "automated alerting",
      "always-on monitoring",
    ],
    seoTitle: "AI monitoring agent: watched continuously, escalated to a person",
    seoDescription:
      "An agent that watches your numbers, feeds and systems continuously and escalates to a named person when something needs one, instead of filling a dashboard nobody opens. Six of them run in our own systems.",
    cardHeadline: "Watched around the clock, and a named person told when it matters.",
    summary:
      "An agent that watches your feeds, numbers and systems continuously, and escalates to a named person when a threshold you set is crossed.",
    problem:
      "The dashboard exists and nobody opens it, because nothing is usually wrong. Then something is wrong for three days before anyone notices, and the cost of those three days would have paid for years of watching. Attention is the scarcest thing in the business, and dashboards spend it; they do not save it.",
    description:
      "We write down what worth knowing means for you: the threshold, the change, the silence that signals a problem. The agent watches continuously and does nothing visible until a rule fires, and then it tells a named person, with the context attached, through the channel they already read. Escalation paths, thresholds and who is told are written rules. The measure of success is how rarely it speaks and how much it matters when it does.",
    deliverables: [
      "A written definition of what gets watched and what worth knowing means",
      "Continuous watching, with silence as the default state",
      "Escalation to a named person with the context attached, in the channel they already read",
      "A watchdog on the watcher, so the monitoring itself failing is also an alert",
      "Every alert and its outcome logged, so false alarms get tuned out",
      "Thresholds editable by your team as the business changes",
    ],
    goodFit: [
      "A problem discovered late has already cost real money at least once",
      "The signals exist in feeds or systems a machine can read",
      "You would rather be interrupted rarely and reliably than watch a screen",
    ],
    elsewhere: [
      {
        situation: "You want the regular picture, not the exceptional moment",
        solution:
          "Reporting automation sends the scheduled report; monitoring is its always-on partner, and they share sources.",
        href: "/services/automated-reporting-agent",
      },
      {
        situation: "What needs watching is your own published content",
        solution:
          "The quality control agent checks it nightly against a known source and repairs what drifts.",
        href: "/services/ai-quality-control-agent",
      },
      {
        situation: "Nobody has defined what normal looks like yet",
        solution:
          "The two-week assessment takes the baseline first, so the thresholds are facts rather than guesses. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["supabase", "digitalocean", "claude", "telegram"],
    proofRefs: ["scheduledJobs", "dataStreams", "monthsLive"],
    proofProduct: "trading",
    provenIn:
      "Six monitors run inside our own market intelligence product: news, momentum, sectors, options flow, system health, and a watchdog on the broker connection that repairs its own scheduler and pages a human when it cannot. In our marketing system the monitor proposes changes into a ledger and a person commits them, which is the escalation pattern most businesses actually want.",
    caseKeys: ["market-intelligence-platform", "group-marketing-one-view"],
    typicalEngagement:
      "Two to five weeks from scope to the first monitors running, then a monthly line to tune thresholds as false alarms surface.",
    engagementShort: "Two to five weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Silent until a rule fires",
    event: "workflow_monitoring_clicked",
    updatedAt: "2026-08-25",
    order: 15,
  },
  {
    key: "document-generation-automation",
    family: "Operations",
    icon: "handover",
    hue: "teal",
    name: "Document generation automation",
    navLabel: "Document generation automation",
    searchTerm: "document generation automation",
    alsoCalled: [
      "automated paperwork",
      "operational document generation",
      "auto-generated work documents",
    ],
    seoTitle: "Document generation automation: the paperwork writes itself",
    seoDescription:
      "The order becomes the prep sheet, the plan becomes the PDF, generated from the live record by rules, so the paperwork the work runs on is always current and nobody typed it.",
    cardHeadline: "The order arrives, and the paperwork the team works from writes itself.",
    summary:
      "Automation that turns a record into the documents the business runs on: the prep sheet, the run sheet, the plan, generated from live data by rules.",
    problem:
      "Between the system that holds the order and the team that does the work sits an hour of retyping: the prep sheet, the schedule, the pack that goes to the client. It is copying, so it happens late and carries errors, and when the order changes, the paperwork does not, and the team delivers last week's version of the job.",
    description:
      "We build the documents as outputs of the record, not copies of it. The layout is a template your team designed; the content is generated from the live data by rules, so a change to the order changes the paperwork with it. Formatting and arithmetic are code, which is why nothing is mistyped. Where judgement belongs in the document, a person adds it; everything mechanical stops being anyone's job.",
    deliverables: [
      "Your working documents generated from the live record: prep sheets, run sheets, plans, packs",
      "Templates your team designed, filled by rules rather than retyping",
      "Regeneration when the record changes, so the paperwork is never behind the order",
      "Every figure and total computed in code",
      "PDFs and printouts formatted for how the team actually uses them",
      "A record of every document generated, and from which version of the data",
    ],
    goodFit: [
      "Somebody retypes system data into documents every week",
      "The documents follow a shape a template could hold",
      "Late or wrong paperwork has a real operational cost",
    ],
    elsewhere: [
      {
        situation: "The problem is reading documents, not producing them",
        solution:
          "That is document processing: the archive becomes a database first, and generation often follows from the same records.",
        href: "/services/intelligent-document-processing",
      },
      {
        situation: "The document you want generated is a report",
        solution:
          "Reporting automation is that workflow: collected on a schedule, computed in code, delivered where the team reads.",
        href: "/services/automated-reporting-agent",
      },
      {
        situation: "The record itself is still a spreadsheet and an inbox",
        solution:
          "The two-week assessment maps the flow first, because generation is only as good as the record it reads. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["nextjs", "supabase", "vercel"],
    proofRefs: ["documentsLiberated", "routes", "deletedAi"],
    proofProduct: null,
    provenIn:
      "Running in two businesses: a catering operation where orders become kitchen prep sheets generated from the live record, and an events business where a trip plan becomes a client-ready PDF on demand. In both, the arithmetic and the layout are code, and the team stopped retyping.",
    caseKeys: ["catering-quotes-and-kitchen", "private-event-concierge"],
    typicalEngagement:
      "Two to four weeks per document family, fixed fee, over records that already exist.",
    engagementShort: "Two to four weeks, fixed fee",
    commercial: "Fixed fee",
    commercialSub: "Generated from the live record",
    event: "workflow_document_generation_clicked",
    updatedAt: "2026-08-25",
    order: 16,
  },
  {
    key: "ai-blog-writing-agent",
    family: "Content and publishing",
    icon: "record",
    hue: "plum",
    name: "AI blog writing agent",
    navLabel: "AI blog writing agent",
    searchTerm: "AI blog writing agent",
    alsoCalled: [
      "automated SEO content",
      "AI content pipeline",
      "automated blog publishing",
    ],
    seoTitle: "AI blog writing agent, with three gates before publish",
    seoDescription:
      "An agent that picks a trending signal, researches and writes the piece, then passes three gates before anything publishes: rules, an editor pass, and a fact check. A piece that fails is parked, not published.",
    cardHeadline: "The blog publishes on schedule, and nothing unchecked ever ships.",
    summary:
      "An agent that finds what your audience is searching for, writes the piece, and passes it through three gates before publishing: rules, an editor pass, and a fact check.",
    problem:
      "Content works, and content is relentless. The company blog needs a good piece a week and gets one a quarter, because everyone who can write one has a job. The obvious shortcut, raw AI text pasted straight to the site, reads like what it is, and one invented statistic under your name costs more than the traffic was worth.",
    description:
      "The agent starts from demand: a trending signal, expanded into the questions people actually type. It researches, writes in your voice, and then meets the part that matters: three gates before publish. Your written rules, an editor pass, and a fact check on every claim. A piece that fails any gate is parked for a person, not published; silence beats a bad post. What is already live gets re-audited on a schedule, because content rots.",
    deliverables: [
      "Topics chosen from live search demand, not from a brainstorm",
      "Pieces written in your voice, against rules you set in writing",
      "Three gates before publish: rules, editor pass, fact check, with failures parked for a person",
      "A publishing schedule that holds without anyone pushing it",
      "Re-audit of already-published pieces on a schedule, so old posts stay true",
      "Every piece, gate result and decision in one log",
    ],
    goodFit: [
      "Search traffic genuinely feeds the business",
      "Nobody has time to write, but someone can review",
      "Your name on an inaccurate post is a real cost, and you want gates, not vibes",
    ],
    elsewhere: [
      {
        situation: "The writing exists, and the bottleneck is publishing it everywhere",
        solution:
          "Multi-channel publishing takes one piece to the blog, the newsletter and social through one safety gate.",
        href: "/services/ai-content-automation",
      },
      {
        situation: "The worry is the content you already have going stale",
        solution:
          "The quality control agent checks published content nightly against a known source and repairs what drifts.",
        href: "/services/ai-quality-control-agent",
      },
      {
        situation: "You are not sure content is the right spend at all",
        solution:
          "The two-week assessment costs the channel against your others before anything is built. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "vercel", "nextjs"],
    proofRefs: ["scheduledJobs", "liveProducts", "monthsLive"],
    proofProduct: null,
    provenIn:
      "Running inside a creator business: a scheduled agent picks a trending signal, expands it into the questions people search, researches and writes, then passes rules, an editor pass and a fact check before anything goes live. A piece that fails is parked silently, and a separate audit re-checks what is already published.",
    caseKeys: ["creator-business-engine"],
    typicalEngagement:
      "Three to six weeks from scope to the first gated pieces publishing, then a monthly line to run the pipeline and tune the gates.",
    engagementShort: "Three to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Three gates before publish",
    event: "workflow_blog_agent_clicked",
    updatedAt: "2026-08-25",
    order: 17,
  },
  {
    key: "ai-content-automation",
    family: "Content and publishing",
    icon: "handover",
    hue: "blue",
    name: "Multi-channel publishing agent",
    navLabel: "Multi-channel publishing",
    searchTerm: "AI content automation",
    alsoCalled: [
      "automated publishing",
      "write once publish everywhere",
      "content distribution automation",
    ],
    seoTitle: "AI content automation: write once, publish everywhere, one gate",
    seoDescription:
      "An agent that takes one piece of writing and publishes it to the blog, the newsletter and social threads, through one safety gate, so every channel stays alive from a single effort.",
    cardHeadline: "One piece written, every channel filled, one gate in front of all of them.",
    summary:
      "An agent that takes one piece of writing and turns it into the blog post, the newsletter and the social threads, each shaped for its channel, all passing one safety gate before anything ships.",
    problem:
      "Each channel wants its own shape: the blog wants depth, the newsletter wants brevity, social wants a thread. Doing that conversion by hand triples the cost of every idea, so channels go quiet one by one, and quiet channels quietly stop sending you customers.",
    description:
      "One piece goes in. The agent reshapes it for each channel, in that channel's form rather than cropped copies of the same text, and every version passes one safety gate before it ships anywhere: claims, tone and links checked once, centrally. Scheduling is rules; what published where is one log. The thinking happens once, and the distribution stops being work.",
    deliverables: [
      "One piece reshaped for each channel: blog, newsletter, social threads",
      "One safety gate in front of every channel, checking claims, tone and links",
      "Publishing on a schedule, with a person able to hold anything before it ships",
      "Channel accounts connected and publishing without copy-paste",
      "One log of what published where and when",
      "The gate's rules written down and editable by your team",
    ],
    goodFit: [
      "Writing exists, and distribution is the bottleneck",
      "Two or more channels matter to the business",
      "One wrong claim, repeated across every channel, is a cost you take seriously",
    ],
    elsewhere: [
      {
        situation: "There is no steady writing to distribute yet",
        solution:
          "The blog writing agent produces the gated source pieces; distribution then multiplies them.",
        href: "/services/ai-blog-writing-agent",
      },
      {
        situation: "You need to know what each channel returns",
        solution:
          "Reporting automation pulls every channel into one set of numbers on a schedule.",
        href: "/services/automated-reporting-agent",
      },
      {
        situation: "Outbound messages to individuals, not audiences",
        solution:
          "That is message drafting: bulk-composed, person-approved, one at a time.",
        href: "/services/ai-message-drafting-agent",
      },
    ],
    stackKeys: ["claude", "supabase", "digitalocean", "resend"],
    proofRefs: ["scheduledJobs", "monthsLive", "testFunctions"],
    proofProduct: "trading",
    provenIn:
      "Running inside our own market intelligence product: one orchestrator writes once and publishes to the blog, the newsletter and social threads, with a dedicated safety gate in front of everything that ships. The publishing has run on schedule for months without a person pressing the button.",
    caseKeys: ["market-intelligence-platform"],
    typicalEngagement:
      "Three to five weeks from scope to channels publishing through the gate, then a monthly line to run it and add channels.",
    engagementShort: "Three to five weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "One gate for every channel",
    event: "workflow_content_automation_clicked",
    updatedAt: "2026-08-25",
    order: 18,
  },
  {
    key: "ai-quality-control-agent",
    family: "Content and publishing",
    icon: "rule",
    hue: "green",
    name: "AI quality control agent",
    navLabel: "AI quality control agent",
    searchTerm: "AI quality control agent",
    alsoCalled: [
      "automated content accuracy",
      "content QA automation",
      "automated content auditing",
    ],
    seoTitle: "AI quality control: your content checked nightly, repaired quietly",
    seoDescription:
      "An agent that checks your published content every night against a known source, flags what fails your rules, and repairs it without being asked. Running nightly across thousands of items in our learning product.",
    cardHeadline: "Everything you publish, checked against the source every night.",
    summary:
      "An agent that audits your published content on a schedule, against a source of truth and rules you set, and repairs what drifts, with the repairs verified before they go live.",
    problem:
      "Content decays where nobody is looking. Prices change, features change, the world changes, and page forty-seven still says what was true in January. At scale nobody can re-read everything, so errors are found by the worst possible reviewer: a customer, mid-purchase, quoting your own page back at you.",
    description:
      "The agent runs at night. It checks what you have published against the source of truth you name, on rules you set, and flags what fails. Then it repairs: regenerating what is wrong, polishing what is weak, filling what is thin, with every repair verified against the same rules before it ships. The check and the fix are the same loop, which is what makes it quality control rather than a report about problems.",
    deliverables: [
      "A nightly audit of your published content against a named source of truth",
      "Your quality rules written down, versioned, and applied the same way every night",
      "Repairs generated and verified against the rules before going live",
      "Anything the rules cannot settle parked for a person, never silently shipped",
      "A morning summary of what was checked, flagged and repaired",
      "The rules and the source list editable by your team",
    ],
    goodFit: [
      "The content is too large to re-read by hand: hundreds of pages or items",
      "A source of truth exists to check against",
      "Being wrong in public carries a real cost in your market",
    ],
    elsewhere: [
      {
        situation: "The content does not exist yet",
        solution:
          "The blog writing agent produces it with three gates before publish; quality control then keeps it true over time.",
        href: "/services/ai-blog-writing-agent",
      },
      {
        situation: "What needs watching is numbers and systems, not prose",
        solution:
          "The monitoring agent is that workflow: watched continuously, escalated to a named person.",
        href: "/services/ai-monitoring-agent",
      },
      {
        situation: "No source of truth exists to check against",
        solution:
          "The two-week assessment establishes it first, because a checker without a source is an opinion. The fee is credited in full against the build.",
        href: "/services/ai-advisory",
      },
    ],
    stackKeys: ["claude", "supabase", "vercel"],
    proofRefs: ["scheduledJobs", "liveProducts", "testFunctions"],
    proofProduct: "learning",
    provenIn:
      "Running nightly inside our learning product as a five-stage chain: difficulty recalibrated from learners' real answers, failures flagged on five written rules, faulty items regenerated, weaker ones polished and verified, and thin topics refreshed from the curriculum source. Hundreds of items are checked or repaired each night, and a person reads the summary, not the queue.",
    caseKeys: ["curriculum-learning-companion"],
    typicalEngagement:
      "Three to six weeks from scope to the nightly loop running over your content, then a monthly line to keep rules and sources current.",
    engagementShort: "Three to six weeks, then a retainer",
    commercial: "Scoped in writing",
    commercialSub: "Repairs verified before they ship",
    event: "workflow_quality_control_clicked",
    updatedAt: "2026-08-25",
    order: 19,
  },
  {
    key: "ai-message-drafting-agent",
    family: "Content and publishing",
    icon: "agent",
    hue: "amber",
    name: "AI message drafting",
    navLabel: "AI message drafting",
    searchTerm: "AI message drafting",
    alsoCalled: [
      "customer communication automation",
      "bulk message composition",
      "AI-drafted customer messages",
    ],
    seoTitle: "AI message drafting: composed in bulk, sent by a person",
    seoDescription:
      "An agent that drafts outgoing customer messages in bulk from your live records, each one personal to its thread, ready for a person to review and send. Running in production for a catering business.",
    cardHeadline: "Fifty personal messages drafted from the records, ready for one person to send.",
    summary:
      "An agent that drafts your outgoing customer messages in bulk, each grounded in that customer's actual record, for a person to review and send.",
    problem:
      "Some messages should not send themselves, and still eat the day. Confirmations, updates, answers to routine asks: each takes four minutes of looking up the record and typing the same shape again, and by late afternoon message thirty is curt in a way message three was not. Fully automated sending is wrong for these; fully manual is what you have.",
    description:
      "The agent drafts in bulk from the live records, so each message carries the customer's actual details, order and history rather than mail-merge fields. The drafts queue for a person, who reviews, edits and sends, keeping judgement and relationships where they belong. Your team's edits are the feedback that sharpens the drafting. The four minutes becomes twenty seconds, and the thirtieth message is as good as the first.",
    deliverables: [
      "Messages drafted in bulk from your live records, each personal to its thread",
      "A review queue where a person edits and sends: nothing sends itself",
      "Your tone and message shapes written down and applied consistently",
      "Facts in every draft pulled from the record, never from the model's memory",
      "Every draft, edit and send in one log",
      "The message shapes editable by your team as the business changes",
    ],
    goodFit: [
      "The team sends many messages that are similar in shape but personal in detail",
      "The details live in a system the agent can read",
      "You want a person on the send button, and the drafting off their plate",
    ],
    elsewhere: [
      {
        situation: "The routine messages could safely send themselves",
        solution:
          "Follow-up automation sends rule-based messages unattended; drafting is for the ones that deserve a human eye.",
        href: "/services/ai-follow-up-automation",
      },
      {
        situation: "The messages are replies to inbound email",
        solution:
          "The email agent reads, files and answers the inbox under written rules, drafting where you set the line.",
        href: "/services/ai-email-agent",
      },
      {
        situation: "Customers want answers now, not a message later",
        solution:
          "The chatbot answers from your live records around the clock, graded on a test set before launch.",
        href: "/services/ai-chatbot-for-customer-service",
      },
    ],
    stackKeys: ["claude", "supabase", "nextjs", "vercel"],
    proofRefs: ["documentsLiberated", "tables", "routes"],
    proofProduct: null,
    provenIn:
      "Running inside a catering business: outgoing customer messages are composed in bulk from the live records of customers, events and orders, and queue for the team to review and send. The records themselves came from thirty years of paperwork we had already turned into a database, which is why every draft can quote the customer's actual history.",
    caseKeys: ["catering-quotes-and-kitchen"],
    typicalEngagement:
      "Two to four weeks over records that already exist, then a monthly line to add message shapes as the team finds them.",
    engagementShort: "Two to four weeks",
    commercial: "Scoped in writing",
    commercialSub: "A person sends every message",
    event: "workflow_message_drafting_clicked",
    updatedAt: "2026-08-25",
    order: 20,
  },
];

export const workflowsOrdered: Workflow[] = workflows
  .slice()
  .sort((a, b) => a.order - b.order);

export const workflowsByKey = Object.fromEntries(
  workflows.map((w) => [w.key, w])
) as Record<WorkflowKey, Workflow>;

/**
 * The index, grouped the way the catalogue groups it. Families with nothing
 * in them are dropped rather than rendered empty, so adding a family here
 * before its first workflow ships is harmless.
 */
export const workflowsByFamily: { family: WorkflowFamily; items: Workflow[] }[] =
  workflowFamilies
    .map((family) => ({
      family,
      items: workflowsOrdered.filter((w) => w.family === family),
    }))
    .filter((g) => g.items.length > 0);

/** Same family, excluding one key. Drives "related workflows" on a page. */
export function workflowsRelatedTo(key: string, limit = 4): Workflow[] {
  const self = workflowsByKey[key as WorkflowKey];
  if (!self) return [];
  return workflowsOrdered
    .filter((w) => w.family === self.family && w.key !== self.key)
    .slice(0, limit);
}
