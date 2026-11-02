// Catálogo de flash y dibujo de cada diseño en SVG.
// Los diseños salen del mismo archivo que el video del hero (disenos.ts → disenos.js),
// así la web y el video usan exactamente las mismas piezas.
import { ROSA, GOLONDRINA, DAGA, ANCLA, CALAVERA, OJO, ESTRELLA, RAYO, DIAMANTE, LUNA, C } from "./disenos.js";

export { C };

// Precios y tamaños de ejemplo para la demo: el estudio real pone los suyos.
export const FLASH = [
  { id: "rosa", nombre: "Rosa clásica", d: ROSA, cm: 9, precio: 280, estado: "disponible" },
  { id: "golondrina", nombre: "Golondrina", d: GOLONDRINA, cm: 8, precio: 250, estado: "disponible" },
  { id: "daga", nombre: "Daga con corazón", d: DAGA, cm: 13, precio: 380, estado: "reservado" },
  { id: "ancla", nombre: "Ancla marinera", d: ANCLA, cm: 11, precio: 300, estado: "disponible" },
  { id: "calavera", nombre: "Calavera en llamas", d: CALAVERA, cm: 11, precio: 340, estado: "disponible" },
  { id: "ojo", nombre: "Ojo radiante", d: OJO, cm: 9, precio: 260, estado: "disponible" },
];

export const MINI = { ESTRELLA, RAYO, DIAMANTE, LUNA };

export const porId = (id) => FLASH.find((f) => f.id === id);

const PLANTILLA = "#5A4FB0";
let cuenta = 0;

// Devuelve el SVG del diseño. Con anim=true lleva las clases que animan
// plantilla → línea → color → brillos, igual que en el video.
export function svgDiseno(d, { anim = false, titulo = "" } = {}) {
  const [W, H] = d.caja ?? [400, 400];
  const uid = `fx${++cuenta}`;
  let i = 0;
  const capas = [0, 1]
    .map((capa) => {
      const rell = d.rellenos
        .filter((r) => (r.capa ?? 1) === capa)
        .map((r) => `<path d="${r.d}" fill="${r.c}" fill-rule="${r.eo ? "evenodd" : "nonzero"}"/>`)
        .join("");
      const lineas = d.lineas.filter((l) => (l.capa ?? 1) === capa);
      const plant = anim
        ? `<g class="plant" transform="translate(3 2)">${lineas
            .map((l) => `<path d="${l.d}" fill="none" stroke="${PLANTILLA}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`)
            .join("")}</g>`
        : "";
      const lin = lineas
        .map(
          (l) =>
            `<path class="ln" style="--i:${i++}" d="${l.d}" fill="none" stroke="${l.c ?? C.negro}" stroke-width="${l.w ?? 8}" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/>`,
        )
        .join("");
      return `<g class="rell">${rell}</g>${plant}<g class="lin">${lin}</g>`;
    })
    .join("");
  const texto = d.texto
    ? `<path id="${uid}t" d="${d.texto.camino}" fill="none"/><text class="tx" font-family="Sink, Anton, sans-serif" font-size="${d.texto.s}" fill="${d.texto.c ?? C.negro}" text-anchor="middle" letter-spacing="2"><textPath href="#${uid}t" startOffset="50%">${d.texto.t}</textPath></text>`
    : "";
  const blancos = (d.blancos ?? [])
    .map((b) => `<path class="bl" d="${b}" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" pathLength="1"/>`)
    .join("");
  const rol = titulo ? `role="img" aria-label="${titulo}"` : `aria-hidden="true"`;
  return `<svg class="flash-svg${anim ? " anim" : ""}" viewBox="-20 -20 ${W + 40} ${H + 40}" ${rol} style="--n:${i}">${capas}${texto}${blancos}</svg>`;
}

// Textura para el probador 3D: el diseño en un canvas cuadrado con borde
// transparente. La fuente del texto se dibuja aparte porque un SVG cargado
// como imagen no ve las fuentes de la página.
export async function canvasDiseno(d, px = 1024) {
  const sinTexto = { ...d, texto: undefined };
  const svg = svgDiseno(sinTexto).replace("<svg ", `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" `);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const img = new Image();
  await new Promise((ok, mal) => {
    img.onload = ok;
    img.onerror = mal;
    img.src = url;
  });
  URL.revokeObjectURL(url);
  const cv = document.createElement("canvas");
  cv.width = cv.height = px;
  const ctx = cv.getContext("2d");
  ctx.drawImage(img, 0, 0, px, px);
  if (d.texto) {
    // Sin esperar más de 1,5 s: si la fuente no llega, se usa Anton.
    await Promise.race([document.fonts.load(`${d.texto.s}px Sink`).catch(() => {}), new Promise((r) => setTimeout(r, 1500))]);
    const k = px / 440; // viewBox de 440 (400 + 2×20)
    ctx.save();
    ctx.scale(k, k);
    ctx.translate(20, 20);
    ctx.font = `${d.texto.s}px Sink, Anton, sans-serif`;
    ctx.fillStyle = d.texto.c ?? C.negro;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    // En el SVG la línea base va sobre el camino; el de «AMOR» es una curva suave
    // cuyo punto medio está en y = 254, así que basta con escribirlo ahí.
    ctx.fillText(d.texto.t, 200, 255);
    ctx.restore();
  }
  return cv;
}
