"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Heart, Flame, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Weekly Devotionals",
    desc: "Spirit-filled content to strengthen your faith and awaken your purpose.",
  },
  {
    icon: Flame,
    title: "Free eBook",
    desc: "The Flame of Revival, a powerful guide to spiritual awakening.",
  },
  {
    icon: Heart,
    title: "Global Community",
    desc: "Connecting believers worldwide through faith, prayer, and holiness.",
  },
];

export default function PastorSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Content on teal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary px-6 sm:px-10 lg:px-16 py-16 lg:py-20 flex flex-col justify-center"
        >
          <p className="text-[10px] font-bold text-accent-light uppercase tracking-[0.2em] mb-4">
            About Our Ministry
          </p>
          <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-white mb-5 leading-[1.1]">
            Igniting a Revival of the Word in the Hearts of Believers
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-lg">
            Revival Grace Ministry is dedicated to leading people worldwide into
            a growing relationship with Jesus Christ, nurturing spiritual growth
            through devotionals, free resources, and a message centered on hope
            and holiness.
          </p>

          {/* Feature list */}
          <div className="space-y-5 mb-10">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4.5 h-4.5 text-accent-light" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[14px] mb-0.5">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-heading text-[13px] font-medium tracking-wide hover:bg-white/90 transition-colors"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border border-white/30 text-white text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[360px] lg:h-auto lg:min-h-[560px]"
        >
          <Image
            src="https://images.pexels.com/photos/8815891/pexels-photo-8815891.jpeg"
            alt="Open Bible with warm light"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
