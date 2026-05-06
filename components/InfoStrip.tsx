import Link from "next/link";
import { externalLinks } from "@/data/socials";

type Cell = {
  eyebrow: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

const cells: Cell[] = [
  {
    eyebrow: "About",
    title: "Electric Circus",
    text: "Electric Circus blends funk grooves, afrobeat, psychedelia, and global influences into a vibrant, immersive sound.",
    linkLabel: "Read bio",
    href: "/bio",
  },
  {
    eyebrow: "Live",
    title: "Shows",
    text: "Catch Electric Circus on the road. Tour dates and tickets available now.",
    linkLabel: "All dates",
    href: "/shows",
  },
  {
    eyebrow: "Label",
    title: "Killer Groove",
    text: "Killer Groove Records is a Rome-based independent record label and music publisher specializing in Soul, Funk, Rock Steady, Early Reggae, Afrobeat, Jazz, R&B and cinematic groove.",
    linkLabel: "About the label",
    href: externalLinks.label,
    external: true,
  },
];

export default function InfoStrip() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-cream/[0.08]">
      {cells.map((cell, i) => (
        <Cell
          key={cell.eyebrow}
          cell={cell}
          isLast={i === cells.length - 1}
        />
      ))}
    </section>
  );
}

function Cell({ cell, isLast }: { cell: Cell; isLast: boolean }) {
  const linkClass =
    "group inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.18em] text-cream font-medium transition-colors hover:text-teal";

  return (
    <div
      className={`relative p-8 md:p-12 transition-colors hover:bg-cream/[0.02] border-b md:border-b-0 border-cream/[0.08] ${
        isLast ? "" : "md:border-r"
      } md:last:border-b-0`}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-3">
        {cell.eyebrow}
      </div>
      <div className="text-[28px] font-extrabold tracking-[0.06em] mb-2.5 text-accent">
        {cell.title}
      </div>
      <p className="text-[13px] leading-[1.7] opacity-55 max-w-[280px]">
        {cell.text}
      </p>
      {cell.external ? (
        <a
          href={cell.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <span>{cell.linkLabel}</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      ) : (
        <Link href={cell.href} className={linkClass}>
          <span>{cell.linkLabel}</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
