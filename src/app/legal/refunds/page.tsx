import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = { title: "Refund Policy — Decifer" };

export default function Page() {
  return <LegalLayout title="Refund Policy" currentHref="/legal/refunds" />;
}
