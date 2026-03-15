"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface Subscriber {
  name: string;
  email: string;
  subscribedAt: string;
}

export type SubscribeResult =
  | "verification_sent"
  | "pending_verification"
  | "already_subscribed"
  | "forgotten"
  | "error";

export type VerifyResult = "approved" | "blacklisted" | "not_found" | "error";

interface SubscriptionContextType {
  isSubscribed: boolean;
  subscriberEmail: string | null;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
  showDonationPopup: boolean;
  setShowDonationPopup: (show: boolean) => void;
  subscribe: (name: string, email: string) => Promise<SubscribeResult>;
  verifyEmail: (email: string) => Promise<VerifyResult>;
  markAsSubscribed: (email: string, name?: string) => void;
  storeIntendedUrl: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

const STORAGE_KEY = "rgm_subscriber";
const COOKIE_NAME = "rgm_sub";
const INTENDED_URL_KEY = "rgm_intended_url";
const DONATION_SHOWN_KEY = "rgm_donation_shown";

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    const cookie = getCookie(COOKIE_NAME);

    if (stored) {
      try {
        const subscriber: Subscriber = JSON.parse(stored);
        setIsSubscribed(true);
        setSubscriberEmail(subscriber.email);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    } else if (cookie === "1") {
      setIsSubscribed(true);
    }
  }, []);

  const markAsSubscribed = useCallback((email: string, name?: string) => {
    const subscriber: Subscriber = {
      name: name || "",
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriber));
    setCookie(COOKIE_NAME, "1", 365);
    setIsSubscribed(true);
    setSubscriberEmail(email.toLowerCase());
  }, []);

  const triggerDonationPopup = useCallback(() => {
    const alreadyShown = localStorage.getItem(DONATION_SHOWN_KEY);
    if (!alreadyShown) {
      setTimeout(() => {
        setShowDonationPopup(true);
      }, 500);
    }
  }, []);

  const storeIntendedUrl = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(INTENDED_URL_KEY, window.location.pathname + window.location.search);
    }
  }, []);

  const verifyEmail = useCallback(async (email: string): Promise<VerifyResult> => {
    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) return "error";

      const data = await res.json();
      const status = data.status as VerifyResult;

      if (status === "approved") {
        markAsSubscribed(email);
        triggerDonationPopup();
      }

      return status;
    } catch {
      return "error";
    }
  }, [markAsSubscribed, triggerDonationPopup]);

  const subscribe = useCallback(async (name: string, email: string): Promise<SubscribeResult> => {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) return "error";

      const data = await res.json();
      const status = data.status as SubscribeResult;

      if (status === "already_subscribed") {
        markAsSubscribed(email, name);
      }

      return status;
    } catch {
      return "error";
    }
  }, [markAsSubscribed]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <SubscriptionContext.Provider
      value={{
        isSubscribed,
        subscriberEmail,
        showPopup,
        setShowPopup,
        showDonationPopup,
        setShowDonationPopup,
        subscribe,
        verifyEmail,
        markAsSubscribed,
        storeIntendedUrl,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

const defaultValue: SubscriptionContextType = {
  isSubscribed: false,
  subscriberEmail: null,
  showPopup: false,
  setShowPopup: () => {},
  showDonationPopup: false,
  setShowDonationPopup: () => {},
  subscribe: async () => "error",
  verifyEmail: async () => "error",
  markAsSubscribed: () => {},
  storeIntendedUrl: () => {},
};

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  return ctx ?? defaultValue;
}
