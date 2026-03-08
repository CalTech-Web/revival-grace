"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PastorSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/verse-bg.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pastor image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[340px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pastor-ewang-2.webp"
                alt="Pastor Ewang Nelson"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest mb-4">
              About Our Ministry
            </p>
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-white mb-5 leading-tight">
              Welcome to Revival Grace Ministry
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              Revival Grace Ministry is the teaching ministry of Pastor Ewang Nelson and is dedicated to leading people worldwide into a growing relationship with Jesus Christ and strengthening the local church.
            </p>
            <p className="text-white/60 text-[14px] leading-relaxed mb-8 italic">
              &ldquo;I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years.&rdquo;
            </p>
            <Link
              href="/about"
              className="inline-block px-7 py-3 border-2 border-white text-white text-[13px] font-medium tracking-wide hover:bg-white hover:text-primary transition-colors"
            >
              Learn More About Revival Grace
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
