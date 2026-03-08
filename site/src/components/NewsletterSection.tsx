"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-28 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-8 h-8 text-white/60 mx-auto mb-5" strokeWidth={1.5} />

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Connected in Faith
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Join our newsletter to receive weekly devotionals, ministry updates, and inspiring messages from Pastor Ewang Nelson. Let your faith be refreshed regularly!
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-primary-light">
              <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
              <p className="font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-light/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
