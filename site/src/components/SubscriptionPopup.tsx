"use client";

import { useState } from "react";
import { X, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

export default function SubscriptionPopup() {
  const { showPopup, setShowPopup, subscribe, checkEmail, isSubscribed } = useSubscription();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "already_subscribed" | "blocked">("idle");

  if (!showPopup || isSubscribed) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;

    // Check email status first
    const emailStatus = checkEmail(email);
    if (emailStatus === "already_subscribed") {
      setStatus("already_subscribed");
      setTimeout(() => {
        setShowPopup(false);
        setStatus("idle");
      }, 2000);
      return;
    }
    if (emailStatus === "blocked") {
      setStatus("blocked");
      return;
    }

    setStatus("submitting");
    const result = await subscribe(name, email);
    setStatus(result);

    if (result === "success") {
      setTimeout(() => {
        setShowPopup(false);
        setStatus("idle");
        setName("");
        setEmail("");
        setAgree(false);
      }, 1500);
    } else if (result === "already_subscribed") {
      setTimeout(() => {
        setShowPopup(false);
        setStatus("idle");
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => status === "idle" && setShowPopup(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        {status === "idle" || status === "submitting" ? (
          <>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-text/40 hover:text-text transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">
                Free Access
              </p>
              <h2 className="font-serif text-[24px] font-bold text-heading leading-tight mb-2">
                Subscribe to Read Devotionals
              </h2>
              <p className="text-[13px] text-text leading-relaxed">
                Get full access to all our devotionals and receive weekly
                spiritual content delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="sub-name" className="block text-[12px] font-medium text-heading mb-1.5">
                  Full Name
                </label>
                <input
                  id="sub-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 border border-black/15 rounded-md text-[14px] text-heading placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="sub-email" className="block text-[12px] font-medium text-heading mb-1.5">
                  Email Address
                </label>
                <input
                  id="sub-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-black/15 rounded-md text-[14px] text-heading placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-black/20 text-primary focus:ring-primary/30"
                />
                <span className="text-[12px] text-text leading-relaxed">
                  I agree to receive weekly newsletters from Revival Grace Ministry.
                </span>
              </label>

              <button
                type="submit"
                disabled={!agree || status === "submitting"}
                className="w-full py-3 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe & Read"
                )}
              </button>

              <p className="text-[11px] text-text/50 text-center leading-relaxed">
                We respect your privacy and will not spam you. You can
                unsubscribe at any time.
              </p>
            </form>
          </>
        ) : status === "success" ? (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Welcome!
            </h3>
            <p className="text-[13px] text-text">
              You now have full access to all devotionals.
            </p>
          </div>
        ) : status === "already_subscribed" ? (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Already Subscribed!
            </h3>
            <p className="text-[13px] text-text">
              You are already a subscriber. Enjoy reading our devotionals!
            </p>
          </div>
        ) : status === "blocked" ? (
          <div className="text-center py-4">
            <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Too Many Attempts
            </h3>
            <p className="text-[13px] text-text mb-4">
              This email has been used too many times. Please try a different email or contact us for help.
            </p>
            <button
              onClick={() => { setShowPopup(false); setStatus("idle"); }}
              className="px-6 py-2 border border-black/15 text-heading text-[13px] font-medium rounded-md hover:bg-black/5 transition-colors"
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
