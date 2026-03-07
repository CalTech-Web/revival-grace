"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function DevotionalOfWeek() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Devotional of the Week
            </h2>
            <h3 className="text-3xl font-bold text-dark mb-6">
              How to Find Happiness: Secrets No One Told You
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              True happiness does not come from money or success. It grows through gratitude, faith, meaningful relationships, and inner peace. When people value contentment, love, and purpose over wealth, they discover lasting joy that only God can truly provide.
            </p>
            <Link
              href="/devotionals"
              className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Read More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-dark">This Week&apos;s Word of Revival</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Be renewed with a fresh, Spirit-filled devotional handpicked to strengthen your faith and awaken your purpose. Each week, we bring you a powerful devotional message rooted in scripture, prayer, and spiritual insight. These reflections are crafted to rekindle your connection with God, stir your spirit, and align your heart with His truth.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Whether you&apos;re facing trials, seeking answers, or simply longing for more of Him, these weekly devotionals will meet you right where you are, with clarity, depth, and grace.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                <p className="text-dark font-semibold text-center">
                  A Sleeping Church Can&apos;t Change the World
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
