import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import Arrow from "@/app/components/Arrow";
import CtaBand from "@/app/components/CtaBand";
import { tools } from "@/app/data/tools";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Free AI decision tools for businesses",
  description:
    "Free tools that answer the three questions every business asks about AI: is it worth it, is my app safe to launch, and do I need an agent or automation. No signup, nothing stored.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/tools#page`,
        url: `${SITE}/tools`,
        name: "Free AI decision tools for businesses",
        description:
          "Free browser tools for businesses deciding on AI: payback arithmetic, a launch security scorecard, and an agent-or-automation decision rule.",
        isPartOf: { "@id": `${SITE}/#website` },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: tools.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: `${SITE}/tools/${t.key}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker="Tools"
        title="Decide before you spend."
        lede="Free tools for the questions every business asks about AI. No signup, no model behind them, nothing stored: plain arithmetic and rules, running in your browser."
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <div className="panel">
            <ul className="divide-y divide-line">
              {tools.map((t) => (
                <li key={t.key}>
                  <Link
                    href={`/tools/${t.key}`}
                    data-event={`tools_open_${t.key.replace(/-/g, "_")}`}
                    className="row-link group grid gap-3 px-6 py-7 md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-4">
                      <h2 className="t-h3 text-ink">{t.name}</h2>
                      <p className="mt-1 text-sm text-muted">{t.question}</p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="t-body measure">{t.summary}</p>
                    </div>
                    <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
                      <Arrow size={20} className="text-ink transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            These tools give the honest first answer, not the full one. The full one, priced for
            your specific business, is what the two-week assessment is for.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="tools" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
