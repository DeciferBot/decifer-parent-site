import Link from "next/link";

/**
 * Buyer-enablement table: what to look for in any AI vendor, and where we
 * stand. Every claim in the right column is verifiable on this site. The
 * left column states the market norm without naming anyone.
 */

const rows = [
  {
    q: "Where does AI actually touch the output",
    them: "Wherever the demo looks impressive",
    us: "Only at the point that needs judgement; named in writing before the build starts",
  },
  {
    q: "Who owns the accounts and the code",
    them: "Rarely stated",
    us: "You do, from day one, with a runbook at handover",
  },
  {
    q: "Can a number in the output be invented",
    them: "Usually possible; rarely checked for",
    us: "No. The system will not publish a figure it did not calculate, and the build stops if it tries",
  },
  {
    q: "A written list of what not to automate",
    them: "Not offered",
    us: "In every assessment and every agent scope sheet",
  },
  {
    q: "Evidence it holds up once nobody is watching",
    them: "A demo, on request",
    us: "Three systems of ours have run daily since March, unattended. They are public, so you can open them and judge for yourself",
  },
  {
    q: "The first step",
    them: "A free consultation that becomes a pitch",
    us: "A two-week assessment at a fixed fee, credited against any build",
  },
];

export default function CompareSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What to check before an AI system touches your business</h2>
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
