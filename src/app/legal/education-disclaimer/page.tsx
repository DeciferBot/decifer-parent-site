import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Education Disclaimer — Decifer",
};

export default function Page() {
  return (
    <LegalLayout
      title="Education Disclaimer"
      currentHref="/legal/education-disclaimer"
    />
  );
}
