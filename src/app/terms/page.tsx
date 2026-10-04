import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — KINSHIP",
  description: "Terms of service and digital product usage conditions for KINSHIP parenting courses.",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

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
            TERMS &amp; CONDITIONS
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[#251C1E] leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E6466] max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully prior to accessing or purchasing KINSHIP courses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EADFD2] shadow-subtle space-y-8 text-base text-[#251C1E] leading-relaxed">
            
            <div className="p-4 rounded-xl bg-[#F0E0E3]/40 border border-[#8A1F42]/20 text-xs text-[#6E6466]">
              <strong className="text-[#4B0C1B]">Notice for Site Administrator:</strong> Legal placeholders including <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[BUSINESS LEGAL NAME]</code>, <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[BUSINESS EMAIL]</code>, and <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[COUNTRY/JURISDICTION]</code> are clearly designated below for final review prior to launch.
            </div>

            <div>
              <p className="text-sm text-[#6E6466]">
                Last updated: {currentYear}.
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mt-4 mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#6E6466]">
                These Terms of Service govern your use of the KINSHIP website and all digital courses operated by <strong className="text-[#251C1E]">[BUSINESS LEGAL NAME]</strong> (&ldquo;KINSHIP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing our website or purchasing a course, you agree to be bound by these Terms and our <Link href="/educational-disclaimer" className="text-[#8A1F42] underline">Educational Disclaimer</Link>.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                2. Educational Scope &amp; Non-Clinical Character
              </h2>
              <p className="text-[#6E6466] mb-3">
                KINSHIP produces asynchronous educational content regarding child development, pre-conception preparation, pregnancy, and parenting.
              </p>
              <p className="text-[#6E6466]">
                Our materials are not intended as, and do not constitute, medical advice, clinical diagnosis, therapy, emergency healthcare, or individualized pediatric recommendations. You must consult your licensed physician, pediatrician, or appropriate healthcare provider regarding all medical and developmental decisions.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                3. Purchases &amp; Checkout via Whop
              </h2>
              <p className="text-[#6E6466] mb-3">
                Purchases of KINSHIP courses are processed securely through <strong>Whop</strong> (<a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="text-[#8A1F42] underline">whop.com</a>).
              </p>
              <p className="text-[#6E6466]">
                Upon successful checkout on Whop, you are granted a non-exclusive, non-transferable personal license to view the purchased course material on the Whop platform for personal, non-commercial family use. All payment terms, card authorization, and merchant billing conditions are subject to Whop&apos;s checkout terms and policies.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-[#6E6466]">
                All course content, written modules, trackers, graphics, brand marks, and artworks are the proprietary intellectual property of <strong className="text-[#251C1E]">[BUSINESS LEGAL NAME]</strong>. You may not republish, reproduce, resell, redistribute, or commercially exploit any KINSHIP material without prior written authorization.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-[#6E6466]">
                To the maximum extent permitted by applicable law in <strong className="text-[#251C1E]">[COUNTRY/JURISDICTION]</strong>, KINSHIP and its creators shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, educational materials provided through this website or course platforms.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-[#6E6466]">
                These Terms shall be governed by and construed in accordance with the laws of <strong className="text-[#251C1E]">[COUNTRY/JURISDICTION]</strong>, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                7. Contact
              </h2>
              <p className="text-[#6E6466]">
                Questions concerning these Terms may be directed to:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-[#FCF9F3] border border-[#EADFD2] text-sm text-[#251C1E] space-y-1">
                <p><strong>Entity:</strong> [BUSINESS LEGAL NAME]</p>
                <p><strong>Email:</strong> [BUSINESS EMAIL]</p>
                <p><strong>Jurisdiction:</strong> [COUNTRY/JURISDICTION]</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
