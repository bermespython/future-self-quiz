import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  AGES,
  COMPOUNDS,
  CURRENTS,
  DESIREDS,
  DURATIONS,
  EXTRAS,
  GOALS,
  PATTERNS,
  PRESS,
  SEVERITIES,
  goalBody,
  goalHeadline,
  patternLabel,
} from "@/lib/funnel-content";
import {
  recommendCompound,
  useFunnel,
} from "@/lib/funnel-store";
import { EXTRA_ICONS, GOAL_ICONS } from "@/components/funnel/icons";
import { VialViewer } from "@/components/funnel/vial-viewer";
import {
  AgeCard,
  ContinueButton,
  OptionRow,
  PatternCard,
  ScreenTitle,
  StickyFooter,
} from "@/components/funnel/ui";
import { cn } from "@/lib/utils";

export function CurrentScreen() {
  const setCurrent = useFunnel((s) => s.setCurrent);
  return (
    <div className="flex flex-1 flex-col px-5 pb-10 pt-7">
      <div className="stagger text-center">
        <p className="font-mono text-[11px] uppercase tracking-label text-subtle">
          Hair restoration protocol
        </p>
        <h1 className="mt-3 text-[1.7rem] leading-[1.12] tracking-title sm:text-[1.85rem]">
          Which one is you currently?
        </h1>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {CURRENTS.map((item) => (
          <AgeCard
            key={item.id}
            image={item.image}
            label={item.label}
            onSelect={() => setCurrent(item.id)}
          />
        ))}
      </div>
      <div className="mt-8 text-center text-[13px] leading-relaxed text-fg">
        <p>By continuing you agree to our</p>
        <p className="mt-1">
          <Link to="/terms" className="underline underline-offset-2">
            Terms of Service
          </Link>
          {"  |  "}
          <Link to="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <p className="mt-1 text-muted">Please review before continuing</p>
      </div>
    </div>
  );
}

