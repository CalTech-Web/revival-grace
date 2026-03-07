"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const repeatedText = "Welcome to Revival Grace Ministry \u00B7 ";
  const marqueeContent = repeatedText.repeat(8);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-dark overflow-hidden">
      {/* Animated scrolling text background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-[0.04] select-none pointer-events-none">
        {[...Array(10)].map((_, row) => (
          <div
            key={row}
            className="whitespace-nowrap text-white font-bold"
            style={{
              fontSize: row % 2 === 0 ? "3rem" : "2rem",
              animation: `marquee-${row % 2 === 0 ? "left" : "right"} ${30 + row * 3}s linear infinite`,
            }}
          >
            {marqueeContent}
          </div>
        ))}
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-secondary-light/5 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Flame className="w-12 h-12 text-secondary-light mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-secondary-light to-secondary-light/70 bg-clip-text text-transparent">
              Revival Grace Ministry
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
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
        <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" strokeWidth={1.5} />
      </motion.div>

      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
