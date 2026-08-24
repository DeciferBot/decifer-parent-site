/**
 * Homepage FAQ, single source of truth.
 *
 * Read by: the homepage FAQ section and its FAQPage structured data
 * (both rendered by components/home/FaqSection.tsx). Keep questions and
 * answers in plain English. No em dashes (brand rule).
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What does Decifer do?",
    a: "Decifer helps companies implement AI inside real business processes. We identify the opportunity, redesign the workflow, build the system, connect the tools you already run, establish operating controls and measure the result. We also build and run three public products of our own, which is where the method is tested.",
  },
  {
    q: "Where should we start?",
    a: "With a process where the outcome can be measured: repeated manual work, high volume, slow response times, fragmented information, or decisions that keep needing the same context. The two-week assessment ranks these before anything is built, at a fixed fee credited in full against any build that follows.",
  },
  {
    q: "We already ran a pilot and it stalled. Can you take it over?",
    a: "Often, yes. The assessment works on an existing pilot as well as a new idea. We baseline the process, find where the pilot stalled, and tell you plainly whether it is worth rescuing.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. Most of the work involves existing environments. We assess the available APIs, databases, documents and permissions before deciding how the implementation connects to them.",
  },
  {
    q: "Do you build AI agents?",
    a: "Yes, when the workflow genuinely benefits from one. Other workflows are better served by conventional automation, retrieval or plain code, and we say so. We have removed AI from our own working systems five times because a simpler check was better.",
  },
  {
    q: "How do you deal with AI errors?",
    a: "We design around them: deterministic validation, restricted actions, human review where a mistake is expensive, audit logs and defined exception paths. A test fails the build if a model writes a figure the code did not compute. The controls scale with the consequence of a wrong output.",
  },
  {
    q: "How do you calculate ROI?",
    a: "The baseline is taken before implementation: employee time, processing cost, turnaround, error rate, conversion or another operating measure. After deployment the same measures are read again, the same way. Without a baseline, ROI is an opinion.",
  },
  {
    q: "Who owns what gets built?",
    a: "You do. Every account is opened in your name, the repository transfers to you at handover with a runbook, and the data lives in standard Postgres you can export. Ongoing support is a commercial choice, never a technical trap.",
  },
  {
    q: "Why are most clients not named on the site?",
    a: "Some asked us not to, and for the rest we chose not to by default. Work is described by sector and shape instead, with what we built, what changed, how it is measured and what we deliberately did not automate. A client can always choose to be named, in writing. Any number is published only with the method and written permission.",
  },
];

/** FAQPage JSON-LD built from the same items the page renders. */
export function faqJsonLd(items: FaqItem[] = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
