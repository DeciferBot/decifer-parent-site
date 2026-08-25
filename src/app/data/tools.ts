/**
 * The free tools, one entry per /tools/<key> page. The index, the tool
 * pages, the sitemap and llms.txt all render from this list.
 */

export interface Tool {
  key: string;
  name: string;
  /** The user's question, verbatim, for the index card. */
  question: string;
  summary: string;
  /** Metadata title, phrased the way people search. */
  seoTitle: string;
  seoDescription: string;
  /** Article the tool pairs with. */
  articleSlug: string;
  articleTitle: string;
  updatedAt: string;
}

export const tools: Tool[] = [
  {
    key: "automation-payback-calculator",
    name: "Automation payback calculator",
    question: "Is automating this task worth the money?",
    summary:
      "Enter the hours, the salary and the costs. Get the yearly saving, the payback period and a plain verdict, with every step of the arithmetic shown.",
    seoTitle: "Automation payback calculator: is AI automation worth it?",
    seoDescription:
      "Free calculator: enter the hours a task takes, the salary and the costs, and see the yearly saving and payback period, with the arithmetic shown. No signup, nothing stored.",
    articleSlug: "is-ai-automation-worth-it-for-a-small-business",
    articleTitle: "Is AI automation worth it for a small business?",
    updatedAt: "2026-08-25",
  },
  {
    key: "launch-safety-check",
    name: "Launch safety check",
    question: "Is my app safe to put in front of real users?",
    summary:
      "The six security checks we run on any codebase we inherit, as a scorecard. Answer honestly and get a fix list for anything failing.",
    seoTitle: "App launch safety check: six security checks before you launch",
    seoDescription:
      "Free scorecard for vibe-coded and AI-built apps: six yes/no security checks, a score, and a fix list for anything failing. Runs in your browser, nothing stored.",
    articleSlug: "is-your-vibe-coded-app-safe-to-launch",
    articleTitle: "Is your vibe-coded app safe to launch? Run these checks first",
    updatedAt: "2026-08-25",
  },
  {
    key: "agent-or-automation",
    name: "Agent or automation?",
    question: "Do I need an AI agent, or something simpler?",
    summary:
      "Three questions about the task, one verdict. Many agent projects should have been simpler automations; this tells you which side yours is on.",
    seoTitle: "AI agent or automation? A three-question decision tool",
    seoDescription:
      "Free decision tool: answer three questions about the task and get a plain verdict on whether it needs an AI agent, a simple automation, or a person. Nothing stored.",
    articleSlug: "ai-agent-vs-automation-which-does-your-business-need",
    articleTitle: "AI agent vs automation: which does your business need?",
    updatedAt: "2026-08-25",
  },
];

export const toolsByKey = Object.fromEntries(tools.map((t) => [t.key, t]));
