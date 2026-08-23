import Link from "next/link";
import SectionHead from "../SectionHead";
import LogoRow from "../LogoRow";

export default function StackSection() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="container-x section">
        <SectionHead
          title="Built with tools you will own."
          lede="Every account is opened in your name. At handover the repository, the accounts and a runbook transfer to you, so nothing of yours is something only we can reach."
        />
        <div className="mt-12">
          <LogoRow />
        </div>
        <p className="mt-10 text-sm text-muted">
          Listing a tool means we use it, not that its maker endorses us.{" "}
          <Link href="/stack" className="link">
            Why each one, and what you own
          </Link>
        </p>
      </div>
    </section>
  );
}
