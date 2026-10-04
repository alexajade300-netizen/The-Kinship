import React from "react";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { ArrowRight } from "lucide-react";

export function StageTimeline() {
  return (
    <div className="w-full">
      {/* Desktop Horizontally Progressive Layout */}
      <div className="hidden lg:grid grid-cols-6 gap-3 items-stretch">
        {COURSES.map((course, idx) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group relative bg-[#FCF9F3] p-5 rounded-xl border border-[#EADFD2] hover:border-[#8A1F42]/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#8A1F42] mb-3">
                <span>{course.stageNumber}</span>
                {idx < COURSES.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#CDAE68] group-hover:translate-x-0.5 transition-transform" />
                )}
              </div>
              <h4 className="font-serif text-base font-bold text-[#251C1E] group-hover:text-[#4B0C1B] leading-tight transition-colors">
                {course.stage}
              </h4>
              <p className="mt-2 text-xs text-[#6E6466] leading-snug">
                {course.tagline.replace(/^A \d+-(day|week) plan to help both (partners|parents) /, "").replace(/^A practical plan to help parents /, "").replace(/^Help your child /, "")}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EADFD2]/60 flex items-center justify-between text-[11px] font-medium text-[#4B0C1B]">
              <span>Explore</span>
              <span className="text-[10px] text-[#8A1F42]">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tablet Layout (2 rows of 3) */}
      <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4">
        {COURSES.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group bg-[#FCF9F3] p-5 rounded-xl border border-[#EADFD2] hover:border-[#8A1F42]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono font-semibold text-[#8A1F42] mb-2">
                STAGE {course.stageNumber}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#251C1E] group-hover:text-[#4B0C1B]">
                {course.stage}
              </h4>
              <p className="mt-2 text-xs text-[#6E6466]">
                {course.tagline}
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-[#4B0C1B] flex items-center gap-1">
              <span>View Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Vertically Progressive Layout */}
      <div className="sm:hidden space-y-3">
        {COURSES.map((course, idx) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="block group bg-[#FCF9F3] p-4 rounded-xl border border-[#EADFD2] hover:border-[#8A1F42]/40 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {course.stageNumber}
                </span>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#251C1E] group-hover:text-[#4B0C1B]">
                    {course.stage}
                  </h4>
                  <p className="text-xs text-[#6E6466] mt-0.5 line-clamp-1">
                    {course.tagline}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8A1F42] flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
