type Item = { text: string; accent?: boolean };

const items: Item[] = [
  { text: "Electric Circus" },
  { text: "High Fever", accent: true },
  { text: "Out May 15" },
  { text: "Killer Groove Records" },
  { text: "New Single" },
  { text: "High Fever", accent: true },
  { text: "Electric Circus" },
  { text: "Out May 15" },
  { text: "Killer Groove Records" },
  { text: "New Single" },
];

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="border-y border-cream/10 bg-cream/[0.02] py-3.5 overflow-hidden whitespace-nowrap"
    >
      <div className="ticker-track inline-flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`px-10 text-[13px] tracking-[0.28em] ${
              item.accent ? "text-accent opacity-100" : "text-cream opacity-30"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
