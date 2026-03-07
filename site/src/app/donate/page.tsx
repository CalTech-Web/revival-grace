"use client";

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
      <section className="py-20 bg-gradient-to-br from-dark via-dark-light to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 text-secondary-light mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Support the Ministry
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your generosity helps spread the flame of revival to believers around the world
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Your Gift Makes a Difference</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
                className="p-6 rounded-xl bg-warm-gray text-center"
              >
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-10 text-center"
          >
            <h3 className="text-2xl font-bold text-dark mb-4">Ready to Give?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Thank you for considering a donation to Revival Grace Ministry. Your support, no matter the size, helps us fulfill our mission of spreading the Word and igniting faith in hearts around the world.
            </p>
            <p className="text-gray-500 text-sm">
              For donation inquiries, please reach out through our contact page.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
