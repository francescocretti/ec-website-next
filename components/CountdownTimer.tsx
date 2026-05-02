"use client";

import { useEffect, useState } from "react";
import { externalLinks, releaseDate } from "@/data/socials";

type Remaining = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
} | null;

function diffToParts(targetMs: number, nowMs: number): Remaining {
  let diff = targetMs - nowMs;
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  diff -= days * 86_400_000;
  const hours = Math.floor(diff / 3_600_000);
  diff -= hours * 3_600_000;
  const mins = Math.floor(diff / 60_000);
  diff -= mins * 60_000;
  const secs = Math.floor(diff / 1_000);
  return { days, hours, mins, secs };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function CountdownTimer() {
  const targetMs = releaseDate.getTime();
  const [remaining, setRemaining] = useState<Remaining>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setRemaining(diffToParts(targetMs, Date.now()));
    const id = setInterval(() => {
      setRemaining(diffToParts(targetMs, Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const isReleased = hydrated && remaining === null;

  return (
    <div className="flex flex-col items-center gap-10">
      {isReleased ? (
        <div
          aria-live="polite"
          className="text-[28px] font-extrabold uppercase tracking-[0.08em] text-teal"
        >
          Out Now!
        </div>
      ) : (
        <div
          aria-live="polite"
          className="flex justify-center gap-3 sm:gap-6"
        >
          <Unit value={remaining ? pad(remaining.days) : "00"} label="Days" />
          <Sep />
          <Unit value={remaining ? pad(remaining.hours) : "00"} label="Hours" />
          <Sep />
          <Unit value={remaining ? pad(remaining.mins) : "00"} label="Mins" />
          <Sep />
          <Unit value={remaining ? pad(remaining.secs) : "00"} label="Secs" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <a
          href={externalLinks.presave}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-cream text-[#0a0a0a] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-accent hover:text-bg"
        >
          {isReleased ? "Listen now" : "Pre-save now"}
        </a>
        <a
          href="/shows"
          className="inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cream border border-cream/30 transition-colors hover:border-teal hover:text-teal"
        >
          See Shows
        </a>
      </div>
    </div>
  );
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[28px] sm:text-[42px] font-extrabold leading-none text-cream tracking-[0.04em] tabular-nums">
        {value}
      </span>
      <span className="mt-0.5 text-[9px] uppercase tracking-[0.2em] opacity-40">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <span
      aria-hidden="true"
      className="text-[24px] sm:text-[38px] opacity-20 self-start pt-0.5"
    >
      :
    </span>
  );
}
