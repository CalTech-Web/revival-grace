"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Flame } from "lucide-react";

const points = [
  { icon: Heart, text: "Hearts set ablaze by the Spirit" },
  { icon: Users, text: "Families healed, lives restored" },
  { icon: BookOpen, text: "Reclaiming purity, restoring prayer" },
  { icon: Flame, text: "Boldness returns to believers" },
];

export default function WhyRevivalMatters() {
  return (
    <section className="relative py-28 bg-dark overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary-light/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-secondary-light uppercase tracking-wider mb-3">
              Why Revival Matters
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Time to Awaken Is Now
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              We live in a time where many hearts have grown weary, and faith often feels watered down. Revival Grace Ministry exists to call the Church back to its foundation, Jesus Christ.
            </p>
          </motion.div>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {points.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 lg:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-secondary-light/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-secondary-light" strokeWidth={1.5} />
              </div>
              <p className="text-white/80 font-medium text-sm">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-white/40 leading-relaxed mb-10">
            True revival begins not in crowds, but in hearts set ablaze by the Spirit. Our ministry believes revival is urgent and personal. We don&apos;t wait for a building to be full, we ask for hearts to be filled. Through weekly devotionals, a growing community of believers, and a message centered on hope and holiness, we&apos;re helping Christians everywhere reconnect with their first love. Will you answer the call?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-light text-dark font-semibold rounded-xl hover:bg-secondary-light/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-light/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
