import HeroSection from "@/components/HeroSection";
import FeaturedSections from "@/components/FeaturedSections";
import PastorSection from "@/components/PastorSection";
import DevotionalOfWeek from "@/components/DevotionalOfWeek";
import VerseOfTheDay from "@/components/VerseOfTheDay";
import WhyRevivalMatters from "@/components/WhyRevivalMatters";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSections />
      <PastorSection />
      <DevotionalOfWeek />
      <VerseOfTheDay />
      <WhyRevivalMatters />
      <NewsletterSection />
    </>
  );
}
