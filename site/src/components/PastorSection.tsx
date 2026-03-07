"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PastorSection() {
  return (
    <section className="relative py-28 bg-warm-gray overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-light/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/[0.03] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame - hidden on mobile to prevent overflow */}
              <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-secondary-light/15" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pastor-ewang-2.webp"
                  alt="Pastor Ewang Nelson preaching"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Pastor Ewang Nelson</p>
                  <p className="text-white/70 text-sm">Founder & Senior Pastor</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Embracing Revival, Walking in Truth
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-8 leading-tight">
              Welcome to Revival{" "}
              <span className="text-secondary">Grace Ministry</span>
            </h2>

            <div className="space-y-5 mb-8">
              <p className="text-text leading-relaxed text-[15px]">
                My name is Pastor Ewang Nelson, and it&apos;s a pleasure to connect with you as a fellow believer. Like you, I am dedicated to my faith and have been blessed with a ministry and some spiritual gifts.
              </p>
              <p className="text-text leading-relaxed text-[15px]">
                I find great joy in meditating and writing books, but above all, I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times.
              </p>
            </div>

            {/* Pull quote */}
            <div className="relative pl-6 py-4 mb-8 border-l-[3px] border-secondary-light">
              <Quote className="absolute -top-1 -left-3 w-6 h-6 text-secondary-light bg-warm-gray" strokeWidth={1.5} />
              <p className="text-dark font-medium italic leading-relaxed">
                I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years. I invite you to join me on this journey of faith and discovery!
              </p>
            </div>

            <p className="text-text leading-relaxed text-[15px] mb-8">
              Learning is the first step in the Christian Revival.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
