import Link from "next/link";
import Icon, { type IconName } from "../Icon";
import MechanismDiagram from "../MechanismDiagram";
import { proofByKey } from "../../data/proof";

/**
 * The one doctrine block on the home page, on the orange surface: six
 * boundary principles that make a system dependable, and the mechanism they
 * add up to, drawn rather than described.
 *
 * The diagram sits on the ink panel inside the orange band. That inversion
 * is deliberate: the band is the argument, the panel is the architecture,
 * and a reader who only looks at pictures still leaves knowing the rule.
 */

const principles: { title: string; body: string; icon: IconName }[] = [
  {
    icon: "rule",
    title: "Calculations belong in code",
    body: "Prices, scores, metrics, validation and business rules are computed deterministically. A model is never responsible for arithmetic software can calculate exactly, and a test fails the build if a model writes a figure the code did not compute.",
  },
  {
    icon: "agent",
    title: "Models handle interpretation",
    body: "Language, classification, synthesis and reading documents, where the input cannot be reduced to a fixed rule. That is where a model earns its place.",
  },
  {
    icon: "handover",
    title: "People keep defined responsibility",
    body: "Higher-risk decisions have named owners. Approval, review and escalation are designed into the workflow, not left to users to remember.",
  },
  {
    icon: "boundary",
    title: "Uncertainty is visible",
    body: "A system should say when the available information is not sufficient. Confidence thresholds and exception paths are part of the design.",
  },
  {
    icon: "log",
    title: "Every important action is traceable",
    body: "Logs a team can read without an engineer: what the system received, what it did, what happened next.",
  },
  {
    icon: "record",
    title: "You can own what we build",
    body: "Systems deploy to your accounts and are handed over with documentation, tests and a runbook. Dependency on Decifer is a commercial choice, never a technical trap.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="band band-orange">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-ink/70">The rule we build by</p>
            <h2 className="t-h2 mt-4">Production systems need clear boundaries.</h2>
          </div>
          <p className="text-[1.0625rem] leading-relaxed lg:col-span-6 lg:col-start-7">
            Every part of a system gets a defined job, decided by one question:
            does this step need judgement, or does it need to be right? Where a
            plain check beats a model, we use the plain check. We have removed
            AI from our own working systems {proofByKey.deletedAi.value} times.
          </p>
        </div>

        <div className="mt-10 rounded-md bg-dark p-5 sm:p-7">
          <p className="label mb-5 text-on-dark-2">The same rule, as an architecture</p>
          <MechanismDiagram tone="dark" />
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-ink/30 pt-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-sm border border-ink/30 bg-ink/10 text-ink">
                  <Icon name={p.icon} size={18} />
                </span>
                <h3 className="text-[1.0625rem] font-semibold leading-snug">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-11">
          <Link href="/how-we-work" className="btn btn-on-orange">
            How we work, in full
          </Link>
        </p>
      </div>
    </section>
  );
}
