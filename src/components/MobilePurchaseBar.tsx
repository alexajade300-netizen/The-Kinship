"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface MobilePurchaseBarProps {
  title: string;
  checkoutUrl: string;
  priceNum?: number;
}

export function MobilePurchaseBar({ title, checkoutUrl, priceNum = 99 }: MobilePurchaseBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user has scrolled past hero area (approx 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile quick purchase"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#F8F2E8]/95 backdrop-blur-md border-t border-[#EADFD2] px-4 py-3 shadow-elevated lg:hidden transition-transform duration-200"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div>
          <div className="text-xl font-serif font-bold text-[#4B0C1B] leading-none">
            ${priceNum}
          </div>
          <div className="text-[10px] text-[#6E6466] uppercase tracking-wider mt-0.5 truncate max-w-[130px]">
            One-time purchase
          </div>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] shadow-md active:scale-[0.98] transition-colors"
        >
          <span>GET INSTANT ACCESS</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>
    </aside>
  );
}
