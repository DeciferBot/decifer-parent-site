import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import RuleSection from "@/app/components/home/RuleSection";
import StackSection from "@/app/components/home/StackSection";
import CompareSection from "@/app/components/home/CompareSection";
import Icon, { type IconName } from "@/app/components/Icon";
import MechanismDiagram from "@/app/components/MechanismDiagram";
import { capabilitiesOrdered } from "@/app/data/capabilities";
import { caseShapesByKey } from "@/app/data/caseShapes";
import type { AccentHue } from "@/app/data/accents";
import { accent, accentAt } from "@/app/data/accents";
import { jsonLd, SITE } from "@/lib/jsonld";

/**
 * How we work: the method page. Absorbs the old /capabilities (matrix) and
 * /stack (ownership) pages, which now 301 here. One page an evaluator can
 * forward internally.
 */

export const metadata: Metadata = {
  title: "How we work: AI implementation from assessment to measured result",
  description:
    "Decifer's implementation method: the process costed before any build, code for anything that has to be right, AI only where judgement helps, no figure published that the system did not calculate, and you own it at handover.",
  alternates: { canonical: "/how-we-work" },
};

/** One mark per delivery stage, in the same order as `stages`. */
const STAGE_MARKS: { icon: IconName; hue: AccentHue }[] = [
  { icon: "record", hue: "amber" },
  { icon: "measure", hue: "amber" },
  { icon: "rule", hue: "plum" },
  { icon: "agent", hue: "orange" },
  { icon: "boundary", hue: "orange" },
  { icon: "handover", hue: "violet" },
  { icon: "creator", hue: "violet" },
  { icon: "data", hue: "teal" },
  { icon: "log", hue: "teal" },
];

const stages = [
  { n: "01", title: "Discover", body: "Understand the process, the people, the systems and the economics." },
  { n: "02", title: "Baseline", body: "Establish how the process performs today, in numbers that can be re-read later the same way." },
  { n: "03", title: "Design", body: "Redesign the workflow and define the role of software, models and people, including exceptions and escalation." },
  { n: "04", title: "Build", body: "Build the system and connect it to the tools you already run. Anything that has to be right is calculated by tested code." },
  { n: "05", title: "Validate", body: "Test accuracy, exceptions, permissions, failure cases and operating cost before anyone depends on it." },
  { n: "06", title: "Deploy", body: "Move into production with monitoring, logs and clear internal ownership." },
  { n: "07", title: "Adopt", body: "Train the people whose work changes, and adjust the workflow around actual use." },
  { n: "08", title: "Measure", body: "Compare the operating result with the baseline from stage two." },
  { n: "09", title: "Improve", body: "Use real production behaviour to improve the system over time." },
];

export default function HowWeWorkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/how-we-work#page`,
    name: "How Decifer works",
    url: `${SITE}/how-we-work`,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <PageHero
        kicker="How we work"
        icon="rule"
        hue="teal"
        title="A practical route from opportunity to production."
        lede="Every step of a process gets one question: does this need judgement, or does it need to be right? Code handles what must be right. AI handles what needs judgement. The system will not publish a figure it did not calculate, and because we cost the process before building, you can check afterwards what the work was worth."
      />

      <section className="band band-tight band-tint">
        <div className="container-x">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="label">The delivery sequence</h2>
            <span className="text-sm text-muted">Nine stages, one accountable path</span>
          </div>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((s, i) => (
              <li
                key={s.n}
                className="accent-cap bg-panel px-6 py-6"
                style={accentAt(STAGE_MARKS[i].hue, i)}
              >
                <div className="flex items-center gap-3">
                  <span className="icon-tile icon-tile-sm">
                    <Icon name={STAGE_MARKS[i].icon} size={16} />
                  </span>
                  <span className="t-mono text-xs text-muted">{s.n}</span>
                </div>
                <p className="mt-3 text-[1.0625rem] font-semibold leading-snug text-ink">
                  {s.title}
                </p>
                <p className="t-body mt-2 text-[0.9375rem]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-tight">
        <div className="container-x">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="label">The rule, as an architecture</h2>
            <span className="text-sm text-muted">
              Four stages, and the check that holds the line
            </span>
          </div>
          <div className="mt-6">
            <MechanismDiagram />
          </div>
          <p className="t-body mt-6 text-[0.9375rem]">
            That is the rule inside one step. For the whole system around it,
            two diagrams show where an AI layer sits in the technology you
            already run, and how one request moves through it:{" "}
            <Link href="/how-ai-works" className="link">
              how AI works, in two diagrams
            </Link>
            .
          </p>
        </div>
      </section>

      <RuleSection />

      <section className="pb-7 sm:pb-10">
        <div className="container-x">
          <div className="panel overflow-hidden">
            <div className="panel-head">
              <h2 className="label">The capability matrix: proven, versus where it transfers</h2>
              <Link href="/work" className="link text-sm">
                Read the engagements
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px] border-collapse text-left text-[0.9375rem]">
                <thead>
                  <tr>
                    <th className="label px-6 py-4 font-medium">Capability</th>
                    <th className="label px-6 py-4 font-medium">Proven in: real evidence</th>
                    <th className="label px-6 py-4 font-medium">Could apply to: not proven yet</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilitiesOrdered.map((c) => (
                    <tr
                      key={c.key}
                      className="border-t border-line align-top"
                      style={accent(c.hue)}
                    >
                      <td className="w-[26%] px-6 py-5">
                        <span className="icon-tile icon-tile-sm mb-3">
                          <Icon name={c.icon} size={16} />
                        </span>
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
              The middle column links to a real engagement, named where the
              client agreed in writing. The
              right column is our own judgement about where the same pattern
              would apply next. Every engagement behind this matrix runs at the
              scale of a single business. The assessment tests the pattern at
              your scale first: two weeks, fixed fee, credited in full against
              the build.
            </p>
          </div>
        </div>
      </section>

      <StackSection />
      <CompareSection />

      <CtaBand
        eventPrefix="how_we_work"
        title="Tell us the process. We'll bring the method."
        body="A two-week assessment at a fixed fee. It costs the process, ranks the opportunities and names the one to start with. The fee is credited in full against any build that follows."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
