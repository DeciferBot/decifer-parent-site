import Icon, { type IconName } from "../Icon";
import { accentAt } from "../../data/accents";
import type { AccentHue } from "../../data/accents";

/**
 * The six-step responsibility arc. Numbered because it is a real ordered
 * sequence (the numbered-marker rule allows exactly this case), and drawn
 * as a path rather than a list: each step carries its own mark, and the
 * connecting rule down the left is what makes it read as one route from
 * business case to measured result.
 */

const steps: {
  n: string;
  title: string;
  body: string;
  icon: IconName;
  hue: AccentHue;
}[] = [
  {
    n: "01",
    icon: "measure",
    hue: "amber",
    title: "Find the value",
    body: "We examine the work as it runs today: where time disappears, where people re-key information between systems, and which processes get more expensive as volume grows. We cost the opportunity before choosing any technology. Output: a business case, a current-state baseline, prioritised use cases, and the order to build them in.",
  },
  {
    n: "02",
    icon: "record",
    hue: "plum",
    title: "Redesign the workflow",
    body: "AI changes what software can handle, which usually means the process itself should change. We decide which steps need conventional code, which benefit from a model, which need human judgement, and where approval and escalation belong. Exceptions are designed here, not discovered later.",
  },
  {
    n: "03",
    icon: "agent",
    hue: "orange",
    title: "Build the system",
    body: "Agents, document intelligence, workflow automation, decision and reporting systems, internal applications, data pipelines and integrations. The architecture follows the requirement, and anything that must be right runs as tested, deterministic code.",
  },
  {
    n: "04",
    icon: "handover",
    hue: "violet",
    title: "Connect the business",
    body: "Useful systems work with what already exists: the CRM, email, documents, databases and third-party APIs. We wire the workflow to the information and actions it needs, with access controls and an audit trail.",
  },
  {
    n: "05",
    icon: "log",
    hue: "blue",
    title: "Put it into operation",
    body: "Production raises questions a demo never meets: who has access, what happens when information is missing, how a wrong action is reversed, who receives an exception, and who owns the system internally. We resolve them before the system becomes part of daily work, and we train the people whose work changes.",
  },
  {
    n: "06",
    icon: "data",
    hue: "teal",
    title: "Measure the result",
    body: "The implementation is scored against the baseline from step one: processing time, employee hours, response time, cost, error rate, capacity or conversion, whichever the business case named. The business should be able to see what changed.",
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="band band-tint">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="label">One team, business case to production</h2>
            <p className="t-h2 mt-4 text-ink">Six steps, one owner.</p>
          </div>
          <p className="t-lede lg:col-span-6 lg:col-start-7">
            This path is usually split between a consultancy, a development
            shop and an internal IT team, and the seams between them are where
            projects die. Decifer carries all six.
          </p>
        </div>

        <ol className="path mt-10">
          {steps.map((s, i) => (
            <li key={s.n} className="path-step" style={accentAt(s.hue, i)}>
              <span className="path-mark">
                <Icon name={s.icon} size={18} />
              </span>
              <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <p className="t-mono text-xs text-muted">{s.n}</p>
                  <h3 className="t-h3 mt-1 text-ink">{s.title}</h3>
                </div>
                <p className="t-body md:col-span-8">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
