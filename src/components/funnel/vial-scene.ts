import * as THREE from "three";
import { BRAND_PATHS } from "@/components/brand";

export type VialProduct = {
  name: string;
  kind: string;
  index: string;
  formula: string;
};

function trackedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  tracking: number,
  align: CanvasTextAlign = "center",
) {
  const extras = Math.max(0, text.length - 1) * tracking;
  const width = ctx.measureText(text).width + extras;
  let cursor = x;
  if (align === "center") cursor -= width / 2;
  if (align === "right") cursor -= width;
  ctx.textAlign = "left";
  for (let i = 0; i < text.length; i++) {
    ctx.fillText(text[i]!, cursor, y);
    cursor += ctx.measureText(text[i]!).width + tracking;
  }
}

function paintSymbol(ctx: CanvasRenderingContext2D, cx: number, cy: number, height: number) {
  const scale = height / 348;
  ctx.save();
  ctx.translate(cx - (328 * scale) / 2, cy - height / 2);
  ctx.scale(scale, scale);
  ctx.translate(-118, -108);
  for (const d of BRAND_PATHS) {
    ctx.fill(new Path2D(d));
  }
  ctx.restore();
}

function labelTexture(product: VialProduct) {
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

  const gothic = '"ModernGothic", sans-serif';
  const self = '"FT Base", sans-serif';
  const mono = '"ModernGothicMono", monospace';

  ctx.save();
  ctx.translate(c.width / 2, c.height / 2);
  ctx.rotate(Math.PI / 2);

  paintSymbol(ctx, -340, 0, 68);
  ctx.font = `400 26px ${self}`;
  trackedText(ctx, "futureself", -255, 0, -0.6);

  ctx.font = `400 76px ${gothic}`;
  trackedText(ctx, product.name, 30, 0, -2.4);

  ctx.font = `400 24px ${gothic}`;
  trackedText(ctx, product.kind, 112, 0, 0.8);

  ctx.font = `400 16px ${mono}`;
  trackedText(ctx, `${product.index}  /  COLLECTION`, 158, 0, 1);

  ctx.font = `400 15px ${mono}`;
  trackedText(ctx, "Strength pending", 200, 0, 0.6);
  ctx.restore();

  return c;
}

function cylinder(
  g: THREE.Group,
  r1: number,
  r2: number,
  h: number,
  y: number,
  m: THREE.Material,
) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, 96), m);
  mesh.position.y = y;
  g.add(mesh);
}

function ring(g: THREE.Group, r: number, t: number, y: number, m: THREE.Material) {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, t, 12, 96), m);
  mesh.rotation.x = Math.PI / 2;
  mesh.position.y = y;
  g.add(mesh);
}

