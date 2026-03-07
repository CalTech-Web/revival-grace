"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative py-28 bg-cream overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary-light/[0.08] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="w-14 h-14 bg-secondary-light/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-secondary" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Stay Connected in Faith
          </h2>
          <p className="text-text mb-10 leading-relaxed">
            Join our newsletter to receive weekly devotionals, ministry updates, and inspiring messages from Pastor Ewang Nelson. Let your faith be refreshed regularly!
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-5 bg-accent/10 rounded-2xl"
            >
              <CheckCircle className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <p className="font-medium text-accent">Thank you for subscribing!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white border border-black/[0.08] text-dark placeholder-text/40 focus:outline-none focus:ring-2 focus:ring-secondary-light/50 focus:border-secondary-light/30 transition-all"
              />
              <button
                type="submit"
                className="group px-7 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
