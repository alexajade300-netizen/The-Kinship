import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface DisclaimerBlockProps {
  compact?: boolean;
}

export function DisclaimerBlock({ compact = false }: DisclaimerBlockProps) {
  if (compact) {
    return (
      <aside
        aria-label="Educational Disclaimer"
        className="p-5 rounded-xl bg-[#F0E0E3]/40 border border-[#8A1F42]/15 text-xs text-[#6E6466] leading-relaxed"
      >
        <div className="flex items-center gap-2 font-semibold text-[#4B0C1B] mb-1">
          <AlertCircle className="w-3.5 h-3.5 text-[#8A1F42]" />
          <span>Educational Guidance Notice</span>
        </div>
        <p>
          KINSHIP courses and materials provide general parenting education only. They do not constitute or substitute for clinical medical diagnosis, individual psychological treatment, developmental therapy, or emergency healthcare services. Always consult a qualified medical professional for specific health concerns.{" "}
          <Link href="/educational-disclaimer" className="text-[#8A1F42] underline hover:text-[#4B0C1B]">
            Read our full educational disclaimer
          </Link>
          .
        </p>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Educational Disclaimer"
      className="p-7 sm:p-8 rounded-2xl bg-[#FCF9F3] border border-[#EADFD2] text-sm text-[#6E6466] leading-relaxed shadow-subtle"
    >
      <div className="flex items-center gap-2.5 font-serif text-lg font-bold text-[#4B0C1B] mb-3">
        <AlertCircle className="w-5 h-5 text-[#8A1F42]" />
        <span>Educational Purpose & Professional Care Notice</span>
      </div>
      <p className="mb-3">
        All materials, courses, and guidance published by KINSHIP are designed strictly for educational and informational purposes. They are structured to help parents and partners understand child development, organize questions, and navigate common family transitions.
      </p>
      <p className="mb-3">
        KINSHIP is not a medical practice, clinical therapy provider, or emergency care service. Nothing contained on this website or in our course modules should be construed as individualized medical, psychiatric, pediatric, or developmental diagnosis or treatment.
      </p>
      <p>
        If you or your child have symptoms requiring medical attention, or in the case of any acute illness or emergency, contact your pediatrician, qualified healthcare practitioner, or local emergency services immediately. For complete legal and clinical scope details, please consult our{" "}
        <Link href="/educational-disclaimer" className="text-[#8A1F42] font-semibold underline hover:text-[#4B0C1B]">
          Educational Disclaimer
        </Link>
        .
      </p>
    </aside>
  );
}
