"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[28px] font-bold text-white mb-3">
          Stay Connected in Faith
        </h2>
        <p className="text-white/50 text-[14px] mb-8 leading-relaxed">
          Join our newsletter to receive weekly devotionals, ministry updates, and inspiring messages from Pastor Ewang Nelson.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
            <p className="text-[14px] font-medium">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white text-[14px] placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-accent text-white text-[13px] font-medium tracking-wide hover:bg-accent-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
