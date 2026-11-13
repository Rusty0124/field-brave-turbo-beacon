import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { dueCards, newCardsToday } from "@/lib/derive";
import { addDays, daysBetween, todayISO } from "@/lib/dates";
import type { CardKind } from "@/lib/store";
import { useNoether } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Area, Button, Eyebrow, Field, Panel } from "@/components/ui";

export const Route = createFileRoute("/cards")({ component: CardsPage });

const KINDS: { id: CardKind; label: string }[] = [
  { id: "gap", label: "Gap" },
  { id: "failure", label: "Failure" },
  { id: "explain", label: "Explain" },
  { id: "contrast", label: "Contrast" },
];

function CardsPage() {
  const ledger = useNoether((s) => s.ledger);
  const reviewCard = useNoether((s) => s.reviewCard);
  const addCard = useNoether((s) => s.addCard);
  const deleteCard = useNoether((s) => s.deleteCard);
  const markTest = useNoether((s) => s.markTestLanded);
  const today = todayISO();
  const due = dueCards(ledger, today);
  const made = newCardsToday(ledger, today);
  const [revealed, setRevealed] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [kind, setKind] = useState<CardKind>("gap");
  const [refused, setRefused] = useState(false);
  const current = due[0];

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Eyebrow>
          {due.length} due · {made} of 5 new today
        </Eyebrow>
        <h1 className="mt-2 font-display text-4xl">Retrieval.</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Cards hold facts, definitions, failure modes. They do not hold skill. Skill is the struggle block
          and the artifact. Only card a gap. If reviews pass twenty minutes, stop adding cards for a week.
        </p>
      </header>

      {current ? (
        <Panel>
          <Eyebrow>
            {current.kind}
            {current.lapses > 0 ? ` · ${current.lapses} lapses` : ""}
          </Eyebrow>
          <p className="mt-3 whitespace-pre-wrap font-display text-2xl leading-snug">{current.front}</p>
          {revealed ? (
            <p className="mt-4 whitespace-pre-wrap border-t border-line pt-4 text-sm leading-relaxed">{current.back}</p>
          ) : (
            <Button className="mt-5 w-full" onClick={() => setRevealed(true)}>
              Show the back
            </Button>
          )}
          {revealed ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {(
                [
                  ["again", "Again"],
                  ["good", "Good"],
                  ["easy", "Easy"],
                ] as const
              ).map(([rating, label]) => (
                <Button
                  key={rating}
                  variant={rating === "again" ? "ghost" : "quiet"}
                  onClick={() => {
                    reviewCard(current.id, rating);
                    setRevealed(false);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          ) : null}
          {current.lapses >= 4 ? (
            <p className="mt-3 text-sm text-alert">Four failures. The card is badly written. Delete it and rewrite the gap.</p>
          ) : null}
        </Panel>
      ) : (
        <Panel>
          <h2 className="font-display text-2xl">Nothing is due.</h2>
          <p className="mt-2 text-sm text-muted">The queue is not the work. Go back to the struggle block.</p>
        </Panel>
      )}

      <section>
        <h2 className="font-display text-2xl">A new gap</h2>
        <form
          className="mt-3 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const ok = addCard({ front, back, kind });
            setRefused(!ok);
            if (ok) {
              setFront("");
              setBack("");
            }
          }}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {KINDS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setKind(item.id)}
                className={cn(
                  "min-h-11 rounded-md border text-sm",
                  kind === item.id ? "border-fg bg-elevated" : "border-line text-muted",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Field label="Front" hint="One idea. Vary the phrasing so you cannot pattern-match it.">
            <Area value={front} onChange={(e) => setFront(e.target.value)} />
          </Field>
          <Field
            label="Back"
            hint={
              kind === "failure"
                ? "Symptom, cause, fix. Delete this card ninety days after the test exists."
                : "Your words, plus one example."
            }
          >
            <Area value={back} onChange={(e) => setBack(e.target.value)} />
          </Field>
          <Button type="submit" disabled={made >= 5}>
            {made >= 5 ? "Five is the ceiling today" : "Add the card"}
          </Button>
          {refused && made < 5 ? <p className="text-sm text-alert">A card needs both sides.</p> : null}
        </form>
      </section>

      {ledger.cards.length > 0 ? (
        <section>
          <h2 className="font-display text-2xl">The deck</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {ledger.cards.map((card) => {
              const expired =
                card.kind === "failure" && card.testedOn !== null && daysBetween(card.testedOn, today) >= 90;
              return (
                <li key={card.id} className="rounded-lg border border-line px-3 py-3">
                  <p className="font-mono text-xs text-muted">
                    {card.kind} · due {card.due} · {card.lapses} lapses
                  </p>
                  <p className="mt-1 text-sm">{card.front}</p>
                  {expired ? (
                    <p className="mt-2 text-sm text-alert">Expired. The test is the memory now.</p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.kind === "failure" && !card.testedOn ? (
                      <Button variant="quiet" onClick={() => markTest(card.id, today)}>
                        The test is in the code
                      </Button>
                    ) : null}
                    {card.testedOn && !expired ? (
                      <p className="self-center text-xs text-muted">
                        Expires {addDays(card.testedOn, 90)}
                      </p>
                    ) : null}
                    <Button variant="danger" onClick={() => deleteCard(card.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
