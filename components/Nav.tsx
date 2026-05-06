"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";

const links = [
  { href: "/bio", label: "Bio" },
  { href: "/shows", label: "Shows" },
  { href: "/contacts", label: "Contacts" },
];

const SCROLL_THRESHOLD = 10;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isOpaque = scrolled || menuOpen;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 transition-colors duration-300 ${
          isOpaque
            ? "bg-black/30 backdrop-blur-sm"
            : "bg-gradient-to-b from-[rgba(184,91,101,0.6)] to-transparent"
        }`}
      >
        <Link href="/" className="block relative z-10" aria-label="Electric Circus — home">
          <Image
            src="/img/EC_panna.png"
            alt="Electric Circus"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-5 md:gap-9">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`hidden md:inline-block text-xs font-medium uppercase tracking-[0.18em] text-cream transition-opacity ${
                  isActive
                    ? "opacity-100 border-b border-cream pb-[2px]"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="hidden md:flex">
            <SocialIcons gap="gap-5" />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-10 w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-cream"
          >
            <span
              className={`block h-px w-6 bg-cream transition-transform duration-300 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-transform duration-300 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-90 md:hidden bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-12 px-6 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-2xl font-medium uppercase tracking-[0.2em] text-cream transition-opacity ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialIcons gap="gap-7" iconSize={22} />
      </div>
    </>
  );
}
