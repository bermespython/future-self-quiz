import { useEffect, type ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FunnelHeader, FunnelMenu, HelpDialog, HelpFab } from "@/components/funnel/shell";
import {
  AgeScreen,
  AnalyzeScreen,
  ConfirmScreen,
  CurrentScreen,
  DesiredScreen,
  DurationScreen,
  EncourageScreen,
  ExtrasScreen,
  GoalScreen,
  PatternScreen,
  PlanScreen,
  ProductScreen,
  ProofScreen,
  ReserveScreen,
  SeverityScreen,
  ShowcaseScreen,
  TriedScreen,
} from "@/components/funnel/screens";
import { useFunnel, stepKey, type StepId } from "@/lib/funnel-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const SCREENS: Record<StepId, ComponentType> = {
  current: CurrentScreen,
  desired: DesiredScreen,
  proof: ProofScreen,
  tried: TriedScreen,
  encourage: EncourageScreen,
  goal: GoalScreen,
  showcase: ShowcaseScreen,
  extras: ExtrasScreen,
  age: AgeScreen,
  pattern: PatternScreen,
  duration: DurationScreen,
  severity: SeverityScreen,
  analyze: AnalyzeScreen,
  plan: PlanScreen,
  product: ProductScreen,
  reserve: ReserveScreen,
  confirm: ConfirmScreen,
};

function Home() {
  const step = useFunnel((s) => s.step);
  const direction = useFunnel((s) => s.direction);
  const hydrate = useFunnel((s) => s.hydrate);
  const Screen = SCREENS[step];

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <div className="funnel-frame relative flex min-h-dvh flex-col overflow-x-hidden">
      <FunnelHeader />
      <main
        key={stepKey(step)}
        className={cn("flex min-h-0 flex-1 flex-col", direction < 0 && "dir-back")}
      >
        <div className="step-enter flex min-h-0 flex-1 flex-col">
          <Screen />
        </div>
      </main>
      <HelpFab />
      <FunnelMenu />
      <HelpDialog />
    </div>
  );
}
