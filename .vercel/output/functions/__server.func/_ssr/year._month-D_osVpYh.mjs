import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as todayISO, T as useNoether, a as COMPONENTS, b as monthByNumber, c as FIRST_30, m as cn, r as CAPSTONES } from "./cn-DbO63vPs.mjs";
import { g as projectFor, h as programDay, n as Route } from "./router-BP6pJDRX.mjs";
import { a as Panel, i as Field, n as Button, o as fieldClass, r as Eyebrow, t as Area } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/year._month-D_osVpYh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function blank(n, name, brief) {
	return {
		month: n,
		name,
		purpose: brief,
		mvp: "",
		feature1: "",
		feature2: "",
		feature3: "",
		outOfScope: "",
		done: "README, tests on the silent parts, fifteen meaningful commits, a five-minute explanation without notes, one review from a person who did not write it.",
		deadline: "",
		status: "unstarted",
		reviewerFound: ""
	};
}
function tierNote(tier, pace) {
	if (tier === "optional" && pace === "cut") return "Set aside on this pace";
	if (tier === "standard" && pace === "cut") return "Keep unless you fall behind";
	return null;
}
function MonthPage() {
	const { month: raw } = Route.useParams();
	const n = Number(raw);
	const plan = monthByNumber(n);
	const ledger = useNoether((s) => s.ledger);
	const setFocus = useNoether((s) => s.setFocusMonth);
	const setCapstone = useNoether((s) => s.setCapstone);
	const saveProject = useNoether((s) => s.saveProject);
	const saved = projectFor(ledger, n);
	const [state, setState] = (0, import_react.useState)(null);
	if (plan && (state === null || state.n !== n)) setState({
		n,
		form: saved ?? blank(n, plan.project?.name ?? "Reading month", plan.project?.brief ?? "")
	});
	const form = state && state.n === n ? state.form : null;
	const set = (patch) => setState((current) => current && current.n === n ? {
		n,
		form: {
			...current.form,
			...patch
		}
	} : current);
	const day = ledger.startedAt ? programDay(ledger.startedAt, todayISO()) : 0;
	if (!plan) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "No such month."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/year",
		className: "mt-4 inline-flex min-h-11 items-center text-sm underline",
		children: "Back to the year"
	})] });
	if (!form) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Month ", String(plan.n).padStart(2, "0")] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: plan.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: plan.engine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: ledger.focusMonth === plan.n ? "primary" : "ghost",
						onClick: () => setFocus(plan.n),
						children: ledger.focusMonth === plan.n ? "Working month" : "Make this the working month"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gate/$month",
						params: { month: String(plan.n) },
						className: "inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm",
						children: plan.gate.title
					})]
				})
			] }),
			plan.installs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Engine installed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: plan.installs.map((id) => {
					const component = COMPONENTS.find((c) => c.n === id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: component?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-muted",
							children: component?.blurb
						})]
					}, id);
				})
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Content"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: plan.content.map((item) => {
					const note = tierNote(item.tier, ledger.pace);
					const aside = item.tier === "optional" && ledger.pace === "cut";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("rounded-lg border border-line px-3 py-3", aside && "opacity-60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted",
							children: [item.tier, note ? ` · ${note}` : ""]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm leading-relaxed",
							children: item.text
						})]
					}, item.text);
				})
			})] }),
			plan.n === 12 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Capstone, sized honestly"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "About thirty-six hours. A log-structured database is not realistic here. If you want that, you already chose eighteen months, and it is still a later cycle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: CAPSTONES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCapstone(option.id),
						className: cn("rounded-lg border px-3 py-3 text-left", ledger.capstone === option.id ? "border-fg bg-elevated" : "border-line"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: option.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: option.note
						})]
					}, option.id))
				})
			] }) : null,
			plan.project ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Scope contract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						plan.project.name,
						". ",
						plan.project.brief,
						plan.project.alt ? ` ${plan.project.alt}` : ""
					]
				}),
				tierNote(plan.project.tier, ledger.pace) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-xs text-muted",
					children: tierNote(plan.project.tier, ledger.pace)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 flex flex-col gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						saveProject(form);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								value: form.name,
								onChange: (e) => set({ name: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "One-sentence purpose",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								value: form.purpose,
								onChange: (e) => set({ purpose: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "One-sentence MVP",
							hint: "A user can do one core action and see one core result.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								value: form.mvp,
								onChange: (e) => set({ mvp: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Three features, maximum",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: fieldClass,
										value: form.feature1,
										onChange: (e) => set({ feature1: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: fieldClass,
										value: form.feature2,
										onChange: (e) => set({ feature2: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: fieldClass,
										value: form.feature3,
										onChange: (e) => set({ feature3: e.target.value })
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Explicitly out of scope",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								value: form.outOfScope,
								onChange: (e) => set({ outOfScope: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Definition of done",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								value: form.done,
								onChange: (e) => set({ done: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Deadline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								value: form.deadline,
								onChange: (e) => set({ deadline: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What a reviewer found",
							hint: "If they found nothing, the project was too small or too easy.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								value: form.reviewerFound,
								onChange: (e) => set({ reviewerFound: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								"unstarted",
								"building",
								"shipped"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => set({ status }),
								className: cn("min-h-11 rounded-md border text-sm capitalize", form.status === status ? "border-fg bg-elevated" : "border-line text-muted"),
								children: status
							}, status))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "If the deadline slips by half, ship the reduced version and move on. Unfinished projects teach less than finished small ones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: saved ? "Update the contract" : "Save the contract"
						})
					]
				})
			] }) : null,
			plan.n === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "The first thirty days"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 flex flex-col gap-2",
				children: FIRST_30.map((text, i) => {
					const nDay = i + 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("rounded-lg border px-3 py-3 text-sm leading-relaxed", day === nDay ? "border-fg bg-elevated" : "border-line"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted",
							children: ["Day ", nDay]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block",
							children: text
						})]
					}, text);
				})
			})] }) : null,
			plan.n === 6 || plan.n === 12 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/review",
					className: "underline decoration-line underline-offset-4",
					children: plan.n === 6 ? "Portability dry run, seven days." : "The portability test, two weeks."
				})
			}) : null
		]
	});
}
//#endregion
export { MonthPage as component };
