import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Revival Grace Ministry with your generous donation. Help us spread the Word and nurture spiritual growth in believers worldwide.",
  alternates: { canonical: "https://www.revivalgrace.com/donate" },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
