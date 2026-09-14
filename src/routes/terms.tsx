import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand";

export const Route = createFileRoute("/terms")({ component: Terms });

function Terms() {
  return (
    <div className="funnel-frame min-h-dvh px-5 pb-16 pt-6">
      <div className="flex items-center gap-3">
        <Link to="/" aria-label="Back" className="press grid size-10 place-items-center">
          <ArrowLeft className="size-5" strokeWidth={1.6} />
        </Link>
        <Wordmark className="text-xl" />
      </div>
      <div className="hairline my-4" />
      <p className="font-mono text-[11px] uppercase tracking-label text-subtle">Legal</p>
      <h1 className="mt-2 text-3xl font-medium tracking-title">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
        <p>
          This prototype is a branded intake for the futureself hair restoration protocol.
          It is not a medical practice, pharmacy, or telehealth provider.
        </p>
        <p>
          GLP-1 receptor agonists (including semaglutide, tirzepatide, and liraglutide)
          are prescription medications. Hair restoration is not an FDA-approved indication
          for these compounds. Nothing in this quiz diagnoses a condition or dispenses a
          drug.
        </p>
        <p>
          By continuing you agree that any protocol shown is conceptual, that a licensed
          clinician must review labs and history before treatment, and that futureself
          is not liable for decisions you make from this demonstration.
        </p>
        <p>
          Reservation emails are stored only in your browser. No payment is processed
          here.
        </p>
      </div>
    </div>
  );
}
