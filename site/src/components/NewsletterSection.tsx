"use client";

import { useState } from "react";
import { CheckCircle, Mail, Loader2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "verification_sent" | "pending_verification" | "already_subscribed" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = await res.json();
      setStatus(data.status);
      if (data.status === "verification_sent" || data.status === "already_subscribed") {
        setEmail("");
      }
    } catch {
      setStatus("error");
    }
  };

  const feedbackMessage = () => {
    switch (status) {
      case "verification_sent":
        return (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            <p className="text-[14px] font-medium">Check your email to confirm your subscription!</p>
          </div>
        );
      case "pending_verification":
        return (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            <p className="text-[14px] font-medium">Confirmation resent! Check your inbox.</p>
          </div>
        );
      case "already_subscribed":
        return (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
            <p className="text-[14px] font-medium">You&apos;re already subscribed!</p>
          </div>
        );
      case "error":
        return (
          <div className="text-center">
            <p className="text-[14px] text-red-400 mb-2">Something went wrong. Please try again.</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[13px] text-white/60 underline hover:text-white transition-colors"
            >
              Try again
            </button>
          </div>
        );
      default:
        return null;
    }
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
        {status !== "idle" && status !== "submitting" ? (
          feedbackMessage()
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "submitting"}
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white text-[14px] placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-2.5 bg-accent text-white text-[13px] font-medium tracking-wide hover:bg-accent-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
