"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface Subscriber {
  name: string;
  email: string;
  subscribedAt: string;
}

interface SubscriptionContextType {
  isSubscribed: boolean;
  subscriberEmail: string | null;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
  subscribe: (name: string, email: string) => Promise<"success" | "already_subscribed" | "blocked">;
  checkEmail: (email: string) => "new" | "already_subscribed" | "blocked";
}

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

const STORAGE_KEY = "rgm_subscriber";
const ATTEMPTS_KEY = "rgm_attempts";
const COOKIE_NAME = "rgm_sub";
const MAX_ATTEMPTS = 3;

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

  const checkEmail = useCallback((email: string): "new" | "already_subscribed" | "blocked" => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const subscriber: Subscriber = JSON.parse(stored);
        if (subscriber.email.toLowerCase() === email.toLowerCase()) {
          return "already_subscribed";
        }
      } catch {
        // ignore
      }
    }

    const attemptsRaw = localStorage.getItem(ATTEMPTS_KEY);
    if (attemptsRaw) {
      try {
        const attempts: Record<string, number> = JSON.parse(attemptsRaw);
        const key = email.toLowerCase();
        if ((attempts[key] || 0) >= MAX_ATTEMPTS) {
          return "blocked";
        }
      } catch {
        // ignore
      }
    }

    return "new";
  }, []);

  const subscribe = useCallback(async (name: string, email: string): Promise<"success" | "already_subscribed" | "blocked"> => {
    const status = checkEmail(email);
    if (status !== "new") return status;

    // Track attempts
    const attemptsRaw = localStorage.getItem(ATTEMPTS_KEY);
    const attempts: Record<string, number> = attemptsRaw ? JSON.parse(attemptsRaw) : {};
    const key = email.toLowerCase();
    attempts[key] = (attempts[key] || 0) + 1;
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));

    // Store subscriber
    const subscriber: Subscriber = {
      name,
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriber));
    setCookie(COOKIE_NAME, "1", 365);
    setIsSubscribed(true);
    setSubscriberEmail(email.toLowerCase());

    // POST to CalTech Web forms service (fire and forget)
    try {
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "revivalgrace.com",
          name,
          email,
          message: `New devotional subscriber: ${name} (${email})`,
          source: "registration",
        }),
      });
    } catch {
      // Forms service may reject due to CORS before domain is registered.
      // Subscription still works locally.
    }

    return "success";
  }, [checkEmail]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <SubscriptionContext.Provider
      value={{ isSubscribed, subscriberEmail, showPopup, setShowPopup, subscribe, checkEmail }}
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
  subscribe: async () => "success",
  checkEmail: () => "new",
};

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  return ctx ?? defaultValue;
}
