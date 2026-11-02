"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { featuredAlbum } from "@/data/releases";

const faces = [
  { key: "front", label: "Front", src: featuredAlbum.mockupFront },
  { key: "back", label: "Back", src: featuredAlbum.mockupBack },
] as const;

export default function AlbumMockupFlip() {
  const [active, setActive] = useState(0);

  // Auto-flip; depending on `active` restarts the timer after a manual click.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % faces.length),
      4000,
    );
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="flex flex-col items-center gap-5">
      <button
        type="button"
        onClick={() => setActive((i) => (i + 1) % faces.length)}
        aria-label={`Show ${faces[(active + 1) % faces.length].label.toLowerCase()} of the ${featuredAlbum.title} vinyl`}
        className="vinyl-img relative block w-full aspect-[2000/1400] cursor-pointer"
      >
        {faces.map((face, i) => (
          <Image
            key={face.key}
            src={face.src}
            alt={`${featuredAlbum.title} vinyl, ${face.label.toLowerCase()}`}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            priority={i === 0}
            className={`object-contain transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>

      <div className="flex gap-1 text-[11px] font-medium uppercase tracking-[0.24em]">
        {faces.map((face, i) => (
          <button
            key={face.key}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              i === active ? "text-accent" : "opacity-50 hover:opacity-100"
            }`}
          >
            {face.label}
          </button>
        ))}
      </div>
    </div>
  );
}
