import type { ReactNode } from "react";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContinueButton({
  children = "Continue",
  disabled,
  onClick,
  className,
}: {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "press flex h-12 w-full items-center justify-center rounded-full px-6 text-sm uppercase tracking-wide",
        disabled ? "bg-disabled text-disabled-fg" : "bg-ink text-ink-fg",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function StickyFooter({ children }: { children: ReactNode }) {
  return (
    <div className="sticky bottom-0 z-20 mt-auto bg-bg/95 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm">
      <div className="hairline mb-3" />
      {children}
    </div>
  );
}

export function OptionRow({
  selected,
  onSelect,
  label,
  icon,
  multi,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  icon?: ReactNode;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "press flex min-h-16 w-full items-center gap-3.5 rounded-xl border bg-bg px-4 py-3.5 text-left transition-colors duration-150",
        selected ? "border-fg" : "border-border",
      )}
    >
      {icon ? (
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface text-fg">
          {icon}
        </span>
      ) : null}
      <span className="flex-1 text-[15px] leading-snug">{label}</span>
      {multi ? (
        <span
          className={cn(
            "grid size-5 shrink-0 place-items-center rounded-sm border transition-colors",
            selected ? "border-fg bg-fg text-bg" : "border-line bg-bg",
          )}
        >
          {selected ? <Check className="size-3.5" strokeWidth={2.4} /> : null}
        </span>
      ) : (
        <span
          className={cn(
            "grid size-5 shrink-0 place-items-center rounded-full border transition-colors",
            selected ? "border-fg" : "border-line",
          )}
        >
          {selected ? <span className="size-2.5 rounded-full bg-fg" /> : null}
        </span>
      )}
    </button>
  );
}

export function AgeCard({
  image,
  label,
  onSelect,
}: {
  image: string;
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="press group relative overflow-hidden rounded-2xl bg-surface text-left"
    >
      <img
        src={image}
        alt=""
        className="aspect-square w-full object-cover object-[center_18%]"
      />
      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink px-3 py-2.5 text-ink-fg">
        <span className="text-[13px]">{label}</span>
        <span className="grid size-6 place-items-center rounded-full border border-ink-fg/35">
          <ChevronRight className="size-3.5" strokeWidth={2.2} />
        </span>
      </span>
    </button>
  );
}

export function PatternCard({
  image,
  label,
  selected,
  onSelect,
}: {
  image: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "press overflow-hidden rounded-xl border bg-bg text-left transition-colors",
        selected ? "border-fg" : "border-border",
      )}
    >
      <img src={image} alt="" className="aspect-square w-full object-cover object-[center_10%]" />
      <span className="flex items-center justify-between gap-2 px-3 py-2.5">
        <span className="text-[13px] leading-tight">{label}</span>
        <span
          className={cn(
            "grid size-5 shrink-0 place-items-center rounded-full border",
            selected ? "border-fg" : "border-line",
          )}
        >
          {selected ? <span className="size-2.5 rounded-full bg-fg" /> : null}
        </span>
      </span>
    </button>
  );
}

export function ScreenTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "font-sans text-[1.65rem] leading-[1.15] tracking-title text-fg",
        className,
      )}
    >
      {children}
    </h1>
  );
}
