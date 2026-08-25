# The workflow catalogue

**What Decifer has actually automated, named the way a buyer searches for it.**

Compiled 2026-08-25 by reading every repository in the DeciferBot organisation.
Twenty workflow types are built and running in production. Three high-demand
workflows are not built, and are marked as gaps so nobody sells them by
accident.

## Why this file exists

The site described four abstract services and a handful of engineering counts.
The repositories describe twenty distinct automated workflows across eight
industries. That gap cost traffic and conversions in both directions: buyers
searching for "AI research agent" or "AI chatbot for customer service" found
nothing, and buyers who did arrive read a fraction of what had been delivered.

This file is the source of truth for that inventory. Service pages, case
shapes, `proof.ts` figures and internal links should all resolve back to a row
here. A workflow that is not in this file does not go on the site; a workflow
in this file must not be described on the site in terms that its `Proven in`
column does not support.

**The naming rule.** The `Workflow` column is the unit a buyer wants to buy and
the phrase they type into a search box. It is never the component that
implements it. "A validator that rejects unsourced statistics" is a module;
"quality control agent" is a product. Both are in the row, in that order of
prominence.

**The evidence rule.** Every row names the system and the files that prove it.
Anything without that column filled in is not a row yet. Same standard as
`src/app/data/proof.ts`: a claim without a source does not ship.

## Research and intelligence

| Workflow | What it does for a business | Proven in | Search term |
|---|---|---|---|
| **Research agent** | Reads overnight and writes the report before anyone is awake. Also finds what a plan is missing and proposes the fix for approval. | Markets: `overnight_research.py` (1,167 lines), `research_engine.py` (846), `company_reader.py` (716), `earnings_transcript_engine.py` (1,153). Events: the blind-spot agent scans every trip for overlooked bookings, transfers and timing | AI research agent, automated research reports |
| **Ask-your-data agent** | Answers plain-English questions against the business's own records, so nobody waits for a report to be built | Catering: `api/ask` | ask your data AI, natural language business intelligence |
| **Document extraction agent** | Turns paperwork into records a team can query: old orders, proposals, contracts | Catering: 719 documents (388 PDFs, 331 Word, 25 spreadsheets) into customers, events and a priced menu; `api/proposals/extract` | intelligent document processing, AI document extraction |

## Content and publishing

| Workflow | What it does for a business | Proven in | Search term |
|---|---|---|---|
| **Blogging agent** | Picks a trending signal, expands it into the questions people actually search, researches and writes, then passes three gates — rules, an editor, a fact check — before anything publishes. A piece that fails is parked silently | Creator: `api/cron/generate-blog` + `api/_blog-qa.js`, with `blog-audit` re-checking what is already live | AI blog writing agent, automated SEO content |
| **Multi-channel publishing agent** | Writes once and publishes to the blog, the newsletter and social threads, through one safety gate | Markets: `content_orchestrator.py` (1,087), `blog_publisher.py`, `tweet_generator.py` (558), `tweet_publisher.py` (369), `content_safety_gate.py` (316) | AI content automation, automated publishing |
| **Quality control agent** | Checks the business's own published content every night against a known source and repairs it without being asked | Learning: a five-stage nightly chain — recalibrate difficulty from real answers, flag failures on five rules, regenerate up to 150 items, polish and verify 200 more, refresh from the curriculum source and fill thin topics | AI quality control agent, automated content accuracy |
| **Message composition agent** | Drafts the outgoing customer message, in bulk, ready for a person to send | Catering: `api/compose-message` | AI message drafting, customer communication automation |

## Customer-facing

| Workflow | What it does for a business | Proven in | Search term |
|---|---|---|---|
| **Chat / concierge agent** | Answers customers around the clock from live data, and refuses what it cannot verify | Events: web and Telegram concierge, 40 out of 40 on a graded test set including seven questions that pass only by refusing. Markets: Telegram bot (`bot.py` plus seven modules) | AI chatbot for customer service, AI concierge |
| **Voice agent** | Answers a spoken question in a few sentences, and can explain how it got there | Markets: `voice_agent.py`, `voice_context_builder.py`, `voice_explainability_tools.py` | AI voice agent, voice assistant for business |
| **Lead qualification agent** | Scores an enquiry, asks the qualifying questions, and replies | Property: `api/agent/qualify`, `api/agent/respond`, with conversations and contacts behind them | AI lead qualification, AI sales qualification |
| **Email-triggered agent** | Inbound email wakes the agent, which reads, files and answers | Property: `api/webhooks/email`, `api/ingest`, `api/messages` | AI email agent, automated email response |
| **Follow-up agent** | Chases what went quiet, at the right interval, without anyone remembering to | Clinic: `api/cron/follow-up`. Events: hourly nudge, wallet retention. Creator: inbound nudge. Learning: streak and engagement nudges | AI follow-up automation, automated lead nurture |
| **Review request agent** | Asks a client for a review at the moment they are most likely to leave one | Clinic: `api/review-request` | automated review requests, reputation automation |

