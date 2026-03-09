import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Revival Grace Ministry",
  description: "Get in touch with Revival Grace Ministry. Reach out with questions, prayer requests, or to connect with our community of believers.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
