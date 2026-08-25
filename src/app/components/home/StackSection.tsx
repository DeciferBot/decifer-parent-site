import Link from "next/link";
import LogoRow from "../LogoRow";

const expertise = [
  "Front-end experience design",
  "Data and reporting architecture",
  "AI agents and automation",
  "Chatbots across WhatsApp, Telegram and Instagram",
  "Security and access control",
  "Email and Meta marketing integrations",
];

export default function StackSection() {
  return (
    <section id="stack" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What we build on, and what you keep</h2>
            <Link href="/stack" className="link text-sm">
              Why each one, and which model runs which job
            </Link>
          </div>
          <div className="panel-pad">
            <p className="flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="inline-block rounded-full border border-line-strong px-3 py-1 text-sm text-body"
                >
                  {e}
                </span>
              ))}
            </p>
            <p className="mt-6 text-sm text-muted">Built on tools you will own at handover:</p>
            <div className="mt-3">
              {/* Logos link to /stack, which carries the role and the reasoning
                  for each tool. StackSection itself renders on /how-we-work. */}
              <LogoRow />
            </div>
            <p className="mt-8 max-w-3xl text-sm text-muted">
              Every account is opened in your name. At handover the repository,
              the accounts and a runbook transfer to you. Listing a tool means
              we have shipped production systems on it, not that its maker
              endorses us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
