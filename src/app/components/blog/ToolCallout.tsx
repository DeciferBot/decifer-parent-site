import Link from "next/link";
import Arrow from "@/app/components/Arrow";
import type { Tool } from "@/app/data/tools";

/**
 * The article's own tool, offered at the end of the read. An article
 * informs; the tool takes the reader's real numbers and hands back a
 * verdict with a next step, which is the more qualified conversation. Any
 * post whose slug matches a tool's articleSlug gets this automatically.
 */
export default function ToolCallout({ tool }: { tool: Tool }) {
  return (
    <div className="panel px-6 py-6">
      <p className="label">Do it with your own numbers</p>
      <h2 className="t-h3 mt-3 text-ink">{tool.name}</h2>
      <p className="t-body mt-2 max-w-2xl">{tool.summary}</p>
      <Link
        href={`/tools/${tool.key}`}
        data-event={`blog_tool_${tool.key.replace(/-/g, "_")}`}
        className="btn btn-primary mt-5"
      >
        {tool.question}
        <Arrow className="row-arrow" size={16} />
      </Link>
      <p className="mt-4 text-xs text-muted">
        Free, no signup. It runs in your browser and stores nothing.
      </p>
    </div>
  );
}
