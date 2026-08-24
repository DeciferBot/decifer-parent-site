/**
 * The six-step responsibility arc. Numbered because it is a real ordered
 * sequence (the numbered-marker rule allows exactly this case).
 */

const steps = [
  {
    n: "01",
    title: "Find the value",
    body: "We examine the work as it runs today: where time disappears, where people re-key information between systems, and which processes get more expensive as volume grows. We cost the opportunity before choosing any technology. Output: a business case, a current-state baseline, prioritised use cases, and what not to automate yet.",
  },
  {
    n: "02",
    title: "Redesign the workflow",
    body: "AI changes what software can handle, which usually means the process itself should change. We decide which steps need conventional code, which benefit from a model, which need human judgement, and where approval and escalation belong. Exceptions are designed here, not discovered later.",
  },
  {
    n: "03",
    title: "Build the system",
    body: "Agents, document intelligence, workflow automation, decision and reporting systems, internal applications, data pipelines and integrations. The architecture follows the requirement, and anything that must be right runs as tested, deterministic code.",
  },
  {
    n: "04",
    title: "Connect the business",
    body: "Useful systems work with what already exists: the CRM, email, documents, databases and third-party APIs. We wire the workflow to the information and actions it needs, with access controls and an audit trail.",
  },
  {
    n: "05",
    title: "Put it into operation",
    body: "Production raises questions a demo never meets: who has access, what happens when information is missing, how a wrong action is reversed, who receives an exception, and who owns the system internally. We resolve them before the system becomes part of daily work, and we train the people whose work changes.",
  },
  {
    n: "06",
    title: "Measure the result",
    body: "The implementation is scored against the baseline from step one: processing time, employee hours, response time, cost, error rate, capacity or conversion, whichever the business case named. The business should be able to see what changed.",
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">One team from business case to production</h2>
            <span className="text-sm text-muted">
              Usually split across four vendors. Carried here as one path.
            </span>
          </div>
          <ol className="divide-y divide-line">
            {steps.map((s) => (
              <li key={s.n} className="grid gap-3 px-6 py-6 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="t-mono text-sm text-muted">{s.n}</span>
                  <h3 className="t-h3 text-ink">{s.title}</h3>
                </div>
                <p className="t-body md:col-span-8">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