function makeVial(product: VialProduct, renderer: THREE.WebGLRenderer) {
  const g = new THREE.Group();
  const profile = [
    [0, -1.24],
    [0.43, -1.24],
    [0.54, -1.22],
    [0.595, -1.15],
    [0.607, -1.03],
    [0.608, 0.44],
    [0.6, 0.58],
    [0.56, 0.69],
    [0.43, 0.8],
    [0.344, 0.91],
    [0.333, 1.05],
    [0.34, 1.17],
    [0.32, 1.2],
    [0.28, 1.17],
    [0.278, 0.99],
    [0.285, 0.94],
    [0.4, 0.84],
    [0.52, 0.7],
    [0.554, 0.54],
    [0.556, -1.04],
    [0.52, -1.12],
    [0.42, -1.14],
    [0, -1.14],
  ].map(([x, y]) => new THREE.Vector2(x, y));

  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xc5ccda,
    metalness: 0.1,
    roughness: 0.095,
    transparent: true,
    opacity: 0.42,
    envMapIntensity: 1.15,
    clearcoat: 1,
    clearcoatRoughness: 0.045,
    side: THREE.FrontSide,
  });
  const silver = new THREE.MeshStandardMaterial({
    color: 0xc5ccda,
    metalness: 1,
    roughness: 0.17,
    envMapIntensity: 1.5,
  });
  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x3d4048,
    metalness: 0.28,
    roughness: 0.42,
    envMapIntensity: 0.6,
  });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.75 });
  const liquid = new THREE.MeshPhysicalMaterial({
    color: 0xb7becc,
    roughness: 0.18,
    metalness: 0.05,
    transparent: true,
    opacity: 0.28,
  });

  g.add(new THREE.Mesh(new THREE.LatheGeometry(profile, 96), glass));
  cylinder(g, 0.53, 0.53, 0.31, -0.96, liquid);
  ring(g, 0.56, 0.024, -1.16, glass);
  ring(g, 0.55, 0.026, -1.22, glass);
  cylinder(g, 0.348, 0.348, 0.15, 1.08, silver);
  cylinder(g, 0.38, 0.38, 0.035, 1, darkMetal);
  cylinder(g, 0.452, 0.455, 0.23, 1.265, darkMetal);
  cylinder(g, 0.427, 0.446, 0.035, 1.396, silver);
  cylinder(g, 0.393, 0.422, 0.02, 1.421, darkMetal);
  ring(g, 0.437, 0.017, 1.16, silver);
  ring(g, 0.421, 0.017, 1.4, silver);
  cylinder(g, 0.185, 0.185, 0.011, 1.438, rubber);

  const paper = new THREE.Mesh(
    new THREE.CylinderGeometry(0.604, 0.604, 1.7, 64),
    new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 1, metalness: 0 }),
  );
  paper.position.y = -0.22;
  g.add(paper);

  const map = new THREE.CanvasTexture(labelTexture(product));
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const label = new THREE.Mesh(
    new THREE.CylinderGeometry(0.612, 0.612, 1.72, 96, 1, true),
    new THREE.MeshPhysicalMaterial({
      map,
      roughness: 1,
      metalness: 0,
      envMapIntensity: 0.08,
    }),
  );
  label.position.y = -0.22;
  label.rotation.y = Math.PI / 2;
  g.add(label);
  return g;
}

export async function mountVial(host: HTMLElement, product: VialProduct): Promise<() => void> {
  await document.fonts.ready.catch(() => undefined);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.set(0.05, 0.08, 3.35);

  const studio = new THREE.Scene();
  studio.background = new THREE.Color(0xffffff);
  studio.add(
    new THREE.Mesh(
      new THREE.BoxGeometry(22, 18, 22),
      new THREE.MeshBasicMaterial({ color: 0xc5ccda, side: THREE.BackSide }),
    ),
  );
  function softbox(w: number, h: number, x: number, y: number, z: number, intensity: number) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xffffff).multiplyScalar(intensity),
        side: THREE.DoubleSide,
      }),
    );
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    studio.add(m);
  }
  softbox(2.5, 11, -4, 2, 4, 6);
  softbox(1.1, 10, 4, 1, 3, 4);
  softbox(8, 4, 0, 7, 0, 5);
  softbox(6, 6, 0, 1, -6, 1.1);
  softbox(0.7, 9, -1, 0, 6, 2);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio, 0.025).texture;
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x545d72, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-3, 6, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xdee3eb, 1.8);
  rim.position.set(5, 2, -2);
  scene.add(rim);

  const vial = makeVial(product, renderer);
  vial.rotation.y = 0.22;
  scene.add(vial);

  let turn = 0.22;
  let turnTarget = 0.22;
  let drag: { x: number; turn: number } | null = null;
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

  const onDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, turn: turnTarget };
    host.setPointerCapture(e.pointerId);
    host.classList.add("dragging");
  };
  const onMove = (e: PointerEvent) => {
    if (!drag) return;
    turnTarget = drag.turn + (e.clientX - drag.x) * 0.012;
    dirty = true;
  };
  const endDrag = () => {
    drag = null;
    host.classList.remove("dragging");
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      turnTarget += e.key === "ArrowRight" ? 0.4 : -0.4;
      dirty = true;
    }
  };

  host.addEventListener("pointerdown", onDown);
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerup", endDrag);
  host.addEventListener("pointercancel", endDrag);
  host.addEventListener("keydown", onKey);

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    if (document.hidden) return;
    const dt = Math.min(50, now - last);
    last = now;
    const amount = reduced ? 1 : 1 - Math.exp(-dt / 140);
    if (Math.abs(turn - turnTarget) > 0.0001) {
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

  const onLost = (e: Event) => {
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
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of mats) {
          if ("map" in m && m.map instanceof THREE.Texture) m.map.dispose();
          m.dispose();
        }
      }
    });
    if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
  };
}
