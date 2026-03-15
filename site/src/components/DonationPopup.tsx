"use client";

import { Heart, X } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

const DONATION_SHOWN_KEY = "rgm_donation_shown";

export default function DonationPopup() {
  const { showDonationPopup, setShowDonationPopup } = useSubscription();

  if (!showDonationPopup) return null;

  const handleDismiss = () => {
    localStorage.setItem(DONATION_SHOWN_KEY, "1");
    setShowDonationPopup(false);
  };

  const handleDonate = () => {
    localStorage.setItem(DONATION_SHOWN_KEY, "1");
    setShowDonationPopup(false);
    window.open("https://donate.stripe.com/00w5kv89ffaXcl0g9O9MY00", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-text/40 hover:text-text transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <Heart className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </div>

          <h2 className="font-serif text-[24px] font-bold text-heading leading-tight mb-3">
            Support the Ministry
          </h2>

          <p className="text-[13px] text-text leading-relaxed mb-6">
            Your generous donation helps Revival Grace Ministry continue providing free devotionals, eBooks, and spiritual resources to believers worldwide. Every gift, no matter the size, makes a difference.
          </p>

          <button
            onClick={handleDonate}
            className="w-full py-3 bg-accent text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-accent-light transition-colors flex items-center justify-center gap-2 mb-3"
          >
            <Heart className="w-4 h-4" strokeWidth={1.5} />
            Donate Now
          </button>

          <button
            onClick={handleDismiss}
            className="w-full py-2.5 text-text/60 text-[13px] font-medium hover:text-text transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
