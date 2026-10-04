import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COURSES } from "@/data/courses";
import { METHODOLOGY_STEPS, EVIDENCE_LEVELS } from "@/data/siteContent";
import { CourseCard } from "@/components/CourseCard";
import { StageTimeline } from "@/components/StageTimeline";
import { EvidenceScale } from "@/components/EvidenceScale";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowDown,
  BookOpen,
  Calendar,
  ClipboardList,
  Activity,
  FileText,
  Clock,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const homeFaqs = [
    {
      question: "What is KINSHIP?",
      answer:
        "KINSHIP is an evidence-led parenting education platform covering the journey from pre-conception through early childhood.",
    },
    {
      question: "Do I need to start with the first course?",
      answer:
        "No. Start with the course that matches your family's current stage.",
    },
    {
      question: "Are the courses for both parents?",
      answer:
        "KINSHIP is designed to make important information easier for parents and partners to understand and apply together. Individual course content varies by stage.",
    },
    {
      question: "How do I access my course after purchasing?",
      answer:
        "Purchases and course access are handled securely through Whop. After checkout, customers receive access to the course they purchased through Whop.",
    },
    {
      question: "Do the courses replace professional advice?",
      answer:
        "No. KINSHIP is educational. It does not replace individualized advice, diagnosis, treatment, or care from qualified healthcare, mental-health, developmental, or other professionals.",
    },
  ];

  const practicalToolTypes = [
    { name: "Checklists", desc: "Clear, step-by-step preparation lists for appointments, nursery setups, and gear." },
    { name: "Trackers", desc: "Low-burden observation logs to notice baby and toddler patterns without panic." },
    { name: "Planners", desc: "Structured timelines for 90-day pre-conception, postpartum shifts, and nap schedules." },
    { name: "Observation Guides", desc: "Objective milestone frameworks to distinguish expected growth from red flags." },
    { name: "Question Logs", desc: "Organized, focused prompt sheets to bring directly to your pediatrician or midwife." },
    { name: "Family Plans", desc: "Shared partner agreements on nighttime responsibilities, feeding, and boundaries." },
    { name: "Transition Tools", desc: "Gentle step-by-step guides for moving into solid foods, toddlerhood, and school." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ==================================================
          SECTION 1 — HERO
          ================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-[#EADFD2]">
        {/* Restrained decorative background dots */}
        <div 
          className="absolute inset-0 opacity-15 bg-dots-faint pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Subtle decorative concentric ripple indicator in background */}
        <div 
          className="absolute -top-32 right-1/2 translate-x-1/2 w-[700px] h-[700px] rounded-full border border-[#8A1F42]/5 pointer-events-none"
          aria-hidden="true" 
        />
        <div 
          className="absolute -top-16 right-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[#8A1F42]/5 pointer-events-none"
          aria-hidden="true" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E0E3] text-[#4B0C1B] text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-[#8A1F42]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A1F42]" />
            EVIDENCE-LED PARENTING EDUCATION
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#251C1E] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Parenthood changes. <br className="hidden sm:inline" />
            <span className="text-[#4B0C1B]">Good guidance should grow with you.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-[#6E6466] max-w-2xl mx-auto leading-relaxed">
            Practical, evidence-led education for every stage of the journey — from preparing for pregnancy through the early childhood years.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 bg-[#F5BF38] text-[#4B0C1B] hover:bg-[#E5B028] shadow-md hover:shadow-lg active:scale-[0.98] focus:ring-2 focus:ring-[#F5BF38] focus:outline-none"
            >
              EXPLORE THE COURSES
            </a>

            <Link
              href="/our-approach"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 bg-white border border-[#EADFD2] text-[#251C1E] hover:bg-[#FCF9F3] hover:border-[#8A1F42]/30 shadow-subtle active:scale-[0.98] focus:ring-2 focus:ring-[#8A1F42] focus:outline-none"
            >
              HOW KINSHIP WORKS
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — ONE JOURNEY
          ================================================== */}
      <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42] mb-3">
              THE COMPLETE ROADMAP
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#251C1E] leading-tight">
              One journey. <br />
              Six important stages.
            </h2>
            <p className="mt-4 text-base text-[#6E6466] leading-relaxed">
              Every stage brings different questions. KINSHIP gives you a clear place to start, practical tools to use, and evidence-led guidance designed around the stage your family is actually in.
            </p>
          </div>

          {/* Horizontally & Vertically Progressive Progression */}
          <StageTimeline />
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — COURSE COLLECTION
          ================================================== */}
      <section id="courses" className="py-20 lg:py-28 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              CURRICULUM CATALOG
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251C1E]">
              Find the guidance for where you are now.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              Start with your current stage. Each KINSHIP course is designed as a complete, practical learning experience you can move through at your own pace.
            </p>
          </div>

          {/* Six Course Cards in Chronological Order: 2-column x 3-row grid on mobile, 3-column on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — WHY KINSHIP
          ================================================== */}
      <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              WHY KINSHIP
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Less conflicting advice. <br />
              More clarity.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              Parents are surrounded by information. The challenge is knowing what deserves attention, what can be applied in everyday life, and what can be let go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Understand */}
            <div className="bg-white p-8 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#F0E0E3] text-[#4B0C1B] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-[#8A1F42]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#251C1E] mb-3">
                UNDERSTAND
              </h3>
              <p className="text-sm sm:text-base text-[#6E6466] leading-relaxed">
                Learn what matters at your current stage without drowning in information. Ground your parenting in physiological realities and developmental science.
              </p>
            </div>

            {/* Pillar 2: Apply */}
            <div className="bg-white p-8 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#F0E0E3] text-[#4B0C1B] flex items-center justify-center mb-6">
                <ClipboardList className="w-6 h-6 text-[#8A1F42]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#251C1E] mb-3">
                APPLY
              </h3>
              <p className="text-sm sm:text-base text-[#6E6466] leading-relaxed">
                Turn what you learn into everyday decisions using practical tools, planners, trackers, and guides designed for real family living.
              </p>
            </div>

            {/* Pillar 3: Grow */}
            <div className="bg-white p-8 rounded-2xl border border-[#EADFD2] shadow-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#F0E0E3] text-[#4B0C1B] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#CDAE68]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#251C1E] mb-3">
                GROW
              </h3>
              <p className="text-sm sm:text-base text-[#6E6466] leading-relaxed">
                Move into the next stage with greater clarity and confidence. Finish each chapter feeling calm, prepared, and united with your partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — OUR APPROACH
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              METHODOLOGY
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Evidence-led. <br />
              Practical by design.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              KINSHIP is built to make complex parenting information easier to understand and use. Instead of asking parents to optimize everything, our courses focus on the factors that deserve attention, the decisions families actually face, and the questions worth taking to qualified professionals.
            </p>
          </div>

          {/* Clean Methodology Row */}
          <div className="bg-white border border-[#EADFD2] rounded-2xl p-6 sm:p-8 mb-12 shadow-subtle">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center items-center">
              {METHODOLOGY_STEPS.map((m, idx) => (
                <div key={m.step} className="flex flex-col items-center relative">
                  <span className="text-xs font-mono font-semibold text-[#8A1F42]">
                    STEP {m.step}
                  </span>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#251C1E] mt-1">
                    {m.name}
                  </span>
                  <span className="text-[11px] text-[#6E6466] mt-1 leading-snug">
                    {m.headline}
                  </span>
                  {idx < METHODOLOGY_STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#CDAE68]">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Scale Component */}
          <EvidenceScale />

          {/* Button to Approach page */}
          <div className="mt-12 text-center">
            <Link
              href="/our-approach"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] transition-colors shadow-sm focus:ring-2 focus:ring-[#8A1F42] focus:outline-none"
            >
              <span>EXPLORE OUR APPROACH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — PRACTICAL TOOLS
          ================================================== */}
      <section className="py-20 lg:py-24 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              MORE THAN LESSONS
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Turn what you learn into something you can use.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              Every KINSHIP course includes practical resources designed to help families organize information, notice patterns, prepare questions, make plans, and apply what they learn in everyday life.
            </p>
          </div>

          {/* Elegant Text Cards for Practical Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {practicalToolTypes.map((tool) => (
              <div
                key={tool.name}
                className="bg-white p-6 rounded-xl border border-[#EADFD2] shadow-subtle hover:border-[#8A1F42]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#CDAE68]" />
                  <h3 className="font-serif text-lg font-bold text-[#251C1E]">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6466] leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-[#6E6466] italic">
            Each course includes its own curated suite of practical tools aligned specifically with that developmental stage.
          </p>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 — BUILT FOR REAL FAMILY LIFE
          ================================================== */}
      <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              CALM PERSPECTIVE
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              You don&apos;t need to optimize everything.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              Parenthood already asks a lot of you. KINSHIP is designed to help you focus on what matters without turning every meal, milestone, sleep pattern, or difficult day into another problem to solve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FCF9F3] p-8 rounded-2xl border border-[#EADFD2] text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-serif font-bold text-lg flex items-center justify-center mb-5 mx-auto sm:mx-0">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-[#251C1E] mb-2">
                At your pace.
              </h3>
              <p className="text-sm text-[#6E6466] leading-relaxed">
                Work through the material when it is useful to you. No live schedules or artificial deadlines.
              </p>
            </div>

            <div className="bg-[#FCF9F3] p-8 rounded-2xl border border-[#EADFD2] text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-serif font-bold text-lg flex items-center justify-center mb-5 mx-auto sm:mx-0">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-[#251C1E] mb-2">
                In real life.
              </h3>
              <p className="text-sm text-[#6E6466] leading-relaxed">
                Use practical guidance that fits everyday family life, rather than demanding perfection or extreme routines.
              </p>
            </div>

            <div className="bg-[#FCF9F3] p-8 rounded-2xl border border-[#EADFD2] text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#F0E0E3] text-[#4B0C1B] font-serif font-bold text-lg flex items-center justify-center mb-5 mx-auto sm:mx-0">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-[#251C1E] mb-2">
                With confidence.
              </h3>
              <p className="text-sm text-[#6E6466] leading-relaxed">
                Understand what deserves attention and what can be let go, backed by clear evidence and clinical consensus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — COURSE PROGRESSION
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#FCF9F3] border-b border-[#EADFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              CONTINUOUS GUIDANCE
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251C1E]">
              Guidance that grows with your family.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6466] leading-relaxed">
              Finish one stage knowing the next chapter is already waiting for you.
            </p>
          </div>

          {/* Beautiful progression cards using the supplied artwork visual language */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COURSES.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group bg-white rounded-xl border border-[#EADFD2] p-4 flex flex-col items-center text-center shadow-subtle hover:border-[#8A1F42]/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-[115px] h-[115px] sm:w-[136px] sm:h-[136px] rounded-xl bg-[#FCF9F3] p-2 flex items-center justify-center mb-3 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden transform scale-[1.18] transition-transform duration-300 group-hover:scale-[1.22]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={300}
                      quality={100}
                      className="object-contain w-auto h-auto max-w-full max-h-full"
                    />
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#8A1F42]">
                  STAGE {course.stageNumber}
                </span>
                <span className="font-serif text-sm font-bold text-[#251C1E] mt-1 group-hover:text-[#4B0C1B] transition-colors leading-tight">
                  {course.stage}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — FAQ PREVIEW
          ================================================== */}
      <section className="py-20 lg:py-24 bg-[#F8F2E8] border-b border-[#EADFD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A1F42]">
              QUESTIONS & CLARITY
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#251C1E]">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-base text-[#6E6466]">
              Clear, straightforward answers about our educational platform.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white border border-[#EADFD2] text-[#4B0C1B] hover:bg-[#FCF9F3] hover:border-[#8A1F42]/30 transition-colors shadow-subtle"
            >
              <span>VIEW ALL FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL HOMEPAGE CTA
          ================================================== */}
      <CTASection
        eyebrow="START WHERE YOU ARE"
        headline="The next stage doesn't need to come with more confusion."
        copy="Choose the KINSHIP course that matches your family today and move forward with a clearer plan."
        buttonText="EXPLORE THE COURSES"
        buttonHref="#courses"
      />
    </div>
  );
}
