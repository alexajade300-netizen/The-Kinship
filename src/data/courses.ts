export interface PhaseItem {
  number: number;
  title: string;
  description: string;
  modules: string[];
}

export interface CourseData {
  slug: string;
  stageNumber: string;
  stage: string;
  title: string;
  tagline: string;
  shortDescription: string;
  price: string;
  priceNum: number;
  image: string;
  cardImage: string;
  altText: string;
  phaseCount: number;
  moduleCount: number;
  toolCount: number;
  checkoutUrl: string;
  promise: string;
  whatItFeelsLike: {
    headline: string;
    points: string[];
  };
  whatYouWillLearn: string[];
  phases: PhaseItem[];
  allModules: string[];
  practicalTools: string[];
  benefits: string[];
  whoItIsFor: string[];
  faqs: { question: string; answer: string }[];
  prevSlug?: string;
  prevTitle?: string;
  nextSlug?: string;
  nextTitle?: string;
}

export const COURSES: CourseData[] = [
  {
    slug: "pre-conception",
    stageNumber: "01",
    stage: "Pre-Conception",
    title: "Pre-Conception — The First 90 Days",
    tagline: "A 90-day plan to help both partners prepare for conception.",
    shortDescription: "A 90-day plan to help both partners prepare for conception.",
    price: "$99 · One-time",
    priceNum: 99,
    image: "/images/course-1-pre-conception.png",
    cardImage: "/images/course-1-card.png",
    altText: "KINSHIP Pre-Conception course artwork depicting expanding wave and circular focal point",
    phaseCount: 3,
    moduleCount: 14,
    toolCount: 14,
    checkoutUrl: "https://whop.com/checkout/plan_xojJjOlx2pXp5",
    promise:
      "Help both partners spend the 90 days before trying to conceive improving the health factors they can realistically influence — using one shared, evidence-led plan instead of conflicting fertility advice, extreme routines, and endless research.",
    whatItFeelsLike: {
      headline: "Preparing before conception often feels overwhelming before it even begins.",
      points: [
        "Endless internet forums, restrictive clean-eating regimens, and contradictory supplement advice.",
        "The assumption that fertility preparation is solely the female partner's responsibility.",
        "Anxious hyper-optimization that turns everyday living into a source of guilt or stress.",
        "Uncertainty about which medical checks and baseline tests are actually worth requesting.",
      ],
    },
    whatYouWillLearn: [
      "The biological timeline of egg and sperm maturation (roughly 90 days) and why both partners matter.",
      "Which routine health checks, blood panels, and immunizations to review with your doctor.",
      "Evidence-supported dietary patterns without restrictive or unsustainable eating rules.",
      "How to evaluate prenatal vitamins and supplements, separating proven support from expensive marketing.",
      "Male reproductive health essentials: heat exposure, sleep, alcohol, and lifestyle factors.",
      "How to track fertility signals calmly without obsessive monitoring or panic.",
      "What not to optimize: setting healthy boundaries around wellness trends and noise.",
      "Clear guidance on when to seek specialized medical support or reproductive care.",
    ],
    phases: [
      {
        number: 1,
        title: "Master Your Starting Point",
        description: "Establish baseline health, clarify clinical timelines, and eliminate guesswork for both partners.",
        modules: [
          "01 Your 90-Day Starting Point",
          "02 The Pre-Conception Health Check",
          "03 Nutrition Before Pregnancy",
          "04 Supplements Without the Noise",
        ],
      },
      {
        number: 2,
        title: "Optimize What You Control",
        description: "Focus on male factor biology, sleep recovery, physical activity, and joint environmental exposures.",
        modules: [
          "05 Dad's 90 Days Matter Too",
          "06 Movement & Physical Health",
          "07 Sleep & Recovery",
          "08 Alcohol, Nicotine & Other Exposures",
          "09 Your Environment",
        ],
      },
      {
        number: 3,
        title: "The Final Preparation Phase",
        description: "Understand fertility cycles, protect emotional well-being, and prepare for the final 30 days.",
        modules: [
          "10 Understanding Fertility",
          "11 Stress, Mental Health & Relationship",
          "12 What NOT to Optimize",
          "13 When Things Don't Go to Plan",
          "14 Your Final 30 Days",
        ],
      },
    ],
    allModules: [
      "01 Your 90-Day Starting Point",
      "02 The Pre-Conception Health Check",
      "03 Nutrition Before Pregnancy",
      "04 Supplements Without the Noise",
      "05 Dad's 90 Days Matter Too",
      "06 Movement & Physical Health",
      "07 Sleep & Recovery",
      "08 Alcohol, Nicotine & Other Exposures",
      "09 Your Environment",
      "10 Understanding Fertility",
      "11 Stress, Mental Health & Relationship",
      "12 What NOT to Optimize",
      "13 When Things Don't Go to Plan",
      "14 Your Final 30 Days",
    ],
    practicalTools: [
      "90-Day Pre-Conception Timeline & Milestones",
      "Doctor's Appointment Question Log & Checklist",
      "Female Baseline Bloodwork & Health Checklist",
      "Male Factor Assessment & Routine Guide",
      "Nutrient Density Grocery Reference Sheet",
      "Evidence-Led Supplement Evaluation Matrix",
      "Sleep Environment & Sleep Hygiene Audit",
      "Environmental Exposure Reduction Checklist",
      "Cycle & Fertility Signal Observation Sheet",
      "What NOT to Optimize Boundary Checklist",
      "Partner Alignment & Communication Prompts",
      "Stress Reduction & Emotional Inventory",
      "Next Steps When Timeline Extends Guide",
      "Final 30-Day Transition Action Plan",
    ],
    benefits: [
      "One shared, calm plan both partners can review and execute together.",
      "Clear distinction between proven lifestyle modifications and pseudoscientific trends.",
      "Targeted checklists you can take directly to your primary care clinician or OB/GYN.",
      "Freedom from exhausting internet rabbit holes and high-pressure optimization culture.",
    ],
    whoItIsFor: [
      "Couples planning to begin trying to conceive within the next 3 to 12 months.",
      "Individuals wanting a clean, medical-grade understanding of pre-pregnancy health foundations.",
      "Both partners seeking equal involvement and clarity in reproductive health.",
      "Anyone overwhelmed by conflicting fertility tips on social media.",
    ],
    faqs: [
      {
        question: "Why focus specifically on 90 days?",
        answer:
          "Human sperm cells take approximately 74 to 90 days to develop fully, and ovarian follicles undergo critical maturation in the months preceding ovulation. A 90-day window provides a practical, biologically grounded timeframe to positively influence nutritional status and lifestyle habits.",
      },
      {
        question: "Is this course meant for both partners?",
        answer:
          "Yes. KINSHIP strongly emphasizes that pre-conception preparation is a joint effort. The course includes dedicated modules on male reproductive health, partner communication, and shared habits.",
      },
      {
        question: "Does this course guarantee pregnancy?",
        answer:
          "No. Conception involves complex biological factors. KINSHIP provides evidence-led education to help you optimize factors within your control; it does not promise pregnancy and is not a substitute for clinical fertility care.",
      },
    ],
    nextSlug: "pregnancy",
    nextTitle: "Pregnancy — The 40 Weeks",
  },
  {
    slug: "pregnancy",
    stageNumber: "02",
    stage: "Pregnancy",
    title: "Pregnancy — The 40 Weeks",
    tagline: "A 40-week plan to help both partners navigate pregnancy with confidence.",
    shortDescription: "A 40-week plan to help both partners navigate pregnancy with confidence.",
    price: "$99 · One-time",
    priceNum: 99,
    image: "/images/course-2-pregnancy.png",
    cardImage: "/images/course-2-card.png",
    altText: "KINSHIP Pregnancy course artwork showing concentric radial arc and continuing trajectory",
    phaseCount: 4,
    moduleCount: 11,
    toolCount: 11,
    checkoutUrl: "https://whop.com/checkout/plan_kJWuE35VfGwvx",
    promise:
      "Help expecting parents move through all 40 weeks of pregnancy with one evidence-led plan — so both partners know what matters, what to ignore, what to ask their care team, and how to prepare for birth without drowning in conflicting advice.",
    whatItFeelsLike: {
      headline: "Pregnancy often comes with an avalanche of unsolicited advice and anxiety.",
      points: [
        "Constantly wondering if standard symptoms require calling the clinic or are completely typical.",
        "Navigating fear-driven food restriction lists and contradictory prenatal advice.",
        "Feeling overwhelmed by complex birth plans, gear registries, and social media opinions.",
        "Partners feeling like passive spectators rather than informed, active participants.",
      ],
    },
    whatYouWillLearn: [
      "The clinical roadmap across trimesters: appointments, common screenings, and standard milestones.",
      "Balanced prenatal nutrition, food safety facts based on actual contamination risks, and hydration.",
      "Physical comfort: exercise guidelines, safe positioning, and relief for common pregnancy complaints.",
      "What to genuinely avoid vs. exaggerated dietary and lifestyle restrictions.",
      "How to build a collaborative relationship with your obstetrician, midwife, or care team.",
      "Mental health, emotional shifts, and supporting each other as a couple.",
      "Demystifying birth preparation: understanding labor physiology, interventions, and pain management.",
      "Creating an actionable Day-One newborn transition plan for coming home from the hospital or birth center.",
    ],
    phases: [
      {
        number: 1,
        title: "Start Pregnancy Strong",
        description: "First trimester realities, prenatal nutrition foundations, and initial screening navigation.",
        modules: [
          "01 Your Pregnancy Starting Point",
          "02 Nutrition & Prenatal Foundations",
          "03 The First Trimester",
        ],
      },
      {
        number: 2,
        title: "Build the Foundation",
        description: "Second trimester vitality, safe movement, understanding prenatal tests, and daily comfort.",
        modules: [
          "04 Movement, Sleep & Daily Health",
          "05 What to Avoid & Reduce",
          "06 The Second Trimester",
          "07 Understanding Prenatal Care",
        ],
      },
      {
        number: 3,
        title: "Prepare for the Finish",
        description: "Third trimester shifts, birth preparation without dogma, and emotional partnership.",
        modules: [
          "08 The Third Trimester",
          "09 Mental Health, Stress & Partnership",
          "10 Birth Preparation Without the Noise",
        ],
      },
      {
        number: 4,
        title: "Ready for Day One",
        description: "The final weeks countdown, labor packing, and realistic postpartum homecoming logistics.",
        modules: [
          "11 Your Final Weeks & Day-One Plan",
        ],
      },
    ],
    allModules: [
      "01 Your Pregnancy Starting Point",
      "02 Nutrition & Prenatal Foundations",
      "03 The First Trimester",
      "04 Movement, Sleep & Daily Health",
      "05 What to Avoid & Reduce",
      "06 The Second Trimester",
      "07 Understanding Prenatal Care",
      "08 The Third Trimester",
      "09 Mental Health, Stress & Partnership",
      "10 Birth Preparation Without the Noise",
      "11 Your Final Weeks & Day-One Plan",
    ],
    practicalTools: [
      "Trimester Screening & Appointment Question Log",
      "Evidence-Led Prenatal Food Safety Decision Guide",
      "First Trimester Symptom Management Checklist",
      "Safe Pregnancy Exercise & Mobility Planner",
      "Care Provider Interview & Alignment Worksheet",
      "Second Trimester Energy & Body Support Routine",
      "Third Trimester Birth Preferences Worksheet (Non-dogmatic)",
      "Hospital / Birth Center Packing Essentials List",
      "Partner Labor Support & Advocacy Role Card",
      "Postpartum Recovery Room Setup Planner",
      "Coming Home Day-One Checklist",
    ],
    benefits: [
      "Calm, grounded understanding of every trimester without sensationalism.",
      "Actionable question lists for your prenatal visits to maximize appointment time.",
      "Practical birth preparation focused on anatomy, evidence, and flexibility rather than dogma.",
      "Active partner integration so both parents feel capable, prepared, and united.",
    ],
    whoItIsFor: [
      "Expecting parents at any stage of pregnancy (first, second, or third trimester).",
      "Couples wanting clear, un-hyped guidance from positive test to birth day.",
      "Partners seeking concrete ways to support physical health and birth preparation.",
      "Anyone wanting to avoid extreme natural vs. medical polarization in birth discussions.",
    ],
    faqs: [
      {
        question: "When should I begin this course?",
        answer:
          "You can begin as soon as you find out you are pregnant. If you are already in your second or third trimester, you can jump directly into your current trimester's modules and tools.",
      },
      {
        question: "Does this promote one specific type of birth (e.g., unmedicated vs. medicated)?",
        answer:
          "No. KINSHIP does not prescribe birth ideologies. We explain labor physiology, medical interventions, pain management options, and partner support so you can make informed decisions in partnership with your clinical providers.",
      },
      {
        question: "Is this intended to replace hospital childbirth classes?",
        answer:
          "KINSHIP provides comprehensive education across the entire 40 weeks, covering lifestyle, prenatal care, mental health, and birth preparation. Many parents use it alongside their local hospital tour or clinical orientation.",
      },
    ],
    prevSlug: "pre-conception",
    prevTitle: "Pre-Conception — The First 90 Days",
    nextSlug: "newborn",
    nextTitle: "Newborn — The First 12 Weeks",
  },
  {
    slug: "newborn",
    stageNumber: "03",
    stage: "Newborn · 0–3 Months",
    title: "Newborn — The First 12 Weeks",
    tagline: "A 12-week plan to help both parents navigate newborn life with confidence.",
    shortDescription: "A 12-week plan to help both parents navigate newborn life with confidence.",
    price: "$99 · One-time",
    priceNum: 99,
    image: "/images/course-3-newborn.png",
    cardImage: "/images/course-3-card.png",
    altText: "KINSHIP Newborn course artwork featuring delicate sprout emerging from circular root signal",
    phaseCount: 3,
    moduleCount: 14,
    toolCount: 14,
    checkoutUrl: "https://whop.com/checkout/plan_ZuKRJgFzNTb7j",
    promise:
      "Help both parents navigate the first 12 weeks with one evidence-led newborn plan — so they understand safe sleep, feeding, crying, everyday care, newborn health, bonding, and their changing role as parents without trying to piece everything together from conflicting advice.",
    whatItFeelsLike: {
      headline: "The fourth trimester is intense, exhausting, and filled with second-guessing.",
      points: [
        "Frantic 3:00 AM Google searches over every cough, grunt, or feeding question.",
        "Sleep deprivation combined with confusing schedules and rigid sleep training advice.",
        "Worrying about whether baby is eating enough, gaining weight, or bonding properly.",
        "Managing fatigue, maternal physical recovery, and relationship strain amidst shifting roles.",
      ],
    },
    whatYouWillLearn: [
      "Safe sleep guidelines (AAP principles) explained clearly and practically for real homes.",
      "Feeding fundamentals: recognizing hunger cues, latch basics, bottle feeding, and weight tracking.",
      "Everyday care without stress: bathing, umbilical cord care, diapering, skin care, and nail trimming.",
      "Newborn health literacy: taking temperatures accurately, recognizing red flags, and knowing when to call.",
      "The biology of infant crying: why newborns cry, soothing techniques that actually work, and coping with colic.",
      "Newborn sleep architecture: day/night confusion, wake windows, and realistic expectations.",
      "Bonding and connection: how secure attachment develops naturally through responsive care.",
      "Parent recovery, partner teamwork, dividing nighttime shifts, and managing visitors.",
    ],
    phases: [
      {
        number: 1,
        title: "Bring Baby Home With Confidence",
        description: "The first 14 days: safe sleep foundations, feeding setup, physical care, and critical red flags.",
        modules: [
          "01 Your Newborn Starting Point",
          "02 Safe Sleep From Day One",
          "03 Feeding Your Newborn",
          "04 Everyday Newborn Care",
          "05 Understanding Newborn Health & Red Flags",
        ],
      },
      {
        number: 2,
        title: "Understand Your Newborn",
        description: "Weeks 3 to 8: decode cries, master soothing methods, understand sleep rhythms, and nurture attachment.",
        modules: [
          "06 Crying, Cues & Communication",
          "07 Soothing Without the Noise",
          "08 Newborn Sleep & Wake Patterns",
          "09 Bonding, Attachment & Connection",
          "10 Early Development Without Over-Stimulation",
        ],
      },
      {
        number: 3,
        title: "Find Your Family Rhythm",
        description: "Weeks 8 to 12: parent recovery, dividing night duties, navigating the outside world, and transition to infancy.",
        modules: [
          "11 Parent Recovery, Sleep & Wellbeing",
          "12 Partners, Roles & Sharing the Load",
          "13 Visitors, Going Out & Everyday Life",
          "14 From Newborn to Infant",
        ],
      },
    ],
    allModules: [
      "01 Your Newborn Starting Point",
      "02 Safe Sleep From Day One",
      "03 Feeding Your Newborn",
      "04 Everyday Newborn Care",
      "05 Understanding Newborn Health & Red Flags",
      "06 Crying, Cues & Communication",
      "07 Soothing Without the Noise",
      "08 Newborn Sleep & Wake Patterns",
      "09 Bonding, Attachment & Connection",
      "10 Early Development Without Over-Stimulation",
      "11 Parent Recovery, Sleep & Wellbeing",
      "12 Partners, Roles & Sharing the Load",
      "13 Visitors, Going Out & Everyday Life",
      "14 From Newborn to Infant",
    ],
    practicalTools: [
      "Safe Sleep Nursery & Bassinet Setup Audit",
      "Newborn Feeding & Diaper Output Daily Tracker",
      "Clinical Red Flags & When to Call Pediatrician Guide",
      "Thermometer & Fever Management Quick Reference",
      "Baby Crying Decoded & Responsive Soothing Flowchart",
      "Wake Windows & Sleep Signal Observation Sheet",
      "Partner Nighttime Shift Sharing Schedule",
      "Postpartum Recovery & Emotional Check-in Sheet",
      "Visitor Boundaries & Polite Communication Scripts",
      "First Outing Diaper Bag & Car Prep Checklist",
      "Tummy Time & Gentle Stimulation Guide",
      "Pediatric Well-Check Question Organizer",
      "Mental Health & Postpartum Mood Tracker",
      "12-Week Newborn to Infant Transition Summary",
    ],
    benefits: [
      "Peace of mind knowing safe sleep and clinical warning signs clearly.",
      "No rigid or punishing schedules that leave you feeling inadequate.",
      "Equal grounding for both parents so nighttime responsibilities are shared fairly.",
      "Clear, calm guidance to replace frantic midnight internet searches.",
    ],
    whoItIsFor: [
      "Expecting parents preparing their fourth trimester survival plan.",
      "New parents currently in weeks 0 through 12 who want structured, reassuring guidance.",
      "Non-birthing partners seeking equal competence in caring for their newborn.",
      "Anyone feeling overwhelmed by sleep training dogma or conflicting newborn advice.",
    ],
    faqs: [
      {
        question: "Does this course push rigid sleep training?",
        answer:
          "No. Newborns (0–12 weeks) are neurologically incapable of adult sleep rhythms. KINSHIP focuses on understanding biological infant sleep, establishing safe sleep environments, identifying tired cues, and creating manageable routines without rigid sleep training.",
      },
      {
        question: "Does it support both breastfeeding and formula feeding?",
        answer:
          "Yes. KINSHIP is completely non-judgmental and evidence-led. We provide practical guidance on breastfeeding, formula preparation, pumping, and combination feeding so you can nourish your baby confidently.",
      },
      {
        question: "What if I notice signs of postpartum depression or anxiety?",
        answer:
          "The course includes dedicated guidance on identifying perinatal mood and anxiety disorders in both parents and provides structured checklists to share with your healthcare provider.",
      },
    ],
    prevSlug: "pregnancy",
    prevTitle: "Pregnancy — The 40 Weeks",
    nextSlug: "infant",
    nextTitle: "Infant — 3–12 Months",
  },
  {
    slug: "infant",
    stageNumber: "04",
    stage: "Infant",
    title: "Infant — 3–12 Months",
    tagline: "A practical plan to help parents navigate their baby's first year with confidence.",
    shortDescription: "A practical plan to help parents navigate their baby's first year with confidence.",
    price: "$99 · One-time",
    priceNum: 99,
    image: "/images/course-4-infant.png",
    cardImage: "/images/course-4-card.png",
    altText: "KINSHIP Infant course artwork showing growing stem with five balanced leaves",
    phaseCount: 4,
    moduleCount: 20,
    toolCount: 20,
    checkoutUrl: "https://whop.com/checkout/plan_pu9VmtEZgl4jX",
    promise:
      "Help parents navigate months 3–12 with one evidence-led plan — so they can support feeding, sleep, movement, communication, development, and everyday health without turning every milestone into something to worry about or optimize.",
    whatItFeelsLike: {
      headline: "The middle of the first year brings exciting changes alongside fresh anxieties.",
      points: [
        "Constant pressure regarding whether baby is rolling, crawling, or babbling 'on schedule.'",
        "Fear and confusion surrounding starting solid foods, choking hazards, and allergen introductions.",
        "Sleep regressions and shifting nap schedules disrupting previously settled family routines.",
        "Guilt over returning to work, selecting childcare, or balancing career and parenthood.",
      ],
    },
    whatYouWillLearn: [
      "Realistic milestone ranges: understanding individual variability without milestone panic.",
      "Language development: communicative gestures, joint attention, and responding to early babble.",
      "Purposeful play: simple, everyday interactions that foster cognitive and motor development without expensive toys.",
      "Introducing solids: baby-led weaning, purees, or combined approaches, with safety and allergen guidelines.",
      "Texture progression and responsive feeding to build confident, low-stress eating habits.",
      "Infant sleep evolution: circadian rhythm maturation, nap transitions, and bedtime routines.",
      "Gross and fine motor development: tummy time progressions, sitting, crawling, and pulling to stand.",
      "Separation anxiety, stranger awareness, home safety baby-proofing, and preparing for age one.",
    ],
    phases: [
      {
        number: 1,
        title: "Understand Your Growing Baby",
        description: "Months 3 to 6: developmental leaps, milestone realities, early communication, and responsive play.",
        modules: [
          "01 Your Infant Starting Point",
          "02 What Changes From 3–12 Months",
          "03 Understanding Development & Milestones",
          "04 Connection, Attachment & Communication",
          "05 Play That Supports Development",
        ],
      },
      {
        number: 2,
        title: "Build the Daily Foundations",
        description: "Months 6 to 8: starting solids with confidence, allergen protocol, infant sleep evolution, and motor skills.",
        modules: [
          "06 Feeding From Milk Toward Solids",
          "07 Starting Solids With Confidence",
          "08 Food Variety, Texture & Mealtime Skills",
          "09 Infant Sleep Without the Noise",
          "10 Movement, Tummy Time & Physical Development",
        ],
      },
      {
        number: 3,
        title: "Navigate the Big Changes",
        description: "Months 8 to 10: sitting to crawling, teething relief, pre-verbal communication, and mobile baby safety.",
        modules: [
          "11 Sitting, Crawling, Standing & Early Mobility",
          "12 Teething & Everyday Comfort",
          "13 Communication Before First Words",
          "14 Separation, Stranger Awareness & Big Feelings",
          "15 Safety as Your Baby Becomes Mobile",
        ],
      },
      {
        number: 4,
        title: "Support the Whole First Year",
        description: "Months 10 to 12: infant health, childcare routines, partnership resilience, and toddler stage readiness.",
        modules: [
          "16 Infant Health & Knowing What to Check",
          "17 Routines, Childcare & Everyday Life",
          "18 Parents, Partnership & Sharing the Load",
          "19 Months 9–12: Preparing for the Next Stage",
          "20 Your First-Year Review & Toddler Transition",
        ],
      },
    ],
    allModules: [
      "01 Your Infant Starting Point",
      "02 What Changes From 3–12 Months",
      "03 Understanding Development & Milestones",
      "04 Connection, Attachment & Communication",
      "05 Play That Supports Development",
      "06 Feeding From Milk Toward Solids",
      "07 Starting Solids With Confidence",
      "08 Food Variety, Texture & Mealtime Skills",
      "09 Infant Sleep Without the Noise",
      "10 Movement, Tummy Time & Physical Development",
      "11 Sitting, Crawling, Standing & Early Mobility",
      "12 Teething & Everyday Comfort",
      "13 Communication Before First Words",
      "14 Separation, Stranger Awareness & Big Feelings",
      "15 Safety as Your Baby Becomes Mobile",
      "16 Infant Health & Knowing What to Check",
      "17 Routines, Childcare & Everyday Life",
      "18 Parents, Partnership & Sharing the Load",
      "19 Months 9–12: Preparing for the Next Stage",
      "20 Your First-Year Review & Toddler Transition",
    ],
    practicalTools: [
      "Developmental Milestone Observation & Window Guide",
      "Solid Food Readiness & Safety Checklist",
      "Early Allergen Introduction Tracker & Protocol",
      "Gagging vs. Choking Quick Action Guide",
      "Texture Progression & Finger Food Safety Matrix",
      "Infant Nap Transition & Wake Window Schedule",
      "Motor Milestones (Rolling, Sitting, Crawling) Activity Guide",
      "Teething Comfort & Symptom Relief Flowchart",
      "Pre-Verbal Gestures & Signing Reference Sheet",
      "Mobile Baby Home Proofing & Hazard Checklist",
      "Pediatric Illness & Medication Dosing Tracker",
      "Childcare Transition & Caregiver Alignment Plan",
      "Separation Anxiety Gentle Practice Plan",
      "Parent Work-Life Balance & Division of Labor Review",
      "9-to-12 Month Routine Transition Worksheet",
      "Nutrient Needs in Late Infancy Checklist",
      "Safe Table Food Sharing Guide",
      "Independent Play Space Setup Guide",
      "One-Year Health & Development Question Log",
      "First-Year Reflection & Toddler Roadmap",
    ],
    benefits: [
      "Demystify milestones so you celebrate progress instead of tallying worries.",
      "Clear, step-by-step solid feeding plan that prevents mealtime stress from day one.",
      "Practical strategies for nap transitions and sleep disruptions that respect infant biology.",
      "Realistic home proofing and safety guidelines that don't require re-architecting your house.",
    ],
    whoItIsFor: [
      "Parents of infants aged 3 to 12 months navigating rapid physical and cognitive growth.",
      "Families preparing to introduce solid foods and wondering where to start.",
      "Parents experiencing 4-month or 8-month sleep regressions seeking gentle clarity.",
      "Caregivers wanting practical developmental activities without battery-operated gadgets.",
    ],
    faqs: [
      {
        question: "Do you recommend baby-led weaning or traditional purees?",
        answer:
          "Both approaches have evidence-supported merits. KINSHIP teaches you the principles of safe food preparation, developmental readiness cues, gagging vs. choking differences, and allergen exposure so you can choose what fits your baby and family comfortably.",
      },
      {
        question: "What if my baby isn't hitting a milestone by the exact average age?",
        answer:
          "Developmental milestones occur across wide normal ranges rather than on rigid dates. KINSHIP outlines normal variation windows and helps you understand when to simply observe and when a milestone warrants a conversation with your pediatrician.",
      },
      {
        question: "How does this course address infant sleep?",
        answer:
          "We examine biological sleep changes (such as the 4-month circadian maturation), nap transitions, and practical bedtime rhythms. We prioritize healthy sleep hygiene without shaming parents for their chosen soothing methods.",
      },
    ],
    prevSlug: "newborn",
    prevTitle: "Newborn — The First 12 Weeks",
    nextSlug: "toddler",
    nextTitle: "Toddler — 1–3 Years",
  },
  {
    slug: "toddler",
    stageNumber: "05",
    stage: "Toddler",
    title: "Toddler — 1–3 Years",
    tagline: "A practical plan to help parents navigate the toddler years with confidence.",
    shortDescription: "A practical plan to help parents navigate the toddler years with confidence.",
    price: "$79 · One-time",
    priceNum: 79,
    image: "/images/course-5-toddler.png",
    cardImage: "/images/course-5-card.png",
    altText: "KINSHIP Toddler course artwork showing rooted sapling with branching leaf clusters",
    phaseCount: 4,
    moduleCount: 20,
    toolCount: 20,
    checkoutUrl: "https://whop.com/checkout/plan_NA5RcQrPD0vY3",
    promise:
      "Help parents navigate ages 1–3 with one evidence-led framework — so they can understand development, communication, eating, sleep, independence, tantrums, and challenging behavior without turning toddlerhood into a constant battle or a full-time research project.",
    whatItFeelsLike: {
      headline: "Toddlerhood is full of delight, punctuated by intense emotional storms.",
      points: [
        "Sudden, explosive tantrums over everyday tasks like putting on shoes or cutting a sandwich.",
        "Picky eating, refused meals, and fear that your child isn't getting adequate nutrition.",
        "Struggles with physical behaviors like hitting, biting, throwing, or resisting bedtime.",
        "Feeling caught between overly punitive discipline and exhausting gentle-parenting guilt.",
      ],
    },
    whatYouWillLearn: [
      "The neuroscience of the toddler brain: why emotional overload happens and why reason fails in meltdowns.",
      "How to set firm, respectful boundaries without yelling, bribery, or endless negotiations.",
      "Managing aggressive behaviors (hitting, biting, kicking) calmly and effectively.",
      "The Division of Responsibility in feeding: ending dinner table battles and addressing picky phases.",
      "Language development and speech milestones: supporting conversations and handling communication frustration.",
      "Toddler sleep dynamics: crib-to-bed transitions, bedtime stalling, and night wakings.",
      "Fostering genuine independence: self-care skills, helping around the home, and building cooperative habits.",
      "Navigating social dynamics: sharing, parallel play, conflict between peers, and sibling adjustments.",
    ],
    phases: [
      {
        number: 1,
        title: "Understand Your Toddler",
        description: "Brain development, communication leaps, growing autonomy, and attachment security.",
        modules: [
          "01 Your Toddler Starting Point",
          "02 What Changes From 1–3 Years",
          "03 Understanding Toddler Brain Development",
          "04 Connection, Attachment & Growing Independence",
          "05 Communication, Language & First Conversations",
        ],
      },
      {
        number: 2,
        title: "Build the Daily Foundations",
        description: "Nutrition without battles, handling picky eating, sleep routines, and physical exploration.",
        modules: [
          "06 Toddler Nutrition Without the Battles",
          "07 Picky Eating & Changing Appetites",
          "08 Toddler Sleep & Changing Routines",
          "09 Movement, Coordination & Physical Development",
          "10 Play, Learning & Everyday Exploration",
        ],
      },
      {
        number: 3,
        title: "Navigate Behavior & Big Feelings",
        description: "Deconstructing tantrums, setting clear boundaries, managing hitting/biting, and co-regulation.",
        modules: [
          "11 Understanding Tantrums & Emotional Overload",
          "12 Boundaries Without Constant Battles",
          "13 Hitting, Biting, Throwing & Other Difficult Behaviors",
          "14 Building Emotional Regulation",
          "15 Independence, Cooperation & Everyday Skills",
        ],
      },
      {
        number: 4,
        title: "Support the Whole Toddler Stage",
        description: "Growing safety, health check-ins, social interactions with peers, and preschool preparation.",
        modules: [
          "16 Toddler Safety as Independence Grows",
          "17 Toddler Health & Knowing What to Check",
          "18 Childcare, Social Development & Other Children",
          "19 Parents, Partnership & Family Life",
          "20 From Toddler to Preschooler",
        ],
      },
    ],
    allModules: [
      "01 Your Toddler Starting Point",
      "02 What Changes From 1–3 Years",
      "03 Understanding Toddler Brain Development",
      "04 Connection, Attachment & Growing Independence",
      "05 Communication, Language & First Conversations",
      "06 Toddler Nutrition Without the Battles",
      "07 Picky Eating & Changing Appetites",
      "08 Toddler Sleep & Changing Routines",
      "09 Movement, Coordination & Physical Development",
      "10 Play, Learning & Everyday Exploration",
      "11 Understanding Tantrums & Emotional Overload",
      "12 Boundaries Without Constant Battles",
      "13 Hitting, Biting, Throwing & Other Difficult Behaviors",
      "14 Building Emotional Regulation",
      "15 Independence, Cooperation & Everyday Skills",
      "16 Toddler Safety as Independence Grows",
      "17 Toddler Health & Knowing What to Check",
      "18 Childcare, Social Development & Other Children",
      "19 Parents, Partnership & Family Life",
      "20 From Toddler to Preschooler",
    ],
    practicalTools: [
      "Toddler Brain & Emotional Dysregulation Cheat Sheet",
      "Tantrum De-escalation & Co-Regulation Flowchart",
      "Firm & Calm Boundary Scripts for Everyday Scenarios",
      "Hitting, Biting & Throwing Immediate Response Guide",
      "Division of Responsibility Mealtime Matrix",
      "Picky Eating Exposure & Variety Tracker",
      "Toddler Bedtime Routine & Stalling Prevention Plan",
      "Crib-to-Bed Safety & Readiness Checklist",
      "Toddler Speech & Communication Milestone Guide",
      "Everyday Independence & Chores Capability Chart",
      "Playground & Social Conflict Mediation Guide",
      "Sibling Conflict & New Baby Transition Plan",
      "Toddler Emergency First-Aid & Safety Checklist",
      "Potty Learning Readiness & Low-Pressure Guide",
      "Screen Time Principles & Balanced Framework",
      "Emotional Vocabulary Visual Card Pack Prompts",
      "Parent Self-Regulation & Calm Restoration Tool",
      "Pediatric Health & Developmental Milestones Check",
      "Childcare Drop-off & Separation Plan",
      "Preschool Readiness Transition Roadmap",
    ],
    benefits: [
      "A calm, neurological perspective on tantrums so you stop taking meltdowns personally.",
      "Clear verbal scripts for enforcing boundaries without resorting to shouting or bribing.",
      "Relief from dinner table battles through proven feeding psychology.",
      "Actionable strategies to build self-regulation and independence in your child.",
    ],
    whoItIsFor: [
      "Parents of children aged 12 to 36 months navigating tantrums, testing limits, or sleep disruptions.",
      "Families exhausted by mealtime struggles and looking for a healthy feeding relationship.",
      "Parents who want structured, authoritative boundaries without punishment or permissiveness.",
      "Caregivers preparing for potty learning, social play, or preschool entry.",
    ],
    faqs: [
      {
        question: "Can this course prevent all toddler tantrums?",
        answer:
          "No. Tantrums are a normal, biologically expected feature of early brain development as the emotional brain outpaces the prefrontal cortex. KINSHIP teaches you how to reduce preventable triggers, respond effectively during dysregulation, and teach recovery skills.",
      },
      {
        question: "Is this approach permissive or strict?",
        answer:
          "Neither. KINSHIP teaches authoritative parenting: combining warm connection with clear, unyielding boundaries. You do not need to choose between harsh punitive control and chaotic permissiveness.",
      },
      {
        question: "What if my toddler is barely talking yet?",
        answer:
          "Module 05 covers speech and language milestones, receptive vs. expressive communication, and signs that indicate when a speech-language pathology evaluation is appropriate.",
      },
    ],
    prevSlug: "infant",
    prevTitle: "Infant — 3–12 Months",
    nextSlug: "early-childhood",
    nextTitle: "Early Childhood — 3–5 Years",
  },
  {
    slug: "early-childhood",
    stageNumber: "06",
    stage: "Early Childhood",
    title: "Early Childhood — 3–5 Years",
    tagline: "Help your child build the skills they'll carry into school and beyond.",
    shortDescription: "Help your child build the skills they'll carry into school and beyond.",
    price: "$79 · One-time",
    priceNum: 79,
    image: "/images/course-6-early-childhood.png",
    cardImage: "/images/course-6-card.png",
    altText: "KINSHIP Early Childhood course artwork showing mature botanical plant with blossom clusters",
    phaseCount: 4,
    moduleCount: 21,
    toolCount: 21,
    checkoutUrl: "https://whop.com/checkout/plan_F8qTln4OnePz9",
    promise:
      "Help parents navigate ages 3–5 with one evidence-led framework — so they can support development, communication, emotional regulation, independence, learning, health, and school readiness without unnecessary pressure or conflicting parenting advice.",
    whatItFeelsLike: {
      headline: "The preschool years bring deeper conversations alongside new developmental hurdles.",
      points: [
        "Anxiety about school readiness: reading, phonics, and academic pressure vs. play.",
        "Persistent defiance, power struggles, and verbal pushback from an increasingly opinionated child.",
        "Social complexities: navigating first friendships, sharing, exclusion, and social anxiety.",
        "Balancing screen time, routines, extracurricular activities, and family downtime.",
      ],
    },
    whatYouWillLearn: [
      "Executive function development: working memory, flexible thinking, and inhibitory self-control.",
      "School readiness beyond academics: emotional resilience, following instructions, and self-care skills.",
      "Fostering intrinsic motivation and confidence without reliance on external stickers and rewards.",
      "Play-based learning: how rich dramatic and physical play builds the neurological foundations for literacy and math.",
      "Navigating intense pushback, defiance, and lying through understanding developmental perspective-taking.",
      "Healthy peer relationships: teaching turn-taking, resolving conflicts, and supporting shy or spirited children.",
      "Nutrition and family dining: expanding culinary variety and maintaining positive body autonomy.",
      "Transitioning smoothly from preschool to primary school with minimal family stress.",
    ],
    phases: [
      {
        number: 1,
        title: "Understand Your Growing Child",
        description: "Ages 3 to 5: brain architecture, advanced language, self-concept, and play-based cognitive development.",
        modules: [
          "01 Your Early Childhood Starting Point",
          "02 What Changes From 3–5 Years",
          "03 Understanding the Developing Brain",
          "04 Language, Communication & Conversation",
          "05 Confidence, Connection & Self-Concept",
        ],
      },
      {
        number: 2,
        title: "Build the Daily Foundations",
        description: "Early learning without academic stress, mealtime peace, healthy sleep, and active physical play.",
        modules: [
          "06 Play, Imagination & Learning",
          "07 Early Learning Without Academic Pressure",
          "08 Nutrition Without Mealtime Battles",
          "09 Picky Eating & Food Confidence",
          "10 Sleep, Rest & Family Routines",
          "11 Movement, Coordination & Active Play",
        ],
      },
      {
        number: 3,
        title: "Navigate Behavior & Growing Independence",
        description: "Managing big emotions, addressing defiance and aggression, everyday life skills, and peer social dynamics.",
        modules: [
          "12 Big Feelings & Emotional Regulation",
          "13 Boundaries, Cooperation & Everyday Behavior",
          "14 Defiance, Aggression & Difficult Behavior",
          "15 Independence & Everyday Life Skills",
          "16 Friendships, Sharing & Social Development",
        ],
      },
      {
        number: 4,
        title: "Prepare for What Comes Next",
        description: "Preschool transitions, personal safety, body autonomy, health checks, and genuine school readiness.",
        modules: [
          "17 Separation, Childcare & Preschool Transitions",
          "18 Safety, Body Autonomy & Growing Independence",
          "19 Health, Development & Knowing What to Check",
          "20 School Readiness Beyond ABCs",
          "21 Your 3–5 Year Review & School-Age Transition",
        ],
      },
    ],
    allModules: [
      "01 Your Early Childhood Starting Point",
      "02 What Changes From 3–5 Years",
      "03 Understanding the Developing Brain",
      "04 Language, Communication & Conversation",
      "05 Confidence, Connection & Self-Concept",
      "06 Play, Imagination & Learning",
      "07 Early Learning Without Academic Pressure",
      "08 Nutrition Without Mealtime Battles",
      "09 Picky Eating & Food Confidence",
      "10 Sleep, Rest & Family Routines",
      "11 Movement, Coordination & Active Play",
      "12 Big Feelings & Emotional Regulation",
      "13 Boundaries, Cooperation & Everyday Behavior",
      "14 Defiance, Aggression & Difficult Behavior",
      "15 Independence & Everyday Life Skills",
      "16 Friendships, Sharing & Social Development",
      "17 Separation, Childcare & Preschool Transitions",
      "18 Safety, Body Autonomy & Growing Independence",
      "19 Health, Development & Knowing What to Check",
      "20 School Readiness Beyond ABCs",
      "21 Your 3–5 Year Review & School-Age Transition",
    ],
    practicalTools: [
      "Executive Function & Self-Regulation Game Guide",
      "Play-Based Learning & Literacy Activities at Home",
      "Defiance & Power Struggle De-escalation Scripts",
      "Everyday Cooperation & Morning Routine Visual Chart",
      "Healthy Emotional Expression & Calming Corner Setup",
      "Peer Conflict & Playdate Mediation Guide",
      "Body Autonomy, Consent & Personal Safety Rules",
      "Nutrition & Expanding Food Horizons Checklist",
      "Screen Time Family Agreement & Quality Audit",
      "Preschool Separation Anxiety Support Strategy",
      "Life Skills & Self-Sufficiency Capability Tracker",
      "Genuine School Readiness Evaluation Matrix",
      "Social Problem-Solving & Apology Teaching Prompts",
      "Bedtime Relaxation & Independent Sleep Habits",
      "Curiosity & Storytelling Conversation Starter Pack",
      "Vision, Hearing & Developmental Screening Checklist",
      "Sibling Dynamics & Fair Treatment Framework",
      "Gross & Fine Motor Skill Assessment Activities",
      "Kindergarten / School Transition Readiness Action Plan",
      "Teacher Collaboration & Parent-Teacher Alignment Log",
      "Early Childhood Comprehensive Milestones Review",
    ],
    benefits: [
      "Relief from the pressure to turn preschool years into miniature academic bootcamps.",
      "Effective tools to handle defiance and power struggles with dignity and calm authority.",
      "Clear guidance on fostering genuine friendships and conflict resolution skills.",
      "A complete framework for social, emotional, and self-care school readiness.",
    ],
    whoItIsFor: [
      "Parents of 3-to-5-year-olds facing increasing independence, big questions, or stubborn defiance.",
      "Families wanting to foster school readiness without drill sheets or premature academic pressure.",
      "Caregivers looking to build emotional intelligence and problem-solving skills in their child.",
      "Anyone preparing their child for the monumental transition to primary school.",
    ],
    faqs: [
      {
        question: "Should my 4-year-old be reading and doing math drills before school?",
        answer:
          "Evidence shows that social-emotional regulation, vocabulary, motor skills, and executive function are far more predictive of long-term academic success than premature drill-based phonics. KINSHIP focuses on rich play and conversational foundations.",
      },
      {
        question: "How do you handle persistent defiance and 'no!' at this age?",
        answer:
          "At ages 3–5, children explore autonomy and testing limits. We provide structured verbal approaches that validate their desire for control while keeping parental boundaries firm and non-negotiable.",
      },
      {
        question: "What does genuine school readiness look like?",
        answer:
          "Module 20 outlines the multi-dimensional indicators of readiness: toileting independently, managing personal belongings, following two-step instructions, regulating frustration, and interacting constructively with peers.",
      },
    ],
    prevSlug: "toddler",
    prevTitle: "Toddler — 1–3 Years",
  },
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return COURSES.find((c) => c.slug === slug);
}
