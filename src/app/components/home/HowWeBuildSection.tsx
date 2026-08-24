import Link from "next/link";
import { proofByKey } from "../../data/proof";

/**
 * The one doctrine block on the home page, on the orange surface: six
 * boundary principles that make a system dependable. Replaces the old
 * RuleSection on the homepage; RuleSection itself now lives on
 * /how-we-work with the worked examples.
 */

const principles = [
  {
    title: "Calculations belong in code",
    body: "Prices, scores, metrics, validation and business rules are computed deterministically. A model is never responsible for arithmetic software can calculate exactly, and a test fails the build if a model writes a figure the code did not compute.",
  },
  {
    title: "Models handle interpretation",
    body: "Language, classification, synthesis and reading documents, where the input cannot be reduced to a fixed rule. That is where a model earns its place.",
  },
  {
    title: "People keep defined responsibility",
    body: "Higher-risk decisions have named owners. Approval, review and escalation are designed into the workflow, not left to users to remember.",
  },
  {
    title: "Uncertainty is visible",
    body: "A system should say when the available information is not sufficient. Confidence thresholds and exception paths are part of the design.",
  },
  {
    title: "Every important action is traceable",
    body: "Logs a team can read without an engineer: what the system received, what it did, what happened next.",
  },
  {
    title: "You can own what we build",
    body: "Systems deploy to your accounts and are handed over with documentation, tests and a runbook. Dependency on Decifer is a commercial choice, never a technical trap.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="rounded-md bg-orange px-8 py-12 text-ink sm:px-10 sm:py-14">
          <h2 className="t-h2 max-w-3xl">
            Production systems need clear boundaries.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed">
            Every part of a system gets a defined job, decided by one question:
            does this step need judgement, or does it need to be right? Where a
            plain check beats a model, we use the plain check. We have removed
            AI from our own working systems {proofByKey.deletedAi.value} times.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-ink/30 pt-4">
                <h3 className="text-[1.0625rem] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/how-we-work" className="font-semibold underline underline-offset-4">
              How we work, in full
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
