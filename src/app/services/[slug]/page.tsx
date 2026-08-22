import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionLabel from "@/app/components/SectionLabel";
import StackChips from "@/app/components/StackChips";
import ProofStrip from "@/app/components/ProofStrip";
import CaseShapeCard from "@/app/components/CaseShapeCard";
import { services, servicesByKey, servicesOrdered, type ServiceKey } from "@/app/data/services";
import { caseShapesForService } from "@/app/data/caseShapes";
import { products } from "@/app/data/products";
import { jsonLd, SITE } from "@/lib/jsonld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesByKey[slug as ServiceKey];
  if (!s) return {};
  return {
    title: `${s.name} in Dubai`,
    description: s.summary,
    alternates: { canonical: `/services/${s.key}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = servicesByKey[slug as ServiceKey];
  if (!s) notFound();

  const shapes = caseShapesForService(s.key);
  const proofProduct = s.proofProduct
    ? products.find((p) => p.key === s.proofProduct) ?? null
    : null;
  const others = servicesOrdered.filter((o) => o.key !== s.key);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/${s.key}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.summary,
        url: `${SITE}/services/${s.key}`,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United Kingdom" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DECIFER", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: s.name, item: `${SITE}/services/${s.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        label={s.navLabel}
        title={s.cardHeadline}
        lede={s.summary}
        align="left"
      >
        <StackChips keys={s.stackKeys} />
      </PageHero>

      {/* Problem + what we do */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionLabel>The situation</SectionLabel>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink">
              {s.name}
            </h2>
            <p className="text-[15px] leading-relaxed text-body">{s.problem}</p>
          </div>
          <div>
            <SectionLabel>What we do</SectionLabel>
            <p className="text-[15px] leading-relaxed text-body">{s.description}</p>
            <p className="mt-5 rounded-xl border border-line-strong bg-surface/60 px-5 py-4 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink">Typical engagement. </span>
              {s.typicalEngagement}
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10">
            <SectionLabel>What you receive</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Concrete things, not outcomes on a slide.
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {s.deliverables.map((d, i) => (
              <li
                key={d}
                className="card-lift flex gap-4 rounded-2xl border border-line-strong bg-surface p-6"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-cta/35 bg-cta/10 text-xs font-bold text-cta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-body">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <div className="rounded-2xl border border-live/30 bg-live/5 p-8">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-live">
              A good fit when
            </p>
            <ul className="space-y-3">
              {s.goodFit.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-live" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line-strong bg-surface p-8">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Not a fit when
            </p>
            <ul className="space-y-3">
              {s.notAFit.map((n) => (
                <li key={n} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              If that describes you, the audit is still useful. It will say so plainly.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10">
            <SectionLabel>Proof</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Things you can check.
            </h2>
          </div>
          <ProofStrip keys={s.proofRefs} compact />

          {proofProduct ? (
            <div className="mt-8 rounded-2xl border border-line-strong bg-surface p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Built this way for ourselves
                </p>
                <p className="text-[15px] leading-relaxed text-body">
                  <span className="font-semibold text-ink">{proofProduct.name}</span> is
                  a public product we run with the same method. Open it before you hire us.
                </p>
              </div>
              {proofProduct.href ? (
                <a
                  href={proofProduct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event={proofProduct.event}
                  className="btn btn-secondary mt-5 px-5 py-2.5 sm:mt-0"
                >
                  Open {proofProduct.name}
                </a>
              ) : null}
            </div>
          ) : null}

          {shapes.length ? (
            <div className="mt-12">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Work of this shape
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {shapes.map((c) => (
                  <CaseShapeCard key={c.key} shape={c} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Other services */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Other services
          </p>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link key={o.key} href={`/services/${o.key}`} className="chip">
                <span className="chip-dot" aria-hidden="true" />
                {o.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eventPrefix={`service_${s.key}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
