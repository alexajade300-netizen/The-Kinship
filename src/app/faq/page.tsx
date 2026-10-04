import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIZED_FAQS } from "@/data/siteContent";
import { FAQAccordion } from "@/components/FAQAccordion";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { CTASection } from "@/components/CTASection";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — KINSHIP",
  description:
    "Find clear answers to common questions about KINSHIP courses, purchasing, access via Whop, and educational scope.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 bg-[#F8F2E8] border-b border-[#EADFD2] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-dots-faint pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
            SUPPORT &amp; CLARITY
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[#251C1E] leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E6466] max-w-xl mx-auto leading-relaxed">
            Clear, honest answers about our parenting courses, evidence-led approach, and digital platform.
          </p>
        </div>
      </section>

      {/* Categorized FAQs Section */}
      <section className="py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {CATEGORIZED_FAQS.map((category) => (
              <div key={category.category} className="scroll-mt-28" id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#EADFD2]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8A1F42]">
                    CATEGORY
                  </span>
                  <span className="text-[#CDAE68] font-bold">&bull;</span>
                  <h2 className="font-serif text-2xl font-bold text-[#251C1E]">
                    {category.category}
                  </h2>
                </div>

                <FAQAccordion items={category.items} defaultOpenIndex={0} />
              </div>
            ))}
          </div>

          {/* Educational Disclaimer Section */}
          <div className="mt-20">
            <DisclaimerBlock />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="FIND YOUR COURSE"
        headline="Ready to start with evidence-led clarity?"
        copy="Select the course designed for your child's stage and move forward with confidence."
        buttonText="EXPLORE ALL COURSES"
        buttonHref="/courses"
      />
    </div>
  );
}
