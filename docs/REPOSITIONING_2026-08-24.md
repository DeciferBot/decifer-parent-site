# Decifer repositioning and full site rewrite (v2, merged)

Date: 2026-08-24. Status: DRAFT v2 for founder review. Nothing here ships until approved.

v2 merges two drafts: the Claude version (diagnosis, verified evidence, proof integration, case summaries, legal audit) and the ChatGPT version (the six-step responsibility arc, the nine-stage delivery sequence, the buyer FAQ, the contact form questions). Everything below complies with the house rules: no em dashes, no banned words, no fragment chains, internal figures only from `src/app/data/proof.ts`, external figures only with a verified source.

Evidence corrections made during the merge:
- The "Gartner, January 2026, 50% abandoned" figure in the ChatGPT draft could not be verified and is not used. The citable Gartner figure is 30%, from the 29 July 2024 press release.
- The "11% value realisers" figure in the ChatGPT draft has now been verified: McKinsey, The state of AI in GCC countries: In pursuit of scale and value, November 2025. It is used with that citation.
- "DECIFER Trading" in the ChatGPT draft violates the naming rule. The product is Decifer Markets, and the paper-account statement is restored wherever it appears.

---

## 1. Current-site diagnosis

**What the site currently communicates.** A Dubai company that builds AI agents, automation, reporting and products, with unusual honesty about limits: written boundaries, a validator that blocks invented numbers, a do-not-automate list, client ownership at handover, and five published case shapes. The hero currently opens with a service list.

**Strong.** The proof discipline is genuinely rare: proof.ts with sources and dates, boundaries and "withheld" sections on every case, the removed-AI count, the comparison table, the named founder. No competitor in the 19-site scan has any of it.

**Weak.** The site sells capabilities, not an outcome. "AI agents, automation, custom development" is the commodity taxonomy every development shop uses, and it prices Decifer as a builder. The trust mechanisms are presented as doctrine rather than as the reason a project survives production. Nothing on the site names the problem an executive actually has: money is going into AI and results are not coming out.

**Where the proposition gets confused.** Three audiences compete: SME owners, enterprise evaluators, and product users. The products band and early-access remnants make the company read partly as a product startup.

**What is preventing Decifer from owning the implementation problem.** The site leads with what Decifer makes instead of what the buyer loses when implementation fails. The method is exactly the cure for pilot failure, but the site never connects the two.

**Remove.** The service-list hero. Early-access CTAs and draft-policy language. Any commercial framing of the three products on this site.

**Retain.** proof.ts and the claims discipline. Case shapes with boundaries and withheld sections. The comparison table (moved to How we work). The founder block. The assessment as the entry step. The light design system.

---

## 2. New positioning

**Market problem.** Companies are investing heavily in AI and most of it is not reaching daily operations. MIT found 95% of enterprise GenAI pilots produce no measurable P&L return. Gartner predicted at least 30% of GenAI projects would be abandoned after proof of concept, citing poor data quality, inadequate risk controls, escalating costs and unclear business value. In the GCC, McKinsey found 84% of companies have adopted AI in at least one function, only 31% have scaled it, and only 11% qualify as value realisers able to attribute at least 5% of earnings to it. BCG's 10-20-70 finding explains why: roughly 10% of the work is algorithms, 20% is technology and data, and 70% is people and process, and most spending goes to the 10%.

