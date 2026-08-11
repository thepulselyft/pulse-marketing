import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thepulselyft.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PulseLyft — Meta Ads Agency for Performance-Driven Brands",
    template: "%s — PulseLyft",
  },
  description:
    "PulseLyft is a Meta ads agency running Facebook and Instagram campaigns, creative testing, and CAPI-led measurement for brands that scale spend on real ROAS—not guesswork.",
  keywords: [
    "Meta ads agency",
    "Facebook ads agency",
    "Instagram ads management",
    "Meta ads management",
    "performance marketing agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PulseLyft",
    title: "PulseLyft — Meta Ads Agency for Performance-Driven Brands",
    description:
      "Facebook and Instagram campaigns, creative testing, and CAPI-led measurement engineered around CAC and payback—not vanity metrics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseLyft — Meta Ads Agency for Performance-Driven Brands",
    description:
      "Facebook and Instagram campaigns, creative testing, and CAPI-led measurement engineered around CAC and payback—not vanity metrics.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PulseLyft",
  url: siteUrl,
  description:
    "Meta ads agency running Facebook and Instagram campaigns, performance creative, SEO, and analytics for revenue-focused brands.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Meta ads management",
    "Facebook advertising",
    "Instagram advertising",
    "SEO",
    "Performance creative",
    "Marketing attribution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
