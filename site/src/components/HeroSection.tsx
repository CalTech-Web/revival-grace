"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Flame } from "lucide-react";
import { devotionals } from "@/data/devotionals";

const verses = [
  { text: "My Father who gave them to me is greater than anyone else; no one can snatch them from him.", ref: "John 10:29" },
  { text: "I the Lord will grab you by the hand and tell you, Don't be afraid! I myself will help you.", ref: "Isaiah 41:13" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:5-6" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
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

  useEffect(() => {
    const now = new Date();
    setVerse(verses[getDayOfYear(now) % verses.length]);
    setDateStr(now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }, []);

  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {/* Left - Large featured image */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden min-h-[280px]">
            <Image
              src="/images/pastor-ewang-2.webp"
              alt="Pastor Ewang Nelson"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                Senior Pastor
              </p>
              <h3 className="text-white font-serif text-lg font-bold leading-snug">
                Pastor Ewang Nelson
              </h3>
              <p className="text-white/70 text-xs mt-1">
                Founder of Revival Grace Ministry
              </p>
            </div>
          </div>

          {/* Center - Featured devotional */}
          <Link href={`/devotionals/${latest.slug}`} className="lg:col-span-5 group">
            <div className="relative rounded-xl overflow-hidden min-h-[320px] lg:min-h-full">
              {latest.image && (
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3">
                  {dateStr}
                </div>
                <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-2">
                  Today&apos;s Devotion
                </p>
                <h2 className="text-white font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  {latest.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {latest.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Right - Stacked info panels */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Verse of the Day */}
            <div className="bg-white rounded-xl p-6 flex-1">
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                Verse of the Day
              </p>
              <blockquote className="font-serif text-heading text-lg italic leading-relaxed mb-3">
                &ldquo;{verse.text}&rdquo;
              </blockquote>
              <p className="text-primary font-semibold text-sm">
                {verse.ref}
              </p>
            </div>

            {/* Free eBook */}
            <div className="bg-white rounded-xl p-6 flex-1">
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                Free eBook
              </p>
              <div className="flex items-start gap-4">
                <Flame className="w-8 h-8 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif font-bold text-heading mb-1">
                    The Flame of Revival
                  </h3>
                  <p className="text-text text-sm leading-relaxed mb-2">
                    Ignite your faith with a powerful guide to spiritual awakening.
                  </p>
                  <Link href="/contact" className="text-sm font-semibold text-primary hover:text-primary-light transition-colors">
                    Download Free &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
