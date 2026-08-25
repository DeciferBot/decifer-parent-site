import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";
import type { AccentHue } from "../../data/accents";
import { accentAt } from "../../data/accents";

/**
 * Why AI projects stall: the six failure points every Decifer engagement is
 * structured against. Source thinking: docs/REPOSITIONING_2026-08-24.md.
 */

const points: {
  title: string;
  body: string;
  icon: IconName;
  hue: AccentHue;
}[] = [
  {
    title: "The business case is weak",
    icon: "measure",
    hue: "amber",
    body: "The pilot was chosen because the technology looked capable, not because anyone costed the process it replaces. When budgets are reviewed, there is no evidence to defend the spend.",
  },
  {
    title: "The old process was carried forward",
    icon: "record",
    hue: "plum",
    body: "The workflow was designed around people, email and spreadsheets, and a model was bolted on top. The organisation gains another tool while the old work remains.",
  },
  {
    title: "Data and integration arrived late",
    icon: "handover",
    hue: "violet",
    body: "The demo ran on controlled inputs. Production needs the CRM, the inbox, the documents, the permissions and the history, and that is where scope and cost change.",
  },
  {
    title: "Exceptions were never designed",
    icon: "boundary",
    hue: "blue",
    body: "Real processes contain missing information and unusual cases. Nobody decided what the system handles, what a person reviews, and how a failed action is recovered.",
  },
  {
    title: "Nobody could trust the output",
    icon: "rule",
    hue: "orange",
    body: "One invented figure in front of a customer, and the team quietly goes back to the old way.",
  },
  {
    title: "Nobody took a baseline",
    icon: "data",
    hue: "teal",
    body: "Time saved, cost reduced and response time all need a starting point. Without one, ROI becomes an opinion, and the project dies at budget time.",
  },
];

export default function StallSection() {
  return (
    <section className="band">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="label">Where the value leaks out</h2>
            <p className="t-h2 mt-4 text-ink">Six ways AI projects stall.</p>
          </div>
          <p className="t-lede lg:col-span-6 lg:col-start-7">
            None of these are model problems, which is why buying a better
            model does not fix them. Every Decifer engagement is structured
            against this list, starting with the baseline.
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
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
