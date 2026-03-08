"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Flame } from "lucide-react";
import { devotionals } from "@/data/devotionals";

const verses = [
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:5-6" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
];

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function HeroSection() {
  const [verse, setVerse] = useState(verses[0]);
  const [dateStr, setDateStr] = useState("");
  const latest = devotionals[devotionals.length - 1];
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
                  Today&apos;s Devotion
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
            <div className="bg-white rounded-lg p-5 flex-1">
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
            </div>

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
