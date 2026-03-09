import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Revival Grace Ministry",
  description: "Learn about Revival Grace Ministry and Pastor Ewang Nelson. A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
