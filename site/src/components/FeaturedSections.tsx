"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "The Flame of Revival: Ignite Your Faith",
    description:
      "Pastor Ewang Nelson Mfortaw passionately calls believers to embrace a transformative revival. This book, reflecting the core message of Revival Grace Ministry, invites you to discover the Holy Spirit's plans for our time and the vital role of learning in this Christian revival.",
    cta: "Download FREE eBook",
    href: "/devotionals",
    color: "from-secondary/20 to-secondary-light/10",
    iconColor: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Awaken Your Spirit: The Promise of Revival",
    description:
      "Pastor Ewang Nelson and Revival Grace Ministry believe in a present-day revival, echoing the calls of prophets throughout history. Join us on a journey of faith and discovery as the Holy Spirit unveils His plans for our time. Learning is the vital first step in this Christian revival.",
    cta: "Read More",
    href: "/about",
    color: "from-primary/20 to-primary-light/10",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Deepen Your Connection: Understanding Prayer and Holiness",
    description:
      "At Revival Grace Ministry, we provide resources to strengthen your prayer life and guide you towards holiness. Explore devotionals such as 'Understanding Prayer and Fasting' and 'The Ultimate Guide to Holiness' to cultivate a more intimate relationship with God.",
    cta: "Read More",
    href: "/devotionals",
    color: "from-accent/20 to-accent/10",
    iconColor: "text-accent",
  },
];

export default function FeaturedSections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 bg-gradient-to-br ${feature.color} border border-gray-100 hover:shadow-lg transition-shadow`}
            >
              <feature.icon className={`w-10 h-10 ${feature.iconColor} mb-5`} />
              <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
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
