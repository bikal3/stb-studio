import type { Metadata } from "next";
import { Playfair_Display, Inter, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STB Studio — Tattoo Studio, Kathmandu",
  description:
    "A tattoo sanctuary for art and self-expression. Custom tattoos, collectible art objects, and design experiences by Susmita Tamang Bomjan in Kathmandu, Nepal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${nothingYouCouldDo.variable}`}>
      <body className="bg-warm-white text-ink font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