export function DesiredScreen() {
  const setDesired = useFunnel((s) => s.setDesired);
  return (
    <div className="flex flex-1 flex-col px-5 pb-10 pt-7">
      <div className="stagger text-center">
        <p className="font-mono text-[11px] uppercase tracking-label text-subtle">
          Your future self
        </p>
        <h1 className="mt-3 text-[1.7rem] leading-[1.12] tracking-title sm:text-[1.85rem]">
          Which one describes
          <br />
          where you want to be?
        </h1>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {DESIREDS.map((item) => (
          <AgeCard
            key={item.id}
            image={item.image}
            label={item.label}
            onSelect={() => setDesired(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function AgeScreen() {
  const setAge = useFunnel((s) => s.setAge);
  return (
    <div className="flex flex-1 flex-col px-5 pt-7">
      <ScreenTitle className="text-center">What's your age?</ScreenTitle>
      <div className="stagger mt-6 flex flex-col gap-3">
        {AGES.map((age) => (
          <OptionRow
            key={age.id}
            label={age.label}
            selected={false}
            onSelect={() => setAge(age.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function ProofScreen() {
  const next = useFunnel((s) => s.next);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col px-5 pt-8">
        <div className="stagger text-center">
          <h1 className="text-[1.85rem] leading-tight tracking-title">
            Over 1.4 million people
          </h1>
          <p className="mt-2 text-[15px] leading-snug text-muted">
            have chosen futureself to restore density and calm shedding
          </p>
        </div>
        <img
          src="/images/social-proof.jpg"
          alt="Restored density, photographed in studio"
          className="mt-7 aspect-[4/3] w-full rounded-2xl object-cover object-[center_20%]"
        />
        <div className="mt-8 text-center">
          <p className="text-lg tracking-tight">As featured in</p>
          <div className="mt-4 flex items-center justify-center gap-3 text-[13px] tracking-wide text-subtle">
            {PRESS.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                {i > 0 ? <span className="h-4 w-px bg-line" /> : null}
                <span className="uppercase">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <StickyFooter>
        <ContinueButton onClick={next} />
      </StickyFooter>
    </div>
  );
}

export function TriedScreen() {
  const setTried = useFunnel((s) => s.setTried);
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden px-5 pt-7">
      <ScreenTitle className="relative z-10 max-w-[16.5rem] pr-2">
        Have you tried a hair-loss treatment before?
      </ScreenTitle>
      <div className="relative z-10 mt-6 flex max-w-[58%] flex-col gap-3">
        <OptionRow label="Yes" selected={false} onSelect={() => setTried(true)} />
        <OptionRow label="No" selected={false} onSelect={() => setTried(false)} />
      </div>
      <img
        src="/images/model-full.jpg"
        alt=""
        className="pointer-events-none absolute -right-8 bottom-0 h-[78%] w-[58%] object-contain object-bottom"
      />
    </div>
  );
}

export function EncourageScreen() {
  const tried = useFunnel((s) => s.triedBefore);
  const next = useFunnel((s) => s.next);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col px-5 pt-8">
        <div className="stagger">
          <ScreenTitle>
            {tried ? "We'll meet you where you are." : "You're in the right place."}
          </ScreenTitle>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            The futureself hair protocol is a clinician-guided GLP-1 compound plan —
            built for first-timers and for people who have already tried minoxidil,
            finasteride, or a transplant consult.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-fg">
            We'll help you{" "}
            <span className="font-normal text-fg">rebuild density with a weekly vial</span>, at
            home.
          </p>
        </div>
        <img
          src="/images/vial-studio.png"
          alt="futureself GLP-1 vial"
          className="mt-6 w-full rounded-2xl object-cover object-center"
        />
      </div>
      <StickyFooter>
        <ContinueButton onClick={next} />
      </StickyFooter>
    </div>
  );
}

export function GoalScreen() {
  const setGoal = useFunnel((s) => s.setGoal);
  return (
    <div className="flex flex-1 flex-col px-5 pt-7">
      <ScreenTitle className="text-center">What's your main goal?</ScreenTitle>
      <div className="stagger mt-6 flex flex-col gap-3">
        {GOALS.map((g) => {
          const Icon = GOAL_ICONS[g.icon];
          return (
            <OptionRow
              key={g.id}
              label={g.label}
              icon={<Icon />}
              selected={false}
              onSelect={() => setGoal(g.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ShowcaseScreen() {
  const goal = useFunnel((s) => s.goal);
  const next = useFunnel((s) => s.next);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col px-5 pt-8">
        <div className="stagger">
          <ScreenTitle>{goalHeadline(goal)}</ScreenTitle>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{goalBody(goal)}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-fg">
            Get a customized protocol tailored to your pattern, age, and metabolic
            profile.
          </p>
        </div>
        <PhoneRack />
      </div>
      <StickyFooter>
        <ContinueButton onClick={next} />
      </StickyFooter>
    </div>
  );
}

function PhoneShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-bg shadow-[0_18px_40px_rgba(28,28,28,0.16)]",
        className,
      )}
    >
      <div className="flex items-center justify-between px-2.5 pt-1.5 font-mono text-[6px] text-muted">
        <span>9:41</span>
        <span className="h-1 w-10 rounded-full bg-fg" />
        <span>LTE</span>
      </div>
      {children}
    </div>
  );
}

function PhoneRack() {
  const goal = useFunnel((s) => s.goal);
  const pattern = useFunnel((s) => s.pattern);
  const goalLabel =
    goal === "hairline"
      ? "Hairline"
      : goal === "shedding"
        ? "Stop shedding"
        : goal === "maintain"
          ? "Maintain"
          : "Reverse thinning";

  return (
    <div className="relative mx-auto mt-6 h-[300px] w-full overflow-hidden rounded-2xl bg-surface">
      <PhoneShell className="absolute left-[-8%] top-[30%] z-[1] w-[44%] -rotate-[16deg] opacity-90">
        <img src="/images/desired-density.jpg" alt="" className="h-52 w-full object-cover" />
      </PhoneShell>
      <PhoneShell className="absolute right-[-8%] top-[28%] z-[1] w-[44%] rotate-[16deg] opacity-90">
        <img
          src="/images/current-hairline.jpg"
          alt=""
          className="h-52 w-full object-cover object-top"
        />
      </PhoneShell>
      <PhoneShell className="absolute left-1/2 top-[10%] z-[2] w-[54%] -translate-x-1/2">
        <div className="grid grid-cols-4 gap-1 px-2 pt-2">
          {["01", "02", "03", "04"].map((d, i) => (
            <div key={d}>
              <div className="aspect-square overflow-hidden rounded-sm bg-surface">
                <img
                  src={
                    i === 0
                      ? "/images/current-hairline.jpg"
                      : i === 1
                        ? "/images/current-crown.jpg"
                        : i === 2
                          ? "/images/desired-hairline.jpg"
                          : "/images/desired-density.jpg"
                  }
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-0.5 text-center font-mono text-[6px] text-muted">Wk {d}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 border-t border-border px-2.5 py-2 text-[8px]">
          <div>
            <p className="text-subtle">Main goal</p>
            <p>{goalLabel}</p>
          </div>
          <div className="text-right">
            <p className="text-subtle">Pattern</p>
            <p className="capitalize">{patternLabel(pattern)}</p>
          </div>
        </div>
        <img src="/images/encourage.jpg" alt="" className="h-24 w-full bg-paper object-contain" />
        <div className="space-y-1 px-2.5 pb-3 pt-1">
          <p className="text-[9px]">Hair restoration protocol</p>
          <div className="flex items-center justify-between text-[7px] text-muted">
            <span>Weekly compound</span>
            <span>1 of 12</span>
          </div>
          <div className="h-0.5 rounded-full bg-border">
            <div className="h-full w-1/6 rounded-full bg-fg" />
          </div>
        </div>
      </PhoneShell>
    </div>
  );
}

export function ExtrasScreen() {
  const extras = useFunnel((s) => s.extras);
  const toggle = useFunnel((s) => s.toggleExtra);
  const next = useFunnel((s) => s.next);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-5 pt-7">
        <ScreenTitle className="text-center">
          What else do you hope to achieve with this protocol?
        </ScreenTitle>
        <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-label text-subtle">
          Choose all that apply
        </p>
        <div className="mt-5 flex flex-col gap-2.5 pb-8">
          {EXTRAS.map((item) => {
            const Icon = EXTRA_ICONS[item.icon];
            return (
              <OptionRow
                key={item.id}
                label={item.label}
                icon={<Icon />}
                multi
                selected={extras.includes(item.id)}
                onSelect={() => toggle(item.id)}
              />
            );
          })}
        </div>
      </div>
      <StickyFooter>
        <ContinueButton disabled={extras.length === 0} onClick={next}>
          Next step
        </ContinueButton>
      </StickyFooter>
    </div>
  );
}

export function PatternScreen() {
  const setPattern = useFunnel((s) => s.setPattern);
  const current = useFunnel((s) => s.pattern);
  return (
    <div className="flex flex-1 flex-col px-5 pt-7 pb-8">
      <ScreenTitle className="text-center">
        How would you describe your hair-loss pattern?
      </ScreenTitle>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {PATTERNS.map((p) => (
          <PatternCard
            key={p.id}
            image={p.image}
            label={p.label}
            selected={current === p.id}
            onSelect={() => setPattern(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function DurationScreen() {
  const setDuration = useFunnel((s) => s.setDuration);
  return (
    <div className="flex flex-1 flex-col px-5 pt-7">
      <ScreenTitle className="text-center">How long have you noticed hair loss?</ScreenTitle>
      <div className="stagger mt-6 flex flex-col gap-3">
        {DURATIONS.map((d) => (
          <OptionRow
            key={d.id}
            label={d.label}
            selected={false}
            onSelect={() => setDuration(d.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function SeverityScreen() {
  const setSeverity = useFunnel((s) => s.setSeverity);
  return (
    <div className="flex flex-1 flex-col px-5 pt-7">
      <ScreenTitle className="text-center">How would you rate it today?</ScreenTitle>
      <div className="stagger mt-6 flex flex-col gap-3">
        {SEVERITIES.map((d) => (
          <OptionRow
            key={d.id}
            label={d.label}
            selected={false}
            onSelect={() => setSeverity(d.id)}
          />
        ))}
      </div>
    </div>
  );
}

const ANALYZE_LINES = [
  "Reading metabolic profile",
  "Mapping follicle pattern",
  "Matching a GLP-1 compound",
  "Setting weekly cadence",
];

export function AnalyzeScreen() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      useFunnel.getState().next();
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTick(i);
      if (i >= ANALYZE_LINES.length) {
        window.clearInterval(id);
        window.setTimeout(() => {
          useFunnel.getState().next();
        }, 450);
      }
    }, 720);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <p className="font-mono text-[11px] uppercase tracking-label text-subtle">
        Building protocol
      </p>
      <h1 className="mt-3 text-2xl tracking-title">Matching your compound</h1>
      <div className="mt-8 w-full max-w-xs space-y-3 text-left">
        {ANALYZE_LINES.map((line, i) => (
          <div key={line} className="flex items-center gap-3">
            <span
              className={cn(
                "size-1.5 rounded-full bg-fg",
                i < tick ? "opacity-100" : "opacity-25",
              )}
              style={i === tick ? { animation: "pulse-dot 1s ease-in-out infinite" } : undefined}
            />
            <span className={cn("text-sm", i < tick ? "text-fg" : "text-subtle")}>{line}</span>
          </div>
        ))}
      </div>
      <div className="mt-10 h-[2px] w-48 origin-left overflow-hidden bg-border">
        <div
          className="h-full origin-left bg-fg"
          style={{
            animation: "analyze-bar 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          }}
        />
      </div>
    </div>
  );
}

export function PlanScreen() {
  const answers = useFunnel((s) => s);
  const next = useFunnel((s) => s.next);
  const compound = recommendCompound(answers);
  const meta = COMPOUNDS[compound];
  const density =
    answers.severity === "mild" ? "12–18%" : answers.severity === "severe" ? "8–14%" : "10–16%";

  return (
    <div className="flex flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-7">
        <p className="font-mono text-[11px] uppercase tracking-label text-subtle">
          Compound {meta.index} · {meta.kind}
        </p>
        <ScreenTitle className="mt-2">Your 12-week hair protocol</ScreenTitle>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Based on your {patternLabel(answers.pattern)} pattern, we matched{" "}
          <span className="text-fg">{meta.name}</span> — {meta.classification.toLowerCase()}.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[
            { k: "Cadence", v: meta.cadence },
            { k: "Horizon", v: "12 weeks" },
            { k: "Density", v: density },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-surface px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-label text-subtle">{s.k}</p>
              <p className="mt-1 text-sm">{s.v}</p>
            </div>
          ))}
        </div>
        <img
          src="/images/encourage.jpg"
          alt={`${meta.name} vial`}
          className="mx-auto mt-4 h-52 object-contain"
        />
        <ol className="mt-2 space-y-3 border-t border-border pt-5 text-[14px] leading-relaxed">
          <li>
            <span className="font-mono text-[11px] text-subtle">01 — Weeks 1–4</span>
            <p>Titrate. Calm the telogen dump.</p>
          </li>
          <li>
            <span className="font-mono text-[11px] text-subtle">02 — Weeks 5–8</span>
            <p>Hold the line. Follicle check-in.</p>
          </li>
          <li>
            <span className="font-mono text-[11px] text-subtle">03 — Weeks 9–12</span>
            <p>Rebuild anagen. Photograph density.</p>
          </li>
        </ol>
        <p className="mt-5 text-[11px] leading-relaxed text-subtle">
          Requires a licensed clinician. Not FDA-approved for hair loss. Compounded GLP-1
          medications are prescription-only.
        </p>
      </div>
      <StickyFooter>
        <ContinueButton onClick={next}>See my compound</ContinueButton>
      </StickyFooter>
    </div>
  );
}

export function ProductScreen() {
  const answers = useFunnel((s) => s);
  const add = useFunnel((s) => s.addToProtocol);
  const compound = recommendCompound(answers);
  const meta = COMPOUNDS[compound];
  const [tab, setTab] = useState<"overview" | "details">("overview");

  return (
    <div className="flex flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <VialViewer compound={compound} className="px-4 pt-1" />
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-label text-muted">
            <span>Compound {meta.index}</span>
            <span>{meta.kind}</span>
          </div>
          <h1 className="mt-2 text-[2.6rem] leading-none tracking-display">{meta.name}</h1>
          <p className="mt-2 text-sm text-muted">{meta.classification}</p>
          <div className="mt-5 flex gap-6 border-b border-border text-sm">
            {(["overview", "details"] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={cn(
                  "relative -mb-px pb-2 capitalize",
                  tab === id ? "text-fg" : "text-subtle",
                )}
              >
                {id === "details" ? "Product details" : "Overview"}
                {tab === id ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-fg" />
                ) : null}
              </button>
            ))}
          </div>
          <p className="mt-4 pb-4 text-[15px] leading-relaxed text-fg">
            {tab === "overview" ? meta.overview : meta.details}
          </p>
          {tab === "details" ? (
            <dl className="mb-4 grid grid-cols-2 gap-y-2 font-mono text-[11px] uppercase tracking-wide">
              <dt className="text-subtle">Formula</dt>
              <dd className="text-right">{meta.formula}</dd>
              <dt className="text-subtle">CAS</dt>
              <dd className="text-right">{meta.cas}</dd>
              <dt className="text-subtle">Molar mass</dt>
              <dd className="text-right">{meta.mass}</dd>
              <dt className="text-subtle">Cadence</dt>
              <dd className="text-right">{meta.cadence}</dd>
            </dl>
          ) : null}
        </div>
      </div>
      <StickyFooter>
        <ContinueButton onClick={add}>Add to protocol</ContinueButton>
      </StickyFooter>
    </div>
  );
}

export function ReserveScreen() {
  const email = useFunnel((s) => s.email);
  const setEmail = useFunnel((s) => s.setEmail);
  const plan = useFunnel((s) => s.plan);
  const setPlan = useFunnel((s) => s.setPlan);
  const next = useFunnel((s) => s.next);
  const answers = useFunnel((s) => s);
  const compound = recommendCompound(answers);
  const meta = COMPOUNDS[compound];
  const valid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 px-5 pt-7">
        <ScreenTitle>Reserve your protocol</ScreenTitle>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {meta.name} · Compound {meta.index}. A clinician reviews every intake before the first
          vial ships.
        </p>
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => setPlan("12-week")}
            className={cn(
              "press w-full rounded-xl border px-4 py-4 text-left",
              plan === "12-week" ? "border-fg" : "border-border",
            )}
          >
            <div className="flex items-baseline justify-between">
              <p>12-week protocol</p>
              <p className="text-sm">$399</p>
            </div>
            <p className="mt-1 text-[13px] text-muted">Recommended · clinician review included</p>
          </button>
          <button
            type="button"
            onClick={() => setPlan("4-week")}
            className={cn(
              "press w-full rounded-xl border px-4 py-4 text-left",
              plan === "4-week" ? "border-fg" : "border-border",
            )}
          >
            <div className="flex items-baseline justify-between">
              <p>4-week starter</p>
              <p className="text-sm">$149</p>
            </div>
            <p className="mt-1 text-[13px] text-muted">Titration month · convert after check-in</p>
          </button>
        </div>
        <label className="mt-6 block">
          <span className="font-mono text-[11px] uppercase tracking-label text-subtle">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@studio.com"
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-lg border border-border bg-bg px-3 text-[15px] outline-none ring-fg focus:ring-1"
          />
        </label>
        <p className="mt-3 text-[11px] leading-relaxed text-subtle">
          Prototype checkout — no payment is collected. We'll store this locally in your browser as
          a reservation.
        </p>
      </div>
      <StickyFooter>
        <ContinueButton disabled={!valid} onClick={next}>
          Reserve my protocol
        </ContinueButton>
      </StickyFooter>
    </div>
  );
}

export function ConfirmScreen() {
  const email = useFunnel((s) => s.email);
  const plan = useFunnel((s) => s.plan);
  const reset = useFunnel((s) => s.reset);
  const answers = useFunnel((s) => s);
  const meta = COMPOUNDS[recommendCompound(answers)];

  useEffect(() => {
    try {
      localStorage.setItem(
        "futureself-reservation",
        JSON.stringify({ email, plan, compound: meta.name, at: Date.now() }),
      );
    } catch {
      /* ignore */
    }
  }, [email, plan, meta.name]);

  return (
    <div className="flex flex-1 flex-col px-5 pt-10">
      <p className="font-mono text-[11px] uppercase tracking-label text-subtle">
        Protocol reserved
      </p>
      <ScreenTitle className="mt-2">We'll see you on the other side of 12 weeks.</ScreenTitle>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        A confirmation sits at <span className="text-fg">{email}</span>. Your{" "}
        {plan === "12-week" ? "12-week" : "4-week"} {meta.name} protocol is queued for clinician
        review.
      </p>
      <img src="/images/encourage.jpg" alt="" className="mx-auto mt-8 h-52 object-contain" />
      <button
        type="button"
        onClick={reset}
        className="press mt-10 h-12 w-full rounded-full border border-border text-sm uppercase tracking-wide"
      >
        Start another intake
      </button>
    </div>
  );
}
