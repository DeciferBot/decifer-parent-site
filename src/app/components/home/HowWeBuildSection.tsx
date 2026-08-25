import Link from "next/link";
import Icon, { type IconName } from "../Icon";
import MechanismDiagram from "../MechanismDiagram";
import { proofByKey } from "../../data/proof";

/**
 * The one doctrine block on the home page, on the orange surface: six
 * boundary principles that make a system dependable, and the mechanism they
 * add up to, drawn rather than described.
 *
 * Each principle is titled by what the buyer gets, not by the engineering
 * rule that produces it (rewritten 2026-08-25). "Calculations belong in
 * code" is a sentence for a developer; "numbers your customers see cannot
 * be invented" is the same rule and is the reason a finance director keeps
 * reading. The mechanism stays in the body, one clause at most.
 *
 * The diagram sits on the ink panel inside the orange band. That inversion
 * is deliberate: the band is the argument, the panel is the architecture,
 * and a reader who only looks at pictures still leaves knowing the rule.
 */

const principles: { title: string; body: string; icon: IconName }[] = [
  {
    icon: "rule",
    title: "Numbers your customers see cannot be invented",
    body: "Prices, scores, totals and business rules are calculated by ordinary software, the way your finance system calculates them. A model never decides a figure, and the system refuses to publish one the code did not produce.",
  },
  {
    icon: "agent",
    title: "AI does the reading and writing, not the arithmetic",
    body: "Reading documents, sorting enquiries, summarising, drafting the reply: work where the input is messy and no fixed rule would cope. That is where a model earns its cost, and it is a smaller part of most jobs than vendors suggest.",
  },
  {
    icon: "handover",
    title: "Anything expensive has a named person on it",
    body: "Approval, review and escalation are built into the workflow, so a higher-risk decision reaches the person who owns it. Nobody has to remember to check.",
  },
  {
    icon: "boundary",
    title: "The system says when it does not know",
    body: "When the information is missing or contradictory, the case goes to a person, with the gap named. Nobody spends a morning unpicking a confident answer that was wrong.",
  },
  {
    icon: "log",
    title: "Your team can see what happened, without calling us",
    body: "A plain record of what came in, what the system did and what followed. Written to be read by the people who run the process, not by a developer.",
  },
  {
    icon: "record",
    title: "You own it, and you can leave",
    body: "Everything runs on your accounts and transfers to you with documentation, tests and a runbook. Staying with us is a decision you make each year, not a position you are stuck in.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="band band-orange">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-ink/70">The rule we build by</p>
            <h2 className="t-h2 mt-4">
              What makes a system safe to run the business on.
            </h2>
          </div>
          <p className="text-[1.0625rem] leading-relaxed lg:col-span-6 lg:col-start-7">
            Every part of a system gets a defined job, decided by one question:
            does this step need judgement, or does it need to be right? Where
            plain code does the job, we use plain code: it costs less to run
            every month and it cannot invent anything. We have made that swap
            in our own systems {proofByKey.deletedAi.value} times.
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
