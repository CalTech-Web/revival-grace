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
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-secondary-light/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[60px]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="nl-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="0.8" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nl-dots)" />
      </svg>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-9 h-9 text-secondary-light mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Sign Up for the Revival Grace Ministry Newsletter
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Join our newsletter to receive weekly devotionals, ministry updates, and inspiring messages from Pastor Ewang Nelson. Let your faith be refreshed regularly!
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-accent">
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
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-light/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
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
