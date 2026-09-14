import type { SVGProps } from "react";

function Ico(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
      {...props}
    />
  );
}

export function IconStrands() {
  return (
    <Ico>
      <path d="M8 20c.4-4 1.2-8 1.6-12 .2-1.8-.4-3.4-1.6-4" />
      <path d="M12 20c.2-5 .4-9.5 0-13-.3-2.2.4-4 1.6-5" />
      <path d="M16 20c-.2-4.2.6-8.2 1.8-11.4.8-2.2.2-4.2-1.2-5.6" />
    </Ico>
  );
}

export function IconHairline() {
  return (
    <Ico>
      <path d="M4.5 14c.8-4.4 3.2-8 7.5-8s6.7 3.6 7.5 8" />
      <path d="M8 12.5c.7-1.8 1.9-3 4-3s3.3 1.2 4 3" />
      <path d="M4.5 14v5.5M19.5 14v5.5" />
    </Ico>
  );
}

export function IconDrop() {
  return (
    <Ico>
      <path d="M12 3c3.4 4 6 7 6 10.2A6 6 0 1 1 6 13.2C6 10 8.6 7 12 3Z" />
    </Ico>
  );
}

export function IconShield() {
  return (
    <Ico>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6l-7-3Z" />
      <path d="M9 12.2 11 14l4-4" />
    </Ico>
  );
}

export function IconCalm() {
  return (
    <Ico>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 14.5c.8 1.2 2 1.8 3 1.8s2.2-.6 3-1.8" />
      <path d="M9 10h.01M15 10h.01" />
    </Ico>
  );
}

export function IconScalp() {
  return (
    <Ico>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c1.2-2 2.6-3 4-3s2.8 1 4 3" />
      <path d="M9.5 15.5c.8.7 1.7 1 2.5 1s1.7-.3 2.5-1" />
    </Ico>
  );
}

export function IconStyle() {
  return (
    <Ico>
      <path d="M7 20c1.5-6 3-10 5-10s3.5 4 5 10" />
      <path d="M12 10V4.5" />
      <path d="M9.5 6.5 12 4.5 14.5 6.5" />
    </Ico>
  );
}

export function IconMirror() {
  return (
    <Ico>
      <rect x="6" y="3.5" width="12" height="14" rx="6" />
      <path d="M12 17.5v3" />
      <path d="M9 20.5h6" />
    </Ico>
  );
}

export const GOAL_ICONS = {
  strands: IconStrands,
  hairline: IconHairline,
  drop: IconDrop,
  shield: IconShield,
};

export const EXTRA_ICONS = {
  strands: IconStrands,
  hairline: IconHairline,
  calm: IconCalm,
  scalp: IconScalp,
  style: IconStyle,
  mirror: IconMirror,
};
