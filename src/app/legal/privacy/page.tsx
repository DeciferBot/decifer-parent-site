import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy" currentHref="/legal/privacy">
      <div className="legal-prose">
        <h2>What we collect</h2>
        <p>
          During early access, we collect the information you voluntarily
          provide when you request access: your name, email address, your
          stated area of interest, and any optional message you include.
        </p>
        <p>
          If you use Decifer Trading or Decifer Learning, those products may
          collect additional information described in their own product-level
          policies. This policy covers the DECIFER parent platform and the
          early access process only.
        </p>

        <h2>How we use it</h2>
        <ul>
          <li>To contact you about your early access request.</li>
          <li>
            To understand demand across different DECIFER products so we can
            prioritise our rollout.
          </li>
          <li>
            To send you product updates if you have opted in. You can opt out
            at any time.
          </li>
        </ul>
        <p>We do not sell your data. We do not share it with third parties for marketing.</p>

        <h2>Storage and security</h2>
        <p>
          Early access submissions are stored securely. We use industry-standard
          encryption in transit (HTTPS) and access controls on our internal
          systems. No system is perfectly secure; if there is ever a breach that
          affects your data, we will inform you promptly.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to view, correct, or delete any personal information
          we hold about you. Email{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a> and we will
          respond within 30 days.
        </p>

        <h2>Cookies</h2>
        <p>
          The DECIFER parent website currently uses only essential functional
          cookies. We do not run advertising or third-party tracking cookies.
          If we add analytics, we will update this policy and ask for your
          consent where required.
        </p>

        <h2>Children</h2>
        <p>
          The DECIFER parent site is not directed at children under 13. Decifer
          Learning has a separate child safety and data policy.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy question, email{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>.
        </p>

        <p>
          <strong>Note:</strong> This is a draft policy for the early access
          period. Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