**Target buyer.** Primary: owners, managing directors and operations leaders of established businesses in the UAE and the Gulf, plus the UK and Singapore, with budget and pressure to adopt AI and pilots that have stalled. Secondary: CIOs, CMOs and unit leaders in larger organisations evaluating an implementation partner and worried about governance. (PRODUCT.md's open decision stands; this serves both without pretending to be Accenture.)

**Decifer's role.** One company accountable across the whole gap: business problem, business case, workflow redesign, architecture, build, integration, production deployment, adoption, and measurement afterwards.

**Core value proposition.** Decifer turns AI investment into operating results the business can check.

**Reasons to believe.**
1. Decifer runs its own AI systems in production: three public products, five months of continuous operation, 30+ scheduled jobs running unattended, 9,000+ automated tests in the largest system. The market system trades a broker paper account, stated plainly wherever it appears.
2. An engineering rule that prevents the most common failure: code computes anything that must be right, models handle only what needs judgement, and a test fails the build if a model invents a figure.
3. Five published client cases, each showing the operating problem, what was rebuilt, how the outcome is measured, and what was deliberately not automated. AI has been removed from working systems five times where a plain check was better.
4. Ownership at handover: client accounts, the repository, a runbook, and data in standard Postgres. Dependency on Decifer is a commercial choice, never a technical trap.
5. Measurement is designed in before the build starts: the assessment baselines what the process costs today, so afterwards there is a real before and after.

**Differentiation.** Everyone now claims they ship AI to production. Some claim it can be trusted. Nobody in the 19-site competitor scan proves it. Decifer's proof is checkable on the site. Per MIT's study, external partnerships succeed at roughly twice the rate of internal builds, which is the argument for hiring anyone; the proof discipline is the argument for hiring Decifer.

**Primary CTA.** "Discuss a business process". Secondary: "See the work".

**One-sentence company description.** Decifer is an AI implementation company in Dubai that takes business processes from AI pilot to dependable daily operation, and measures the result.

---

## 3. Recommended information architecture

```
Home
What we do            (/services, renamed)
  AI opportunity assessment          (/services/ai-advisory slug kept)
  Workflow automation and AI agents  (/services/ai-agents slug kept)
  Data and decision intelligence     (/services/data-and-reporting slug kept)
  Custom AI products                 (/services/ai-product-development slug kept)
How we work           (new page; absorbs /capabilities, /stack and the method content of /about)
Work                  (/work, structure kept, summaries rewritten)
About                 (founder, company, Built by Decifer section)
Insights              (/blog, label renamed)
Contact               (/contact, form reworked)
```

- /capabilities and /stack fold into How we work, with redirects.
- /products demotes to the About page's Built by Decifer section, with redirects. Product outbound links stay.
- Service slugs never change; titles, H1s and copy are rewritten. SEO terms (AI agent development Dubai, AI consulting Dubai, workflow automation) stay in service page titles and metadata.

---

## 4. Homepage rewrite (production-ready copy)

**SEO title:** Decifer | AI implementation company in Dubai. From pilot to production.

**Meta description:** Decifer turns AI investment into operating results: assessment, workflow redesign, build, integration, deployment and measurement, with client ownership at handover. Dubai, working with the Gulf, UK and Singapore.

**Navigation:** What we do · How we work · Work · About · Insights · Contact · [Discuss a business process]

### Hero

Label: AI implementation, Dubai

H1: **Turn AI investment into operating results.**

Lede: Companies are investing in AI, but too few projects make it into daily use. Decifer takes responsibility for the whole path: the business case, the workflow redesign, the system build, the integration, the rollout, and the measurement afterwards. Every system runs on your accounts, with a log your team can read.

Buttons: [Discuss a business process] [See the work]

Under-hero line: Engagements start with a two-week assessment at a fixed fee, credited in full against any build.

(The right-hand case board stays, retitled "Processes we have taken to production".)

### Market evidence band

Heading: **The problem is not the technology. It is what happens inside the business.**

- **95%** of enterprise GenAI pilots produce no measurable P&L return. MIT, The GenAI Divide: State of AI in Business, 2025.
- **30%** of GenAI projects at least were predicted by Gartner to be abandoned after proof of concept, for poor data quality, inadequate risk controls, escalating costs or unclear business value. Gartner, July 2024.
- **84% adopt, 31% scale.** In the GCC, most companies now use AI in at least one function, but fewer than a third have scaled it across the business. McKinsey, The State of AI in GCC Countries, November 2025.
- **11%** of GCC organisations qualify as value realisers, able to attribute at least 5% of earnings to AI. Same McKinsey study.

Closing line: These are the published failure rates. The next section is what actually goes wrong.

### Why AI projects stall

Heading: **Where the value leaks out**

1. **The business case is weak.** The pilot was chosen because the technology looked capable, not because anyone costed the process it replaces. When budgets are reviewed, there is no evidence to defend the spend.
2. **The old process was carried forward.** The workflow was designed around people, email and spreadsheets, and a model was bolted on top. The organisation gains another tool while the old work remains.
3. **Data and integration arrived late.** The demo ran on controlled inputs. Production needs the CRM, the ERP, the inbox, the documents, the permissions and the history, and that is where scope and cost change.
4. **Exceptions were never designed.** Real processes contain missing information and unusual cases. Nobody decided what the system handles, what a person reviews, and how a failed action is recovered.
5. **Nobody could trust the output.** One invented figure in front of a customer, and the team quietly goes back to the old way.
6. **Nobody took a baseline.** Time saved, cost reduced and response time all need a starting point. Without one, ROI becomes an opinion, and the project dies at budget time.

Closing line: Every Decifer engagement is structured against this list, starting with the baseline.

### What Decifer takes responsibility for

Heading: **One team from business case to production**

Intro: The work below is usually split between consultants, developers, IT and the business. Decifer carries it as one accountable path.

**01. Find the value.** We examine the work as it runs today: where time disappears, where people re-key information between systems, where customers wait, and which processes get more expensive as volume grows. We cost the opportunity before choosing any technology. Output: a business case, a current-state baseline, prioritised use cases, and a written recommendation that includes what not to automate yet.

**02. Redesign the workflow.** AI changes what software can handle, which usually means the process itself should change. We map the new workflow and decide which steps need conventional code, which benefit from a model, which need human judgement, and where approval and escalation belong. The exceptions are designed here, not discovered later.

**03. Build the system.** Agents, document intelligence, workflow automation, decision and reporting systems, internal applications, data pipelines and integrations. The architecture follows the requirement, and anything that must be right runs as tested, deterministic code.

**04. Connect the business.** Useful systems work with what already exists: the CRM, the ERP, email, documents, databases and third-party APIs. We wire the workflow to the information and actions it needs, with access controls and an audit trail.

**05. Put it into operation.** Production raises questions a demo never meets: who has access, what happens when information is missing, how a wrong action is reversed, who receives an exception, what gets logged, and who owns the system internally. We resolve them before the system becomes part of daily work, and we train the people whose work changes.

**06. Measure the result.** The implementation is scored against the baseline from step one: processing time, employee hours, response time, cost, error rate, capacity, conversion or revenue, whichever the business case named. The business should be able to see what changed.

### What we do (four offers)

Heading: **What we do**

1. **AI opportunity assessment.** Find the opportunities worth funding. Two weeks, fixed fee, credited against any build. We interview the people doing the work, map where hours and errors go, cost the current process, and rank what to automate first, with an explicit do-not-automate-yet list. The right starting point when initiatives are underway but priority is unclear.
2. **Workflow automation and AI agents.** Remove manual work from processes that can be measured. We redesign the process, then build the system around it: agents scoped to one job, wired into your tools, with written limits, human review where a mistake is expensive, and a log of every action.
3. **Data and decision intelligence.** Make business information usable. Most teams have enough data; getting a reliable answer still takes people extracting and reconciling it. Your history gets out of spreadsheets, PDFs and one person's head into a database you own, and reports assemble themselves from figures computed in code, so nothing in them can be invented.
4. **Custom AI products.** When the answer is a whole product, we build it: site, database, logins, payments, email, analytics. We also operate products of our own, so product decisions are informed by real reliability, cost and support consequences. The repository transfers to you at handover.

### How we build

Heading: **Production systems need clear boundaries**

Intro: Every part of a system gets a defined job, decided by one question: does this step need judgement, or does it need to be right?

- **Calculations belong in code.** Prices, scores, metrics, validation and business rules are computed deterministically. A model is never responsible for arithmetic that software can calculate exactly, and a test fails the build if a model writes a figure the code did not compute.
- **Models handle interpretation.** Language, classification, synthesis and reading documents, where the input cannot be reduced to a fixed rule.
- **People keep defined responsibility.** Higher-risk decisions have named owners, and approval, review and escalation are designed into the workflow.
- **Uncertainty is visible.** A system should say when the available information is not sufficient. Confidence thresholds and exception paths are part of the design.
- **Every important action is traceable.** Logs a team can read without an engineer: what the system received, what it did, what happened next.
- **Clients can own what we build.** Systems deploy to client-controlled accounts and are handed over with documentation, tests and a runbook. We have removed AI from our own working systems five times where a plain check was better, and we will tell you the same about yours.

Link: How we work, in full.

### People and process

Heading: **Implementation changes how people work**

Body: BCG attributes roughly 10% of AI success to algorithms, 20% to technology and data, and 70% to people and process. That matches what happens in practice. A redesigned workflow moves work between teams, removes an approval, or turns a two-day report into one that arrives every morning. Those changes need owners, controls and adoption, so we design them into the implementation rather than leaving them to the rollout email. Source: Boston Consulting Group.

### Client work

Heading: **Processes we have taken to production**

- **Catering, UAE.** Quoting depended on the owner's memory of thirty years of orders. We rebuilt the workflow around one priced database: 719 order documents became a quoting engine customers use themselves. A quote that took a phone call and a day now starts from a number the customer built.
- **Family group, UAE.** Nine operating companies, no shared marketing view, a quarterly deck assembled by hand. Now one dashboard, refreshed nightly, with a weekly memo whose every figure is computed in code.
- **Private events.** One host answering the same questions at 2am. A concierge grounded in the real plan scored 40 out of 40 on a graded test, including seven questions where the right answer was to refuse.
- **Counselling practice, Singapore.** Clinical time was going to admin. We automated the administrative edge only and kept AI out of anything a client can touch, by design.
- **Creator business, UAE.** Aastha Chopra's brand ran on one person's memory. Publishing, outreach and advertising now run on schedules, with ad spend hard-capped in code and every claim in outreach checked against live data.

Link: Read every case, including what we deliberately did not automate.

### Built by Decifer

Heading: **We run our own systems in production**

Body: Before we sell a method, we run it. Operating real products builds a discipline that demonstrations do not: real users, real data, model failures, infrastructure cost, monitoring, support and the consequences of getting it wrong. Decifer operates three public products built the same way we build for clients: Decifer Markets (market intelligence), Decifer Learning (a curriculum learning companion) and Decifer Marketing (marketing intelligence). Between them: five months of continuous unattended operation, 30+ scheduled jobs, 25+ third-party integrations, and 9,000+ automated tests in the largest system. The market system trades a broker paper account, not real money, and we say so everywhere it is mentioned. These products are not what this site sells. They are how we know the method holds.

### Founder

Heading: **You deal with the person who builds the work**

Founder block as today, with: I am in Dubai, I read every enquiry myself, and I will tell you when AI is the wrong answer.

### FAQ (merged set)

1. **What does Decifer do?** Decifer helps companies implement AI inside real business processes. We identify the opportunity, redesign the workflow, build the system, connect the relevant tools, establish operating controls and measure the result. We also build and run three public products of our own, which is where the method is tested.
2. **Where should we start?** With a process where the outcome can be measured: repeated manual work, high volume, slow response times, fragmented information, or decisions that keep needing the same context. The assessment ranks these before anything is built.
3. **We already ran a pilot and it stalled. Can you take it over?** Often, yes. The assessment works on an existing pilot as well as a new idea: we baseline the process, find where the pilot stalled against the six failure points above, and tell you plainly whether it is worth rescuing.
4. **Can you work with our existing systems?** Yes. Most of the work involves existing environments. We assess the available APIs, databases, documents and permissions before deciding how the implementation connects to them.
5. **Do you build AI agents?** Yes, when the workflow genuinely benefits from one. Other workflows are better served by conventional automation, retrieval or plain code, and we say so. We have removed AI from our own working systems five times.
6. **How do you deal with AI errors?** We design around them: deterministic validation, confidence thresholds, restricted actions, human review, audit logs and defined exception paths. A test fails the build if a model writes a figure the code did not compute. The controls scale with the consequence of a wrong output.
7. **How do you calculate ROI?** The baseline is taken before implementation: employee time, processing cost, turnaround, error rate, conversion or another operating measure. After deployment the same measures are read again, the same way.
8. **Who owns what gets built?** You do. Accounts in your name, the repository at handover, a runbook, and data in standard Postgres you can export. Ongoing support is a commercial choice, never a technical trap.
9. **Why are most clients not named?** Some asked us not to, and for the rest we chose not to by default. A client can always choose to be named, in writing. Any number is published only with the method and written permission.

### Final CTA band

Heading: **Make the next AI project one the business can measure.**

Body: Thirty minutes with the founder, no slides. You leave knowing whether the process is worth automating, what it would take, what it should return, and what we would not automate yet.

Buttons: [Discuss a business process] [Email hello@decifer.io]

Line: Replies come from a named person in Dubai within one working day.

### Contact form (merged)

Fields: Name · Work email · Company · Role · Which process do you want to improve? (the existing 40-character qualifier, kept) · What does it cost you today? (optional: hours, delays, errors) · Which systems are involved, if known? (optional) · What would a successful outcome look like? (optional).

Intro line: You do not need an AI specification. Tell us where work is slow, expensive, repetitive or hard to scale.

### Footer

Descriptor: Decifer is an AI implementation company in Dubai. Nav: What we do · How we work · Work · About · Insights · Contact. Products listed under "Built by Decifer" as plain links. Legal links unchanged.

---

## 5. Supporting pages

**What we do (index).** Opens with the six failure points in one paragraph, then the four offers as rows, each with: who it is for, what you receive, who it is not for, engagement shape. All existing not-a-fit lists are kept verbatim.

**AI opportunity assessment** (slug ai-advisory; title carries "AI consulting Dubai"). Reframed from audit to assessment with a costed baseline as an explicit deliverable. Keep interviews, the ranked shortlist with effort and risk, and the do-not-automate list.

**Workflow automation and AI agents** (slug ai-agents; title carries "AI agent development Dubai"). Lead with the operating problem, then the redesign step, then the agent. Keep written boundary, human review, logs, and "if we cannot write the boundary down, we do not build the agent".

**Data and decision intelligence** (slug data-and-reporting). Lead with "most teams have enough data" and the ugly-data reality already in the service copy. Add: this is the unglamorous 70% of every AI project, and it is where most of them die.

**Custom AI products** (slug ai-product-development). As today, plus the operating-consequences line from Built by Decifer. Keep ownership and staged fixed fee.

**How we work** (new page; absorbs /capabilities, /stack and method content). Structure: the question (judgement or correctness) · the six boundary principles · the nine-stage delivery sequence: Discover, Baseline, Design, Build, Validate, Deploy, Adopt, Measure, Improve · the capability matrix, evidence and inference clearly separated · ownership at handover · what we will not automate, with the five removed-AI examples · the vendor comparison table.

**Work.** Case template: the operating problem · what had to change · what Decifer rebuilt · the operating outcome and how it is measured. Boundaries and withheld sections stay.

**About.** Founder story, why Decifer exists (the products taught us that the hard part was never calling the model), Built by Decifer section, and the honesty ledger: proof strip with sources, paper-account statement, removed-AI count.

**Insights.** Label rename only. Editorial categories when volume justifies them: implementation, workflow design, agents, decision intelligence, production engineering, adoption.

---

## 6. Content to delete, merge, rename, demote or move

Delete:
- The current hero H1 and label (the service-list version shipped earlier today).
- "Join Early Access" as a CTA anywhere on the parent site.
- The unverified "10 to 200 people" claim in layout.tsx metadata and faq.ts, pending the PRODUCT.md buyer decision.

Merge:
- /capabilities and /stack into How we work (301 redirects).
- Homepage RuleSection and CompareSection into the How we build section; the comparison table moves to How we work.

Rename:
- /services nav label to "What we do"; service nav labels per section 3. Slugs unchanged.
- /blog label to "Insights".
- Homepage "What we've made simple" panel to "Processes we have taken to production" (data unchanged).

Demote:
- /products to the About page's Built by Decifer section, with redirects.

Move:
- Founder section after the work section.

---

## 7. Legal and legacy-copy corrections

1. **/legal/privacy** still describes "the DECIFER parent platform and the early access process only" and calls itself a draft for the early-access phase. Rewrite around the consulting business. Blocked on counsel review per the standing rule; flag now.
2. **/legal/terms and /legal/refunds** to be reviewed with counsel in the same pass.
3. **/legal/ai-policy** needs only the company descriptor aligned.
4. **docs/ENTITY_PROFILES.md** says "Clients are never named" (stale; Aastha Chopra is named with permission) and lists "Decifer Trading". Update boilerplate to the new descriptor once approved.
5. **src/app/data/proof.ts** hard rule "No client is ever named" contradicts caseShapes.ts and the live site. Reword to "No client is named without written permission".
6. **docs/BRAND_GUIDELINES.md** CTA hierarchy still mandates "Join Early Access". Replace with the "Discuss a business process" hierarchy.
7. **docs/DECIFER_BRAND_MARK_SYSTEM.md** still prescribes "DECIFER Trading" lockups. Update to Markets.
8. **docs/DECIFER_DIGITAL_EXPERIENCE_SYSTEM.md** still specifies a dark navy parent site and Inter/Instrument Serif. Mark the parent-site sections superseded.
9. **docs/LAUNCH_CHECKLIST.md and docs/SOFT_LAUNCH_SMOKE_TEST.md** still test the early-access CTA, a dark background, and Money/World/Work in the footer. Regenerate after this ships.
10. **layout.tsx metadata and faq.ts** carry the "10 to 200 people" figure and the product-company description; both follow the new descriptor.

---

## 8. Final messaging system

**Corporate descriptor:** AI implementation company

**Main homepage headline:** Turn AI investment into operating results.

**Supporting proposition:** Decifer takes responsibility for the whole path: business case, workflow redesign, build, integration, rollout and measurement. Anything that must be right runs as tested code; models handle only what needs judgement; a test enforces the line.

**Proof points:**
1. Three public products run in production on the same method sold to clients, including five months of continuous unattended operation and 9,000+ automated tests in the largest system.
2. A build fails automatically if a model writes a figure the code did not compute.
3. Five published client cases show the measurement method and what was deliberately not automated; AI has been removed from working systems five times.
4. Clients own everything at handover: accounts, repository, runbook, and data in standard Postgres.
5. Every engagement starts with a costed baseline, so the result can be checked against a real before.

**Primary CTA:** Discuss a business process

**Short description (30 words):** Decifer is an AI implementation company in Dubai. We take business processes from AI pilot to dependable daily operation: assessment, workflow redesign, build, integration and measurement, with client ownership at handover.

**Medium description (80 words):** Decifer is an AI implementation company based in Dubai, working with businesses in the Gulf, the UK and Singapore. Most AI initiatives stall between pilot and production. Decifer takes responsibility for the whole path: the business case, the workflow redesign, the system build, integration with existing tools, rollout, and measurement against a baseline taken before the build. Anything that must be right runs as tested code; models handle only what needs judgement. Clients own every account and repository at handover.

**LinkedIn description (150 words):** Decifer is an AI implementation company based in Dubai. Companies are investing heavily in AI, but most pilots never become dependable systems: workflows are not redesigned, data is not ready, nothing is integrated, and nobody measures the result. Decifer takes responsibility across that gap. Engagements start with a fixed-fee assessment that costs the current process and sets the baseline. We then redesign the workflow, build the system, integrate it with the tools the business already runs, and measure the result against the baseline. The engineering rule underneath: anything that must be right runs as ordinary, tested code, and models handle only what genuinely needs judgement. A test fails the build if a model invents a figure. We also put in writing what should not be automated. Decifer runs three public products of its own on the same method, which is where the method is tested before a client ever pays for it.

---

## Sources for all external claims

- MIT Project NANDA, The GenAI Divide: State of AI in Business 2025 (95% of GenAI pilots show no measurable P&L return; external partnerships succeed at roughly twice the rate of internal builds). https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf
- Gartner press release, 29 July 2024 (at least 30% of GenAI projects abandoned after proof of concept by end of 2025). https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025
- McKinsey, The State of AI in GCC Countries: In Pursuit of Scale and Value, November 2025 (84% adoption; 31% scaled; 11% value realisers attributing at least 5% of earnings to AI). https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-in-gcc-countries-and-how-to-overcome-adoption-challenges
- BCG, AI at Scale (the 10-20-70 principle). https://www.bcg.com/capabilities/artificial-intelligence

Internal figures: src/app/data/proof.ts only, verified 2026-08-22.
