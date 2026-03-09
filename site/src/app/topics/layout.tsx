import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics | Revival Grace Ministry",
  description: "Explore faith-building devotional topics covering financial wisdom, Christian living, ministry, the Holy Spirit, spiritual warfare, holiness, and prayer and fasting.",
};

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
