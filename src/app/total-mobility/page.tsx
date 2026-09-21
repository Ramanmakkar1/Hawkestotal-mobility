import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { CtaBand } from "@/components/sections";
import { CallButtons, Container, Faqs, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Total Mobility Scheme in Hawke’s Bay",
  description:
    "How the Total Mobility scheme works in Hawke’s Bay, who is eligible, and how to use your Total Mobility card with Hawke’s Bay Total Mobility. Call 027 352 1635.",
  alternates: { canonical: "/total-mobility" },
};

const steps = [
  {
    title: "Book your trip",
    body: "Call or text us and let us know you’re a Total Mobility cardholder when you book.",
  },
  {
    title: "Show your card",
    body: "Have your Total Mobility card with you and show it to your driver at the start of the trip.",
  },
  {
    title: "Pay your share",
    body: "The scheme covers part of the fare, and you pay the rest. We’ll let you know what to expect when you book.",
  },
];

const faqs = [
  {
    q: "What is Total Mobility?",
    a: "Total Mobility is a New Zealand government-funded scheme that helps people with long-term impairments get around by giving them a discount on the cost of trips with approved transport providers.",
  },
  {
    q: "Who can get a Total Mobility card?",
    a: "The scheme is for people with a long-term impairment that stops them using public transport safely or independently. Eligibility is decided through an assessment with an approved assessment agency.",
  },
  {
    q: "How do I apply?",
    a: "Contact an approved assessment agency in Hawke’s Bay to arrange an assessment. Hawke’s Bay Regional Council runs the scheme locally and can point you to an agency.",
  },
  {
    q: "How much is the discount?",
    a: "The discount and any maximum fare are set by the scheme and can change. Check the current rates with Hawke’s Bay Regional Council, or ask us when you book.",
  },
  {
    q: "Can I use my card in a wheelchair?",
    a: "Yes. Our vans are wheelchair accessible, so you can stay seated in your own chair for the whole trip.",
  },
];

export default function TotalMobilityPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        eyebrow="Total Mobility"
        title="Travel with your Total Mobility card."
        intro="The Total Mobility scheme helps people with long-term impairments get around by reducing the cost of their trips. Tell us you’re a cardholder when you book, and we’ll take care of the rest."
        crumbs={[{ label: "Home", href: "/" }, { label: "Total Mobility" }]}
        image={{
          src: "/images/van-wheelchair.jpg",
          alt: "Driver guiding a man in a wheelchair onto the rear ramp of the Hawke’s Bay Total Mobility van",
        }}
      >
        <CallButtons />
      </PageHero>

      <section className="bg-white py-14 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Using your card with us"
            title="Three easy steps."
            intro="Using your Total Mobility card is simple, whether it’s your first trip or your hundredth."
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
        </Container>
      </section>

      <section className="bg-mist py-14 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-card lg:p-10">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-sky text-brand">
              <Icon name="access" size={28} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-extrabold text-navy lg:text-[28px]">Who the scheme is for</h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              Total Mobility is for people with a long-term impairment that makes it hard to use buses and other public
              transport safely or on their own. That can include physical, sensory, intellectual and psychological
              impairments.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-card lg:p-10">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-sky text-brand">
              <Icon name="shield" size={28} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-extrabold text-navy lg:text-[28px]">How to get a card</h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              Cards are issued after an assessment with an approved assessment agency. In our region the scheme is run by
              Hawke’s Bay Regional Council, who can tell you which agencies do assessments and the current fare rules.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
          <SectionHeading eyebrow="Questions" title="Total Mobility FAQs." />
          <Faqs items={faqs} />
        </Container>
      </section>

      <CtaBand eyebrow="Cardholders welcome" title="Ready to book your trip?" intro="Call or text us, mention your Total Mobility card, and tell us where you need to go." />
    </>
  );
}
