import Link from "next/link";
import { proofByKey } from "../../data/proof";

/**
 * The one doctrine block on the home page, on the orange surface. The three
 * examples are real mechanisms from our own systems.
 */

const examples = [
  {
    title: "A validator that refuses invented numbers",
    body: "Every figure in a sentence the model writes must already exist in the set the code computed. If it does not, the sentence is discarded and a template is used instead.",
  },
  {
    title: "A maths engine that owns the answer",
    body: "Algebra is checked by a symbolic solver and grammar by a grammar engine. The model writes the question. It never decides what is correct.",
  },
  {
    title: "A schema with nowhere to put a passport number",
    body: "When a model reads a guest's travel document, the output format has no field for an ID number. It cannot record what it has no place to record.",
  },
];

export default function RuleSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="rounded-md bg-orange px-8 py-12 text-ink sm:px-10 sm:py-14">
          <h2 className="t-h2 max-w-3xl">
            Code computes the numbers. The model writes the sentence. A test
            enforces the line.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed">
            That is the standard we hold every system to, ours and yours. A
            model may write the words around a figure or pull a fact from a
            document. It never decides the figure, and a test fails the build
            if it tries. Where a plain check beats a model, we use the plain
            check: we have removed AI from our own working systems{" "}
            {proofByKey.deletedAi.value} times.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {examples.map((e) => (
              <div key={e.title} className="border-t border-ink/30 pt-4">
                <h3 className="text-[1.0625rem] font-semibold leading-snug">{e.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/about" className="font-semibold underline underline-offset-4">
              Read how we work
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
