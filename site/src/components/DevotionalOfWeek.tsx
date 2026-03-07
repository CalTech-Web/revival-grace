"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { devotionals, getDevotionalBySlug } from "@/data/devotionals";

// Change this slug to update the featured devotional each week
const FEATURED_SLUG = "how-to-find-happiness-secrets-no-one-told-you";

export default function DevotionalOfWeek() {
  const latest = getDevotionalBySlug(FEATURED_SLUG.split("/")) || devotionals[devotionals.length - 1];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Devotional of the Week
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3">
            Feed Your Spirit
          </h2>
          <p className="text-text max-w-xl mx-auto">
            A fresh, Spirit-filled message handpicked to strengthen your faith and awaken your purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured image */}
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px]">
                {latest.image && (
                  <Image
                    src={latest.image}
                    alt={latest.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <Link
                  href={`/devotionals#${latest.categorySlug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 rounded-full text-xs font-medium text-secondary w-fit mb-5 hover:bg-secondary/20 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {latest.categoryName}
                </Link>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4 leading-tight">
                  {latest.title}
                </h3>

                <p className="text-text leading-relaxed mb-6">
                  {latest.excerpt}
                </p>

                <Link
                  href={`/devotionals/${latest.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors w-fit group"
                >
                  Read Devotional
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </Link>

                {/* eBook CTA */}
                <div className="mt-8 flex items-center gap-4 p-4 bg-cream rounded-xl">
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt="The Flame of Revival eBook"
                    width={56}
                    height={84}
                    className="rounded-lg shadow-md flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-dark text-sm">The Flame of Revival</p>
                    <p className="text-text text-xs mb-1">Free eBook by Pastor Ewang Nelson</p>
                    <Link href="/contact" className="text-xs font-semibold text-accent hover:text-accent-light transition-colors">
                      Download Free &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
