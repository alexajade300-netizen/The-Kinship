import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { StageTimeline } from "@/components/StageTimeline";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Courses — Evidence-Led Parenting Education",
  description:
    "Explore all six KINSHIP parenting courses: Pre-Conception, Pregnancy, Newborn, Infant, Toddler, and Early Childhood.",
};

export default function CoursesPage() {
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
            COMPLETE CURRICULUM
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[#251C1E] leading-tight">
            Guidance for the stage you&apos;re in now.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E6466] max-w-2xl mx-auto leading-relaxed">
            Six comprehensive, evidence-led courses covering every transition from pre-conception through early childhood. Start with your current stage and move forward with confidence.
          </p>
        </div>
      </section>

      {/* Stage Navigation Timeline */}
      <section className="py-12 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#6E6466]">
              Navigate by Stage
            </h2>
          </div>
          <StageTimeline />
        </div>
      </section>

      {/* Six Course Cards in Chronological Order */}
      <section className="py-20 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Comparison Overview */}
      <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              COURSE COMPARISON
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#251C1E]">
              At a glance overview.
            </h2>
            <p className="mt-3 text-sm text-[#6E6466]">
              Compare stages, focus periods, curriculum size, and practical tools to find what fits your family.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl border border-[#EADFD2] shadow-subtle overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FCF9F3] border-b border-[#EADFD2] text-xs font-mono text-[#8A1F42] uppercase">
                  <th className="py-4 px-6 font-semibold">Stage</th>
                  <th className="py-4 px-6 font-semibold">Focus Window</th>
                  <th className="py-4 px-6 font-semibold text-center">Phases</th>
                  <th className="py-4 px-6 font-semibold text-center">Modules</th>
                  <th className="py-4 px-6 font-semibold text-center">Practical Tools</th>
                  <th className="py-4 px-6 font-semibold text-right">Price</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADFD2]/70 text-sm">
                {COURSES.map((course) => (
                  <tr key={course.slug} className="hover:bg-[#FCF9F3]/50 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#251C1E]">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-[#FCF9F3] p-1.5 border border-[#EADFD2] flex-shrink-0 overflow-hidden flex items-center justify-center">
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden transform scale-[1.18]">
                            <Image
                              src={course.image}
                              alt={course.stage}
                              width={150}
                              height={150}
                              quality={100}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <div>{course.stage}</div>
                          <div className="text-[11px] font-sans text-[#6E6466] font-normal">
                            Stage {course.stageNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#6E6466]">
                      {course.slug === "pre-conception" && "The First 90 Days"}
                      {course.slug === "pregnancy" && "The 40 Weeks"}
                      {course.slug === "newborn" && "The First 12 Weeks (0–3 Mos)"}
                      {course.slug === "infant" && "Months 3–12"}
                      {course.slug === "toddler" && "Years 1–3"}
                      {course.slug === "early-childhood" && "Years 3–5"}
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-[#251C1E]">
                      {course.phaseCount}
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-[#251C1E]">
                      {course.moduleCount}
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-[#8A1F42]">
                      {course.toolCount}
                    </td>
                    <td className="py-4 px-6 text-right font-serif font-bold text-[#4B0C1B]">
                      ${course.priceNum || 99}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#4B0C1B] hover:text-[#8A1F42]"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards (Not a dense spreadsheet) */}
          <div className="md:hidden space-y-4">
            {COURSES.map((course) => (
              <div
                key={course.slug}
                className="bg-white p-5 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col justify-between"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-[72px] h-[72px] rounded-xl bg-[#FCF9F3] p-2 border border-[#EADFD2] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden transform scale-[1.18]">
                      <Image
                        src={course.image}
                        alt={course.stage}
                        width={180}
                        height={180}
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#8A1F42]">
                      STAGE {course.stageNumber}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#251C1E]">
                      {course.stage}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 my-2 border-y border-[#EADFD2]/70 text-center text-xs">
                  <div>
                    <div className="font-semibold text-[#251C1E]">{course.phaseCount}</div>
                    <div className="text-[10px] text-[#6E6466] uppercase">Phases</div>
                  </div>
                  <div className="border-x border-[#EADFD2]/70">
                    <div className="font-semibold text-[#251C1E]">{course.moduleCount}</div>
                    <div className="text-[10px] text-[#6E6466] uppercase">Modules</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#8A1F42]">{course.toolCount}</div>
                    <div className="text-[10px] text-[#6E6466] uppercase">Tools</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-serif font-bold text-lg text-[#4B0C1B]">
                    ${course.priceNum || 99} <span className="text-[11px] font-sans font-normal text-[#6E6466]">one-time</span>
                  </span>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#4B0C1B] text-[#F8F2E8]"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
