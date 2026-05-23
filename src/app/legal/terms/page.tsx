import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout title="Terms of Use" currentHref="/legal/terms">
      <div className="legal-prose">
        <h2>Acceptance</h2>
        <p>
          By accessing DECIFER or requesting early access, you agree to these
          terms. If you do not agree, do not use the platform.
        </p>

        <h2>What DECIFER is</h2>
        <p>
          DECIFER is an AI-assisted intelligence platform. It provides
          structured, plain-language information to help users understand
          complex topics. It is not a financial adviser, broker, teacher, or
          regulated professional service of any kind.
        </p>

        <h2>What DECIFER is not</h2>
        <ul>
          <li>
            <strong>Not financial advice.</strong> Nothing on DECIFER or
            Decifer Trading constitutes financial, investment, or trading advice.
            Financial markets carry risk. You are responsible for your own
            decisions.
          </li>
          <li>
            <strong>Not educational advice.</strong> Decifer Learning supports
            learning. It does not replace schools, teachers, or tutors.
          </li>
          <li>
            <strong>Not guaranteed to be accurate.</strong> AI-assisted outputs
            can contain errors. We work to minimise them and cite sources, but
            you should apply your own judgement.
          </li>
        </ul>

        <h2>Permitted use</h2>
        <p>
          You may use DECIFER for personal, non-commercial purposes during the
          early access period unless otherwise agreed in writing. You may not
          resell, redistribute, or build competing products using DECIFER outputs
          without explicit permission.
        </p>

        <h2>Account responsibility</h2>
        <p>
          You are responsible for keeping your access credentials secure. If you
          suspect unauthorised use of your account, notify us immediately at{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, DECIFER is provided as-is.
          We are not liable for any loss or damage arising from your use of the
          platform, reliance on its outputs, or decisions made based on
          information provided through DECIFER.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms. We will notify early access users of
          material changes. Continued use of DECIFER after an update constitutes
          acceptance of the revised terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales, unless
          otherwise required by your local jurisdiction.
        </p>

        <p>
          <strong>Note:</strong> This is a draft for the early access period.
          Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
