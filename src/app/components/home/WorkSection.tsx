import Link from "next/link";
import CaseRow from "../CaseShapeCard";
import { publishedCaseShapes } from "../../data/caseShapes";

export default function WorkSection() {
  return (
    <section id="work" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Client work, described by shape</h2>
            <Link href="/legal/client-confidentiality" className="link text-sm">
              Why clients are not named
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {publishedCaseShapes.map((c) => (
              <CaseRow key={c.key} shape={c} />
            ))}
          </ul>
          <p className="border-t border-line px-6 py-4 text-sm text-muted">
            Each case states what was built, what changed, how it is measured,
            and what we chose not to automate.{" "}
            <Link href="/work" className="link">
              Read the full cases
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
