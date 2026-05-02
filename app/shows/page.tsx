import type { Metadata } from "next";
import ShowRow from "@/components/ShowRow";
import { shows } from "@/data/shows";

export const metadata: Metadata = {
  title: "Shows",
  description: "Electric Circus tour dates 2026.",
};

export default function ShowsPage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-20">
      <div className="flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent before:block before:w-7 before:h-px before:bg-accent after:block after:w-7 after:h-px after:bg-accent">
        Live Shows
      </div>

      <div className="h-12" />

      <div className="flex flex-col">
        {shows.map((show) => (
          <ShowRow key={show.date + show.venue} show={show} />
        ))}
      </div>

      <div className="mt-15 text-center text-xs opacity-35 tracking-[0.1em]">
        More dates coming soon.
      </div>
    </main>
  );
}