## Commercial

| Workflow | What it does for a business | Proven in | Search term |
|---|---|---|---|
| **Outreach and pitch agent** | Scores prospects daily, writes the top pitches, and grounds every number in live data rather than a claim | Creator: `api/cron/daily-agent` — scores brands, generates the top three pitches from live Instagram figures | AI outreach agent, AI sales agent |
| **Paid ads agent** | Runs the campaign lifecycle: sets up audiences, launches, boosts what is working, closes out and archives | Creator: `ad-autopilot`, `boost-reel`, `launch-reels`, `launch-carousel`, `setup-audiences`, `complete-campaign` | AI ad management, automated campaign optimisation |
| **Spend control agent** | Caps budget in code, not in a prompt, so the ceiling cannot be argued with | Creator: `ads-scoreboard` and the hard cap in the campaign engine | AI budget control, ad spend automation |
| **Quote and configurator agent** | Lets the customer design and price the product themselves, using the business's real costing rules | Catering: `api/design-menu` plus the public menu builder — 1,312 dishes priced live, including staffing, transport and VAT | AI quoting engine, instant quote automation |

## Operations

| Workflow | What it does for a business | Proven in | Search term |
|---|---|---|---|
| **Monitoring agent** | Watches continuously and escalates to a named person, rather than filling a dashboard nobody opens | Markets: `news_sentinel.py`, `momentum_sentinel.py`, `sector_monitor.py`, `options_flow_monitor.py`, `health_monitor.py`, `ibkr_gateway_watchdog.py`. Marketing: the monitor agent proposes into a ledger and a human commits | AI monitoring agent, anomaly detection automation |
| **Reporting agent** | Collects from every source on a schedule, finds what changed, and sends the report | Marketing: Monday memo, daily digest. Group dashboard: Monday digest. Learning: weekly parent digest. Markets: morning brief, end-of-day wrap, newsletter | automated reporting, AI business intelligence reports |
| **Operational document generation** | Turns an order into the documents the business actually runs on | Catering: `api/prep-sheets` turns orders into kitchen prep sheets. Events: `api/trips/[slug]/plan-pdf` | document generation automation, automated paperwork |

## Gaps: high demand, not built

Do not sell these. They are listed so the gap is deliberate and so the build
order is obvious.

| Gap | Why it matters | Nearest thing we do have |
|---|---|---|
| **AI receptionist / phone answering** | A $4.6bn market heading to $10.9bn, and the dominant term for appointment-based businesses: clinics, property, salons | A working voice agent in Markets. Telephony and calendar integration is the missing piece, which makes this the cheapest of the three to close |
| **WhatsApp Business API automation** | The highest-demand term in the UAE market specifically, and every competitor leads with it | Nothing. The catering system uses `wa.me` deep links with pre-filled text, which is a good handoff but is not automation. The events system's WhatsApp code sits in `quarantine/` |
| **Support ticket triage** | The number-one SMB agent use case: reading documentation, cross-referencing history, deflecting routine tickets | The concierge is the same shape but is wired to an event database, not a helpdesk |

## Do not claim

- **Arabic or bilingual delivery.** Every competitor leads with it. No
  repository has real Arabic support. Saying otherwise would be the first
  thing a UAE buyer tests.
- **An SEO agent.** There is a researched build plan in the group dashboard
  repository (`SEO_AGENT.md`). A plan is not a product.
- **WhatsApp automation.** See the gaps table above.

## How to use this on the site

1. **Service pages.** Each workflow family above is a page a buyer can search
   for and land on. The `Search term` column is the page's job on the traffic
   side; the `What it does` column is its job on the conversion side.
2. **Case pages.** Every case in `src/app/data/caseShapes.ts` should list the
   workflows it delivered, by the names used here, so a reader who arrived for
   one workflow sees it proven and finds the others.
3. **Figures.** Anything counted from this catalogue belongs in
   `src/app/data/proof.ts` with its source, like every other figure.
4. **Keeping it true.** When a workflow ships, add the row before the copy.
   When a gap closes, move the row up and delete it from the gaps table.
