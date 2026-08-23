import Link from "next/link";
import Arrow from "./Arrow";
import type { CaseShape } from "../data/caseShapes";

/**
 * One anonymised case as a ruled row. The first outcome line is shown so
 * the list reads as results, not titles.
 */
export default function CaseRow({ shape: c }: { shape: CaseShape }) {
  return (
    <li>
      <Link
        href={`/work/${c.key}`}
        className="row-link group -mx-4 grid gap-3 px-4 py-7 sm:py-8 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-ink">{c.sector}</p>
          <p className="mt-1 text-sm text-muted">{c.region}</p>
        </div>
        <div className="md:col-span-8">
          <h3 className="t-h3 text-ink">{c.title}</h3>
          <p className="t-body measure mt-2">{c.clientShape}.</p>
          <p className="mt-3 text-[0.9375rem] text-ink">
            <span className="font-semibold">After: </span>
            {c.outcome[0]}.
          </p>
        </div>
        <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
          <Arrow size={20} className="text-ink transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    </li>
  );
}
