import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Revival Grace Ministry. We would love to hear from you, answer your questions, and connect with you in faith.",
  alternates: { canonical: "https://www.revivalgrace.com/contact" },
  openGraph: { images: [{ url: "/images/hero/contact-bg.webp", width: 1200, height: 630, alt: "Contact Revival Grace Ministry" }] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
