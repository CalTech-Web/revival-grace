"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Flame } from "lucide-react";
import { devotionals, getDevotionalBySlug } from "@/data/devotionals";
import EbookDownloadButton from "@/components/EbookDownloadButton";

// Change this slug to update the devotional of the week
const FEATURED_SLUG = "how-to-find-happiness-secrets-no-one-told-you";

const verses = [
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:5-6" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", ref: "Romans 8:28" },
  { text: "The Lord is my light and my salvation, whom shall I fear? The Lord is the stronghold of my life, of whom shall I be afraid?", ref: "Psalm 27:1" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
  { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
  { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
  { text: "Have I not commanded you? Be strong and courageous. Do not be terrified; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
  { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", ref: "Galatians 5:22-23" },
  { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.", ref: "Isaiah 41:10" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25" },
  { text: "No weapon forged against you will prevail, and you will refute every tongue that accuses you.", ref: "Isaiah 54:17" },
  { text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", ref: "Psalm 51:10" },
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
  { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
  { text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", ref: "Matthew 6:33" },
  { text: "Wait for the Lord; be strong and take heart and wait for the Lord.", ref: "Psalm 27:14" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
  { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
  { text: "Draw near to God, and he will draw near to you.", ref: "James 4:8" },
];

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function HeroSection() {
  const [verse, setVerse] = useState(verses[0]);
  const [dateStr, setDateStr] = useState("");
  const latest = getDevotionalBySlug(FEATURED_SLUG.split("/")) || devotionals[devotionals.length - 1];
  const second = devotionals[devotionals.length - 2];

  useEffect(() => {
    const now = new Date();
    setVerse(verses[getDayOfYear(now) % verses.length]);
    setDateStr(now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }, []);

  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left - Pastor card */}
          <Link href="/about" className="lg:col-span-3 group">
            <div className="relative rounded-lg overflow-hidden h-[280px] lg:h-full">
              <Image
                src="/images/pastor-ewang-2.webp"
                alt="Pastor Ewang Nelson"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">
                  Senior Pastor
                </p>
                <h3 className="font-serif text-white text-[17px] font-bold leading-snug">
                  Grace for Times of Trouble
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  What the apostle Paul&apos;s secret to contentment in every situation?
                </p>
              </div>
            </div>
          </Link>

          {/* Center - Featured devotional */}
          <Link href={`/devotionals/${latest.slug}`} className="lg:col-span-5 group">
            <div className="relative rounded-lg overflow-hidden h-[340px] lg:h-full">
              {latest.image && (
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-5">
                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                  {dateStr}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white/60">
                  Devotional of the Week
                </p>
                <h2 className="font-serif text-white text-2xl sm:text-[28px] font-bold leading-tight mb-2">
                  {latest.title}
                </h2>
                <p className="text-white/60 text-[13px] leading-relaxed line-clamp-2">
                  {latest.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Right - Stacked panels */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Verse of the Day */}
            <div className="bg-white rounded-lg p-5 flex-1">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                Verse of the Day
              </p>
              <p className="font-serif text-heading text-[15px] font-medium leading-relaxed mb-1">
                {verse.text}
              </p>
              <p className="text-[13px] text-text mt-2">
                {verse.ref}
              </p>
            </div>

            {/* Featured eBook */}
            <EbookDownloadButton className="bg-white rounded-lg p-5 flex-1 text-left hover:shadow-md transition-shadow cursor-pointer">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                Free eBook
              </p>
              <div className="flex gap-3">
                <Flame className="w-7 h-7 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif font-bold text-heading text-[15px] leading-snug mb-1">
                    The Flame of Revival
                  </h3>
                  <p className="text-[13px] text-text leading-relaxed">
                    Ignite your faith with a powerful guide to spiritual awakening.
                  </p>
                </div>
              </div>
            </EbookDownloadButton>

            {/* This week */}
            <Link href={`/devotionals/${second.slug}`} className="bg-white rounded-lg p-5 flex-1 group">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                Also This Week
              </p>
              <h3 className="font-serif font-bold text-heading text-[15px] leading-snug group-hover:text-primary transition-colors">
                {second.title}
              </h3>
              <p className="text-[13px] text-text mt-1 line-clamp-2">
                {second.excerpt}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
