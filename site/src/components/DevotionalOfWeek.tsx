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
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Devotional of the Week
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Feed Your Spirit
          </h2>
          <p className="text-text max-w-xl mx-auto">
            A fresh, Spirit-filled message handpicked to strengthen your faith and awaken your purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-warm-gray rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured image */}
              <div className="relative h-72 lg:h-auto lg:min-h-[480px]">
                {latest.image && (
                  <Image
                    src={latest.image}
                    alt={latest.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark/10" />
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <Link href={`/devotionals#${latest.categorySlug}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark hover:bg-white transition-colors">
                    <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {latest.categoryName}
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Link href={`/devotionals#${latest.categorySlug}`} className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 rounded-full text-xs font-medium text-secondary w-fit mb-6 hover:bg-secondary/20 transition-colors">
                  <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {latest.categoryName}
                </Link>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-5 leading-tight">
                  {latest.title}
                </h3>

                <p className="text-text leading-relaxed mb-8 text-[15px]">
                  {latest.excerpt}
                </p>

                <Link
                  href={`/devotionals/${latest.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-all duration-300 w-fit group hover:shadow-lg hover:shadow-accent/20"
                >
                  Read Devotional
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>

                {/* eBook CTA */}
                <div className="mt-10 flex items-center gap-4 p-5 bg-white rounded-2xl border border-black/[0.06]">
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt="The Flame of Revival eBook"
                    width={56}
                    height={84}
                    className="rounded-lg shadow-md flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-dark text-sm">The Flame of Revival</p>
                    <p className="text-text text-xs mb-1.5">Free eBook by Pastor Ewang Nelson</p>
                    <Link href="/contact" className="text-xs font-semibold text-accent hover:text-accent-light transition-colors inline-flex items-center gap-1">
                      Download Free <span>&rarr;</span>
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
