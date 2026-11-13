import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as cn } from "./cn-DbO63vPs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-D96EmiJo.js
var import_jsx_runtime = require_jsx_runtime();
function Button({ variant = "primary", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium", "transition duration-150 ease-out active:scale-95 disabled:pointer-events-none disabled:opacity-40", variant === "primary" && "bg-accent text-ink hover:opacity-90", variant === "ghost" && "border border-line bg-transparent text-fg hover:bg-elevated", variant === "quiet" && "bg-elevated text-fg hover:bg-surface", variant === "danger" && "border border-line bg-transparent text-alert hover:bg-elevated", className),
		...props
	});
}
function Panel({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-xl border border-line bg-surface p-4", className),
		children
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-sm text-muted",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-sm leading-snug text-muted",
				children: hint
			}) : null
		]
	});
}
var fieldClass = "min-h-11 w-full rounded-md border border-line bg-bg px-3 text-base text-fg outline-none placeholder:text-muted";
function Area(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "min-h-24 resize-y py-3 leading-normal", props.className),
		...props
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs tracking-wide text-muted",
		children
	});
}
//#endregion
export { Panel as a, Field as i, Button as n, fieldClass as o, Eyebrow as r, Area as t };
