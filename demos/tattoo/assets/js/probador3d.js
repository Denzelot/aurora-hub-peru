// Probador 3D: maniquí de artista hecho con primitivas de three.js.
// El cliente hace clic en el cuerpo y el flash elegido se proyecta ahí como calcomanía
// (DecalGeometry), a escala real: 1 unidad = 1 metro, el maniquí mide 1,75 m.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { porId, canvasDiseno } from "./flash.js";

const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
const EJE_Y = V(0, 1, 0);

// El maniquí mira hacia +Z: su lado derecho queda en -X.
const lado = (x, g = "m") => {
  if (Math.abs(x) < 0.04) return "";
  const der = x < 0;
  return " " + { m: der ? "derecho" : "izquierdo", f: der ? "derecha" : "izquierda", fp: der ? "derechas" : "izquierdas" }[g];
};
const zonaFija = (nombre, g) => (p, n, m) => nombre + lado(m.position.x, g);
const zonaTorso = (p, n) => {
  const delante = n.z >= 0;
  if (Math.abs(n.x) > 0.72 && p.y > 0.98 && p.y < 1.32) return "Costillas" + lado(p.x, "fp");
  if (p.y > 1.38) return delante ? "Clavícula" : "Espalda alta";
  if (p.y > 1.16) return delante ? "Pecho" : "Espalda alta";
  if (p.y > 0.97) return delante ? "Abdomen" : "Espalda baja";
  return delante ? "Cadera" + lado(p.x, "f") : "Espalda baja";
};

