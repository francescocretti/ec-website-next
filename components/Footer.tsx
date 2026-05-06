import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-6 py-7 md:px-12 md:py-8 border-t border-cream/10 text-center md:text-left">
      <div className="text-[11px] uppercase tracking-[0.2em] opacity-35">
        Electric Circus © 2026
      </div>
      <SocialIcons gap="gap-[22px]" />
      <div className="text-[11px] tracking-[0.08em] opacity-25">
        Killer Groove Records
      </div>
    </footer>
  );
}
