"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "./SocialIcons";

const links = [
  { href: "/bio", label: "Bio" },
  { href: "/shows", label: "Shows" },
  { href: "/contacts", label: "Contacts" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-100 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 bg-gradient-to-b from-[rgba(184,91,101,0.6)] to-transparent">
      <Link href="/" className="block" aria-label="Electric Circus — home">
        <Image
          src="/img/EC_panna.png"
          alt="Electric Circus"
          width={180}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </Link>

      <div className="flex items-center gap-9">
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
        <SocialIcons gap="gap-5" />
      </div>
    </nav>
  );
}
