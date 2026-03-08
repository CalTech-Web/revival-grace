"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PastorSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to Revival Grace Ministry
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Revival Grace Ministry is the teaching ministry of Pastor Ewang Nelson and is dedicated to leading people worldwide into a growing relationship with Jesus Christ and strengthening the local church.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3.5 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary transition-colors"
          >
            Learn More About Revival Grace
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
