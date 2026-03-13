import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturedSections from "@/components/FeaturedSections";
import PastorSection from "@/components/PastorSection";
import VerseOfTheDay from "@/components/VerseOfTheDay";
import DevotionalOfWeek from "@/components/DevotionalOfWeek";
import WhyRevivalMatters from "@/components/WhyRevivalMatters";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Revival Grace Ministry | Igniting a Revival of the Word",
  description:
    "A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living through weekly devotionals, free eBooks, and Spirit-filled content.",
  alternates: { canonical: "https://www.revivalgrace.com" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSections />
      <PastorSection />
      <VerseOfTheDay />
      <DevotionalOfWeek />
      <WhyRevivalMatters />
      <NewsletterSection />
    </>
  );
}
