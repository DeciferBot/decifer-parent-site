/**
 * The 10-20-70 band: implementation changes how people work. External claim,
 * cited to BCG; see docs/REPOSITIONING_2026-08-24.md for the source link.
 */
export default function PeopleProcessSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel px-6 py-8 sm:px-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="text-[1.75rem] font-semibold leading-none tracking-tight text-ink">
                10 / 20 / 70
              </p>
              <p className="mt-2 text-sm text-muted">
                Algorithms / technology and data / people and process. Source:
                Boston Consulting Group.
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="t-h3 text-ink">Implementation changes how people work</h2>
              <p className="t-body mt-3 max-w-2xl">
                BCG attributes roughly 10% of AI success to algorithms, 20% to
                technology and data, and 70% to people and process. That matches
                what happens in practice. A redesigned workflow moves work
                between teams, removes an approval, or turns a two-day report
                into one that arrives every morning. Those changes need owners,
                controls and adoption, so we design them into the implementation
                rather than leaving them to the rollout email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
