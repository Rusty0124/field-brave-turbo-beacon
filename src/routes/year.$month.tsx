import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CAPSTONES, FIRST_30, MONTHS, monthByNumber, type Tier } from "@/lib/curriculum";
import { COMPONENTS } from "@/lib/curriculum";
import { programDay, projectFor } from "@/lib/derive";
import { todayISO } from "@/lib/dates";
import type { CapstoneId, ProjectRecord, ProjectStatus } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Area, Button, Eyebrow, Field, Panel, fieldClass } from "@/components/ui";

export const Route = createFileRoute("/year/$month")({ component: MonthPage });

function blank(n: number, name: string, brief: string): ProjectRecord {
  return {
    month: n,
    name,
    purpose: brief,
    mvp: "",
    feature1: "",
    feature2: "",
    feature3: "",
    outOfScope: "",
    done: "README, tests on the silent parts, fifteen meaningful commits, a five-minute explanation without notes, one review from a person who did not write it.",
    deadline: "",
    status: "unstarted",
    reviewerFound: "",
  };
}

function tierNote(tier: Tier, pace: "cut" | "eighteen" | "hours"): string | null {
  if (tier === "optional" && pace === "cut") return "Set aside on this pace";
  if (tier === "standard" && pace === "cut") return "Keep unless you fall behind";
  return null;
}

