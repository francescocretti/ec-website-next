"use client";

import { useIsReleased } from "@/lib/release";

export default function ReleaseLabel() {
  const released = useIsReleased();
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
      {released ? "Now Available" : "New Album"}
    </div>
  );
}
