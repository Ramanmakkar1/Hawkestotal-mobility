import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Hawke’s Bay Total Mobility handles the personal information you share when booking a ride.",
  path: "/privacy",
});

const sections = [
  {
    h: "What we collect",
    p: "When you book, we collect the details needed to provide your trip: your name, phone number, pickup and destination addresses, trip times, and any mobility needs you tell us about.",
  },
  {
    h: "How we use it",
    p: "We use your information only to arrange, carry out and follow up on your transport, and to contact you about your bookings. If you use a Total Mobility card, trip details may be shared with the scheme as required to process the subsidy.",
  },
  {
    h: "This website",
    p: "When you submit an online booking request, your details are sent securely to Splitforms, our form processing provider, which stores the request and sends us a notification. Splitforms also helps us understand form usage and incomplete requests. We use your booking details to arrange your trip and contact you. You can also book by calling or texting us.",
  },
  {
    h: "Your rights",
    p: "Under the New Zealand Privacy Act 2020 you can ask to see or correct the personal information we hold about you. Contact us to make a request.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        intro={<p>We only collect what we need to get you where you’re going, and we keep it safe.</p>}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
        path="/privacy"
      />
      <section className="bg-white py-20 lg:py-28">
        <Container className="max-w-[820px] space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-[26px] font-normal tracking-[-0.02em] text-ink">{s.h}</h2>
              <p className="mt-3 text-[17px] leading-relaxed">{s.p}</p>
            </div>
          ))}
          <p className="text-[17px]">
            Questions? Call or text{" "}
            <a href={site.phoneHref} className="font-semibold text-brand underline underline-offset-4">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
