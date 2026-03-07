"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/6044235/pexels-photo-6044235.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-secondary-light/80 mb-4">
            Welcome to
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-secondary-light to-secondary-light/70 bg-clip-text text-transparent">
              Revival Grace Ministry
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/devotionals"
              className="px-8 py-3 border border-secondary-light/40 text-secondary-light font-medium rounded-lg hover:bg-secondary-light/10 transition-colors"
            >
              Read Devotionals
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-5 h-5 text-white/50 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
