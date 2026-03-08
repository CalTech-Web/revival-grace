import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Revival Grace Ministry",
    template: "%s | Revival Grace Ministry",
  },
  description:
    "A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.",
  keywords: [
    "Revival Grace Ministry",
    "Pastor Ewang Nelson",
    "Christian revival",
    "devotionals",
    "prayer",
    "holiness",
    "spiritual growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
