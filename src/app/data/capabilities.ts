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
 * Naming rule: the capability, not the industry, leads. A reader outside
 * the proven industry should still recognise their own problem in `name`
 * and `pattern` before they ever see `provenIn` or `transfersTo`. See the
 * 2026-08-24 positioning note: case studies must not read as
 * industry-limited, or a reader outside that industry bounces before they
 * see the capability applies to them too.
 *
 * Read by: /capabilities and the homepage "what we've solved" section.
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
  /** The business value, stated first, industry-agnostic. Leads the card. */
  name: string;
  /** One sentence: the mechanism, stated generally. */
  pattern: string;
  /** Case shape keys (caseShapes.ts) this is proven in. Evidence. */
  provenIn: string[];
  /** What was proven, in one sentence. May name a public product by name. */
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
    name: "One system instead of scattered paperwork and memory",
    pattern:
      "Documents, spreadsheets and years of institutional memory, turned into one record that is searchable, correct, and does not live in one person's head.",
    provenIn: ["catering-quotes-and-kitchen"],
    provenSummary: "719 order documents from 30 years of trading became one priced, queryable record.",
    transfersTo: ["Insurance claims history", "Legal matter files", "Banking back-office records", "Manufacturing specs and BOMs"],
    buyerAngle:
      "Old paperwork becomes an asset your whole team can use, without a year-long IT project. The mechanism is the same whether the source is function sheets, claim files or contracts.",
    serviceKeys: ["data-and-reporting"],
    order: 1,
  },
  {
    key: "fact-computed-reporting",
    name: "A number everyone in the business already trusts",
    pattern:
      "One fact store, refreshed on a schedule, with every report built from those facts in code. A model may write the sentence around a figure; the figure itself always comes from the code.",
    provenIn: ["group-marketing-one-view"],
    provenSummary: "Nine operating companies now read from one dashboard, refreshed nightly instead of assembled by hand each quarter.",
    transfersTo: ["FP&A and board reporting", "Multi-brand or multi-subsidiary groups", "PE portfolio company roll-ups"],
    buyerAngle:
      "Nobody has to fact-check the board deck: the validator that blocks an invented figure already runs in production. The same rule marks a child's maths homework in one of our own products — the solver decides right or wrong, and the model never gets a vote.",
    serviceKeys: ["data-and-reporting"],
    order: 2,
  },
  {
    key: "boundary-scoped-agents",
    name: "An agent that completes the task, or hands it to a person",
    pattern:
      "An agent scoped to one job, wired into the systems it needs, with a written definition of what it may do, what it hands to a person, and a log of every action it takes.",
    provenIn: ["private-event-concierge"],
    provenSummary: "A concierge scored 40 out of 40 on a graded eval, partly by refusing what it could not verify, and logged every change under a name and a time.",
    transfersTo: ["Contact centres and support queues", "Sales development and qualification", "Claims intake", "Internal helpdesks"],
    buyerAngle:
      "Real autonomy, with proof it still works when someone tries to trip it up — the two things most AI vendors only offer one of.",
    serviceKeys: ["ai-agents"],
    order: 3,
  },
  {
    key: "deliberate-non-automation",
    name: "Knowing exactly where AI should not be used",
    pattern:
      "We decide where AI is genuinely too risky, and remove it from that part of the system completely: no field to type a number into, no AI in that step at all, a person alerted before anything happens.",
    provenIn: ["counselling-practice-intake"],
    provenSummary: "Zero client-facing AI in a clinical intake system; screening scored by arithmetic against published cutoffs.",
    transfersTo: ["Healthcare and clinical operations", "HR and people decisions", "Legal advice", "Regulated financial advice"],
    buyerAngle:
      "The same team that ships AI can tell you, in writing, what should not ship — and has done exactly that five times on its own systems.",
    serviceKeys: ["ai-advisory"],
    order: 4,
  },
  {
    key: "product-grade-discipline",
    name: "Built to run with nobody watching it",
    pattern:
      "Every engagement held to the bar of a public product: monitoring, an eval suite, a runbook and a proper handover.",
    provenIn: ["catering-quotes-and-kitchen", "private-event-concierge"],
    provenSummary: "Decifer Markets has run five months straight, unattended, with an eval suite that fails the build on a regression.",
    transfersTo: ["Any implementation where the real question is whether it survives without supervision"],
    buyerAngle:
      "What gets handed over already carries its own monitoring and evals, because that is the only way we have ever shipped anything.",
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
