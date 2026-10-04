import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { COURSES, getCourseBySlug } from "@/data/courses";
import { CourseHero } from "@/components/CourseHero";
import { PhaseAccordion } from "@/components/PhaseAccordion";
import { EvidenceScale } from "@/components/EvidenceScale";
import { FAQAccordion } from "@/components/FAQAccordion";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { MobilePurchaseBar } from "@/components/MobilePurchaseBar";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Wrench,
  Users,
  Compass,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};

  return {
    title: `${course.title} | KINSHIP`,
    description: course.tagline,
    openGraph: {
      title: `${course.title} | KINSHIP`,
      description: course.tagline,
      images: [
        {
          url: course.image,
          width: 260,
          height: 260,
          alt: course.altText,
        },
      ],
    },
  };
}

export default function CoursePage({ params }: Props) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  // Schema.org Course structured data
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.tagline,
    "provider": {
      "@type": "Organization",
      "name": "KINSHIP",
      "sameAs": "https://kinshipeducation.com",
    },
    "offers": {
      "@type": "Offer",
      "price": course.priceNum ? `${course.priceNum}.00` : "99.00",
      "priceCurrency": "USD",
      "category": "Parenting Education",
      "availability": "https://schema.org/InStock",
      "url": course.checkoutUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* 1 - 8: HERO SECTION (Breadcrumbs, Eyebrow, Title, Tagline, Image, Price, Stats, Purchase CTA) */}
        <CourseHero course={course} />

        {/* 9: WHAT THIS STAGE CAN FEEL LIKE */}
        <section className="py-16 lg:py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42] mb-3">
              REALITY & REASSURANCE
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#251C1E] leading-snug">
              {course.whatItFeelsLike.headline}
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.whatItFeelsLike.points.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#EADFD2] shadow-subtle flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    &bull;
                  </span>
                  <p className="text-sm text-[#6E6466] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10: COURSE PROMISE & 11: WHAT YOU WILL LEARN */}
        <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* The Course Promise */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#EADFD2] shadow-subtle mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10 bg-dots-faint pointer-events-none" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#CDAE68]">
                THE KINSHIP PROMISE
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#251C1E]">
                A clear, shared plan for this stage.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#251C1E]/90 leading-relaxed max-w-3xl">
                {course.promise}
              </p>
            </div>

            {/* What You Will Learn */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
                  LEARNING OUTCOMES
                </span>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
                  What you will learn in this course.
                </h2>
                <p className="mt-3 text-base text-[#6E6466]">
                  Concrete, evidence-led understanding designed to eliminate anxiety and confusion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#EADFD2] shadow-subtle flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8A1F42] flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-[#251C1E] leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 & 13: PHASE BREAKDOWN & MODULE OVERVIEW (ACCORDIONS) */}
        <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
                CURRICULUM BREAKDOWN
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
                {course.phaseCount} Phases. {course.moduleCount} Modules.
              </h2>
              <p className="mt-3 text-base text-[#6E6466]">
                Organized into distinct phases so you can navigate the material comfortably at your own pace without feeling overwhelmed.
              </p>
            </div>

            {/* Accessible Curriculum Accordion */}
            <PhaseAccordion phases={course.phases} />
          </div>
        </section>

        {/* 14: PRACTICAL TOOLS */}
        <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
                INCLUDED RESOURCES
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
                {course.toolCount} Practical Tools &amp; Trackers
              </h2>
              <p className="mt-3 text-base text-[#6E6466]">
                Every module is supported by usable resources designed to turn information into everyday family habits and focused clinical conversations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.practicalTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#EADFD2] shadow-subtle flex items-start gap-3 hover:border-[#8A1F42]/30 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-[#FCF9F3] border border-[#EADFD2] text-[#8A1F42] font-mono text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#251C1E] leading-snug">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15 & 16: BENEFITS & WHO IT IS FOR */}
        <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {/* Benefits */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42] mb-3">
                    <Sparkles className="w-4 h-4 text-[#CDAE68]" />
                    <span>Key Advantages</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#251C1E] mb-6">
                    Why parents choose this course.
                  </h3>
                  <ul className="space-y-4">
                    {course.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#8A1F42] flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-[#251C1E]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who It Is For */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42] mb-3">
                    <Users className="w-4 h-4 text-[#8A1F42]" />
                    <span>Suitability</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#251C1E] mb-6">
                    Who this course is designed for.
                  </h3>
                  <ul className="space-y-4">
                    {course.whoItIsFor.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#CDAE68] flex-shrink-0 mt-2" />
                        <span className="text-sm sm:text-base text-[#251C1E]">
                          {target}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 17: KINSHIP EVIDENCE APPROACH */}
        <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
                SCIENTIFIC RIGOR
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#251C1E]">
                The KINSHIP Evidence Standard
              </h2>
              <p className="mt-2 text-sm text-[#6E6466]">
                How we evaluate research for {course.stage.toLowerCase()} so you get trustworthy, balanced answers.
              </p>
            </div>
            <EvidenceScale />
          </div>
        </section>

        {/* 18: STAGE FAQ */}
        <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
                STAGE QUESTIONS
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#251C1E]">
                Frequently asked questions for {course.stage}.
              </h2>
            </div>
            <FAQAccordion items={course.faqs} />
          </div>
        </section>

        {/* 19: EDUCATIONAL DISCLAIMER */}
        <section className="py-12 bg-[#F8F2E8] border-b border-[#EADFD2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <DisclaimerBlock />
          </div>
        </section>

        {/* 20: FINAL PURCHASE CTA */}
        <section className="relative bg-[#4B0C1B] text-[#F8F2E8] py-20 lg:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5 bg-dots-pattern pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#CDAE68] mb-3 inline-block">
              STAGE {course.stageNumber} &middot; {course.stage.toUpperCase()}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F2E8] leading-tight">
              {course.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#F0E0E3]/85 max-w-xl mx-auto leading-relaxed">
              {course.tagline}
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-2">
              <span className="text-4xl font-serif font-bold text-[#F8F2E8]">${course.priceNum || 99}</span>
              <span className="text-xs uppercase tracking-wider text-[#CDAE68]">One-time payment</span>
            </div>

            <div className="mt-8">
              <a
                href={course.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 bg-[#F8F2E8] text-[#4B0C1B] hover:bg-white hover:text-[#8A1F42] shadow-md hover:shadow-lg active:scale-[0.98] focus:ring-2 focus:ring-[#CDAE68] focus:outline-none"
              >
                <span>{`GET INSTANT ACCESS — $${course.priceNum || 99}`}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>

            <p className="mt-4 text-xs text-[#F0E0E3]/60">
              Instant access handled securely via Whop checkout.
            </p>
          </div>
        </section>

        {/* 21: LINK TO PREVIOUS / NEXT LIFE STAGE */}
        <section className="py-10 bg-[#FCF9F3] border-b border-[#EADFD2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {course.prevSlug ? (
                <Link
                  href={`/courses/${course.prevSlug}`}
                  className="w-full sm:w-auto inline-flex items-center gap-2 text-xs font-medium text-[#6E6466] hover:text-[#4B0C1B] transition-colors p-2"
                >
                  <ArrowLeft className="w-4 h-4 text-[#8A1F42]" />
                  <span>Previous Stage: {course.prevTitle}</span>
                </Link>
              ) : (
                <div />
              )}

              {course.nextSlug ? (
                <Link
                  href={`/courses/${course.nextSlug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-end gap-2 text-xs font-medium text-[#6E6466] hover:text-[#4B0C1B] transition-colors p-2 text-right"
                >
                  <span>Next Stage: {course.nextTitle}</span>
                  <ArrowRight className="w-4 h-4 text-[#8A1F42]" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* 22: STICKY MOBILE PURCHASE BAR */}
        <MobilePurchaseBar
          title={course.title}
          checkoutUrl={course.checkoutUrl}
          priceNum={course.priceNum}
        />
      </div>
    </>
  );
}
