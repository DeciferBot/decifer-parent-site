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
    a: "Decifer is an AI company based in Dubai. It builds AI agents, workflow automation, data and reporting systems and complete products for businesses of roughly 10 to 200 people in the UAE and abroad. It also builds and runs three public products of its own: Decifer Markets, Decifer Learning and Decifer Marketing.",
  },
  {
    q: "How does an engagement start, and what does it cost?",
    a: "Usually with a two-week audit at a fixed fee, credited in full against any build that follows. It maps where time goes in your business, scores what is worth automating, and lists plainly what not to automate yet. We do not publish prices because the honest answer depends on scope; you get a number after the first call.",
  },
  {
    q: "You run your own products. Will you have time for my project?",
    a: "Yes. The products are where the methods get tested, and client work gets the tested version. Enquiries are read and answered by the founder within one working day, and every build carries a named owner and a runbook.",
  },
  {
    q: "Who owns what gets built?",
    a: "You do. Every account is opened in your name, the repository transfers to you at handover, and the data lives in standard Postgres you can export. Listing a tool on this site means we use it, not that we resell it.",
  },
  {
    q: "Why are no clients named on the site?",
    a: "Some asked us not to, and for the rest we chose not to. Work is described by sector and shape instead, with what we built, what changed, how it is measured and what we deliberately did not automate. Any number is published only with the method and written permission.",
  },
  {
    q: "What do you mean by \"code computes, the model narrates\"?",
    a: "Every figure a customer sees is produced by ordinary code that can be read and tested. A model may write the sentence around the figure or pull a fact from a document, but it never invents the number, and a test fails the build if it tries. Sometimes the right answer is no AI at all, and we say so.",
  },
  {
    q: "Is Decifer the same as the word decipher?",
    a: "No. Decifer is a company name, spelled with an e. The idea is related, because we help people and businesses make sense of complex information, but Decifer refers to the company and its products, not the dictionary word.",
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
