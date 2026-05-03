"use client";

import { useIsReleased } from "@/lib/release";

export default function ReleaseMeta() {
  const released = useIsReleased();
  return (
    <div className="mt-4 text-xs uppercase tracking-[0.12em] opacity-55">
      {released
        ? "Out now · Killer Groove Records"
        : "Out May 15, 2026 · Killer Groove Records"}
    </div>
  );
}
