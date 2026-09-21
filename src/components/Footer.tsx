import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-deep pt-12 pb-8 text-[#d5deec] lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-3" aria-label={`${site.name} — home`}>
              <Image src="/images/logo-full.png" alt={site.name} width={603} height={493} className="h-auto w-40 lg:w-44" />
            </Link>
            <p className="mt-5 max-w-[320px] leading-relaxed text-[#b3c1d6]">
              Door-to-door accessible transport for Napier, Hastings and wider Hawke’s Bay.
            </p>
          </div>
          <FooterCol title="Explore" links={nav} />
          <FooterCol title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand-soft uppercase">Book a ride</p>
            <a href={site.phoneHref} className="mt-4 block font-display text-[28px] font-extrabold text-white">
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-[#b3c1d6]">Call or text to book</p>
            <p className="mt-4 text-[#b3c1d6]">{site.tagline}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#1c2a40] pt-6 text-sm text-[#8a99b0] sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-[13px] font-semibold tracking-[0.1em] text-brand-soft uppercase">{title}</p>
      <ul className="mt-4 space-y-3 font-medium">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
