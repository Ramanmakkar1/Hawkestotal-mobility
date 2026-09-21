import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Icon, type IconName } from "@/components/icons";
import { Container, Faqs, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Ride",
  description:
    "Book accessible door-to-door transport in Hawke’s Bay. Call or text 027 352 1635, or send a booking request online.",
  alternates: { canonical: "/contact" },
};

const ways: { icon: IconName; title: string; body: string; href: string; cta: string }[] = [
  { icon: "phone", title: "Call us", body: "The quickest way to book or ask a question.", href: site.phoneHref, cta: site.phoneDisplay },
  { icon: "calendar", title: "Text us", body: "Send your trip details and we’ll text back to confirm.", href: site.bookHref, cta: `Text ${site.phoneDisplay}` },
  { icon: "pin", title: "Where we go", body: "Napier, Hastings, Havelock North, Taradale and wider Hawke’s Bay.", href: "/service-areas", cta: "See service areas" },
];

const faqs = [
  { q: "How far ahead should I book?", a: "As early as you can, especially for appointments and flights. For same-day trips, call us and we’ll do our best." },
  { q: "What details do you need?", a: "Your name, pickup address, destination, date and time, whether you need a return trip, and any mobility aids you use." },
  { q: "Can I use my Total Mobility card?", a: "Yes — let us know you’re a cardholder when you book and have your card with you on the day." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a ride."
        intro="Call or text 027 352 1635, or send us your trip details below. We’ll confirm your booking and pickup time."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-mist pb-14 lg:pb-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
          <BookingForm />
          <aside className="space-y-4">
            {ways.map((w) => (
              <a key={w.title} href={w.href} className="block rounded-3xl bg-white p-6 shadow-card transition-shadow hover:shadow-float">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon name={w.icon} size={22} />
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-navy">{w.title}</h2>
                <p className="mt-1.5 leading-relaxed">{w.body}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand">
                  {w.cta} <Icon name="arrow" size={16} />
                </span>
              </a>
            ))}
          </aside>
        </Container>
      </section>

      <section className="bg-white py-14 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
          <SectionHeading eyebrow="Booking questions" title="Good to know." />
          <Faqs items={faqs} />
        </Container>
      </section>
    </>
  );
}
