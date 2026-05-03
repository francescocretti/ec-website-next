"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  videoId: string;
  title?: string;
};

export default function YouTubeFacade({
  videoId,
  title = "Electric Circus video",
}: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-video w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play ${title}`}
      className="group relative aspect-video w-full overflow-hidden"
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 1040px) 100vw, 1040px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 grid place-items-center bg-black/30 transition-colors group-hover:bg-black/20">
        <div className="grid place-items-center w-16 h-16 rounded-full bg-cream/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            width={28}
            height={28}
            fill="#0a0a0a"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
