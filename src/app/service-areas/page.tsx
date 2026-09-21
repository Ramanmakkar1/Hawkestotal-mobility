import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { CtaBand, ServiceGrid } from "@/components/sections";
import { CallButtons, Container, PageHero, SectionHeading } from "@/components/ui";
import { areas } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Service Areas: Napier & Hastings",
  description:
    "Accessible door-to-door transport across Napier, Hastings, Havelock North, Taradale, Flaxmere, Clive and wider Hawke’s Bay. Call 027 352 1635.",
  path: "/service-areas",
  image: "/images/van-driving.jpg",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Across Napier, Hastings and the Bay."
        intro="We provide door-to-door accessible transport throughout Napier and Hastings and the towns around them. Going further? Longer trips across Hawke’s Bay can be arranged."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        path="/service-areas"
        image={{ src: "/images/van-driving.jpg", alt: "The Hawke’s Bay Total Mobility van driving along the coast" }}
      >
        <CallButtons />
      </PageHero>

      <section className="bg-white py-14 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Where we go" title="Areas we cover." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {areas.map((a) => (
              <li key={a.name} className="relative rounded-3xl border border-line p-6 transition-shadow has-[a]:hover:shadow-card">
                <span className="flex size-11 items-center justify-center rounded-xl bg-sky text-brand">
                  <Icon name="pin" size={22} />
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-navy">
                  {a.slug ? (
                    <Link href={`/service-areas/${a.slug}`} className="after:absolute after:inset-0 hover:text-brand">
                      {a.name}
                    </Link>
                  ) : (
                    a.name
                  )}
                </h2>
                <p className="mt-2 leading-relaxed">{a.body}</p>
                {a.slug && (
                  <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand">
                    {a.name} transport <Icon name="arrow" size={16} />
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-10 rounded-2xl bg-sky px-6 py-5 text-[17px] text-navy">
            Not sure if we cover your address? <strong>Call or text 027 352 1635</strong> and we’ll let you know.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-14 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Our services" title="What we can help with." />
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
