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
    <section className="py-20 bg-gradient-to-br from-primary-dark to-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-10 h-10 text-secondary-light mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Sign Up for the Revival Grace Ministry Newsletter
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Join our newsletter to receive weekly devotionals, ministry updates, and inspiring messages from Pastor Ewang Nelson. Let your faith be refreshed regularly!
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-accent">
              <CheckCircle className="w-6 h-6" />
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
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-light"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-light hover:text-dark transition-colors"
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
