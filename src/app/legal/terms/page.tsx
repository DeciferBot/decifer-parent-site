import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";

export const metadata: Metadata = { title: "Terms of Use — Decifer" };

export default function Page() {
  return <LegalLayout title="Terms of Use" currentHref="/legal/terms" />;
}
