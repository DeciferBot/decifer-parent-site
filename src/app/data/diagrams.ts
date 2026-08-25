/**
 * The diagrams, as data.
 *
 * Two SVGs are drawn from design/architecture.py and rendered to
 * public/diagrams/. They were reachable only from inside one article, which
 * wasted them: a diagram is the asset a reader forwards to a colleague and
 * the one Google Images can rank on its own. Every TSX surface that shows a
 * diagram reads from here, so alt text, caption and dimensions stay identical
 * on the page, in the image sitemap and in the ImageObject node. The one
 * copy that cannot read this file is the article's own MDX frontmatter
 * (YAML): if a diagram's text changes, change it there too.
 *
 * Dimensions are required, same rule as PostImage in src/lib/blog.ts: they
 * set the aspect ratio Google indexes and they stop the figure shifting the
 * layout as it loads.
 */

import type { IconName } from "../components/Icon";
import type { AccentHue } from "./accents";

export type DiagramKey = "where-ai-sits" | "ai-systems-architecture";

export interface Diagram {
  /** Stable key. Also the anchor on /how-ai-works. Never change once live. */
  key: DiagramKey;
  src: string;
  width: number;
  height: number;
  /** Screen-reader text. Describes the diagram, not the topic. */
  alt: string;
  /** Human-readable line for Google Images. Shown under the figure too. */
  caption: string;
  /** Heading above the figure. */
  title: string;
  /** The question this diagram answers, in one sentence. */
  summary: string;
  /** What a reader should take away, part by part. Read in order. */
  reads: { part: string; body: string }[];
  /** The article this diagram was drawn for. */
  articleSlug: string;
  icon: IconName;
  hue: AccentHue;
  /** ISO date the diagram last changed. Drives sitemap lastModified. */
  updatedAt: string;
  order: number;
}

export const diagrams: Diagram[] = [
  {
    key: "where-ai-sits",
    src: "/diagrams/where-ai-sits.svg",
    width: 1180,
    height: 2504,
    alt:
      "Diagram in three parts. First, the three layers every business already runs, shown in grey: applications where people meet your business, business systems where the work is recorded, and foundations of data, infrastructure and security. Second, the same three layers with one new orange layer added between the applications and the business systems, taking work that needs judgement, reading the record and writing the outcome. Third, that new layer opened up into seven parts: the model, what it can read, what it retains, what it can act on, where a person approves, continuous assurance, and the audit trail. The model is one part in seven.",
    caption:
      "Where AI sits in a business technology stack: three layers you already run, and one new layer between the screens and the systems of record.",
    title: "Where AI sits in what you already run",
    summary:
      "AI is not a replacement for your technology stack. It is one new layer added between the screens your people use and the systems that hold the record.",
    reads: [
      {
        part: "The three layers you already have",
        body:
          "Applications where people meet your business, the systems where the work is recorded, and the data, infrastructure and security underneath. Every business running today has all three, whether or not anyone has drawn them.",
      },
      {
        part: "The one layer AI adds",
        body:
          "A layer that takes the work needing judgement, reads the record, and writes the outcome back. It sits between the screens and the systems. It does not replace either.",
      },
      {
        part: "That layer, opened up",
        body:
          "Seven parts: the model, what it can read, what it retains, what it can act on, where a person approves, continuous assurance, and the audit trail. The model is one part in seven, which is why choosing a model is one decision in seven.",
      },
    ],
    articleSlug: "the-ai-supply-chain-what-you-are-actually-buying",
    icon: "product",
    hue: "blue",
    updatedAt: "2026-08-25",
    order: 1,
  },
  {
    key: "ai-systems-architecture",
    src: "/diagrams/architecture.svg",
    width: 1600,
    height: 1426,
    alt:
      "Systems architecture diagram. Channels such as web, mobile, email and voice feed an application layer of interface, public API, access and billing. A request needing judgement passes into the AI layer, where it moves through four numbered steps: assemble the context, ask the model, check the answer, take the action. Those steps draw on memory, a model gateway holding GPT, Claude and Gemini with routing and fallback, and a set of tools. A control rail of guardrails, human approval, evaluation and an audit trail runs across all four steps. The AI layer reads and writes the systems the business already runs on, such as bookings, quotes and client records, and the data infrastructure beneath them. The answer returns to the application layer.",
    caption:
      "How the pieces connect: a request is assembled, sent to the model, checked and acted on, drawing on memory, a model gateway and tools, with control running across all four steps.",
    title: "How an AI system is actually put together",
    summary:
      "The same architecture behind every system on this site, drawn once: what happens to a single request from the moment it arrives to the moment the answer goes back.",
    reads: [
      {
        part: "Four steps, in order",
        body:
          "Assemble the context, ask the model, check the answer, take the action. Every request follows the same four. A system that skips the third step is the one that puts an invented figure in front of a customer.",
      },
      {
        part: "What the steps draw on",
        body:
          "Memory, a model gateway holding more than one model with routing and fallback, and a set of tools the system is allowed to use. The gateway is why a model going down is an incident rather than an outage.",
      },
      {
        part: "The control rail",
        body:
          "Guardrails, human approval, evaluation and an audit trail run across all four steps rather than sitting at the end. Control is not a gate the answer passes through last; it is present at every step or it is not present.",
      },
      {
        part: "What it reads and writes",
        body:
          "The systems the business already runs on: bookings, quotes, client records, and the data infrastructure beneath them. The AI layer uses the same paths a person does, which is what keeps one audit log rather than two.",
      },
    ],
    articleSlug: "the-ai-supply-chain-what-you-are-actually-buying",
    icon: "advisory",
    hue: "orange",
    updatedAt: "2026-08-25",
    order: 2,
  },
];

export const diagramsOrdered: Diagram[] = diagrams
  .slice()
  .sort((a, b) => a.order - b.order);

export const diagramsByKey = Object.fromEntries(
  diagrams.map((d) => [d.key, d])
) as Record<DiagramKey, Diagram>;

/** Newest updatedAt across the set, for the sitemap. */
export const lastDiagramChange: string = diagrams
  .map((d) => d.updatedAt)
  .sort()
  .at(-1)!;
