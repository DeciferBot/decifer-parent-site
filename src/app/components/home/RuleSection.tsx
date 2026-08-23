import Link from "next/link";
import Arrow from "../Arrow";
import { proofByKey } from "../../data/proof";

/**
 * The rule we build by, on the orange surface. This is the one doctrine
 * section on the home page. The three examples are real mechanisms from
 * our own systems, each one checkable.
 */

const examples = [
  {
    title: "A validator that refuses invented numbers",
    body: "In our reporting product, every figure in a sentence the model writes must already exist in the set the code computed. If it does not, the sentence is thrown away and a template is used instead.",
  },
  {
    title: "A maths engine that owns the answer",
    body: "In our learning product, algebra is checked by a symbolic solver and grammar by a grammar engine. The model writes the question. It never decides what is correct.",
  },
  {
    title: "A schema with nowhere to put a passport number",
    body: "When a model reads a guest's travel document, the output format has no field for an ID number. It cannot write down what it has no place to write.",
  },
];

export default function RuleSection() {
  return (
    <section className="bg-orange text-ink">
      <div className="container-x section">
        <h2 className="t-h2 max-w-4xl">
          Code computes the numbers. The model writes the sentence. A test
          enforces the line.
        </h2>
        <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed">
          That is the whole method. A model may write the words around a
          figure, or pull a fact out of a document. It never decides the
          figure, and a test fails the build if it tries. Sometimes the right
          move is to take the AI out: we have done that{" "}
          {proofByKey.deletedAi.value} times in our own systems.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {examples.map((e) => (
            <div key={e.title} className="border-t border-ink/30 pt-5">
              <h3 className="text-lg font-semibold leading-snug">{e.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12">
          <Link href="/about" className="arrow-link text-ink">
            Read how we work
            <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}
