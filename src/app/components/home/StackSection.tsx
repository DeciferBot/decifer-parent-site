import Link from "next/link";
import SectionHead from "../SectionHead";
import LogoRow from "../LogoRow";

export default function StackSection() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="container-x section">
        <SectionHead
          title="Tools we know deeply. Accounts you will own."
          lede="We have built and run production systems on every tool here, so the first week of a build is never spent learning it. Every account is opened in your name, and at handover the repository, the accounts and a runbook transfer to you."
        />
        <div className="mt-12">
          <LogoRow />
        </div>
        <p className="mt-10 text-sm text-muted">
          Listing a tool means we have shipped production systems on it, not that its maker endorses us.{" "}
          <Link href="/stack" className="link">
            Why each one, and what you own
          </Link>
        </p>
      </div>
    </section>
  );
}
