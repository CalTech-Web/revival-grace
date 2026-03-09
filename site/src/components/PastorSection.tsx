"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Heart, Flame, ArrowRight } from "lucide-react";
import EbookDownloadButton from "@/components/EbookDownloadButton";

const features = [
  {
    icon: BookOpen,
    title: "Weekly Devotionals",
    desc: "Spirit-filled content to strengthen your faith.",
  },
  {
    icon: Flame,
    title: "Free eBook",
    desc: "A powerful guide to spiritual awakening.",
  },
  {
    icon: Heart,
    title: "Global Community",
    desc: "Believers connected through faith and prayer.",
  },
];

export default function PastorSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left - Image with accent border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-lg" />
              <div className="relative rounded-lg overflow-hidden h-[380px] lg:h-[480px]">
                <Image
                  src="/images/ministry-worship.jpg"
                  alt="Ministry worship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-3">
              About Our Ministry
            </p>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-heading mb-5 leading-[1.15]">
              Igniting a Revival of the Word in the Hearts of Believers
            </h2>
            <p className="text-text text-[15px] leading-relaxed mb-8 max-w-xl">
              Revival Grace Ministry is dedicated to leading people worldwide
              into a growing relationship with Jesus Christ, nurturing spiritual
              growth through devotionals, free resources, and a message centered
              on hope and holiness.
            </p>

            {/* Three features in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((f) => {
                const content = (
                  <>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                      <f.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif font-bold text-heading text-[14px] mb-1">
                      {f.title}
                    </h3>
                    <p className="text-text/70 text-[13px] leading-relaxed">
                      {f.desc}
                    </p>
                  </>
                );

                if (f.title === "Free eBook") {
                  return (
                    <EbookDownloadButton key={f.title} className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity">
                      {content}
                    </EbookDownloadButton>
                  );
                }

                return (
                  <div key={f.title} className="text-center sm:text-left">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-[13px] font-medium tracking-wide hover:bg-primary-dark transition-colors rounded-sm"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 border border-heading/20 text-heading text-[13px] font-medium tracking-wide hover:border-heading/40 transition-colors rounded-sm"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
