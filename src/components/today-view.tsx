import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FIRST_30, MONTHS, RUNGS, TEMPLATES, phaseFor, type TemplateId } from "@/lib/curriculum";
import {
  allowedTemplate,
  floorRun,
  forcesFloor,
  missesBefore,
  movedOn,
  needsPostMortem,
  programDay,
  sleepOn,
} from "@/lib/derive";
import { addDays, formatLong, todayISO, weekSunday, weekday } from "@/lib/dates";
import type { DayLog, Session } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { LogForm } from "@/components/log-form";
import { Area, Button, Eyebrow, Field, Panel, fieldClass } from "@/components/ui";

function elapsedMs(session: Session, now: number): number {
  if (session.paused) return session.bankedBlockMs;
  return session.bankedBlockMs + Math.max(0, now - session.blockStartedAt);
}

function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function TodayView() {
  const ledger = useNoether((s) => s.ledger);
  const setSleep = useNoether((s) => s.setSleep);
  const setMovement = useNoether((s) => s.setMovement);
  const startSession = useNoether((s) => s.startSession);
  const savePostMortem = useNoether((s) => s.savePostMortem);
  const today = todayISO();
  const startedAt = ledger.startedAt;
  if (!startedAt) return null;

  const day = programDay(startedAt, today);
  const month = MONTHS[ledger.focusMonth - 1];
  const phase = phaseFor(ledger.focusMonth);
  const sleep = sleepOn(ledger, today);
  const moved = movedOn(ledger, today);
  const forced = allowedTemplate(ledger, today);
  const mortem = needsPostMortem(ledger, today);
  const existing = ledger.logs.find((l) => l.date === today);
  const session = ledger.session;

  return (
    <div className="flex flex-col gap-5">
      <header>
        <Eyebrow>{formatLong(today)}</Eyebrow>
        <h1 className="mt-2 font-display text-4xl">
          {month ? month.title : "The year"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {phase.label}. About {phase.consume} reading, {phase.struggle} producing.
          {ledger.pace === "eighteen" ? " Forty-five days to a month." : ""}
          {ledger.pace === "hours" ? " This pace assumes six study days." : ""}
        </p>
      </header>

      <WeekStrip today={today} startedAt={startedAt} logs={ledger.logs} />

      {floorRun(ledger) >= 12 ? (
        <Panel>
          <Eyebrow>Stop rule</Eyebrow>
          <p className="mt-2 text-sm leading-relaxed">
            Twelve floor days in a row. The rule is to stop the year for at least two weeks. A year of study
            is not worth a depressive episode. If sleep or mood stay damaged, see a doctor.
          </p>
        </Panel>
      ) : null}

      {forcesFloor(ledger, today) ? (
        <Panel>
          <Eyebrow>Biological gate</Eyebrow>
          <p className="mt-2 text-sm leading-relaxed">
            Two nights under seven hours. Today is a floor day. That is a rule, not advice.
          </p>
        </Panel>
      ) : null}

      {missesBefore(ledger, today) === 1 ? (
        <p className="text-sm text-muted">Yesterday is empty. Do not miss twice.</p>
      ) : null}

      {mortem ? <PostMortem today={today} onSave={savePostMortem} /> : null}

      {session && session.date !== today ? (
        <StaleSession session={session} />
      ) : session && session.date === today ? (
        <Runner session={session} />
      ) : existing ? (
        <ClosedDay log={existing} />
      ) : mortem ? null : (
        <StartDay
          today={today}
          sleep={sleep}
          moved={moved}
          forced={forced}
          onSleep={(hours) => setSleep(today, hours)}
          onMove={(yes) => setMovement(today, yes)}
          onStart={(template, objective) => startSession(forced ?? template, objective, today)}
        />
      )}

      {day <= 30 ? (
        <Panel>
          <Eyebrow>First thirty · day {day}</Eyebrow>
          <p className="mt-2 text-sm leading-relaxed">{FIRST_30[day - 1]}</p>
        </Panel>
      ) : null}

      {month ? (
        <p className="text-sm">
          <Link
            to="/year/$month"
            params={{ month: String(month.n) }}
            className="text-fg underline decoration-line underline-offset-4"
          >
            Month {month.n} reference
          </Link>
          <span className="text-muted"> · </span>
          <Link
            to="/gate/$month"
            params={{ month: String(month.n) }}
            className="text-fg underline decoration-line underline-offset-4"
          >
            {month.gate.title}
          </Link>
        </p>
      ) : null}
    </div>
  );
}

function WeekStrip({
  today,
  startedAt,
  logs,
}: {
  today: string;
  startedAt: string;
  logs: DayLog[];
}) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  return (
    <ol className="grid grid-cols-7 gap-1">
      {days.map((d) => {
        const log = logs.find((l) => l.date === d);
        const quiet = d < startedAt;
        return (
          <li key={d} className="text-center">
            <span className="block font-mono text-xs text-muted">{weekday(d).slice(0, 1)}</span>
            <span
              className={cn(
                "mt-1 flex h-9 items-center justify-center rounded-md border font-mono text-xs tabular-nums",
                d === today ? "border-fg" : "border-line",
                log ? "bg-elevated text-fg" : "text-muted",
                quiet && "opacity-40",
              )}
            >
              {log ? log.template : "·"}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function PostMortem({
  today,
  onSave,
}: {
  today: string;
  onSave: (entry: { date: string; why: string; prevent: string; smallest: string }) => void;
}) {
  const [why, setWhy] = useState("");
  const [prevent, setPrevent] = useState("");
  const [smallest, setSmallest] = useState("");
  return (
    <Panel>
      <Eyebrow>Reset, not a verdict</Eyebrow>
      <h2 className="mt-2 font-display text-2xl">You missed twice.</h2>
      <p className="mt-2 text-sm text-muted">
        The rule is not violated. It is reset. Answer, then the day is a floor day. The streak restarts at one.
      </p>
      <form
        className="mt-4 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!why.trim() || !prevent.trim() || !smallest.trim()) return;
          onSave({ date: today, why: why.trim(), prevent: prevent.trim(), smallest: smallest.trim() });
        }}
      >
        <Field label="What made the second miss possible?">
          <Area value={why} onChange={(e) => setWhy(e.target.value)} required />
        </Field>
        <Field label="What will make a third miss impossible?">
          <Area value={prevent} onChange={(e) => setPrevent(e.target.value)} required />
        </Field>
        <Field label="What is the smallest possible session tomorrow?">
          <Area value={smallest} onChange={(e) => setSmallest(e.target.value)} required />
        </Field>
        <Button type="submit">Reset, and take the floor</Button>
      </form>
    </Panel>
  );
}

function StartDay({
  today,
  sleep,
  moved,
  forced,
  onSleep,
  onMove,
  onStart,
}: {
  today: string;
  sleep: number | null;
  moved: boolean | null;
  forced: TemplateId | null;
  onSleep: (hours: number) => void;
  onMove: (yes: boolean) => void;
  onStart: (template: TemplateId, objective: string) => void;
}) {
  const [template, setTemplate] = useState<TemplateId>(forced ?? "A");
  const [objective, setObjective] = useState("");
  const [quick, setQuick] = useState(false);
  const closeDay = useNoether((s) => s.closeDay);
  const chosen = forced ?? template;

  useEffect(() => {
    if (forced) setTemplate(forced);
  }, [forced]);

  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <Eyebrow>Before the template</Eyebrow>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted">Sleep last night</p>
            <div className="mt-2 flex items-center gap-2">
              <Button variant="quiet" onClick={() => onSleep(Math.max(0, (sleep ?? 7) - 0.5))} aria-label="Less sleep">
                −
              </Button>
              <span className="min-w-16 text-center font-mono text-lg tabular-nums">
                {sleep === null ? "—" : sleep.toFixed(1)}
              </span>
              <Button
                variant="quiet"
                onClick={() => onSleep(Math.min(14, (sleep ?? 6.5) + 0.5))}
                aria-label="More sleep"
              >
                +
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted">Moved today</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant={moved === true ? "primary" : "ghost"} onClick={() => onMove(true)}>
                Yes
              </Button>
              <Button variant={moved === false ? "primary" : "ghost"} onClick={() => onMove(false)}>
                Not yet
              </Button>
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid grid-cols-2 gap-2">
        {(Object.keys(TEMPLATES) as TemplateId[]).map((id) => {
          const spec = TEMPLATES[id];
          const selected = chosen === id;
          const disabled = forced !== null && id !== forced;
          return (
            <button
              key={id}
              type="button"
              disabled={disabled}
              onClick={() => setTemplate(id)}
              className={cn(
                "min-h-14 rounded-lg border px-3 py-2 text-left",
                selected ? "border-fg bg-elevated" : "border-line bg-surface",
                disabled && "opacity-40",
              )}
            >
              <span className="block font-mono text-xs text-muted">{id}</span>
              <span className="block font-display text-lg leading-tight">{spec.name}</span>
            </button>
          );
        })}
      </div>
      <Field label="One objective" hint="One sentence. Mood is a liar. Energy picks the template.">
        <input
          className={fieldClass}
          value={objective}
          placeholder={chosen === "C" || chosen === "D" ? "Return, and name tomorrow." : "What will exist when you stop?"}
          onChange={(e) => setObjective(e.target.value)}
        />
      </Field>
      <Button
        className="w-full"
        disabled={chosen !== "C" && chosen !== "D" && objective.trim().length === 0}
        onClick={() => onStart(chosen, objective.trim() || "Return.")}
      >
        Begin the loop
      </Button>
      <p className="text-sm leading-relaxed text-muted">{TEMPLATES[chosen].summary}</p>
      <button
        type="button"
        className="min-h-11 text-sm text-muted underline decoration-line underline-offset-4"
        onClick={() => setQuick((v) => !v)}
      >
        {quick ? "Hide the quick log" : "Log the day without the clock"}
      </button>
      {quick ? (
        <Panel>
          <LogForm
            initial={{
              date: today,
              template: chosen,
              minutes: chosen === "C" ? 15 : chosen === "D" ? 20 : 90,
              objective: objective.trim(),
              built: "",
              stuck: "",
              next: "",
              reentry: "",
              sleep,
              movement: moved === true,
              anki: false,
            }}
            submitLabel="Close the day"
            onSave={closeDay}
          />
        </Panel>
      ) : null}
    </div>
  );
}

function Runner({ session }: { session: Session }) {
  const [now, setNow] = useState(() => Date.now());
  const [stuckLine, setStuckLine] = useState("");
  const pause = useNoether((s) => s.pauseSession);
  const extend = useNoether((s) => s.extendBlock);
  const complete = useNoether((s) => s.completeBlock);
  const addStuck = useNoether((s) => s.addStuck);
  const unlock = useNoether((s) => s.unlockHints);
  const advance = useNoether((s) => s.advanceRung);
  const closeDay = useNoether((s) => s.closeDay);
  const abandon = useNoether((s) => s.abandonSession);
  const ledger = useNoether((s) => s.ledger);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, []);

  const blocks = TEMPLATES[session.template].blocks;
  const done = session.blockIndex >= blocks.length;
  const block = blocks[Math.min(session.blockIndex, blocks.length - 1)];
  const budget = (block.minutes + session.extraMinutes) * 60_000;
  const spent = elapsedMs(session, now);
  const remain = budget - spent;
  const struggle = block.kind === "struggle" || block.kind === "project";
  const showLadder = struggle && (session.hintsUnlocked || spent >= 20 * 60_000);
  const shownRung = !showLadder ? 0 : session.hintRung <= 0 ? 1 : session.hintRung;

  if (done || block.kind === "log") {
    const total = session.dayMs + (block.kind === "log" ? spent : 0);
    return (
      <Panel>
        <Eyebrow>Shutdown</Eyebrow>
        <h2 className="mt-2 font-display text-3xl">Close the day.</h2>
        <p className="mt-2 text-sm text-muted">{block.instruction}</p>
        {session.stuck.length > 0 ? (
          <ul className="mt-3 flex flex-col gap-1 text-sm text-muted">
          {session.stuck.map((line, index) => (
              <li key={`${index}-${line}`}>{line}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-4">
          <LogForm
            initial={{
              date: session.date,
              template: session.template,
              minutes: Math.max(1, Math.round(total / 60_000)),
              objective: session.objective,
              built: "",
              stuck: session.stuck.join("\n"),
              next: "",
              reentry: "",
              sleep: sleepOn(ledger, session.date),
              movement: movedOn(ledger, session.date) === true,
              anki: true,
            }}
            submitLabel="Close the day"
            onSave={closeDay}
          />
        </div>
      </Panel>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <div className="flex items-baseline justify-between gap-3">
          <Eyebrow>
            Block {session.blockIndex + 1} of {blocks.length}
          </Eyebrow>
          <span className="font-mono text-xs text-muted">{session.template}</span>
        </div>
        <h2 className="mt-2 font-display text-4xl">{block.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{block.instruction}</p>
        {session.objective ? (
          <p className="mt-3 text-sm text-fg">Objective. {session.objective}</p>
        ) : null}
        <p className="mt-6 text-center font-mono text-6xl tabular-nums tracking-tight text-fg">
          {formatClock(remain)}
        </p>
        <p className="mt-2 text-center text-sm text-muted">
          {remain <= 0 ? "The ceiling is reached. Close the block when you are ready." : "A ceiling, not a prison. Close the block when the work is done."}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Button variant="ghost" onClick={pause}>
            {session.paused ? "Resume" : "Pause"}
          </Button>
          <Button onClick={complete}>Close this block</Button>
        </div>
        {struggle ? (
          <Button variant="quiet" className="mt-2 w-full" onClick={extend}>
            Add thirty minutes
          </Button>
        ) : null}
      </Panel>

      <ol className="flex gap-1" aria-hidden="true">
        {blocks.map((b, i) => (
          <li
            key={`${b.title}-${i}`}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              i < session.blockIndex ? "bg-fg" : i === session.blockIndex ? "bg-muted" : "bg-line",
            )}
          />
        ))}
      </ol>

      {struggle ? (
        <Panel>
          <Eyebrow>Twenty-minute rule</Eyebrow>
          {!showLadder ? (
            <>
              <p className="mt-2 font-mono text-2xl tabular-nums">
                {formatClock(20 * 60_000 - spent)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                No solution, no hint, no model. Restate, write three examples, draw it, try the brute force, read the error.
              </p>
              <Button variant="ghost" className="mt-4 w-full" onClick={unlock}>
                I already spent twenty minutes on paper
              </Button>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted">
                Rung {shownRung} of {RUNGS.length}
              </p>
              <p className="mt-2 text-base leading-relaxed">{RUNGS[shownRung - 1]}</p>
              {shownRung < RUNGS.length ? (
                <Button variant="ghost" className="mt-4 w-full" onClick={advance}>
                  This rung did not unstick me
                </Button>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  Reimplement from scratch. Schedule the same problem in three days and in ten.
                </p>
              )}
            </>
          )}
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              addStuck(stuckLine);
              setStuckLine("");
            }}
          >
            <input
              className={fieldClass}
              value={stuckLine}
              placeholder="Stuck, one line"
              onChange={(e) => setStuckLine(e.target.value)}
            />
            <Button type="submit" variant="quiet">
              Log
            </Button>
          </form>
          {session.stuck.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-1 text-sm text-muted">
              {session.stuck.map((line, index) => (
                <li key={`${index}-${line}`}>{line}</li>
              ))}
            </ul>
          ) : null}
        </Panel>
      ) : null}

      <button
        type="button"
        className="min-h-11 text-sm text-muted"
        onClick={() => {
          if (window.confirm("Leave this loop without closing the day?")) abandon();
        }}
      >
        Leave without closing
      </button>
    </div>
  );
}

function StaleSession({ session }: { session: Session }) {
  const abandon = useNoether((s) => s.abandonSession);
  const closeDay = useNoether((s) => s.closeDay);
  const ledger = useNoether((s) => s.ledger);
  return (
    <Panel>
      <Eyebrow>Unclosed loop</Eyebrow>
      <h2 className="mt-2 font-display text-3xl">This loop is from {session.date}.</h2>
      <p className="mt-2 text-sm text-muted">Close it as that day’s log, or discard it. Do not pretend it was today.</p>
      <div className="mt-4">
        <LogForm
          initial={{
            date: session.date,
            template: session.template,
            minutes: Math.max(1, Math.round(session.dayMs / 60_000)),
            objective: session.objective,
            built: "",
            stuck: session.stuck.join("\n"),
            next: "",
            reentry: "",
            sleep: sleepOn(ledger, session.date),
            movement: movedOn(ledger, session.date) === true,
            anki: false,
          }}
          submitLabel="Close that day"
          onSave={closeDay}
        />
      </div>
      <Button variant="danger" className="mt-3 w-full" onClick={abandon}>
        Discard the loop
      </Button>
    </Panel>
  );
}

function ClosedDay({ log }: { log: DayLog }) {
  const [amend, setAmend] = useState(false);
  const closeDay = useNoether((s) => s.closeDay);
  const reviewDue = new Date().getDay() === 0;
  const weekOf = weekSunday(log.date);
  const reviewed = useNoether((s) => s.ledger.reviews.some((r) => r.weekOf === weekOf));

  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <Eyebrow>Closed · template {log.template}</Eyebrow>
        <h2 className="mt-2 font-display text-3xl">{log.objective || "The day is closed."}</h2>
        <dl className="mt-4 flex flex-col gap-3 text-sm">
          <div>
            <dt className="text-muted">Built</dt>
            <dd className="whitespace-pre-wrap">{log.built || "—"}</dd>
          </div>
          <div>
            <dt className="text-muted">Stuck</dt>
            <dd className="whitespace-pre-wrap">{log.stuck || "—"}</dd>
          </div>
          <div>
            <dt className="text-muted">Next</dt>
            <dd className="whitespace-pre-wrap">{log.next || "—"}</dd>
          </div>
          {log.reentry ? (
            <div>
              <dt className="text-muted">Re-entry</dt>
              <dd>{log.reentry}</dd>
            </div>
          ) : null}
        </dl>
        <p className="mt-4 font-mono text-xs text-muted">
          {log.minutes} min · sleep {log.sleep ?? "—"} · move {log.movement ? "yes" : "no"} · cards {log.anki ? "yes" : "no"}
        </p>
        <Button variant="ghost" className="mt-4" onClick={() => setAmend((v) => !v)}>
          {amend ? "Stop amending" : "Amend the log"}
        </Button>
        {amend ? (
          <div className="mt-4">
            <LogForm initial={log} onSave={closeDay} submitLabel="Save the amendment" />
          </div>
        ) : null}
      </Panel>
      {reviewDue && !reviewed ? (
        <p className="text-sm">
          <Link to="/review" className="underline decoration-line underline-offset-4">
            Sunday. Twenty minutes for the weekly review.
          </Link>
        </p>
      ) : null}
    </div>
  );
}
