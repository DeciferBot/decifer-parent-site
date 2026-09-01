import Link from "next/link";
import { proofByKey } from "../../data/proof";

/**
 * The doctrine block, rendered on /how-we-work. The three examples are real
 * mechanisms from our own systems.
 *
 * Each is titled by what it means for the reader's business, not by the
 * component that does it (rewritten 2026-08-25). "A validator that refuses
 * invented numbers" describes our code; "a price a customer sees is one the
 * system worked out" describes their risk. The mechanism follows in the
 * body, where it is evidence rather than the headline.
 */

const examples = [
  {
    title: "Every price a customer sees is one the system worked out",
    body: "A figure can only appear in a sentence if the code calculated it first. If it did not, the sentence never leaves the building, and a plain template goes out instead.",
  },
  {
    title: "A child's homework is marked by arithmetic, not by opinion",
    body: "In our learning product, maths is settled by a solver and grammar by a grammar engine. The model sets the question and explains the answer. It never decides who is right.",
  },
  {
    title: "A passport number the system has no way to keep",
    body: "When a model reads a guest's travel document, there is nowhere in the record to write an ID number. It cannot store what it has no place to store, so the exposure does not exist.",
  },
];

export default function RuleSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="rounded-md bg-orange-band px-8 py-12 text-white sm:px-10 sm:py-14">
          <h2 className="t-h2 max-w-3xl">
            Code works out the numbers. AI writes the words. Nothing goes out
            with a figure the system did not calculate.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed">
            That is the standard we hold every system to, ours and yours. A
            model may write the words around a figure, or pull a fact out of a
            document. It never decides the figure, and the build stops if it
            tries. Where plain code does the job, we use plain code: it costs
            less to run and cannot invent anything. We have made that swap in
            our own systems {proofByKey.deletedAi.value} times.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {examples.map((e) => (
              <div key={e.title} className="border-t border-white/30 pt-4">
                <h3 className="text-[1.0625rem] font-semibold leading-snug">{e.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/work" className="font-semibold underline underline-offset-4">
              See it in the work
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
