import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  headline?: string;
  copy?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  eyebrow = "START WHERE YOU ARE",
  headline = "The next stage doesn't need to come with more confusion.",
  copy = "Choose the KINSHIP course that matches your family today and move forward with a clearer plan.",
  buttonText = "EXPLORE THE COURSES",
  buttonHref = "/courses",
}: CTASectionProps) {
  return (
    <section className="relative bg-[#4B0C1B] text-[#F8F2E8] py-20 lg:py-24 overflow-hidden">
      {/* Restrained background dot accent */}
      <div 
        className="absolute inset-0 opacity-5 bg-dots-pattern pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#CDAE68] mb-4">
          {eyebrow}
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F2E8] leading-tight max-w-2xl mx-auto">
          {headline}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#F0E0E3]/85 max-w-xl mx-auto leading-relaxed">
          {copy}
        </p>

        <div className="mt-10">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 bg-[#F8F2E8] text-[#4B0C1B] hover:bg-white hover:text-[#8A1F42] shadow-md hover:shadow-lg active:scale-[0.98] focus:ring-2 focus:ring-[#CDAE68] focus:outline-none"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
