import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseData } from "@/data/courses";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, ExternalLink } from "lucide-react";

interface CourseHeroProps {
  course: CourseData;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-[#EADFD2] overflow-hidden">
      {/* Background subtle dots and ripple lines */}
      <div 
        className="absolute inset-0 opacity-15 bg-dots-faint pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#6E6466]">
            <li>
              <Link href="/" className="hover:text-[#4B0C1B] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/courses" className="hover:text-[#4B0C1B] transition-colors">
                Courses
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#4B0C1B] font-medium truncate max-w-[200px] sm:max-w-none">
              {course.stage}
            </li>
          </ol>
        </nav>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Course Info & CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Stage Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#F0E0E3] text-[#4B0C1B] border border-[#8A1F42]/15">
                STAGE {course.stageNumber} &middot; {course.stage.toUpperCase()}
              </span>
            </div>

            {/* Course Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251C1E] leading-[1.15] tracking-tight">
              {course.title}
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg sm:text-xl text-[#8A1F42] font-medium leading-relaxed">
              {course.tagline}
            </p>

            {/* Short Explanation */}
            <p className="mt-4 text-base text-[#6E6466] leading-relaxed max-w-2xl">
              {course.promise}
            </p>

            {/* Course Statistics Pill Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCF9F3] border border-[#EADFD2] text-xs font-semibold text-[#251C1E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A1F42]" />
                {course.phaseCount} Structured Phases
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCF9F3] border border-[#EADFD2] text-xs font-semibold text-[#251C1E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A1F42]" />
                {course.moduleCount} Comprehensive Modules
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FCF9F3] border border-[#EADFD2] text-xs font-semibold text-[#251C1E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDAE68]" />
                {course.toolCount} Practical Tools & Trackers
              </div>
            </div>

            {/* Price & Primary Purchase CTA */}
            <div className="mt-8 pt-6 border-t border-[#EADFD2] flex flex-col sm:flex-row sm:items-center gap-5">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0C1B]">
                    ${course.priceNum || 99}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#6E6466] font-medium">
                    One-time payment
                  </span>
                </div>
                <p className="text-[11px] text-[#6E6466] mt-0.5">
                  Secure checkout processed through Whop
                </p>
              </div>

              <div className="flex-1 sm:max-w-xs">
                <a
                  href={course.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-200 bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] shadow-md hover:shadow-lg active:scale-[0.98] focus:ring-2 focus:ring-[#8A1F42] focus:outline-none"
                >
                  <span>{`GET INSTANT ACCESS — $${course.priceNum || 99}`}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </div>

            {/* Trust Points */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6E6466]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8A1F42]" />
                <span>Instant access after checkout</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8A1F42]" />
                <span>Designed for both partners</span>
              </div>
            </div>
          </div>

          {/* Right Column: Supplied Course Artwork with 18% internal zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-[390px] bg-white rounded-2xl p-4 sm:p-5 border border-[#EADFD2] shadow-card">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EADFD2]/60 text-xs font-mono text-[#8A1F42]">
                <span>OFFICIAL ARTWORK</span>
                <span>STAGE {course.stageNumber}</span>
              </div>

              {/* Exact uncropped supplied artwork with controlled 18% zoom */}
              <div className="relative aspect-square w-full flex items-center justify-center bg-[#FCF9F3]/60 rounded-xl overflow-hidden p-2">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden transform scale-[1.18]">
                  <Image
                    src={course.image}
                    alt={course.altText}
                    width={800}
                    height={800}
                    sizes="(max-width: 1024px) 90vw, 450px"
                    quality={100}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-serif text-sm font-semibold text-[#251C1E]">
                  {course.title}
                </p>
                <p className="text-[11px] text-[#6E6466] uppercase tracking-wider mt-0.5">
                  Complete Educational Course &middot; 100% Asynchronous
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
