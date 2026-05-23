import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "AI Accuracy and Source Policy — Decifer",
};

export default function Page() {
  return (
    <LegalLayout
      title="AI Accuracy and Source Policy"
      currentHref="/legal/ai-policy"
    />
  );
}
