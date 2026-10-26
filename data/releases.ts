import { externalLinks, socials } from "@/data/socials";

export type ReleaseDate = { year: number; month: number; day: number };

export type Release = {
  title: string;
  kind: "single" | "album";
  date: ReleaseDate;
  /** Square artwork; `null` renders a typographic placeholder tile. */
  cover: string | null;
  href: string;
  note?: string;
};

const bandcamp =
  socials.find((s) => s.platform === "bandcamp")?.url ?? externalLinks.presave;

export const singles: Release[] = [
  {
    title: "High Fever",
    kind: "single",
    date: { year: 2026, month: 5, day: 15 },
    cover: "/img/high_fever_cover.jpg",
    href: bandcamp,
  },
  {
    title: "Ogres",
    kind: "single",
    date: { year: 2026, month: 9, day: 25 },
    cover: "/img/ogres-cover.jpg",
    href: bandcamp,
  },
  {
    title: "King of Beggars",
    kind: "single",
    date: { year: 2026, month: 10, day: 23 },
    cover: null,
    href: bandcamp,
  },
];

export const featuredAlbum = {
  title: "Rites",
  kind: "album",
  date: { year: 2026, month: 11, day: 27 },
  cover: "/img/rites-cover.png",
  href: externalLinks.presave,
} as const satisfies Release;

export const vinylSingle = {
  label: 'High Fever / Ogres — limited 7" vinyl',
  href: externalLinks.presave,
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Calendar formatting without `Date`, so server and client always agree. */
export function formatReleaseDate(
  { year, month, day }: ReleaseDate,
  withYear = true,
): string {
  const base = `${months[month - 1]} ${day}`;
  return withYear ? `${base}, ${year}` : base;
}
