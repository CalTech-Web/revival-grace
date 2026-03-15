"use client";

import { useState } from "react";
import { X, CheckCircle, AlertTriangle, Loader2, Mail, ShieldX } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

type Step = "verify" | "subscribe";
type Status =
  | "idle"
  | "verifying"
  | "submitting"
  | "approved"
  | "blacklisted"
  | "verification_sent"
  | "pending_verification"
  | "already_subscribed"
  | "forgotten"
  | "error";

export default function SubscriptionPopup() {
  const { showPopup, setShowPopup, subscribe, verifyEmail, isSubscribed, storeIntendedUrl } =
    useSubscription();
  const [step, setStep] = useState<Step>("verify");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");

  if (!showPopup || isSubscribed) return null;

  const resetForm = () => {
    setStep("verify");
    setEmail("");
    setName("");
    setAgree(false);
    setStatus("idle");
    setSubmittedEmail("");
  };

  const handleClose = () => {
    setShowPopup(false);
    resetForm();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    storeIntendedUrl();
    setSubmittedEmail(email);
    setStatus("verifying");

    const result = await verifyEmail(email);

    if (result === "approved") {
      setStatus("approved");
      setTimeout(() => {
        setShowPopup(false);
        resetForm();
      }, 2000);
    } else if (result === "blacklisted") {
      setStatus("blacklisted");
    } else if (result === "not_found") {
      setStep("subscribe");
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;

    storeIntendedUrl();
    setSubmittedEmail(email);
    setStatus("submitting");

    const result = await subscribe(name, email);
    setStatus(result);

    if (result === "already_subscribed") {
      setTimeout(() => {
        setShowPopup(false);
        resetForm();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => status === "idle" && handleClose()}
      />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Step 1: Email verification */}
        {step === "verify" && (status === "idle" || status === "verifying") && (
          <>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text/40 hover:text-text transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">
                Subscriber Access
              </p>
              <h2 className="font-serif text-[24px] font-bold text-heading leading-tight mb-2">
                Read Full Devotionals
              </h2>
              <p className="text-[13px] text-text leading-relaxed">
                Enter the email you subscribed with to unlock all devotional content.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label htmlFor="verify-email" className="block text-[12px] font-medium text-heading mb-1.5">
                  Email Address
                </label>
                <input
                  id="verify-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-black/15 rounded-md text-[14px] text-heading placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === "verifying"}
                className="w-full py-3 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "verifying" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Read"
                )}
              </button>

              <p className="text-[12px] text-text/50 text-center leading-relaxed">
                Not a subscriber yet?{" "}
                <button
                  type="button"
                  onClick={() => { setStep("subscribe"); setStatus("idle"); }}
                  className="text-primary font-medium hover:underline"
                >
                  Subscribe for free
                </button>
              </p>
            </form>
          </>
        )}

        {/* Step 2: Full subscription form (for new users) */}
        {step === "subscribe" && (status === "idle" || status === "submitting") && (
          <>
            <button
              onClick={handleClose}
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

            <form onSubmit={handleSubscribe} className="space-y-4">
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

              <p className="text-[12px] text-text/50 text-center leading-relaxed">
                Already a subscriber?{" "}
                <button
                  type="button"
                  onClick={() => { setStep("verify"); setStatus("idle"); }}
                  className="text-primary font-medium hover:underline"
                >
                  Verify your email
                </button>
              </p>
            </form>
          </>
        )}

        {/* Approved — subscriber verified */}
        {status === "approved" && (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Welcome!
            </h3>
            <p className="text-[13px] text-text">
              Your email has been verified. Enjoy reading our devotionals!
            </p>
          </div>
        )}

        {/* Blacklisted — bounced or unsubscribed */}
        {status === "blacklisted" && (
          <div className="text-center py-4">
            <ShieldX className="w-12 h-12 text-red-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Email Not Authorized
            </h3>
            <p className="text-[13px] text-text mb-4 leading-relaxed">
              This email is no longer active on our subscriber list. It may have been removed due to a bounce or unsubscribe request. Please try a different email address.
            </p>
            <button
              onClick={() => { setStatus("idle"); setEmail(""); }}
              className="px-6 py-2 bg-primary text-white text-[13px] font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              Try Different Email
            </button>
          </div>
        )}

        {/* Verification sent (Mailchimp flow) */}
        {status === "verification_sent" && (
          <div className="text-center py-4">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Check Your Email
            </h3>
            <p className="text-[13px] text-text leading-relaxed mb-1">
              We sent a confirmation link to
            </p>
            <p className="text-[13px] font-medium text-heading mb-3">
              {submittedEmail}
            </p>
            <p className="text-[13px] text-text leading-relaxed mb-6">
              Please click the link to verify your subscription and unlock all devotionals.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 border border-black/15 text-heading text-[13px] font-medium rounded-md hover:bg-black/5 transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Pending verification (Mailchimp flow) */}
        {status === "pending_verification" && (
          <div className="text-center py-4">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Confirmation Resent
            </h3>
            <p className="text-[13px] text-text leading-relaxed mb-1">
              We resent the confirmation link to
            </p>
            <p className="text-[13px] font-medium text-heading mb-3">
              {submittedEmail}
            </p>
            <p className="text-[13px] text-text leading-relaxed mb-6">
              Please check your inbox (and spam folder) and click the link to verify.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 border border-black/15 text-heading text-[13px] font-medium rounded-md hover:bg-black/5 transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Already subscribed (Mailchimp flow) */}
        {status === "already_subscribed" && (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Welcome Back!
            </h3>
            <p className="text-[13px] text-text">
              You are a verified subscriber. Enjoy reading our devotionals!
            </p>
          </div>
        )}

        {/* Forgotten (GDPR removed) */}
        {status === "forgotten" && (
          <div className="text-center py-4">
            <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Email Unavailable
            </h3>
            <p className="text-[13px] text-text mb-4 leading-relaxed">
              This email was previously removed from our list and cannot be re-added. Please try a different email address.
            </p>
            <button
              onClick={() => { setStatus("idle"); setEmail(""); setStep("subscribe"); }}
              className="px-6 py-2 bg-primary text-white text-[13px] font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              Use Different Email
            </button>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="text-center py-4">
            <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-[20px] font-bold text-heading mb-2">
              Something Went Wrong
            </h3>
            <p className="text-[13px] text-text mb-4">
              We could not process your request. Please try again later.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 border border-black/15 text-heading text-[13px] font-medium rounded-md hover:bg-black/5 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
