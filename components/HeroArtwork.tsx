"use client";

import Image from "next/image";
import { useIsReleased } from "@/lib/release";

export default function HeroArtwork() {
  const released = useIsReleased();
  const src = released
    ? "/img/high-fever-mockup.png"
    : "/img/high_fever_cover.jpg";
  const alt = released ? "High Fever 7-inch vinyl" : "High Fever cover artwork";

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={1200}
      priority
      className={`vinyl-img block h-auto mx-auto ${
        released ? "w-full" : "w-full max-w-110"
      }`}
    />
  );
}
