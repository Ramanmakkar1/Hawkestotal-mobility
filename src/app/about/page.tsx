import type { Metadata } from "next";
import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import { AboutSplit, CtaBand } from "@/components/sections";
import { CallButtons, Container, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Hawke’s Bay Total Mobility is a local, door-to-door accessible transport service for Napier, Hastings and Hawke’s Bay. Honest, reliable service. Call 027 352 1635.",
  alternates: { canonical: "/about" },
};

const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Honest",
    body: "Clear, upfront communication about your trip, your pickup time and what to expect — no surprises.",
  },
  {
    icon: "check",
    title: "Reliable",
    body: "We turn up when we say we will, so you can count on getting to the things that matter.",
  },
  {
    icon: "heart",
    title: "Service",
    body: "Patient, respectful help from your door to your destination, treating every passenger with dignity.",
  },
];

const expect = [
  "A friendly driver who helps you from your door to the van",
  "Wheelchairs secured safely with floor restraints and seatbelts",
  "No rushing — we take the time you need getting in and out",
  "Help with bags, walkers and mobility aids",
  "A clean, comfortable, wheelchair-accessible van",
  "Easy booking by phone or text",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local, accessible transport — done properly."
        intro="Hawke’s Bay Total Mobility helps people who find it hard to get around keep living independently. We provide door-to-door transport in wheelchair-accessible vans across Napier, Hastings and wider Hawke’s Bay."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={{ src: "/images/van-ramp.jpg", alt: "Driver helping a woman in a wheelchair up the ramp of the Hawke’s Bay Total Mobility van" }}
      >
        <CallButtons />
      </PageHero>

      <section className="bg-white py-14 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Honest. Reliable. Service."
            intro="Three words on every one of our vans — and the promise behind every trip."
            center
            className="max-w-[720px]"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {values.map((v) => (
              <li key={v.title} className="rounded-3xl bg-mist p-6 md:p-8">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon name={v.icon} size={26} strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">{v.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AboutSplit cta={false} />

      <section className="bg-white py-14 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_560px] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Every trip" title="What you can expect." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {expect.map((e) => (
                <li key={e} className="flex gap-3 text-[17px] leading-relaxed">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/van-driving.jpg"
            alt="The Hawke’s Bay Total Mobility van driving along a coastal road"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover lg:rounded-[32px]"
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
