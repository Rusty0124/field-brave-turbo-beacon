import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AI_ALLOWED,
  AI_FORBIDDEN,
  COMPONENTS,
  DEBUG_STEPS,
  DEGRADE,
  RULES,
  RUNGS,
} from "@/lib/curriculum";
import { initialLedger, isLedger, useNoether } from "@/lib/store";
import { Eyebrow, Panel, Button } from "@/components/ui";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/law")({ component: LawPage });

function LawPage() {
  const ledger = useNoether((s) => s.ledger);
  const replace = useNoether((s) => s.replaceLedger);
  const reset = useNoether((s) => s.resetLedger);
  const [message, setMessage] = useState("");
  const started = ledger.focusMonth;

  function download() {
    const blob = new Blob([JSON.stringify({ ledger }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "noether-ledger.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function onFile(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as { ledger?: unknown } | unknown;
        const candidate =
          parsed && typeof parsed === "object" && "ledger" in parsed
            ? (parsed as { ledger: unknown }).ledger
            : parsed;
        if (!isLedger(candidate)) {
          setMessage("That file is not a Noether ledger.");
          return;
        }
        replace({ ...initialLedger(), ...candidate });
        setMessage("Ledger replaced on this device.");
      } catch {
        setMessage("That file could not be read.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Eyebrow>What is conserved</Eyebrow>
        <h1 className="mt-2 font-display text-4xl">The engine is the asset.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Named for Emmy Noether, who proved that every continuous symmetry hides a conservation law. Content is
          fuel. It leaks. The procedures that decide what stays, what is retrieved under pressure, and what is
          corrected when it fails are the thing this year is for.
        </p>
      </header>

      <Panel>
        <p className="font-display text-2xl leading-snug">
          Attempt. Specific failure. Diagnose. Corrected attempt. Spaced review. Teach it.
        </p>
        <p className="mt-3 text-sm text-muted">
          At month twelve you must take a domain you have never studied, run the engine for two weeks, and
          produce competence a stranger can verify. If you can, the year worked, regardless of how much
          computer science you covered.
        </p>
      </Panel>

      <section>
        <h2 className="font-display text-2xl">Ten components</h2>
        <ol className="mt-3 flex flex-col gap-2">
          {COMPONENTS.map((component) => {
            const on = ledger.startedAt !== null && started >= component.month;
            return (
              <li key={component.n} className="rounded-lg border border-line px-3 py-3">
                <p className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-xl">{component.name}</span>
                  <span className={cn("font-mono text-xs", on ? "text-ok" : "text-muted")}>
                    {on ? "Installed" : `Month ${component.month}`}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{component.blurb}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl">The one-page rules</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {RULES.map((rule) => (
            <li key={rule.title}>
              <h3 className="font-display text-xl">{rule.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{rule.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">Hint ladder</h2>
        <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed">
          {RUNGS.map((rung) => (
            <li key={rung}>{rung}</li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">A model may</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
            {AI_ALLOWED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl">A model may not</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
            {AI_FORBIDDEN.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            If you cannot delete the contribution and rewrite it from memory, you learned nothing.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">Debugging</h2>
        <p className="mt-2 text-sm text-muted">Installed in month two. Used forever. It separates programmers from people who follow tutorials.</p>
        <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed">
          {DEBUG_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl">When you fall behind</h2>
        <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed">
          {DEGRADE.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-muted">
          Never cut the daily loop, the struggle block, the gates, or the capstone. Those are the engine. The
          proof is output that resists faking: a leak-free allocator, a working CPU, a shell that handles pipes,
          a capstone someone else can run.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl">This device</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The ledger lives in this browser. Export it if the device might forget you. Nothing here is an account.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button onClick={download}>Download the ledger</Button>
          <label className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-line px-4 text-sm">
            Replace from a file
            <input
              type="file"
              accept="application/json"
              className="sr-only"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
          </label>
        </div>
        {message ? <p className="mt-3 text-sm">{message}</p> : null}
        <Button
          variant="danger"
          className="mt-4"
          onClick={() => {
            if (window.confirm("Erase the ledger on this device? This cannot be undone.")) reset();
          }}
        >
          Erase this ledger
        </Button>
      </section>
    </div>
  );
}
