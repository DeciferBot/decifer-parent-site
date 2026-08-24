/**
 * Why AI projects stall: the six failure points every Decifer engagement is
 * structured against. Source thinking: docs/REPOSITIONING_2026-08-24.md.
 */

const points = [
  {
    title: "The business case is weak",
    body: "The pilot was chosen because the technology looked capable, not because anyone costed the process it replaces. When budgets are reviewed, there is no evidence to defend the spend.",
  },
  {
    title: "The old process was carried forward",
    body: "The workflow was designed around people, email and spreadsheets, and a model was bolted on top. The organisation gains another tool while the old work remains.",
  },
  {
    title: "Data and integration arrived late",
    body: "The demo ran on controlled inputs. Production needs the CRM, the inbox, the documents, the permissions and the history, and that is where scope and cost change.",
  },
  {
    title: "Exceptions were never designed",
    body: "Real processes contain missing information and unusual cases. Nobody decided what the system handles, what a person reviews, and how a failed action is recovered.",
  },
  {
    title: "Nobody could trust the output",
    body: "One invented figure in front of a customer, and the team quietly goes back to the old way.",
  },
  {
    title: "Nobody took a baseline",
    body: "Time saved, cost reduced and response time all need a starting point. Without one, ROI becomes an opinion, and the project dies at budget time.",
  },
];

export default function StallSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Where the value leaks out</h2>
            <span className="text-sm text-muted">Six ways AI projects stall</span>
          </div>
          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="bg-canvas px-6 py-7">
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="t-body mt-2.5">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="border-t border-line px-6 py-4 text-sm text-body">
            Every Decifer engagement is structured against this list, starting
            with the baseline.
          </p>
        </div>
      </div>
    </section>
  );
}
