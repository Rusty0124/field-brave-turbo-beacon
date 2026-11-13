import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as useNoether, a as COMPONENTS, d as RUNGS, m as cn, n as AI_FORBIDDEN, o as DEBUG_STEPS, s as DEGRADE, t as AI_ALLOWED, u as RULES, v as initialLedger, y as isLedger } from "./cn-DbO63vPs.mjs";
import { a as Panel, n as Button, r as Eyebrow } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/law-DBK86idu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LawPage() {
	const ledger = useNoether((s) => s.ledger);
	const replace = useNoether((s) => s.replaceLedger);
	const reset = useNoether((s) => s.resetLedger);
	const [message, setMessage] = (0, import_react.useState)("");
	const started = ledger.focusMonth;
	function download() {
		const blob = new Blob([JSON.stringify({ ledger }, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "noether-ledger.json";
		a.click();
		URL.revokeObjectURL(url);
	}
	function onFile(file) {
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const parsed = JSON.parse(String(reader.result));
				const candidate = parsed && typeof parsed === "object" && "ledger" in parsed ? parsed.ledger : parsed;
				if (!isLedger(candidate)) {
					setMessage("That file is not a Noether ledger.");
					return;
				}
				replace({
					...initialLedger(),
					...candidate
				});
				setMessage("Ledger replaced on this device.");
			} catch {
				setMessage("That file could not be read.");
			}
		};
		reader.readAsText(file);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What is conserved" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "The engine is the asset."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Named for Emmy Noether, who proved that every continuous symmetry hides a conservation law. Content is fuel. It leaks. The procedures that decide what stays, what is retrieved under pressure, and what is corrected when it fails are the thing this year is for."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl leading-snug",
				children: "Attempt. Specific failure. Diagnose. Corrected attempt. Spaced review. Teach it."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "At month twelve you must take a domain you have never studied, run the engine for two weeks, and produce competence a stranger can verify. If you can, the year worked, regardless of how much computer science you covered."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Ten components"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 flex flex-col gap-2",
				children: COMPONENTS.map((component) => {
					const on = ledger.startedAt !== null && started >= component.month;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: component.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-mono text-xs", on ? "text-ok" : "text-muted"),
								children: on ? "Installed" : `Month ${component.month}`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: component.blurb
						})]
					}, component.n);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "The one-page rules"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-3",
				children: RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: rule.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: rule.body
				})] }, rule.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Hint ladder"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed",
				children: RUNGS.map((rung) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: rung }, rung))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "A model may"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted",
					children: AI_ALLOWED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "A model may not"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2 text-sm leading-relaxed",
						children: AI_FORBIDDEN.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "If you cannot delete the contribution and rewrite it from memory, you learned nothing."
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Debugging"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Installed in month two. Used forever. It separates programmers from people who follow tutorials."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed",
					children: DEBUG_STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "When you fall behind"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed",
					children: DEGRADE.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Never cut the daily loop, the struggle block, the gates, or the capstone. Those are the engine. The proof is output that resists faking: a leak-free allocator, a working CPU, a shell that handles pipes, a capstone someone else can run."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "This device"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "The ledger lives in this browser. Export it if the device might forget you. Nothing here is an account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: download,
						children: "Download the ledger"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-line px-4 text-sm",
						children: ["Replace from a file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "sr-only",
							onChange: (e) => onFile(e.target.files?.[0])
						})]
					})]
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: message
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					className: "mt-4",
					onClick: () => {
						if (window.confirm("Erase the ledger on this device? This cannot be undone.")) reset();
					},
					children: "Erase this ledger"
				})
			] })
		]
	});
}
//#endregion
export { LawPage as component };
