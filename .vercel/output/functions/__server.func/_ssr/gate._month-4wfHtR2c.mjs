import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as todayISO, T as useNoether, b as monthByNumber, m as cn } from "./cn-DbO63vPs.mjs";
import { r as Route$2, u as gateFor } from "./router-BP6pJDRX.mjs";
import { a as Panel, i as Field, n as Button, o as fieldClass, r as Eyebrow, t as Area } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gate._month-4wfHtR2c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatClock(ms) {
	const total = Math.max(0, Math.ceil(ms / 1e3));
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function GatePage() {
	const { month: raw } = Route$2.useParams();
	const n = Number(raw);
	const plan = monthByNumber(n);
	const ledger = useNoether((s) => s.ledger);
	const saveGate = useNoether((s) => s.saveGate);
	const saved = plan ? gateFor(ledger, plan.n) : void 0;
	const [checks, setChecks] = (0, import_react.useState)([]);
	const [score, setScore] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [external, setExternal] = (0, import_react.useState)("");
	const [endsAt, setEndsAt] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!plan) return;
		const existing = useNoether.getState().ledger.gates.find((g) => g.month === plan.n);
		setChecks(existing?.checks ?? plan.gate.checks.map(() => false));
		setScore(existing?.score === null || existing?.score === void 0 ? "" : String(existing.score));
		setNotes(existing?.notes ?? "");
		setExternal(existing?.external ?? "");
		setReady(true);
	}, [plan]);
	(0, import_react.useEffect)(() => {
		if (!endsAt) return;
		const id = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [endsAt]);
	if (!plan) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "No such gate."
	});
	const remain = endsAt ? endsAt - now : plan.gate.minutes * 6e4;
	const scoreNum = score.trim() === "" ? null : Number(score);
	const verified = external.trim().length > 0;
	function commit(passed) {
		if (!plan) return;
		const record = {
			month: plan.n,
			checks,
			score: scoreNum !== null && Number.isFinite(scoreNum) ? scoreNum : null,
			passed,
			notes: notes.trim(),
			external: external.trim(),
			updatedAt: todayISO()
		};
		saveGate(record);
	}
	const lowFoundation = plan.n === 4 && scoreNum !== null && scoreNum < 70;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
					"Month ",
					plan.n,
					" · ",
					plan.gate.minutes,
					" min"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: plan.gate.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: plan.gate.prompt
				}),
				plan.gate.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-alert",
					children: plan.gate.note
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-4xl tabular-nums",
					children: formatClock(remain)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => {
						setEndsAt(Date.now() + plan.gate.minutes * 6e4);
						setNow(Date.now());
					},
					children: endsAt ? "Restart the clock" : "Start the clock"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Closed book. The clock does not submit anything for you."
			})] }),
			ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: plan.gate.checks.map((check, i) => {
					const on = checks[i] === true;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setChecks((prev) => {
							const next = plan.gate.checks.map((_, j) => prev[j] === true);
							next[i] = !on;
							return next;
						}),
						className: cn("flex min-h-14 w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-relaxed", on ? "border-fg bg-elevated" : "border-line bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 size-4 shrink-0 rounded-sm border", on ? "border-fg bg-fg" : "border-muted"),
							"aria-hidden": "true"
						}), check]
					}) }, check);
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Score, if the gate has one",
				hint: "Month four fails under seventy. Other gates can stay blank.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					value: score,
					onChange: (e) => setScore(e.target.value)
				})
			}),
			lowFoundation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-alert",
				children: "Below seventy. Consolidate for two weeks. This is the only gate where delay is the correct move."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What you missed, in specific terms",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					value: notes,
					onChange: (e) => setNotes(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What a stranger found",
				hint: "A pass without this is unverified. Self-assessment drifts. External judgment does not.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					value: external,
					onChange: (e) => setExternal(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => commit(false),
					children: "Not yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => commit(true),
					disabled: lowFoundation,
					children: verified ? "Passed" : "Passed, unverified"
				})]
			}),
			saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Last recorded ",
					saved.updatedAt,
					".",
					" ",
					saved.passed && saved.external.trim() ? "Verified." : saved.passed ? "Marked passed, still unverified." : "Still open.",
					saved.passed && saved.external.trim() && saved.month < 12 ? " A verified pass on the working month advances you." : ""
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/year/$month",
				params: { month: String(plan.n) },
				className: "text-sm underline decoration-line underline-offset-4",
				children: ["Back to month ", plan.n]
			})
		]
	});
}
//#endregion
export { GatePage as component };
