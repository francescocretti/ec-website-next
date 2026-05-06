"use client";

import { externalLinks, youtubeVideoId } from "@/data/socials";
import { useReleaseState } from "@/lib/release";
import YouTubeFacade from "./YouTubeFacade";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CountdownTimer() {
  const { isReleased, remaining } = useReleaseState();

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      {isReleased ? (
        <YouTubeFacade
          videoId={youtubeVideoId}
          title="Electric Circus — High Fever"
        />
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
          {isReleased ? "Listen / Pre-order 45" : "Pre-save now"}
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
