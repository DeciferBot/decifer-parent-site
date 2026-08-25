import Link from "next/link";
import Reveal from "../Reveal";
import Arrow from "../Arrow";
import Icon, { type IconName } from "../Icon";
import type { AccentHue } from "../../data/accents";
import { accentAt } from "../../data/accents";

/**
 * The six failure points every Decifer engagement is structured against,
 * each shown with the thing we do instead. The diagnosis alone reads as a
 * list of reasons AI disappoints; paired with the fix it reads as method,
 * which is what the reader is here to buy.
 * Source thinking: docs/REPOSITIONING_2026-08-24.md.
 */

const points: {
  title: string;
  body: string;
  /** What we do instead. Shown under the body, in the same tile. */
  fix: string;
  icon: IconName;
  hue: AccentHue;
}[] = [
  {
    title: "The business case is weak",
    icon: "measure",
    hue: "amber",
    body: "The pilot was chosen because the technology looked capable, not because anyone costed the process it replaces. When budgets are reviewed, there is no evidence to defend the spend.",
    fix: "We cost the process before any technology is chosen, so the spend can be defended at a budget review.",
  },
  {
    title: "The old process was carried forward",
    icon: "record",
    hue: "plum",
    body: "The workflow was designed around people, email and spreadsheets, and a model was bolted on top. The organisation gains another tool while the old work remains.",
    fix: "We redesign the workflow first, then automate the version worth keeping.",
  },
  {
    title: "Data and integration arrived late",
    icon: "handover",
    hue: "violet",
    body: "The demo ran on controlled inputs. Production needs the CRM, the inbox, the documents, the permissions and the history, and that is where scope and cost change.",
    fix: "The real systems go in early: the CRM, the inbox, the documents, the permissions and the history.",
  },
  {
    title: "Exceptions were never designed",
    icon: "boundary",
    hue: "blue",
    body: "Real processes contain missing information and unusual cases. Nobody decided what the system handles, what a person reviews, and how a failed action is recovered.",
    fix: "The exception path is designed with you: what the system handles, what a person reviews, and how a failed action is recovered.",
  },
  {
    title: "Nobody could trust the output",
    icon: "rule",
    hue: "orange",
    body: "One invented figure in front of a customer, and the team quietly goes back to the old way.",
    fix: "Figures are computed in code, and a test fails the build if a model writes a number the code did not compute.",
  },
  {
    title: "Nobody took a baseline",
    icon: "data",
    hue: "teal",
    body: "Time saved, cost reduced and response time all need a starting point. Without one, ROI becomes an opinion, and the project dies at budget time.",
    fix: "The baseline is the first deliverable, so the result can be measured against it later.",
  },
];

export default function StallSection() {
  return (
    <section className="band">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="label">What separates the projects that ship</h2>
            <p className="t-h2 mt-4 text-ink">Six failure points, and what we do about each.</p>
          </div>
          <p className="t-lede lg:col-span-6 lg:col-start-7">
            None of these are model problems, so a better model does not fix
            them. Every Decifer engagement is structured against this list,
            starting with the baseline.
          </p>
        </div>
        <Reveal className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="accent-cap bg-panel px-6 py-7"
              style={accentAt(p.hue, i)}
            >
              <span className="icon-tile">
                <Icon name={p.icon} />
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="t-body mt-2.5 text-[0.9375rem]">{p.body}</p>
              <p className="mt-3 border-t border-line pt-3 text-[0.9375rem] leading-relaxed text-ink">
                {p.fix}
              </p>
            </div>
          ))}
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/how-we-work" data-event="stall_how_we_work" className="btn btn-secondary px-4 py-2.5 text-sm">
            See the method
            <Arrow className="row-arrow" size={15} />
          </Link>
          <Link href="/contact" data-event="stall_contact" className="link text-sm">
            Or bring us the process
          </Link>
        </div>
      </div>
    </section>
  );
}
