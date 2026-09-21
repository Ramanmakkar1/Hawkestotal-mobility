import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Hawke’s Bay Total Mobility | Wheelchair & Mobility Transport",
  description:
    "Door-to-door wheelchair and mobility transport across Napier, Hastings and Hawke’s Bay — medical appointments, errands, social outings and airport transfers. Call 027 352 1635.",
  openGraph: {
    title: "Hawke’s Bay Total Mobility",
    description:
      "Reliable, accessible door-to-door transport across Hawke’s Bay. Call 027 352 1635.",
    images: ["/images/van-ramp.jpg"],
    locale: "en_NZ",
    type: "website",
  },
  icons: { icon: "/images/logo-emblem.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
