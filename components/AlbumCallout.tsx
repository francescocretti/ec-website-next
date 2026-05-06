import { externalLinks } from "@/data/socials";

export default function AlbumCallout() {
  return (
    <div className="relative mt-18 md:mt-[72px] p-7 md:p-10 border border-cream/15 flex flex-col gap-2.5 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-accent"
      />
      <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
        New Album
      </div>
      <div className="text-[28px] font-extrabold tracking-[0.04em] leading-tight">
        Rites
      </div>
      <div className="text-[13px] opacity-55 tracking-[0.08em] mt-1">
        Out 2026 · Killer Groove Records
      </div>
      <p className="text-sm leading-[1.8] opacity-70 mt-2 max-w-[580px]">
        Mix &apos;70s jazz-funk and classic afrobeat with a modern groovy twist,
        add a touch of psychedelic flavor, and sip it through an exotic straw.
        Nine tracks, each with its own world, influences, and character,
        telling the story of our way of making music. Vintage electric pianos,
        funk guitars, and sax sections mingle with solid bass and drum grooves,
        enriched by percussion, synths, and subtle sound design.
      </p>
      <a
        href={externalLinks.presave}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start inline-flex items-center gap-2.5 mt-7 px-7 py-3.5 bg-cream text-[#0a0a0a] text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-accent hover:text-bg"
      >
        Pre-save Single
      </a>
    </div>
  );
}
