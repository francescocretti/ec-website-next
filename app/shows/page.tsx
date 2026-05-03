import type { Metadata } from "next";
import ShowRow from "@/components/ShowRow";
import { getShows } from "@/lib/bandsintown";

export const metadata: Metadata = {
  title: "Shows",
  description: "Electric Circus tour dates.",
};

export default async function ShowsPage() {
  const { shows, source } = await getShows();

  return (
    <main className="max-w-215 mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-20">
      <div className="flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent before:block before:w-7 before:h-px before:bg-accent after:block after:w-7 after:h-px after:bg-accent">
        Shows
      </div>

      <div className="h-12" />

      {source === "past" && (
        <div className="mb-5 text-center">
          <p className="mt-4 text-[13px] opacity-60 tracking-[0.04em] mb-5">
            No upcoming dates announced yet. A look back at recent shows below.
          </p>
          <h2 className="text-xl sm:text-xl font-extrabold uppercase tracking-[0.08em] text-cream">
            Past Shows
          </h2>
        </div>
      )}

      {shows.length === 0 ? (
        <p className="py-20 text-center text-[13px] opacity-50 tracking-[0.08em]">
          No shows scheduled at the moment. Stay tuned.
        </p>
      ) : (
        <div className="flex flex-col">
          {shows.map((show) => (
            <ShowRow key={show.id} show={show} />
          ))}
        </div>
      )}

      <div className="mt-15 text-center text-xs opacity-35 tracking-[0.1em]">
        {source === "past"
          ? "New dates coming soon."
          : "More dates coming soon."}
      </div>
    </main>
  );
}
