import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Revival Grace Ministry and Pastor Ewang Nelson, a Christ-centered community devoted to igniting a revival of the Word in the hearts of believers.",
  alternates: { canonical: "https://www.revivalgrace.com/about" },
  openGraph: { images: [{ url: "/images/hero/about-bg.jpg", width: 1200, height: 630, alt: "About Revival Grace Ministry" }] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
