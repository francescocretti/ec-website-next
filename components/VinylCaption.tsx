"use client";

import { useIsReleased } from "@/lib/release";

export default function VinylCaption() {
  const released = useIsReleased();
  if (!released) return null;
  return (
    <p className="mt-5 text-base font-bold uppercase tracking-[0.2em] text-accent">
      Limited edition 7&quot; vinyl available for pre-order
    </p>
  );
}
