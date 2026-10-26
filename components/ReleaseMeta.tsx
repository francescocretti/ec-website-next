"use client";

import { featuredAlbum, formatReleaseDate } from "@/data/releases";
import { useIsReleased } from "@/lib/release";

export default function ReleaseMeta() {
  const released = useIsReleased();
  return (
    <div className="mt-3 text-xs uppercase tracking-[0.12em] opacity-55">
      {released
        ? "Out now · Killer Groove Records"
        : `Out ${formatReleaseDate(featuredAlbum.date)} · Killer Groove Records`}
    </div>
  );
}
