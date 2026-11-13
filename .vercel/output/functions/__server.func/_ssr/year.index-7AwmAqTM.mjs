import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as useNoether, l as MONTHS, m as cn, s as DEGRADE } from "./cn-DbO63vPs.mjs";
import { a as behind, g as projectFor, o as calendarMonth, u as gateFor } from "./router-BP6pJDRX.mjs";
import { r as Eyebrow } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/year.index-7AwmAqTM.js
var import_jsx_runtime = require_jsx_runtime();
var PACE_LABEL = {
	cut: "Cut content",
	eighteen: "Eighteen months",
	hours: "Raised hours"
};
function gateLabel(passed, external) {
	if (passed === true && external && external.trim()) return "Passed";
	if (passed === true) return "Unverified";
	if (passed === false) return "Not yet";
	return "Open";
}
function YearPage() {
	const ledger = useNoether((s) => s.ledger);
	const setPace = useNoether((s) => s.setPace);
	const late = behind(ledger);
	const cal = ledger.startedAt ? calendarMonth(ledger) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Twelve months" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "The installation schedule."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Core is what the engine needs. Standard is a complete year. Optional is surplus. If you fall behind, cut optional, then standard, never the loop, the struggle block, the gates, or the capstone."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: Object.keys(PACE_LABEL).map((pace) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPace(pace),
					className: cn("min-h-11 rounded-md border px-3 text-sm", ledger.pace === pace ? "border-fg bg-elevated text-fg" : "border-line text-muted"),
					children: PACE_LABEL[pace]
				}, pace))
			}),
			late ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "More than two weeks behind" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 flex list-decimal flex-col gap-2 pl-4 text-sm leading-relaxed",
					children: DEGRADE.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
				})]
			}) : null,
			cal && cal !== ledger.focusMonth ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"The calendar is on month ",
					cal,
					". The working month is ",
					ledger.focusMonth,
					". Passing a verified gate advances the working month."
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-2",
				children: MONTHS.map((month) => {
					const gate = gateFor(ledger, month.n);
					const project = projectFor(ledger, month.n);
					const label = gateLabel(gate?.passed, gate?.external);
					const working = ledger.focusMonth === month.n;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/year/$month",
						params: { month: String(month.n) },
						className: cn("block rounded-xl border p-4", working ? "border-fg bg-elevated" : "border-line bg-surface"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted",
									children: [String(month.n).padStart(2, "0"), working ? " · working" : ""]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-mono text-xs", label === "Passed" ? "text-ok" : label === "Not yet" ? "text-alert" : "text-muted"),
									children: label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-2xl text-fg",
								children: month.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-sm text-muted",
								children: [
									project?.name || month.project?.name || "No project",
									" ·",
									" ",
									project?.status === "shipped" ? "shipped" : project?.status === "building" ? "building" : month.project ? month.project.tier : "reading"
								]
							})
						]
					}) }, month.n);
				})
			})
		]
	});
}
//#endregion
export { YearPage as component };
