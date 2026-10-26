"use client";

import { featuredAlbum, formatReleaseDate, singles } from "@/data/releases";
import { useIsReleased } from "@/lib/release";

type Item = { text: string; accent?: boolean };

export default function Ticker() {
  const released = useIsReleased();
  const dateText = released
    ? "Out Now"
    : `Out ${formatReleaseDate(featuredAlbum.date, false)}`;
  const latestSingle = singles[singles.length - 1].title;

  const items: Item[] = [
    { text: "Electric Circus" },
    { text: featuredAlbum.title, accent: true },
    { text: dateText },
    { text: "Killer Groove Records" },
    { text: "New Album" },
    { text: featuredAlbum.title, accent: true },
    { text: "Electric Circus" },
    { text: dateText },
    { text: "New Single" },
    { text: latestSingle, accent: true },
  ];

  return (
    <div
      aria-hidden="true"
      className="border-y border-cream/10 bg-cream/[0.02] py-3.5 overflow-hidden whitespace-nowrap"
    >
      <div className="ticker-track inline-flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`px-10 text-[13px] tracking-[0.28em] ${
              item.accent ? "text-accent opacity-100" : "text-cream opacity-30"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
