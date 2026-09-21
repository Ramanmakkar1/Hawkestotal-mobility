import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CtaBand, HowItWorks, ServiceGrid } from "@/components/sections";
import { CallButtons, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Accessible Transport Services",
  description:
    "Wheelchair and mobility transport in Hawke’s Bay: medical appointments, shopping, social outings, airport transfers and local travel. Call 027 352 1635.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Accessible transport for every part of life."
        intro="From hospital appointments to coffee with friends, we provide door-to-door wheelchair and mobility transport across Napier, Hastings and wider Hawke’s Bay."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        path="/services"
      >
        <CallButtons />
      </PageHero>
      <section className="bg-white py-14 lg:py-24">
        <Container>
          <ServiceGrid />
        </Container>
      </section>
      <HowItWorks />
      <CtaBand eyebrow="Not sure which service?" title="Just tell us where you need to go." intro="Call or text us with your trip and any mobility needs — we’ll sort out the rest." />
    </>
  );
}
