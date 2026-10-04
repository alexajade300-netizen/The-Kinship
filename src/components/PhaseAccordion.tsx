"use client";

import React, { useState } from "react";
import { PhaseItem } from "@/data/courses";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface PhaseAccordionProps {
  phases: PhaseItem[];
}

export function PhaseAccordion({ phases }: PhaseAccordionProps) {
  // Open the first phase by default
  const [openPhases, setOpenPhases] = useState<number[]>([1]);

  const togglePhase = (phaseNumber: number) => {
    setOpenPhases((prev) =>
      prev.includes(phaseNumber)
        ? prev.filter((p) => p !== phaseNumber)
        : [...prev, phaseNumber]
    );
  };

  return (
    <div className="space-y-4">
      {phases.map((phase) => {
        const isOpen = openPhases.includes(phase.number);
        const contentId = `phase-content-${phase.number}`;
        const headerId = `phase-header-${phase.number}`;

        return (
          <div
            key={phase.number}
            className="bg-[#FCF9F3] border border-[#EADFD2] rounded-2xl overflow-hidden transition-all duration-200"
          >
            <h3>
              <button
                id={headerId}
                type="button"
                onClick={() => togglePhase(phase.number)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full px-6 py-5 sm:px-7 sm:py-6 flex items-start justify-between text-left gap-4 hover:bg-[#F0E0E3]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A1F42]"
              >
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#8A1F42]/15">
                    0{phase.number}
                  </span>
                  <div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A1F42]">
                      PHASE {phase.number}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#251C1E] mt-0.5">
                      {phase.title}
                    </h4>
                    <p className="text-sm text-[#6E6466] mt-1.5 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                  <span className="text-xs font-medium text-[#6E6466] hidden sm:inline">
                    {phase.modules.length} Modules
                  </span>
                  <div
                    className={`p-1.5 rounded-full text-[#4B0C1B] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#F0E0E3]" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-[#EADFD2]/70 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                  {phase.modules.map((moduleName, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FCF9F3]/60 border border-[#EADFD2]/60 text-sm font-medium text-[#251C1E]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8A1F42] flex-shrink-0" />
                      <span>{moduleName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
