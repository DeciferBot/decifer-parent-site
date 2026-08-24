import Link from "next/link";

/**
 * Buyer-enablement table: what to look for in any AI vendor, and where we
 * stand. Every claim in the right column is verifiable on this site. The
 * left column states the market norm without naming anyone.
 */

const rows = [
  {
    q: "Something of theirs you can open today",
    them: "A demo, on request",
    us: "Three public products, open now",
  },
  {
    q: "Who owns the accounts and the code",
    them: "Rarely stated",
    us: "You do, from day one, with a runbook at handover",
  },
  {
    q: "A written list of what not to automate",
    them: "Not offered",
    us: "In every audit and every agent scope sheet",
  },
  {
    q: "Results",
    them: "Percentages without a source",
    us: "Figures only with the method, the source and written permission",
  },
  {
    q: "Who replies to your enquiry",
    them: "A sales team, or nobody",
    us: "The founder, within one working day",
  },
  {
    q: "The first step",
    them: "A free consultation that becomes a pitch",
    us: "A two-week audit at a fixed fee, credited against any build",
  },
];

export default function CompareSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Choosing an AI partner in Dubai</h2>
            <Link href="/contact" className="link text-sm">
              Ask us these questions
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-[0.9375rem]">
              <thead>
                <tr>
                  <th className="label px-6 py-4 font-medium">What to check</th>
                  <th className="label px-6 py-4 font-medium">The market norm</th>
                  <th className="label px-6 py-4 font-medium">Decifer</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.q} className="border-t border-line align-top">
                    <td className="w-[30%] px-6 py-4 font-medium text-ink">{r.q}</td>
                    <td className="px-6 py-4 text-muted">{r.them}</td>
                    <td className="px-6 py-4 text-ink">
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-live align-[1px]" aria-hidden="true" />
                      {r.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-line px-6 py-4 text-sm text-muted">
            Ask every vendor the left column. Whoever you choose, you will make
            a better decision.
          </p>
        </div>
      </div>
    </section>
  );
}
