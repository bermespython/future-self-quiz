import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Wordmark } from "./brand-YL4vt9Mx.mjs";
import { s as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-TKVADA0b.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
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
				children: "Privacy Policy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4 text-[15px] leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This intake keeps answers in memory for the session. If you reserve a protocol, your email is written to local storage on this device so the confirmation screen can show it again." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not send answers, photos, or email to a server from this prototype. Do not enter real medical history you would not want stored in a browser." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clearing site data removes the reservation. The quiz does not use analytics pixels, and it does not sell information." })
				]
			})
		]
	});
}
//#endregion
export { Privacy as component };
