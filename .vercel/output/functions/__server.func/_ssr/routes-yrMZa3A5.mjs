import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as todayISO, D as weekday, E as weekSunday, S as phaseFor, T as useNoether, c as FIRST_30, d as RUNGS, f as TEMPLATES, g as formatLong, i as CLAIMS, l as MONTHS, m as cn, p as addDays } from "./cn-DbO63vPs.mjs";
import { c as floorRun, d as missesBefore, f as movedOn, h as programDay, i as allowedTemplate, l as forcesFloor, p as needsPostMortem, v as sleepOn } from "./router-BP6pJDRX.mjs";
import { a as Panel, i as Field, n as Button, o as fieldClass, r as Eyebrow, t as Area } from "./ui-D96EmiJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-yrMZa3A5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PACES = [
	{
		id: "cut",
		title: "Cut the content",
		note: "Default",
		body: "Drop the optional projects. Compress networks and databases. Keep the capstone small."
	},
	{
		id: "eighteen",
		title: "Eighteen months",
		note: "Keep it all",
		body: "The honest option for a true beginner. Same gates. About forty-five days to a month."
	},
	{
		id: "hours",
		title: "Raise the hours",
		note: "Burns out",
		body: "Six study days and two deep days. Possible for some. Recovery is still a gate."
	}
];
function Onboarding() {
	const begin = useNoether((s) => s.beginYear);
	const [pace, setPace] = (0, import_react.useState)("cut");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-muted",
					children: "Emmy Noether, 1882–1935"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl leading-tight text-fg",
					children: "A mind that can learn anything."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "One year. Computer science is the training ground because it resists faking. The engine is what transfers."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: CLAIMS.map((claim, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none text-muted",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: claim })]
				}, claim))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Choose the cost now."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "The terrain is seven to eight hundred hours. A humane week does not hold that. Decide before month seven does."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: PACES.map((item) => {
						const selected = pace === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPace(item.id),
							"aria-pressed": selected,
							className: cn("rounded-lg border px-3 py-3 text-left transition-colors duration-150", selected ? "border-fg bg-elevated" : "border-line bg-surface"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-fg",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-mono text-xs text-muted",
									children: item.note
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm leading-relaxed text-muted",
								children: item.body
							})]
						}, item.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: () => begin(pace),
					children: "Begin day one"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted",
					children: "The system starts the moment you open the editor."
				})]
			})
		]
	});
}
function LogForm({ initial, onSave, submitLabel }) {
	const [entry, setEntry] = (0, import_react.useState)(initial);
	const set = (patch) => setEntry((e) => ({
		...e,
		...patch
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-col gap-4",
		onSubmit: (event) => {
			event.preventDefault();
			onSave(entry);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Minutes",
				hint: "Hours are not a scoreboard. This is only so the week can be audited.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					value: entry.minutes,
					onChange: (e) => set({ minutes: Math.max(0, Number(e.target.value) || 0) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Built",
				hint: "What exists now that did not this morning.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					value: entry.built,
					onChange: (e) => set({ built: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Stuck",
				hint: "The specific failure, not a mood.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					value: entry.stuck,
					onChange: (e) => set({ stuck: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Next",
				hint: "The first action tomorrow. A file, a command, a problem.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					value: entry.next,
					onChange: (e) => set({ next: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Re-entry",
				hint: "If tomorrow is empty, the exact command or file you will open.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					value: entry.reentry,
					onChange: (e) => set({ reentry: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-center gap-3 text-sm text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: entry.anki,
					onChange: (e) => set({ anki: e.target.checked }),
					className: "size-4 accent-fg"
				}), "Cards cleared, or honestly attempted"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				children: submitLabel
			})
		]
	});
}
function elapsedMs(session, now) {
	if (session.paused) return session.bankedBlockMs;
	return session.bankedBlockMs + Math.max(0, now - session.blockStartedAt);
}
function formatClock(ms) {
	const total = Math.max(0, Math.ceil(ms / 1e3));
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function TodayView() {
	const ledger = useNoether((s) => s.ledger);
	const setSleep = useNoether((s) => s.setSleep);
	const setMovement = useNoether((s) => s.setMovement);
	const startSession = useNoether((s) => s.startSession);
	const savePostMortem = useNoether((s) => s.savePostMortem);
	const today = todayISO();
	const startedAt = ledger.startedAt;
	if (!startedAt) return null;
	const day = programDay(startedAt, today);
	const month = MONTHS[ledger.focusMonth - 1];
	const phase = phaseFor(ledger.focusMonth);
	const sleep = sleepOn(ledger, today);
	const moved = movedOn(ledger, today);
	const forced = allowedTemplate(ledger, today);
	const mortem = needsPostMortem(ledger, today);
	const existing = ledger.logs.find((l) => l.date === today);
	const session = ledger.session;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: formatLong(today) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: month ? month.title : "The year"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						phase.label,
						". About ",
						phase.consume,
						" reading, ",
						phase.struggle,
						" producing.",
						ledger.pace === "eighteen" ? " Forty-five days to a month." : "",
						ledger.pace === "hours" ? " This pace assumes six study days." : ""
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekStrip, {
				today,
				startedAt,
				logs: ledger.logs
			}),
			floorRun(ledger) >= 12 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Stop rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: "Twelve floor days in a row. The rule is to stop the year for at least two weeks. A year of study is not worth a depressive episode. If sleep or mood stay damaged, see a doctor."
			})] }) : null,
			forcesFloor(ledger, today) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Biological gate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: "Two nights under seven hours. Today is a floor day. That is a rule, not advice."
			})] }) : null,
			missesBefore(ledger, today) === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Yesterday is empty. Do not miss twice."
			}) : null,
			mortem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostMortem, {
				today,
				onSave: savePostMortem
			}) : null,
			session && session.date !== today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaleSession, { session }) : session && session.date === today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Runner, { session }) : existing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosedDay, { log: existing }) : mortem ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartDay, {
				today,
				sleep,
				moved,
				forced,
				onSleep: (hours) => setSleep(today, hours),
				onMove: (yes) => setMovement(today, yes),
				onStart: (template, objective) => startSession(forced ?? template, objective, today)
			}),
			day <= 30 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["First thirty · day ", day] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: FIRST_30[day - 1]
			})] }) : null,
			month ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/year/$month",
						params: { month: String(month.n) },
						className: "text-fg underline decoration-line underline-offset-4",
						children: [
							"Month ",
							month.n,
							" reference"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gate/$month",
						params: { month: String(month.n) },
						className: "text-fg underline decoration-line underline-offset-4",
						children: month.gate.title
					})
				]
			}) : null
		]
	});
}
function WeekStrip({ today, startedAt, logs }) {
	const days = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid grid-cols-7 gap-1",
		children: days.map((d) => {
			const log = logs.find((l) => l.date === d);
			const quiet = d < startedAt;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-mono text-xs text-muted",
					children: weekday(d).slice(0, 1)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mt-1 flex h-9 items-center justify-center rounded-md border font-mono text-xs tabular-nums", d === today ? "border-fg" : "border-line", log ? "bg-elevated text-fg" : "text-muted", quiet && "opacity-40"),
					children: log ? log.template : "·"
				})]
			}, d);
		})
	});
}
function PostMortem({ today, onSave }) {
	const [why, setWhy] = (0, import_react.useState)("");
	const [prevent, setPrevent] = (0, import_react.useState)("");
	const [smallest, setSmallest] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Reset, not a verdict" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-2xl",
			children: "You missed twice."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "The rule is not violated. It is reset. Answer, then the day is a floor day. The streak restarts at one."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-4 flex flex-col gap-4",
			onSubmit: (e) => {
				e.preventDefault();
				if (!why.trim() || !prevent.trim() || !smallest.trim()) return;
				onSave({
					date: today,
					why: why.trim(),
					prevent: prevent.trim(),
					smallest: smallest.trim()
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What made the second miss possible?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						value: why,
						onChange: (e) => setWhy(e.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What will make a third miss impossible?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						value: prevent,
						onChange: (e) => setPrevent(e.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What is the smallest possible session tomorrow?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						value: smallest,
						onChange: (e) => setSmallest(e.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Reset, and take the floor"
				})
			]
		})
	] });
}
function StartDay({ today, sleep, moved, forced, onSleep, onMove, onStart }) {
	const [template, setTemplate] = (0, import_react.useState)(forced ?? "A");
	const [objective, setObjective] = (0, import_react.useState)("");
	const [quick, setQuick] = (0, import_react.useState)(false);
	const closeDay = useNoether((s) => s.closeDay);
	const chosen = forced ?? template;
	(0, import_react.useEffect)(() => {
		if (forced) setTemplate(forced);
	}, [forced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Before the template" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Sleep last night"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "quiet",
							onClick: () => onSleep(Math.max(0, (sleep ?? 7) - .5)),
							"aria-label": "Less sleep",
							children: "−"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-16 text-center font-mono text-lg tabular-nums",
							children: sleep === null ? "—" : sleep.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "quiet",
							onClick: () => onSleep(Math.min(14, (sleep ?? 6.5) + .5)),
							"aria-label": "More sleep",
							children: "+"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Moved today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: moved === true ? "primary" : "ghost",
						onClick: () => onMove(true),
						children: "Yes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: moved === false ? "primary" : "ghost",
						onClick: () => onMove(false),
						children: "Not yet"
					})]
				})] })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: Object.keys(TEMPLATES).map((id) => {
					const spec = TEMPLATES[id];
					const selected = chosen === id;
					const disabled = forced !== null && id !== forced;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled,
						onClick: () => setTemplate(id),
						className: cn("min-h-14 rounded-lg border px-3 py-2 text-left", selected ? "border-fg bg-elevated" : "border-line bg-surface", disabled && "opacity-40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-mono text-xs text-muted",
							children: id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-lg leading-tight",
							children: spec.name
						})]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "One objective",
				hint: "One sentence. Mood is a liar. Energy picks the template.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					value: objective,
					placeholder: chosen === "C" || chosen === "D" ? "Return, and name tomorrow." : "What will exist when you stop?",
					onChange: (e) => setObjective(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				disabled: chosen !== "C" && chosen !== "D" && objective.trim().length === 0,
				onClick: () => onStart(chosen, objective.trim() || "Return."),
				children: "Begin the loop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: TEMPLATES[chosen].summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 text-sm text-muted underline decoration-line underline-offset-4",
				onClick: () => setQuick((v) => !v),
				children: quick ? "Hide the quick log" : "Log the day without the clock"
			}),
			quick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
				initial: {
					date: today,
					template: chosen,
					minutes: chosen === "C" ? 15 : chosen === "D" ? 20 : 90,
					objective: objective.trim(),
					built: "",
					stuck: "",
					next: "",
					reentry: "",
					sleep,
					movement: moved === true,
					anki: false
				},
				submitLabel: "Close the day",
				onSave: closeDay
			}) }) : null
		]
	});
}
function Runner({ session }) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [stuckLine, setStuckLine] = (0, import_react.useState)("");
	const pause = useNoether((s) => s.pauseSession);
	const extend = useNoether((s) => s.extendBlock);
	const complete = useNoether((s) => s.completeBlock);
	const addStuck = useNoether((s) => s.addStuck);
	const unlock = useNoether((s) => s.unlockHints);
	const advance = useNoether((s) => s.advanceRung);
	const closeDay = useNoether((s) => s.closeDay);
	const abandon = useNoether((s) => s.abandonSession);
	const ledger = useNoether((s) => s.ledger);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(id);
	}, []);
	const blocks = TEMPLATES[session.template].blocks;
	const done = session.blockIndex >= blocks.length;
	const block = blocks[Math.min(session.blockIndex, blocks.length - 1)];
	const budget = (block.minutes + session.extraMinutes) * 6e4;
	const spent = elapsedMs(session, now);
	const remain = budget - spent;
	const struggle = block.kind === "struggle" || block.kind === "project";
	const showLadder = struggle && (session.hintsUnlocked || spent >= 12e5);
	const shownRung = !showLadder ? 0 : session.hintRung <= 0 ? 1 : session.hintRung;
	if (done || block.kind === "log") {
		const total = session.dayMs + (block.kind === "log" ? spent : 0);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Shutdown" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "Close the day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: block.instruction
			}),
			session.stuck.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-1 text-sm text-muted",
				children: session.stuck.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${index}-${line}`))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
					initial: {
						date: session.date,
						template: session.template,
						minutes: Math.max(1, Math.round(total / 6e4)),
						objective: session.objective,
						built: "",
						stuck: session.stuck.join("\n"),
						next: "",
						reentry: "",
						sleep: sleepOn(ledger, session.date),
						movement: movedOn(ledger, session.date) === true,
						anki: true
					},
					submitLabel: "Close the day",
					onSave: closeDay
				})
			})
		] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						"Block ",
						session.blockIndex + 1,
						" of ",
						blocks.length
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted",
						children: session.template
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: block.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: block.instruction
				}),
				session.objective ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg",
					children: ["Objective. ", session.objective]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center font-mono text-6xl tabular-nums tracking-tight text-fg",
					children: formatClock(remain)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-muted",
					children: remain <= 0 ? "The ceiling is reached. Close the block when you are ready." : "A ceiling, not a prison. Close the block when the work is done."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: pause,
						children: session.paused ? "Resume" : "Pause"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: complete,
						children: "Close this block"
					})]
				}),
				struggle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "quiet",
					className: "mt-2 w-full",
					onClick: extend,
					children: "Add thirty minutes"
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex gap-1",
				"aria-hidden": "true",
				children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: cn("h-1.5 flex-1 rounded-full", i < session.blockIndex ? "bg-fg" : i === session.blockIndex ? "bg-muted" : "bg-line") }, `${b.title}-${i}`))
			}),
			struggle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Twenty-minute rule" }),
				!showLadder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-2xl tabular-nums",
						children: formatClock(12e5 - spent)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "No solution, no hint, no model. Restate, write three examples, draw it, try the brute force, read the error."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "mt-4 w-full",
						onClick: unlock,
						children: "I already spent twenty minutes on paper"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Rung ",
							shownRung,
							" of ",
							RUNGS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-relaxed",
						children: RUNGS[shownRung - 1]
					}),
					shownRung < RUNGS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "mt-4 w-full",
						onClick: advance,
						children: "This rung did not unstick me"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Reimplement from scratch. Schedule the same problem in three days and in ten."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						addStuck(stuckLine);
						setStuckLine("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: stuckLine,
						placeholder: "Stuck, one line",
						onChange: (e) => setStuckLine(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "quiet",
						children: "Log"
					})]
				}),
				session.stuck.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-1 text-sm text-muted",
					children: session.stuck.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${index}-${line}`))
				}) : null
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 text-sm text-muted",
				onClick: () => {
					if (window.confirm("Leave this loop without closing the day?")) abandon();
				},
				children: "Leave without closing"
			})
		]
	});
}
function StaleSession({ session }) {
	const abandon = useNoether((s) => s.abandonSession);
	const closeDay = useNoether((s) => s.closeDay);
	const ledger = useNoether((s) => s.ledger);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Unclosed loop" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-2 font-display text-3xl",
			children: [
				"This loop is from ",
				session.date,
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Close it as that day’s log, or discard it. Do not pretend it was today."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
				initial: {
					date: session.date,
					template: session.template,
					minutes: Math.max(1, Math.round(session.dayMs / 6e4)),
					objective: session.objective,
					built: "",
					stuck: session.stuck.join("\n"),
					next: "",
					reentry: "",
					sleep: sleepOn(ledger, session.date),
					movement: movedOn(ledger, session.date) === true,
					anki: false
				},
				submitLabel: "Close that day",
				onSave: closeDay
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "danger",
			className: "mt-3 w-full",
			onClick: abandon,
			children: "Discard the loop"
		})
	] });
}
function ClosedDay({ log }) {
	const [amend, setAmend] = (0, import_react.useState)(false);
	const closeDay = useNoether((s) => s.closeDay);
	const reviewDue = (/* @__PURE__ */ new Date()).getDay() === 0;
	const weekOf = weekSunday(log.date);
	const reviewed = useNoether((s) => s.ledger.reviews.some((r) => r.weekOf === weekOf));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Closed · template ", log.template] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: log.objective || "The day is closed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 flex flex-col gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Built"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "whitespace-pre-wrap",
						children: log.built || "—"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Stuck"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "whitespace-pre-wrap",
						children: log.stuck || "—"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "whitespace-pre-wrap",
						children: log.next || "—"
					})] }),
					log.reentry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Re-entry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: log.reentry })] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-xs text-muted",
				children: [
					log.minutes,
					" min · sleep ",
					log.sleep ?? "—",
					" · move ",
					log.movement ? "yes" : "no",
					" · cards ",
					log.anki ? "yes" : "no"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				className: "mt-4",
				onClick: () => setAmend((v) => !v),
				children: amend ? "Stop amending" : "Amend the log"
			}),
			amend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
					initial: log,
					onSave: closeDay,
					submitLabel: "Save the amendment"
				})
			}) : null
		] }), reviewDue && !reviewed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/review",
				className: "underline decoration-line underline-offset-4",
				children: "Sunday. Twenty minutes for the weekly review."
			})
		}) : null]
	});
}
function Home() {
	if (!useNoether((s) => s.ledger.startedAt)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayView, {});
}
//#endregion
export { Home as component };
