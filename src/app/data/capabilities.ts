/**
 * The capability matrix: reusable patterns pulled out of caseShapes.ts, not
 * a new set of claims. Every `provenIn` key must exist in caseShapes.ts.
 *
 * "provenIn" is evidence: a real engagement, already published in
 * caseShapes.ts. "transfersTo" is inference: industries the same pattern
 * would apply to, where we have not built it yet. The two must never be
 * rendered as if they carry the same weight. See PRODUCT.md: a claim
 * without a source does not ship.
 *
 * Read by: /capabilities and the homepage capability teaser.
 */

import type { ServiceKey } from "./services";

export type CapabilityKey =
  | "records-from-chaos"
  | "fact-computed-reporting"
  | "boundary-scoped-agents"
  | "deliberate-non-automation"
  | "product-grade-discipline";

export interface Capability {
  key: CapabilityKey;
  /** Short name for the matrix row and card. */
  name: string;
  /** One sentence: the pattern, stated generally. */
  pattern: string;
  /** Case shape keys (caseShapes.ts) this is proven in. Evidence. */
  provenIn: string[];
  /** Short phrase naming what was proven, for the matrix cell. */
  provenSummary: string;
  /** Industries the same pattern would apply to. Inference, labelled as such. */
  transfersTo: string[];
  /** Why a technical or commercial buyer should care. One or two sentences. */
  buyerAngle: string;
  serviceKeys: ServiceKey[];
  order: number;
}

export const capabilities: Capability[] = [
  {
    key: "records-from-chaos",
    name: "Undocumented knowledge into a governed record",
    pattern:
      "Documents, spreadsheets and institutional memory scattered across a business, turned into one database that is queryable, auditable and correct, with nothing left that only lives in one person's head.",
    provenIn: ["catering-quotes-and-kitchen"],
    provenSummary: "719 order documents from 30 years of trading became one priced, queryable menu and customer record.",
    transfersTo: ["Insurance claims history", "Legal matter files", "Banking back-office records", "Manufacturing specs and BOMs"],
    buyerAngle:
      "Your data debt becomes an asset without an eighteen-month data-lake programme. The pattern does not care whether the source documents are function sheets or claim files.",
    serviceKeys: ["data-and-reporting"],
    order: 1,
  },
  {
    key: "fact-computed-reporting",
    name: "Reporting where the model narrates and code owns the number",
    pattern:
      "A single fact store, refreshed on a schedule from the systems already in use, with reports and memos composed from those facts in code. A model may write the sentence around a figure. It never invents the figure, and a test fails the build if it tries.",
    provenIn: ["group-marketing-one-view"],
    provenSummary: "Nine operating companies on one dashboard, with a weekly board memo assembled from computed facts, not a person's summary.",
    transfersTo: ["FP&A and board reporting", "Multi-brand or multi-subsidiary groups", "PE portfolio company roll-ups"],
    buyerAngle:
      "No hallucinated figure reaches a board deck, because the validator that blocks one already exists and has run in production for months.",
    serviceKeys: ["data-and-reporting"],
    order: 2,
  },
  {
    key: "boundary-scoped-agents",
    name: "Agents that do the job, inside a boundary that is written down",
    pattern:
      "An agent scoped to one job, connected to the systems that job needs, with a written definition of what it may do, what it must hand to a person, and a log of every action it takes. Autonomy where the task allows it; a person where a mistake is expensive.",
    provenIn: ["private-event-concierge"],
    provenSummary: "A concierge that scored 40 out of 40 on a graded eval, partly by refusing what it could not verify, and logged every change it made under a name and a time.",
    transfersTo: ["Contact centres and support queues", "Sales development and qualification", "Claims intake", "Internal helpdesks"],
    buyerAngle:
      "This is what most agent vendors cannot show at once: real autonomy, and proof the boundary holds under an adversarial test, not just a demo script.",
    serviceKeys: ["ai-agents"],
    order: 3,
  },
  {
    key: "deliberate-non-automation",
    name: "Knowing where AI should not go, and enforcing it structurally",
    pattern:
      "A domain-risk read that keeps AI out of specific paths entirely, not by a prompt instruction but by a structural constraint: no field to write the number into, no model in the path, an escalation that fires before a person sees anything.",
    provenIn: ["counselling-practice-intake"],
    provenSummary: "Zero client-facing AI in a clinical intake system; screening scored by arithmetic against published cutoffs, not by a model.",
    transfersTo: ["Healthcare and clinical operations", "HR and people decisions", "Legal advice", "Regulated financial advice"],
    buyerAngle:
      "A governance capability, not just a build capability. The same team that ships AI can tell you in writing what should not ship, and has done it five times on its own systems.",
    serviceKeys: ["ai-advisory"],
    order: 4,
  },
  {
    key: "product-grade-discipline",
    name: "The uptime discipline of a live product, applied to a bespoke build",
    pattern:
      "Every engagement is held to the same bar as a public product: monitoring, an eval suite, a runbook and a handover, so what is delivered is a system that can be trusted to run unattended, not a prototype with a demo script.",
    provenIn: ["catering-quotes-and-kitchen", "private-event-concierge"],
    provenSummary: "Five months of continuous, unattended production operation on the largest public system, with an eval suite that fails the build on a regression.",
    transfersTo: ["Any implementation where the real question is whether it can be trusted to run without supervision"],
    buyerAngle:
      "What gets handed over already has the monitoring and eval regime attached, because that is the only way we have ever shipped anything.",
    serviceKeys: ["ai-product-development"],
    order: 5,
  },
];

export const capabilitiesOrdered: Capability[] = capabilities
  .slice()
  .sort((a, b) => a.order - b.order);

export const capabilitiesByKey = Object.fromEntries(
  capabilities.map((c) => [c.key, c])
) as Record<CapabilityKey, Capability>;
