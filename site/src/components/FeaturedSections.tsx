"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { devotionals } from "@/data/devotionals";

export default function FeaturedSections() {
  const featured = devotionals.slice(-8, -4).reverse();

  return (
    <section className="py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-[26px] font-bold text-heading">
            Devotionals
          </h2>
          <Link
            href="/devotionals"
            className="hidden sm:inline-flex items-center gap-1 text-[13px] font-medium text-heading hover:text-accent transition-colors"
          >
            Explore More Devotionals
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((post) => (
            <Link key={post.slug} href={`/devotionals/${post.slug}`} className="group block">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-[160px] overflow-hidden">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">
                    Devotional
                  </p>
                  <h3 className="font-serif font-bold text-heading text-[15px] leading-snug mb-1.5 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-text leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/devotionals"
          className="sm:hidden flex items-center justify-center gap-1 mt-8 text-[13px] font-medium text-heading hover:text-accent transition-colors"
        >
          Explore More Devotionals
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
