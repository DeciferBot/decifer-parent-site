import Link from "next/link";
import type { Service } from "../data/services";

/**
 * One service as a row inside a panel. The headline carries the outcome;
 * the left column names the service and its shape; the right column states
 * the commercial terms.
 */
export default function ServiceRow({ service: s }: { service: Service }) {
  return (
    <li>
      <Link
        href={`/services/${s.key}`}
        data-event={s.event}
        className="row-link group grid gap-3 px-6 py-7 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-ink">{s.name}</p>
          <p className="mt-1 text-sm text-muted">{s.engagementShort}</p>
        </div>
        <div className="md:col-span-6">
          <h3 className="t-h3 text-ink">{s.cardHeadline}</h3>
          <p className="t-body measure mt-2">{s.summary}</p>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="text-sm font-semibold text-ink">{s.commercial}</p>
          <p className="mt-1 text-sm text-muted">{s.commercialSub}</p>
        </div>
      </Link>
    </li>
  );
}
