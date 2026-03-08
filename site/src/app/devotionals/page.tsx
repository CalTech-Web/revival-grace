"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, DollarSign, Heart, Flame, Shield, Cross, HandHelping, ChevronRight } from "lucide-react";
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

const categoryColors: Record<string, { bg: string; icon: string }> = {
  "bible-guide-to-financial-breakthrough": { bg: "from-green-500/20 to-green-600/10", icon: "text-green-600" },
  "christian-living": { bg: "from-pink-500/20 to-pink-600/10", icon: "text-pink-600" },
  "christian-ministry": { bg: "from-blue-500/20 to-blue-600/10", icon: "text-blue-600" },
  "faith-and-holy-spirit": { bg: "from-secondary/20 to-secondary/10", icon: "text-secondary" },
  "free-from-demonic-oppressions": { bg: "from-red-500/20 to-red-600/10", icon: "text-red-600" },
  "ultimate-guide-to-holiness": { bg: "from-primary/20 to-primary-light/10", icon: "text-primary" },
  "understanding-prayer-and-fasting": { bg: "from-indigo-500/20 to-indigo-600/10", icon: "text-indigo-600" },
};

export default function DevotionalsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-dark via-dark-light to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-primary-light mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Devotionals
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Spirit-filled devotionals handpicked to strengthen your faith and awaken your purpose. Explore our categories below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Join Our Community of Faith-Filled Readers
            </h2>
            <p className="text-text max-w-2xl mx-auto">
              Access devotionals and be the first to get weekly spiritual insights that strengthen your walk and financial wisdom.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat.slug] || BookOpen;
              const colors = categoryColors[cat.slug] || { bg: "from-black/10 to-black/5", icon: "text-black/60" };
              const posts = getDevotionalsByCategory(cat.slug);

              return (
                <motion.div
                  key={cat.slug}
                  id={cat.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className={`rounded-2xl p-8 bg-gradient-to-br ${colors.bg} border border-black/10`}>
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className={`w-8 h-8 ${colors.icon}`} strokeWidth={1.5} />
                      <h3 className="text-2xl font-bold text-dark">{cat.name}</h3>
                    </div>
                    <p className="text-text text-sm leading-relaxed mb-6 max-w-3xl">
                      {cat.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/devotionals/${post.slug}`}
                          className="flex items-center gap-3 p-4 bg-white/70 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                        >
                          <ChevronRight className={`w-4 h-4 ${colors.icon} shrink-0 group-hover:translate-x-0.5 transition-transform`} strokeWidth={1.5} />
                          <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                            {post.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Flame className="w-12 h-12 text-secondary mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold text-dark mb-4">
              The Flame of Revival eBook
            </h2>
            <p className="text-lg text-text mb-4">
              Ignite Your Faith with a Powerful Guide to Spiritual Awakening
            </p>
            <p className="text-text leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover deep spiritual insights and timeless truths in The Flame of Revival, a free eBook written to awaken your heart and strengthen your walk with God. Pastor Ewang Nelson shares powerful revelations that inspire growth, renewal, and an unshakable faith.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Download FREE eBook
            </Link>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
