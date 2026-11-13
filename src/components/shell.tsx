import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Layers3, Orbit, Scale, SquareStack, NotebookPen } from "lucide-react";
import { useHydrated, useNoether } from "@/lib/store";
import { programDay } from "@/lib/derive";
import { todayISO } from "@/lib/dates";
import { cn } from "@/lib/cn";

const TABS = [
  { to: "/", label: "Today", icon: Orbit, exact: true },
  { to: "/year", label: "Year", icon: Layers3, exact: false },
  { to: "/cards", label: "Cards", icon: SquareStack, exact: false },
  { to: "/review", label: "Review", icon: NotebookPen, exact: false },
  { to: "/law", label: "Law", icon: Scale, exact: false },
] as const;

function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 3.5v25" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const hydrated = useHydrated();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const startedAt = useNoether((s) => s.ledger.startedAt);
  const day = hydrated && startedAt ? programDay(startedAt, todayISO()) : null;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/95">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-fg">
            <Mark className="size-5" />
            <span className="font-display text-xl leading-none">Noether</span>
          </Link>
          <p className="font-mono text-xs tabular-nums text-muted">
            {day ? `Day ${day}` : hydrated ? "Not begun" : ""}
          </p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl px-4 pt-6 pb-28">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto grid max-w-3xl grid-cols-5">
          {TABS.map((tab) => {
            const active =
              tab.to === "/"
                ? path === "/"
                : tab.to === "/year"
                  ? path.startsWith("/year") || path.startsWith("/gate")
                  : path === tab.to || path.startsWith(`${tab.to}/`);
            const Icon = tab.icon;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-xs",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
