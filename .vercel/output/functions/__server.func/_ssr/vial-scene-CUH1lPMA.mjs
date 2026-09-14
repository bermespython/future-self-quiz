import { t as BRAND_PATHS } from "./brand-YL4vt9Mx.mjs";
import { _ as SRGBColorSpace, a as Color, b as TorusGeometry, c as Group, d as Mesh, f as MeshBasicMaterial, g as PlaneGeometry, h as PerspectiveCamera, i as CanvasTexture, l as HemisphereLight, m as MeshStandardMaterial, n as WebGLRenderer, o as CylinderGeometry, p as MeshPhysicalMaterial, r as BoxGeometry, s as DirectionalLight, t as PMREMGenerator, u as LatheGeometry, v as Scene, x as Vector2, y as Texture } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vial-scene-CUH1lPMA.js
function trackedText(ctx, text, x, y, tracking, align = "center") {
	const extras = Math.max(0, text.length - 1) * tracking;
	const width = ctx.measureText(text).width + extras;
	let cursor = x;
	if (align === "center") cursor -= width / 2;
	if (align === "right") cursor -= width;
	ctx.textAlign = "left";
	for (let i = 0; i < text.length; i++) {
		ctx.fillText(text[i], cursor, y);
		cursor += ctx.measureText(text[i]).width + tracking;
	}
}
function paintSymbol(ctx, cx, cy, height) {
	const scale = height / 348;
	ctx.save();
	ctx.translate(cx - 328 * scale / 2, cy - height / 2);
	ctx.scale(scale, scale);
	ctx.translate(-118, -108);
	for (const d of BRAND_PATHS) ctx.fill(new Path2D(d));
	ctx.restore();
}
function labelTexture(product) {
	const c = document.createElement("canvas");
	c.width = 2048;
	c.height = 1024;
	const ctx = c.getContext("2d");
	if (!ctx) return c;
	ctx.fillStyle = "#f4f4f5";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#232323";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	const gothic = "\"ModernGothic\", sans-serif";
	const self = "\"FT Base\", sans-serif";
	const mono = "\"ModernGothicMono\", monospace";
	ctx.save();
	ctx.translate(c.width / 2, c.height / 2);
	ctx.rotate(Math.PI / 2);
	paintSymbol(ctx, -340, 0, 68);
	ctx.font = `400 26px ${self}`;
	trackedText(ctx, "futureself", -255, 0, -.6);
	ctx.font = `400 76px ${gothic}`;
	trackedText(ctx, product.name, 30, 0, -2.4);
	ctx.font = `400 24px ${gothic}`;
	trackedText(ctx, product.kind, 112, 0, .8);
	ctx.font = `400 16px ${mono}`;
	trackedText(ctx, `${product.index}  /  COLLECTION`, 158, 0, 1);
	ctx.font = `400 15px ${mono}`;
	trackedText(ctx, "Strength pending", 200, 0, .6);
	ctx.restore();
	return c;
}
function cylinder(g, r1, r2, h, y, m) {
	const mesh = new Mesh(new CylinderGeometry(r1, r2, h, 96), m);
	mesh.position.y = y;
	g.add(mesh);
}
function ring(g, r, t, y, m) {
	const mesh = new Mesh(new TorusGeometry(r, t, 12, 96), m);
	mesh.rotation.x = Math.PI / 2;
	mesh.position.y = y;
	g.add(mesh);
}
function makeVial(product, renderer) {
	const g = new Group();
	const profile = [
		[0, -1.24],
		[.43, -1.24],
		[.54, -1.22],
		[.595, -1.15],
		[.607, -1.03],
		[.608, .44],
		[.6, .58],
		[.56, .69],
		[.43, .8],
		[.344, .91],
		[.333, 1.05],
		[.34, 1.17],
		[.32, 1.2],
		[.28, 1.17],
		[.278, .99],
		[.285, .94],
		[.4, .84],
		[.52, .7],
		[.554, .54],
		[.556, -1.04],
		[.52, -1.12],
		[.42, -1.14],
		[0, -1.14]
	].map(([x, y]) => new Vector2(x, y));
	const glass = new MeshPhysicalMaterial({
		color: 12963034,
		metalness: .1,
		roughness: .095,
		transparent: true,
		opacity: .42,
		envMapIntensity: 1.15,
		clearcoat: 1,
		clearcoatRoughness: .045,
		side: 0
	});
	const silver = new MeshStandardMaterial({
		color: 12963034,
		metalness: 1,
		roughness: .17,
		envMapIntensity: 1.5
	});
	const darkMetal = new MeshStandardMaterial({
		color: 4014152,
		metalness: .28,
		roughness: .42,
		envMapIntensity: .6
	});
	const rubber = new MeshStandardMaterial({
		color: 1381653,
		roughness: .75
	});
	const liquid = new MeshPhysicalMaterial({
		color: 12041932,
		roughness: .18,
		metalness: .05,
		transparent: true,
		opacity: .28
	});
	g.add(new Mesh(new LatheGeometry(profile, 96), glass));
	cylinder(g, .53, .53, .31, -.96, liquid);
	ring(g, .56, .024, -1.16, glass);
	ring(g, .55, .026, -1.22, glass);
	cylinder(g, .348, .348, .15, 1.08, silver);
	cylinder(g, .38, .38, .035, 1, darkMetal);
	cylinder(g, .452, .455, .23, 1.265, darkMetal);
	cylinder(g, .427, .446, .035, 1.396, silver);
	cylinder(g, .393, .422, .02, 1.421, darkMetal);
	ring(g, .437, .017, 1.16, silver);
	ring(g, .421, .017, 1.4, silver);
	cylinder(g, .185, .185, .011, 1.438, rubber);
	const paper = new Mesh(new CylinderGeometry(.604, .604, 1.7, 64), new MeshStandardMaterial({
		color: 16053493,
		roughness: 1,
		metalness: 0
	}));
	paper.position.y = -.22;
	g.add(paper);
	const map = new CanvasTexture(labelTexture(product));
	map.colorSpace = SRGBColorSpace;
	map.anisotropy = renderer.capabilities.getMaxAnisotropy();
	const label = new Mesh(new CylinderGeometry(.612, .612, 1.72, 96, 1, true), new MeshPhysicalMaterial({
		map,
		roughness: 1,
		metalness: 0,
		envMapIntensity: .08
	}));
	label.position.y = -.22;
	label.rotation.y = Math.PI / 2;
	g.add(label);
	return g;
}
async function mountVial(host, product) {
	await document.fonts.ready.catch(() => void 0);
	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: true,
		powerPreference: "high-performance"
	});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
	renderer.outputColorSpace = SRGBColorSpace;
	renderer.toneMapping = 4;
	renderer.toneMappingExposure = 1.05;
	renderer.setClearColor(0, 0);
	host.appendChild(renderer.domElement);
	renderer.domElement.setAttribute("aria-hidden", "true");
	const scene = new Scene();
	const camera = new PerspectiveCamera(32, 1, .1, 40);
	camera.position.set(.05, .08, 3.35);
	const studio = new Scene();
	studio.background = new Color(16777215);
	studio.add(new Mesh(new BoxGeometry(22, 18, 22), new MeshBasicMaterial({
		color: 12963034,
		side: 1
	})));
	function softbox(w, h, x, y, z, intensity) {
		const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({
			color: new Color(16777215).multiplyScalar(intensity),
			side: 2
		}));
		m.position.set(x, y, z);
		m.lookAt(0, 0, 0);
		studio.add(m);
	}
	softbox(2.5, 11, -4, 2, 4, 6);
	softbox(1.1, 10, 4, 1, 3, 4);
	softbox(8, 4, 0, 7, 0, 5);
	softbox(6, 6, 0, 1, -6, 1.1);
	softbox(.7, 9, -1, 0, 6, 2);
	const pmrem = new PMREMGenerator(renderer);
	scene.environment = pmrem.fromScene(studio, .025).texture;
	pmrem.dispose();
	scene.add(new HemisphereLight(16777215, 5528946, 1.6));
	const key = new DirectionalLight(16777215, 2.2);
	key.position.set(-3, 6, 6);
	scene.add(key);
	const rim = new DirectionalLight(14607339, 1.8);
	rim.position.set(5, 2, -2);
	scene.add(rim);
	const vial = makeVial(product, renderer);
	vial.rotation.y = .22;
	scene.add(vial);
	let turn = .22;
	let turnTarget = .22;
	let drag = null;
	let dirty = true;
	let raf = 0;
	let last = performance.now();
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const resize = () => {
		const w = host.clientWidth || 320;
		const h = host.clientHeight || 320;
		renderer.setSize(w, h, false);
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		dirty = true;
	};
	resize();
	const ro = new ResizeObserver(resize);
	ro.observe(host);
	const onDown = (e) => {
		if (e.button !== 0) return;
		drag = {
			x: e.clientX,
			turn: turnTarget
		};
		host.setPointerCapture(e.pointerId);
		host.classList.add("dragging");
	};
	const onMove = (e) => {
		if (!drag) return;
		turnTarget = drag.turn + (e.clientX - drag.x) * .012;
		dirty = true;
	};
	const endDrag = () => {
		drag = null;
		host.classList.remove("dragging");
	};
	const onKey = (e) => {
		if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
			e.preventDefault();
			turnTarget += e.key === "ArrowRight" ? .4 : -.4;
			dirty = true;
		}
	};
	host.addEventListener("pointerdown", onDown);
	host.addEventListener("pointermove", onMove);
	host.addEventListener("pointerup", endDrag);
	host.addEventListener("pointercancel", endDrag);
	host.addEventListener("keydown", onKey);
	const frame = (now) => {
		raf = requestAnimationFrame(frame);
		if (document.hidden) return;
		const dt = Math.min(50, now - last);
		last = now;
		const amount = reduced ? 1 : 1 - Math.exp(-dt / 140);
		if (Math.abs(turn - turnTarget) > 1e-4) {
			turn += (turnTarget - turn) * amount;
			dirty = true;
		}
		if (!dirty) return;
		vial.rotation.y = turn;
		renderer.render(scene, camera);
		dirty = false;
	};
	raf = requestAnimationFrame(frame);
	renderer.render(scene, camera);
	const onLost = (e) => {
		e.preventDefault();
	};
	renderer.domElement.addEventListener("webglcontextlost", onLost);
	return () => {
		cancelAnimationFrame(raf);
		ro.disconnect();
		host.removeEventListener("pointerdown", onDown);
		host.removeEventListener("pointermove", onMove);
		host.removeEventListener("pointerup", endDrag);
		host.removeEventListener("pointercancel", endDrag);
		host.removeEventListener("keydown", onKey);
		renderer.domElement.removeEventListener("webglcontextlost", onLost);
		renderer.dispose();
		scene.traverse((obj) => {
			if (obj instanceof Mesh) {
				obj.geometry.dispose();
				const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
				for (const m of mats) {
					if ("map" in m && m.map instanceof Texture) m.map.dispose();
					m.dispose();
				}
			}
		});
		if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
	};
}
//#endregion
export { mountVial };
