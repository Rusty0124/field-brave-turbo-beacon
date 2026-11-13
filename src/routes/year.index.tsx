import { createFileRoute, Link } from "@tanstack/react-router";
import { DEGRADE, MONTHS } from "@/lib/curriculum";
import { behind, calendarMonth, gateFor, projectFor } from "@/lib/derive";
import type { Pace } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui";

export const Route = createFileRoute("/year/")({ component: YearPage });

const PACE_LABEL: Record<Pace, string> = {
  cut: "Cut content",
  eighteen: "Eighteen months",
  hours: "Raised hours",
};

function gateLabel(passed: boolean | null | undefined, external: string | undefined): string {
  if (passed === true && external && external.trim()) return "Passed";
  if (passed === true) return "Unverified";
  if (passed === false) return "Not yet";
  return "Open";
}

function YearPage() {
  const ledger = useNoether((s) => s.ledger);
  const setPace = useNoether((s) => s.setPace);
  const late = behind(ledger);
  const cal = ledger.startedAt ? calendarMonth(ledger) : null;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Eyebrow>Twelve months</Eyebrow>
        <h1 className="mt-2 font-display text-4xl">The installation schedule.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Core is what the engine needs. Standard is a complete year. Optional is surplus. If you fall behind,
          cut optional, then standard, never the loop, the struggle block, the gates, or the capstone.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(PACE_LABEL) as Pace[]).map((pace) => (
          <button
            key={pace}
            type="button"
            onClick={() => setPace(pace)}
            className={cn(
              "min-h-11 rounded-md border px-3 text-sm",
              ledger.pace === pace ? "border-fg bg-elevated text-fg" : "border-line text-muted",
            )}
          >
            {PACE_LABEL[pace]}
          </button>
        ))}
      </div>

      {late ? (
        <div className="rounded-xl border border-line bg-surface p-4">
          <Eyebrow>More than two weeks behind</Eyebrow>
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-4 text-sm leading-relaxed">
            {DEGRADE.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {cal && cal !== ledger.focusMonth ? (
        <p className="text-sm text-muted">
          The calendar is on month {cal}. The working month is {ledger.focusMonth}. Passing a verified gate
          advances the working month.
        </p>
      ) : null}

      <ol className="flex flex-col gap-2">
        {MONTHS.map((month) => {
          const gate = gateFor(ledger, month.n);
          const project = projectFor(ledger, month.n);
          const label = gateLabel(gate?.passed, gate?.external);
          const working = ledger.focusMonth === month.n;
          return (
            <li key={month.n}>
              <Link
                to="/year/$month"
                params={{ month: String(month.n) }}
                className={cn(
                  "block rounded-xl border p-4",
                  working ? "border-fg bg-elevated" : "border-line bg-surface",
                )}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-muted">
                    {String(month.n).padStart(2, "0")}
                    {working ? " · working" : ""}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-xs",
                      label === "Passed" ? "text-ok" : label === "Not yet" ? "text-alert" : "text-muted",
                    )}
                  >
                    {label}
                  </span>
                </span>
                <span className="mt-1 block font-display text-2xl text-fg">{month.title}</span>
                <span className="mt-1 block text-sm text-muted">
                  {project?.name || month.project?.name || "No project"} ·{" "}
                  {project?.status === "shipped"
                    ? "shipped"
                    : project?.status === "building"
                      ? "building"
                      : month.project
                        ? month.project.tier
                        : "reading"}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
