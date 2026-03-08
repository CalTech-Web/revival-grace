"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { devotionals } from "@/data/devotionals";

export default function FeaturedSections() {
  const featured = devotionals.slice(-4).reverse();

  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heading">
            Featured Devotionals
          </h2>
          <Link
            href="/devotionals"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-heading transition-colors"
          >
            Explore More Devotionals
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/devotionals/${post.slug}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-2">
                      {post.categoryName}
                    </p>
                    <h3 className="font-serif font-bold text-heading text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text text-xs leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/devotionals"
          className="sm:hidden flex items-center justify-center gap-1.5 mt-8 text-sm font-medium text-text hover:text-heading transition-colors"
        >
          Explore More Devotionals
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
