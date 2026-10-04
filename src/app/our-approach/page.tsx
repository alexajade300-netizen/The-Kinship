import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { METHODOLOGY_STEPS, EVIDENCE_LEVELS } from "@/data/siteContent";
import { EvidenceScale } from "@/components/EvidenceScale";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { CTASection } from "@/components/CTASection";
import { Check, X, ArrowRight, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach — Evidence-Led Parenting Education",
  description:
    "Learn about the KINSHIP educational philosophy: synthesizing developmental science, evaluating evidence strength, and avoiding hyper-optimization in parenting.",
};

export default function OurApproachPage() {
  const whatKinshipIs = [
    "Educational guidance grounded in developmental science and pediatric consensus.",
    "Structured, self-paced learning designed for both parents and partners.",
    "Practical tools, trackers, and question logs for real family living.",
    "Support for informed, productive conversations with your care team.",
    "Stage-specific education tailored to where your family is right now.",
  ];

  const whatKinshipIsNot = [
    "Medical diagnosis, clinical evaluation, or pediatric triage.",
    "Individualized medical, psychological, or developmental treatment.",
    "Emergency guidance or crisis healthcare services.",
    "A replacement for qualified physicians, midwives, or mental health providers.",
    "A guarantee of a specific pregnancy, health, developmental, behavioral, or parenting outcome.",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 bg-[#F8F2E8] border-b border-[#EADFD2] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-dots-faint pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
            OUR PHILOSOPHY
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#251C1E] leading-tight">
            Clearer information. <br />
            <span className="text-[#4B0C1B]">More confident parenting.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[#6E6466] max-w-2xl mx-auto leading-relaxed">
            KINSHIP exists to help parents understand complex information without turning parenthood into a constant optimization project.
          </p>
        </div>
      </section>

      {/* The 6-Step Framework */}
      <section className="py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              THE KINSHIP METHODOLOGY
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              From scientific evidence to everyday life.
            </h2>
            <p className="mt-3 text-base text-[#6E6466]">
              A consistent six-step framework applied across every course and developmental stage.
            </p>
          </div>

          <div className="space-y-4">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <div
                key={m.step}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-mono text-sm font-bold flex items-center justify-center flex-shrink-0 border border-[#8A1F42]/15">
                    {m.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#251C1E]">
                      {m.name} &mdash; <span className="font-sans text-base font-medium text-[#8A1F42]">{m.headline}</span>
                    </h3>
                    <p className="text-sm text-[#6E6466] mt-1 leading-relaxed max-w-2xl">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Hierarchy Section */}
      <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              COMMUNICATING UNCERTAINTY
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Evidence strength varies.
            </h2>
            <p className="mt-3 text-base text-[#6E6466]">
              Rather than presenting every parenting claim with equal confidence, KINSHIP aims to communicate nuance, evidence quality, and clinical consensus.
            </p>
          </div>

          <EvidenceScale />
        </div>
      </section>

      {/* What KINSHIP Is vs What KINSHIP Is Not */}
      <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              CLINICAL BOUNDARIES & SCOPE
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Clear expectations for every family.
            </h2>
            <p className="mt-3 text-base text-[#6E6466]">
              We believe ethical education begins with complete transparency about what we do and do not provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* What KINSHIP Is */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F0E0E3] text-[#4B0C1B] mb-6">
                  <Check className="w-3.5 h-3.5 text-[#8A1F42]" />
                  <span>WHAT KINSHIP IS</span>
                </div>
                <ul className="space-y-4">
                  {whatKinshipIs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FCF9F3] border border-[#8A1F42]/30 text-[#8A1F42] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-[#251C1E] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What KINSHIP Is Not */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F0E0E3] text-[#4B0C1B] mb-6">
                  <X className="w-3.5 h-3.5 text-[#8A1F42]" />
                  <span>WHAT KINSHIP IS NOT</span>
                </div>
                <ul className="space-y-4">
                  {whatKinshipIsNot.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FCF9F3] border border-[#EADFD2] text-[#6E6466] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-[#8A1F42]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#6E6466] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Educational Disclaimer Block */}
          <div className="mt-14 max-w-4xl mx-auto">
            <DisclaimerBlock />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="READY TO EXPLORE"
        headline="Start with the course that matches your stage."
        copy="Practical, evidence-led parenting education designed to give your family clarity."
        buttonText="EXPLORE COURSES"
        buttonHref="/courses"
      />
    </div>
  );
}
