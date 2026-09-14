import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-YL4vt9Mx.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var BRAND_PATHS = [
	"M153.332 181.713C214.161 183.945 225.88 142.09 226.996 122H237.6C224.653 182.271 261.144 181.862 315.801 184.465V194.876C226.996 187.768 217.188 209.428 217.188 235.846H204.674C203.558 193.991 171.748 191.014 153.332 192.874V181.713Z",
	"M410.548 382.83C349.719 380.598 338 422.453 336.884 442.543L326.28 442.543C339.227 382.272 300.051 381.714 267.125 383.388L267.125 371.11C329.314 377.891 348.289 353.223 348.289 325.092L358.456 325.092C359.572 366.947 392.132 373.529 410.548 371.668L410.548 382.83Z",
	"M131 295.561C191.829 297.793 203.549 255.938 204.665 235.848H217.188C215.383 301.485 219.492 285.973 274.423 295.003V307.28C213.036 299.467 192.387 317.325 192.387 365.319H180.11C186.249 307.28 149.416 304.862 131 306.722V295.561Z",
	"M432 265.486C371.171 263.254 359.451 305.109 358.335 325.199L348.29 325.199C348.29 275.6 344.033 269.591 282.745 262.381L282.745 250.103C358.335 258.775 371.729 233.676 370.613 196.286L382.89 196.286C364.474 269.393 399.074 254.325 432 254.325L432 265.486Z"
];
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "118 108 328 348",
		fill: "currentColor",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		focusable: "false",
		children: BRAND_PATHS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d }, d.slice(0, 24)))
	});
}
function Wordmark({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex shrink-0 items-baseline whitespace-nowrap text-fg", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: cn("mr-[0.16em] h-[0.78em] w-auto translate-y-[0.04em]", markClassName) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tracking-display",
				children: "future"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-self tracking-display",
				children: "self"
			})
		]
	});
}
//#endregion
export { Wordmark as n, cn as r, BRAND_PATHS as t };
