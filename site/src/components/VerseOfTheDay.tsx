"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function VerseOfTheDay() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark via-dark-light to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-10 h-10 text-secondary-light mx-auto mb-6 rotate-180" />
          <h2 className="text-sm font-semibold text-secondary-light uppercase tracking-wider mb-8">
            Verse of the Day
          </h2>

          <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-4 italic">
            &ldquo;My Father who gave them to me is greater than anyone else; no one can snatch them from him.&rdquo;
          </blockquote>
          <p className="text-secondary-light font-medium mb-12">John 10:29</p>

          <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-4 italic">
            &ldquo;I the Lord will grab you by the hand and tell you, Don&apos;t be afraid! I myself will help you.&rdquo;
          </blockquote>
          <p className="text-secondary-light font-medium">Isaiah 41:13</p>
        </motion.div>
      </div>
    </section>
  );
}
