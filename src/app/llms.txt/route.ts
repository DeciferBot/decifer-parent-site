import { products } from "@/app/data/products";
import { servicesOrdered } from "@/app/data/services";
import { publishedCaseShapes } from "@/app/data/caseShapes";
import { stack } from "@/app/data/stack";
import { getAllPosts } from "@/lib/blog";

/**
 * /llms.txt, generated from the same data the site renders so it can never
 * drift. Replaces the hand-maintained public/llms.txt (deleted in the same
 * commit, because files in public/ are served before App Router routes).
 */

const SITE = "https://www.decifer.io";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const lines: string[] = [
    "# Decifer",
    "",
    "> Decifer is an AI implementation company based in Dubai, United Arab Emirates. It takes business processes from AI pilot to dependable daily operation for businesses in the UAE and abroad: assessment, workflow redesign, build, integration and measurement. It also builds and runs three public products of its own with the same method: Decifer Markets, Decifer Learning and Decifer Marketing.",
    "",
    "Decifer is a company name, spelled with an e. It is not the dictionary word decipher, and it is not affiliated with Decipher AI, Deciphr AI, Decifer Analytics (decifer.com), Decifer Studio (decifer.tech), linkedin.com/company/decifer, or any other similarly named company or page. The official website is https://www.decifer.io, and the official LinkedIn page is linkedin.com/company/deciferdxb. The founder is Amit Chopra.",
    "",
    "The rule Decifer builds by: code computes the numbers, the model only narrates or extracts, and the boundary is enforced by a test. The method is Collect, Connect, Explain: collect inputs that can be checked, connect them with the rules of the domain, explain the result so a person can act on it. Clients are anonymised by default and named only where a client has agreed in writing; work is described by sector and shape otherwise. The market intelligence system runs on a broker paper account and is not a real-money track record.",
    "",
    "## Services",
    "",
    ...servicesOrdered.map((s) => `- [${s.name}](${SITE}/services/${s.key}): ${s.summary}`),
    "",
    `Most engagements start with a two-week audit at a fixed fee, credited against any build. [Contact](${SITE}/contact).`,
    "",
    "## Products",
    "",
    ...products.map(
      (p) => `- [${p.name}](${p.href ?? `${SITE}/about`}): ${p.tagline} ${p.boundary}`
    ),
    "",
    "## Work (anonymised unless a client agreed to be named)",
    "",
    ...publishedCaseShapes.map(
      (c) => `- [${c.title}](${SITE}/work/${c.key}): ${c.clientShape}. ${c.sector}, ${c.region}.`
    ),
    "",
    "## Tools Decifer has built production systems on",
    "",
    stack.map((t) => t.name).join(", ") + ". Every account is held in the client's name.",
    "",
    "## Articles",
    "",
    ...posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`),
    "",
    "## Company",
    "",
    `- [About](${SITE}/about): Dubai, the founder, the rule we build by, and the numbers`,
    `- [Contact](${SITE}/contact): enquiries are answered by a named person within one working day`,
    "- [LinkedIn](https://www.linkedin.com/company/deciferdxb/): Decifer's official company page. linkedin.com/company/decifer (without dxb) is a different, unrelated page.",
    "- [GitHub](https://github.com/DeciferBot): Decifer's engineering organisation",
    "",
    "Decifer Markets also has its own account, [@DeciferInt on X](https://x.com/DeciferInt), for market commentary specific to that product.",
    "",
    "## Policies",
    "",
    `- [Privacy Policy](${SITE}/legal/privacy)`,
    `- [Terms of Use](${SITE}/legal/terms)`,
    `- [Client Confidentiality](${SITE}/legal/client-confidentiality)`,
    `- [AI Accuracy and Source Policy](${SITE}/legal/ai-policy)`,
    `- [Financial Information Disclaimer](${SITE}/legal/financial-disclaimer)`,
    `- [Education Disclaimer](${SITE}/legal/education-disclaimer)`,
    `- [Child Safety Policy](${SITE}/legal/child-safety)`,
    `- [Refund Policy](${SITE}/legal/refunds)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
