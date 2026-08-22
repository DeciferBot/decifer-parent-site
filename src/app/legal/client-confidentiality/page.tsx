import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Client Confidentiality",
  description:
    "Why DECIFER does not name its clients, what we publish instead, and what we never publish at all.",
  alternates: { canonical: "/legal/client-confidentiality" },
};

export default function Page() {
  return (
    <LegalLayout
      title="Client Confidentiality"
      currentHref="/legal/client-confidentiality"
      lastUpdated="August 2026"
    >
      <div className="legal-prose">
        <h2>Why no client is named</h2>
        <p>
          Our clients are not named anywhere on this site. Some asked us not
          to. For the rest, we chose not to, because a business that would
          publish your name to win the next job would publish the next
          client&apos;s name to win the one after that. We would rather be
          believed for what we describe than trusted for who we can point at.
        </p>

        <h2>What we publish instead</h2>
        <p>
          Each piece of work is described by shape: the sector, the country,
          the problem, what we built, what changed, how it is measured, and
          what we deliberately did not automate. We keep sector descriptions
          general enough that the client cannot be guessed. If an honest
          description would identify someone, we cut the description rather
          than soften it.
        </p>

        <h2>What we publish only with permission</h2>
        <ul>
          <li>
            Any number. A figure appears only with the before measurement and
            how it was taken, the after measurement taken the same way at
            least sixty days later, the period and sample size, the other
            things that could explain it, and the client&apos;s written
            permission. Until all five exist, we publish words and say why.
          </li>
          <li>
            Any quotation, attributed by role rather than by name, and only
            with written permission for that exact wording.
          </li>
        </ul>

        <h2>What we never publish</h2>
        <ul>
          <li>Client names, brands, domains or logos.</li>
          <li>Customer, patient, guest or end-user data of any kind.</li>
          <li>Prices, revenue, margins, supplier terms or contract values.</li>
          <li>
            Anything that was shared with us during an engagement, including
            documents, credentials, data exports and internal conversations.
          </li>
        </ul>

        <h2>What this means in practice</h2>
        <p>
          During an engagement we work inside your accounts, in your name, on
          systems you own. At handover the code, the data and the runbook are
          yours. Nothing we build for you is reused for someone else without
          your agreement. If you later want to be named, that is your call to
          make, in writing, at any time.
        </p>
        <p>
          Questions about this statement can be sent to{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
