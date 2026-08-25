import type { Metadata } from "next";
import ToolPageShell from "@/app/components/tools/ToolPageShell";
import LaunchSafetyCheck from "@/app/components/tools/LaunchSafetyCheck";
import { toolsByKey } from "@/app/data/tools";

const tool = toolsByKey["launch-safety-check"];

export const metadata: Metadata = {
  title: tool.seoTitle,
  description: tool.seoDescription,
  alternates: { canonical: `/tools/${tool.key}` },
};

export default function Page() {
  return (
    <ToolPageShell tool={tool}>
      <LaunchSafetyCheck />
    </ToolPageShell>
  );
}
