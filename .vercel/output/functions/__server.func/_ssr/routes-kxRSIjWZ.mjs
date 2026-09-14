import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Wordmark, r as cn } from "./brand-YL4vt9Mx.mjs";
import { a as ChevronRight, c as ArrowLeftRight, i as CircleHelp, o as Check, r as Menu, s as ArrowLeft, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-kxRSIjWZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"age",
	"proof",
	"tried",
	"encourage",
	"goal",
	"showcase",
	"extras",
	"pattern",
	"duration",
	"severity",
	"analyze",
	"plan",
	"product",
	"reserve",
	"confirm"
];
var QUIZ_STEPS = [
	"tried",
	"goal",
	"extras",
	"pattern",
	"duration",
	"severity"
];
var STORAGE_KEY = "futureself-funnel";
function readPersisted() {
	if (typeof window === "undefined") return {};
	try {
		const raw = sessionStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		const data = JSON.parse(raw);
		if (data.step === "analyze") data.step = "plan";
		return data;
	} catch {
		return {};
	}
}
function writePersisted(s) {
	if (typeof window === "undefined" || !s.hydrated) return;
	try {
		const slice = {
			step: s.step,
			age: s.age,
			triedBefore: s.triedBefore,
			goal: s.goal,
			extras: s.extras,
			pattern: s.pattern,
			duration: s.duration,
			severity: s.severity,
			email: s.email,
			plan: s.plan,
			cartCount: s.cartCount
		};
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(slice));
	} catch {}
}
var useFunnel = create((set, get) => ({
	step: "age",
	direction: 1,
	menuOpen: false,
	helpOpen: false,
	cartCount: 0,
	hydrated: false,
	extras: [],
	email: "",
	plan: "12-week",
	setStep: (step, direction = 1) => set({
		step,
		direction,
		menuOpen: false
	}),
	next: () => {
		const { step } = get();
		const i = STEPS.indexOf(step);
		if (i >= 0 && i < STEPS.length - 1) set({
			step: STEPS[i + 1],
			direction: 1
		});
	},
	back: () => {
		const { step } = get();
		const i = STEPS.indexOf(step);
		if (i > 0) set({
			step: STEPS[i - 1],
			direction: -1
		});
	},
	hydrate: () => {
		if (get().hydrated) return;
		const p = readPersisted();
		set({
			hydrated: true,
			step: p.step ?? "age",
			cartCount: p.cartCount ?? 0,
			extras: p.extras ?? [],
			email: p.email ?? "",
			plan: p.plan ?? "12-week",
			age: p.age,
			triedBefore: p.triedBefore,
			goal: p.goal,
			pattern: p.pattern,
			duration: p.duration,
			severity: p.severity
		});
	},
	reset: () => {
		try {
			sessionStorage.removeItem(STORAGE_KEY);
		} catch {}
		set({
			step: "age",
			direction: 1,
			menuOpen: false,
			helpOpen: false,
			cartCount: 0,
			extras: [],
			email: "",
			plan: "12-week",
			age: void 0,
			triedBefore: void 0,
			goal: void 0,
			pattern: void 0,
			duration: void 0,
			severity: void 0,
			hydrated: true
		});
	},
	setAge: (age) => set({
		age,
		step: "proof",
		direction: 1
	}),
	setTried: (triedBefore) => set({
		triedBefore,
		step: "encourage",
		direction: 1
	}),
	setGoal: (goal) => set({
		goal,
		step: "showcase",
		direction: 1
	}),
	toggleExtra: (id) => set((s) => ({ extras: s.extras.includes(id) ? s.extras.filter((x) => x !== id) : [...s.extras, id] })),
	setPattern: (pattern) => set({
		pattern,
		step: "duration",
		direction: 1
	}),
	setDuration: (duration) => set({
		duration,
		step: "severity",
		direction: 1
	}),
	setSeverity: (severity) => set({
		severity,
		step: "analyze",
		direction: 1
	}),
	setEmail: (email) => set({ email }),
	setPlan: (plan) => set({ plan }),
	addToProtocol: () => set({
		cartCount: 1,
		step: "reserve",
		direction: 1
	}),
	setMenuOpen: (menuOpen) => set({ menuOpen }),
	setHelpOpen: (helpOpen) => set({ helpOpen })
}));
if (typeof window !== "undefined") useFunnel.subscribe((s) => writePersisted(s));
function stepKey(step) {
	return `${STEPS.indexOf(step)}-${step}`;
}
function recommendCompound(a) {
	if (a.severity === "severe" || a.severity === "advanced") return "tirzepatide";
	if (a.age === "50+" || a.triedBefore) return "liraglutide";
	return "semaglutide";
}
function ageLabel(age) {
	if (age === "18-29") return "their 20s";
	if (age === "30-39") return "their 30s";
	if (age === "40-49") return "their 40s";
	if (age === "50+") return "their 50s";
	return "their 40s";
}
function ageCount(age) {
	if (age === "18-29") return "420,000";
	if (age === "30-39") return "860,000";
	if (age === "40-49") return "1.4 million";
	if (age === "50+") return "610,000";
	return "1.4 million";
}
var TITLES = {
	tried: "My Profile",
	goal: "My Profile",
	extras: "My Profile",
	pattern: "My Profile",
	duration: "My Profile",
	severity: "My Profile",
	plan: "Your protocol",
	product: "futureself",
	reserve: "Reserve",
	confirm: "Reserved"
};
function FunnelHeader() {
	const step = useFunnel((s) => s.step);
	const back = useFunnel((s) => s.back);
	const setMenuOpen = useFunnel((s) => s.setMenuOpen);
	const cartCount = useFunnel((s) => s.cartCount);
	const setStep = useFunnel((s) => s.setStep);
	const quizIndex = QUIZ_STEPS.indexOf(step);
	const showBack = step !== "age";
	const title = TITLES[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 bg-bg",
		children: [step === "product" || step === "reserve" || step === "confirm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-14 items-center justify-between px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-[22px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					showBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: back,
						"aria-label": "Back",
						className: "press grid size-10 place-items-center text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-5",
							strokeWidth: 1.6
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setStep(cartCount ? "reserve" : "product"),
						className: "whitespace-nowrap rounded-sm bg-surface px-3 py-1.5 font-mono text-xs",
						children: ["Cart ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 tabular-nums",
							children: cartCount
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMenuOpen(true),
						"aria-label": "Menu",
						className: "press grid size-10 place-items-center text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							strokeWidth: 1.6
						})
					})
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-14 grid-cols-[2.5rem_1fr_2.5rem] items-center gap-1 px-3",
			children: [
				showBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: back,
					"aria-label": "Back",
					className: "press grid size-10 place-items-center text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-5",
						strokeWidth: 1.6
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [title === "My Profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-tight",
						children: "My Profile"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-[22px]" }), quizIndex >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex w-36 gap-1",
						"aria-hidden": "true",
						children: QUIZ_STEPS.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-[3px] flex-1 rounded-full", i <= quizIndex ? "bg-fg" : "bg-border") }, id))
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMenuOpen(true),
					"aria-label": "Menu",
					className: "press grid size-10 place-items-center justify-self-end text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-5",
						strokeWidth: 1.6
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" })]
	});
}
function FunnelMenu() {
	const open = useFunnel((s) => s.menuOpen);
	const setMenuOpen = useFunnel((s) => s.setMenuOpen);
	const reset = useFunnel((s) => s.reset);
	const setStep = useFunnel((s) => s.setStep);
	const cartCount = useFunnel((s) => s.cartCount);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 mx-auto flex max-w-[430px] flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center justify-between px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-[22px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMenuOpen(false),
					"aria-label": "Close menu",
					className: "press grid size-10 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						strokeWidth: 1.6
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-1 flex-col px-6 pt-10",
				children: [[
					{
						label: "Start over",
						action: () => reset()
					},
					{
						label: "Your protocol",
						action: () => setStep("plan")
					},
					{
						label: cartCount ? `Cart · ${cartCount}` : "Cart",
						action: () => setStep(cartCount ? "reserve" : "product")
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: item.action,
					className: "border-b border-border py-5 text-left text-2xl tracking-title",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-col gap-3 pb-10 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "underline-offset-4 hover:underline",
							onClick: () => setMenuOpen(false),
							children: "Terms of Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "underline-offset-4 hover:underline",
							onClick: () => setMenuOpen(false),
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-label",
							children: "Compound collection / Hair protocol"
						})
					]
				})]
			})
		]
	});
}
function HelpFab() {
	const setHelpOpen = useFunnel((s) => s.setHelpOpen);
	if (useFunnel((s) => s.step) !== "age") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setHelpOpen(true),
		"aria-label": "Help",
		className: "press absolute bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-ink-fg shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, {
			className: "size-5",
			strokeWidth: 1.6
		})
	});
}
function HelpDialog() {
	const open = useFunnel((s) => s.helpOpen);
	const setHelpOpen = useFunnel((s) => s.setHelpOpen);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-fg/40 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "funnel-frame w-full rounded-t-3xl bg-bg px-6 pb-10 pt-5 sm:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-5 h-1 w-10 rounded-full bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl tracking-title",
						children: "About this protocol"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHelpOpen(false),
						"aria-label": "Close",
						className: "press grid size-9 place-items-center rounded-full bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-muted",
					children: "futureself matches a GLP-1 compound to your hair-loss pattern. This quiz is a prototype intake — not a diagnosis. A licensed clinician reviews every protocol before anything is dispensed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-muted",
					children: "GLP-1 medications are prescription-only. Hair restoration is not an FDA-approved indication for these compounds."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setHelpOpen(false),
					className: "press mt-6 flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm uppercase tracking-wide text-ink-fg",
					children: "Got it"
				})
			]
		})
	});
}
var AGES = [
	{
		id: "18-29",
		label: "Age: 18–29",
		image: "/images/age-18.jpg"
	},
	{
		id: "30-39",
		label: "Age: 30–39",
		image: "/images/age-30.jpg"
	},
	{
		id: "40-49",
		label: "Age: 40–49",
		image: "/images/age-40.jpg"
	},
	{
		id: "50+",
		label: "Age: 50+",
		image: "/images/age-50.jpg"
	}
];
var GOALS = [
	{
		id: "reverse",
		label: "Reverse thinning",
		icon: "strands"
	},
	{
		id: "hairline",
		label: "Restore my hairline",
		icon: "hairline"
	},
	{
		id: "shedding",
		label: "Stop the shedding",
		icon: "drop"
	},
	{
		id: "maintain",
		label: "Maintain the density I have",
		icon: "shield"
	}
];
var EXTRAS = [
	{
		id: "strength",
		label: "Thicker, stronger strands",
		icon: "strands"
	},
	{
		id: "posture",
		label: "A fuller, defined hairline",
		icon: "hairline"
	},
	{
		id: "stress",
		label: "Less anxiety about shedding",
		icon: "calm"
	},
	{
		id: "energy",
		label: "A healthier scalp",
		icon: "scalp"
	},
	{
		id: "flex",
		label: "More freedom in how I style",
		icon: "style"
	},
	{
		id: "sleep",
		label: "Confidence in the morning mirror",
		icon: "mirror"
	}
];
var PATTERNS = [
	{
		id: "hairline",
		label: "Receding hairline",
		image: "/images/pattern-hairline.jpg"
	},
	{
		id: "crown",
		label: "Thinning crown",
		image: "/images/pattern-crown.jpg"
	},
	{
		id: "part",
		label: "Widening part",
		image: "/images/pattern-part.jpg"
	},
	{
		id: "diffuse",
		label: "Diffuse thinning",
		image: "/images/pattern-diffuse.jpg"
	}
];
var DURATIONS = [
	{
		id: "under-6m",
		label: "Less than 6 months"
	},
	{
		id: "6-12m",
		label: "6–12 months"
	},
	{
		id: "1-3y",
		label: "1–3 years"
	},
	{
		id: "over-3y",
		label: "More than 3 years"
	}
];
var SEVERITIES = [
	{
		id: "mild",
		label: "Mild — only I notice"
	},
	{
		id: "moderate",
		label: "Moderate — others have mentioned it"
	},
	{
		id: "advanced",
		label: "Advanced — it changes how I style"
	},
	{
		id: "severe",
		label: "Severe — I avoid photos and hats"
	}
];
var COMPOUNDS = {
	semaglutide: {
		name: "Semaglutide",
		index: "01",
		kind: "GLP-1",
		classification: "GLP-1 receptor agonist",
		overview: "Semaglutide belongs to the glucagon-like peptide-1 receptor agonist family. In the futureself hair protocol it is the foundational compound — a once-weekly metabolic signal used to steady the follicle cycle and reduce inflammatory shedding.",
		details: "Packaging concept for the futureself collection. Strength is clinician-directed after intake. Hair restoration is not an FDA-approved indication. A licensed clinician must review labs and history before any compound is dispensed.",
		formula: "C187H291N45O59",
		cas: "910463-68-2",
		mass: "4113.58 g/mol",
		cadence: "Weekly"
	},
	tirzepatide: {
		name: "Tirzepatide",
		index: "02",
		kind: "GIP / GLP-1",
		classification: "Dual GIP / GLP-1 receptor agonist",
		overview: "Tirzepatide acts on both GIP and GLP-1 receptors. For advanced thinning it is the futureself dual-agonist option — a stronger metabolic reset when shedding has been established for years.",
		details: "Reserved in this protocol for advanced or severe patterns. Dispensed only after clinician review. Compounded presentation is a futureself vial concept, not a substitute for on-label therapy.",
		formula: "C225H348N46O68",
		cas: "2023788-19-2",
		mass: "4813.45 g/mol",
		cadence: "Weekly"
	},
	liraglutide: {
		name: "Liraglutide",
		index: "03",
		kind: "GLP-1",
		classification: "GLP-1 receptor agonist",
		overview: "Liraglutide is a daily GLP-1 receptor agonist. It is the gentler futureself match — used when you have tried treatments before, or when a slower titration is the safer clinical path.",
		details: "Daily cadence, slower titration. Selected automatically for 50+ intakes and for people who have already cycled through hair treatments. Clinician review required.",
		formula: "C172H265N43O51",
		cas: "204656-20-2",
		mass: "3751.2 g/mol",
		cadence: "Daily"
	}
};
function goalHeadline(goal) {
	if (goal === "hairline") return "Restore your hairline with GLP-1";
	if (goal === "shedding") return "Stop shedding with GLP-1";
	if (goal === "maintain") return "Protect density with GLP-1";
	return "Reverse thinning with GLP-1";
}
function goalBody(goal) {
	if (goal === "hairline") return "Temple recession is a pattern. The protocol maps it, then matches a compound and cadence so the hairline is treated as a system — not a cosmetic patch.";
	if (goal === "shedding") return "Telogen effluvium — including shedding that follows rapid metabolic change — is a cycle problem. We slow the dump, then rebuild the anagen phase.";
	if (goal === "maintain") return "Holding the density you have is a protocol, not a hope. A calibrated GLP-1 cadence plus follicle check-ins keeps the line from moving.";
	return "Start rebuilding density without a transplant or a three-hour minoxidil ritual. A customized plan, matched to your pattern and metabolic profile.";
}
function patternLabel(pattern) {
	if (pattern === "crown") return "thinning crown";
	if (pattern === "part") return "widening part";
	if (pattern === "diffuse") return "diffuse thinning";
	return "receding hairline";
}
var PRESS = [
	"vogue",
	"GQ",
	"WIRED"
];
function Ico(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.35,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		className: "size-5",
		...props
	});
}
function IconStrands() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 20c.4-4 1.2-8 1.6-12 .2-1.8-.4-3.4-1.6-4" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20c.2-5 .4-9.5 0-13-.3-2.2.4-4 1.6-5" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 20c-.2-4.2.6-8.2 1.8-11.4.8-2.2.2-4.2-1.2-5.6" })
	] });
}
function IconHairline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 14c.8-4.4 3.2-8 7.5-8s6.7 3.6 7.5 8" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 12.5c.7-1.8 1.9-3 4-3s3.3 1.2 4 3" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 14v5.5M19.5 14v5.5" })
	] });
}
function IconDrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3c3.4 4 6 7 6 10.2A6 6 0 1 1 6 13.2C6 10 8.6 7 12 3Z" }) });
}
function IconShield() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 5 6v6c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6l-7-3Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 12.2 11 14l4-4" })] });
}
function IconCalm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 14.5c.8 1.2 2 1.8 3 1.8s2.2-.6 3-1.8" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 10h.01M15 10h.01" })
	] });
}
function IconScalp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 12c1.2-2 2.6-3 4-3s2.8 1 4 3" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 15.5c.8.7 1.7 1 2.5 1s1.7-.3 2.5-1" })
	] });
}
function IconStyle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 20c1.5-6 3-10 5-10s3.5 4 5 10" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10V4.5" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 6.5 12 4.5 14.5 6.5" })
	] });
}
function IconMirror() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ico, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "6",
			y: "3.5",
			width: "12",
			height: "14",
			rx: "6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17.5v3" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 20.5h6" })
	] });
}
var GOAL_ICONS = {
	strands: IconStrands,
	hairline: IconHairline,
	drop: IconDrop,
	shield: IconShield
};
var EXTRA_ICONS = {
	strands: IconStrands,
	hairline: IconHairline,
	calm: IconCalm,
	scalp: IconScalp,
	style: IconStyle,
	mirror: IconMirror
};
function VialViewer({ compound, className }) {
	const host = (0, import_react.useRef)(null);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const meta = COMPOUNDS[compound];
	(0, import_react.useEffect)(() => {
		if (!host.current) return;
		let cancelled = false;
		let cleanup;
		import("./vial-scene-CUH1lPMA.mjs").then(async (mod) => {
			if (cancelled || !host.current) return;
			cleanup = await mod.mountVial(host.current, {
				name: meta.name,
				kind: meta.kind,
				index: meta.index,
				formula: meta.formula
			});
		}).catch(() => {
			if (!cancelled) setFailed(true);
		});
		return () => {
			cancelled = true;
			cleanup?.();
		};
	}, [
		meta.name,
		meta.kind,
		meta.index,
		meta.formula
	]);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/vial.png",
			alt: `${meta.name} vial`,
			className: "h-72 object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-subtle",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-3" }),
				" Compound ",
				meta.index
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: host,
			tabIndex: 0,
			role: "img",
			"aria-label": `${meta.name} vial. Drag or use arrow keys to rotate.`,
			className: "vial-stage h-72 w-full max-w-sm outline-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-subtle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-3" }), " Drag to rotate"]
		})]
	});
}
function ContinueButton({ children = "Continue", disabled, onClick, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled,
		onClick,
		className: cn("press flex h-12 w-full items-center justify-center rounded-full px-6 text-sm uppercase tracking-wide", disabled ? "bg-disabled text-disabled-fg" : "bg-ink text-ink-fg", className),
		children
	});
}
function StickyFooter({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky bottom-0 z-20 mt-auto bg-bg/95 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mb-3" }), children]
	});
}
function OptionRow({ selected, onSelect, label, icon, multi }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("press flex min-h-16 w-full items-center gap-3.5 rounded-xl border bg-bg px-4 py-3.5 text-left transition-colors duration-150", selected ? "border-fg" : "border-border"),
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 shrink-0 place-items-center rounded-full bg-surface text-fg",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-[15px] leading-snug",
				children: label
			}),
			multi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-5 shrink-0 place-items-center rounded-sm border transition-colors", selected ? "border-fg bg-fg text-bg" : "border-line bg-bg"),
				children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-3.5",
					strokeWidth: 2.4
				}) : null
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-5 shrink-0 place-items-center rounded-full border transition-colors", selected ? "border-fg" : "border-line"),
				children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-fg" }) : null
			})
		]
	});
}
function AgeCard({ image, label, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: "press group relative overflow-hidden rounded-2xl bg-surface text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "aspect-square w-full object-cover object-[center_18%]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink px-3 py-2.5 text-ink-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[13px]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-6 place-items-center rounded-full border border-ink-fg/35",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-3.5",
					strokeWidth: 2.2
				})
			})]
		})]
	});
}
function PatternCard({ image, label, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("press overflow-hidden rounded-xl border bg-bg text-left transition-colors", selected ? "border-fg" : "border-border"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "aspect-square w-full object-cover object-[center_10%]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center justify-between gap-2 px-3 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[13px] leading-tight",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-5 shrink-0 place-items-center rounded-full border", selected ? "border-fg" : "border-line"),
				children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-fg" }) : null
			})]
		})]
	});
}
function ScreenTitle({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: cn("font-sans text-[1.65rem] leading-[1.15] tracking-title text-fg", className),
		children
	});
}
function AgeScreen() {
	const setAge = useFunnel((s) => s.setAge);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pb-10 pt-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[1.7rem] uppercase leading-[1.05] tracking-display sm:text-[1.85rem]",
					children: [
						"Hair restoration",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"protocol"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-[11px] uppercase tracking-label text-subtle",
					children: "Choose your age"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid grid-cols-2 gap-3",
				children: AGES.map((age) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeCard, {
					image: age.image,
					label: age.label,
					onSelect: () => setAge(age.id)
				}, age.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 text-center text-[13px] leading-relaxed text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By choosing your age and continuing you agree to our" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "underline underline-offset-2",
								children: "Terms of Service"
							}),
							"  |  ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "underline underline-offset-2",
								children: "Privacy Policy"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: "Please review before continuing"
					})
				]
			})
		]
	});
}
function ProofScreen() {
	const age = useFunnel((s) => s.age);
	const next = useFunnel((s) => s.next);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-5 pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-[1.85rem] leading-tight tracking-title",
						children: [
							"Over ",
							ageCount(age),
							" people"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[15px] leading-snug text-muted",
						children: [
							"in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-fg",
								children: ["their ", ageLabel(age).replace("their ", "")]
							}),
							" have chosen futureself to restore density and calm shedding"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/social-proof.jpg",
					alt: "Restored density, photographed in studio",
					className: "mt-7 aspect-[4/3] w-full rounded-2xl object-cover object-[center_20%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg tracking-tight",
						children: "As featured in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center justify-center gap-3 text-[13px] tracking-wide text-subtle",
						children: PRESS.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-px bg-line" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase",
								children: name
							})]
						}, name))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, { onClick: next }) })]
	});
}
function TriedScreen() {
	const setTried = useFunnel((s) => s.setTried);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-1 flex-col overflow-hidden px-5 pt-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
				className: "relative z-10 max-w-[16.5rem] pr-2",
				children: "Have you tried a hair-loss treatment before?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-6 flex max-w-[58%] flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
					label: "Yes",
					selected: false,
					onSelect: () => setTried(true)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
					label: "No",
					selected: false,
					onSelect: () => setTried(false)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/model-full.jpg",
				alt: "",
				className: "pointer-events-none absolute -right-8 bottom-0 h-[78%] w-[58%] object-contain object-bottom"
			})
		]
	});
}
function EncourageScreen() {
	const tried = useFunnel((s) => s.triedBefore);
	const next = useFunnel((s) => s.next);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-5 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, { children: tried ? "We'll meet you where you are." : "You're in the right place." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-relaxed text-muted",
						children: "The futureself hair protocol is a clinician-guided GLP-1 compound plan — built for first-timers and for people who have already tried minoxidil, finasteride, or a transplant consult."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[15px] leading-relaxed text-fg",
						children: [
							"We'll help you",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-fg",
								children: "rebuild density with a weekly vial"
							}),
							", at home."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/vial-studio.png",
				alt: "futureself GLP-1 vial",
				className: "mt-6 w-full rounded-2xl object-cover object-center"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, { onClick: next }) })]
	});
}
function GoalScreen() {
	const setGoal = useFunnel((s) => s.setGoal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pt-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
			className: "text-center",
			children: "What's your main goal?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stagger mt-6 flex flex-col gap-3",
			children: GOALS.map((g) => {
				const Icon = GOAL_ICONS[g.icon];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
					label: g.label,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
					selected: false,
					onSelect: () => setGoal(g.id)
				}, g.id);
			})
		})]
	});
}
function ShowcaseScreen() {
	const goal = useFunnel((s) => s.goal);
	const next = useFunnel((s) => s.next);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-5 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, { children: goalHeadline(goal) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-relaxed text-muted",
						children: goalBody(goal)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-relaxed text-fg",
						children: "Get a customized protocol tailored to your pattern, age, and metabolic profile."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneRack, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, { onClick: next }) })]
	});
}
function PhoneShell({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-bg shadow-[0_18px_40px_rgba(28,28,28,0.16)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-2.5 pt-1.5 font-mono text-[6px] text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-10 rounded-full bg-fg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LTE" })
			]
		}), children]
	});
}
function PhoneRack() {
	const goal = useFunnel((s) => s.goal);
	const age = useFunnel((s) => s.age);
	const goalLabel = goal === "hairline" ? "Hairline" : goal === "shedding" ? "Stop shedding" : goal === "maintain" ? "Maintain" : "Reverse thinning";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-6 h-[300px] w-full overflow-hidden rounded-2xl bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneShell, {
				className: "absolute left-[-8%] top-[30%] z-[1] w-[44%] -rotate-[16deg] opacity-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/social-proof.jpg",
					alt: "",
					className: "h-52 w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneShell, {
				className: "absolute right-[-8%] top-[28%] z-[1] w-[44%] rotate-[16deg] opacity-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/pattern-part.jpg",
					alt: "",
					className: "h-52 w-full object-cover object-top"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneShell, {
				className: "absolute left-1/2 top-[10%] z-[2] w-[54%] -translate-x-1/2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-1 px-2 pt-2",
						children: [
							"01",
							"02",
							"03",
							"04"
						].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-sm bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: i === 0 ? "/images/social-proof.jpg" : i === 1 ? "/images/pattern-hairline.jpg" : i === 2 ? "/images/pattern-part.jpg" : "/images/encourage.jpg",
								alt: "",
								className: "size-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-center font-mono text-[6px] text-muted",
							children: ["Wk ", d]
						})] }, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-1 border-t border-border px-2.5 py-2 text-[8px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-subtle",
							children: "Main goal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: goalLabel })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-subtle",
								children: "Age band"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: age ?? "40–49" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/encourage.jpg",
						alt: "",
						className: "h-24 w-full bg-paper object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 px-2.5 pb-3 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px]",
								children: "Hair restoration protocol"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[7px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Weekly compound" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 of 12" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-0.5 rounded-full bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-1/6 rounded-full bg-fg" })
							})
						]
					})
				]
			})
		]
	});
}
function ExtrasScreen() {
	const extras = useFunnel((s) => s.extras);
	const toggle = useFunnel((s) => s.toggleExtra);
	const next = useFunnel((s) => s.next);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto px-5 pt-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
					className: "text-center",
					children: "What else do you hope to achieve with this protocol?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center font-mono text-[11px] uppercase tracking-label text-subtle",
					children: "Choose all that apply"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-col gap-2.5 pb-8",
					children: EXTRAS.map((item) => {
						const Icon = EXTRA_ICONS[item.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
							label: item.label,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
							multi: true,
							selected: extras.includes(item.id),
							onSelect: () => toggle(item.id)
						}, item.id);
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, {
			disabled: extras.length === 0,
			onClick: next,
			children: "Next step"
		}) })]
	});
}
function PatternScreen() {
	const setPattern = useFunnel((s) => s.setPattern);
	const current = useFunnel((s) => s.pattern);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pt-7 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
			className: "text-center",
			children: "How would you describe your hair-loss pattern?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 gap-3",
			children: PATTERNS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternCard, {
				image: p.image,
				label: p.label,
				selected: current === p.id,
				onSelect: () => setPattern(p.id)
			}, p.id))
		})]
	});
}
function DurationScreen() {
	const setDuration = useFunnel((s) => s.setDuration);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pt-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
			className: "text-center",
			children: "How long have you noticed hair loss?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stagger mt-6 flex flex-col gap-3",
			children: DURATIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
				label: d.label,
				selected: false,
				onSelect: () => setDuration(d.id)
			}, d.id))
		})]
	});
}
function SeverityScreen() {
	const setSeverity = useFunnel((s) => s.setSeverity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pt-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
			className: "text-center",
			children: "How would you rate it today?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stagger mt-6 flex flex-col gap-3",
			children: SEVERITIES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
				label: d.label,
				selected: false,
				onSelect: () => setSeverity(d.id)
			}, d.id))
		})]
	});
}
var ANALYZE_LINES = [
	"Reading metabolic profile",
	"Mapping follicle pattern",
	"Matching a GLP-1 compound",
	"Setting weekly cadence"
];
function AnalyzeScreen() {
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			useFunnel.getState().next();
			return;
		}
		let i = 0;
		const id = window.setInterval(() => {
			i += 1;
			setTick(i);
			if (i >= ANALYZE_LINES.length) {
				window.clearInterval(id);
				window.setTimeout(() => {
					useFunnel.getState().next();
				}, 450);
			}
		}, 720);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center px-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-label text-subtle",
				children: "Building protocol"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-2xl tracking-title",
				children: "Matching your compound"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 w-full max-w-xs space-y-3 text-left",
				children: ANALYZE_LINES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("size-1.5 rounded-full bg-fg", i < tick ? "opacity-100" : "opacity-25"),
						style: i === tick ? { animation: "pulse-dot 1s ease-in-out infinite" } : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-sm", i < tick ? "text-fg" : "text-subtle"),
						children: line
					})]
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 h-[2px] w-48 origin-left overflow-hidden bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full origin-left bg-fg",
					style: { animation: "analyze-bar 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards" }
				})
			})
		]
	});
}
function PlanScreen() {
	const answers = useFunnel((s) => s);
	const next = useFunnel((s) => s.next);
	const meta = COMPOUNDS[recommendCompound(answers)];
	const density = answers.severity === "mild" ? "12–18%" : answers.severity === "severe" ? "8–14%" : "10–16%";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 pt-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-label text-subtle",
					children: [
						"Compound ",
						meta.index,
						" · ",
						meta.kind
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
					className: "mt-2",
					children: "Your 12-week hair protocol"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-muted",
					children: [
						"Based on your ",
						answers.age,
						" profile and ",
						patternLabel(answers.pattern),
						" pattern, we matched ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: meta.name
						}),
						" — ",
						meta.classification.toLowerCase(),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-2",
					children: [
						{
							k: "Cadence",
							v: meta.cadence
						},
						{
							k: "Horizon",
							v: "12 weeks"
						},
						{
							k: "Density",
							v: density
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-label text-subtle",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: s.v
						})]
					}, s.k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/encourage.jpg",
					alt: `${meta.name} vial`,
					className: "mx-auto mt-4 h-52 object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-2 space-y-3 border-t border-border pt-5 text-[14px] leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-subtle",
							children: "01 — Weeks 1–4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Titrate. Calm the telogen dump." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-subtle",
							children: "02 — Weeks 5–8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hold the line. Follicle check-in." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-subtle",
							children: "03 — Weeks 9–12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rebuild anagen. Photograph density." })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[11px] leading-relaxed text-subtle",
					children: "Requires a licensed clinician. Not FDA-approved for hair loss. Compounded GLP-1 medications are prescription-only."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, {
			onClick: next,
			children: "See my compound"
		}) })]
	});
}
function ProductScreen() {
	const answers = useFunnel((s) => s);
	const add = useFunnel((s) => s.addToProtocol);
	const compound = recommendCompound(answers);
	const meta = COMPOUNDS[compound];
	const [tab, setTab] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VialViewer, {
				compound,
				className: "px-4 pt-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between font-mono text-[11px] uppercase tracking-label text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Compound ", meta.index] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: meta.kind })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-[2.6rem] leading-none tracking-display",
						children: meta.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: meta.classification
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-6 border-b border-border text-sm",
						children: ["overview", "details"].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(id),
							className: cn("relative -mb-px pb-2 capitalize", tab === id ? "text-fg" : "text-subtle"),
							children: [id === "details" ? "Product details" : "Overview", tab === id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 bottom-0 h-0.5 bg-fg" }) : null]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 pb-4 text-[15px] leading-relaxed text-fg",
						children: tab === "overview" ? meta.overview : meta.details
					}),
					tab === "details" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mb-4 grid grid-cols-2 gap-y-2 font-mono text-[11px] uppercase tracking-wide",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Formula"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right",
								children: meta.formula
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "CAS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right",
								children: meta.cas
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Molar mass"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right",
								children: meta.mass
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Cadence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right",
								children: meta.cadence
							})
						]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, {
			onClick: add,
			children: "Add to protocol"
		}) })]
	});
}
function ReserveScreen() {
	const email = useFunnel((s) => s.email);
	const setEmail = useFunnel((s) => s.setEmail);
	const plan = useFunnel((s) => s.plan);
	const setPlan = useFunnel((s) => s.setPlan);
	const next = useFunnel((s) => s.next);
	const meta = COMPOUNDS[recommendCompound(useFunnel((s) => s))];
	const valid = (0, import_react.useMemo)(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 px-5 pt-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, { children: "Reserve your protocol" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[15px] leading-relaxed text-muted",
					children: [
						meta.name,
						" · Compound ",
						meta.index,
						". A clinician reviews every intake before the first vial ships."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlan("12-week"),
						className: cn("press w-full rounded-xl border px-4 py-4 text-left", plan === "12-week" ? "border-fg" : "border-border"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "12-week protocol" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "$399"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: "Recommended · clinician review included"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlan("4-week"),
						className: cn("press w-full rounded-xl border px-4 py-4 text-left", plan === "4-week" ? "border-fg" : "border-border"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "4-week starter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "$149"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted",
							children: "Titration month · convert after check-in"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] uppercase tracking-label text-subtle",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@studio.com",
						autoComplete: "email",
						className: "mt-2 h-12 w-full rounded-lg border border-border bg-bg px-3 text-[15px] outline-none ring-fg focus:ring-1"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[11px] leading-relaxed text-subtle",
					children: "Prototype checkout — no payment is collected. We'll store this locally in your browser as a reservation."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueButton, {
			disabled: !valid,
			onClick: next,
			children: "Reserve my protocol"
		}) })]
	});
}
function ConfirmScreen() {
	const email = useFunnel((s) => s.email);
	const plan = useFunnel((s) => s.plan);
	const reset = useFunnel((s) => s.reset);
	const meta = COMPOUNDS[recommendCompound(useFunnel((s) => s))];
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem("futureself-reservation", JSON.stringify({
				email,
				plan,
				compound: meta.name,
				at: Date.now()
			}));
		} catch {}
	}, [
		email,
		plan,
		meta.name
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col px-5 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-label text-subtle",
				children: "Protocol reserved"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenTitle, {
				className: "mt-2",
				children: "We'll see you on the other side of 12 weeks."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-[15px] leading-relaxed text-muted",
				children: [
					"A confirmation sits at ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: email
					}),
					". Your",
					" ",
					plan === "12-week" ? "12-week" : "4-week",
					" ",
					meta.name,
					" protocol is queued for clinician review."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/encourage.jpg",
				alt: "",
				className: "mx-auto mt-8 h-52 object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: reset,
				className: "press mt-10 h-12 w-full rounded-full border border-border text-sm uppercase tracking-wide",
				children: "Start another intake"
			})
		]
	});
}
var SCREENS = {
	age: AgeScreen,
	proof: ProofScreen,
	tried: TriedScreen,
	encourage: EncourageScreen,
	goal: GoalScreen,
	showcase: ShowcaseScreen,
	extras: ExtrasScreen,
	pattern: PatternScreen,
	duration: DurationScreen,
	severity: SeverityScreen,
	analyze: AnalyzeScreen,
	plan: PlanScreen,
	product: ProductScreen,
	reserve: ReserveScreen,
	confirm: ConfirmScreen
};
function Home() {
	const step = useFunnel((s) => s.step);
	const direction = useFunnel((s) => s.direction);
	const hydrate = useFunnel((s) => s.hydrate);
	const Screen = SCREENS[step];
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "funnel-frame relative flex min-h-dvh flex-col overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FunnelHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: cn("flex min-h-0 flex-1 flex-col", direction < 0 && "dir-back"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "step-enter flex min-h-0 flex-1 flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {})
				})
			}, stepKey(step)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpFab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FunnelMenu, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpDialog, {})
		]
	});
}
//#endregion
export { Home as component };
