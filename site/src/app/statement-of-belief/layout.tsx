import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Belief | Revival Grace Ministry",
  description: "The foundational truths that guide Revival Grace Ministry. Our beliefs on Scripture, the Trinity, Jesus Christ, salvation, the Holy Spirit, the Church, prayer, and the return of Christ.",
};

export default function StatementOfBeliefLayout({ children }: { children: React.ReactNode }) {
  return children;
}
