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
    q: "What does DECIFER do?",
    a: "DECIFER is an AI company based in Dubai. It builds AI agents, workflow automation, data and reporting systems and complete products for businesses in the UAE and abroad. It also builds and runs three public products of its own: Decifer Markets, Decifer Learning and Decifer Marketing.",
  },
  {
    q: "You run your own products. Will you be around for my project?",
    a: "Yes. The products are where the methods get tested, and client work gets the tested version. Enquiries are read and answered by the founder within one working day, and every build carries a named owner and a runbook.",
  },
  {
    q: "How does an engagement start?",
    a: "Usually with a two-week audit at a fixed fee, credited in full against any build that follows. It maps where time goes in your business, scores what is worth automating, and lists plainly what not to automate yet. You get a written recommendation you can act on with or without us.",
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
    q: "Is DECIFER the same as the word decipher?",
    a: "No. DECIFER is a company name, spelled with an e. The idea is related, because we help people and businesses make sense of complex information, but DECIFER refers to the company and its products, not the dictionary word.",
  },
  {
    q: "What are Decifer Markets, Decifer Learning and Decifer Marketing?",
    a: "Three public products DECIFER builds and runs with the same method it uses for client work. Decifer Markets is market intelligence in plain English, for research only and not financial advice. Decifer Learning is a guided companion for the UK National Curriculum that supports learning and does not replace teachers. Decifer Marketing turns campaign data into a plain read on what is working and why.",
  },
  {
    q: "How can I get early access to the products?",
    a: "Join early access from the products page. Tell us which product you are interested in, and access will open gradually as each one becomes ready. No payment is required for early access.",
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
