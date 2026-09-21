import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { CtaBand, HowItWorks, ServiceGrid } from "@/components/sections";
import { CallButtons, Container, Faqs, PageHero, SectionHeading } from "@/components/ui";
import { services, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = find((await params).slug);
  if (!s) return {};
  return {
    title: `${s.title} in Hawke’s Bay`,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { images: [`/images/${s.img}.jpg`] },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const s = find((await params).slug);
  if (!s) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        eyebrow="Our services"
        title={s.title}
        intro={s.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.title }]}
        image={{ src: `/images/${s.img}.jpg`, alt: s.alt }}
      >
        <CallButtons />
      </PageHero>

      <section className="bg-white py-14 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line p-6 lg:p-10">
            <h2 className="font-display text-2xl font-extrabold text-navy lg:text-[28px]">What’s included</h2>
            <ul className="mt-6 space-y-4">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-[17px] leading-relaxed">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-mist p-6 lg:p-10">
            <h2 className="font-display text-2xl font-extrabold text-navy lg:text-[28px]">Ideal for</h2>
            <ul className="mt-6 space-y-4">
              {s.idealFor.map((i) => (
                <li key={i} className="flex gap-3 text-[17px] leading-relaxed">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-sky text-brand">
                    <Icon name="heart" size={14} strokeWidth={2.5} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed">
              Have a Total Mobility card? Let us know when you book.{" "}
              <Link href="/total-mobility" className="font-semibold text-brand hover:underline">
                How Total Mobility works
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-14 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Questions" title="Good to know." />
            <p className="mt-4 leading-relaxed">
              Anything else? Call or text{" "}
              <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <Faqs items={s.faqs} />
        </Container>
      </section>

      <HowItWorks />

      <section className="bg-mist py-14 lg:py-24">
        <Container>
          <SectionHeading eyebrow="More services" title="Other ways we can help." />
          <div className="mt-10">
            <ServiceGrid exclude={s.slug} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
