import Link from "next/link";
import SectionLabel from "../SectionLabel";
import { stack } from "../../data/stack";

export default function StackSection() {
  const items = stack.slice().sort((a, b) => a.order - b.order);
  return (
    <section id="stack" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 text-center">
          <SectionLabel>Tools we build with</SectionLabel>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-body">
            These are the tools we build with, not partnerships. Every account
            is set up in your name, so what we build is yours to keep.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {items.map((t) => (
            <Link key={t.key} href="/stack" className="chip" title={t.role}>
              <span className="chip-dot" aria-hidden="true" />
              {t.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          <Link href="/stack" className="text-cta hover:underline">
            Why each one, and what you own
          </Link>
        </p>
      </div>
    </section>
  );
}
