import Image from "next/image";
import { Header } from "@/components/Header";
import { Icon } from "@/components/icons";
import { Button, Container, SectionHeading } from "@/components/ui";
import { aboutPoints, benefits, nav, services, site, steps } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: "Door-to-door wheelchair and mobility transport across Hawke’s Bay.",
  telephone: "+64 27 352 1635",
  image: "/images/van-ramp.jpg",
  areaServed: site.areas.map((name) => ({ "@type": "Place", name })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Why />
        <Services />
        <About />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="scroll-mt-24 bg-white pt-8 pb-14 lg:pt-18 lg:pb-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sky px-3.5 py-2 text-sm font-semibold text-brand">
            <Icon name="pin" size={16} />
            Accessible transport across Hawke’s Bay
          </p>
          <h1 className="mt-6 font-display text-[29px] leading-[1.1] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[54px]">
            Reliable rides.
            <br />
            More independence.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink sm:text-xl">
            Door-to-door wheelchair and mobility transport for appointments, errands, community visits and everyday
            travel across Hawke’s Bay.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={site.phoneHref} icon="phone">
              Call {site.phoneDisplay}
            </Button>
            <Button href={site.bookHref} variant="outline" icon="calendar">
              Book a ride
            </Button>
          </div>
          <ul className="mt-7 flex flex-col gap-3 text-[15px] font-medium text-ink sm:flex-row sm:flex-wrap sm:gap-x-6">
            {["Door-to-door help", "Wheelchair-accessible vans", "Local Hawke’s Bay drivers"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" size={18} strokeWidth={3} className="text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pr-10 lg:pb-10">
          <div aria-hidden className="absolute inset-0 top-10 left-10 hidden rounded-[36px] bg-sky lg:block" />
          <Image
            src="/images/van-ramp.jpg"
            alt="Hawke’s Bay Total Mobility driver helping a woman in a wheelchair up the ramp of our branded van on Napier’s Marine Parade"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[5/4] lg:rounded-[32px] object-[35%_center]"
          />
          <a
            href={site.phoneHref}
            className="absolute -bottom-5 left-4 flex items-center gap-3.5 rounded-2xl bg-white py-4 pr-6 pl-4 shadow-float lg:bottom-16 lg:-left-8"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-brand text-white">
              <Icon name="phone" />
            </span>
            <span>
              <span className="block text-sm font-medium text-ink">Call to book</span>
              <span className="block font-display text-[22px] font-extrabold text-navy">{site.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-mist py-14 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading eyebrow="Why choose us" title="Transport you can count on." className="lg:max-w-[700px]" />
          <p className="text-[17px] leading-relaxed text-ink lg:max-w-[440px] lg:text-[19px]">
            Dependable accessible transport, delivered with care, comfort and local knowledge — so getting out never
            feels like a hassle.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {benefits.map((b) => (
            <li key={b.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-card md:flex-col md:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-brand md:size-14">
                <Icon name={b.icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy md:text-[22px]">{b.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink md:mt-3 md:text-[17px]">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-14 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Getting you where you need to be."
            intro="Flexible accessible transport for the journeys that keep life moving."
            className="lg:max-w-[840px]"
          />
          <a href={site.phoneHref} className="inline-flex items-center gap-2 pb-1.5 text-lg font-semibold text-brand hover:underline">
            Ask about a trip <Icon name="arrow" />
          </a>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-white p-2.5 sm:block sm:rounded-3xl sm:p-0"
            >
              <Image
                src={`/images/${s.img}.jpg`}
                alt=""
                width={768}
                height={480}
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 96px"
                className="size-24 shrink-0 rounded-xl object-cover sm:aspect-[8/5] sm:h-auto sm:w-full sm:rounded-none"
              />
              <div className="sm:px-7 sm:pt-6 sm:pb-7">
                <h3 className="font-display text-[17px] font-bold text-navy sm:text-[22px]">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink sm:mt-2.5 sm:text-base">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-mist py-14 lg:py-28">
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
              <li key={p.title} className="flex gap-4">
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
          <Button href={site.phoneHref} variant="outline" trailing="arrow" className="mt-9 w-full sm:w-auto">
            Talk to our team
          </Button>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-14 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps."
          intro="Tell us where you need to go and what support you need. We’ll take care of the journey."
          center
          className="max-w-[720px]"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-3xl bg-mist p-5 md:flex-col md:p-8">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-extrabold text-white md:size-13 md:text-[22px]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy md:text-[22px]">{s.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink md:mt-3 md:text-[17px]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-14">
          <Button href={site.bookHref} trailing="arrow">
            Book your ride
          </Button>
          <Button href={site.phoneHref} variant="outline" icon="phone">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Community() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white pb-14 lg:pb-28">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-navy lg:grid-cols-[1fr_520px] lg:rounded-[32px]">
          <Image
            src="/images/community.jpg"
            alt="Man in a wheelchair choosing fruit at a Hastings farmers market"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="aspect-[8/5] w-full object-cover lg:order-2 lg:aspect-auto lg:h-full"
          />
          <div className="p-6 sm:p-10 lg:p-16">
            <SectionHeading
              eyebrow="More than transport"
              title={
                <>
                  Supporting
                  <br className="hidden lg:block" /> independent lives.
                </>
              }
              intro="Accessible transport that keeps you connected to family, friends and everyday life across Hawke’s Bay."
              light
            />
            <ul className="mt-7 space-y-3">
              {["Stay connected with family and community", "Get to appointments and everyday essentials", "Travel locally with greater confidence"].map((v) => (
                <li key={v} className="flex items-center gap-3 font-medium text-white">
                  <Icon name="check" strokeWidth={3} className="shrink-0 text-brand-soft" />
                  {v}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={site.phoneHref} variant="white" icon="phone">
                Call {site.phoneDisplay}
              </Button>
              <Button href={site.bookHref} icon="calendar">
                Book a ride
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep pt-12 pb-8 text-[#d5deec] lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_200px_1fr] lg:gap-16">
          <div>
            <div className="inline-block rounded-2xl bg-white px-4 py-3">
              <Image src="/images/logo-full.png" alt={site.name} width={603} height={493} className="h-auto w-40 lg:w-48" />
            </div>
            <p className="mt-5 max-w-[340px] leading-relaxed text-[#b3c1d6]">
              Door-to-door accessible transport for Napier, Hastings and wider Hawke’s Bay.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand-soft uppercase">Explore</p>
            <ul className="mt-4 space-y-3 font-medium">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-brand-soft uppercase">Book a ride</p>
            <a href={site.phoneHref} className="mt-4 block font-display text-[28px] font-extrabold text-white">
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-[#b3c1d6]">{site.areas.join(" · ")}</p>
            <p className="mt-4 text-[#b3c1d6]">{site.tagline}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-[#1c2a40] pt-6 text-sm text-[#8a99b0]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
