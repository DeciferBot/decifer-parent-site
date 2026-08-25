import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import StackList from "@/app/components/StackChips";
import Arrow from "@/app/components/Arrow";
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
  title,
  items,
  marker = "ink",
}: {
  title: string;
  items: string[];
  marker?: "ink" | "orange";
}) {
  return (
    <div className="border-t border-line pt-5">
      <h2 className="t-h3 text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-body">
            <span
              className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${marker === "orange" ? "bg-orange" : "bg-ink"}`}
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
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
          { "@type": "ListItem", position: 3, name: c.title, item: `${SITE}/work/${c.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero kicker={`${c.sector}, ${c.region}`} title={c.title} lede={`${c.clientShape}.`}>
        <StackList keys={c.stackKeys} />
      </PageHero>

      <section className="pb-16 sm:pb-20">
        <div className="container-x grid gap-6 md:grid-cols-12">
          <h2 className="t-h3 text-ink md:col-span-3">Before</h2>
          <p className="t-lede md:col-span-8 md:col-start-4">{c.situation}</p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-x-10">
          <Block title="What we built" items={c.work} />
          <Block title="What changed" items={c.outcome} />
          <Block title="Where a person stays in charge" items={c.boundaries} marker="orange" />
          <div className="border-t border-line pt-5">
            <h2 className="t-h3 text-ink">How it is measured</h2>
            <p className="t-body mt-5">{c.measurement}</p>
            <h2 className="t-h3 mt-10 text-ink">What stays confidential</h2>
            <p className="t-body mt-5">{c.withheld}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section-tight">
          <div className="panel px-6 py-6">
            <p className="label">Same shape as your process?</p>
            <p className="t-body mt-3 max-w-2xl">
              Tell us what the equivalent task costs you today and we will tell you what this
              shape would take to build for you, what it should return, and where to start.
              Thirty minutes, no slides.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href={`/contact?problem=${encodeURIComponent(
                  `We read your ${c.sector.toLowerCase()} case, "${c.title}", and we have a process of a similar shape. We want to know what it would take to build the equivalent for us.`
                )}&service=${c.serviceKeys[0]}`}
                data-event={`work_${c.key}_discuss`}
                className="btn btn-primary px-4 py-2.5 text-sm"
              >
                Discuss a process like this
                <Arrow className="row-arrow" size={15} />
              </Link>
              <Link
                href="/tools/automation-payback-calculator"
                data-event={`work_${c.key}_payback`}
                className="link text-sm"
              >
                Or price the saving first
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section-tight">
          <p className="text-sm font-semibold text-ink">Services this came from</p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {c.serviceKeys.map((k) => (
              <li key={k}>
                <Link href={`/services/${k}`} className="arrow-link text-[0.9375rem]">
                  {servicesByKey[k].name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className="arrow-link text-[0.9375rem]">
                All work
                <Arrow size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand eventPrefix={`work_${c.key}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
