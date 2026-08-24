import Link from "next/link";
import CaseRow from "../CaseShapeCard";
import { publishedCaseShapes } from "../../data/caseShapes";

export default function WorkSection() {
  return (
    <section id="work" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Recent results</h2>
            <Link href="/work" className="link text-sm">
              All work
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {publishedCaseShapes.map((c) => (
              <CaseRow key={c.key} shape={c} />
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-muted">
              Clients are anonymised by policy. Every case states what was
              built, what changed and how it is measured.{" "}
              <Link href="/legal/client-confidentiality" className="link">
                Why
              </Link>
            </p>
            <Link href="/contact" data-event="work_panel_cta" className="btn btn-primary px-4 py-2.5 text-sm">
              Get results like these
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
