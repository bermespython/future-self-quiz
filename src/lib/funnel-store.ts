import { create } from "zustand";

export const STEPS = [
  "age",
  "proof",
  "tried",
  "encourage",
  "goal",
  "showcase",
  "extras",
  "pattern",
  "duration",
  "severity",
  "analyze",
  "plan",
  "product",
  "reserve",
  "confirm",
] as const;

export type StepId = (typeof STEPS)[number];

export type AgeBand = "18-29" | "30-39" | "40-49" | "50+";
export type Goal = "reverse" | "hairline" | "shedding" | "maintain";
export type Pattern = "hairline" | "crown" | "part" | "diffuse";
export type Duration = "under-6m" | "6-12m" | "1-3y" | "over-3y";
export type Severity = "mild" | "moderate" | "advanced" | "severe";
export type Compound = "semaglutide" | "tirzepatide" | "liraglutide";
export type Plan = "12-week" | "4-week";

export const QUIZ_STEPS: StepId[] = [
  "tried",
  "goal",
  "extras",
  "pattern",
  "duration",
  "severity",
];

export type Answers = {
  age?: AgeBand;
  triedBefore?: boolean;
  goal?: Goal;
  extras: string[];
  pattern?: Pattern;
  duration?: Duration;
  severity?: Severity;
  email: string;
  plan: Plan;
};

type FunnelState = Answers & {
  step: StepId;
  direction: 1 | -1;
  menuOpen: boolean;
  helpOpen: boolean;
  cartCount: number;
  hydrated: boolean;
  setStep: (step: StepId, direction?: 1 | -1) => void;
  next: () => void;
  back: () => void;
  reset: () => void;
  hydrate: () => void;
  setAge: (age: AgeBand) => void;
  setTried: (triedBefore: boolean) => void;
  setGoal: (goal: Goal) => void;
  toggleExtra: (id: string) => void;
  setPattern: (pattern: Pattern) => void;
  setDuration: (duration: Duration) => void;
  setSeverity: (severity: Severity) => void;
  setEmail: (email: string) => void;
  setPlan: (plan: Plan) => void;
  addToProtocol: () => void;
  setMenuOpen: (open: boolean) => void;
  setHelpOpen: (open: boolean) => void;
};

const STORAGE_KEY = "futureself-funnel";

export type Persisted = Partial<Answers> & { step?: StepId; cartCount?: number };

export function readPersisted(): Persisted {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as Persisted;
    if (data.step === "analyze") data.step = "plan";
    return data;
  } catch {
    return {};
  }
}

function writePersisted(s: FunnelState) {
  if (typeof window === "undefined" || !s.hydrated) return;
  try {
    const slice: Persisted = {
      step: s.step,
      age: s.age,
      triedBefore: s.triedBefore,
      goal: s.goal,
      extras: s.extras,
      pattern: s.pattern,
      duration: s.duration,
      severity: s.severity,
      email: s.email,
      plan: s.plan,
      cartCount: s.cartCount,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(slice));
  } catch {
    /* private mode */
  }
}

export const useFunnel = create<FunnelState>((set, get) => ({
  step: "age",
  direction: 1,
  menuOpen: false,
  helpOpen: false,
  cartCount: 0,
  hydrated: false,
  extras: [],
  email: "",
  plan: "12-week",
  setStep: (step, direction = 1) => set({ step, direction, menuOpen: false }),
  next: () => {
    const { step } = get();
    const i = STEPS.indexOf(step);
    if (i >= 0 && i < STEPS.length - 1) {
      set({ step: STEPS[i + 1], direction: 1 });
    }
  },
  back: () => {
    const { step } = get();
    const i = STEPS.indexOf(step);
    if (i > 0) set({ step: STEPS[i - 1], direction: -1 });
  },
  hydrate: () => {
    if (get().hydrated) return;
    const p = readPersisted();
    set({
      hydrated: true,
      step: p.step ?? "age",
      cartCount: p.cartCount ?? 0,
      extras: p.extras ?? [],
      email: p.email ?? "",
      plan: p.plan ?? "12-week",
      age: p.age,
      triedBefore: p.triedBefore,
      goal: p.goal,
      pattern: p.pattern,
      duration: p.duration,
      severity: p.severity,
    });
  },
  reset: () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    set({
      step: "age",
      direction: 1,
      menuOpen: false,
      helpOpen: false,
      cartCount: 0,
      extras: [],
      email: "",
      plan: "12-week",
      age: undefined,
      triedBefore: undefined,
      goal: undefined,
      pattern: undefined,
      duration: undefined,
      severity: undefined,
      hydrated: true,
    });
  },
  setAge: (age) => set({ age, step: "proof", direction: 1 }),
  setTried: (triedBefore) => set({ triedBefore, step: "encourage", direction: 1 }),
  setGoal: (goal) => set({ goal, step: "showcase", direction: 1 }),
  toggleExtra: (id) =>
    set((s) => ({
      extras: s.extras.includes(id) ? s.extras.filter((x) => x !== id) : [...s.extras, id],
    })),
  setPattern: (pattern) => set({ pattern, step: "duration", direction: 1 }),
  setDuration: (duration) => set({ duration, step: "severity", direction: 1 }),
  setSeverity: (severity) => set({ severity, step: "analyze", direction: 1 }),
  setEmail: (email) => set({ email }),
  setPlan: (plan) => set({ plan }),
  addToProtocol: () => set({ cartCount: 1, step: "reserve", direction: 1 }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setHelpOpen: (helpOpen) => set({ helpOpen }),
}));

if (typeof window !== "undefined") {
  useFunnel.subscribe((s) => writePersisted(s));
}

export function stepKey(step: StepId) {
  return `${STEPS.indexOf(step)}-${step}`;
}

export function recommendCompound(a: Answers): Compound {
  if (a.severity === "severe" || a.severity === "advanced") return "tirzepatide";
  if (a.age === "50+" || a.triedBefore) return "liraglutide";
  return "semaglutide";
}

export function ageLabel(age?: AgeBand) {
  if (age === "18-29") return "their 20s";
  if (age === "30-39") return "their 30s";
  if (age === "40-49") return "their 40s";
  if (age === "50+") return "their 50s";
  return "their 40s";
}

export function ageCount(age?: AgeBand) {
  if (age === "18-29") return "420,000";
  if (age === "30-39") return "860,000";
  if (age === "40-49") return "1.4 million";
  if (age === "50+") return "610,000";
  return "1.4 million";
}
