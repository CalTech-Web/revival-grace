"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Flame,
    label: "eBook",
    title: "The Flame of Revival",
    subtitle: "Ignite Your Faith",
    description:
      "Pastor Ewang Nelson Mfortaw passionately calls believers to embrace a transformative revival. This book, reflecting the core message of Revival Grace Ministry, invites you to discover the Holy Spirit\u2019s plans for our time and the vital role of learning in this Christian revival.",
    cta: "Download FREE eBook",
    href: "/devotionals",
    gradient: "from-secondary-light/20 to-secondary/10",
    iconBg: "bg-secondary-light/15",
    iconColor: "text-secondary",
  },
  {
    icon: BookOpen,
    label: "Our Mission",
    title: "Awaken Your Spirit",
    subtitle: "The Promise of Revival",
    description:
      "Pastor Ewang Nelson and Revival Grace Ministry believe in a present-day revival, echoing the calls of prophets throughout history. Join us on a journey of faith and discovery as the Holy Spirit unveils His plans for our time.",
    cta: "Read More",
    href: "/about",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    label: "Resources",
    title: "Deepen Your Connection",
    subtitle: "Prayer and Holiness",
    description:
      "At Revival Grace Ministry, we provide resources to strengthen your prayer life and guide you towards holiness. Explore devotionals to cultivate a more intimate relationship with God.",
    cta: "Read More",
    href: "/devotionals",
    gradient: "from-secondary/10 to-secondary-light/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

export default function FeaturedSections() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Faith, Revival, and Growth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="relative rounded-2xl border border-black/[0.06] p-8 lg:p-10 hover:border-black/[0.1] transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text/50 mb-2">
                  {feature.label}
                </span>

                <h3 className="text-xl font-bold text-dark mb-1">{feature.title}</h3>
                <p className="text-sm text-secondary-light font-medium mb-4">{feature.subtitle}</p>

                <p className="text-text text-sm leading-relaxed mb-8 flex-1">
                  {feature.description}
                </p>

                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group/link"
                >
                  {feature.cta}
                  <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
