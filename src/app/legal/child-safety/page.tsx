import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Child Safety Policy — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout
      title="Child Safety Policy"
      currentHref="/legal/child-safety"
    >
      <div className="legal-prose">
        <h2>Our commitment</h2>
        <p>
          Child safety is a core part of how Decifer Learning is designed, not
          an afterthought. This policy applies to the Decifer Learning product
          and any part of the DECIFER platform that children may access.
        </p>

        <h2>Age requirements</h2>
        <p>
          Decifer Learning is designed for children in primary and secondary
          education, typically aged 5 to 16. Children under 13 require
          parental or guardian consent and oversight to use the platform.
          Children under 5 should not use the platform unsupervised.
        </p>

        <h2>Content standards</h2>
        <ul>
          <li>All content is curriculum-linked and age-appropriate.</li>
          <li>
            Content is reviewed to ensure it is suitable for the intended age
            group.
          </li>
          <li>
            AI-generated content is filtered and moderated. Outputs that
            fall outside defined age-appropriate boundaries are not surfaced.
          </li>
          <li>
            There is no user-generated content accessible to children within
            the platform.
          </li>
        </ul>

        <h2>Data and privacy for children</h2>
        <p>
          We follow a minimal data collection approach for child users. We do
          not collect data from children that is not necessary for the
          educational service. We do not use data from child users for
          advertising or third-party commercial purposes.
        </p>
        <p>
          Parents and guardians may request to view, correct, or delete data
          held about their child by contacting{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>.
        </p>

        <h2>Parental controls and involvement</h2>
        <p>
          Decifer Learning is designed to involve parents. Parents can view
          their child&apos;s progress, understand what topics are being
          covered, and stay engaged in the learning journey. Parental
          involvement is encouraged and supported.
        </p>

        <h2>Reporting concerns</h2>
        <p>
          If you have a concern about child safety, inappropriate content, or
          any incident related to a child&apos;s use of DECIFER, please contact
          us immediately at{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>. We treat all
          such reports as urgent.
        </p>

        <h2>Compliance</h2>
        <p>
          We aim to comply with applicable child safety and data protection
          regulations, including the UK Children&apos;s Code (Age Appropriate
          Design Code) and GDPR provisions relating to children. This is an
          ongoing commitment and will be reviewed as the product develops.
        </p>

        <p>
          <strong>Note:</strong> This is a draft policy for the early access
          period. Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
