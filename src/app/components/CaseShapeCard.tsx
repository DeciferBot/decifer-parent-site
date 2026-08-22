import Link from "next/link";
import type { CaseShape } from "../data/caseShapes";

export default function CaseShapeCard({
  shape: c,
  scrollClass = "",
}: {
  shape: CaseShape;
  scrollClass?: string;
}) {
  return (
    <Link
      href={`/work/${c.key}`}
      className={`card-lift group flex flex-col rounded-2xl border border-line-strong bg-surface p-8 ${scrollClass}`}
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {c.sector} <span className="opacity-60">/</span> {c.region}
      </p>
      <h3 className="mb-3 text-balance text-xl font-bold leading-snug text-ink">
        {c.title}
      </h3>
      <p className="mb-6 text-[15px] leading-relaxed text-body">{c.clientShape}.</p>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cta">
        Read the shape of the work
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}
