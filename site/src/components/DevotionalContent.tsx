"use client";

import { useEffect, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

interface Props {
  children: ReactNode;
  preview?: string;
}

export default function DevotionalContent({ children, preview }: Props) {
  const { isSubscribed, setShowPopup } = useSubscription();

  useEffect(() => {
    if (!isSubscribed) {
      setShowPopup(true);
    }
  }, [isSubscribed, setShowPopup]);

  if (isSubscribed) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Preview paragraph */}
      {preview && (
        <p className="text-text leading-relaxed mb-6">{preview}</p>
      )}

      {/* Blurred overlay */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="blur-sm opacity-40 pointer-events-none select-none" aria-hidden="true">
          <p className="text-text leading-relaxed mb-6">
            Continue reading to discover powerful biblical insights that will transform your understanding and strengthen your walk with Christ. This devotional explores the depths of God&apos;s Word and reveals practical truths for everyday living.
          </p>
          <p className="text-text leading-relaxed mb-6">
            Through careful study of Scripture, we uncover the timeless principles that guide believers toward a life of purpose, holiness, and unwavering faith. Each passage brings new revelation and deeper connection with our Creator.
          </p>
          <p className="text-text leading-relaxed mb-6">
            As we journey through these teachings, allow the Holy Spirit to illuminate your heart and mind. God&apos;s Word is living and active, ready to speak into every situation you face today.
          </p>
        </div>

        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Subscribe CTA */}
        <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
          <div className="inline-flex items-center gap-2 mb-3 text-text/60">
            <Lock className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-[13px] font-medium">Subscribe to continue reading</span>
          </div>
          <div>
            <button
              onClick={() => setShowPopup(true)}
              className="px-8 py-3 bg-primary text-white text-[13px] font-medium tracking-wide rounded-md hover:bg-primary-dark transition-colors"
            >
              Subscribe for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
