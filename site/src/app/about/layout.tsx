import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Revival Grace Ministry and Pastor Ewang Nelson, a Christ-centered community devoted to igniting a revival of the Word in the hearts of believers.",
  alternates: { canonical: "https://www.revivalgrace.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
