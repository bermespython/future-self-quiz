import { Link } from "@tanstack/react-router";
import { ArrowLeft, Menu, X, CircleHelp } from "lucide-react";
import { Wordmark } from "@/components/brand";
import { cn } from "@/lib/utils";
import { QUIZ_STEPS, useFunnel, type StepId } from "@/lib/funnel-store";

const TITLES: Partial<Record<StepId, string>> = {
  tried: "My Profile",
  goal: "My Profile",
  extras: "My Profile",
  pattern: "My Profile",
  duration: "My Profile",
  severity: "My Profile",
  plan: "Your protocol",
  product: "futureself",
  reserve: "Reserve",
  confirm: "Reserved",
};

export function FunnelHeader() {
  const step = useFunnel((s) => s.step);
  const back = useFunnel((s) => s.back);
  const setMenuOpen = useFunnel((s) => s.setMenuOpen);
  const cartCount = useFunnel((s) => s.cartCount);
  const setStep = useFunnel((s) => s.setStep);
  const quizIndex = QUIZ_STEPS.indexOf(step);
  const showBack = step !== "age";
  const title = TITLES[step];
  const compactBrand = step === "product" || step === "reserve" || step === "confirm";

  return (
    <header className="sticky top-0 z-30 bg-bg">
      {compactBrand ? (
        <div className="flex h-14 items-center justify-between px-3">
          <Wordmark className="text-[22px]" />
          <div className="flex items-center gap-1">
            {showBack ? (
              <button
                type="button"
                onClick={back}
                aria-label="Back"
                className="press grid size-10 place-items-center text-fg"
              >
                <ArrowLeft className="size-5" strokeWidth={1.6} />
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => setStep(cartCount ? "reserve" : "product")}
              className="whitespace-nowrap rounded-sm bg-surface px-3 py-1.5 font-mono text-xs"
            >
              Cart <span className="ml-2 tabular-nums">{cartCount}</span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              className="press grid size-10 place-items-center text-fg"
            >
              <Menu className="size-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      ) : (
        <div className="grid h-14 grid-cols-[2.5rem_1fr_2.5rem] items-center gap-1 px-3">
          {showBack ? (
            <button
              type="button"
              onClick={back}
              aria-label="Back"
              className="press grid size-10 place-items-center text-fg"
            >
              <ArrowLeft className="size-5" strokeWidth={1.6} />
            </button>
          ) : (
            <span />
          )}
          <div className="flex flex-col items-center">
            {title === "My Profile" ? (
              <p className="text-sm tracking-tight">My Profile</p>
            ) : (
              <Wordmark className="text-[22px]" />
            )}
            {quizIndex >= 0 ? (
              <div className="mt-1.5 flex w-36 gap-1" aria-hidden="true">
                {QUIZ_STEPS.map((id, i) => (
                  <span
                    key={id}
                    className={cn(
                      "h-[3px] flex-1 rounded-full",
                      i <= quizIndex ? "bg-fg" : "bg-border",
                    )}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
            className="press grid size-10 place-items-center justify-self-end text-fg"
          >
            <Menu className="size-5" strokeWidth={1.6} />
          </button>
        </div>
      )}
      <div className="hairline" />
    </header>
  );
}

export function FunnelMenu() {
  const open = useFunnel((s) => s.menuOpen);
  const setMenuOpen = useFunnel((s) => s.setMenuOpen);
  const reset = useFunnel((s) => s.reset);
  const setStep = useFunnel((s) => s.setStep);
  const cartCount = useFunnel((s) => s.cartCount);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 mx-auto flex max-w-[430px] flex-col bg-bg">
      <div className="flex h-14 items-center justify-between px-4">
        <Wordmark className="text-[22px]" />
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="press grid size-10 place-items-center"
        >
          <X className="size-5" strokeWidth={1.6} />
        </button>
      </div>
      <div className="hairline" />
      <nav className="flex flex-1 flex-col px-6 pt-10">
        {[
          { label: "Start over", action: () => reset() },
          { label: "Your protocol", action: () => setStep("plan") },
          {
            label: cartCount ? `Cart · ${cartCount}` : "Cart",
            action: () => setStep(cartCount ? "reserve" : "product"),
          },
        ].map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={item.action}
            className="border-b border-border py-5 text-left text-2xl tracking-title"
          >
            {item.label}
          </button>
        ))}
        <div className="mt-auto flex flex-col gap-3 pb-10 text-sm text-muted">
          <Link
            to="/terms"
            className="underline-offset-4 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="underline-offset-4 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-label">
            Compound collection / Hair protocol
          </p>
        </div>
      </nav>
    </div>
  );
}

export function HelpFab() {
  const setHelpOpen = useFunnel((s) => s.setHelpOpen);
  const step = useFunnel((s) => s.step);
  if (step !== "age") return null;
  return (
    <button
      type="button"
      onClick={() => setHelpOpen(true)}
      aria-label="Help"
      className="press absolute bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-ink-fg shadow-lg"
    >
      <CircleHelp className="size-5" strokeWidth={1.6} />
    </button>
  );
}

export function HelpDialog() {
  const open = useFunnel((s) => s.helpOpen);
  const setHelpOpen = useFunnel((s) => s.setHelpOpen);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-fg/40 sm:items-center">
      <div className="funnel-frame w-full rounded-t-3xl bg-bg px-6 pb-10 pt-5 sm:rounded-2xl">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-line" />
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl tracking-title">About this protocol</h2>
          <button
            type="button"
            onClick={() => setHelpOpen(false)}
            aria-label="Close"
            className="press grid size-9 place-items-center rounded-full bg-surface"
          >
            <X className="size-4" />
          </button>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          futureself matches a GLP-1 compound to your hair-loss pattern. This quiz is a prototype
          intake — not a diagnosis. A licensed clinician reviews every protocol before anything is
          dispensed.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          GLP-1 medications are prescription-only. Hair restoration is not an FDA-approved
          indication for these compounds.
        </p>
        <button
          type="button"
          onClick={() => setHelpOpen(false)}
          className="press mt-6 flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm uppercase tracking-wide text-ink-fg"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
