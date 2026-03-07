"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "The Flame of Revival: Ignite Your Faith",
    description:
      "Pastor Ewang Nelson Mfortaw passionately calls believers to embrace a transformative revival. This book, reflecting the core message of Revival Grace Ministry, invites you to discover the Holy Spirit\u2019s plans for our time and the vital role of learning in this Christian revival.",
    cta: "Download FREE eBook",
    href: "/devotionals",
    accent: "bg-secondary-light/10 border-secondary-light/20",
    iconColor: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Awaken Your Spirit: The Promise of Revival",
    description:
      "Pastor Ewang Nelson and Revival Grace Ministry believe in a present-day revival, echoing the calls of prophets throughout history. Join us on a journey of faith and discovery as the Holy Spirit unveils His plans for our time.",
    cta: "Read More",
    href: "/about",
    accent: "bg-accent/5 border-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Deepen Your Connection: Prayer and Holiness",
    description:
      "At Revival Grace Ministry, we provide resources to strengthen your prayer life and guide you towards holiness. Explore devotionals to cultivate a more intimate relationship with God.",
    cta: "Read More",
    href: "/devotionals",
    accent: "bg-secondary/5 border-secondary/15",
    iconColor: "text-secondary",
  },
];

export default function FeaturedSections() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-gray/50 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cream/60 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 ${feature.accent} border hover:shadow-lg transition-all duration-300`}
            >
              <feature.icon className={`w-9 h-9 ${feature.iconColor} mb-5`} strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-text text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="text-sm font-semibold text-accent hover:text-accent-light transition-colors"
              >
                {feature.cta} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
