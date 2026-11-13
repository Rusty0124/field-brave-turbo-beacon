import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { monthByNumber } from "@/lib/curriculum";
import { gateFor } from "@/lib/derive";
import { todayISO } from "@/lib/dates";
import type { GateRecord } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Area, Button, Eyebrow, Field, Panel, fieldClass } from "@/components/ui";

export const Route = createFileRoute("/gate/$month")({ component: GatePage });

function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function GatePage() {
  const { month: raw } = Route.useParams();
  const n = Number(raw);
  const plan = monthByNumber(n);
  const ledger = useNoether((s) => s.ledger);
  const saveGate = useNoether((s) => s.saveGate);
  const saved = plan ? gateFor(ledger, plan.n) : undefined;
  const [checks, setChecks] = useState<boolean[]>([]);
  const [score, setScore] = useState("");
  const [notes, setNotes] = useState("");
  const [external, setExternal] = useState("");
  const [endsAt, setEndsAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!plan) return;
    const existing = useNoether.getState().ledger.gates.find((g) => g.month === plan.n);
    setChecks(existing?.checks ?? plan.gate.checks.map(() => false));
    setScore(existing?.score === null || existing?.score === undefined ? "" : String(existing.score));
    setNotes(existing?.notes ?? "");
    setExternal(existing?.external ?? "");
    setReady(true);
  }, [plan]);

  useEffect(() => {
    if (!endsAt) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [endsAt]);

  if (!plan) {
    return <h1 className="font-display text-4xl">No such gate.</h1>;
  }

  const remain = endsAt ? endsAt - now : plan.gate.minutes * 60_000;
  const scoreNum = score.trim() === "" ? null : Number(score);
  const verified = external.trim().length > 0;

  function commit(passed: boolean | null) {
    if (!plan) return;
    const record: GateRecord = {
      month: plan.n,
      checks,
      score: scoreNum !== null && Number.isFinite(scoreNum) ? scoreNum : null,
      passed,
      notes: notes.trim(),
      external: external.trim(),
      updatedAt: todayISO(),
    };
    saveGate(record);
  }

  const lowFoundation = plan.n === 4 && scoreNum !== null && scoreNum < 70;

  return (
    <div className="flex flex-col gap-5">
      <header>
        <Eyebrow>
          Month {plan.n} · {plan.gate.minutes} min
        </Eyebrow>
        <h1 className="mt-2 font-display text-4xl">{plan.gate.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{plan.gate.prompt}</p>
        {plan.gate.note ? <p className="mt-2 text-sm text-alert">{plan.gate.note}</p> : null}
      </header>

      <Panel>
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-4xl tabular-nums">{formatClock(remain)}</p>
          <Button
            variant="ghost"
            onClick={() => {
              setEndsAt(Date.now() + plan.gate.minutes * 60_000);
              setNow(Date.now());
            }}
          >
            {endsAt ? "Restart the clock" : "Start the clock"}
          </Button>
        </div>
        <p className="mt-2 text-sm text-muted">Closed book. The clock does not submit anything for you.</p>
      </Panel>

      {ready ? (
        <ul className="flex flex-col gap-2">
          {plan.gate.checks.map((check, i) => {
            const on = checks[i] === true;
            return (
              <li key={check}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() =>
                    setChecks((prev) => {
                      const next = plan.gate.checks.map((_, j) => prev[j] === true);
                      next[i] = !on;
                      return next;
                    })
                  }
                  className={cn(
                    "flex min-h-14 w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-relaxed",
                    on ? "border-fg bg-elevated" : "border-line bg-surface",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 size-4 shrink-0 rounded-sm border",
                      on ? "border-fg bg-fg" : "border-muted",
                    )}
                    aria-hidden="true"
                  />
                  {check}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      <Field label="Score, if the gate has one" hint="Month four fails under seventy. Other gates can stay blank.">
        <input
          className={fieldClass}
          inputMode="numeric"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </Field>
      {lowFoundation ? (
        <p className="text-sm text-alert">
          Below seventy. Consolidate for two weeks. This is the only gate where delay is the correct move.
        </p>
      ) : null}
      <Field label="What you missed, in specific terms">
        <Area value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>
      <Field
        label="What a stranger found"
        hint="A pass without this is unverified. Self-assessment drifts. External judgment does not."
      >
        <Area value={external} onChange={(e) => setExternal(e.target.value)} />
      </Field>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="ghost" onClick={() => commit(false)}>
          Not yet
        </Button>
        <Button onClick={() => commit(true)} disabled={lowFoundation}>
          {verified ? "Passed" : "Passed, unverified"}
        </Button>
      </div>
      {saved ? (
        <p className="text-sm text-muted">
          Last recorded {saved.updatedAt}.{" "}
          {saved.passed && saved.external.trim()
            ? "Verified."
            : saved.passed
              ? "Marked passed, still unverified."
              : "Still open."}
          {saved.passed && saved.external.trim() && saved.month < 12
            ? " A verified pass on the working month advances you."
            : ""}
        </p>
      ) : null}
      <Link to="/year/$month" params={{ month: String(plan.n) }} className="text-sm underline decoration-line underline-offset-4">
        Back to month {plan.n}
      </Link>
    </div>
  );
}
