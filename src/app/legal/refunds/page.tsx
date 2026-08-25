import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "DECIFER's refund policy for the early access period and any paid beta programmes, including how to contact us about a charge made in error.",
  alternates: { canonical: "/legal/refunds" },
};

export default function Page() {
  return (
    <LegalLayout title="Refund Policy" currentHref="/legal/refunds" lastUpdated="August 2026">
      <div className="legal-prose">
        <h2>Scope</h2>
        <p>
          This policy covers the DECIFER products: Decifer Markets, Decifer
          Learning and Decifer Marketing. Client engagements for services
          (AI agents, automation, reporting and product builds) are governed
          by the signed statement of work for that engagement, which sets out
          the fee stages, what is delivered at each stage, and how either side
          may end the work. Where a statement of work is silent, the section
          on services below applies.
        </p>

        <h2>Early access period</h2>
        <p>
          During early access, DECIFER does not currently charge for access.
          If you have been invited to a paid early access or beta programme
          and believe you have been charged in error, please contact us
          immediately at{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>.
        </p>

        <h2>Future paid plans</h2>
        <p>
          When DECIFER moves to paid plans, we will publish a clear and fair
          refund policy in advance. Our intention is to offer:
        </p>
        <ul>
          <li>
            A 14-day cooling-off period for new subscribers. We offer this as
            a matter of our own policy, in every country we sell in, in
            addition to any rights you have under the consumer law that
            applies to you.
          </li>
          <li>
            Pro-rata refunds for annual plans cancelled within the first 30
            days.
          </li>
          <li>
            Clear escalation steps if a refund request is disputed.
          </li>
        </ul>

        <h2>Service disruptions</h2>
        <p>
          If DECIFER experiences a significant service disruption that
          materially affects your paid access, we will credit your account or
          offer a refund at our discretion. We will communicate clearly when
          this occurs.
        </p>

        <h2>Services engagements</h2>
        <p>
          Service fees are invoiced in stages against delivered work. Work
          delivered and accepted is not refundable. If an engagement ends
          early, you pay for the stages completed and nothing for the stages
          not started. The assessment fee is credited in full against any build
          that follows it, as stated on the services pages.
        </p>

        <h2>How to request a refund</h2>
        <p>
          Email <a href="mailto:hello@decifer.io">hello@decifer.io</a> with
          your account details and the reason for your request. We aim to
          respond within 5 business days.
        </p>

        <p>
          <strong>Note:</strong> This is a draft policy for the early access
          period. Paid plan terms and the full refund policy will be finalised
          before commercial launch. Final legal review is required.
        </p>
      </div>
    </LegalLayout>
  );
}
