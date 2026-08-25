import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import ProofStrip from "@/app/components/ProofStrip";
import FounderSection from "@/app/components/home/FounderSection";
import BuiltSection from "@/app/components/home/BuiltSection";
import { publicProof, proofByKey } from "@/app/data/proof";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Decifer: an AI implementation company in Dubai",
  description:
    "Decifer is an AI implementation company based in Dubai, founded by Amit Chopra. It takes business processes from AI pilot to dependable daily operation, and runs three public products on the same method.",
  alternates: { canonical: "/about" },
};

const method = [
  {
    step: "Collect",
    body: "Start with inputs that can be checked. In a product, that means trusted sources and structured data. In your business, it means seeing how the work actually runs, not how the process document says it runs.",
  },
  {
    step: "Connect",
    body: "Apply the rules of the domain and the systems you already pay for. AI is used only where a decision needs real judgement; every number is computed in code, never guessed by a model.",
  },
  {
    step: "Explain",
    body: "Plain language, sources visible, uncertainty stated. For a client that also means a log you can read, a runbook, and a system you can switch off.",
  },
];

const principles = [
  {
    title: "A person decides",
    body: "The system explains context and drafts the next step. We keep a human wherever a mistake is expensive.",
  },
  {
    title: "A claim without a source does not ship",
    body: "Outputs are connected to checked inputs, references or defined logic.",
  },
  {
    title: "Uncertainty is visible",
    body: "AI should not sound certain when the information is incomplete or changing. Neither should we.",
  },
  {
    title: "Safety depends on the domain",
    body: "A clinic, a classroom and a trading desk need different safeguards. Some domains get no AI at all where a person could meet it.",
  },
  {
    title: "You own what we build",
    body: "Your accounts, your data, your repository. At handover there is nothing of yours that only we can reach.",
  },
  {
    title: "Clients are named only with written permission",
    body: "By default, work is described by shape. Numbers appear only with the method and written permission.",
  },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE}/about#page`,
        url: `${SITE}/about`,
        name: "About Decifer",
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
        kicker="About"
        title="Based in Dubai. Built to be checked."
        lede="Decifer is an AI implementation company in Dubai, United Arab Emirates. It takes business processes from AI pilot to dependable daily operation for businesses here and abroad, and it runs three public products with exactly the same method."
      />

      {/* Purpose */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="board px-8 py-10 sm:px-10 sm:py-12">
            <p className="label text-on-dark-2">Why the company exists</p>
            <p className="t-h3 mt-4 max-w-3xl text-on-dark">
              Decifer builds AI that actually runs inside a business, from week one.
            </p>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-on-dark-2">
              We run the same rule on our own systems first: three public products, running day
              and night for months. The software computes every number. AI only writes the words
              or reads the documents, inside limits we write down in advance and test. Most of a
              job does not need AI at all; it is only used where a decision needs real judgement.
              We sell that discipline &mdash; deciding exactly where that point is, then building
              it inside your business, the same way we already built it inside our own.
            </p>
          </div>
        </div>
      </section>

      {/* The rule */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <h2 className="t-h2 text-ink md:col-span-6">
            Code computes the numbers. The model writes the sentence. A test
            enforces the line.
          </h2>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-body md:col-span-5 md:col-start-8">
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
              extraction schema with no field for a passport number.
            </p>
            <p>
              Sometimes the right move is to take the AI out. We have removed it
              from working systems {proofByKey.deletedAi.value} times because a
              plain check was cheaper, faster, and could not make anything up.
            </p>
          </div>
        </div>
      </section>

      {/* Method: a real three-step sequence, so numbering is earned */}
      <section className="border-t border-line">
        <div className="container-x section">
          <SectionHead
            title="One method, for our products and your business."
            lede="Three steps that run every product we make and every engagement we take."
          />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {method.map((m, i) => (
              <li key={m.step} className="border-t border-line pt-5">
                <p className="text-sm font-semibold text-muted">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{m.step}</h3>
                <p className="t-body mt-3">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line">
        <div className="container-x section">
          <SectionHead
            title="Six rules that apply to everything."
            lede="They apply to our products and to every client engagement. They are why the work holds up at real volume."
          />
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li key={p.title} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="t-body mt-2">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FounderSection compact />

      {/* compact: the "How we count" section below already renders these
          figures and the paper-account line, so the stat grid is suppressed
          here to avoid printing every number three times on one page. */}
      <BuiltSection compact />

      {/* Numbers */}
      <section id="numbers" className="border-t border-line">
        <div className="container-x section">
          <SectionHead
            title="How we count."
            lede="Every figure about Decifer on this site comes from this list, and each one names where it was read from and when. If a number about us is not here, it must not appear on the site. Published third-party research is the one exception, and it is only ever shown with the publisher and date beside it."
          />
          <div className="mt-12">
            <ProofStrip
              keys={["liveProducts", "monthsLive", "routes", "tables", "scheduledJobs", "integrations", "testFunctions", "deletedAi"]}
              showSourceLink={false}
            />
          </div>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-left text-[0.9375rem]">
              <thead>
                <tr className="border-b border-line-strong text-sm text-ink">
                  <th className="py-3 pr-6 font-semibold">Figure</th>
                  <th className="py-3 pr-6 font-semibold">What it means</th>
                  <th className="py-3 pr-6 font-semibold">Where it was read from</th>
                  <th className="py-3 font-semibold">Verified</th>
                </tr>
              </thead>
              <tbody>
                {publicProof.map((p) => (
                  <tr key={p.key} className="border-b border-line align-top">
                    <td className="py-3 pr-6 font-semibold text-ink whitespace-nowrap">{p.value}</td>
                    <td className="py-3 pr-6 text-body">
                      <span className="text-ink">{p.label}.</span> {p.detail}
                    </td>
                    <td className="py-3 pr-6 text-muted">{p.source}</td>
                    <td className="py-3 text-muted whitespace-nowrap">{p.verifiedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="border-t border-line">
        <div className="container-x section grid gap-8 md:grid-cols-12">
          <h2 className="t-h2 text-ink md:col-span-5">A named person in Dubai, and a real reply.</h2>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-body md:col-span-6 md:col-start-7">
            <p>
              Decifer is based in Dubai, United Arab Emirates, and its UAE company
              registration is in progress. It serves clients in the UAE, the wider
              Gulf, Singapore and the United Kingdom. Client work is named on this
              site only with written permission; the reasons are in our{" "}
              <Link href="/legal/client-confidentiality" className="link">
                client confidentiality statement
              </Link>
              .
            </p>
            <p>
              Enquiries are read and answered by the founder within one working
              day. Write to{" "}
              <a href="mailto:hello@decifer.io" className="link">
                hello@decifer.io
              </a>{" "}
              or{" "}
              <Link href="/contact" className="link">
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
