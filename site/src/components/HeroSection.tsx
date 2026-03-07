"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/6044235/pexels-photo-6044235.jpeg"
        alt=""
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-light/20 bg-secondary-light/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-light animate-pulse" />
            <span className="text-xs sm:text-sm text-secondary-light/90 tracking-wide font-medium">
              Igniting a revival of the Word
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
            Revival Grace{" "}
            <span className="block mt-2 bg-gradient-to-r from-secondary-light via-secondary-light/80 to-secondary-light/60 bg-clip-text text-transparent">
              Ministry
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A Christ-centered community devoted to teaching the Word, nurturing
            spiritual growth, and guiding believers toward purposeful living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="group px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Learn More
            </Link>
            <Link
              href="/devotionals"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-white/15 text-white/80 font-medium hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              <Play className="w-4 h-4 text-secondary-light" strokeWidth={2} />
              Read Devotionals
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-dark/40 font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 text-dark/30 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
