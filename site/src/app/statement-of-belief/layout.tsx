import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Belief",
  description:
    "Read the core beliefs and doctrinal foundation of Revival Grace Ministry, rooted in Scripture and the teachings of Jesus Christ.",
  alternates: { canonical: "https://www.revivalgrace.com/statement-of-belief" },
  openGraph: { images: [{ url: "/images/hero/belief-bg.jpg", width: 1200, height: 630, alt: "Statement of Belief" }] },
};

export default function StatementOfBeliefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
