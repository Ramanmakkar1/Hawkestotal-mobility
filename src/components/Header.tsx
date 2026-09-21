"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "./icons";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo-emblem.png"
        alt=""
        width={454}
        height={311}
        loading="eager"
        className={compact ? "h-11 w-auto" : "h-11 w-auto lg:h-[60px]"}
      />
      <span className="font-display leading-[1.1]">
        <span className="block text-[11px] font-extrabold tracking-[0.04em] text-navy lg:text-[13px]">HAWKE’S BAY</span>
        <span className="block text-[15px] font-extrabold text-brand lg:text-xl">TOTAL MOBILITY</span>
        <span className="hidden text-[9px] font-semibold tracking-[0.06em] text-navy lg:block">
          HONEST RELIABLE SERVICE
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 lg:px-0 lg:py-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`group relative py-2 text-[15px] xl:text-base ${isActive(item.href) ? "font-semibold text-navy" : "font-medium text-ink hover:text-navy"}`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-[3px] w-6 rounded-full bg-brand transition-opacity ${isActive(item.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-brand px-3.5 font-semibold text-white hover:bg-brand-dark xl:px-6"
          >
            <Icon name="phone" />
            <span className="sr-only xl:not-sr-only">{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-12 items-center justify-center rounded-xl bg-sky text-navy lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white px-5 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block border-b border-line py-4 text-lg text-navy ${isActive(item.href) ? "font-bold" : "font-medium"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
