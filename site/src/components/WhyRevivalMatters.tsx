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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Revival Matters
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              The Time to Awaken Is Now
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We live in a time where many hearts have grown weary, and faith often feels watered down. Revival Grace Ministry exists to call the Church back to its foundation, Jesus Christ. True revival begins not in crowds, but in hearts set ablaze by the Spirit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-warm-gray"
            >
              <point.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-dark font-medium text-sm">{point.text}</p>
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
          <p className="text-gray-600 leading-relaxed mb-8">
            Our ministry believes revival is urgent and personal. We don&apos;t wait for a building to be full, we ask for hearts to be filled. Through weekly devotionals, a growing community of believers, and a message centered on hope and holiness, we&apos;re helping Christians everywhere reconnect with their first love. Will you answer the call?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
