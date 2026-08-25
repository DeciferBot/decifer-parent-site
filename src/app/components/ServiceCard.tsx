import Link from "next/link";
import Arrow from "./Arrow";
import Icon from "./Icon";
import type { Service } from "../data/services";
import { accent } from "../data/accents";

/**
 * One service as a row inside a panel. The headline carries the outcome;
 * the left column names the service and its shape; the right column states
 * the commercial terms.
 *
 * The row leads with the service's own mark and hue (services.ts), which is
 * the same pair used on the service page, in the capability matrix and
 * anywhere else the service is named.
 */
export default function ServiceRow({ service: s }: { service: Service }) {
  return (
    <li>
      <Link
        href={`/services/${s.key}`}
        data-event={s.event}
        className="row-link group grid gap-3 px-6 py-7 md:grid-cols-12 md:gap-8"
        style={accent(s.hue)}
      >
        <div className="flex items-start gap-4 md:col-span-3">
          <span className="icon-tile">
            <Icon name={s.icon} />
          </span>
          <span>
            <p className="text-sm font-semibold text-ink">{s.name}</p>
            <p className="mt-1 text-sm text-muted">{s.engagementShort}</p>
          </span>
        </div>
        <div className="md:col-span-6">
          <h3 className="t-h3 text-ink">{s.cardHeadline}</h3>
          <p className="t-body measure mt-2">{s.summary}</p>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="text-sm font-semibold text-ink">{s.commercial}</p>
          <p className="mt-1 text-sm text-muted">{s.commercialSub}</p>
          <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-orange-text md:justify-end">
            Read the service
            <Arrow className="row-arrow" size={15} />
          </p>
        </div>
      </Link>
    </li>
  );
}
