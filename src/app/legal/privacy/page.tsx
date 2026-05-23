import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = { title: "Privacy Policy — Decifer" };

export default function Page() {
  return <LegalLayout title="Privacy Policy" currentHref="/legal/privacy" />;
}
