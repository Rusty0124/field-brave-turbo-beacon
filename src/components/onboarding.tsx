import { useState } from "react";
import { CLAIMS } from "@/lib/curriculum";
import type { Pace } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

const PACES: { id: Pace; title: string; body: string; note: string }[] = [
  {
    id: "cut",
    title: "Cut the content",
    note: "Default",
    body: "Drop the optional projects. Compress networks and databases. Keep the capstone small.",
  },
  {
    id: "eighteen",
    title: "Eighteen months",
    note: "Keep it all",
    body: "The honest option for a true beginner. Same gates. About forty-five days to a month.",
  },
  {
    id: "hours",
    title: "Raise the hours",
    note: "Burns out",
    body: "Six study days and two deep days. Possible for some. Recovery is still a gate.",
  },
];

export function Onboarding() {
  const begin = useNoether((s) => s.beginYear);
  const [pace, setPace] = useState<Pace>("cut");

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="font-mono text-xs tracking-wide text-muted">Emmy Noether, 1882–1935</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg">A mind that can learn anything.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          One year. Computer science is the training ground because it resists faking. The engine is what transfers.
        </p>
      </header>

      <ol className="flex flex-col gap-3">
        {CLAIMS.map((claim, i) => (
          <li key={claim} className="flex gap-3 text-sm leading-relaxed">
            <span className="font-display text-xl leading-none text-muted">{i + 1}</span>
            <span>{claim}</span>
          </li>
        ))}
      </ol>

      <div>
        <h2 className="font-display text-2xl">Choose the cost now.</h2>
        <p className="mt-2 text-sm text-muted">
          The terrain is seven to eight hundred hours. A humane week does not hold that. Decide before month seven does.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {PACES.map((item) => {
            const selected = pace === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPace(item.id)}
                aria-pressed={selected}
                className={cn(
                  "rounded-lg border px-3 py-3 text-left transition-colors duration-150",
                  selected ? "border-fg bg-elevated" : "border-line bg-surface",
                )}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg text-fg">{item.title}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{item.note}</span>
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{item.body}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button className="w-full" onClick={() => begin(pace)}>
          Begin day one
        </Button>
        <p className="text-center text-sm text-muted">The system starts the moment you open the editor.</p>
      </div>
    </div>
  );
}