function MonthPage() {
  const { month: raw } = Route.useParams();
  const n = Number(raw);
  const plan = monthByNumber(n);
  const ledger = useNoether((s) => s.ledger);
  const setFocus = useNoether((s) => s.setFocusMonth);
  const setCapstone = useNoether((s) => s.setCapstone);
  const saveProject = useNoether((s) => s.saveProject);
  const saved = projectFor(ledger, n);
  const [state, setState] = useState<{ n: number; form: ProjectRecord } | null>(null);
  if (plan && (state === null || state.n !== n)) {
    setState({
      n,
      form: saved ?? blank(n, plan.project?.name ?? "Reading month", plan.project?.brief ?? ""),
    });
  }
  const form = state && state.n === n ? state.form : null;
  const set = (patch: Partial<ProjectRecord>) =>
    setState((current) => (current && current.n === n ? { n, form: { ...current.form, ...patch } } : current));

  const day = ledger.startedAt ? programDay(ledger.startedAt, todayISO()) : 0;

  if (!plan) {
    return (
      <div>
        <h1 className="font-display text-4xl">No such month.</h1>
        <Link to="/year" className="mt-4 inline-flex min-h-11 items-center text-sm underline">
          Back to the year
        </Link>
      </div>
    );
  }

  if (!form) return null;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Eyebrow>Month {String(plan.n).padStart(2, "0")}</Eyebrow>
        <h1 className="mt-2 font-display text-4xl">{plan.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{plan.engine}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant={ledger.focusMonth === plan.n ? "primary" : "ghost"}
            onClick={() => setFocus(plan.n)}
          >
            {ledger.focusMonth === plan.n ? "Working month" : "Make this the working month"}
          </Button>
          <Link
            to="/gate/$month"
            params={{ month: String(plan.n) }}
            className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm"
          >
            {plan.gate.title}
          </Link>
        </div>
      </header>

      {plan.installs.length > 0 ? (
        <Panel>
          <Eyebrow>Engine installed</Eyebrow>
          <ul className="mt-3 flex flex-col gap-2">
            {plan.installs.map((id) => {
              const component = COMPONENTS.find((c) => c.n === id);
              return (
                <li key={id} className="text-sm">
                  <span className="text-fg">{component?.name}</span>
                  <span className="mt-1 block text-muted">{component?.blurb}</span>
                </li>
              );
            })}
          </ul>
        </Panel>
      ) : null}

      <section>
        <h2 className="font-display text-2xl">Content</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {plan.content.map((item) => {
            const note = tierNote(item.tier, ledger.pace);
            const aside = item.tier === "optional" && ledger.pace === "cut";
            return (
              <li key={item.text} className={cn("rounded-lg border border-line px-3 py-3", aside && "opacity-60")}>
                <span className="font-mono text-xs text-muted">
                  {item.tier}
                  {note ? ` · ${note}` : ""}
                </span>
                <span className="mt-1 block text-sm leading-relaxed">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {plan.n === 12 ? (
        <section>
          <h2 className="font-display text-2xl">Capstone, sized honestly</h2>
          <p className="mt-2 text-sm text-muted">
            About thirty-six hours. A log-structured database is not realistic here. If you want that, you already
            chose eighteen months, and it is still a later cycle.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {CAPSTONES.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setCapstone(option.id as CapstoneId)}
                className={cn(
                  "rounded-lg border px-3 py-3 text-left",
                  ledger.capstone === option.id ? "border-fg bg-elevated" : "border-line",
                )}
              >
                <span className="font-display text-xl">{option.name}</span>
                <span className="mt-1 block text-sm text-muted">{option.note}</span>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {plan.project ? (
        <section>
          <h2 className="font-display text-2xl">Scope contract</h2>
          <p className="mt-2 text-sm text-muted">
            {plan.project.name}. {plan.project.brief}
            {plan.project.alt ? ` ${plan.project.alt}` : ""}
          </p>
          {tierNote(plan.project.tier, ledger.pace) ? (
            <p className="mt-2 font-mono text-xs text-muted">{tierNote(plan.project.tier, ledger.pace)}</p>
          ) : null}
          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              saveProject(form);
            }}
          >
            <Field label="Name">
              <input className={fieldClass} value={form.name} onChange={(e) => set({ name: e.target.value })} />
            </Field>
            <Field label="One-sentence purpose">
              <Area value={form.purpose} onChange={(e) => set({ purpose: e.target.value })} />
            </Field>
            <Field label="One-sentence MVP" hint="A user can do one core action and see one core result.">
              <Area value={form.mvp} onChange={(e) => set({ mvp: e.target.value })} />
            </Field>
            <Field label="Three features, maximum">
              <div className="flex flex-col gap-2">
                <input className={fieldClass} value={form.feature1} onChange={(e) => set({ feature1: e.target.value })} />
                <input className={fieldClass} value={form.feature2} onChange={(e) => set({ feature2: e.target.value })} />
                <input className={fieldClass} value={form.feature3} onChange={(e) => set({ feature3: e.target.value })} />
              </div>
            </Field>
            <Field label="Explicitly out of scope">
              <Area value={form.outOfScope} onChange={(e) => set({ outOfScope: e.target.value })} />
            </Field>
            <Field label="Definition of done">
              <Area value={form.done} onChange={(e) => set({ done: e.target.value })} />
            </Field>
            <Field label="Deadline">
              <input className={fieldClass} value={form.deadline} onChange={(e) => set({ deadline: e.target.value })} />
            </Field>
            <Field label="What a reviewer found" hint="If they found nothing, the project was too small or too easy.">
              <Area value={form.reviewerFound} onChange={(e) => set({ reviewerFound: e.target.value })} />
            </Field>
            <div className="grid grid-cols-3 gap-2">
              {(["unstarted", "building", "shipped"] as ProjectStatus[]).map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => set({ status })}
                  className={cn(
                    "min-h-11 rounded-md border text-sm capitalize",
                    form.status === status ? "border-fg bg-elevated" : "border-line text-muted",
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted">
              If the deadline slips by half, ship the reduced version and move on. Unfinished projects teach less
              than finished small ones.
            </p>
            <Button type="submit">{saved ? "Update the contract" : "Save the contract"}</Button>
          </form>
        </section>
      ) : null}

      {plan.n === 1 ? (
        <section>
          <h2 className="font-display text-2xl">The first thirty days</h2>
          <ol className="mt-3 flex flex-col gap-2">
            {FIRST_30.map((text, i) => {
              const nDay = i + 1;
              const here = day === nDay;
              return (
                <li
                  key={text}
                  className={cn("rounded-lg border px-3 py-3 text-sm leading-relaxed", here ? "border-fg bg-elevated" : "border-line")}
                >
                  <span className="font-mono text-xs text-muted">Day {nDay}</span>
                  <span className="mt-1 block">{text}</span>
                </li>
              );
            })}
          </ol>
        </section>
      ) : null}

      {plan.n === 6 || plan.n === 12 ? (
        <p className="text-sm">
          <Link to="/review" className="underline decoration-line underline-offset-4">
            {plan.n === 6 ? "Portability dry run, seven days." : "The portability test, two weeks."}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
