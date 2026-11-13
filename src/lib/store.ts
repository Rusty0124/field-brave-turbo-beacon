import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useEffect, useState } from "react";
import { TEMPLATES, type TemplateId } from "@/lib/curriculum";
import { addDays, todayISO } from "@/lib/dates";

export type Pace = "cut" | "eighteen" | "hours";
export type CardKind = "gap" | "failure" | "explain" | "contrast";
export type Load = "under" | "optimal" | "over";
export type ProjectStatus = "unstarted" | "building" | "shipped";
export type CapstoneId = "A" | "B" | "D" | "E";

export type DayLog = {
  date: string;
  template: TemplateId;
  minutes: number;
  objective: string;
  built: string;
  stuck: string;
  next: string;
  reentry: string;
  sleep: number | null;
  movement: boolean;
  anki: boolean;
};

export type GateRecord = {
  month: number;
  checks: boolean[];
  score: number | null;
  passed: boolean | null;
  notes: string;
  external: string;
  updatedAt: string;
};

export type ProjectRecord = {
  month: number;
  name: string;
  purpose: string;
  mvp: string;
  feature1: string;
  feature2: string;
  feature3: string;
  outOfScope: string;
  done: string;
  deadline: string;
  status: ProjectStatus;
  reviewerFound: string;
};

export type Card = {
  id: string;
  front: string;
  back: string;
  kind: CardKind;
  created: string;
  due: string;
  interval: number;
  ease: number;
  lapses: number;
  testedOn: string | null;
};

export type WeeklyReview = {
  weekOf: string;
  minutes: number;
  sessions: number;
  hintPastFour: number;
  biggestStruggle: string;
  load: Load;
  external: string;
  change: string;
  projectsMoved: string;
};

export type PortabilityRun = {
  domain: string;
  loop: boolean;
  tasks: boolean;
  diagnose: boolean;
  artifact: boolean;
  notes: string;
  done: boolean;
};

export type Session = {
  date: string;
  template: TemplateId;
  objective: string;
  blockIndex: number;
  blockStartedAt: number;
  paused: boolean;
  bankedBlockMs: number;
  dayMs: number;
  extraMinutes: number;
  stuck: string[];
  hintRung: number;
  hintsUnlocked: boolean;
};

export type PostMortem = {
  date: string;
  why: string;
  prevent: string;
  smallest: string;
};

export type Ledger = {
  startedAt: string | null;
  pace: Pace;
  focusMonth: number;
  capstone: CapstoneId | null;
  logs: DayLog[];
  sleep: { date: string; hours: number }[];
  movement: { date: string; yes: boolean }[];
  gates: GateRecord[];
  projects: ProjectRecord[];
  cards: Card[];
  cardEvents: { date: string; rating: "again" | "good" | "easy" }[];
  reviews: WeeklyReview[];
  session: Session | null;
  postMortems: PostMortem[];
  dryRun: PortabilityRun;
  portability: PortabilityRun;
};

const emptyRun = (): PortabilityRun => ({
  domain: "",
  loop: false,
  tasks: false,
  diagnose: false,
  artifact: false,
  notes: "",
  done: false,
});

export const initialLedger = (): Ledger => ({
  startedAt: null,
  pace: "cut",
  focusMonth: 1,
  capstone: null,
  logs: [],
  sleep: [],
  movement: [],
  gates: [],
  projects: [],
  cards: [],
  cardEvents: [],
  reviews: [],
  session: null,
  postMortems: [],
  dryRun: emptyRun(),
  portability: emptyRun(),
});

type Store = {
  ledger: Ledger;
  beginYear: (pace: Pace) => void;
  setPace: (pace: Pace) => void;
  setFocusMonth: (month: number) => void;
  setCapstone: (id: CapstoneId) => void;
  setSleep: (date: string, hours: number) => void;
  setMovement: (date: string, yes: boolean) => void;
  startSession: (template: TemplateId, objective: string, date: string) => void;
  pauseSession: () => void;
  extendBlock: () => void;
  completeBlock: () => void;
  addStuck: (line: string) => void;
  unlockHints: () => void;
  advanceRung: () => void;
  closeDay: (entry: DayLog) => void;
  abandonSession: () => void;
  saveGate: (gate: GateRecord) => void;
  saveProject: (project: ProjectRecord) => void;
  addCard: (card: Pick<Card, "front" | "back" | "kind">) => boolean;
  reviewCard: (id: string, rating: "again" | "good" | "easy") => void;
  deleteCard: (id: string) => void;
  markTestLanded: (id: string, date: string) => void;
  saveReview: (review: WeeklyReview) => void;
  savePostMortem: (entry: PostMortem) => void;
  saveRun: (which: "dryRun" | "portability", run: PortabilityRun) => void;
  replaceLedger: (ledger: Ledger) => void;
  resetLedger: () => void;
};

