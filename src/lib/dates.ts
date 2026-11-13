export function todayISO(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function addDays(iso: string, n: number): string {
  const dt = parseISO(iso);
  dt.setDate(dt.getDate() + n);
  return todayISO(dt);
}

export function daysBetween(a: string, b: string): number {
  const ms = parseISO(b).getTime() - parseISO(a).getTime();
  return Math.round(ms / 86_400_000);
}

export function weekSunday(iso: string): string {
  const dt = parseISO(iso);
  return addDays(iso, -dt.getDay());
}

export function formatLong(iso: string): string {
  return parseISO(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function formatShort(iso: string): string {
  return parseISO(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function weekday(iso: string): string {
  return parseISO(iso).toLocaleDateString("en-US", { weekday: "short" });
}
