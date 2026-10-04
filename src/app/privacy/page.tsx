import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — KINSHIP",
  description: "Privacy policy for KINSHIP educational courses and digital services.",
};

export default function PrivacyPolicyPage() {
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
            LEGAL &amp; PRIVACY
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[#251C1E] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E6466] max-w-xl mx-auto leading-relaxed">
            How we respect, collect, and protect information across our digital courses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EADFD2] shadow-subtle space-y-8 text-base text-[#251C1E] leading-relaxed">
            
            <div className="p-4 rounded-xl bg-[#F0E0E3]/40 border border-[#8A1F42]/20 text-xs text-[#6E6466]">
              <strong className="text-[#4B0C1B]">Notice for Site Administrator:</strong> Placeholders such as <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[BUSINESS LEGAL NAME]</code>, <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[BUSINESS EMAIL]</code>, and <code className="bg-[#FCF9F3] px-1 py-0.5 rounded text-[#4B0C1B]">[COUNTRY/JURISDICTION]</code> are clearly highlighted below for completion prior to public launch.
            </div>

            <div>
              <p className="text-sm text-[#6E6466]">
                Last updated: {currentYear}. Effective upon publication.
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mt-4 mb-3">
                1. Introduction
              </h2>
              <p className="text-[#6E6466]">
                This Privacy Policy describes how <strong className="text-[#251C1E]">[BUSINESS LEGAL NAME]</strong> (&ldquo;KINSHIP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles personal data collected when you visit our website, learn about our curriculum, or purchase and access our digital parenting courses.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                2. Purchases &amp; Payment Processing Through Whop
              </h2>
              <p className="text-[#6E6466] mb-3">
                All course transactions, billing, payments, and product delivery are processed through our partner platform, <strong>Whop</strong> (<a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="text-[#8A1F42] underline">whop.com</a>).
              </p>
              <p className="text-[#6E6466]">
                When you click to purchase a KINSHIP course, your checkout and payment details (such as credit card numbers and billing addresses) are transmitted directly to Whop&apos;s secure payment infrastructure. KINSHIP does not store or process your full credit card credentials on our servers. Your relationship with Whop regarding checkout and account creation is also governed by Whop&apos;s Privacy Policy and Terms.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                3. Information We Collect
              </h2>
              <p className="text-[#6E6466] mb-3">
                Depending on your interaction with KINSHIP, we may collect:
              </p>
              <ul className="space-y-2 text-[#6E6466] list-disc pl-5">
                <li><strong className="text-[#251C1E]">Contact Data:</strong> If you reach out to our support team, we receive your email address and any details included in your correspondence.</li>
                <li><strong className="text-[#251C1E]">Technical &amp; Usage Data:</strong> Standard server logs, IP address, device type, browser information, and referral URLs to ensure website security and performance.</li>
                <li><strong className="text-[#251C1E]">Whop Order Data:</strong> Confirmation of completed purchases, customer name, email address associated with the purchase, and product access entitlement.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                4. How We Use Your Information
              </h2>
              <ul className="space-y-2 text-[#6E6466] list-disc pl-5">
                <li>To grant and verify digital course access through Whop.</li>
                <li>To provide technical and educational support to enrolled parents.</li>
                <li>To maintain the stability, performance, and security of our web properties.</li>
                <li>To comply with applicable legal, accounting, and taxation obligations in <strong className="text-[#251C1E]">[COUNTRY/JURISDICTION]</strong>.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                5. Data Sharing &amp; Third Parties
              </h2>
              <p className="text-[#6E6466] mb-3">
                We do not sell, rent, or trade your personal data to advertisers. We share information only with trusted service providers strictly necessary to deliver our educational services, including:
              </p>
              <ul className="space-y-2 text-[#6E6466] list-disc pl-5">
                <li><strong className="text-[#251C1E]">Whop:</strong> For account authentication, payment processing, and course content hosting.</li>
                <li><strong className="text-[#251C1E]">Hosting &amp; Infrastructure Providers:</strong> For secure website serving and content delivery.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                6. Your Rights
              </h2>
              <p className="text-[#6E6466]">
                Depending on your place of residence, you may possess statutory rights under privacy legislation (such as GDPR, CCPA, or regional equivalents) to request access, correction, or deletion of your personal information held directly by us. To submit a request, contact <strong className="text-[#251C1E]">[BUSINESS EMAIL]</strong>.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                7. Contact Information
              </h2>
              <p className="text-[#6E6466]">
                If you have questions regarding this Privacy Policy or data handling practices, please write to:
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
