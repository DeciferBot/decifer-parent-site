"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * The hero board: what Decifer runs, right now. Every figure comes from
 * proof.ts values and product statuses; the only live element is the Dubai
 * clock. When a live feed exists, rows can be wired to it one by one.
 */

type Row = {
  name: string;
  sub: string;
  value: string;
  valueSub: string;
  status: string;
  warn?: boolean;
};

const rows: Row[] = [
  {
    name: "Decifer Markets",
    sub: "Plain-English daily market read",
    value: "Live",
    valueSub: "5 months continuous",
    status: "Running",
  },
  {
    name: "Decifer Marketing",
    sub: "16 data connectors, refreshed nightly",
    value: "Live",
    valueSub: "Nightly sync",
    status: "Running",
  },
  {
    name: "Decifer Learning",
    sub: "UK curriculum, maths checked by a solver",
    value: "Beta",
    valueSub: "Opening gradually",
    status: "Beta",
    warn: true,
  },
  {
    name: "Scheduled jobs",
    sub: "Across all systems, unattended",
    value: "30+",
    valueSub: "Watchdog armed",
    status: "Running",
  },
  {
    name: "Automated tests",
    sub: "In the largest system alone",
    value: "9,074",
    valueSub: "Across 420 files",
    status: "Passing",
  },
  {
    name: "AI removed from a working system",
    sub: "Where a plain check was better",
    value: "5 times",
    valueSub: "Each one written up",
    status: "Documented",
    warn: true,
  },
];

function DubaiClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="text-[0.8125rem] text-on-dark-2">
      Dubai <span className="font-medium text-on-dark">{time ?? "--:--"}</span> GST
    </span>
  );
}

export default function SystemsBoard() {
  return (
    <aside className="board" aria-label="Systems Decifer runs">
      <div className="flex items-center justify-between px-4.5 py-3.5">
        <span className="label text-on-dark-2">Systems we run</span>
        <DubaiClock />
      </div>
      {rows.map((r) => (
        <div key={r.name} className="board-row">
          <div>
            <p className="text-[0.9375rem] font-medium leading-snug">{r.name}</p>
            <p className="mt-0.5 text-[0.78125rem] leading-snug text-on-dark-2">{r.sub}</p>
          </div>
          <div>
            <p className="text-[0.9375rem]">{r.value}</p>
            <p className="mt-0.5 text-[0.78125rem] text-on-dark-2">{r.valueSub}</p>
          </div>
          <span className={`board-st ${r.warn ? "warn" : ""}`}>{r.status}</span>
        </div>
      ))}
      <p className="border-t border-line-dark px-4.5 py-3 text-[0.78125rem] text-on-dark-2">
        Every figure has a named source.{" "}
        <Link href="/about#numbers" className="text-on-dark underline underline-offset-2">
          How we count
        </Link>
      </p>
    </aside>
  );
}
