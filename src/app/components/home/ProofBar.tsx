import ProofStrip from "../ProofStrip";

export default function ProofBar() {
  return (
    <section className="border-t border-line">
      <div className="container-x section-tight">
        <ProofStrip keys={["liveProducts", "monthsLive", "scheduledJobs", "testFunctions"]} />
      </div>
    </section>
  );
}
