"use client";

import { externalLinks } from "@/data/socials";
import { useIsReleased } from "@/lib/release";

export default function VinylCaption() {
  const released = useIsReleased();
  if (!released) return null;
  return (
    <a
      href={externalLinks.presave}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 text-base font-bold uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-80"
    >
      Limited edition 7&quot; vinyl — High Fever / Ogres — available now
    </a>
  );
}
