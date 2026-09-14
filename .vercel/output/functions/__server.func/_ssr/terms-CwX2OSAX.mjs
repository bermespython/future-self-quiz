import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Wordmark } from "./brand-YL4vt9Mx.mjs";
import { s as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CwX2OSAX.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "funnel-frame min-h-dvh px-5 pb-16 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Back",
					className: "press grid size-10 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-5",
						strokeWidth: 1.6
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-label text-subtle",
				children: "Legal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-medium tracking-title",
				children: "Terms of Service"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4 text-[15px] leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This prototype is a branded intake for the futureself hair restoration protocol. It is not a medical practice, pharmacy, or telehealth provider." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "GLP-1 receptor agonists (including semaglutide, tirzepatide, and liraglutide) are prescription medications. Hair restoration is not an FDA-approved indication for these compounds. Nothing in this quiz diagnoses a condition or dispenses a drug." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By continuing you agree that any protocol shown is conceptual, that a licensed clinician must review labs and history before treatment, and that futureself is not liable for decisions you make from this demonstration." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Reservation emails are stored only in your browser. No payment is processed here." })
				]
			})
		]
	});
}
//#endregion
export { Terms as component };
