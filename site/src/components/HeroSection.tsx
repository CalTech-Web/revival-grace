"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/6044235/pexels-photo-6044235.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary-light text-sm sm:text-base font-medium tracking-wide mb-4">
              Welcome to Revival Grace Ministry
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Igniting a Revival{" "}
              <span className="text-secondary-light">of the Word</span>
            </h1>

            <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
              A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/devotionals"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Read Devotionals
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
