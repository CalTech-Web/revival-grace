"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, AlertTriangle, Loader2, Clock } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

const INTENDED_URL_KEY = "rgm_intended_url";

function VerifiedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { markAsSubscribed } = useSubscription();
  const [status, setStatus] = useState<"loading" | "verified" | "pending" | "not_found" | "error">("loading");
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      setStatus("error");
      return;
    }

    async function verifyEmail() {
      try {
        const res = await fetch(`/api/check-subscriber?email=${encodeURIComponent(email!)}`);
        if (!res.ok) {
          setStatus("error");
          return;
        }

        const data = await res.json();

        if (data.status === "subscribed") {
          markAsSubscribed(email!);
          setStatus("verified");

          const intendedUrl = sessionStorage.getItem(INTENDED_URL_KEY);
          sessionStorage.removeItem(INTENDED_URL_KEY);

          setTimeout(() => {
            router.push(intendedUrl || "/devotionals");
          }, 2500);
        } else if (data.status === "pending") {
          setStatus("pending");
        } else {
          setStatus("not_found");
        }
      } catch {
        setStatus("error");
      }
    }

    verifyEmail();
  }, [email, markAsSubscribed, router]);

  return (
    <div className="max-w-md w-full text-center">
      {status === "loading" && (
        <div className="py-12">
          <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" strokeWidth={1.5} />
          <h1 className="font-serif text-[24px] font-bold text-heading mb-2">
            Verifying Your Email
          </h1>
          <p className="text-[14px] text-text">
            Please wait while we confirm your subscription...
          </p>
        </div>
      )}

      {status === "verified" && (
        <div className="py-12">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-serif text-[28px] font-bold text-heading mb-2">
            Email Verified!
          </h1>
          <p className="text-[14px] text-text mb-2">
            Your subscription is confirmed. You now have full access to all devotionals.
          </p>
          <p className="text-[13px] text-text/60">
            Redirecting you now...
          </p>
        </div>
      )}

      {status === "pending" && (
        <div className="py-12">
          <Clock className="w-16 h-16 text-secondary mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-serif text-[24px] font-bold text-heading mb-2">
            Not Yet Confirmed
          </h1>
          <p className="text-[14px] text-text mb-6">
            Your email has not been confirmed yet. Please check your inbox and click the confirmation link.
          </p>
          <button
            onClick={() => router.push("/devotionals")}
            className="px-6 py-2.5 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors"
          >
            Browse Devotionals
          </button>
        </div>
      )}

      {status === "not_found" && (
        <div className="py-12">
          <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-serif text-[24px] font-bold text-heading mb-2">
            Subscription Not Found
          </h1>
          <p className="text-[14px] text-text mb-6">
            We could not find this subscription. Please subscribe again to get access.
          </p>
          <button
            onClick={() => router.push("/devotionals")}
            className="px-6 py-2.5 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors"
          >
            Go to Devotionals
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="py-12">
          <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-serif text-[24px] font-bold text-heading mb-2">
            Something Went Wrong
          </h1>
          <p className="text-[14px] text-text mb-6">
            {!email
              ? "This link appears to be invalid. Please try subscribing again."
              : "We could not verify your email. Please try again later."}
          </p>
          <button
            onClick={() => router.push("/devotionals")}
            className="px-6 py-2.5 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors"
          >
            Go to Devotionals
          </button>
        </div>
      )}
    </div>
  );
}

export default function VerifiedPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Suspense
        fallback={
          <div className="max-w-md w-full text-center py-12">
            <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" strokeWidth={1.5} />
            <h1 className="font-serif text-[24px] font-bold text-heading mb-2">
              Verifying Your Email
            </h1>
            <p className="text-[14px] text-text">
              Please wait while we confirm your subscription...
            </p>
          </div>
        }
      >
        <VerifiedContent />
      </Suspense>
    </div>
  );
}
