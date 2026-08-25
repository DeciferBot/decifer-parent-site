/**
 * The icon set. One file, inline SVG, no dependency, no sprite request.
 *
 * Rules that keep a set looking like a set rather than a collection:
 *   - 24x24 box, 1.5 stroke, round caps and joins, no fills.
 *   - Drawn from the same vocabulary the site uses in words: a record, a
 *     rule, a boundary, a log. Nothing decorative, nothing metaphorical
 *     that a reader would have to decode.
 *   - `currentColor` throughout, so an icon takes the accent of whatever
 *     tile it sits in (see `.icon-tile` in globals.css).
 *
 * Industry icons are literal on purpose: a reader scanning the board should
 * recognise their own sector at a glance, before reading a word of it.
 */

export type IconName =
  // Industries, in caseShapes.ts order
  | "catering"
  | "group"
  | "events"
  | "health"
  | "creator"
  | "markets"
  | "education"
  | "property"
  // Services
  | "agent"
  | "data"
  | "product"
  | "advisory"
  // Method and doctrine
  | "record"
  | "rule"
  | "boundary"
  | "log"
  | "handover"
  | "measure";

const paths: Record<IconName, React.ReactNode> = {
  // A cloche: hospitality and catering.
  catering: (
    <>
      <path d="M3 17h18" />
      <path d="M4.5 17a7.5 7.5 0 0 1 15 0" />
      <path d="M12 6.5v-1" />
      <path d="M3 20h18" />
    </>
  ),
  // Nine squares under one bar: operating companies, one view.
  group: (
    <>
      <path d="M3 4h18" />
      <rect x="3" y="8" width="5" height="5" rx="1" />
      <rect x="9.5" y="8" width="5" height="5" rx="1" />
      <rect x="16" y="8" width="5" height="5" rx="1" />
      <rect x="3" y="15.5" width="5" height="5" rx="1" />
      <rect x="9.5" y="15.5" width="5" height="5" rx="1" />
      <rect x="16" y="15.5" width="5" height="5" rx="1" />
    </>
  ),
  // A dated schedule: events management.
  events: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M7.5 14h4M7.5 17.5h9" />
    </>
  ),
  // A pulse inside a shield: clinical care with a boundary around it.
  health: (
    <>
      <path d="M12 3l7.5 3v6c0 4.2-3 7.6-7.5 9-4.5-1.4-7.5-4.8-7.5-9V6z" />
      <path d="M7.5 12h2l1.5-3 2 6 1.5-3h2" />
    </>
  ),
  // A person and a broadcast arc: one person, an audience.
  creator: (
    <>
      <circle cx="10" cy="8" r="3.25" />
      <path d="M4 20a6 6 0 0 1 12 0" />
      <path d="M17.5 6.5a7 7 0 0 1 0 9" />
      <path d="M20.5 4a11 11 0 0 1 0 14" />
    </>
  ),
  // A read line over a scale: markets, measured.
  markets: (
    <>
      <path d="M3 20h18" />
      <path d="M4 15.5l4.5-5 3.5 3 7.5-8" />
      <path d="M15 5.5h4.5V10" />
    </>
  ),
  // A mortarboard: education.
  education: (
    <>
      <path d="M12 4L2.5 8.5 12 13l9.5-4.5z" />
      <path d="M6.5 10.75V16c0 1.4 2.5 2.75 5.5 2.75s5.5-1.35 5.5-2.75v-5.25" />
      <path d="M21.5 8.5v5" />
    </>
  ),
  // A door in a building: property.
  property: (
    <>
      <path d="M4 20V9.5L12 4l8 5.5V20" />
      <path d="M3 20h18" />
      <path d="M9.5 20v-6h5v6" />
    </>
  ),
  // A scoped worker: a box with one defined exit.
  agent: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8.5 10.5h.01M15.5 10.5h.01" />
      <path d="M9 14.5h6" />
      <path d="M12 6V3.5" />
    </>
  ),
  // Bars and a rule: figures computed, then reported.
  data: (
    <>
      <path d="M3 20h18" />
      <rect x="5" y="11" width="3.5" height="6" rx="0.75" />
      <rect x="10.25" y="7" width="3.5" height="10" rx="0.75" />
      <rect x="15.5" y="13.5" width="3.5" height="3.5" rx="0.75" />
      <path d="M3 4h9" />
    </>
  ),
  // A window with a live dot: a product that is actually running.
  product: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.25" cy="7" r="0.6" />
      <path d="M7.5 13.5h9" />
      <path d="M7.5 16h5.5" />
    </>
  ),
  // A map with a chosen route: what to fund, what to leave alone.
  advisory: (
    <>
      <path d="M9 4.5L3.5 6.75v13L9 17.5l6 2.25 5.5-2.25v-13L15 6.75z" />
      <path d="M9 4.5v13M15 6.75v13" />
    </>
  ),
  // Stacked documents becoming one record.
  record: (
    <>
      <path d="M7 4.5h7L18 8v9.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17.5V6a1.5 1.5 0 0 1 1-1.5z" />
      <path d="M13.5 4.5V8H18" />
      <path d="M9 12h6M9 15h4" />
    </>
  ),
  // An equals sign inside brackets: the arithmetic is the authority.
  rule: (
    <>
      <path d="M8 4.5H5.5A1.5 1.5 0 0 0 4 6v12a1.5 1.5 0 0 0 1.5 1.5H8" />
      <path d="M16 4.5h2.5A1.5 1.5 0 0 1 20 6v12a1.5 1.5 0 0 1-1.5 1.5H16" />
      <path d="M9 10.5h6M9 14h6" />
    </>
  ),
  // A line the system will not cross.
  boundary: (
    <>
      <path d="M12 3.5l7.5 3v5.75c0 4.1-3 7.4-7.5 8.75-4.5-1.35-7.5-4.65-7.5-8.75V6.5z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  // A readable log: lines with timestamps.
  log: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M7 9h3M12.5 9h4.5" />
      <path d="M7 12.5h3M12.5 12.5h4.5" />
      <path d="M7 16h3M12.5 16h2.5" />
    </>
  ),
  // Handed over: a key passed across.
  handover: (
    <>
      <circle cx="7.5" cy="12" r="3.5" />
      <path d="M11 12h9.5" />
      <path d="M17 12v3M20 12v2.5" />
    </>
  ),
  // Before and after, on the same axis.
  measure: (
    <>
      <path d="M3 20h18" />
      <path d="M6.5 20V13" />
      <path d="M17.5 20V5.5" />
      <path d="M6.5 9.5l11-4" />
      <circle cx="6.5" cy="10.5" r="1.25" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
