import type { Metadata } from "next";
import ToolPageShell from "@/app/components/tools/ToolPageShell";
import AgentOrAutomation from "@/app/components/tools/AgentOrAutomation";
import { toolsByKey } from "@/app/data/tools";

const tool = toolsByKey["agent-or-automation"];

export const metadata: Metadata = {
  title: tool.seoTitle,
  description: tool.seoDescription,
  alternates: { canonical: `/tools/${tool.key}` },
};

export default function Page() {
  return (
    <ToolPageShell tool={tool}>
      <AgentOrAutomation />
    </ToolPageShell>
  );
}
