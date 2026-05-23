import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Financial Information Disclaimer — DECIFER",
};

export default function Page() {
  return (
    <LegalLayout
      title="Financial Information Disclaimer"
      currentHref="/legal/financial-disclaimer"
    >
      <div className="legal-prose">
        <h2>This is not financial advice</h2>
        <p>
          DECIFER and Decifer Trading provide market intelligence. This means
          structured information to help you understand what financial markets
          are doing, why they may be moving, and where signals are forming. It
          does not mean financial advice, investment advice, or trading
          recommendations.
        </p>

        <h2>What we provide</h2>
        <ul>
          <li>
            Structured summaries of market data and publicly available
            information.
          </li>
          <li>
            AI-assisted interpretation of market signals in plain language.
          </li>
          <li>
            Context to help users understand market events, not instructions on
            what to buy or sell.
          </li>
        </ul>

        <h2>What we do not provide</h2>
        <ul>
          <li>
            Personalised financial advice tailored to your circumstances.
          </li>
          <li>Buy, sell, or hold recommendations on any security or asset.</li>
          <li>
            Regulated investment services of any kind. DECIFER is not
            authorised or regulated as a financial adviser or broker.
          </li>
        </ul>

        <h2>Financial markets carry risk</h2>
        <p>
          The value of investments can go down as well as up. Past market
          behaviour is not a reliable guide to future outcomes. You may get back
          less than you invest. All financial decisions are yours alone.
        </p>

        <h2>Accuracy</h2>
        <p>
          While we work to ensure market data and AI outputs are accurate and
          source-referenced, we cannot guarantee completeness or timeliness.
          Always verify important information before making financial decisions.
        </p>

        <h2>Seek professional advice</h2>
        <p>
          If you are making significant financial decisions, consult a qualified
          and authorised financial adviser. DECIFER is not a substitute for
          professional financial guidance.
        </p>

        <p>
          <strong>Note:</strong> This is a draft disclaimer for the early access
          period. Final legal review is required before commercial launch.
        </p>
      </div>
    </LegalLayout>
  );
}
