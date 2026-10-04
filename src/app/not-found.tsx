import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-[#EADFD2] shadow-subtle relative overflow-hidden">
        {/* Subtle decorative dot pattern */}
        <div 
          className="absolute inset-0 opacity-10 bg-dots-faint pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#F0E0E3] text-[#4B0C1B] font-mono font-bold text-xl flex items-center justify-center mx-auto mb-6 border border-[#8A1F42]/15">
            404
          </div>

          <h1 className="font-serif text-3xl font-bold text-[#251C1E]">
            Page Not Found
          </h1>

          <p className="mt-3 text-sm text-[#6E6466] leading-relaxed">
            The page you are looking for does not exist or may have been relocated. Let&apos;s guide you back to where you need to be.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] transition-colors shadow-sm"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white border border-[#EADFD2] text-[#251C1E] hover:bg-[#FCF9F3] transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#8A1F42]" />
              <span>Browse Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