export async function iniciarProbador(contenedor, { alCambiar = () => {}, idInicial = "rosa", cmInicial = 9 } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute("aria-label", "Maniquí 3D: arrastra para girar, haz clic para colocar el tatuaje");
  contenedor.prepend(renderer.domElement);

  const escena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  escena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  escena.environmentIntensity = 0.35;

  const camara = new THREE.PerspectiveCamera(28, 1, 0.05, 30);
  // Arranca cerca (cabeza a rodillas) para que el tatuaje se lea; la rueda aleja hasta el cuerpo entero.
  camara.position.set(0.8, 1.3, 2.95);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.target.set(0, 1.06, 0);
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.enablePan = false;
  controles.minDistance = 1.1;
  controles.maxDistance = 5.2;
  controles.minPolarAngle = 0.35;
  controles.maxPolarAngle = 1.72;
  controles.autoRotate = true;
  controles.autoRotateSpeed = 0.7;
  controles.addEventListener("start", () => (controles.autoRotate = false));
  // En pantallas táctiles el gesto vertical sigue bajando la página; el horizontal gira el maniquí.
  if (matchMedia("(pointer: coarse)").matches) renderer.domElement.style.touchAction = "pan-y";

  // Luz: principal cálida, contraluz rojo y relleno azul (los colores del flash).
  escena.add(new THREE.HemisphereLight("#f6ebd3", "#131312", 0.32));
  const clave = new THREE.DirectionalLight("#ffe1b5", 2.9);
  clave.position.set(2.2, 3.0, 2.0);
  clave.castShadow = true;
  clave.shadow.mapSize.set(2048, 2048);
  Object.assign(clave.shadow.camera, { left: -1.2, right: 1.2, top: 2.2, bottom: -0.3, near: 0.5, far: 8 });
  clave.shadow.bias = -0.0004;
  clave.shadow.normalBias = 0.02;
  escena.add(clave);
  const contra = new THREE.DirectionalLight("#e0392f", 2.2);
  contra.position.set(-2.2, 2.0, -2.6);
  escena.add(contra);
  const espalda = new THREE.DirectionalLight("#ffe9cc", 0.9);
  espalda.position.set(0.6, 2.4, -3);
  escena.add(espalda);
  const relleno = new THREE.DirectionalLight("#4a7fd0", 1.4);
  relleno.position.set(2.6, 1.0, -1.8);
  escena.add(relleno);

  const piso = new THREE.Mesh(new THREE.CircleGeometry(1.5, 72), new THREE.ShadowMaterial({ opacity: 0.5 }));
  piso.rotation.x = -Math.PI / 2;
  piso.receiveShadow = true;
  escena.add(piso);
  const aro = (r, g, c, o) => {
    const m = new THREE.Mesh(new THREE.RingGeometry(r, r + g, 128), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o }));
    m.rotation.x = -Math.PI / 2;
    m.position.y = 0.002;
    escena.add(m);
  };
  aro(0.6, 0.012, "#C8302A", 0.9);
  aro(0.66, 0.004, "#F1B02F", 0.6);

  // ── Maniquí ─────────────────────────────────────────────────────────────
  const matPiel = new THREE.MeshPhysicalMaterial({
    color: "#d4ae88",
    roughness: 0.58,
    clearcoat: 0.18,
    clearcoatRoughness: 0.55,
    sheen: 0.45,
    sheenColor: new THREE.Color("#ffd9ad"),
  });
  const matUnion = matPiel.clone();
  matUnion.color.set("#a9805b");

  const cuerpo = new THREE.Group();
  escena.add(cuerpo);
  const partes = [];

  const agregar = (geo, pos, zona, { mat = matPiel, prof = 0.09, quat } = {}) => {
    const m = new THREE.Mesh(geo, mat.clone());
    m.position.copy(pos);
    if (quat) m.quaternion.copy(quat);
    m.castShadow = true;
    m.receiveShadow = true;
    m.userData = { zona, prof };
    cuerpo.add(m);
    partes.push(m);
    return m;
  };
  // Cápsula entre dos puntos; «escala» deforma la geometría (no la malla) para torso y pelvis.
  const hueso = (a, b, r, zona, opts = {}) => {
    const largo = a.distanceTo(b);
    const geo = new THREE.CapsuleGeometry(r, largo, 10, 32);
    if (opts.escala) geo.scale(...opts.escala);
    const quat = new THREE.Quaternion().setFromUnitVectors(EJE_Y, b.clone().sub(a).normalize());
    return agregar(geo, a.clone().add(b).multiplyScalar(0.5), zona, { prof: Math.max(0.03, r * 0.9), ...opts, quat });
  };
  const bola = (pos, r, zona, opts = {}) => {
    const geo = new THREE.SphereGeometry(r, 40, 28);
    if (opts.escala) geo.scale(...opts.escala);
    return agregar(geo, pos, zona, { prof: r * 0.9, ...opts });
  };

  bola(V(0, 1.635, 0.005), 0.1, () => "Cabeza", { escala: [0.86, 1.1, 0.96] });
  hueso(V(0, 1.44), V(0, 1.54), 0.052, (p, n) => (n.z < -0.3 ? "Nuca" : "Cuello"));
  // Torso de una pieza: perfil torneado (cadera, cintura, pecho, hombros) y aplanado de frente a espalda.
  const perfil = new THREE.SplineCurve(
    [[0.001, 0.835], [0.1, 0.85], [0.152, 0.9], [0.158, 0.97], [0.132, 1.05], [0.138, 1.13], [0.165, 1.22], [0.182, 1.3], [0.172, 1.37], [0.12, 1.42], [0.055, 1.445], [0.001, 1.45]].map(
      ([r, y]) => new THREE.Vector2(r, y),
    ),
  ).getPoints(80);
  const torso = new THREE.LatheGeometry(perfil, 72);
  torso.scale(1.08, 1, 0.62);
  agregar(torso, V(0, 0, 0), zonaTorso, { prof: 0.07 });

  for (const s of [-1, 1]) {
    bola(V(0.205 * s, 1.385), 0.064, zonaFija("Hombro"), { mat: matUnion });
    hueso(V(0.215 * s, 1.355), V(0.255 * s, 1.125), 0.05, zonaFija("Brazo"));
    bola(V(0.258 * s, 1.104), 0.045, zonaFija("Codo"), { mat: matUnion });
    hueso(V(0.262 * s, 1.085), V(0.29 * s, 0.865), 0.042, zonaFija("Antebrazo"));
    bola(V(0.292 * s, 0.848), 0.033, zonaFija("Muñeca", "f"), { mat: matUnion });
    bola(V(0.297 * s, 0.772), 0.06, zonaFija("Mano", "f"), { escala: [0.38, 1.15, 0.64] });
    hueso(V(0.095 * s, 0.85), V(0.1 * s, 0.53), 0.074, zonaFija("Muslo"));
    bola(V(0.1 * s, 0.505), 0.057, zonaFija("Rodilla", "f"), { mat: matUnion });
    hueso(V(0.1 * s, 0.48), V(0.1 * s, 0.125), 0.056, (p, n, m) => (n.z > 0.25 ? "Espinilla" : "Pantorrilla") + lado(m.position.x, "f"));
    bola(V(0.1 * s, 0.095), 0.04, zonaFija("Tobillo"), { mat: matUnion });
    hueso(V(0.1 * s, 0.045, -0.02), V(0.106 * s, 0.04, 0.13), 0.038, zonaFija("Pie"));
  }

  // ── Calcomanía (el tatuaje) ─────────────────────────────────────────────
  const texturas = new Map();
  const textura = async (id) => {
    if (!texturas.has(id)) {
      const t = new THREE.CanvasTexture(await canvasDiseno(porId(id).d));
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texturas.set(id, t);
    }
    return texturas.get(id);
  };
  const matDecal = new THREE.MeshStandardMaterial({
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    roughness: 0.5,
  });

  const estado = { id: idInicial, cm: cmInicial, giro: 0, malla: null, punto: null, normal: null, zona: "" };
  let decal = null;

  const ponerDecal = () => {
    if (decal) {
      escena.remove(decal);
      decal.geometry.dispose();
      decal = null;
    }
    if (!estado.malla) return;
    const ayudante = new THREE.Object3D();
    ayudante.position.copy(estado.punto);
    ayudante.lookAt(estado.punto.clone().add(estado.normal));
    ayudante.rotateZ(estado.giro);
    // El canvas trae 20 px de margen sobre 440: se compensa para que «cm» sea el alto real del diseño.
    const s = (estado.cm / 100) * (440 / 400);
    const prof = Math.min(s, estado.malla.userData.prof);
    decal = new THREE.Mesh(new DecalGeometry(estado.malla, estado.punto, ayudante.rotation, V(s, s, prof)), matDecal);
    escena.add(decal);
  };

  const avisar = () => alCambiar({ id: estado.id, cm: estado.cm, zona: estado.zona });

  const raycaster = new THREE.Raycaster();
  const puntero = new THREE.Vector2();
  const golpe = (ev) => {
    const r = renderer.domElement.getBoundingClientRect();
    puntero.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(puntero, camara);
    return raycaster.intersectObjects(partes, false)[0];
  };
  const colocar = (hit) => {
    const normal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
    Object.assign(estado, {
      malla: hit.object,
      punto: hit.point.clone(),
      normal,
      zona: hit.object.userData.zona(hit.point, normal, hit.object),
    });
    ponerDecal();
    avisar();
  };

  // Hover: resalta la zona y muestra su nombre junto al cursor.
  const etiqueta = document.createElement("div");
  etiqueta.className = "p3d-etiqueta";
  contenedor.append(etiqueta);
  let resaltada = null;
  const resaltar = (m) => {
    if (resaltada === m) return;
    if (resaltada) resaltada.material.emissive.set(0x000000);
    resaltada = m;
    if (m) m.material.emissive.set("#5a1712");
  };
  let pendiente = null;
  renderer.domElement.addEventListener("pointermove", (ev) => {
    if (ev.pointerType !== "mouse") return;
    pendiente = ev;
  });
  renderer.domElement.addEventListener("pointerleave", () => {
    pendiente = null;
    resaltar(null);
    etiqueta.classList.remove("ver");
  });
  const revisarHover = () => {
    if (!pendiente) return;
    const ev = pendiente;
    pendiente = null;
    const hit = golpe(ev);
    resaltar(hit?.object ?? null);
    renderer.domElement.style.cursor = hit ? "crosshair" : "grab";
    if (hit) {
      const n = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
      etiqueta.textContent = hit.object.userData.zona(hit.point, n, hit.object);
      const r = contenedor.getBoundingClientRect();
      etiqueta.style.transform = `translate(${ev.clientX - r.left + 16}px, ${ev.clientY - r.top + 14}px)`;
      etiqueta.classList.add("ver");
    } else etiqueta.classList.remove("ver");
  };

  // Clic sin arrastre = colocar.
  let inicio = null;
  renderer.domElement.addEventListener("pointerdown", (ev) => (inicio = { x: ev.clientX, y: ev.clientY, t: performance.now() }));
  renderer.domElement.addEventListener("pointerup", (ev) => {
    if (!inicio) return;
    const mov = Math.hypot(ev.clientX - inicio.x, ev.clientY - inicio.y);
    if (mov < 6 && performance.now() - inicio.t < 600) {
      const hit = golpe(ev);
      if (hit) colocar(hit);
    }
    inicio = null;
  });

  // Vista frente / espalda con un giro suave de la cámara.
  let giroObjetivo = null;
  const vista = (cual) => {
    controles.autoRotate = false;
    giroObjetivo = cual === "espalda" ? Math.PI : 0;
  };
  const esf = new THREE.Spherical();
  const moverCamara = () => {
    if (giroObjetivo === null) return;
    const off = camara.position.clone().sub(controles.target);
    esf.setFromVector3(off);
    let d = giroObjetivo - esf.theta;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    if (Math.abs(d) < 0.002) {
      giroObjetivo = null;
      return;
    }
    esf.theta += d * 0.12;
    camara.position.copy(controles.target).add(off.setFromSpherical(esf));
  };

  // Tamaño y bucle de render (solo mientras el probador está a la vista).
  const ajustar = () => {
    const { width, height } = contenedor.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camara.aspect = width / height;
    // En pantallas angostas se aleja la cámara para que entre el cuerpo entero.
    camara.fov = width / height < 0.8 ? 36 : 28;
    camara.updateProjectionMatrix();
  };
  new ResizeObserver(ajustar).observe(contenedor);
  ajustar();

  let visible = true;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(contenedor);
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    revisarHover();
    moverCamara();
    controles.update();
    renderer.render(escena, camara);
  });

  // Tatuaje inicial en el antebrazo derecho, visto de frente. El maniquí no espera
  // a la textura: la calcomanía aparece en cuanto el diseño está dibujado.
  cuerpo.updateMatrixWorld(true);
  raycaster.set(V(-0.276, 0.975, 1.5), V(0, 0, -1));
  const inicial = raycaster.intersectObjects(partes, false)[0];
  if (inicial) colocar(inicial);
  matDecal.visible = false;
  textura(estado.id).then((t) => {
    matDecal.map = t;
    matDecal.visible = true;
    matDecal.needsUpdate = true;
  });

  return {
    async setDiseno(id) {
      estado.id = id;
      matDecal.map = await textura(id);
      matDecal.visible = true;
      matDecal.needsUpdate = true;
      ponerDecal();
      avisar();
    },
    setTamano(cm) {
      estado.cm = cm;
      ponerDecal();
      avisar();
    },
    setGiro(grados) {
      estado.giro = (grados * Math.PI) / 180;
      ponerDecal();
    },
    vista,
    estado: () => ({ id: estado.id, cm: estado.cm, zona: estado.zona }),
  };
}
