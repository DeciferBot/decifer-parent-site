import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import Arrow from "@/app/components/Arrow";
import Icon from "@/app/components/Icon";
import { accent } from "@/app/data/accents";
import { diagramsOrdered } from "@/app/data/diagrams";
import { getPost } from "@/lib/blog";
import { jsonLd, SITE } from "@/lib/jsonld";

/**
 * The diagrams, given their own page.
 *
 * They were drawn for one article and were reachable only by reading it,
 * which is the wrong home for the site's two strongest authority assets. A
 * diagram is what a reader forwards to a colleague, what a search engine can
 * rank on its own, and what a buyer who does not yet know what to ask can
 * understand in ten seconds. So it gets a URL, an ImageObject node, a place
 * in the image sitemap and a route to an enquiry.
 *
 * The article keeps the argument. This page keeps the pictures.
 */

export const metadata: Metadata = {
  title: "How AI works in a business: two diagrams",
  description:
    "Two diagrams that answer what you are actually buying: where an AI layer sits in the technology you already run, and how one request moves through it. Drawn from the systems we run in production.",
  alternates: { canonical: "/how-ai-works" },
};

export default function HowAiWorksPage() {
  const article = getPost(diagramsOrdered[0].articleSlug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/how-ai-works#page`,
        name: "How AI works in a business: two diagrams",
        url: `${SITE}/how-ai-works`,
        description:
          "Where an AI layer sits in the technology a business already runs, and how one request moves through it.",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        hasPart: diagramsOrdered.map((d) => ({ "@id": `${SITE}${d.src}#image` })),
      },
      ...diagramsOrdered.map((d, i) => ({
        "@type": "ImageObject",
        "@id": `${SITE}${d.src}#image`,
        contentUrl: `${SITE}${d.src}`,
        url: `${SITE}${d.src}`,
        width: d.width,
        height: d.height,
        name: d.title,
        caption: d.caption,
        description: d.alt,
        representativeOfPage: i === 0 || undefined,
        creditText: "Decifer",
        creator: { "@id": `${SITE}/#organization` },
        license: `${SITE}/how-ai-works`,
        acquireLicensePage: `${SITE}/how-ai-works`,
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: "How AI works",
            item: `${SITE}/how-ai-works`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker="How AI works"
        icon="advisory"
        hue="orange"
        title="Two diagrams for the decision you are about to make."
        lede="Most AI decisions go wrong because nobody has drawn the thing being bought. These are the drawings: where the new layer sits in the technology you already run, and what happens to a single request inside it. Both come from systems we run in production."
      />

      <section className="pb-4 sm:pb-8">
        <div className="container-x">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {diagramsOrdered.map((d) => (
              <li key={d.key}>
                <a href={`#${d.key}`} className="arrow-link text-[0.9375rem]">
                  {d.title}
                  <Arrow size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {diagramsOrdered.map((d, i) => {
        const portrait = d.height > d.width;
        return (
          <section
            key={d.key}
            id={d.key}
            className={i % 2 === 1 ? "band band-tint scroll-mt-24" : "band scroll-mt-24"}
          >
            <div className="container-x">
              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-6 lg:col-span-5">
                  <div className="mb-5 flex items-center gap-3" style={accent(d.hue)}>
                    <span className="icon-tile">
                      <Icon name={d.icon} />
                    </span>
                    <p className="label">Diagram {i + 1}</p>
                  </div>
                  <h2 className="t-h2 text-ink">{d.title}</h2>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="t-lede measure">{d.summary}</p>
                </div>
              </div>

              <figure className="mt-11">
                <div className="overflow-x-auto rounded-sm border border-line bg-panel p-4 sm:p-8">
                  {/* SVG: next/image does not optimise it, so a plain img with
                      explicit dimensions is the right element, as in the article. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.src}
                    width={d.width}
                    height={d.height}
                    alt={d.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`mx-auto h-auto w-full ${portrait ? "max-w-2xl" : ""}`}
                  />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <p className="t-body measure text-[0.9375rem]">{d.caption}</p>
                  <a
                    href={d.src}
                    target="_blank"
                    rel="noopener"
                    data-event={`diagram_${d.key.replace(/-/g, "_")}_full_size`}
                    className="link text-sm"
                  >
                    Open the full-size diagram
                  </a>
                </figcaption>
              </figure>

              <ol className="mt-10 grid gap-3 sm:grid-cols-2">
                {d.reads.map((r, j) => (
                  <li
                    key={r.part}
                    className="flex items-start gap-4 rounded-sm border border-line bg-panel px-5 py-5"
                  >
                    <span className="step-num step-num-on">{j + 1}</span>
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                        {r.part}
                      </h3>
                      <p className="t-body mt-2 text-[0.9375rem]">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}

      <section className="band band-dark field-dots">
        <div className="container-x">
          <SectionHead
            tone="light"
            title="Use the diagrams on your own systems."
            lede="The second diagram is a checklist as much as a picture. Take one process you are considering automating and put it through the four steps: what context gets assembled, what the model is asked, what checks the answer, and what action it is allowed to take."
          />
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              data-event="how_ai_works_contact"
              className="btn btn-primary px-4 py-2.5 text-sm"
            >
              Walk one process through it with us
              <Arrow className="row-arrow" size={15} />
            </Link>
            <Link
              href="/services/ai-advisory"
              data-event="how_ai_works_assessment"
              className="link text-sm text-on-dark-2"
            >
              Or start with the two-week assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="t-h3 text-ink">The argument behind the drawings</h2>
              <p className="t-body mt-3">
                Both diagrams were drawn for one article: what a single AI
                answer is made of, which parts you rent, which part you have to
                build, and the three ways this supply chain behaves unlike any
                other you run.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <div className="rounded-sm border border-line bg-panel px-6 py-6">
                <p className="label">Read next</p>
                <h3 className="t-h3 mt-3 text-ink">
                  {article?.title ?? "The AI supply chain: what you are actually buying"}
                </h3>
                <p className="t-body mt-2 text-[0.9375rem]">
                  {article?.description ??
                    "Most AI decisions go wrong because nobody has drawn the supply chain."}
                </p>
                <Link
                  href={`/blog/${diagramsOrdered[0].articleSlug}`}
                  data-event="how_ai_works_article"
                  className="btn btn-secondary mt-5 px-4 py-2.5 text-sm"
                >
                  Read the article
                  <Arrow className="row-arrow" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix="how_ai_works" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
