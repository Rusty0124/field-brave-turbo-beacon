import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { retention, weekLogs } from "@/lib/derive";
import { formatShort, todayISO, weekSunday } from "@/lib/dates";
import type { Load, PortabilityRun, WeeklyReview } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Area, Button, Eyebrow, Field, Panel, fieldClass } from "@/components/ui";

export const Route = createFileRoute("/review")({ component: ReviewPage });

const LOADS: Load[] = ["under", "optimal", "over"];

function emptyReview(weekOf: string, minutes: number, sessions: number): WeeklyReview {
  return {
    weekOf,
    minutes,
    sessions,
    hintPastFour: 0,
    biggestStruggle: "",
    load: "optimal",
    external: "",
    change: "",
    projectsMoved: "",
  };
}

function ReviewPage() {
  const ledger = useNoether((s) => s.ledger);
  const saveReview = useNoether((s) => s.saveReview);
  const saveRun = useNoether((s) => s.saveRun);
  const today = todayISO();
  const weekOf = weekSunday(today);
  const logs = weekLogs(ledger, weekOf);
  const minutes = logs.reduce((sum, log) => sum + log.minutes, 0);
  const held = retention(ledger, weekOf);
  const existing = ledger.reviews.find((r) => r.weekOf === weekOf);
  const [form, setForm] = useState<WeeklyReview>(() => existing ?? emptyReview(weekOf, minutes, logs.length));
  const set = (patch: Partial<WeeklyReview>) => setForm((f) => ({ ...f, ...patch }));

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Eyebrow>Week of {formatShort(weekOf)}</Eyebrow>
        <h1 className="mt-2 font-display text-4xl">The engine, watching itself.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Twenty minutes on the recovery day. Do not track hours as a scoreboard, lines of code, or a streak you
          are afraid to break.
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="Sessions" value={String(logs.length)} />
        <Stat label="Minutes" value={String(minutes)} />
        <Stat
          label="Card hold"
          value={held === null ? "—" : `${Math.round(held * 100)}%`}
          hint={held === null ? "No reviews" : held < 0.8 ? "Cards too hard" : held > 0.95 ? "Cards too easy" : "In range"}
        />
      </dl>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          saveReview({ ...form, minutes, sessions: logs.length });
        }}
      >
        <Field label="Projects that moved">
          <Area value={form.projectsMoved} onChange={(e) => set({ projectsMoved: e.target.value })} />
        </Field>
        <Field label="Problems that needed a hint past rung four">
          <input
            className={fieldClass}
            inputMode="numeric"
            value={form.hintPastFour}
            onChange={(e) => set({ hintPastFour: Math.max(0, Number(e.target.value) || 0) })}
          />
        </Field>
        <Field label="The biggest struggle" hint="This becomes next week’s stretch.">
          <Area value={form.biggestStruggle} onChange={(e) => set({ biggestStruggle: e.target.value })} />
        </Field>
        <div>
          <p className="mb-2 text-sm text-muted">Load</p>
          <div className="grid grid-cols-3 gap-2">
            {LOADS.map((load) => (
              <button
                key={load}
                type="button"
                onClick={() => set({ load })}
                className={cn(
                  "min-h-11 rounded-md border text-sm capitalize",
                  form.load === load ? "border-fg bg-elevated" : "border-line text-muted",
                )}
              >
                {load}
              </button>
            ))}
          </div>
          {form.load === "over" ? (
            <p className="mt-2 text-sm text-muted">If this is the second heavy week, cut twenty percent of new material.</p>
          ) : null}
        </div>
        <Field label="What a stranger saw this week">
          <Area value={form.external} onChange={(e) => set({ external: e.target.value })} />
        </Field>
        <Field label="One change next week">
          <Area value={form.change} onChange={(e) => set({ change: e.target.value })} />
        </Field>
        <Button type="submit">{existing ? "Update the review" : "Save the review"}</Button>
      </form>

      {ledger.reviews.length > 0 ? (
        <section>
          <h2 className="font-display text-2xl">Earlier weeks</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {ledger.reviews.map((review) => (
              <li key={review.weekOf} className="rounded-lg border border-line px-3 py-3 text-sm">
                <p className="font-mono text-xs text-muted">
                  {formatShort(review.weekOf)} · {review.sessions} sessions · {review.minutes} min · {review.load}
                </p>
                {review.biggestStruggle ? <p className="mt-2">{review.biggestStruggle}</p> : null}
                {review.change ? <p className="mt-1 text-muted">Next: {review.change}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <RunEditor
        id="dry-run"
        eyebrow="Month six"
        title="Portability dry run"
        lede="Seven days, thirty minutes a day, a domain you have never studied, with an output a stranger can check. Vocabulary lists do not count. If any answer is no, name the failing component and repair it before month twelve."
        run={ledger.dryRun}
        onSave={(run) => saveRun("dryRun", run)}
      />
      <RunEditor
        id="portability"
        eyebrow="Month twelve"
        title="The portability test"
        lede="Two weeks, thirty minutes a day, fifteen hours. No course. You generate the sequence. All four yes means the engine is portable. A no means you built a course, and the next cycle targets the failing component."
        run={ledger.portability}
        onSave={(run) => saveRun("portability", run)}
      />
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-3">
      <p className="font-mono text-xs text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl tabular-nums">{value}</p>
      {hint ? <p className="text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

function RunEditor({
  id,
  eyebrow,
  title,
  lede,
  run,
  onSave,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  run: PortabilityRun;
  onSave: (run: PortabilityRun) => void;
}) {
  const [form, setForm] = useState(run);
  const set = (patch: Partial<PortabilityRun>) => setForm((f) => ({ ...f, ...patch }));
  const yesCount = [form.loop, form.tasks, form.diagnose, form.artifact].filter(Boolean).length;

  return (
    <section id={id}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 font-display text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{lede}</p>
      <form
        className="mt-4 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(form);
        }}
      >
        <Field label="The domain" hint="Never studied. Externally verifiable. Not a word list.">
          <input className={fieldClass} value={form.domain} onChange={(e) => set({ domain: e.target.value })} />
        </Field>
        <Toggle on={form.loop} label="The daily loop ran without a curriculum telling you the next task." onChange={(loop) => set({ loop })} />
        <Toggle on={form.tasks} label="You generated your own stretch tasks, near eighty-five percent success." onChange={(tasks) => set({ tasks })} />
        <Toggle
          on={form.diagnose}
          label="You diagnosed your own failures, or you escalated and knew that you had to."
          onChange={(diagnose) => set({ diagnose })}
        />
        <Toggle on={form.artifact} label="A stranger checked a working artifact." onChange={(artifact) => set({ artifact })} />
        <Field label="One page">
          <Area value={form.notes} onChange={(e) => set({ notes: e.target.value })} />
        </Field>
        <label className="flex min-h-11 items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={form.done}
            onChange={(e) => set({ done: e.target.checked })}
            className="size-4"
          />
          This run is finished
        </label>
        <p className="text-sm text-muted">
          {yesCount} of 4. {yesCount === 4 ? "The engine transferred." : "A no names the component to repair."}
        </p>
        <Button type="submit">Save this run</Button>
      </form>
    </section>
  );
}

function Toggle({
  on,
  label,
  onChange,
}: {
  on: boolean;
  label: string;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => onChange(!on)}
      className={cn(
        "flex min-h-14 items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-relaxed",
        on ? "border-fg bg-elevated" : "border-line",
      )}
    >
      <span className={cn("mt-0.5 size-4 shrink-0 rounded-sm border", on ? "border-fg bg-fg" : "border-muted")} />
      {label}
    </button>
  );
}
