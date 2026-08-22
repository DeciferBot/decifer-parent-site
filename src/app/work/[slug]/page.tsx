import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionLabel from "@/app/components/SectionLabel";
import StackChips from "@/app/components/StackChips";
import { publishedCaseShapes, caseShapesByKey } from "@/app/data/caseShapes";
import { servicesByKey } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCaseShapes.map((c) => ({ slug: c.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = caseShapesByKey[slug];
  if (!c || !c.published) return {};
  return {
    title: c.title,
    description: `${c.clientShape}. ${c.situation}`.slice(0, 158),
    alternates: { canonical: `/work/${c.key}` },
  };
}

function Block({
  label,
  title,
  items,
  tone = "default",
}: {
  label: string;
  title: string;
  items: string[];
  tone?: "default" | "boundary";
}) {
  const boundary = tone === "boundary";
  return (
    <div
      className={`rounded-2xl border p-8 ${boundary ? "border-cta/30 bg-cta/5" : "border-line-strong bg-surface"}`}
    >
      <p className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${boundary ? "text-cta" : "text-muted"}`}>
        {label}
      </p>
      <h2 className="mb-5 text-xl font-bold text-ink">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
            <span
              className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${boundary ? "bg-cta" : "bg-brand"}`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseShapePage({ params }: Params) {
  const { slug } = await params;
  const c = caseShapesByKey[slug];
  if (!c || !c.published) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE}/work/${c.key}#article`,
        headline: c.title,
        description: c.clientShape,
        url: `${SITE}/work/${c.key}`,
        dateModified: c.updatedAt,
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@id": `${SITE}/work#page` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DECIFER", item: SITE },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
          { "@type": "ListItem", position: 3, name: c.title, item: `${SITE}/work/${c.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        label={`${c.sector} / ${c.region}`}
        title={c.title}
        lede={`${c.clientShape}.`}
        align="left"
      >
        <StackChips keys={c.stackKeys} />
      </PageHero>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>The situation</SectionLabel>
          <p className="text-lg leading-relaxed text-body">{c.situation}</p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <Block label="What we built" title="The work" items={c.work} />
          <Block label="What changed" title="The outcome" items={c.outcome} />
          <Block
            label="What we deliberately did not automate"
            title="The boundaries"
            items={c.boundaries}
            tone="boundary"
          />
          <div className="rounded-2xl border border-line-strong bg-surface p-8">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              How it is measured
            </p>
            <h2 className="mb-5 text-xl font-bold text-ink">The check</h2>
            <p className="text-[15px] leading-relaxed text-body">{c.measurement}</p>
            <p className="mt-6 mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              What we cannot tell you
            </p>
            <p className="text-[15px] leading-relaxed text-body">{c.withheld}</p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Services this came from
          </p>
          <div className="flex flex-wrap gap-2">
            {c.serviceKeys.map((k) => {
              const s = servicesByKey[k];
              return (
                <Link key={k} href={`/services/${k}`} className="chip">
                  <span className="chip-dot" aria-hidden="true" />
                  {s.navLabel}
                </Link>
              );
            })}
            <Link href="/work" className="chip">
              All work
            </Link>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix={`work_${c.key}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
