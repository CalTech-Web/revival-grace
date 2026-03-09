import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotionals | Revival Grace Ministry",
  description: "Spirit-filled devotionals handpicked to strengthen your faith and awaken your purpose. Explore categories on financial breakthrough, Christian living, prayer, holiness, and more.",
};

export default function DevotionalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
