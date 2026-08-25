import Link from "next/link";
import ServiceRow from "../ServiceCard";
import { servicesOrdered } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What we do</h2>
            <Link href="/services" className="link text-sm">
              How engagements run
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {servicesOrdered.map((s) => (
              <ServiceRow key={s.key} service={s} />
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              These are the four shapes an engagement takes.{" "}
              <Link href="/workflows" data-event="services_panel_workflows" className="link">
                The twenty workflows we have already built
              </Link>{" "}
              sit inside them.
            </p>
            <Link href="/contact" data-event="services_panel_cta" className="btn btn-primary px-4 py-2.5 text-sm">
              Discuss a business process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
