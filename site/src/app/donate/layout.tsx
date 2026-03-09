import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Revival Grace Ministry",
  description: "Support Revival Grace Ministry. Your generosity helps spread the flame of revival and provide free devotionals, eBooks, and spiritual resources to believers worldwide.",
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
