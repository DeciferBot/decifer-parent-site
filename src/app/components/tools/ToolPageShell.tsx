import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import Icon from "@/app/components/Icon";
import type { Tool } from "@/app/data/tools";
import { accent } from "@/app/data/accents";
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

      <section className="band band-tight band-tint">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">{children}</div>

          {/* The right rail says what the tool is and is not, which is the
              same promise the rest of the site makes about its systems:
              plain arithmetic, nothing stored, no model in the path. */}
          <aside className="lg:col-span-4">
            <div
              className="accent-cap sticky top-24 rounded-sm border border-line bg-panel px-5 py-5"
              style={accent(tool.hue)}
            >
              <h2 className="flex items-center gap-2.5 text-[1.0625rem] font-semibold text-ink">
                <span className="text-[var(--accent)]">
                  <Icon name="rule" size={18} />
                </span>
                What this tool is
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                {tool.question}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                {[
                  "Plain arithmetic and rules, running in your browser",
                  "No model in the path, so it cannot invent an answer",
                  "Nothing is stored and nothing is sent anywhere",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-[0.875rem] leading-relaxed text-body"
                  >
                    <span
                      className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[0.875rem] leading-relaxed text-muted">
                The thinking behind it, in full:{" "}
                <Link href={`/blog/${tool.articleSlug}`} className="link">
                  {tool.articleTitle}
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand eventPrefix={`tools_${tool.key.replace(/-/g, "_")}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
