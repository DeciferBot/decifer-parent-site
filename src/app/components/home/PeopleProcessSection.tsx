/**
 * The 10-20-70 band: implementation changes how people work. External claim,
 * cited to BCG; see docs/REPOSITIONING_2026-08-24.md for the source link.
 */
export default function PeopleProcessSection() {
  return (
    <section className="band band-tight">
      <div className="container-x">
        <div className="panel grid gap-8 px-6 py-9 sm:px-9 md:grid-cols-12 md:items-center">
          <div
            className="md:col-span-4"
            style={{ "--accent": "var(--color-a-violet)" } as React.CSSProperties}
          >
            <div className="flex items-end gap-3">
              <span className="figure-num figure-num-lg figure-accent">10</span>
              <span className="figure-num text-faint">/</span>
              <span className="figure-num figure-num-lg text-ink">20</span>
              <span className="figure-num text-faint">/</span>
              <span className="figure-num figure-num-lg text-ink">70</span>
            </div>
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-surface-alt">
              <div className="flex h-full w-full">
                <span className="h-full" style={{ width: "10%", background: "var(--color-a-violet)" }} />
                <span className="h-full" style={{ width: "20%", background: "var(--color-a-blue)" }} />
                <span className="h-full" style={{ width: "70%", background: "var(--color-orange)" }} />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">
              Algorithms / technology and data / people and process. Source:
              Boston Consulting Group.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
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
    </section>
  );
}
