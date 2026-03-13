import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotionals",
  description:
    "Explore weekly Spirit-filled devotionals from Revival Grace Ministry covering prayer, holiness, faith, financial wisdom, and Christian living.",
  alternates: { canonical: "https://www.revivalgrace.com/devotionals" },
};

export default function DevotionalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
