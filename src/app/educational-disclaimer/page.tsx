import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Shield, HeartPulse, Stethoscope, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Disclaimer — KINSHIP",
  description:
    "Important educational scope, clinical boundaries, and healthcare guidance notice for KINSHIP courses and materials.",
};

export default function EducationalDisclaimerPage() {
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
            CLINICAL BOUNDARIES & SCOPE
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[#251C1E] leading-tight">
            Educational Disclaimer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E6466] max-w-xl mx-auto leading-relaxed">
            Please read this notice carefully to understand the scope and intent of KINSHIP education.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EADFD2] shadow-subtle space-y-8 text-base text-[#251C1E] leading-relaxed">
            
            {/* Overview */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                1. General Educational Nature of KINSHIP
              </h2>
              <p className="text-[#6E6466] mb-3">
                All content, courses, modules, text, guides, trackers, and materials provided by KINSHIP are developed strictly for general educational and informational purposes. Our mission is to synthesize developmental science, public health consensus, and practical parenting frameworks to help families make informed, calm decisions.
              </p>
              <p className="text-[#6E6466]">
                Participating in any KINSHIP course or consuming information on this website does not establish a doctor-patient, therapist-client, or other licensed healthcare relationship of any kind.
              </p>
            </div>

            {/* What Is Not Provided */}
            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                2. What KINSHIP Does Not Provide
              </h2>
              <p className="text-[#6E6466] mb-4">
                The KINSHIP platform, website, and all associated educational products do not provide:
              </p>
              <ul className="space-y-2.5 text-[#6E6466] list-disc pl-5">
                <li><strong className="text-[#251C1E]">Medical Diagnosis:</strong> We do not diagnose pediatric illnesses, congenital conditions, maternal health complications, or fertility disorders.</li>
                <li><strong className="text-[#251C1E]">Individualized Treatment:</strong> We do not prescribe medications, individualized therapies, or clinical intervention plans.</li>
                <li><strong className="text-[#251C1E]">Mental Health Services:</strong> We do not provide clinical psychiatric or psychotherapy treatment for postpartum depression, anxiety disorders, or child behavioral pathology.</li>
                <li><strong className="text-[#251C1E]">Developmental Evaluation:</strong> We do not replace standardized neurodevelopmental screenings conducted by pediatric specialists.</li>
                <li><strong className="text-[#251C1E]">Emergency Services:</strong> We do not provide real-time, acute, or emergency medical response.</li>
                <li><strong className="text-[#251C1E]">Guaranteed Outcomes:</strong> We do not make promises regarding fertility, pregnancy progression, absence of infant fussiness, behavioral outcomes, or future academic performance.</li>
              </ul>
            </div>

            {/* Seeking Professional Care */}
            <div className="pt-6 border-t border-[#EADFD2]">
              <h2 className="font-serif text-2xl font-bold text-[#4B0C1B] mb-3">
                3. Consultation with Qualified Professionals
              </h2>
              <p className="text-[#6E6466] mb-3">
                Parents, partners, and caregivers should always seek the direct counsel of a qualified, licensed medical doctor, pediatrician, obstetrician, certified nurse midwife, or licensed mental health professional regarding any specific question or condition.
              </p>
              <p className="text-[#6E6466]">
                Never disregard professional medical advice, delay seeking clinical care, or alter prescribed treatment regimens because of something you have read on this website or in a KINSHIP course.
              </p>
            </div>

            {/* Acute Emergencies */}
            <div className="pt-6 border-t border-[#EADFD2] p-6 rounded-xl bg-[#F0E0E3]/50 border-l-4 border-l-[#8A1F42]">
              <div className="flex items-center gap-2 text-[#4B0C1B] font-bold mb-2">
                <PhoneCall className="w-5 h-5 text-[#8A1F42]" />
                <h3 className="font-serif text-xl">4. Urgent &amp; Emergency Situations</h3>
              </div>
              <p className="text-sm text-[#6E6466] leading-relaxed">
                If you suspect that you, your partner, your infant, or your child is experiencing an acute medical emergency, severe breathing difficulty, high fever in a newborn under 12 weeks, allergic reaction, mental health crisis, or any other life-threatening concern, immediately contact your local emergency telephone number (such as 911 in North America, 999 in the UK, 000 in Australia, or 112 in Europe) or proceed to the nearest hospital emergency room.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADFD2] text-xs text-[#6E6466]">
              <p>
                Last reviewed: {new Date().getFullYear()}. For further information or questions regarding our terms, please see our <Link href="/terms" className="text-[#8A1F42] underline">Terms of Service</Link> or contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
