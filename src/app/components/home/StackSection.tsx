import Link from "next/link";
import LogoRow from "../LogoRow";

export default function StackSection() {
  return (
    <section id="stack" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Built on tools you will own</h2>
            <Link href="/stack" className="link text-sm">
              Why each one
            </Link>
          </div>
          <div className="panel-pad">
            <LogoRow />
            <p className="mt-8 max-w-3xl text-sm text-muted">
              Every account is opened in your name. At handover the repository,
              the accounts and a runbook transfer to you. Listing a tool means
              we have shipped production systems on it, not that its maker
              endorses us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
