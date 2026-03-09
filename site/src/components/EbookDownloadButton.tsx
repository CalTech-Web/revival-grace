"use client";

import { useSubscription } from "@/contexts/SubscriptionContext";
import type { ReactNode } from "react";

interface EbookDownloadButtonProps {
  className?: string;
  children: ReactNode;
}

export default function EbookDownloadButton({ className, children }: EbookDownloadButtonProps) {
  const { isSubscribed, setShowPopup } = useSubscription();

  const handleClick = () => {
    if (isSubscribed) {
      window.open("/files/the-flame-of-revival.pdf", "_blank");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
