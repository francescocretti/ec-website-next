import { externalLinks } from "@/data/socials";

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

export const singles: Release[] = [
  {
    title: "High Fever",
    kind: "single",
    date: { year: 2026, month: 5, day: 15 },
    cover: "/img/high_fever_cover.jpg",
    href: "https://youtu.be/uNS9vfXN380",
  },
  {
    title: "Ogres",
    kind: "single",
    date: { year: 2026, month: 9, day: 25 },
    cover: "/img/ogres-cover.jpg",
    href: "https://youtu.be/RqDT3_tY9pg",
  },
  {
    title: "King of Beggars",
    kind: "single",
    date: { year: 2026, month: 10, day: 23 },
    cover: null,
    href: "https://open.spotify.com/album/7fv0k3fZlLnYtJ3y0Jsz7n",
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
  title: "High Fever / Ogres",
  format: '7" vinyl',
  details: "Limited edition · 500 copies only",
  image: "/img/high-fever-mockup.png",
  href: "https://electriccircus3.bandcamp.com/album/high-fever-ogres",
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
