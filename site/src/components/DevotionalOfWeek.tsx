"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function DevotionalOfWeek() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-secondary-light/8 rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            <p className="text-text leading-relaxed mb-6">
              True happiness does not come from money or success. It grows through gratitude, faith, meaningful relationships, and inner peace. When people value contentment, love, and purpose over wealth, they discover lasting joy that only God can truly provide.
            </p>
            <Link
              href="/devotionals"
              className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Read More
            </Link>

            {/* eBook preview */}
            <div className="mt-10 flex items-center gap-5 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
              <Image
                src="/images/ebook-cover.jpg"
                alt="The Flame of Revival eBook"
                width={80}
                height={120}
                className="rounded-lg shadow-md flex-shrink-0"
              />
              <div>
                <p className="font-bold text-dark text-sm mb-1">The Flame of Revival</p>
                <p className="text-text text-xs mb-2">Free eBook by Pastor Ewang Nelson</p>
                <Link href="/devotionals" className="text-xs font-semibold text-accent hover:text-accent-light transition-colors">
                  Download Free &rarr;
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5 text-secondary-light" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-dark">This Week&apos;s Word of Revival</h3>
              </div>
              <p className="text-text text-sm leading-relaxed mb-5">
                Be renewed with a fresh, Spirit-filled devotional handpicked to strengthen your faith and awaken your purpose. Each week, we bring you a powerful devotional message rooted in scripture, prayer, and spiritual insight.
              </p>
              <p className="text-text text-sm leading-relaxed mb-6">
                Whether you&apos;re facing trials, seeking answers, or simply longing for more of Him, these weekly devotionals will meet you right where you are, with clarity, depth, and grace.
              </p>
              <div className="bg-gradient-to-r from-dark/5 to-secondary/5 rounded-lg p-5">
                <p className="text-dark font-semibold text-center italic">
                  &ldquo;A Sleeping Church Can&apos;t Change the World&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
