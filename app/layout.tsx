import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, openingHours, ARTIST_NAME } from "@/lib/content";
import {
  instagramUrl,
  facebookUrl,
  tiktokUrl,
  BOOKING_EMAIL,
  STUDIO_PHONE,
} from "@/lib/links";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "STB Studio — Tattoo Studio, Kathmandu";
const DESCRIPTION = `A tattoo sanctuary for art and self-expression. Custom tattoos, collectible art objects, and design experiences by ${ARTIST_NAME} in Kathmandu, Nepal.`;

// The share card is declared here by absolute URL rather than through the
// `app/opengraph-image.*` file convention. That convention resolves image URLs
// as metadataBase + basePath + filename, and since siteConfig.url already ends
// in the basePath, it emitted a doubled `/stb-studio/stb-studio/...` that 404s
// on the deployed site. An absolute URL is never rewritten.
const OG_IMAGE = {
  url: `${siteConfig.url}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — tattoo studio in ${siteConfig.location}`,
};
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: TITLE,
    template: "%s — STB Studio",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    url: siteConfig.url,
    locale: "en_GB",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

// Structured data so search engines read the studio as a local business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: siteConfig.name,
  description: DESCRIPTION,
  url: siteConfig.url,
  email: BOOKING_EMAIL,
  telephone: STUDIO_PHONE,
  image: `${siteConfig.url}/opengraph-image.png`,
  logo: `${siteConfig.url}/icon.png`,
  priceRange: "Rs 1,500 – Rs 60,000+",
  currenciesAccepted: "NPR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  areaServed: { "@type": "City", name: "Kathmandu" },
  founder: { "@type": "Person", name: ARTIST_NAME },
  sameAs: [instagramUrl(), facebookUrl(), tiktokUrl()].filter((url) => url !== "#"),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...openingHours.days],
    opens: "11:00",
    closes: "19:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-warm-white text-ink font-sans text-body antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-eyebrow focus:uppercase focus:text-warm-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
