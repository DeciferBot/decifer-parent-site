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
    q: "What is DECIFER?",
    a: "DECIFER is an AI intelligence company. It builds products that turn complex information into clear, plain-language understanding. Its current products are Decifer Markets, Decifer Learning and Decifer Marketing.",
  },
  {
    q: "Is DECIFER the same as the word decipher?",
    a: "No. DECIFER is a company name, spelled with an e. The idea is related, because the products help people decipher complex information, but DECIFER refers to the company and its products, not the dictionary word.",
  },
  {
    q: "What is Decifer Markets?",
    a: "Decifer Markets is a market intelligence product. It explains what is moving in markets, why it may matter and what to watch, in plain English. It is for research and context only and is not financial advice.",
  },
  {
    q: "What is Decifer Learning?",
    a: "Decifer Learning is a guided learning companion for the UK National Curriculum. Children learn, practise and quiz through each topic while parents see progress. It supports learning and does not replace teachers, schools or parents.",
  },
  {
    q: "What is Decifer Marketing?",
    a: "Decifer Marketing is a marketing intelligence product. It turns campaign, channel and audience data into a plain-English read on what is working, why, and what to do next. It is for insight and research context only, not a substitute for professional marketing advice.",
  },
  {
    q: "How does DECIFER work?",
    a: "Every DECIFER product follows the same method: collect trusted inputs, connect them with domain logic, and explain the result in plain language, while keeping sources and uncertainty visible.",
  },
  {
    q: "How can I get early access?",
    a: "You can join early access from this page. Tell us which product you are interested in, and access will open gradually as each product becomes ready. No payment is required for early access.",
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
