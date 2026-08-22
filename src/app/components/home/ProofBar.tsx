import Link from "next/link";
import ProofStrip from "../ProofStrip";

export default function ProofBar() {
  return (
    <section className="border-y border-line-strong bg-surface/40 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ProofStrip keys={["liveProducts", "monthsLive", "scheduledJobs", "deletedAi"]} />
        <p className="mt-4 text-xs text-muted">
          Every figure on this site is traceable to its source.{" "}
          <Link href="/about" className="text-body underline-offset-2 hover:text-ink hover:underline">
            How we count
          </Link>
          . The investing system runs on a broker paper account, not real money.
        </p>
      </div>
    </section>
  );
}
