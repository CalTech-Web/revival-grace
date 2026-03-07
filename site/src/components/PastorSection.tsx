"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function PastorSection() {
  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-primary/20 to-dark-light/30 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <p className="text-dark font-semibold text-lg">Pastor Ewang Nelson</p>
                <p className="text-gray-500 text-sm">Founder & Senior Pastor</p>
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
            <p className="text-gray-600 leading-relaxed mb-4">
              My name is Pastor Ewang Nelson, and it&apos;s a pleasure to connect with you as a fellow believer. Like you, I am dedicated to my faith and have been blessed with a ministry and some spiritual gifts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I find great joy in meditating and writing books, but above all, I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
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
