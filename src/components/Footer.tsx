import Image from "next/image";
import Link from "next/link";
import { areaPages, nav, services, site } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-deep pt-12 pb-8 text-[#d5deec] lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-3">
              <Image src="/images/logo-full.png" alt={site.name} width={603} height={493} className="h-auto w-40 lg:w-44" />
            </Link>
            <p className="mt-5 max-w-[320px] leading-relaxed text-[#b3c1d6]">
              Door-to-door accessible transport for Napier, Hastings and wider Hawke’s Bay.
            </p>
          </div>
          <FooterCol title="Explore" links={nav} />
          <FooterCol title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <div>
            <p className="text-[15px] font-bold text-brand-soft">Book a ride</p>
            <a href={site.phoneHref} className="mt-4 block font-display text-[28px] font-extrabold text-white">
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-[#b3c1d6]">Call or text to book</p>
            <p className="mt-6 text-[15px] font-bold text-brand-soft">Areas</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-medium">
              {areaPages.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="hover:text-white">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[#b3c1d6]">{site.tagline}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#1c2a40] pt-6 text-sm text-[#b3c1d6] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <a href="https://kiwitechlabs.com" target="_blank" rel="noopener noreferrer" className="kiwitech-credit">
            <Image src="/assets/brand/kiwitechlabs-logo.webp" width={40} height={40} alt="" unoptimized />
            <span>Designed by <strong>kiwitechlabs.com</strong></span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-[15px] font-bold text-brand-soft">{title}</p>
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
