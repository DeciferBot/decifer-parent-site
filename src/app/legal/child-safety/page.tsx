import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = { title: "Child Safety Policy — Decifer" };

export default function Page() {
  return (
    <LegalLayout
      title="Child Safety Policy"
      currentHref="/legal/child-safety"
    />
  );
}
