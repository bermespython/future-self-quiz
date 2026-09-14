import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import type { Compound } from "@/lib/funnel-store";
import { COMPOUNDS } from "@/lib/funnel-content";
import { cn } from "@/lib/utils";

export function VialViewer({
  compound,
  className,
}: {
  compound: Compound;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const meta = COMPOUNDS[compound];

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import("./vial-scene")
      .then(async (mod) => {
        if (cancelled || !host.current) return;
        cleanup = await mod.mountVial(host.current, {
          name: meta.name,
          kind: meta.kind,
          index: meta.index,
          formula: meta.formula,
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [meta.name, meta.kind, meta.index, meta.formula]);

  if (failed) {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <img
          src="/images/vial.png"
          alt={`${meta.name} vial`}
          className="h-72 object-contain"
        />
        <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-subtle">
          <ArrowLeftRight className="size-3" /> Compound {meta.index}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        ref={host}
        tabIndex={0}
        role="img"
        aria-label={`${meta.name} vial. Drag or use arrow keys to rotate.`}
        className="vial-stage h-72 w-full max-w-sm outline-none"
      />
      <p className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-subtle">
        <ArrowLeftRight className="size-3" /> Drag to rotate
      </p>
    </div>
  );
}
