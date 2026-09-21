import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { CtaBand, HowItWorks, ServiceGrid } from "@/components/sections";
import { CallButtons, Container, Faqs, PageHero, SectionHeading } from "@/components/ui";
import { abs, businessId, JsonLd, pageMeta } from "@/lib/seo";
import { areaPages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((a) => ({ slug: a.slug }));
}

const find = (slug: string) => areaPages.find((a) => a.slug === slug);

export async function generateMetadata({ params }: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const a = find((await params).slug);
  if (!a) return {};
  return pageMeta({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/service-areas/${a.slug}`,
    image: `/images/${a.img}.jpg`,
  });
}

export default async function AreaPage({ params }: PageProps<"/service-areas/[slug]">) {
  const a = find((await params).slug);
  if (!a) notFound();
  const path = `/service-areas/${a.slug}`;
  const others = areaPages.filter((o) => o.slug !== a.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Wheelchair and mobility transport in ${a.name}`,
          serviceType: "Accessible door-to-door transport",
          url: abs(path),
          provider: { "@id": businessId },
          areaServed: { "@type": "City", name: a.name },
        }}
      />
      <PageHero
        eyebrow={`Service area · ${a.name}`}
        title={`Accessible transport in ${a.name}.`}
        intro={a.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: a.name }]}
        path={path}
        image={{ src: `/images/${a.img}.jpg`, alt: a.imgAlt }}
      >
        <CallButtons />
      </PageHero>

      <section className="bg-white py-14 lg:py-24">
        <Container>
          <SectionHeading eyebrow={`Popular trips in ${a.name}`} title="Where we take people." className="max-w-[760px]" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {a.trips.map((t) => (
              <li key={t.title} className="flex gap-4 rounded-3xl bg-mist p-6 lg:p-8">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy">{t.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[860px] text-[17px] leading-relaxed lg:text-[19px]">{a.local}</p>
        </Container>
      </section>

      <section className="bg-mist py-14 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Questions" title={`${a.name} FAQs.`} />
            <p className="mt-6 font-semibold text-navy">Other areas we cover</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/service-areas/${o.slug}`}
                    className="inline-block rounded-full bg-white px-4 py-2 font-medium text-brand ring-1 ring-line hover:ring-brand"
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Faqs items={a.faqs} />
        </Container>
      </section>

      <section className="bg-white py-14 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Our services" title={`What we can help with in ${a.name}.`} />
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      <HowItWorks />
      <CtaBand />
    </>
  );
}
