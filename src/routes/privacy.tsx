import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
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
      <h1 className="mt-2 text-3xl font-medium tracking-title">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
        <p>
          This intake keeps answers in memory for the session. If you reserve a protocol,
          your email is written to local storage on this device so the confirmation screen
          can show it again.
        </p>
        <p>
          We do not send answers, photos, or email to a server from this prototype. Do
          not enter real medical history you would not want stored in a browser.
        </p>
        <p>
          Clearing site data removes the reservation. The quiz does not use analytics
          pixels, and it does not sell information.
        </p>
      </div>
    </div>
  );
}
