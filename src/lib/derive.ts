import { monthLength, type TemplateId } from "@/lib/curriculum";
import { addDays, daysBetween, todayISO } from "@/lib/dates";
import type { Ledger } from "@/lib/store";

export function programDay(startedAt: string, today = todayISO()): number {
  return daysBetween(startedAt, today) + 1;
}

export function calendarMonth(ledger: Ledger, today = todayISO()): number {
  if (!ledger.startedAt) return 1;
  const day = programDay(ledger.startedAt, today);
  const len = monthLength(ledger.pace);
  return Math.min(12, Math.max(1, Math.ceil(day / len)));
}

export function sleepOn(ledger: Ledger, date: string): number | null {
  return ledger.sleep.find((s) => s.date === date)?.hours ?? null;
}

export function movedOn(ledger: Ledger, date: string): boolean | null {
  return ledger.movement.find((m) => m.date === date)?.yes ?? null;
}

export function forcesFloor(ledger: Ledger, today = todayISO()): boolean {
  const last = sleepOn(ledger, today);
  const prev = sleepOn(ledger, addDays(today, -1));
  if (last === null || prev === null) return false;
  return last < 7 && prev < 7;
}

export function missesBefore(ledger: Ledger, today = todayISO()): number {
  if (!ledger.startedAt) return 0;
  const logged = new Set(ledger.logs.map((l) => l.date));
  let n = 0;
  for (let i = 1; ; i++) {
    const d = addDays(today, -i);
    if (d < ledger.startedAt) break;
    if (logged.has(d)) break;
    n += 1;
  }
  return n;
}

export function needsPostMortem(ledger: Ledger, today = todayISO()): boolean {
  if (missesBefore(ledger, today) < 2) return false;
  return !ledger.postMortems.some((p) => p.date === today);
}

export function floorRun(ledger: Ledger): number {
  const logs = [...ledger.logs].sort((a, b) => b.date.localeCompare(a.date));
  let n = 0;
  for (const log of logs) {
    if (log.template !== "C") break;
    n += 1;
  }
  return n;
}

export function dueCards(ledger: Ledger, today = todayISO()) {
  return ledger.cards
    .filter((c) => c.due <= today)
    .sort((a, b) => a.due.localeCompare(b.due) || b.lapses - a.lapses);
}

export function newCardsToday(ledger: Ledger, today = todayISO()): number {
  return ledger.cards.filter((c) => c.created === today).length;
}

export function weekLogs(ledger: Ledger, weekOf: string) {
  const end = addDays(weekOf, 6);
  return ledger.logs.filter((l) => l.date >= weekOf && l.date <= end);
}

export function retention(ledger: Ledger, weekOf: string): number | null {
  const end = addDays(weekOf, 6);
  const events = ledger.cardEvents.filter((e) => e.date >= weekOf && e.date <= end);
  if (events.length === 0) return null;
  const held = events.filter((e) => e.rating !== "again").length;
  return held / events.length;
}

export function gateFor(ledger: Ledger, month: number) {
  return ledger.gates.find((g) => g.month === month);
}

export function projectFor(ledger: Ledger, month: number) {
  return ledger.projects.find((p) => p.month === month);
}

export function behind(ledger: Ledger, today = todayISO()): boolean {
  if (!ledger.startedAt) return false;
  const day = programDay(ledger.startedAt, today);
  const len = monthLength(ledger.pace);
  return day > ledger.focusMonth * len + 14;
}

export function allowedTemplate(ledger: Ledger, today = todayISO()): TemplateId | null {
  if (forcesFloor(ledger, today) || missesBefore(ledger, today) >= 2) return "C";
  return null;
}
