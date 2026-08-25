import Link from "next/link";
import Arrow from "../Arrow";
import { tools } from "../../data/tools";

/**
 * For the reader who has got this far and still is not ready to write to
 * anyone. The tools are the low-commitment version of the first call: they
 * take the reader's own numbers and hand back a verdict, and a verdict is a
 * far better conversation to arrive with than a blank enquiry form.
 *
 * Reads from tools.ts, the same list /tools renders from.
 */
export default function ToolsSection() {
  return (
    <section id="tools" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Not ready to talk yet</h2>
            <Link href="/tools" data-event="home_tools_all" className="link text-sm">
              All three tools
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {tools.map((t) => (
              <li key={t.key}>
                <Link
                  href={`/tools/${t.key}`}
                  data-event={`home_tool_${t.key.replace(/-/g, "_")}`}
                  className="row-link group grid gap-3 px-6 py-6 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-5">
                    <h3 className="t-h3 text-ink">{t.question}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="t-body">{t.summary}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-orange-text">
                      {t.name}
                      <Arrow className="row-arrow" size={15} />
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              Free, no signup, nothing stored. Each runs in your browser, uses your numbers, and
              ends with a recommended next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
