import type { Show } from "@/lib/bandsintown";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "Europe/Rome",
});

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  timeZone: "Europe/Rome",
});

export default function ShowRow({ show }: { show: Show }) {
  const date = show.date ? new Date(`${show.date}T20:00:00+02:00`) : null;
  const day = date ? dayFormatter.format(date) : "—";
  const monthYear = date ? monthFormatter.format(date) : "";

  return (
    <div className="relative grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr_auto] items-center gap-5 sm:gap-8 py-7 border-b border-cream/10 first:border-t transition-colors hover:bg-cream/[0.04]">
      <div className="flex flex-col gap-0.5">
        <span className="text-[22px] sm:text-[28px] font-extrabold leading-none text-cream">
          {day}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] opacity-50">
          {monthYear}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-base sm:text-lg font-bold text-cream leading-tight">
          {show.venue}
        </span>
        <span className="text-[13px] opacity-60 tracking-[0.04em]">
          {show.city}
          {show.event ? ` — ${show.event}` : ""}
        </span>
      </div>

      {show.soldOut ? (
        <span className="hidden sm:inline-flex items-center text-[9px] font-semibold uppercase tracking-[0.22em] text-orange border border-orange/60 px-3 py-1.5">
          Sold out
        </span>
      ) : show.url ? (
        <a
          href={show.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center text-[9px] font-semibold uppercase tracking-[0.22em] text-cream border border-cream/40 px-3 py-1.5 transition-colors hover:border-cream"
        >
          More info
        </a>
      ) : (
        <span className="hidden sm:block" aria-hidden="true" />
      )}
    </div>
  );
}
