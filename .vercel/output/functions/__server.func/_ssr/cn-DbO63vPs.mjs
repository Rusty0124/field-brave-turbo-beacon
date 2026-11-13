import { i as __toESM } from "../_runtime.mjs";
import { J as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cn-DbO63vPs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var COMPONENTS = [
	{
		n: 1,
		name: "Daily loop",
		month: 1,
		blurb: "Setup, retrieval, input, struggle, consolidation, log. It runs whether or not you feel like it."
	},
	{
		n: 2,
		name: "Retrieval layer",
		month: 1,
		blurb: "Spaced cards, closed-book reconstruction, a Feynman pass. Declarative knowledge only. Skill is built in the struggle block."
	},
	{
		n: 3,
		name: "Difficulty regulator",
		month: 5,
		blurb: "Stay near eighty to eighty-five percent success. Twenty-minute rule, hint ladder, three-strike diagnosis."
	},
	{
		n: 4,
		name: "Feedback layer",
		month: 2,
		blurb: "Debugging protocol, tests as permanent feedback, code review, the delayed feedback slot, the failure card."
	},
	{
		n: 5,
		name: "Memory layer",
		month: 1,
		blurb: "Sleep and spacing. Seven to nine hours. Two nights under seven forces the minimum day."
	},
	{
		n: 6,
		name: "Diagnosis layer",
		month: 6,
		blurb: "Tells a hard problem from a broken engine. Three strikes, then a human at six failures."
	},
	{
		n: 7,
		name: "Identity layer",
		month: 1,
		blurb: "The identity is not someone who never misses. It is someone who returns. Never miss twice."
	},
	{
		n: 8,
		name: "Biological layer",
		month: 1,
		blurb: "Sleep, movement, food, recovery. Gates, not extras. Includes a stop rule for health."
	},
	{
		n: 9,
		name: "Review layer",
		month: 1,
		blurb: "Weekly review, monthly gate, external judgment. The engine watching itself."
	},
	{
		n: 10,
		name: "Transfer layer",
		month: 12,
		blurb: "Structural mapping, teaching, and the portability test. The year was never only computer science."
	}
];
var TEMPLATES = {
	A: {
		name: "Standard",
		span: "90–120 min",
		summary: "The default day. Five of these, plus one deep day, plus one recovery day.",
		blocks: [
			{
				title: "Setup",
				minutes: 5,
				kind: "setup",
				instruction: "Open the editor. Write today’s single objective if you have not. Phone in another room. Close every tab that is not the task. If setup is broken, fix setup. Nothing else matters until the desk works."
			},
			{
				title: "Retrieval",
				minutes: 10,
				kind: "retrieve",
				instruction: "Clear the card queue. Do not add cards now. Cards are a warm start, not the work."
			},
			{
				title: "Consume",
				minutes: 40,
				kind: "consume",
				instruction: "One section, never a chapter. If a diagram needs scrolling, redraw it on one page. Close the source. Write five sentences from memory. Then the first exercise, closed book. Do not highlight."
			},
			{
				title: "Break",
				minutes: 5,
				kind: "break",
				instruction: "Stand up. Walk. No screen."
			},
			{
				title: "Struggle",
				minutes: 45,
				kind: "struggle",
				instruction: "Closed book. The weakest sub-skill, or the project. No solution for twenty minutes. Log every stuck point in one line as it happens."
			},
			{
				title: "Consolidate",
				minutes: 10,
				kind: "consolidate",
				instruction: "Say the hardest idea out loud. A stumble is the gap. Card that gap, and nothing else. One to three new cards. Five is the ceiling."
			},
			{
				title: "Shutdown",
				minutes: 5,
				kind: "log",
				instruction: "Five lines. Built, stuck, next, sleep, movement. If tomorrow is empty, add the exact file you will open when you return."
			}
		]
	},
	B: {
		name: "Deep",
		span: "about 3 hr",
		summary: "One day a week. Projects finish here. Extend the project block if the deliverable needs it.",
		blocks: [
			{
				title: "Retrieval",
				minutes: 15,
				kind: "retrieve",
				instruction: "Cards, then the deliverable for today in one sentence. Name the artifact before you touch it."
			},
			{
				title: "Consume",
				minutes: 30,
				kind: "consume",
				instruction: "Only what the deliverable requires. Five sentences from memory, then close the source."
			},
			{
				title: "Break",
				minutes: 15,
				kind: "break",
				instruction: "Leave the desk. Eat if you have not. No screens."
			},
			{
				title: "Project",
				minutes: 60,
				kind: "project",
				instruction: "A hard deliverable, defined before this block. Add thirty minutes if the shippable slice is not done. Do not open a second project."
			},
			{
				title: "Break",
				minutes: 15,
				kind: "break",
				instruction: "Walk. The second block is colder on purpose."
			},
			{
				title: "Second struggle",
				minutes: 30,
				kind: "struggle",
				instruction: "A timed problem set or a refactor. Closed book. Same twenty-minute rule."
			},
			{
				title: "Consolidate",
				minutes: 10,
				kind: "consolidate",
				instruction: "Feynman pass on the hardest idea. Cards only for gaps."
			},
			{
				title: "Shutdown",
				minutes: 5,
				kind: "log",
				instruction: "Built, stuck, next. The re-entry line matters more after a long day."
			}
		]
	},
	C: {
		name: "Floor",
		span: "15 min",
		summary: "Sick, traveling, a long shift, or two bad nights. A floor, not a rest day. A week of these is recoverable. Three weeks is the stop rule.",
		blocks: [{
			title: "Retrieval",
			minutes: 10,
			kind: "retrieve",
			instruction: "Ten minutes of cards. Nothing new."
		}, {
			title: "Return",
			minutes: 5,
			kind: "log",
			instruction: "Reread yesterday’s log. Write one sentence about tomorrow. A missed day is information, not identity."
		}]
	},
	D: {
		name: "Recovery",
		span: "light",
		summary: "One a week. No new material. No hard problems. Sleep, movement, and a person count as the engine.",
		blocks: [
			{
				title: "Light retrieval",
				minutes: 10,
				kind: "retrieve",
				instruction: "Ten minutes maximum. Stop even if the queue remains."
			},
			{
				title: "Recovery",
				minutes: 20,
				kind: "recover",
				instruction: "Read something enjoyable about computing, or tidy notes and code. Then the weekly review if it is due. Do not start a new section."
			},
			{
				title: "Shutdown",
				minutes: 5,
				kind: "log",
				instruction: "Note what you tidied and when you will be back. Movement and sleep still get a line."
			}
		]
	}
};
var RUNGS = [
	"Reread the problem and your own notes. Nothing else.",
	"Restate it. Write input and output for three cases.",
	"Draw it on paper. One page.",
	"Write the brute force. Say why it is slow.",
	"Ask only for a category. What class of technique applies. Not a solution.",
	"Ask for a sub-step. What is the first move, or what invariant should hold.",
	"Read the first three lines of a solution. Close it. Continue alone.",
	"Read the full solution. Close it. Reimplement from scratch without looking. Write a failure card. Redo this problem in three days, and again in ten.",
	"You needed the full solution. The redo is the work now, not another new problem."
];
var MONTHS = [
	{
		n: 1,
		title: "Python and the machine",
		engine: "Installs the daily loop, retrieval, memory, identity, biology, and review.",
		installs: [
			1,
			2,
			5,
			7,
			8,
			9
		],
		content: [
			{
				tier: "core",
				text: "Python Crash Course, chapters 1–8, or Think Python 1–7."
			},
			{
				tier: "core",
				text: "The Linux Command Line, chapters 1–10."
			},
			{
				tier: "standard",
				text: "Book of Proof, chapters 1 and 2."
			}
		],
		project: {
			tier: "core",
			name: "Command-line habit tracker",
			brief: "JSON storage, argparse, five pytest tests, a README a stranger can follow."
		},
		gate: {
			minutes: 45,
			title: "Gate one",
			prompt: "From a blank file, no search except one library’s syntax.",
			checks: [
				"Read a CSV",
				"Computed a summary statistic per category",
				"Wrote the results out",
				"Finished inside forty-five minutes",
				"Used no search except one library’s syntax"
			]
		}
	},
	{
		n: 2,
		title: "Objects, testing, debugging",
		engine: "Installs the feedback layer. The most important installation of the early year.",
		installs: [4],
		content: [
			{
				tier: "core",
				text: "Python Crash Course 9–11, or Think Python 9–13."
			},
			{
				tier: "standard",
				text: "Linux Command Line 11–16."
			},
			{
				tier: "standard",
				text: "Exercism, Python track."
			}
		],
		project: {
			tier: "core",
			name: "Text adventure engine",
			brief: "Save and load, and twenty tests."
		},
		gate: {
			minutes: 30,
			title: "Gate two",
			prompt: "An unfamiliar hundred-line program. Debugger only.",
			checks: [
				"Found three planted bugs",
				"Fixed all three",
				"Used the debugger, not print-debugging",
				"Finished inside thirty minutes"
			]
		}
	},
	{
		n: 3,
		title: "Data, plots, and the web as input",
		engine: "Hardens feedback on ambiguous, messy input.",
		installs: [],
		content: [
			{
				tier: "standard",
				text: "Python Crash Course 15–17."
			},
			{
				tier: "standard",
				text: "Automate the Boring Stuff: regular expressions and scraping."
			},
			{
				tier: "optional",
				text: "Book of Proof, chapters 5 and 6."
			}
		],
		project: {
			tier: "standard",
			name: "Data pipeline and one-page report",
			brief: "Rerunnable with one command. Raw data cached."
		},
		gate: {
			minutes: 45,
			title: "Gate three",
			prompt: "An unfamiliar messy CSV. Explain each decision out loud.",
			checks: [
				"Cleaned an unfamiliar messy CSV",
				"Produced a chart",
				"Explained each cleaning decision out loud",
				"Finished inside forty-five minutes"
			]
		}
	},
	{
		n: 4,
		title: "Git, SQL, and shipping",
		engine: "Hardens review with the first formal gate. Git becomes the audit trail.",
		installs: [],
		content: [
			{
				tier: "core",
				text: "Pro Git, chapters 1–3."
			},
			{
				tier: "core",
				text: "SQLBolt, or the Mode SQL tutorial."
			},
			{
				tier: "standard",
				text: "Linux Command Line 17–24."
			}
		],
		project: {
			tier: "core",
			name: "Personal finance tracker",
			brief: "SQLite, three normalized tables, raw SQL summaries, CSV import, tests."
		},
		gate: {
			minutes: 120,
			title: "Foundation exam",
			prompt: "Two hours, closed book. Below seventy percent, consolidate for two weeks. The only gate where delay is acceptable.",
			note: "Below seventy percent, do not advance. Consolidate for two weeks and retake.",
			checks: [
				"Wrote a program with classes, file I/O, error handling, and tests",
				"Answered twenty questions on Git and SQL",
				"Explained list versus dictionary, exceptions, and unit tests out loud",
				"Fixed a bug in an unfamiliar repository with the debugger",
				"Scored at least seventy percent"
			]
		}
	},
	{
		n: 5,
		title: "Thinking in algorithms",
		engine: "Installs the difficulty regulator.",
		installs: [3],
		content: [
			{
				tier: "core",
				text: "Think Like a Programmer, chapters 1–5."
			},
			{
				tier: "standard",
				text: "Grokking Algorithms 1–5."
			},
			{
				tier: "standard",
				text: "CSES introductory problems."
			}
		],
		project: {
			tier: "optional",
			name: "Pathfinding visualizer",
			brief: "Breadth-first search, depth-first search, and Dijkstra, from scratch."
		},
		gate: {
			minutes: 60,
			title: "Gate five",
			prompt: "Approach explained out loud before any code.",
			checks: [
				"Solved two unseen easy problems",
				"Solved one medium",
				"Explained the approach out loud first",
				"Finished inside sixty minutes"
			]
		}
	},
	{
		n: 6,
		title: "Complexity and core data structures",
		engine: "Begins diagnosis. Three-strike rule, escalation valve, and the portability dry run.",
		installs: [6],
		content: [
			{
				tier: "core",
				text: "Grokking Algorithms 6–10."
			},
			{
				tier: "standard",
				text: "OpenDSA, or the first half of Weiss."
			},
			{
				tier: "optional",
				text: "Book of Proof, chapter 10, induction."
			}
		],
		project: {
			tier: "optional",
			name: "Connect Four",
			brief: "Minimax and alpha-beta pruning."
		},
		gate: {
			minutes: 40,
			title: "Gate six",
			prompt: "From scratch. Explain amortized complexity.",
			checks: [
				"Implemented a hash map from scratch",
				"Handled collisions",
				"Resized it",
				"Explained amortized complexity",
				"Finished the implementation inside forty minutes"
			]
		}
	},
	{
		n: 7,
		title: "The machine, C, and Nand2Tetris",
		engine: "Hard-material tolerance. This is where most self-study collapses. The engine must not.",
		installs: [],
		content: [
			{
				tier: "core",
				text: "Nand2Tetris projects 1–5. Move project 5 to month eight if you fall behind."
			},
			{
				tier: "standard",
				text: "The C Programming Language 1–3, or Modern C 1–6."
			},
			{
				tier: "core",
				text: "gcc, make, gdb, valgrind."
			}
		],
		project: {
			tier: "core",
			name: "Nand2Tetris CPU",
			brief: "CPU passing the official tests, plus one clean C utility under valgrind. Drop the utility if time is short. The CPU is the point."
		},
		gate: {
			minutes: 20,
			title: "Gate seven",
			prompt: "From memory, then a real leak.",
			checks: [
				"Explained the path from NAND gate to CPU from memory",
				"Found a use-after-free with valgrind",
				"Fixed it",
				"Finished the valgrind repair inside twenty minutes"
			]
		}
	},
	{
		n: 8,
		title: "Memory, pointers, and systems C",
		engine: "Installs the rebuild-from-scratch protocol.",
		installs: [],
		content: [
			{
				tier: "core",
				text: "CS:APP chapters 1–3."
			},
			{
				tier: "standard",
				text: "CS:APP chapter 6."
			},
			{
				tier: "standard",
				text: "Nand2Tetris project 6, the assembler."
			}
		],
		project: {
			tier: "core",
			name: "Tiny shell in C",
			brief: "fork, execvp, wait, pipes, redirection, Ctrl-C. No leaks."
		},
		gate: {
			minutes: 45,
			title: "Gate eight",
			prompt: "Explain the stack at the moment of the crash.",
			checks: [
				"Found an off-by-one with a debugger",
				"Found a buffer overflow",
				"Explained the stack at the crash"
			]
		}
	},
	{
		n: 9,
		title: "Data structures from scratch",
		engine: "Rebuild-from-scratch becomes a habit.",
		installs: [],
		content: [{
			tier: "core",
			text: "Your own implementations. Weiss or OpenDSA as reference, not as a script."
		}],
		project: {
			tier: "optional",
			name: "A malloc",
			brief: "On a mapped region, with a free list and coalescing.",
			alt: "If the malloc is cut: a dynamic array, a hash map, and a queue in C, with tests. Same lesson, a third of the time."
		},
		gate: {
			minutes: 60,
			title: "Gate nine",
			prompt: "Leak free. Then teach it.",
			checks: [
				"Implemented a hash map with resizing in C",
				"Finished inside sixty minutes",
				"Valgrind reports no leaks",
				"Explained virtual memory and a cache line to a non-programmer in three minutes"
			]
		}
	},
	{
		n: 10,
		title: "Operating systems",
		engine: "Diagnosis under probabilistic, non-deterministic failure.",
		installs: [],
		content: [{
			tier: "standard",
			text: "OSTEP, virtualization and concurrency."
		}, {
			tier: "core",
			text: "Core subset if time is short: processes, scheduling, paging, threads, locks, condition variables."
		}],
		project: {
			tier: "optional",
			name: "Three races",
			brief: "Reproduce three race conditions and fix them."
		},
		gate: {
			minutes: 30,
			title: "Gate ten",
			prompt: "A non-programmer should be able to follow the explanation.",
			checks: ["Explained a race condition to a non-programmer", "Identified a race from a code sample"]
		}
	},
	{
		n: 11,
		title: "Networks and databases",
		engine: "The engine leaves a single machine and reasons about external systems.",
		installs: [],
		content: [
			{
				tier: "standard",
				text: "Computer Networking: A Top-Down Approach, chapters 1–4, or Beej’s Guide."
			},
			{
				tier: "standard",
				text: "Use The Index, Luke, plus a SQLBolt review."
			},
			{
				tier: "core",
				text: "Core subset if time is short: sockets, HTTP, indexes, transactions, ACID."
			}
		],
		project: {
			tier: "core",
			name: "HTTP server",
			brief: "Static files, MIME types, 404 and 500, logging, concurrent connections, a thousand-request load test."
		},
		gate: {
			minutes: 40,
			title: "Gate eleven",
			prompt: "From the browser’s request to a served byte, then an unfamiliar schema.",
			checks: ["Explained the path from a browser request to a served byte", "Wrote a join with an aggregate against an unfamiliar schema"]
		}
	},
	{
		n: 12,
		title: "Capstone and the transfer layer",
		engine: "Installs transfer. Runs the portability test for real. Budget about thirty-six hours.",
		installs: [10],
		content: [
			{
				tier: "core",
				text: "One capstone, sized honestly. One-sentence MVP before any code. Ship it by the end of week two."
			},
			{
				tier: "core",
				text: "Weeks three and four: robustness, documentation, deploy. Then stop adding features."
			},
			{
				tier: "core",
				text: "Final days: a 1,500-word retrospective, a README a stranger can follow, a ten-minute demo, the year-end exam, the portability test."
			}
		],
		project: {
			tier: "core",
			name: "Capstone",
			brief: "A user can do one core action and see one core result. Everything else is version two."
		},
		gate: {
			minutes: 240,
			title: "Year-end exam",
			prompt: "An engine diagnostic, not a trivia exam. The pass is whether you can name your weaknesses and write a corrective plan.",
			checks: [
				"Hash map and dynamic array from scratch in C, with tests, leak free (60 min)",
				"One unseen medium problem, complexity explained (45 min)",
				"Drew NAND gate to CPU to process to system call to socket to HTTP response (45 min)",
				"A join with an aggregate against an unfamiliar schema (30 min)",
				"Debugged an unfamiliar two-hundred-line program with three planted bugs (30 min)",
				"Explained the capstone to a non-programmer, then to an expert (30 min)",
				"Wrote a corrective plan from the misses"
			]
		}
	}
];
var CAPSTONES = [
	{
		id: "A",
		name: "Full-stack application",
		note: "Authentication, deployed, tests, continuous integration. Realistic if you use a framework."
	},
	{
		id: "B",
		name: "Tree-walking interpreter",
		note: "Crafting Interpreters through chapter 13. Not the bytecode virtual machine."
	},
	{
		id: "D",
		name: "Ray tracer in C",
		note: "Realistic at a reduced scope."
	},
	{
		id: "E",
		name: "A small learning project",
		note: "Proper evaluation and a written failure analysis. Realistic."
	}
];
var FIRST_30 = [
	"Install Python, VS Code, Git, and a card app. Create the working folder, initialize Git, write three one-line programs, create the log. If installation breaks, stop and fix it.",
	"Python Crash Course 1 and 2. Five tiny scripts. Learn cd, ls, pwd, mkdir, cat. Commit.",
	"Chapter 3, lists. Five closed-book exercises. Learn grep and pipes. Commit.",
	"Chapter 4, lists and loops. Rewrite yesterday with loops. Five cards from mistakes. Commit.",
	"Chapter 5, if statements. Five exercises. Create a deliberate bug, fix it, log it. Commit.",
	"Chapter 6, dictionaries. Five exercises. Read one manual page fully. Commit.",
	"Weekly review. Cards. Read the log. Pick next week’s weakest skill. Rest.",
	"Chapter 7, input and while. Build a number guessing game with validation. Commit.",
	"Chapter 8, functions. Refactor the game into functions. Commit.",
	"Git branching. Create a branch, change it, merge it, then create and resolve a conflict on purpose. Commit.",
	"Stack traces. Cause a name error, a type error, and an index error. Read each, fix each, card each.",
	"Design project one on paper. Commands, data structure, file format.",
	"Project one. JSON load and save, add command. Commit.",
	"Weekly review. Project one list and complete. Commit. Rest.",
	"Project one, streak command, the hardest logic. Tests first. Commit.",
	"Project one, argparse and corrupt-file handling. Commit.",
	"Project one, pytest suite with five tests. Commit.",
	"Project one README and refactor. Ship it. Tag version one. Post it for review.",
	"Linux Command Line 1–3. Drills. Commit a cheatsheet.",
	"Linux 4 and 5. Permissions and processes. Drills.",
	"Weekly review. Rest.",
	"Python Crash Course 9, classes. Rewrite project one’s data handling as a class, on a branch.",
	"Finish the rewrite, merge, cards on classes versus dictionaries.",
	"Book of Proof chapter 1, sets. Ten exercises. The math on-ramp.",
	"Chapter 1 continued. Logic, statements, truth tables.",
	"Debugger day. Breakpoints, stepping, one real bug fixed.",
	"Chapter 10, files and exceptions, or review. Five exception drills.",
	"Weekly review. Read the whole month’s log. Rest.",
	"Gate one, practice, timed, closed book.",
	"Gate one for real. Log the result. Half a page of reflection."
];
var CLAIMS = [
	"Skill is built by retrieval under difficulty, not by exposure. Reading, watching, and highlighting feel like learning and are not.",
	"Competence is a feedback loop, not a trait. Attempt, specific failure, diagnosis, corrected attempt, spaced review, teach it.",
	"The engine transfers and the content does not. Computer science was the terrain. The engine is the asset."
];
var RULES = [
	{
		title: "Twenty minutes",
		body: "No solution, no hint, and no model for the first twenty minutes. Restate, exemplify, draw, brute-force, read the error. Do not search for the answer."
	},
	{
		title: "Never miss twice",
		body: "A missed day is information. If you miss twice, the next session is a floor day plus a written postmortem. The streak restarts at one. The identity is someone who returns."
	},
	{
		title: "Produce",
		body: "Half your time producing in phase one, rising toward ninety percent by phase four. If the cards are excellent and the projects are unfinished, the retrieval layer has become a comfort object."
	},
	{
		title: "One project",
		body: "One project at a time. A scope contract and a one-sentence MVP, written before code. If you miss the deadline by half, ship smaller, not later."
	},
	{
		title: "Cards are gaps",
		body: "Only card what you got wrong or could not reconstruct. Five new cards a day maximum. Reviews in ten to fifteen minutes. A failure card dies ninety days after the test exists in the codebase."
	},
	{
		title: "Out loud",
		body: "If you cannot explain it out loud without notes, you do not know it."
	},
	{
		title: "Do not advance with holes",
		body: "One weekly review. One monthly gate. Fail twice and you drop back a month and rebuild."
	},
	{
		title: "Three strikes, then a person",
		body: "The same sub-skill failing three times means stop and diagnose. Six times means the engine cannot see itself. Ask a human."
	},
	{
		title: "A stranger",
		body: "Every month, one artifact someone else has looked at. Record what they found. If they found nothing, the project was too small."
	},
	{
		title: "The stop rule",
		body: "Three consecutive weeks of floor days with no gate progress, or sleep and mood damaged for more than two weeks: stop for at least two weeks. If it persists, see a doctor. There is no gate worth a depressive episode."
	}
];
var AI_ALLOWED = [
	"Explain an error message after you have read it.",
	"Socratic questions, not answers.",
	"Style review after the code works.",
	"Generate practice problems.",
	"Be a rubber duck.",
	"Explain a concept after you have attempted it."
];
var AI_FORBIDDEN = [
	"A solution before twenty minutes of real attempt.",
	"Pasting a problem and asking for code.",
	"Keeping code you cannot rewrite from memory, line by line.",
	"Letting a model write your projects."
];
var DEBUG_STEPS = [
	"Read the entire error, bottom to top.",
	"Reproduce it. Find the smallest input that triggers it.",
	"Localize by binary search. Comment out half, then test.",
	"Inspect state in the debugger. Not another print.",
	"One-sentence hypothesis. Smallest experiment that could falsify it.",
	"Fix the cause, then search for the same pattern elsewhere.",
	"Add a test that would have caught it.",
	"One line in the log: date, symptom, cause, fix, lesson."
];
var DEGRADE = [
	"Cut every optional item still ahead.",
	"Cut standard items to the core subsets.",
	"Extend the year to eighteen months. Do not skip a core gate.",
	"If you still cannot keep pace, four standard days and one deep day. A smaller year, not a fake one."
];
function monthByNumber(n) {
	return MONTHS.find((m) => m.n === n);
}
function phaseFor(month) {
	if (month <= 3) return {
		label: "Phase one",
		consume: 40,
		struggle: 60
	};
	if (month <= 6) return {
		label: "Phase two",
		consume: 25,
		struggle: 75
	};
	if (month <= 9) return {
		label: "Phase three",
		consume: 20,
		struggle: 80
	};
	return {
		label: "Phase four",
		consume: 10,
		struggle: 90
	};
}
function monthLength(pace) {
	return pace === "eighteen" ? 45 : 30;
}
function todayISO(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function parseISO(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function addDays(iso, n) {
	const dt = parseISO(iso);
	dt.setDate(dt.getDate() + n);
	return todayISO(dt);
}
function daysBetween(a, b) {
	const ms = parseISO(b).getTime() - parseISO(a).getTime();
	return Math.round(ms / 864e5);
}
function weekSunday(iso) {
	return addDays(iso, -parseISO(iso).getDay());
}
function formatLong(iso) {
	return parseISO(iso).toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
function formatShort(iso) {
	return parseISO(iso).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
function weekday(iso) {
	return parseISO(iso).toLocaleDateString("en-US", { weekday: "short" });
}
var emptyRun = () => ({
	domain: "",
	loop: false,
	tasks: false,
	diagnose: false,
	artifact: false,
	notes: "",
	done: false
});
var initialLedger = () => ({
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
	portability: emptyRun()
});
function upsert(rows, row) {
	const i = rows.findIndex((r) => r.date === row.date);
	if (i === -1) return [...rows, row];
	const next = rows.slice();
	next[i] = row;
	return next;
}
var useNoether = create()(persist((set, get) => ({
	ledger: initialLedger(),
	beginYear: (pace) => set((s) => ({ ledger: {
		...s.ledger,
		startedAt: s.ledger.startedAt ?? todayISO(),
		pace,
		focusMonth: s.ledger.focusMonth || 1
	} })),
	setPace: (pace) => set((s) => ({ ledger: {
		...s.ledger,
		pace
	} })),
	setFocusMonth: (month) => set((s) => ({ ledger: {
		...s.ledger,
		focusMonth: Math.min(12, Math.max(1, month))
	} })),
	setCapstone: (id) => set((s) => ({ ledger: {
		...s.ledger,
		capstone: id
	} })),
	setSleep: (date, hours) => set((s) => ({ ledger: {
		...s.ledger,
		sleep: upsert(s.ledger.sleep, {
			date,
			hours
		})
	} })),
	setMovement: (date, yes) => set((s) => ({ ledger: {
		...s.ledger,
		movement: upsert(s.ledger.movement, {
			date,
			yes
		})
	} })),
	startSession: (template, objective, date) => set((s) => ({ ledger: {
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
			hintsUnlocked: false
		}
	} })),
	pauseSession: () => set((s) => {
		const session = s.ledger.session;
		if (!session) return s;
		const now = Date.now();
		if (session.paused) return { ledger: {
			...s.ledger,
			session: {
				...session,
				paused: false,
				blockStartedAt: now
			}
		} };
		return { ledger: {
			...s.ledger,
			session: {
				...session,
				paused: true,
				bankedBlockMs: session.bankedBlockMs + (now - session.blockStartedAt)
			}
		} };
	}),
	extendBlock: () => set((s) => {
		const session = s.ledger.session;
		if (!session) return s;
		return { ledger: {
			...s.ledger,
			session: {
				...session,
				extraMinutes: session.extraMinutes + 30
			}
		} };
	}),
	completeBlock: () => set((s) => {
		const session = s.ledger.session;
		if (!session) return s;
		const now = Date.now();
		const elapsed = session.paused ? session.bankedBlockMs : session.bankedBlockMs + (now - session.blockStartedAt);
		const blocks = TEMPLATES[session.template].blocks;
		const next = session.blockIndex + 1;
		return { ledger: {
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
				hintsUnlocked: false
			}
		} };
	}),
	addStuck: (line) => set((s) => {
		const session = s.ledger.session;
		const trimmed = line.trim();
		if (!session || !trimmed) return s;
		return { ledger: {
			...s.ledger,
			session: {
				...session,
				stuck: [...session.stuck, trimmed]
			}
		} };
	}),
	unlockHints: () => set((s) => {
		const session = s.ledger.session;
		if (!session) return s;
		return { ledger: {
			...s.ledger,
			session: {
				...session,
				hintsUnlocked: true,
				hintRung: Math.max(1, session.hintRung)
			}
		} };
	}),
	advanceRung: () => set((s) => {
		const session = s.ledger.session;
		if (!session) return s;
		const next = session.hintRung <= 0 ? 2 : Math.min(9, session.hintRung + 1);
		return { ledger: {
			...s.ledger,
			session: {
				...session,
				hintRung: next,
				hintsUnlocked: true
			}
		} };
	}),
	closeDay: (entry) => set((s) => ({ ledger: {
		...s.ledger,
		logs: upsert(s.ledger.logs, entry).sort((a, b) => a.date.localeCompare(b.date)),
		session: s.ledger.session?.date === entry.date ? null : s.ledger.session
	} })),
	abandonSession: () => set((s) => ({ ledger: {
		...s.ledger,
		session: null
	} })),
	saveGate: (gate) => set((s) => {
		const gates = s.ledger.gates.filter((g) => g.month !== gate.month).concat(gate);
		const advance = gate.passed === true && gate.external.trim().length > 0 && gate.month === s.ledger.focusMonth && gate.month < 12;
		return { ledger: {
			...s.ledger,
			gates,
			focusMonth: advance ? gate.month + 1 : s.ledger.focusMonth
		} };
	}),
	saveProject: (project) => set((s) => ({ ledger: {
		...s.ledger,
		projects: s.ledger.projects.filter((p) => p.month !== project.month).concat(project)
	} })),
	addCard: ({ front, back, kind }) => {
		const today = todayISO();
		if (get().ledger.cards.filter((c) => c.created === today).length >= 5 || !front.trim() || !back.trim()) return false;
		const card = {
			id: crypto.randomUUID(),
			front: front.trim(),
			back: back.trim(),
			kind,
			created: today,
			due: today,
			interval: 0,
			ease: 2.5,
			lapses: 0,
			testedOn: null
		};
		set((s) => ({ ledger: {
			...s.ledger,
			cards: [card, ...s.ledger.cards]
		} }));
		return true;
	},
	reviewCard: (id, rating) => set((s) => {
		const today = todayISO();
		const cards = s.ledger.cards.map((card) => {
			if (card.id !== id) return card;
			let { interval, ease, lapses } = card;
			if (rating === "again") {
				lapses += 1;
				interval = 1;
				ease = Math.max(1.3, ease - .2);
			} else if (rating === "good") interval = interval < 1 ? 1 : Math.max(1, Math.round(interval * ease));
			else {
				interval = interval < 1 ? 3 : Math.max(1, Math.round(interval * ease * 1.3));
				ease = Math.min(3, ease + .15);
			}
			return {
				...card,
				interval,
				ease,
				lapses,
				due: addDays(today, interval)
			};
		});
		return { ledger: {
			...s.ledger,
			cards,
			cardEvents: [...s.ledger.cardEvents, {
				date: today,
				rating
			}]
		} };
	}),
	deleteCard: (id) => set((s) => ({ ledger: {
		...s.ledger,
		cards: s.ledger.cards.filter((c) => c.id !== id)
	} })),
	markTestLanded: (id, date) => set((s) => ({ ledger: {
		...s.ledger,
		cards: s.ledger.cards.map((c) => c.id === id ? {
			...c,
			testedOn: date
		} : c)
	} })),
	saveReview: (review) => set((s) => ({ ledger: {
		...s.ledger,
		reviews: s.ledger.reviews.filter((r) => r.weekOf !== review.weekOf).concat(review).sort((a, b) => b.weekOf.localeCompare(a.weekOf))
	} })),
	savePostMortem: (entry) => set((s) => ({ ledger: {
		...s.ledger,
		postMortems: upsert(s.ledger.postMortems, entry)
	} })),
	saveRun: (which, run) => set((s) => ({ ledger: {
		...s.ledger,
		[which]: run
	} })),
	replaceLedger: (ledger) => set({ ledger }),
	resetLedger: () => set({ ledger: initialLedger() })
}), {
	name: "noether-ledger",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	partialize: (s) => ({ ledger: s.ledger }),
	version: 1
}));
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let alive = true;
		const done = () => {
			if (alive) setHydrated(true);
		};
		const unsub = useNoether.persist.onFinishHydration(done);
		if (useNoether.persist.hasHydrated()) done();
		else useNoether.persist.rehydrate();
		return () => {
			alive = false;
			unsub();
		};
	}, []);
	return hydrated;
}
function isLedger(value) {
	if (!value || typeof value !== "object") return false;
	const o = value;
	return (o.pace === "cut" || o.pace === "eighteen" || o.pace === "hours") && Array.isArray(o.logs) && Array.isArray(o.cards) && Array.isArray(o.gates) && Array.isArray(o.projects);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { todayISO as C, weekday as D, weekSunday as E, phaseFor as S, useNoether as T, formatShort as _, COMPONENTS as a, monthByNumber as b, FIRST_30 as c, RUNGS as d, TEMPLATES as f, formatLong as g, daysBetween as h, CLAIMS as i, MONTHS as l, cn as m, AI_FORBIDDEN as n, DEBUG_STEPS as o, addDays as p, CAPSTONES as r, DEGRADE as s, AI_ALLOWED as t, RULES as u, initialLedger as v, useHydrated as w, monthLength as x, isLedger as y };
