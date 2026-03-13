import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Revival Grace Ministry. We would love to hear from you, answer your questions, and connect with you in faith.",
  alternates: { canonical: "https://www.revivalgrace.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
