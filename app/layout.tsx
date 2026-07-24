import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, openingHours } from "@/lib/content";
import { instagramUrl, facebookUrl, tiktokUrl, BOOKING_EMAIL } from "@/lib/links";

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
const DESCRIPTION =
  "A tattoo sanctuary for art and self-expression. Custom tattoos, collectible art objects, and design experiences by Susmita Tamang Bhandari in Kathmandu, Nepal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: TITLE,
    template: "%s — STB Studio",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  founder: { "@type": "Person", name: "Susmita Tamang Bhandari" },
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
