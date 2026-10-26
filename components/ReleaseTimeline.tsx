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
    <section
      aria-label={`Singles from ${featuredAlbum.title}`}
      className="px-6 md:px-12 pb-16 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <ol className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
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

        <VinylPromo />
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

function VinylPromo() {
  return (
    <div className="relative mt-16 md:mt-20 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center p-6 md:p-10 border border-cream/15 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-accent"
      />
      <Image
        src={vinylSingle.image}
        alt={`${vinylSingle.title} ${vinylSingle.format}`}
        width={1200}
        height={748}
        className="vinyl-img block w-full h-auto"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="text-[28px] md:text-[34px] font-extrabold tracking-[0.04em] leading-tight">
          {vinylSingle.format} available now
        </div>
        <div className="mt-3 text-[13px] uppercase tracking-[0.18em] text-accent">
          {vinylSingle.sides.map((s, i) => (
            <span key={s.side}>
              {i > 0 && " / "}
              Side {s.side} &ldquo;{s.title}&rdquo;
            </span>
          ))}
        </div>
        <div className="mt-2 text-[12px] uppercase tracking-[0.16em] opacity-60">
          {vinylSingle.details}
        </div>
        <a
          href={vinylSingle.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2.5 px-7 py-3.5 bg-cream text-[#0a0a0a] text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-accent hover:text-bg"
        >
          Get the 7&quot;
        </a>
      </div>
    </div>
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
