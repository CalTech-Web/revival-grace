"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, DollarSign, Heart, Flame, Shield, Cross, HandHelping } from "lucide-react";
import { categories, getDevotionalsByCategory } from "@/data/devotionals";
import NewsletterSection from "@/components/NewsletterSection";

const categoryIcons: Record<string, typeof BookOpen> = {
  "bible-guide-to-financial-breakthrough": DollarSign,
  "christian-living": Heart,
  "christian-ministry": HandHelping,
  "faith-and-holy-spirit": Flame,
  "free-from-demonic-oppressions": Shield,
  "ultimate-guide-to-holiness": Cross,
  "understanding-prayer-and-fasting": BookOpen,
};

const categoryColors: Record<string, { bg: string; icon: string; border: string }> = {
  "bible-guide-to-financial-breakthrough": { bg: "from-green-500/20 to-green-600/10", icon: "text-green-600", border: "border-green-500/20" },
  "christian-living": { bg: "from-pink-500/20 to-pink-600/10", icon: "text-pink-600", border: "border-pink-500/20" },
  "christian-ministry": { bg: "from-blue-500/20 to-blue-600/10", icon: "text-blue-600", border: "border-blue-500/20" },
  "faith-and-holy-spirit": { bg: "from-amber-500/20 to-amber-600/10", icon: "text-amber-600", border: "border-amber-500/20" },
  "free-from-demonic-oppressions": { bg: "from-red-500/20 to-red-600/10", icon: "text-red-600", border: "border-red-500/20" },
  "ultimate-guide-to-holiness": { bg: "from-teal-500/20 to-teal-600/10", icon: "text-teal-600", border: "border-teal-500/20" },
  "understanding-prayer-and-fasting": { bg: "from-indigo-500/20 to-indigo-600/10", icon: "text-indigo-600", border: "border-indigo-500/20" },
};

export default function TopicsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/hero/topics-bg.webp" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-white/70 mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore Our Topics
            </h1>
            <p className="text-xl text-white/90 font-medium mb-4">
              Discover Faith-Building Categories for Every Season of Life
            </p>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              Revival Grace Ministry offers a rich collection of devotionals organized into meaningful topics that address every area of the Christian walk. Whether you are seeking financial wisdom rooted in Scripture, deepening your prayer life, pursuing holiness, or standing firm against spiritual battles, our topics provide a guided path to grow closer to God and live out your faith with purpose and power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
              Browse by Topic
            </h2>
            <p className="text-text max-w-2xl mx-auto">
              Select a topic to explore devotionals that speak to your spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat.slug] || BookOpen;
              const colors = categoryColors[cat.slug] || { bg: "from-black/10 to-black/5", icon: "text-black/60", border: "border-black/10" };
              const count = getDevotionalsByCategory(cat.slug).length;

              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={`/devotionals#${cat.slug}`}
                    className={`block rounded-2xl p-8 bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-md transition-all group h-full`}
                  >
                    <Icon className={`w-10 h-10 ${colors.icon} mb-4`} strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-text text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <p className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider`}>
                      {count} {count === 1 ? "Devotional" : "Devotionals"}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
