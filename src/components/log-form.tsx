import { useState } from "react";
import type { DayLog } from "@/lib/store";
import { Area, Button, Field, fieldClass } from "@/components/ui";

export function LogForm({
  initial,
  onSave,
  submitLabel,
}: {
  initial: DayLog;
  onSave: (entry: DayLog) => void;
  submitLabel: string;
}) {
  const [entry, setEntry] = useState(initial);
  const set = (patch: Partial<DayLog>) => setEntry((e) => ({ ...e, ...patch }));

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(entry);
      }}
    >
      <Field label="Minutes" hint="Hours are not a scoreboard. This is only so the week can be audited.">
        <input
          className={fieldClass}
          inputMode="numeric"
          value={entry.minutes}
          onChange={(e) => set({ minutes: Math.max(0, Number(e.target.value) || 0) })}
        />
      </Field>
      <Field label="Built" hint="What exists now that did not this morning.">
        <Area value={entry.built} onChange={(e) => set({ built: e.target.value })} />
      </Field>
      <Field label="Stuck" hint="The specific failure, not a mood.">
        <Area value={entry.stuck} onChange={(e) => set({ stuck: e.target.value })} />
      </Field>
      <Field label="Next" hint="The first action tomorrow. A file, a command, a problem.">
        <Area value={entry.next} onChange={(e) => set({ next: e.target.value })} />
      </Field>
      <Field label="Re-entry" hint="If tomorrow is empty, the exact command or file you will open.">
        <input
          className={fieldClass}
          value={entry.reentry}
          onChange={(e) => set({ reentry: e.target.value })}
        />
      </Field>
      <label className="flex min-h-11 items-center gap-3 text-sm text-fg">
        <input
          type="checkbox"
          checked={entry.anki}
          onChange={(e) => set({ anki: e.target.checked })}
          className="size-4 accent-fg"
        />
        Cards cleared, or honestly attempted
      </label>
      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
