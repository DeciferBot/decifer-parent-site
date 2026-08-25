import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import type { Tool } from "@/app/data/tools";
import { jsonLd, SITE } from "@/lib/jsonld";

/**
 * Shared frame for a tool page: hero, the interactive tool, the article it
 * pairs with, CTA band, and WebApplication structured data. Each tool page
 * passes its data entry and the client component as children.
 */
export default function ToolPageShell({ tool, children }: { tool: Tool; children: React.ReactNode }) {
  const url = `${SITE}/tools/${tool.key}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: tool.name,
        url,
        description: tool.seoDescription,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@id": `${SITE}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
          { "@type": "ListItem", position: 3, name: tool.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker="Tools"
        title={tool.name}
        lede={tool.summary}
        icon={tool.icon}
        hue={tool.hue}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <div className="max-w-3xl">
            {children}
            <p className="mt-6 text-sm leading-relaxed text-muted">
              The thinking behind this tool, in full:{" "}
              <Link href={`/blog/${tool.articleSlug}`} className="link">
                {tool.articleTitle}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix={`tools_${tool.key.replace(/-/g, "_")}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
