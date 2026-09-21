import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hawke’s Bay Total Mobility | Wheelchair & Mobility Transport",
    template: "%s | Hawke’s Bay Total Mobility",
  },
  description:
    "Door-to-door wheelchair and mobility transport across Napier, Hastings and Hawke’s Bay — medical appointments, errands, social outings and airport transfers. Call 027 352 1635.",
  openGraph: {
    siteName: site.name,
    images: ["/images/van-ramp.jpg"],
    locale: "en_NZ",
    type: "website",
  },
  icons: { icon: "/images/logo-emblem.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: "Door-to-door wheelchair and mobility transport across Hawke’s Bay.",
  url: site.url,
  telephone: "+64 27 352 1635",
  image: `${site.url}/images/van-ramp.jpg`,
  logo: `${site.url}/images/logo-full.png`,
  slogan: "Honest Reliable Service",
  areaServed: ["Napier", "Hastings", "Havelock North", "Taradale", "Hawke’s Bay"].map((name) => ({ "@type": "Place", name })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
