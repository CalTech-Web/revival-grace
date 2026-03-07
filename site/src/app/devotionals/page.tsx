"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, DollarSign, Heart, Flame, Shield, Cross, HandHelping } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

const categories = [
  {
    id: "financial-breakthrough",
    icon: DollarSign,
    title: "Bible Guide to Financial Breakthrough",
    description: "Discover biblical principles for financial wisdom and breakthrough. God's Word provides a roadmap for stewardship, generosity, and provision.",
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    id: "christian-living",
    icon: Heart,
    title: "Christian Living",
    description: "Practical guidance for daily Christian life. Learn how to walk in faith, love others well, and live out your calling with purpose and joy.",
    color: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-600",
  },
  {
    id: "christian-ministry",
    icon: HandHelping,
    title: "Christian Ministry",
    description: "Resources for those called to serve. Whether you lead a church, a small group, or serve behind the scenes, these devotionals equip you for effective ministry.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    id: "faith-holy-spirit",
    icon: Flame,
    title: "Faith & Holy Spirit",
    description: "Deepen your understanding of faith and the work of the Holy Spirit. These devotionals explore the Spirit's gifts, guidance, and transforming power in the believer's life.",
    color: "from-secondary/20 to-secondary-light/10",
    iconColor: "text-secondary",
  },
  {
    id: "demonic-oppressions",
    icon: Shield,
    title: "Free From Demonic Oppressions",
    description: "Find freedom and victory through Christ. These resources address spiritual warfare, deliverance, and standing firm in the authority given to believers.",
    color: "from-red-500/20 to-red-600/10",
    iconColor: "text-red-600",
  },
  {
    id: "holiness",
    icon: Cross,
    title: "Ultimate Guide to Holiness",
    description: "A comprehensive guide to living a holy life. Holiness is not about perfection but about a heart fully surrendered to God and set apart for His purposes.",
    color: "from-primary/20 to-primary-light/10",
    iconColor: "text-primary",
  },
  {
    id: "prayer-fasting",
    icon: BookOpen,
    title: "Understanding Prayer and Fasting",
    description: "Unlock the power of prayer and fasting. Learn how these spiritual disciplines transform your relationship with God and release His power in your life.",
    color: "from-indigo-500/20 to-indigo-600/10",
    iconColor: "text-indigo-600",
  },
];

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
            <BookOpen className="w-12 h-12 text-secondary-light mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Devotionals
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Spirit-filled devotionals handpicked to strengthen your faith and awaken your purpose. Explore our categories below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Join Our Community of Faith-Filled Readers
            </h2>
            <p className="text-text max-w-2xl mx-auto">
              Access devotionals and be the first to get weekly spiritual insights that strengthen your walk and financial wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 bg-gradient-to-br ${cat.color} border border-gray-100 hover:shadow-lg transition-shadow`}
              >
                <cat.icon className={`w-10 h-10 ${cat.iconColor} mb-5`} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-dark mb-3">{cat.title}</h3>
                <p className="text-text text-sm leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
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
