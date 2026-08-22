import Link from "next/link";
import SectionLabel from "../SectionLabel";
import CaseShapeCard from "../CaseShapeCard";
import { publishedCaseShapes } from "../../data/caseShapes";

export default function CaseShapesSection() {
  const shapes = publishedCaseShapes.slice(0, 4);
  return (
    <section id="work" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>Work</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Described by shape, never by name.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            Our clients are not named here, by policy. Each case states what
            we built, what changed, how it is measured, and what we chose not
            to automate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {shapes.map((c, i) => (
            <CaseShapeCard key={c.key} shape={c} scrollClass={`scroll-reveal-${(i % 2) + 1}`} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/work" className="text-cta hover:underline">
            All work
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <Link href="/legal/client-confidentiality" className="text-body hover:text-ink hover:underline">
            Why we do not name clients
          </Link>
        </p>
      </div>
    </section>
  );
}
