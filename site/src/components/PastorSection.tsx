"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PastorSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/pastor-ewang-2.webp"
                alt="Pastor Ewang Nelson preaching"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Embracing Revival, Walking in Truth
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3 leading-tight">
              Welcome to Revival Grace Ministry
            </h2>
            <p className="text-secondary-light font-medium mb-8">
              Pastor Ewang Nelson, Founder & Senior Pastor
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-text leading-relaxed">
                My name is Pastor Ewang Nelson, and it&apos;s a pleasure to connect with you as a fellow believer. Like you, I am dedicated to my faith and have been blessed with a ministry and some spiritual gifts.
              </p>
              <p className="text-text leading-relaxed">
                I find great joy in meditating and writing books, but above all, I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-cream rounded-xl p-6 mb-8 border-l-4 border-secondary-light">
              <p className="text-dark italic leading-relaxed">
                &ldquo;I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years. I invite you to join me on this journey of faith and discovery!&rdquo;
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8">
              Learning is the first step in the Christian Revival.
            </p>

            <Link
              href="/about"
              className="inline-block px-7 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
