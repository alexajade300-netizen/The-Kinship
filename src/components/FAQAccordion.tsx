"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-btn-${idx}`;
        const contentId = `faq-content-${idx}`;

        return (
          <div
            key={idx}
            className="border border-[#EADFD2] bg-[#FCF9F3] rounded-xl overflow-hidden transition-all duration-200"
          >
            <h3 className="font-sans m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full px-6 py-5 sm:py-5.5 text-left flex items-center justify-between gap-4 hover:bg-[#F0E0E3]/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A1F42]"
              >
                <span className="font-sans text-base sm:text-lg font-semibold text-[#251C1E] leading-snug">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full text-[#4B0C1B] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 bg-[#F0E0E3]" : "bg-transparent"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-6 pt-3 text-sm sm:text-base font-sans font-normal text-[#6E6466] leading-relaxed border-t border-[#EADFD2]/60 bg-white"
              >
                <p className="font-sans text-[#6E6466] leading-relaxed font-normal">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
