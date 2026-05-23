import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Financial Information Disclaimer — Decifer",
};

export default function Page() {
  return (
    <LegalLayout
      title="Financial Information Disclaimer"
      currentHref="/legal/financial-disclaimer"
    />
  );
}
