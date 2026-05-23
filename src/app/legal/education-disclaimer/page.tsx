import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Education Disclaimer — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout
      title="Education Disclaimer"
      currentHref="/legal/education-disclaimer"
    >
      <div className="legal-prose">
        <p>
          <strong>
            Decifer Learning supports learning and does not replace teachers,
            schools, tutors, or parental judgement. We make no claims about
            academic outcomes.
          </strong>
        </p>

        <h2>Decifer Learning is a support tool</h2>
        <p>
          Decifer Learning uses AI to help children learn more effectively and
          to help parents understand what their children are studying. It is
          designed to support formal education, not replace it.
        </p>

        <h2>What Decifer Learning provides</h2>
        <ul>
          <li>
            Curriculum-linked explanations and practice material in plain
            language.
          </li>
          <li>
            AI-assisted feedback to help learners identify areas to work on.
          </li>
          <li>
            Tools to help parents stay involved in their child&apos;s learning
            journey.
          </li>
        </ul>

        <h2>What Decifer Learning does not provide</h2>
        <ul>
          <li>
            A substitute for qualified teachers, tutors, or schools.
          </li>
          <li>
            Guaranteed academic results or exam preparation outcomes.
          </li>
          <li>Formal academic assessment or certification.</li>
          <li>Therapeutic or special educational needs support.</li>
        </ul>

        <h2>No outcome guarantees</h2>
        <p>
          We do not make claims about academic results. Every learner is
          different. Decifer Learning may help some children understand topics
          more quickly, but we do not promise or imply specific grades,
          attainment levels, or educational milestones.
        </p>

        <h2>Parental involvement</h2>
        <p>
          Parental or guardian oversight is an important part of how Decifer
          Learning is designed to work. We encourage parents to stay engaged
          with their child&apos;s use of the platform.
        </p>

        <h2>AI limitations in education</h2>
        <p>
          AI-generated explanations may occasionally contain errors or
          oversimplifications. Our content is designed to be curriculum-aware,
          but it should be treated as a learning aid, not as a definitive
          educational authority. Always defer to qualified teachers for formal
          guidance.
        </p>

        <p>
          <strong>Note:</strong> This is a draft disclaimer for the early access
          period. Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
