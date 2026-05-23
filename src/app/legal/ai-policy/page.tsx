import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "AI Accuracy and Source Policy — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout
      title="AI Accuracy and Source Policy"
      currentHref="/legal/ai-policy"
    >
      <div className="legal-prose">
        <h2>How DECIFER uses AI</h2>
        <p>
          AI models are a core part of the DECIFER platform. We use them to
          interpret structured data, map relationships between signals, and
          produce plain-language outputs. AI is the interpretation layer, not
          the source of truth.
        </p>

        <h2>Sources first</h2>
        <p>
          DECIFER outputs are grounded in structured, verified sources. For
          Decifer Trading, this includes market data feeds, regulatory
          announcements, and structured financial information. For Decifer
          Learning, this includes curriculum-linked academic content. AI models
          interpret this material; they do not generate it from scratch.
        </p>

        <h2>Confidence and uncertainty</h2>
        <p>
          Where DECIFER provides an AI-generated interpretation, it aims to
          indicate the confidence level and the sources used. Not every output
          will be equally certain. We are transparent about the boundaries of
          what the model knows.
        </p>

        <h2>AI limitations</h2>
        <ul>
          <li>
            AI models can produce errors, even when trained on high-quality
            data. We work to minimise this through domain-specific training and
            source grounding, but no AI output should be treated as infallible.
          </li>
          <li>
            Models may reflect patterns in training data that are incomplete or
            outdated. Real-time data helps, but there will be edge cases.
          </li>
          <li>
            Plain-language summaries may simplify nuance. Users making
            important decisions should read the underlying sources, not rely
            solely on AI-generated summaries.
          </li>
        </ul>

        <h2>No hallucination by design</h2>
        <p>
          DECIFER is specifically designed to reduce AI hallucination by
          grounding outputs in verified source material before applying
          language model interpretation. We do not allow the model to
          speculate without a source basis.
        </p>

        <h2>Feedback and corrections</h2>
        <p>
          If you find an error in a DECIFER output, please report it to{" "}
          <a href="mailto:hello@decifer.io">hello@decifer.io</a>. We take
          accuracy seriously and will investigate every report.
        </p>

        <h2>Third-party AI providers</h2>
        <p>
          DECIFER may use third-party AI infrastructure providers. These
          providers are selected for their reliability, security practices, and
          data handling standards. We do not share identifiable user data with
          AI providers for training purposes.
        </p>

        <p>
          <strong>Note:</strong> This is a draft policy for the early access
          period. Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
