import Link from "next/link";
import SectionLabel from "../SectionLabel";

const EXAMPLES = [
  {
    title: "A validator that refuses invented numbers",
    desc: "In our reporting product, every figure in a sentence the model writes must already exist in the set the code computed. If not, the sentence is thrown away and a plain template is used instead.",
  },
  {
    title: "A maths engine that owns the answer",
    desc: "In our learning product, algebra is checked by a symbolic solver and grammar by a grammar engine. The model writes the question. It never gets to decide what is correct.",
  },
  {
    title: "A schema with nowhere to put a passport number",
    desc: "When a model reads a travel document for a guest, the output format has no field for an ID number. It cannot write down what it has no place to write.",
  },
];

export default function DoctrineSection() {
  return (
    <section id="doctrine" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 hero-beam opacity-40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>The rule we build by</SectionLabel>
          <blockquote className="font-display text-3xl leading-snug text-ink sm:text-4xl">
            Code computes the numbers. The model only narrates or extracts.
            <span className="text-cta"> The boundary is enforced by a test.</span>
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-body">
            That is what &ldquo;understanding, not noise&rdquo; means when it is
            written in software. A model may write the sentence around a
            figure, or pull a fact out of a document. It never decides the
            figure, and a test fails the build if it tries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXAMPLES.map((e, i) => (
            <div
              key={e.title}
              className={`card-lift rounded-2xl border border-line-strong bg-canvas/60 p-7 scroll-reveal-${i + 1}`}
            >
              <h3 className="mb-3 text-base font-semibold text-ink">{e.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{e.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Sometimes the right move is to take the AI out. We have done it five
          times in our own systems.{" "}
          <Link href="/about" className="text-cta hover:underline">
            Read how we work
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
