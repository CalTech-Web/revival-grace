"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Flame } from "lucide-react";

const points = [
  { icon: Heart, title: "Hearts Set Ablaze", desc: "The Spirit ignites passion for God's Word in every believer who seeks revival." },
  { icon: Users, title: "Lives Restored", desc: "Families healed and communities transformed through the power of faith." },
  { icon: BookOpen, title: "Purity & Prayer", desc: "Reclaiming holiness and restoring a vibrant prayer life in the church." },
  { icon: Flame, title: "Boldness Returns", desc: "Believers empowered to live and share their faith with courage and conviction." },
];

export default function WhyRevivalMatters() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
              Why Revival Matters
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mb-6">
              The Time to Awaken Is Now
            </h2>
            <p className="text-text leading-relaxed">
              We live in a time where many hearts have grown weary, and faith often feels watered down. Revival Grace Ministry exists to call the Church back to its foundation, Jesus Christ. True revival begins not in crowds, but in hearts set ablaze by the Spirit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-cream"
            >
              <point.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-heading mb-2">{point.title}</h3>
              <p className="text-text text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-text leading-relaxed mb-8">
            Our ministry believes revival is urgent and personal. We don&apos;t wait for a building to be full, we ask for hearts to be filled. Through weekly devotionals, a growing community of believers, and a message centered on hope and holiness, we&apos;re helping Christians everywhere reconnect with their first love. Will you answer the call?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-light transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
