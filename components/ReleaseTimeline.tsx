import Image from "next/image";
import {
  featuredAlbum,
  formatReleaseDate,
  singles,
  vinylSingle,
  type Release,
} from "@/data/releases";

export default function ReleaseTimeline() {
  return (
    <section className="px-6 md:px-12 pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
          The road to {featuredAlbum.title}
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-[0.04em]">
          {singles.length} singles. One album.
        </h2>

        <ol className="relative mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-cream/25"
          />
          {singles.map((single, i) => (
            <SingleStop
              key={single.title}
              single={single}
              latest={i === singles.length - 1}
            />
          ))}
          <li className="relative flex flex-col">
            <Dot className="border-2 border-accent bg-bg" />
            <div className="md:mt-5 text-[11px] uppercase tracking-[0.2em] text-accent">
              {formatReleaseDate(featuredAlbum.date, false)}
            </div>
            <div className="mt-3 aspect-square w-full border-2 border-dashed border-accent/70 flex flex-col items-center justify-center gap-2 text-center p-4">
              <span className="text-2xl font-extrabold">
                {featuredAlbum.title}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                The full album
              </span>
            </div>
            <a
              href={featuredAlbum.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-80"
            >
              Get it →
            </a>
          </li>
        </ol>

        <p className="mt-10 text-[12px] uppercase tracking-[0.16em] opacity-60">
          {vinylSingle.label} —{" "}
          <a
            href={vinylSingle.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-accent"
          >
            get it
          </a>
        </p>
      </div>
    </section>
  );
}

function SingleStop({ single, latest }: { single: Release; latest: boolean }) {
  return (
    <li className="relative flex flex-col">
      <Dot className={latest ? "bg-accent" : "bg-cream"} />
      <div className="md:mt-5 text-[11px] uppercase tracking-[0.2em] opacity-60">
        {formatReleaseDate(single.date, false)}
      </div>
      {single.cover ? (
        <Image
          src={single.cover}
          alt={`${single.title} cover artwork`}
          width={600}
          height={600}
          className="mt-3 aspect-square w-full object-cover shadow-xl"
        />
      ) : (
        <div className="mt-3 aspect-square w-full flex items-center justify-center p-4 text-center text-xl font-extrabold bg-gradient-to-br from-orange/60 to-teal/50 shadow-xl">
          {single.title}
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-lg font-extrabold">{single.title}</span>
        {latest && (
          <span className="text-[9px] uppercase tracking-[0.2em] bg-accent text-bg px-1.5 py-0.5 font-bold">
            Latest
          </span>
        )}
      </div>
      <a
        href={single.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-teal"
      >
        Listen →
      </a>
    </li>
  );
}

function Dot({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`hidden md:block w-[15px] h-[15px] rounded-full ${className}`}
    />
  );
}
