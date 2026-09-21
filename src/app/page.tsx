import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { AboutSplit, CtaBand, HowItWorks, ServiceGrid, Why } from "@/components/sections";
import { Button, Container, SectionHeading } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Wheelchair Transport Hawke’s Bay | Hawke’s Bay Total Mobility",
  description:
    "Door-to-door wheelchair and mobility transport in Napier, Hastings and Hawke’s Bay — appointments, shopping, outings and airport trips. Call 027 352 1635.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Why />
      <section className="bg-white py-14 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Getting you where you need to be."
              intro="Flexible accessible transport for the journeys that keep life moving."
              className="lg:max-w-[840px]"
            />
            <Link href="/services" className="inline-flex items-center gap-2 pb-1.5 text-lg font-semibold text-brand hover:underline">
              View all services <Icon name="arrow" />
            </Link>
          </div>
          <div className="mt-10 lg:mt-14">
            <ServiceGrid />
          </div>
        </Container>
      </section>
      <AboutSplit />
      <HowItWorks />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 lg:pt-18 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute -top-48 -left-40 size-[640px] rounded-full bg-[radial-gradient(closest-side,rgb(42_102_204/0.10),transparent)]" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-12 xl:grid-cols-[1fr_520px]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sky px-3.5 py-2 text-sm font-semibold text-brand">
            <Icon name="pin" size={16} />
            Accessible transport across Hawke’s Bay
          </p>
          <h1 className="mt-6 font-display text-[29px] leading-[1.1] font-extrabold tracking-tight text-navy sm:text-5xl xl:text-[54px]">
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
            <Button href="/contact" variant="outline" icon="calendar">
              Book a ride
            </Button>
          </div>
        </div>

        <div className="relative lg:pr-10 lg:pb-10">
          <div aria-hidden className="absolute inset-0 top-10 left-10 hidden rounded-[36px] bg-sky lg:block" />
          <Image
            src="/images/van-ramp.jpg"
            alt="Hawke’s Bay Total Mobility driver helping a woman in a wheelchair up the ramp of our branded van on Napier’s Marine Parade"
            width={1536}
            height={1024}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover object-[35%_center] lg:aspect-[5/4] lg:rounded-[32px]"
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

const facts = [
  { icon: "access", title: "Wheelchair-accessible vans", body: "Ramp access and secure restraints" },
  { icon: "heart", title: "Door-to-door help", body: "From your front door to the entrance" },
  { icon: "pin", title: "Local to Hawke’s Bay", body: "Napier, Hastings and surrounds" },
  { icon: "phone", title: "Easy to book", body: "Call or text 027 352 1635" },
] as const;

function TrustStrip() {
  return (
    <div className="relative z-10 -mt-10 bg-[linear-gradient(transparent_50%,var(--color-mist)_50%)] lg:-mt-14">
      <Container>
        <ul className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-float lg:grid-cols-4">
          {facts.map((f, i) => (
            <li
              key={f.title}
              className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 lg:p-7 ${i % 2 === 0 ? "border-r border-line" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-brand">
                <Icon name={f.icon} size={24} />
              </span>
              <span>
                <span className="block font-display text-[15px] font-bold text-navy sm:text-base">{f.title}</span>
                <span className="mt-0.5 block text-sm text-ink">{f.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
