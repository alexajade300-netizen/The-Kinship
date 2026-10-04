import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COURSES } from "@/data/courses";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4B0C1B] text-[#F8F2E8] border-t border-[#8A1F42]/40 relative overflow-hidden">
      {/* Restrained subtle dot pattern in footer corner */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none bg-dots-pattern"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#8A1F42]/60">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CDAE68] rounded-md">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#251C1E] flex items-center justify-center border border-[#CDAE68]/30">
                <Image
                  src="/images/kinship-logo.png"
                  alt="KINSHIP Logo"
                  width={100}
                  height={100}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#F8F2E8]">
                  KINSHIP
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-[#CDAE68]">
                  Evidence-Led Parenting Education
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm sm:text-base text-[#F0E0E3]/85 max-w-sm leading-relaxed">
              Evidence-led guidance for every stage of parenthood. Practical, calm education from pre-conception through the early childhood years.
            </p>

            <div className="mt-6 pt-4 border-t border-[#8A1F42]/40">
              <p className="text-xs font-serif italic text-[#CDAE68] tracking-wide">
                Learn. Apply. Grow with confidence.
              </p>
            </div>
          </div>

          {/* Life Stages / Courses Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#CDAE68] mb-4">
              Courses by Life Stage
            </h3>
            <ul className="space-y-2.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[11px] text-[#CDAE68]/80 font-mono">
                      {course.stageNumber}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {course.stage}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Legal Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#CDAE68] mb-4">
              Platform & Details
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/our-approach"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/educational-disclaimer"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  Educational Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#F0E0E3]/80 hover:text-[#F8F2E8] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F0E0E3]/60 gap-4">
          <p>
            &copy; {currentYear} KINSHIP. All rights reserved. Purchases securely processed through Whop.
          </p>
          <p className="text-[11px] text-[#F0E0E3]/50 text-center sm:text-right max-w-md">
            KINSHIP is purely educational and does not provide individualized clinical medical, mental health, or emergency advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