function upsert<T extends { date: string }>(rows: T[], row: T): T[] {
  const i = rows.findIndex((r) => r.date === row.date);
  if (i === -1) return [...rows, row];
  const next = rows.slice();
  next[i] = row;
  return next;
}

export const useNoether = create<Store>()(
  persist(
    (set, get) => ({
      ledger: initialLedger(),
      beginYear: (pace) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            startedAt: s.ledger.startedAt ?? todayISO(),
            pace,
            focusMonth: s.ledger.focusMonth || 1,
          },
        })),
      setPace: (pace) => set((s) => ({ ledger: { ...s.ledger, pace } })),
      setFocusMonth: (month) =>
        set((s) => ({
          ledger: { ...s.ledger, focusMonth: Math.min(12, Math.max(1, month)) },
        })),
      setCapstone: (id) => set((s) => ({ ledger: { ...s.ledger, capstone: id } })),
      setSleep: (date, hours) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            sleep: upsert(s.ledger.sleep, { date, hours }),
          },
        })),
      setMovement: (date, yes) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            movement: upsert(s.ledger.movement, { date, yes }),
          },
        })),
      startSession: (template, objective, date) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            session: {
              date,
              template,
              objective,
              blockIndex: 0,
              blockStartedAt: Date.now(),
              paused: false,
              bankedBlockMs: 0,
              dayMs: 0,
              extraMinutes: 0,
              stuck: [],
              hintRung: 0,
              hintsUnlocked: false,
            },
          },
        })),
      pauseSession: () =>
        set((s) => {
          const session = s.ledger.session;
          if (!session) return s;
          const now = Date.now();
          if (session.paused) {
            return {
              ledger: {
                ...s.ledger,
                session: { ...session, paused: false, blockStartedAt: now },
              },
            };
          }
          return {
            ledger: {
              ...s.ledger,
              session: {
                ...session,
                paused: true,
                bankedBlockMs: session.bankedBlockMs + (now - session.blockStartedAt),
              },
            },
          };
        }),
      extendBlock: () =>
        set((s) => {
          const session = s.ledger.session;
          if (!session) return s;
          return {
            ledger: {
              ...s.ledger,
              session: { ...session, extraMinutes: session.extraMinutes + 30 },
            },
          };
        }),
      completeBlock: () =>
        set((s) => {
          const session = s.ledger.session;
          if (!session) return s;
          const now = Date.now();
          const elapsed = session.paused
            ? session.bankedBlockMs
            : session.bankedBlockMs + (now - session.blockStartedAt);
          const blocks = TEMPLATES[session.template].blocks;
          const next = session.blockIndex + 1;
          return {
            ledger: {
              ...s.ledger,
              session: {
                ...session,
                blockIndex: Math.min(next, blocks.length),
                blockStartedAt: now,
                paused: false,
                bankedBlockMs: 0,
                dayMs: session.dayMs + Math.max(0, elapsed),
                extraMinutes: 0,
                hintRung: 0,
                hintsUnlocked: false,
              },
            },
          };
        }),
      addStuck: (line) =>
        set((s) => {
          const session = s.ledger.session;
          const trimmed = line.trim();
          if (!session || !trimmed) return s;
          return {
            ledger: {
              ...s.ledger,
              session: { ...session, stuck: [...session.stuck, trimmed] },
            },
          };
        }),
      unlockHints: () =>
        set((s) => {
          const session = s.ledger.session;
          if (!session) return s;
          return {
            ledger: {
              ...s.ledger,
              session: {
                ...session,
                hintsUnlocked: true,
                hintRung: Math.max(1, session.hintRung),
              },
            },
          };
        }),
      advanceRung: () =>
        set((s) => {
          const session = s.ledger.session;
          if (!session) return s;
          const next = session.hintRung <= 0 ? 2 : Math.min(9, session.hintRung + 1);
          return {
            ledger: {
              ...s.ledger,
              session: { ...session, hintRung: next, hintsUnlocked: true },
            },
          };
        }),
      closeDay: (entry) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            logs: upsert(s.ledger.logs, entry).sort((a, b) => a.date.localeCompare(b.date)),
            session: s.ledger.session?.date === entry.date ? null : s.ledger.session,
          },
        })),
      abandonSession: () => set((s) => ({ ledger: { ...s.ledger, session: null } })),
      saveGate: (gate) =>
        set((s) => {
          const gates = s.ledger.gates.filter((g) => g.month !== gate.month).concat(gate);
          const advance =
            gate.passed === true &&
            gate.external.trim().length > 0 &&
            gate.month === s.ledger.focusMonth &&
            gate.month < 12;
          return {
            ledger: {
              ...s.ledger,
              gates,
              focusMonth: advance ? gate.month + 1 : s.ledger.focusMonth,
            },
          };
        }),
      saveProject: (project) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            projects: s.ledger.projects.filter((p) => p.month !== project.month).concat(project),
          },
        })),
      addCard: ({ front, back, kind }) => {
        const today = todayISO();
        const made = get().ledger.cards.filter((c) => c.created === today).length;
        if (made >= 5 || !front.trim() || !back.trim()) return false;
        const card: Card = {
          id: crypto.randomUUID(),
          front: front.trim(),
          back: back.trim(),
          kind,
          created: today,
          due: today,
          interval: 0,
          ease: 2.5,
          lapses: 0,
          testedOn: null,
        };
        set((s) => ({ ledger: { ...s.ledger, cards: [card, ...s.ledger.cards] } }));
        return true;
      },
      reviewCard: (id, rating) =>
        set((s) => {
          const today = todayISO();
          const cards = s.ledger.cards.map((card) => {
            if (card.id !== id) return card;
            let { interval, ease, lapses } = card;
            if (rating === "again") {
              lapses += 1;
              interval = 1;
              ease = Math.max(1.3, ease - 0.2);
            } else if (rating === "good") {
              interval = interval < 1 ? 1 : Math.max(1, Math.round(interval * ease));
            } else {
              interval = interval < 1 ? 3 : Math.max(1, Math.round(interval * ease * 1.3));
              ease = Math.min(3, ease + 0.15);
            }
            return { ...card, interval, ease, lapses, due: addDays(today, interval) };
          });
          return {
            ledger: {
              ...s.ledger,
              cards,
              cardEvents: [...s.ledger.cardEvents, { date: today, rating }],
            },
          };
        }),
      deleteCard: (id) =>
        set((s) => ({
          ledger: { ...s.ledger, cards: s.ledger.cards.filter((c) => c.id !== id) },
        })),
      markTestLanded: (id, date) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            cards: s.ledger.cards.map((c) => (c.id === id ? { ...c, testedOn: date } : c)),
          },
        })),
      saveReview: (review) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            reviews: s.ledger.reviews
              .filter((r) => r.weekOf !== review.weekOf)
              .concat(review)
              .sort((a, b) => b.weekOf.localeCompare(a.weekOf)),
          },
        })),
      savePostMortem: (entry) =>
        set((s) => ({
          ledger: {
            ...s.ledger,
            postMortems: upsert(s.ledger.postMortems, entry),
          },
        })),
      saveRun: (which, run) => set((s) => ({ ledger: { ...s.ledger, [which]: run } })),
      replaceLedger: (ledger) => set({ ledger }),
      resetLedger: () => set({ ledger: initialLedger() }),
    }),
    {
      name: "noether-ledger",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (s) => ({ ledger: s.ledger }),
      version: 1,
    },
  ),
);

export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    let alive = true;
    const done = () => {
      if (alive) setHydrated(true);
    };
    const unsub = useNoether.persist.onFinishHydration(done);
    if (useNoether.persist.hasHydrated()) done();
    else void useNoether.persist.rehydrate();
    return () => {
      alive = false;
      unsub();
    };
  }, []);
  return hydrated;
}

export function isLedger(value: unknown): value is Ledger {
  if (!value || typeof value !== "object") return false;
  const o = value as Ledger;
  return (
    (o.pace === "cut" || o.pace === "eighteen" || o.pace === "hours") &&
    Array.isArray(o.logs) &&
    Array.isArray(o.cards) &&
    Array.isArray(o.gates) &&
    Array.isArray(o.projects)
  );
}
