import Link from "next/link";
import Reveal from "../Reveal";

/**
 * The six failure points every Decifer engagement is structured against,
 * each shown with the thing we do instead. The diagnosis alone reads as a
 * list of reasons AI disappoints; paired with the fix it reads as method,
 * which is what the reader is here to buy.
 * Source thinking: docs/REPOSITIONING_2026-08-24.md.
 */

const points = [
  {
    title: "The business case is weak",
    body: "The pilot was chosen because the technology looked capable, not because anyone costed the process it replaces. When budgets are reviewed, there is no evidence to defend the spend.",
    fix: "We cost the process before any technology is chosen, so the spend can be defended at a budget review.",
  },
  {
    title: "The old process was carried forward",
    body: "The workflow was designed around people, email and spreadsheets, and a model was bolted on top. The organisation gains another tool while the old work remains.",
    fix: "We redesign the workflow first, then automate the version worth keeping.",
  },
  {
    title: "Data and integration arrived late",
    body: "The demo ran on controlled inputs. Production needs the CRM, the inbox, the documents, the permissions and the history, and that is where scope and cost change.",
    fix: "The real systems go in early: the CRM, the inbox, the documents, the permissions and the history.",
  },
  {
    title: "Exceptions were never designed",
    body: "Real processes contain missing information and unusual cases. Nobody decided what the system handles, what a person reviews, and how a failed action is recovered.",
    fix: "The exception path is designed with you: what the system handles, what a person reviews, and how a failed action is recovered.",
  },
  {
    title: "Nobody could trust the output",
    body: "One invented figure in front of a customer, and the team quietly goes back to the old way.",
    fix: "Figures are computed in code, and a test fails the build if a model writes a number the code did not compute.",
  },
  {
    title: "Nobody took a baseline",
    body: "Time saved, cost reduced and response time all need a starting point. Without one, ROI becomes an opinion, and the project dies at budget time.",
    fix: "The baseline is the first deliverable, so the result can be measured against it later.",
  },
];

export default function StallSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What separates the projects that ship</h2>
            <span className="text-sm text-muted">Six failure points, and what we do about each</span>
          </div>
          <Reveal className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {points.map((p, i) => (
              <div
                key={p.title}
                className="bg-canvas px-6 py-7"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="t-body mt-2.5">{p.body}</p>
                <p className="mt-3 border-t border-line pt-3 text-[0.9375rem] leading-relaxed text-ink">
                  {p.fix}
                </p>
              </div>
            ))}
          </Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              Every engagement is structured against this list, starting with the baseline.
            </p>
            <Link href="/how-we-work" data-event="stall_how_we_work" className="btn btn-secondary px-4 py-2.5 text-sm">
              See the method
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
