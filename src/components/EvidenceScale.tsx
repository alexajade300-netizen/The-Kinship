import React from "react";
import { EVIDENCE_LEVELS } from "@/data/siteContent";
import { Info } from "lucide-react";

export function EvidenceScale() {
  return (
    <div className="w-full bg-[#FCF9F3] border border-[#EADFD2] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8A1F42]">
        <Info className="w-4 h-4 text-[#8A1F42]" />
        <span>Evidence Hierarchy Framework</span>
      </div>
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#251C1E] mb-2">
        Evidence is not all equal.
      </h3>
      <p className="text-sm text-[#6E6466] leading-relaxed max-w-3xl mb-6">
        Parenting advice is frequently marketed with misleading certainty. Where appropriate, KINSHIP transparently distinguishes between five levels of evidence strength to communicate certainty and nuance.
      </p>

      {/* Grid of Evidence Badges & Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {EVIDENCE_LEVELS.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col p-4 rounded-xl bg-white border border-[#EADFD2] shadow-subtle"
          >
            <span
              className={`inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider text-center uppercase mb-2.5 ${item.color}`}
            >
              {item.level}
            </span>
            <p className="text-xs text-[#6E6466] leading-relaxed mt-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mandatory Clinical Disclaimer Note */}
      <div className="mt-6 pt-5 border-t border-[#EADFD2]/70 text-xs text-[#6E6466] italic flex items-start gap-2">
        <span className="text-[#8A1F42] font-bold not-italic flex-shrink-0">&ast;</span>
        <span>
          KINSHIP provides educational information and does not replace individualized medical, developmental, psychological, or other professional advice.
        </span>
      </div>
    </div>
  );
}
