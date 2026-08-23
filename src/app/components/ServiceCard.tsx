import Link from "next/link";
import Arrow from "./Arrow";
import type { Service } from "../data/services";

/**
 * One service as a ruled row. Headline carries the outcome; the service
 * name and engagement shape sit in the left column so the four rows scan as
 * a table, not a card grid.
 */
export default function ServiceRow({ service: s }: { service: Service }) {
  return (
    <li>
      <Link
        href={`/services/${s.key}`}
        data-event={s.event}
        className="row-link group -mx-4 grid gap-3 px-4 py-7 sm:py-8 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-ink">{s.name}</p>
          <p className="mt-1 text-sm text-muted">{s.engagementShort}</p>
        </div>
        <div className="md:col-span-8">
          <h3 className="t-h3 text-ink">{s.cardHeadline}</h3>
          <p className="t-body measure mt-2">{s.summary}</p>
        </div>
        <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
          <Arrow size={20} className="text-ink transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    </li>
  );
}
