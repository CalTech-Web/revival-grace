import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Browse devotional topics including prayer and fasting, holiness, faith, Christian living, financial breakthrough, and freedom from demonic oppression.",
  alternates: { canonical: "https://www.revivalgrace.com/topics" },
  openGraph: { images: [{ url: "/images/hero/topics-bg.jpg", width: 1200, height: 630, alt: "Devotional Topics" }] },
};

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
