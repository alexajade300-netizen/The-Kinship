import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseData } from "@/data/courses";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: CourseData;
  featured?: boolean;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group relative bg-[#FCF9F3] rounded-xl sm:rounded-2xl border border-[#EADFD2] hover:border-[#8A1F42]/30 transition-all duration-300 hover:shadow-card flex flex-col h-full overflow-hidden">
      {/* Compact Top Artwork Container (Reduced overall card height by ~40%) */}
      <div className="relative aspect-[16/11] sm:aspect-[16/11] bg-white flex items-center justify-center p-2.5 sm:p-3 border-b border-[#EADFD2]/60 overflow-hidden">
        {/* Subtle dot accent in corner */}
        <div 
          className="absolute inset-0 opacity-10 bg-dots-faint pointer-events-none"
          aria-hidden="true" 
        />
        
        {/* Artwork Image with 18% internal zoom (scale 1.18) so central symbol is prominent within compact frame */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden transform scale-[1.18] transition-transform duration-300 group-hover:scale-[1.22]">
          <Image
            src={course.image}
            alt={course.altText}
            width={600}
            height={600}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            quality={100}
            className="object-contain w-auto h-auto max-w-full max-h-full"
            loading="lazy"
          />
        </div>

        {/* Stage Number Badge */}
        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
          <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-medium tracking-wider bg-[#F8F2E8]/95 border border-[#EADFD2] text-[#4B0C1B]">
            STAGE {course.stageNumber}
          </span>
        </div>
      </div>

      {/* Compact Content Area with proportional spacing */}
      <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Stage Eyebrow */}
          <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#8A1F42] mb-1 truncate">
            {course.stage}
          </div>

          {/* Compact Course Title */}
          <h3 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-[#251C1E] leading-snug group-hover:text-[#4B0C1B] transition-colors line-clamp-2">
            <Link href={`/courses/${course.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {course.title}
            </Link>
          </h3>

          {/* Mobile-only compact curriculum badge */}
          <div className="sm:hidden mt-1.5 text-[10px] font-medium text-[#6E6466] flex items-center gap-1.5">
            <span>{course.phaseCount} Phases</span>
            <span className="text-[#CDAE68]">&bull;</span>
            <span>{course.moduleCount} Mods</span>
          </div>

          {/* Desktop/Tablet Tagline (tight 2 lines) */}
          <p className="hidden sm:block mt-2 text-xs text-[#6E6466] leading-relaxed line-clamp-2">
            {course.tagline}
          </p>

          {/* Desktop/Tablet Compact Stats Bar */}
          <div className="hidden sm:grid mt-3 pt-2.5 border-t border-[#EADFD2]/70 grid-cols-3 gap-1 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold text-[#251C1E]">{course.phaseCount} Phases</span>
              <span className="text-[9px] text-[#6E6466] uppercase">Curriculum</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#EADFD2]/70 px-0.5">
              <span className="text-[11px] font-semibold text-[#251C1E]">{course.moduleCount} Modules</span>
              <span className="text-[9px] text-[#6E6466] uppercase">In-Depth</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold text-[#251C1E]">{course.toolCount} Tools</span>
              <span className="text-[9px] text-[#6E6466] uppercase">Practical</span>
            </div>
          </div>
        </div>

        {/* Compact Price & Action Button */}
        <div className="mt-2.5 pt-2 sm:mt-3.5 sm:pt-2.5 border-t border-[#EADFD2]/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 relative z-10">
          <div className="flex items-baseline sm:block gap-1">
            <div className="text-xs sm:text-base font-serif font-bold text-[#4B0C1B] leading-none">
              ${course.priceNum || 99}
            </div>
            <div className="text-[8px] sm:text-[10px] text-[#6E6466] uppercase tracking-wider">
              One-time
            </div>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-[#4B0C1B] text-[#F8F2E8] group-hover:bg-[#8A1F42] transition-colors shadow-sm focus:ring-2 focus:ring-[#8A1F42] focus:outline-none"
          >
            <span className="sm:hidden">Explore</span>
            <span className="hidden sm:inline">Explore Course</span>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
