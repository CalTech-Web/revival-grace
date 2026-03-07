"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PastorSection() {
  return (
    <section className="relative py-24 bg-warm-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary-light/8 rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-accent/5 rounded-full translate-y-1/3" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pastor-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#272935" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pastor-grid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-secondary-light/15 to-accent/10 rounded-2xl blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pastor-ewang-2.webp"
                  alt="Pastor Ewang Nelson preaching"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Embracing Revival, Walking in Truth
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              Welcome to Revival Grace Ministry
            </h3>
            <p className="text-text leading-relaxed mb-4">
              My name is Pastor Ewang Nelson, and it&apos;s a pleasure to connect with you as a fellow believer. Like you, I am dedicated to my faith and have been blessed with a ministry and some spiritual gifts.
            </p>
            <p className="text-text leading-relaxed mb-4">
              I find great joy in meditating and writing books, but above all, I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times.
            </p>
            <p className="text-text leading-relaxed mb-8">
              I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years. I invite you to join me on this journey of faith and discovery! Learning is the first step in the Christian Revival.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
