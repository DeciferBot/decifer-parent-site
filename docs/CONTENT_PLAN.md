# Content plan: next five posts

Status: all five written and added to the site on 2026-08-24, same PR.

Written 2026-08-24. Topics come from questions people actually ask on Google
and Reddit, not from what we want to say. Each post answers one question in
plain English, shows real numbers where we have them, and points at one
service. No clever framings.

## The five posts, in publish order

### 1. Is AI automation worth it for a small business?

- **Search phrasing:** "is AI automation worth it", "AI for small business worth it"
- **The question behind it:** owners are asked to spend and cannot tell hype from value.
- **The honest answer (from Reddit patterns):** it pays off when aimed at one
  specific repeated task, and disappoints when a tool is bought with no target
  workflow. Start narrow, measure time saved, expand.
- **Our angle:** the four questions to answer before spending anything
  (where do you lose the most time, what makes customers wait, what breaks
  when the person who does it is away, what is the cost of changing nothing).
- **Links to:** /services/ai-advisory, the assessment.

### 2. How much does an AI agent really cost to build and run?

- **Search phrasing:** "AI agent cost", "how much does an AI agent cost", "build vs buy AI agent"
- **The question behind it:** cost is the most asked and least plainly answered
  question in the space. Everyone hides the running cost.
- **Our angle:** the blog already promises "costs shown". Break down build cost,
  monthly running cost (model calls, hosting, monitoring), and the hidden line
  items (evaluation, incident time). Use our own products' cost shapes.
- **Caution:** only use real figures we can stand behind. No invented numbers.
- **Links to:** /services/ai-agents.

### 3. Why AI gets your numbers wrong, and how to stop it reaching a customer

- **Search phrasing:** "why does ChatGPT get numbers wrong", "AI hallucination business reports"
- **The question behind it:** owners have seen confident wrong figures.
  Public examples exist (a Big Four firm partially refunded a government
  contract in 2025 over AI-fabricated citations).
- **Our angle:** models generate numbers probabilistically; the fix is
  architectural, not better prompting. This is our rule: code computes the
  numbers, the model narrates, a test enforces the boundary.
- **Links to:** /services/data-and-reporting, "Where we deleted the AI".

### 4. Is your vibe-coded app safe to launch? The checks to run first

- **Search phrasing:** "is vibe coding safe", "vibe coded app security", "launch checklist"
- **The question behind it:** research in 2025 found roughly 45% of AI-generated
  code samples carried at least one OWASP Top 10 vulnerability, and iterating
  with the model made it worse, not better.
- **Our angle:** a concrete pre-launch security pass: secrets, auth on every
  endpoint, test-as-a-stranger, backups restored once, dependency check.
  Security-specific companion to the nine-mistakes post.
- **Links to:** /learn, /services/ai-product-development.

### 5. Do you need an AI agent, or just automation?

- **Search phrasing:** "AI agent vs automation", "do I need an AI agent"
- **The question behind it:** builders on r/AI_Agents repeatedly say most agent
  projects should have been simpler automations; analysts predict a large share
  of agentic projects cancelled by 2027 on cost and unclear value.
- **Our angle:** a plain decision rule: fixed steps and known inputs mean a
  workflow; judgement over messy inputs means an agent; anything customer-facing
  with money attached means a human stays in the loop. Maps to our follow-up
  sequence guide (the one with no AI in it).
- **Links to:** /services/ai-agents, "How to automate three business processes with AI".

## Sources consulted

- Layer3 Labs, "AI for Small Business: Reddit Questions Answered"
- Superblocks, "Vibe Coding Security: 7 Risks" (Veracode 2025 GenAI Code Security Report figures)
- ServicesGround, "Build vs Buy AI Agents in 2026"
- IV Consulting, "What Reddit really thinks about the AI agent spending boom" (r/AI_Agents patterns)
- Axis Intelligence and Forbes on AI hallucination examples and rates
- KPMG, "Agentic AI untangled: build, buy or borrow"

## Rules for every post (standing)

- Title matches the search phrasing. No wordplay.
- Answer the question in the first two paragraphs.
- Only claims we can verify; our own numbers only where already published.
- No em dashes, no "agency", Dubai not UAE, adult tone throughout.
- Each post names one service and the assessment, once, at the end.
