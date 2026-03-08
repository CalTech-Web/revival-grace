import HeroSection from "@/components/HeroSection";
import FeaturedSections from "@/components/FeaturedSections";
import PastorSection from "@/components/PastorSection";
import VerseOfTheDay from "@/components/VerseOfTheDay";
import DevotionalOfWeek from "@/components/DevotionalOfWeek";
import WhyRevivalMatters from "@/components/WhyRevivalMatters";
import NewsletterSection from "@/components/NewsletterSection";

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
