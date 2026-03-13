import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Verified",
  description: "Confirm your Revival Grace Ministry subscription to access all devotionals.",
  robots: { index: false, follow: false },
};

export default function VerifiedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
