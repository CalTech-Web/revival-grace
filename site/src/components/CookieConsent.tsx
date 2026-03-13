"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "rgm_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4">
      <div className="max-w-2xl mx-auto bg-white border border-black/10 rounded-lg shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-text leading-relaxed flex-1">
          We use cookies and analytics to improve your experience. By continuing to use this site, you consent to our use of cookies. See our{" "}
          <a href="/privacy-policy" className="text-primary underline hover:text-primary-dark">
            Privacy Policy
          </a>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-[12px] font-medium text-text border border-black/15 rounded-md hover:bg-black/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-[12px] font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
