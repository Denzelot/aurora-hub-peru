// ../../edicion-video-clientes/herramientas/remotion/src/tattoo/disenos.ts
var C = {
  negro: "#15120F",
  rojo: "#C8302A",
  rojoOsc: "#8E1C19",
  verde: "#2F7D4E",
  amarillo: "#F1B02F",
  azul: "#2B5E9E",
  aceroAzul: "#5E7F9E",
  crema: "#F6EBD3",
  cremaOsc: "#D9C49B",
  hueso: "#F2E4C4",
  acero: "#C9CDD1",
  cafe: "#7A4428",
  soga: "#D8B47A",
  celeste: "#7FC4D9",
  papel: "#EEE4CE",
  tinta: "#131312"
};
var n = (v) => v.toFixed(1);
var pol = (cx, cy, r, a) => `${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`;
var circulo = (cx, cy, r) => `M ${n(cx - r)} ${n(cy)} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
var elipse = (cx, cy, rx, ry) => `M ${n(cx - rx)} ${n(cy)} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0 Z`;
var festoneado = (cx, cy, r, lobulos, prof, rot = 0) => {
  let d = "";
  for (let i = 0; i < lobulos; i++) {
    const a0 = rot + i * 2 * Math.PI / lobulos;
    const a1 = rot + (i + 1) * 2 * Math.PI / lobulos;
    if (i === 0) d += `M ${pol(cx, cy, r, a0)}`;
    d += ` Q ${pol(cx, cy, r + prof * 2, (a0 + a1) / 2)} ${pol(cx, cy, r, a1)}`;
  }
  return d + " Z";
};
var espiral = (cx, cy, r0, r1, vueltas, inicio = 0) => {
  const pasos = 90;
  let d = "";
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    d += `${i ? " L" : "M"} ${pol(cx, cy, r0 + (r1 - r0) * t, inicio + t * vueltas * 2 * Math.PI)}`;
  }
  return d;
};
var hoja = (x, y, largo, ancho, grados) => {
  const a = grados * Math.PI / 180;
  const px = Math.cos(a + Math.PI / 2), py = Math.sin(a + Math.PI / 2);
  const tx = x + largo * Math.cos(a), ty = y + largo * Math.sin(a);
  const mx = (x + tx) / 2, my = (y + ty) / 2;
  return {
    forma: `M ${n(x)} ${n(y)} Q ${n(mx + px * ancho * 2)} ${n(my + py * ancho * 2)} ${n(tx)} ${n(ty)} Q ${n(mx - px * ancho * 2)} ${n(my - py * ancho * 2)} ${n(x)} ${n(y)} Z`,
    vena: `M ${n(x)} ${n(y)} Q ${n(mx + px * ancho * 0.4)} ${n(my + py * ancho * 0.4)} ${n(x + (tx - x) * 0.8)} ${n(y + (ty - y) * 0.8)}`
  };
};
var estrella = (cx, cy, R, r, puntas = 5, rot = -Math.PI / 2) => {
  let d = "";
  for (let i = 0; i < puntas * 2; i++) d += `${i ? " L" : "M"} ${pol(cx, cy, i % 2 ? r : R, rot + i * Math.PI / puntas)}`;
  return d + " Z";
};
var gota = (x, y, s = 1) => `M ${n(x)} ${n(y)} C ${n(x + 9 * s)} ${n(y + 13 * s)} ${n(x + 9 * s)} ${n(y + 22 * s)} ${n(x)} ${n(y + 22 * s)} C ${n(x - 9 * s)} ${n(y + 22 * s)} ${n(x - 9 * s)} ${n(y + 13 * s)} ${n(x)} ${n(y)} Z`;
var llama = (cx, base, w, h, espejo = false) => {
  const s = espejo ? -1 : 1;
  const X = (dx) => n(cx + s * dx);
  return `M ${X(-w / 2)} ${n(base)} C ${X(-w / 2)} ${n(base - h * 0.45)} ${X(-w * 0.15)} ${n(base - h * 0.5)} ${X(w * 0.05)} ${n(base - h)} C ${X(w * 0.12)} ${n(base - h * 0.62)} ${X(w / 2)} ${n(base - h * 0.5)} ${X(w / 2)} ${n(base)} Q ${X(0)} ${n(base + w * 0.22)} ${X(-w / 2)} ${n(base)} Z`;
};
var hI = hoja(165, 248, 128, 30, 142);
var hD = hoja(235, 248, 128, 30, 38);
var capullo = festoneado(200, 180, 100, 8, 9, -Math.PI / 2 + 0.2);
var interior = "M 142 175 C 140 120 175 105 200 107 C 230 107 262 125 258 175 C 240 192 224 196 200 190 C 176 196 160 192 142 175 Z";
var frente = "M 115 168 C 128 250 272 250 285 168 C 266 196 232 202 200 190 C 168 202 134 196 115 168 Z";
var ROSA = {
  rellenos: [
    { d: hI.forma, c: C.verde, capa: 0 },
    { d: hD.forma, c: C.verde, capa: 0 },
    { d: capullo, c: C.rojo },
    { d: interior, c: C.rojoOsc },
    { d: frente, c: C.rojo }
  ],
  lineas: [
    { d: capullo, w: 10 },
    { d: hI.forma, w: 9, capa: 0 },
    { d: hD.forma, w: 9, capa: 0 },
    { d: "M 142 175 C 140 120 175 105 200 107 C 230 107 262 125 258 175", w: 8 },
    { d: frente, w: 9 },
    { d: espiral(200, 152, 3, 34, 1.6, 0.4), w: 6 },
    { d: "M 112 150 Q 118 112 158 98", w: 6 },
    { d: "M 288 150 Q 282 112 242 98", w: 6 },
    { d: "M 138 252 Q 200 282 262 252", w: 6 },
    { d: "M 200 192 Q 194 214 182 232", w: 5 },
    { d: "M 115 168 Q 104 178 112 190", w: 6 },
    { d: "M 285 168 Q 296 178 288 190", w: 6 },
    { d: hI.vena, w: 5, capa: 0 },
    { d: hD.vena, w: 5, capa: 0 }
  ],
  blancos: ["M 146 130 Q 154 116 170 110", "M 232 226 Q 248 220 256 208", "M 124 206 Q 128 222 138 232", "M 300 300 l 0.1 0"]
};
var alaSup = "M 178 168 C 188 100 245 58 335 42 C 300 70 282 92 268 112 C 295 104 318 106 340 110 C 300 136 250 158 210 178 Z";
var alaInf = "M 196 196 C 190 252 160 292 112 322 C 160 306 188 290 208 268 C 205 292 200 308 196 322 C 232 292 248 252 244 206 Z";
var cuerpo = "M 108 186 C 112 160 138 147 165 153 C 205 162 245 188 282 212 L 352 208 L 302 230 L 356 262 L 272 240 C 222 240 162 232 126 212 C 115 204 108 196 108 186 Z";
var GOLONDRINA = {
  rellenos: [
    { d: alaInf, c: C.azul, capa: 0 },
    { d: cuerpo, c: C.azul },
    { d: "M 126 212 C 162 232 222 240 272 240 C 230 222 175 210 132 200 Z", c: C.crema },
    { d: "M 110 194 C 116 210 132 216 148 210 C 140 200 126 195 110 194 Z", c: C.rojo },
    { d: alaSup, c: C.azul },
    { d: "M 110 180 L 84 189 L 110 194 Z", c: C.negro },
    { d: circulo(134, 174, 6), c: C.negro }
  ],
  lineas: [
    { d: cuerpo, w: 9 },
    { d: alaSup, w: 9 },
    { d: alaInf, w: 9, capa: 0 },
    { d: "M 272 240 C 230 222 175 210 132 200", w: 6 },
    { d: "M 110 194 C 116 210 132 216 148 210", w: 6 },
    { d: "M 110 180 L 84 189 L 110 194", w: 7 },
    { d: "M 215 160 C 240 130 270 100 300 72", w: 5 },
    { d: "M 240 150 C 265 132 290 120 318 112", w: 5 },
    { d: "M 220 212 C 215 250 195 280 160 305", w: 5, capa: 0 }
  ],
  blancos: ["M 132 172 l 0.1 0", "M 196 140 Q 210 112 232 92", "M 150 160 Q 160 156 172 158"]
};
var corazon = "M 200 296 C 120 236 92 186 112 144 C 132 104 184 106 200 142 C 216 106 268 104 288 144 C 308 186 280 236 200 296 Z";
var cinta = "M 92 206 Q 200 236 308 206 L 308 248 Q 200 278 92 248 Z";
var colaI = "M 92 212 L 50 220 L 68 238 L 50 260 L 92 246 Z";
var colaD = "M 308 212 L 350 220 L 332 238 L 350 260 L 308 246 Z";
var DAGA = {
  rellenos: [
    { d: "M 186 104 L 214 104 L 212 320 L 200 388 L 188 320 Z", c: C.acero },
    { d: corazon, c: C.rojo },
    { d: colaI, c: C.cremaOsc },
    { d: colaD, c: C.cremaOsc },
    { d: cinta, c: C.crema },
    { d: "M 190 34 L 210 34 L 210 92 L 190 92 Z", c: C.cafe },
    { d: "M 148 90 Q 140 97 148 104 L 252 104 Q 260 97 252 90 Z", c: C.amarillo },
    { d: circulo(200, 24, 12), c: C.amarillo },
    { d: gota(222, 300, 0.9), c: C.rojo },
    { d: gota(182, 318, 0.7), c: C.rojo }
  ],
  lineas: [
    { d: corazon, w: 10 },
    { d: cinta, w: 8 },
    { d: colaI, w: 7 },
    { d: colaD, w: 7 },
    { d: "M 186 104 L 186.5 134 M 214 104 L 213.6 134", w: 7 },
    { d: "M 188.5 287 L 188 320 L 200 388 L 212 320 L 211.5 287", w: 7 },
    { d: "M 200 300 L 200 372", w: 4 },
    { d: "M 148 90 Q 140 97 148 104 L 252 104 Q 260 97 252 90 Z", w: 7 },
    { d: "M 190 34 L 210 34 L 210 92 L 190 92 Z", w: 7 },
    { d: circulo(200, 24, 12), w: 7 },
    { d: "M 190 52 L 210 47 M 190 66 L 210 61 M 190 80 L 210 75", w: 4 },
    { d: gota(222, 300, 0.9), w: 5 },
    { d: gota(182, 318, 0.7), w: 5 }
  ],
  blancos: ["M 132 150 Q 140 128 162 124", "M 262 190 Q 272 176 270 160", "M 207 112 L 207 128"],
  texto: { t: "AMOR", camino: "M 100 238 Q 200 270 300 238", s: 36 }
};
var brazos = "M 80 255 C 95 345 165 372 200 372 C 235 372 305 345 320 255 L 300 262 C 285 330 235 350 200 350 C 165 350 115 330 100 262 Z";
var unaI = "M 66 272 L 80 222 L 114 264 Z";
var unaD = "M 334 272 L 320 222 L 286 264 Z";
var cepo = "M 140 104 L 260 104 L 260 120 L 140 120 Z";
var soga = "M 182 72 C 120 118 272 148 200 190 C 128 232 276 262 200 302 C 156 324 124 304 142 282";
var ANCLA = {
  rellenos: [
    { d: circulo(200, 56, 24) + " " + circulo(200, 56, 12), c: C.amarillo, eo: true },
    { d: "M 189 80 L 211 80 L 211 352 L 189 352 Z", c: C.aceroAzul },
    { d: cepo, c: C.aceroAzul },
    { d: circulo(134, 112, 11), c: C.aceroAzul },
    { d: circulo(266, 112, 11), c: C.aceroAzul },
    { d: brazos, c: C.aceroAzul },
    { d: unaI, c: C.aceroAzul },
    { d: unaD, c: C.aceroAzul }
  ],
  lineas: [
    { d: circulo(200, 56, 24), w: 8 },
    { d: circulo(200, 56, 12), w: 6 },
    { d: "M 189 80 L 189 352 M 211 80 L 211 352", w: 8 },
    { d: cepo, w: 8 },
    { d: circulo(134, 112, 11), w: 7 },
    { d: circulo(266, 112, 11), w: 7 },
    { d: brazos, w: 9 },
    { d: unaI, w: 8 },
    { d: unaD, w: 8 },
    { d: soga, w: 15 },
    { d: soga, w: 8, c: C.soga }
  ],
  blancos: ["M 196 130 L 196 196", "M 112 300 Q 124 322 146 336", "M 192 50 Q 194 44 200 42"]
};
var craneo = "M 200 70 C 130 70 100 120 105 175 C 108 210 125 225 140 232 L 142 262 C 142 275 152 282 165 282 L 235 282 C 248 282 258 275 258 262 L 260 232 C 275 225 292 210 295 175 C 300 120 270 70 200 70 Z";
var llamas = [llama(92, 316, 96, 250), llama(308, 316, 96, 250, true), llama(200, 300, 170, 290)];
var llamasIn = [llama(84, 312, 46, 150), llama(316, 312, 46, 150, true), llama(200, 236, 80, 200)];
var CALAVERA = {
  rellenos: [
    ...llamas.map((d) => ({ d, c: C.rojo, capa: 0 })),
    ...llamasIn.map((d) => ({ d, c: C.amarillo, capa: 0 })),
    { d: craneo, c: C.hueso },
    { d: elipse(160, 175, 26, 24), c: C.negro },
    { d: elipse(240, 175, 26, 24), c: C.negro },
    { d: "M 200 205 L 187 234 L 213 234 Z", c: C.negro }
  ],
  lineas: [
    ...llamas.map((d) => ({ d, w: 9, capa: 0 })),
    ...llamasIn.map((d) => ({ d, w: 6, capa: 0 })),
    { d: craneo, w: 10 },
    { d: elipse(160, 175, 26, 24), w: 6 },
    { d: elipse(240, 175, 26, 24), w: 6 },
    { d: "M 152 262 L 248 262", w: 5 },
    { d: "M 172 250 L 172 282 M 186 250 L 186 282 M 200 250 L 200 282 M 214 250 L 214 282 M 228 250 L 228 282", w: 5 }
  ],
  blancos: ["M 148 100 Q 166 86 188 84", "M 154 168 l 0.1 0", "M 234 168 l 0.1 0", "M 272 196 Q 280 186 282 172"]
};
var rayos = Array.from({ length: 9 }, (_, i) => {
  const a = (-165 + i * (150 / 8)) * Math.PI / 180;
  const da = 6 * Math.PI / 180;
  return `M ${pol(200, 205, 100, a - da)} L ${pol(200, 205, 168, a)} L ${pol(200, 205, 100, a + da)} Z`;
});
var ojo = "M 80 205 Q 200 105 320 205 Q 200 300 80 205 Z";
var OJO = {
  rellenos: [
    ...rayos.map((d) => ({ d, c: C.amarillo, capa: 0 })),
    { d: ojo, c: "#FBF3E2" },
    { d: circulo(200, 203, 46), c: C.azul },
    { d: circulo(200, 203, 20), c: C.negro },
    { d: gota(200, 288, 1.1), c: C.celeste }
  ],
  lineas: [
    { d: ojo, w: 10 },
    ...rayos.map((d) => ({ d, w: 6, capa: 0 })),
    { d: circulo(200, 203, 46), w: 7 },
    { d: "M 96 188 Q 200 94 304 188", w: 6 },
    { d: gota(200, 288, 1.1), w: 6 }
  ],
  blancos: ["M 186 189 l 0.1 0", "M 214 232 Q 228 226 234 212", "M 120 196 Q 140 178 160 168"]
};
var est = estrella(200, 200, 150, 64);
var ESTRELLA = {
  rellenos: [{ d: est, c: C.amarillo }],
  lineas: [{ d: est, w: 14 }],
  blancos: ["M 186 120 L 196 90"]
};
var ray = "M 210 30 L 300 30 L 240 160 L 310 160 L 150 380 L 190 220 L 110 220 Z";
var RAYO = {
  rellenos: [{ d: ray, c: C.amarillo }],
  lineas: [{ d: ray, w: 14 }],
  blancos: ["M 222 50 L 196 112"]
};
var diam = "M 130 160 L 170 110 L 230 110 L 270 160 L 200 300 Z";
var DIAMANTE = {
  rellenos: [{ d: diam, c: C.celeste }, { d: "M 170 160 L 200 300 L 230 160 Z", c: "#B9E2EE" }],
  lineas: [{ d: diam, w: 12 }, { d: "M 130 160 L 270 160 M 170 160 L 200 110 L 230 160 M 170 160 L 200 300 L 230 160", w: 6 }],
  blancos: ["M 160 140 L 175 122"]
};
var luna = "M 236 80 A 122 122 0 1 0 236 320 A 96 96 0 1 1 236 80 Z";
var LUNA = {
  rellenos: [{ d: luna, c: C.amarillo }],
  lineas: [{ d: luna, w: 12 }],
  blancos: ["M 120 170 Q 126 136 150 114"]
};
var CINTA_CIERRE = {
  caja: [900, 260],
  rellenos: [
    { d: "M 120 78 L 26 100 L 72 140 L 26 186 L 120 162 Z", c: C.cremaOsc },
    { d: "M 780 78 L 874 100 L 828 140 L 874 186 L 780 162 Z", c: C.cremaOsc },
    { d: "M 120 64 Q 450 124 780 64 L 780 172 Q 450 232 120 172 Z", c: C.crema }
  ],
  lineas: [
    { d: "M 120 64 Q 450 124 780 64 L 780 172 Q 450 232 120 172 Z", w: 10 },
    { d: "M 120 78 L 26 100 L 72 140 L 26 186 L 120 162", w: 9 },
    { d: "M 780 78 L 874 100 L 828 140 L 874 186 L 780 162", w: 9 }
  ],
  blancos: ["M 160 90 Q 220 104 280 110"],
  texto: { t: "Reserva tu cita", camino: "M 140 146 Q 450 206 760 146", s: 78 }
};
export {
  ANCLA,
  C,
  CALAVERA,
  CINTA_CIERRE,
  DAGA,
  DIAMANTE,
  ESTRELLA,
  GOLONDRINA,
  LUNA,
  OJO,
  RAYO,
  ROSA,
  circulo,
  elipse
};
