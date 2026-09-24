"use client";

import Image from "next/image";
import { useIsReleased } from "@/lib/release";

export default function HeroArtwork() {
  const released = useIsReleased();
  const src = released ? "/img/high-fever-mockup.png" : "/img/ogres-cover.jpg";
  const alt = released
    ? "High Fever / Ogres 7-inch vinyl"
    : "Ogres cover artwork";

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
