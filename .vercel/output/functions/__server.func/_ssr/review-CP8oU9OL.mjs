import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as todayISO, E as weekSunday, T as useNoether, _ as formatShort, m as cn } from "./cn-DbO63vPs.mjs";
import { _ as retention, y as weekLogs } from "./router-BP6pJDRX.mjs";
import { i as Field, n as Button, o as fieldClass, r as Eyebrow, t as Area } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-CP8oU9OL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOADS = [
	"under",
	"optimal",
	"over"
];
function emptyReview(weekOf, minutes, sessions) {
	return {
		weekOf,
		minutes,
		sessions,
		hintPastFour: 0,
		biggestStruggle: "",
		load: "optimal",
		external: "",
		change: "",
		projectsMoved: ""
	};
}
function ReviewPage() {
	const ledger = useNoether((s) => s.ledger);
	const saveReview = useNoether((s) => s.saveReview);
	const saveRun = useNoether((s) => s.saveRun);
	const today = todayISO();
	const weekOf = weekSunday(today);
	const logs = weekLogs(ledger, weekOf);
	const minutes = logs.reduce((sum, log) => sum + log.minutes, 0);
	const held = retention(ledger, weekOf);
	const existing = ledger.reviews.find((r) => r.weekOf === weekOf);
	const [form, setForm] = (0, import_react.useState)(() => existing ?? emptyReview(weekOf, minutes, logs.length));
	const set = (patch) => setForm((f) => ({
		...f,
		...patch
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Week of ", formatShort(weekOf)] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "The engine, watching itself."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Twenty minutes on the recovery day. Do not track hours as a scoreboard, lines of code, or a streak you are afraid to break."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Sessions",
						value: String(logs.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Minutes",
						value: String(minutes)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Card hold",
						value: held === null ? "—" : `${Math.round(held * 100)}%`,
						hint: held === null ? "No reviews" : held < .8 ? "Cards too hard" : held > .95 ? "Cards too easy" : "In range"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-4",
				onSubmit: (e) => {
					e.preventDefault();
					saveReview({
						...form,
						minutes,
						sessions: logs.length
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Projects that moved",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: form.projectsMoved,
							onChange: (e) => set({ projectsMoved: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Problems that needed a hint past rung four",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							value: form.hintPastFour,
							onChange: (e) => set({ hintPastFour: Math.max(0, Number(e.target.value) || 0) })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "The biggest struggle",
						hint: "This becomes next week’s stretch.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: form.biggestStruggle,
							onChange: (e) => set({ biggestStruggle: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Load"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2",
							children: LOADS.map((load) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => set({ load }),
								className: cn("min-h-11 rounded-md border text-sm capitalize", form.load === load ? "border-fg bg-elevated" : "border-line text-muted"),
								children: load
							}, load))
						}),
						form.load === "over" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "If this is the second heavy week, cut twenty percent of new material."
						}) : null
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What a stranger saw this week",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: form.external,
							onChange: (e) => set({ external: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "One change next week",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: form.change,
							onChange: (e) => set({ change: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: existing ? "Update the review" : "Save the review"
					})
				]
			}),
			ledger.reviews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Earlier weeks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: ledger.reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line px-3 py-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-muted",
							children: [
								formatShort(review.weekOf),
								" · ",
								review.sessions,
								" sessions · ",
								review.minutes,
								" min · ",
								review.load
							]
						}),
						review.biggestStruggle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: review.biggestStruggle
						}) : null,
						review.change ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-muted",
							children: ["Next: ", review.change]
						}) : null
					]
				}, review.weekOf))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunEditor, {
				id: "dry-run",
				eyebrow: "Month six",
				title: "Portability dry run",
				lede: "Seven days, thirty minutes a day, a domain you have never studied, with an output a stranger can check. Vocabulary lists do not count. If any answer is no, name the failing component and repair it before month twelve.",
				run: ledger.dryRun,
				onSave: (run) => saveRun("dryRun", run)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunEditor, {
				id: "portability",
				eyebrow: "Month twelve",
				title: "The portability test",
				lede: "Two weeks, thirty minutes a day, fifteen hours. No course. You generate the sequence. All four yes means the engine is portable. A no means you built a course, and the next cycle targets the failing component.",
				run: ledger.portability,
				onSave: (run) => saveRun("portability", run)
			})
		]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl tabular-nums",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function RunEditor({ id, eyebrow, title, lede, run, onSave }) {
	const [form, setForm] = (0, import_react.useState)(run);
	const set = (patch) => setForm((f) => ({
		...f,
		...patch
	}));
	const yesCount = [
		form.loop,
		form.tasks,
		form.diagnose,
		form.artifact
	].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex flex-col gap-4",
				onSubmit: (e) => {
					e.preventDefault();
					onSave(form);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "The domain",
						hint: "Never studied. Externally verifiable. Not a word list.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: form.domain,
							onChange: (e) => set({ domain: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: form.loop,
						label: "The daily loop ran without a curriculum telling you the next task.",
						onChange: (loop) => set({ loop })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: form.tasks,
						label: "You generated your own stretch tasks, near eighty-five percent success.",
						onChange: (tasks) => set({ tasks })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: form.diagnose,
						label: "You diagnosed your own failures, or you escalated and knew that you had to.",
						onChange: (diagnose) => set({ diagnose })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: form.artifact,
						label: "A stranger checked a working artifact.",
						onChange: (artifact) => set({ artifact })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "One page",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							value: form.notes,
							onChange: (e) => set({ notes: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: form.done,
							onChange: (e) => set({ done: e.target.checked }),
							className: "size-4"
						}), "This run is finished"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							yesCount,
							" of 4. ",
							yesCount === 4 ? "The engine transferred." : "A no names the component to repair."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save this run"
					})
				]
			})
		]
	});
}
function Toggle({ on, label, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick: () => onChange(!on),
		className: cn("flex min-h-14 items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-relaxed", on ? "border-fg bg-elevated" : "border-line"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-0.5 size-4 shrink-0 rounded-sm border", on ? "border-fg bg-fg" : "border-muted") }), label]
	});
}
//#endregion
export { ReviewPage as component };
