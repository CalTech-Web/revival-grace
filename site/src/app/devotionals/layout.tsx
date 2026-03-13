import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotionals",
  description:
    "Explore weekly Spirit-filled devotionals from Revival Grace Ministry covering prayer, holiness, faith, financial wisdom, and Christian living.",
  alternates: { canonical: "https://www.revivalgrace.com/devotionals" },
  openGraph: { images: [{ url: "/images/hero/devotionals-bg.webp", width: 1200, height: 630, alt: "Revival Grace Ministry Devotionals" }] },
};

export default function DevotionalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
