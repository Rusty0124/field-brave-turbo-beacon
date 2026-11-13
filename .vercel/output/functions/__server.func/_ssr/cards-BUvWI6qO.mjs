import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as todayISO, T as useNoether, h as daysBetween, m as cn, p as addDays } from "./cn-DbO63vPs.mjs";
import { m as newCardsToday, s as dueCards } from "./router-BP6pJDRX.mjs";
import { a as Panel, i as Field, n as Button, r as Eyebrow, t as Area } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-BUvWI6qO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	{
		id: "gap",
		label: "Gap"
	},
	{
		id: "failure",
		label: "Failure"
	},
	{
		id: "explain",
		label: "Explain"
	},
	{
		id: "contrast",
		label: "Contrast"
	}
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
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [front, setFront] = (0, import_react.useState)("");
	const [back, setBack] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("gap");
	const [refused, setRefused] = (0, import_react.useState)(false);
	const current = due[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
					due.length,
					" due · ",
					made,
					" of 5 new today"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "Retrieval."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Cards hold facts, definitions, failure modes. They do not hold skill. Skill is the struggle block and the artifact. Only card a gap. If reviews pass twenty minutes, stop adding cards for a week."
				})
			] }),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [current.kind, current.lapses > 0 ? ` · ${current.lapses} lapses` : ""] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 whitespace-pre-wrap font-display text-2xl leading-snug",
					children: current.front
				}),
				revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 whitespace-pre-wrap border-t border-line pt-4 text-sm leading-relaxed",
					children: current.back
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					onClick: () => setRevealed(true),
					children: "Show the back"
				}),
				revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						["again", "Again"],
						["good", "Good"],
						["easy", "Easy"]
					].map(([rating, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: rating === "again" ? "ghost" : "quiet",
						onClick: () => {
							reviewCard(current.id, rating);
							setRevealed(false);
						},
						children: label
					}, rating))
				}) : null,
				current.lapses >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-alert",
					children: "Four failures. The card is badly written. Delete it and rewrite the gap."
				}) : null
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Nothing is due."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "The queue is not the work. Go back to the struggle block."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "A new gap"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-3 flex flex-col gap-4",
				onSubmit: (e) => {
					e.preventDefault();
					const ok = addCard({
						front,
						back,
						kind
					});
					setRefused(!ok);
					if (ok) {
						setFront("");
						setBack("");
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: KINDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setKind(item.id),
							className: cn("min-h-11 rounded-md border text-sm", kind === item.id ? "border-fg bg-elevated" : "border-line text-muted"),
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Front",
						hint: "One idea. Vary the phrasing so you cannot pattern-match it.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: front,
							onChange: (e) => setFront(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Back",
						hint: kind === "failure" ? "Symptom, cause, fix. Delete this card ninety days after the test exists." : "Your words, plus one example.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: back,
							onChange: (e) => setBack(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: made >= 5,
						children: made >= 5 ? "Five is the ceiling today" : "Add the card"
					}),
					refused && made < 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-alert",
						children: "A card needs both sides."
					}) : null
				]
			})] }),
			ledger.cards.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "The deck"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: ledger.cards.map((card) => {
					const expired = card.kind === "failure" && card.testedOn !== null && daysBetween(card.testedOn, today) >= 90;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-muted",
								children: [
									card.kind,
									" · due ",
									card.due,
									" · ",
									card.lapses,
									" lapses"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: card.front
							}),
							expired ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-alert",
								children: "Expired. The test is the memory now."
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									card.kind === "failure" && !card.testedOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "quiet",
										onClick: () => markTest(card.id, today),
										children: "The test is in the code"
									}) : null,
									card.testedOn && !expired ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "self-center text-xs text-muted",
										children: ["Expires ", addDays(card.testedOn, 90)]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "danger",
										onClick: () => deleteCard(card.id),
										children: "Delete"
									})
								]
							})
						]
					}, card.id);
				})
			})] }) : null
		]
	});
}
//#endregion
export { CardsPage as component };
