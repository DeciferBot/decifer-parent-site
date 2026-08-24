import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import { capabilitiesOrdered } from "@/app/data/capabilities";
import { caseShapesByKey } from "@/app/data/caseShapes";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "The capability matrix: what we've proven, and where it transfers",
  description:
    "Five patterns pulled from Decifer's own engagements, each showing what was proven and, separately, which industries the same pattern would apply to. What's proven and what's our best guess, kept clearly apart.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/capabilities#page`,
    name: "Decifer capability matrix",
    url: `${SITE}/capabilities`,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <PageHero
        kicker="Capabilities"
        title="One capability. Every industry it fits."
        lede="Most of a job does not need AI at all. It is only used at the point that needs real judgement. These are the five places we've proven that works, with the industries the same idea would fit next shown separately."
      />

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="panel overflow-hidden">
            <div className="panel-head">
              <h2 className="label">Proven, versus where it transfers</h2>
              <Link href="/work" className="link text-sm">
                Read the engagements
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px] border-collapse text-left text-[0.9375rem]">
                <thead>
                  <tr>
                    <th className="label px-6 py-4 font-medium">Capability</th>
                    <th className="label px-6 py-4 font-medium">Proven in &mdash; real evidence</th>
                    <th className="label px-6 py-4 font-medium">Could apply to &mdash; not proven yet</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilitiesOrdered.map((c) => (
                    <tr key={c.key} className="border-t border-line align-top">
                      <td className="w-[26%] px-6 py-5">
                        <p className="font-semibold text-ink">{c.name}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.pattern}</p>
                      </td>
                      <td className="w-[37%] px-6 py-5">
                        <p className="text-body">{c.provenSummary}</p>
                        <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                          {c.provenIn.map((key) => {
                            const shape = caseShapesByKey[key];
                            if (!shape) return null;
                            return (
                              <Link key={key} href={`/work/${key}`} className="link text-sm">
                                {shape.sector}
                              </Link>
                            );
                          })}
                        </p>
                      </td>
                      <td className="w-[37%] px-6 py-5">
                        <p className="flex flex-wrap gap-1.5">
                          {c.transfersTo.map((t) => (
                            <span
                              key={t}
                              className="inline-block rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-body">{c.buyerAngle}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line px-6 py-4 text-sm text-muted">
              The middle column links to a real, anonymised engagement. The right column is our
              own judgement about where the same pattern would apply next &mdash; useful for
              deciding whether to call us, not a client list.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section">
          <SectionHead
            title="What this matrix is honest about."
            lede="The same rule that keeps numbers out of the model's hands applies to this page: a claim without a source does not ship."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="text-lg font-semibold text-ink">Proven at this scale. Bigger scale is the open question.</h3>
              <p className="t-body mt-2">
                Every engagement behind this matrix runs at the scale of a single business. The
                discipline transfers; whether it holds at enterprise scale is genuinely untested,
                so we say that plainly instead of implying otherwise. The audit below exists to
                test the pattern on your scale before either of us commits further.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="text-lg font-semibold text-ink">One capability can rule a job out.</h3>
              <p className="t-body mt-2">
                &ldquo;Deliberate non-automation&rdquo; is in this matrix because it has stopped us
                from building things. If your problem needs a licensed professional to sign off on
                every case, that capability is the one that says so honestly, before we oversell
                an agent into it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eventPrefix="capabilities"
        title="Tell us the job. We'll bring the pattern."
        body="A two-week audit at a fixed fee tells you which of these patterns fits, which doesn't, and what we would not automate yet. Credited in full against any build that follows."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
