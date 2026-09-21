import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbLd, JsonLd } from "@/lib/seo";
import { Icon, type IconName } from "./icons";

const variants = {
  primary: "bg-brand text-white shadow-[0_8px_20px_rgb(42_102_204/0.28)] hover:bg-brand-dark hover:shadow-[0_10px_24px_rgb(42_102_204/0.36)]",
  outline: "bg-white text-navy ring-2 ring-inset ring-navy hover:bg-navy hover:text-white",
  white: "bg-white text-navy hover:bg-sky",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  trailing,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: IconName;
  trailing?: IconName;
  className?: string;
}) {
  const cls = `inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl px-7 text-[17px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`;
  const inner = (
    <>
      {icon && <Icon name={icon} />}
      {children}
      {trailing && <Icon name={trailing} />}
    </>
  );
  // tel:/sms: links must stay plain anchors; internal routes get client navigation.
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  as: H = "h2",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto text-center" : ""} ${className}`}>
      <p
        className={`inline-flex items-center gap-2.5 text-[15px] font-bold ${light ? "text-brand-soft" : "text-brand"} ${center ? "justify-center" : ""}`}
      >
        <span aria-hidden className={`h-[3px] w-6 rounded-full ${light ? "bg-brand-soft" : "bg-brand"}`} />
        {eyebrow}
      </p>
      <H
        className={`mt-4 font-display text-[30px] leading-[1.12] font-extrabold tracking-tight text-balance sm:text-[44px] ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </H>
      {intro && (
        <p className={`mt-4 text-[17px] leading-relaxed sm:text-[19px] ${light ? "text-[#d5deec]" : "text-ink"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 lg:px-8 xl:px-0 ${className}`}>{children}</div>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="font-medium text-brand hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Top-of-page banner for inner pages: breadcrumb, H1, intro, optional photo. */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  path,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  crumbs: { label: string; href?: string }[];
  /** This page's path — used for the BreadcrumbList structured data. */
  path: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-mist pt-8 pb-14 lg:pt-12 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[560px] rounded-full bg-[radial-gradient(closest-side,rgb(42_102_204/0.14),transparent)]" />
      <JsonLd data={breadcrumbLd(crumbs, path)} />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid items-center gap-10 ${image ? "lg:grid-cols-[1fr_520px] lg:gap-16" : ""}`}>
          <div className={image ? "" : "max-w-[820px]"}>
            <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
            {children && <div className="mt-8">{children}</div>}
          </div>
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              width={1536}
              height={1024}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[3/2] w-full rounded-3xl object-cover lg:rounded-[32px]"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

export function CallButtons({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:gap-4 ${className}`}>
      <Button href="tel:+64273521635" icon="phone" variant={light ? "white" : "primary"}>
        Call 027 352 1635
      </Button>
      <Button href="/contact" variant={light ? "primary" : "outline"} icon="calendar">
        Book a ride
      </Button>
    </div>
  );
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-5 transition-colors open:bg-mist/60 hover:bg-mist/60 lg:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky text-brand transition-transform group-open:rotate-45">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
