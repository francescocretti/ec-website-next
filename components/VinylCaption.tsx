"use client";

import { useIsReleased } from "@/lib/release";

export default function VinylCaption() {
  const released = useIsReleased();
  return (
    <p className="mt-5 text-base font-bold uppercase tracking-[0.2em] text-accent">
      {released
        ? "Limited edition 7\" vinyl available for pre-order"
        : "Limited edition 7\" vinyl available soon!"}
    </p>
  );
}
