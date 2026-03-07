"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light/80 to-dark" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-secondary-light/5 rounded-full blur-[80px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lines)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          {/* Pastor image - left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-secondary-light/20 to-accent/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pastor-ewang.webp"
                  alt="Pastor Ewang Nelson"
                  width={500}
                  height={625}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating accent shape */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-light/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/15 rounded-full blur-lg" />
            </div>
          </motion.div>

          {/* Text content - right side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <Flame className="w-12 h-12 text-secondary-light mx-auto lg:mx-0 mb-6" strokeWidth={1.5} />
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-secondary-light to-secondary-light/70 bg-clip-text text-transparent">
                Revival Grace Ministry
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              A Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
