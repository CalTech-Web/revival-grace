"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, BookOpen, Heart, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "The Flame of Revival: Ignite Your Faith",
    description:
      "Pastor Ewang Nelson Mfortaw passionately calls believers to embrace a transformative revival. This book, reflecting the core message of Revival Grace Ministry, invites you to discover the Holy Spirit\u2019s plans for our time and the vital role of learning in this Christian revival.",
    cta: "Download FREE eBook",
    href: "/devotionals",
    borderColor: "border-t-primary",
  },
  {
    icon: BookOpen,
    title: "Awaken Your Spirit: The Promise of Revival",
    description:
      "Pastor Ewang Nelson and Revival Grace Ministry believe in a present-day revival, echoing the calls of prophets throughout history. Join us on a journey of faith and discovery as the Holy Spirit unveils His plans for our time.",
    cta: "Read More",
    href: "/about",
    borderColor: "border-t-accent",
  },
  {
    icon: Heart,
    title: "Deepen Your Connection: Prayer and Holiness",
    description:
      "At Revival Grace Ministry, we provide resources to strengthen your prayer life and guide you towards holiness. Explore devotionals to cultivate a more intimate relationship with God.",
    cta: "Read More",
    href: "/devotionals",
    borderColor: "border-t-primary",
  },
];

export default function FeaturedSections() {
  return (
    <section className="py-20 lg:py-28 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Faith, Revival, and Growth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`bg-white rounded-xl border-t-4 ${feature.borderColor} p-8 h-full flex flex-col shadow-sm`}>
                <feature.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-text text-sm leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark hover:text-primary transition-colors"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
