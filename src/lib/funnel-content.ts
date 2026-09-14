import type { AgeBand, Compound, Goal, Pattern } from "@/lib/funnel-store";

export const AGES: { id: AgeBand; label: string; image: string }[] = [
  { id: "18-29", label: "Age: 18–29", image: "/images/age-18.jpg" },
  { id: "30-39", label: "Age: 30–39", image: "/images/age-30.jpg" },
  { id: "40-49", label: "Age: 40–49", image: "/images/age-40.jpg" },
  { id: "50+", label: "Age: 50+", image: "/images/age-50.jpg" },
];

export const GOALS: { id: Goal; label: string; icon: "strands" | "hairline" | "drop" | "shield" }[] =
  [
    { id: "reverse", label: "Reverse thinning", icon: "strands" },
    { id: "hairline", label: "Restore my hairline", icon: "hairline" },
    { id: "shedding", label: "Stop the shedding", icon: "drop" },
    { id: "maintain", label: "Maintain the density I have", icon: "shield" },
  ];

export const EXTRAS: {
  id: string;
  label: string;
  icon: "strands" | "hairline" | "calm" | "scalp" | "style" | "mirror";
}[] = [
  { id: "strength", label: "Thicker, stronger strands", icon: "strands" },
  { id: "posture", label: "A fuller, defined hairline", icon: "hairline" },
  { id: "stress", label: "Less anxiety about shedding", icon: "calm" },
  { id: "energy", label: "A healthier scalp", icon: "scalp" },
  { id: "flex", label: "More freedom in how I style", icon: "style" },
  { id: "sleep", label: "Confidence in the morning mirror", icon: "mirror" },
];

export const PATTERNS: { id: Pattern; label: string; image: string }[] = [
  { id: "hairline", label: "Receding hairline", image: "/images/pattern-hairline.jpg" },
  { id: "crown", label: "Thinning crown", image: "/images/pattern-crown.jpg" },
  { id: "part", label: "Widening part", image: "/images/pattern-part.jpg" },
  { id: "diffuse", label: "Diffuse thinning", image: "/images/pattern-diffuse.jpg" },
];

export const DURATIONS = [
  { id: "under-6m", label: "Less than 6 months" },
  { id: "6-12m", label: "6–12 months" },
  { id: "1-3y", label: "1–3 years" },
  { id: "over-3y", label: "More than 3 years" },
] as const;

export const SEVERITIES = [
  { id: "mild", label: "Mild — only I notice" },
  { id: "moderate", label: "Moderate — others have mentioned it" },
  { id: "advanced", label: "Advanced — it changes how I style" },
  { id: "severe", label: "Severe — I avoid photos and hats" },
] as const;

export const COMPOUNDS: Record<
  Compound,
  {
    name: string;
    index: string;
    kind: string;
    classification: string;
    overview: string;
    details: string;
    formula: string;
    cas: string;
    mass: string;
    cadence: string;
  }
> = {
  semaglutide: {
    name: "Semaglutide",
    index: "01",
    kind: "GLP-1",
    classification: "GLP-1 receptor agonist",
    overview:
      "Semaglutide belongs to the glucagon-like peptide-1 receptor agonist family. In the futureself hair protocol it is the foundational compound — a once-weekly metabolic signal used to steady the follicle cycle and reduce inflammatory shedding.",
    details:
      "Packaging concept for the futureself collection. Strength is clinician-directed after intake. Hair restoration is not an FDA-approved indication. A licensed clinician must review labs and history before any compound is dispensed.",
    formula: "C187H291N45O59",
    cas: "910463-68-2",
    mass: "4113.58 g/mol",
    cadence: "Weekly",
  },
  tirzepatide: {
    name: "Tirzepatide",
    index: "02",
    kind: "GIP / GLP-1",
    classification: "Dual GIP / GLP-1 receptor agonist",
    overview:
      "Tirzepatide acts on both GIP and GLP-1 receptors. For advanced thinning it is the futureself dual-agonist option — a stronger metabolic reset when shedding has been established for years.",
    details:
      "Reserved in this protocol for advanced or severe patterns. Dispensed only after clinician review. Compounded presentation is a futureself vial concept, not a substitute for on-label therapy.",
    formula: "C225H348N46O68",
    cas: "2023788-19-2",
    mass: "4813.45 g/mol",
    cadence: "Weekly",
  },
  liraglutide: {
    name: "Liraglutide",
    index: "03",
    kind: "GLP-1",
    classification: "GLP-1 receptor agonist",
    overview:
      "Liraglutide is a daily GLP-1 receptor agonist. It is the gentler futureself match — used when you have tried treatments before, or when a slower titration is the safer clinical path.",
    details:
      "Daily cadence, slower titration. Selected automatically for 50+ intakes and for people who have already cycled through hair treatments. Clinician review required.",
    formula: "C172H265N43O51",
    cas: "204656-20-2",
    mass: "3751.2 g/mol",
    cadence: "Daily",
  },
};

export function goalHeadline(goal?: Goal) {
  if (goal === "hairline") return "Restore your hairline with GLP-1";
  if (goal === "shedding") return "Stop shedding with GLP-1";
  if (goal === "maintain") return "Protect density with GLP-1";
  return "Reverse thinning with GLP-1";
}

export function goalBody(goal?: Goal) {
  if (goal === "hairline")
    return "Temple recession is a pattern. The protocol maps it, then matches a compound and cadence so the hairline is treated as a system — not a cosmetic patch.";
  if (goal === "shedding")
    return "Telogen effluvium — including shedding that follows rapid metabolic change — is a cycle problem. We slow the dump, then rebuild the anagen phase.";
  if (goal === "maintain")
    return "Holding the density you have is a protocol, not a hope. A calibrated GLP-1 cadence plus follicle check-ins keeps the line from moving.";
  return "Start rebuilding density without a transplant or a three-hour minoxidil ritual. A customized plan, matched to your pattern and metabolic profile.";
}

export function patternLabel(pattern?: Pattern) {
  if (pattern === "crown") return "thinning crown";
  if (pattern === "part") return "widening part";
  if (pattern === "diffuse") return "diffuse thinning";
  return "receding hairline";
}

export const PRESS = ["vogue", "GQ", "WIRED"] as const;
