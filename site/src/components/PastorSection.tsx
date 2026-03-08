"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Heart, Flame } from "lucide-react";

export default function PastorSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/6274049/pexels-photo-6274049.jpeg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest mb-4">
              About Our Ministry
            </p>
            <h2 className="font-serif text-[34px] sm:text-[44px] font-bold text-white mb-5 leading-[1.1]">
              Igniting a Revival of the Word in the Hearts of Believers
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-xl">
              Revival Grace Ministry is dedicated to leading people worldwide into a growing relationship with Jesus Christ, nurturing spiritual growth through devotionals, free resources, and a message centered on hope and holiness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="px-7 py-3 bg-white text-heading text-[13px] font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 border border-white/40 text-white text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Right stats/features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <BookOpen className="w-6 h-6 text-accent-light mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-white font-bold text-[15px] mb-1">Weekly Devotionals</h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Spirit-filled content to strengthen your faith and awaken your purpose.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <Flame className="w-6 h-6 text-accent-light mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-white font-bold text-[15px] mb-1">Free eBook</h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                The Flame of Revival, a powerful guide to spiritual awakening.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <Heart className="w-6 h-6 text-accent-light mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-white font-bold text-[15px] mb-1">Global Community</h3>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Connecting believers worldwide through faith, prayer, and holiness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
