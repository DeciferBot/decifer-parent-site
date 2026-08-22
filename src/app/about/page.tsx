import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionLabel from "@/app/components/SectionLabel";
import ProofStrip from "@/app/components/ProofStrip";
import { products } from "@/app/data/products";
import { proofByKey } from "@/app/data/proof";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About DECIFER: an AI company in Dubai that ships",
  description:
    "DECIFER is a licensed AI company based in Dubai, founded by Amit Chopra. It builds agents, automation and complete products for businesses, and runs three public products with the same method.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE}/about#page`,
        url: `${SITE}/about`,
        name: "About DECIFER",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "Person",
        "@id": `${SITE}/about#amit-chopra`,
        name: "Amit Chopra",
        jobTitle: "Founder",
        worksFor: { "@id": `${SITE}/#organization` },
        url: `${SITE}/about`,
        sameAs: ["https://www.linkedin.com/company/deciferdxb/"],
      },
    ],
  };

  return (
    <>
      <PageHero
        label="About"
        title={
          <>
            Based in Dubai.
            <br />
            <span className="font-display font-normal italic text-cta">
              Built to be checked.
            </span>
          </>
        }
        lede="DECIFER is a licensed AI company in Dubai, United Arab Emirates. It builds AI agents, automation and complete products for businesses here and abroad, and it runs three public products using exactly the same method."
      />

      {/* The doctrine */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>The rule we build by</SectionLabel>
          <blockquote className="mb-8 font-display text-2xl leading-snug text-ink sm:text-3xl">
            Code computes the numbers. The model only narrates or extracts. The
            boundary is enforced by a test.
          </blockquote>
          <div className="space-y-5 text-[15px] leading-relaxed text-body">
            <p>
              That is the whole method in one sentence. Every figure a customer
              sees is produced by ordinary code that can be read and tested. A
              model may write the sentence around the figure, or pull a fact out
              of a document, but it never invents the number, and a test fails
              the build if it tries.
            </p>
            <p>
              It shows up in different ways. A validator that rejects any number
              in a model&apos;s text that the code did not compute. A maths
              engine that owns the answer so the model never has to. A guardrail
              that blocks a quoted price above the real inventory ceiling. An
              extraction schema with no field for a passport number, so there is
              nowhere to write one down.
            </p>
            <p>
              And sometimes the right move is to take the AI out. We have removed
              it from working systems{" "}
              <span className="font-semibold text-ink">
                {proofByKey.deletedAi.value} times
              </span>{" "}
              because a plain check was cheaper, faster, and could not make
              anything up. We write about every one.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>Founder</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Amit Chopra
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-body">
            <p>
              I started DECIFER to answer a question I kept meeting in different
              places: there is more information than ever, and less
              understanding. The first answers were products. Decifer Markets
              reads the market for ordinary people. Decifer Learning guides
              children through the curriculum. Decifer Marketing tells a business
              what is working and why.
            </p>
            <p>
              Building those taught me what it actually takes to run AI in
              production, as opposed to demonstrating it. Then other businesses
              started asking for the same thing. The services side of DECIFER
              exists because the products were the lab, and client work gets the
              version that has already been tested on our own money.
            </p>
            <p>
              I am in Dubai, I answer enquiries myself, and I will tell you when
              AI is the wrong answer. Sometimes the fix is a spreadsheet formula
              and one less approval step.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10">
            <SectionLabel>In numbers</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What five months looks like.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
              Every figure below was read from the code and can be checked.
              The investing system runs on a broker paper account. It is not a
              real-money track record, and we never describe it as one.
            </p>
          </div>
          <ProofStrip
            keys={[
              "liveProducts",
              "monthsLive",
              "repositories",
              "commits",
              "routes",
              "tables",
              "scheduledJobs",
              "integrations",
            ]}
          />
        </div>
      </section>

      {/* Products */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10">
            <SectionLabel>Our own products</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Open them before you hire us.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.key}
                className="card-lift rounded-2xl border border-line-strong bg-surface p-7"
              >
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {p.category}
                </p>
                <h3 className="mb-3 text-xl font-bold text-ink">{p.name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-body">{p.tagline}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event={p.event}
                    className="text-sm font-semibold text-cta hover:underline"
                  >
                    Visit {p.name}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            <Link href="/products" className="text-cta hover:underline">
              Read more about the product family
            </Link>
          </p>
        </div>
      </section>

      {/* Company */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>Company</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A licensed entity, a named person, a real reply.
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-body">
            <p>
              DECIFER is a licensed company in Dubai, United Arab Emirates. It
              serves clients in the UAE, the wider Gulf, Singapore and the
              United Kingdom. Client work is never named on this site, and the
              reasons are written down in our{" "}
              <Link href="/legal/client-confidentiality" className="text-cta hover:underline">
                client confidentiality statement
              </Link>
              .
            </p>
            <p>
              Enquiries are read and answered by the founder within one working
              day. Write to{" "}
              <a href="mailto:hello@decifer.io" className="text-cta hover:underline">
                hello@decifer.io
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-cta hover:underline">
                book a call
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix="about" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
