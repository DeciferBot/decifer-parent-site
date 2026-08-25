import type { Metadata } from "next";
import ToolPageShell from "@/app/components/tools/ToolPageShell";
import PaybackCalculator from "@/app/components/tools/PaybackCalculator";
import { toolsByKey } from "@/app/data/tools";

const tool = toolsByKey["automation-payback-calculator"];

export const metadata: Metadata = {
  title: tool.seoTitle,
  description: tool.seoDescription,
  alternates: { canonical: `/tools/${tool.key}` },
};

export default function Page() {
  return (
    <ToolPageShell tool={tool}>
      <PaybackCalculator />
    </ToolPageShell>
  );
}
