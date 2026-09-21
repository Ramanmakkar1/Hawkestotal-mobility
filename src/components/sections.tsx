import Image from "next/image";
import Link from "next/link";
import { aboutPoints, benefits, services, steps } from "@/lib/site";
import { Icon } from "./icons";
import { Button, CallButtons, Container, SectionHeading } from "./ui";

export function Why() {
  return (
    <section className="bg-mist py-16 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why choose us"
            title="Transport you can count on."
            intro="Dependable accessible transport, delivered with care, comfort and local knowledge — so getting out never feels like a hassle."
          />
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-lg font-semibold text-brand hover:underline">
            More about us <Icon name="arrow" />
          </Link>
        </div>
        <ul className="divide-y divide-line overflow-hidden rounded-[28px] bg-white shadow-card">
          {benefits.map((b, i) => (
            <li key={b.title} className="reveal flex gap-5 p-6 sm:gap-7 sm:p-9">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_8px_20px_rgb(42_102_204/0.25)] sm:size-16">
                <Icon name={b.icon} size={28} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-brand">0{i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-navy sm:text-2xl">{b.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-ink">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Always all six services, so the grid is two full rows of three. `current` marks the page you are on. */
export function ServiceGrid({ current }: { current?: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {services.map((s) => {
        const isCurrent = s.slug === current;
        return (
          <li key={s.slug} className="reveal">
            <Link
              href={`/services/${s.slug}`}
              aria-current={isCurrent ? "page" : undefined}
              className={`group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:block sm:rounded-3xl sm:p-0 ${isCurrent ? "border-brand ring-2 ring-brand" : "border-line"}`}
            >
              {isCurrent && (
                <span className="absolute top-3 right-3 z-10 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white sm:top-4 sm:right-4">
                  You’re viewing
                </span>
              )}
              <span className="block size-24 shrink-0 overflow-hidden rounded-xl sm:aspect-[8/5] sm:h-auto sm:w-full sm:rounded-none">
                <Image
                  src={`/images/${s.img}.jpg`}
                  alt=""
                  width={768}
                  height={480}
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 96px"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <div className="sm:px-7 sm:pt-6 sm:pb-7">
                <h3 className="font-display text-[17px] font-bold text-navy sm:text-[22px]">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink sm:mt-2.5 sm:text-base">{s.short}</p>
                <span className="mt-3 hidden items-center gap-1.5 text-[15px] font-semibold text-brand group-hover:underline sm:inline-flex">
                  Learn more <Icon name="arrow" size={16} />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function AboutSplit({ cta = true }: { cta?: boolean }) {
  return (
    <section className="bg-mist py-14 lg:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[560px_1fr] lg:gap-20">
        <Image
          src="/images/about.jpg"
          alt="Driver securing a wheelchair with floor restraints inside an accessible van"
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="order-2 aspect-[4/3] w-full rounded-3xl object-cover lg:order-1 lg:aspect-[14/15] lg:rounded-[32px]"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About us"
            title="A more accessible Hawke’s Bay."
            intro="Local accessible transport that helps people stay independent, connected and confident — run by people who know the region."
          />
          <ul className="mt-8 space-y-5">
            {aboutPoints.map((p) => (
              <li key={p.title} className="reveal flex gap-4">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="check" size={16} strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy lg:text-xl">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink lg:text-[17px]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          {cta && (
            <Button href="/about" variant="outline" trailing="arrow" className="mt-9 w-full sm:w-auto">
              Learn more about us
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white py-14 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps."
          intro="Tell us where you need to go and what support you need. We’ll take care of the journey."
          center
          className="max-w-[720px]"
        />
        <div className="relative mt-12 lg:mt-16">
          <span aria-hidden className="absolute top-7 bottom-7 left-7 w-0.5 bg-line md:right-[16.66%] md:bottom-auto md:left-[16.66%] md:h-0.5 md:w-auto" />
          <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xl font-extrabold text-white ring-8 ring-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy md:mt-2 md:text-[22px]">{s.title}</h3>
                <p className="mt-2 max-w-[300px] text-[17px] leading-relaxed text-ink">{s.body}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
        <CallButtons className="mt-10 justify-center lg:mt-14" />
      </Container>
    </section>
  );
}

export function CtaBand({
  eyebrow = "More than transport",
  title = (
    <>
      Supporting
      <br className="hidden lg:block" /> independent lives.
    </>
  ),
  intro = "Accessible transport that keeps you connected to family, friends and everyday life across Hawke’s Bay.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="bg-white py-14 lg:py-28">
      <Container>
        <div className="reveal relative grid overflow-hidden rounded-3xl bg-navy lg:grid-cols-[1fr_520px] lg:rounded-[32px]">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 size-[420px] rounded-full bg-[radial-gradient(closest-side,rgb(42_102_204/0.35),transparent)]" />
          <Image
            src="/images/community.jpg"
            alt="Man in a wheelchair choosing fruit at a Hastings farmers market"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="aspect-[8/5] w-full object-cover lg:order-2 lg:aspect-auto lg:h-full"
          />
          <div className="relative p-6 sm:p-10 lg:p-16">
            <SectionHeading eyebrow={eyebrow} title={title} intro={intro} light />
            <ul className="mt-7 space-y-3">
              {["Stay connected with family and community", "Get to appointments and everyday essentials", "Travel locally with greater confidence"].map((v) => (
                <li key={v} className="flex items-center gap-3 font-medium text-white">
                  <Icon name="check" strokeWidth={3} className="shrink-0 text-brand-soft" />
                  {v}
                </li>
              ))}
            </ul>
            <CallButtons light className="mt-9" />
          </div>
        </div>
      </Container>
    </section>
  );
}
