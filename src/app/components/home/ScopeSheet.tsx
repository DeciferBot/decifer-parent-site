/**
 * The hero visual: an example of the two things every agent we ship comes
 * with, a written scope and a readable log. Built in HTML so it stays
 * crisp, and labelled as an example so nobody mistakes it for a client.
 */

const allowed = [
  "Read new enquiries from the shared inbox and the web form",
  "Draft a reply using the price list and the availability calendar",
  "Book a site visit in the calendar",
];

const handBack = [
  "Any quote above AED 20,000",
  "Any complaint, or any message that mentions a refund",
  "Anything it cannot find in the price list",
];

const log: { t: string; action: string; note: string; held?: boolean }[] = [
  { t: "09:41", action: "Enquiry #2193 read", note: "source: web form" },
  { t: "09:41", action: "Draft reply prepared", note: "3 prices cited, all from list" },
  { t: "09:42", action: "Held for review", note: "quote AED 24,500 is over the limit", held: true },
  { t: "09:50", action: "Sent by A. Rahman", note: "reviewed, one line edited" },
];

export default function ScopeSheet() {
  return (
    <figure className="frame @container bg-canvas shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-ink">Agent scope sheet</span>
          <span className="hidden text-sm text-muted @sm:inline">Enquiry triage, v3</span>
        </div>
        <span className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-body">
          Example
        </span>
      </div>

      <div className="grid gap-6 px-5 py-5 @sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Allowed to</p>
          <ul className="mt-2 space-y-1.5">
            {allowed.map((a) => (
              <li key={a} className="flex gap-2 text-sm leading-snug text-body">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Must hand to a person</p>
          <ul className="mt-2 space-y-1.5">
            {handBack.map((h) => (
              <li key={h} className="flex gap-2 text-sm leading-snug text-body">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line bg-surface px-5 py-4">
        <p className="mb-2 text-sm font-semibold text-ink">Log, this morning</p>
        <ol className="t-mono divide-y divide-line">
          {log.map((row) => (
            <li key={row.t + row.action} className="grid grid-cols-[3.25rem_1fr] gap-x-3 py-1.5 @md:grid-cols-[3.25rem_10.5rem_1fr]">
              <span className="text-muted">{row.t}</span>
              <span className={row.held ? "font-semibold text-orange-text" : "text-ink"}>{row.action}</span>
              <span className="col-start-2 text-muted @md:col-start-3">{row.note}</span>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="border-t border-line px-5 py-3 text-xs text-muted">
        Every agent we build ships with a scope sheet like this one and a log
        your team can read without an engineer.
      </figcaption>
    </figure>
  );
}
