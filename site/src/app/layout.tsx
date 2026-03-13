import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import CookieConsent from "@/components/CookieConsent";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.revivalgrace.com";
const siteDescription =
  "A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "jdZJ67s1f0V5Dpq9vDl8yr5fL8VKQt-20J6VhGjjbzA",
  },
  title: {
    default: "Revival Grace Ministry",
    template: "%s | Revival Grace Ministry",
  },
  description: siteDescription,
  keywords: [
    "Revival Grace Ministry",
    "Pastor Ewang Nelson",
    "Christian revival",
    "devotionals",
    "prayer",
    "holiness",
    "spiritual growth",
  ],
  openGraph: {
    type: "website",
    siteName: "Revival Grace Ministry",
    title: "Revival Grace Ministry",
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Revival Grace Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revival Grace Ministry",
    description: siteDescription,
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S14TX78GLQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-S14TX78GLQ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Revival Grace Ministry",
              url: "https://www.revivalgrace.com",
              logo: "https://www.revivalgrace.com/images/logo.jpg",
              description: siteDescription,
              founder: {
                "@type": "Person",
                name: "Pastor Ewang Nelson",
                jobTitle: "Founder & Senior Pastor",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <SubscriptionProvider>
          <Navbar />
          <main className="pt-[104px]">{children}</main>
          <Footer />
          <SubscriptionPopup />
          <CookieConsent />
        </SubscriptionProvider>
      </body>
    </html>
  );
}
