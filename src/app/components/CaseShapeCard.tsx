import Link from "next/link";
import Arrow from "./Arrow";
import type { CaseShape } from "../data/caseShapes";
import { servicesByKey } from "../data/services";

/**
 * One anonymised case as a row inside a panel. The first outcome line is
 * shown so the list reads as results, not titles.
 */
export default function CaseRow({ shape: c }: { shape: CaseShape }) {
  return (
    <li>
      <Link
        href={`/work/${c.key}`}
        className="row-link group grid gap-3 px-6 py-7 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-ink">{c.sector}</p>
          <p className="mt-1 text-sm text-muted">{c.region}</p>
        </div>
        <div className="md:col-span-6">
          <h3 className="t-h3 text-ink">{c.title}</h3>
          <p className="t-body measure mt-2">{c.clientShape}.</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink">
            <span className="font-semibold">Result: </span>
            {c.outcome[0]}.
          </p>
        </div>
        <div className="md:col-span-3 md:text-right">
          {c.serviceKeys.map((k) => (
            <p key={k} className="text-sm text-muted">
              {servicesByKey[k].name}
            </p>
          ))}
          <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-orange-text md:justify-end">
            Read the case
            <Arrow className="row-arrow" size={15} />
          </p>
        </div>
      </Link>
    </li>
  );
}
