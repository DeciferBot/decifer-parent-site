import Link from "next/link";
import SectionHead from "../SectionHead";
import CaseRow from "../CaseShapeCard";
import Arrow from "../Arrow";
import { publishedCaseShapes } from "../../data/caseShapes";

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-line">
      <div className="container-x section">
        <SectionHead
          title="Work, described by shape."
          lede="Clients are not named on this site. Each case says what was built, what changed, how it is measured, and what we chose not to automate."
        />
        <ul className="ruled mt-12">
          {publishedCaseShapes.map((c) => (
            <CaseRow key={c.key} shape={c} />
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/work" className="arrow-link">
            All work
            <Arrow />
          </Link>
          <Link href="/legal/client-confidentiality" className="link text-[0.9375rem]">
            Why we do not name clients
          </Link>
        </div>
      </div>
    </section>
  );
}
