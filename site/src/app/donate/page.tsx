"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Globe } from "lucide-react";

const impacts = [
  { icon: BookOpen, title: "Free Devotionals", desc: "Weekly Spirit-filled content reaching believers worldwide" },
  { icon: Users, title: "Growing Community", desc: "Building a global family of faith-filled readers" },
  { icon: Globe, title: "Global Reach", desc: "Spreading the flame of revival across nations" },
  { icon: Heart, title: "Free Resources", desc: "eBooks, guides, and spiritual growth materials at no cost" },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/hero/donate-bg.webp" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 text-white/70 mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Support the Ministry
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your generosity helps spread the flame of revival to believers around the world
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-heading mb-4">Your Gift Makes a Difference</h2>
            <p className="text-text leading-relaxed max-w-2xl mx-auto">
              Every contribution helps Revival Grace Ministry continue providing free devotionals, eBooks, and spiritual resources to believers worldwide. Your support enables us to reach more souls with the message of revival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {impacts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-cream text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-serif font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-text text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream rounded-2xl p-10 text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-heading mb-4">Ready to Give?</h3>
            <p className="text-text mb-8 max-w-xl mx-auto">
              Thank you for considering a donation to Revival Grace Ministry. Your support, no matter the size, helps us fulfill our mission of spreading the Word and igniting faith in hearts around the world.
            </p>
            <a
              href="https://donate.stripe.com/00w5kv89ffaXcl0g9O9MY00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors"
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
