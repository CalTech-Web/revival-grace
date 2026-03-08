"use client";

import { motion } from "framer-motion";
import { BookOpen, Flame, Heart, Users } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              About Revival Grace Ministry
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Embracing Revival, Walking in Truth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-square bg-cream rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-heading font-bold text-xl">Pastor Ewang Nelson</p>
                  <p className="text-text">Founder & Senior Pastor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-heading mb-6">
                Meet Pastor Ewang Nelson
              </h2>
              <p className="text-text leading-relaxed mb-4">
                My name is Pastor Ewang Nelson, and it&apos;s a pleasure to connect with you as a fellow believer. Like you, I am dedicated to my faith and have been blessed with a ministry and some spiritual gifts.
              </p>
              <p className="text-text leading-relaxed mb-4">
                I find great joy in meditating and writing books, but above all, I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times.
              </p>
              <p className="text-text leading-relaxed mb-4">
                I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years. I invite you to join me on this journey of faith and discovery!
              </p>
              <p className="text-text leading-relaxed">
                Learning is the first step in the Christian Revival.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-heading mb-4">Our Mission</h2>
            <p className="text-text max-w-2xl mx-auto leading-relaxed">
              Revival Grace Ministry is a Christ-centered community devoted to teaching the Word, nurturing spiritual growth, and guiding believers toward purposeful living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Flame, title: "Revival", desc: "Igniting the flame of faith in every believer" },
              { icon: BookOpen, title: "Teaching", desc: "Deep, scripture-rooted devotionals and resources" },
              { icon: Heart, title: "Holiness", desc: "Guiding believers toward purity and prayer" },
              { icon: Users, title: "Community", desc: "Building a global family of faith-filled readers" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-sm"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-text text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-heading mb-6 text-center">About Pastor Ewang Nelson</h2>
          <div className="bg-cream rounded-2xl p-8 border border-black/10">
            <blockquote className="font-serif text-lg text-heading italic leading-relaxed mb-4">
              &ldquo;I have a profound belief in the revival of the Word, a promise that prophets have echoed throughout these extraordinary times. I believe the Holy Spirit is beginning to reveal the remarkable plans He has been nurturing secretly for many years.&rdquo;
            </blockquote>
            <p className="text-right text-primary font-semibold">
              Pastor Ewang Nelson
            </p>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
