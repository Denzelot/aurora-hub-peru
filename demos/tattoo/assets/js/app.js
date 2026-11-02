import { FLASH, porId, svgDiseno } from "./flash.js";
import { GOLONDRINA, ROSA, CALAVERA, CINTA_CIERRE } from "./disenos.js";

// Número del estudio en formato internacional sin «+» (vacío = WhatsApp elige el chat).
const WHATSAPP = "51932462537";
const DEPOSITO = 100;
const TARIFA_HORA = 160;
const MINIMO = 200;

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
const movil = matchMedia("(max-width: 760px)");
const soles = (n) => `S/ ${n.toLocaleString("es-PE")}`;
const horasTxt = (h) => `≈ ${String(h).replace(".", ",")} h`;

// ── Estimación referencial (la misma en probador, tarjetas y ticket) ──────
function estimar(id, cm) {
  const f = id ? porId(id) : null;
  const horas = Math.max(1, Math.round((0.55 + cm * 0.12 + Math.max(0, cm - 15) * 0.1) * 2) / 2);
  const precio = f
    ? Math.max(MINIMO, Math.round((f.precio * Math.pow(cm / f.cm, 1.15)) / 10) * 10)
    : Math.max(MINIMO, Math.round((horas * TARIFA_HORA) / 10) * 10);
  return { horas, precio };
}

// ── Ilustraciones pequeñas ───────────────────────────────────────────────
const MINIS = { golondrina: GOLONDRINA, rosa: ROSA, calavera: CALAVERA, cinta: CINTA_CIERRE };
$$("[data-mini]").forEach((el) => (el.innerHTML = svgDiseno(MINIS[el.dataset.mini], { anim: el.dataset.mini === "cinta" })));

// ── Catálogo de flash ────────────────────────────────────────────────────
const grid = $("#flash-grid");
grid.innerHTML = FLASH.map((f, i) => {
  const reservado = f.estado === "reservado";
  return `<article class="carta${reservado ? " reservado" : ""}" data-revelar style="--d:${(i % 3) * 0.08}s">
    <div class="carta-in">
      <span class="sello">${reservado ? "Reservado" : "Disponible"}</span>
      <div class="carta-arte">${svgDiseno(f.d, { anim: !quieto, titulo: f.nombre })}</div>
      <div class="carta-pie">
        <div><h3>${f.nombre}</h3><p class="carta-dato">≈ ${f.cm} cm · ${horasTxt(estimar(f.id, f.cm).horas)}</p></div>
        <p class="carta-precio"><small>precio fijo</small>${soles(f.precio)}</p>
      </div>
      <div class="carta-acc">
        <button type="button" class="btn btn-linea-oscuro" data-probar="${f.id}">Probar en 3D</button>
        <button type="button" class="btn btn-negro" data-reservar="${f.id}" ${reservado ? "disabled" : ""}>${reservado ? "Separado" : "Reservar"}</button>
      </div>
    </div>
  </article>`;
}).join("");

// Inclinación 3D de las tarjetas con el mouse.
if (matchMedia("(pointer: fine)").matches && !quieto) {
  $$(".carta").forEach((c) => {
    const tarjeta = $(".carta-in", c);
    c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tarjeta.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 12}deg) translateZ(0)`;
    });
    c.addEventListener("pointerleave", () => (tarjeta.style.transform = ""));
  });
}

// ── Aparición y dibujo al entrar en pantalla ─────────────────────────────
const vista = new IntersectionObserver(
  (entradas) =>
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visto");
      $$(".flash-svg.anim", e.target).forEach((s) => s.classList.add("dibujar"));
      if (e.target.matches(".flash-svg.anim")) e.target.classList.add("dibujar");
      vista.unobserve(e.target);
    }),
  { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
);
$$("[data-revelar], .pie-cinta .flash-svg").forEach((el) => vista.observe(el));

// ── Cabecera, menú y cursor ──────────────────────────────────────────────
const cab = $("#cab");
const menuBtn = $(".menu-btn");
const menu = $("#menu-movil");
const cerrarMenu = () => {
  menu.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
};
menuBtn.addEventListener("click", () => {
  const abrir = menu.hidden;
  menu.hidden = !abrir;
  menuBtn.setAttribute("aria-expanded", String(abrir));
});
$$("a", menu).forEach((a) => a.addEventListener("click", cerrarMenu));

const cursor = $(".cursor");
if (matchMedia("(pointer: fine)").matches && !quieto) {
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.toggle("grande", !!e.target.closest("a, button, label, summary, input[type=range]"));
    cursor.classList.toggle("oculto", !!e.target.closest(".p3d-lienzo canvas"));
  });
  document.addEventListener("pointerleave", () => cursor.classList.add("oculto"));
  const seguir = () => {
    cx += (tx - cx) * 0.22;
    cy += (ty - cy) * 0.22;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(seguir);
  };
  seguir();
} else cursor.remove();

// ── Hero: el marco crece hasta pantalla completa con el scroll ───────────
const hero = $(".hero");
const marco = $(".hero-marco");
const heroTxt = $(".hero-txt");
const heroScroll = $(".hero-scroll");
let tic = false;
function alScroll() {
  tic = false;
  cab.classList.toggle("solida", scrollY > 40);
  if (movil.matches) return;
  marco.style.setProperty("--s0", ((innerWidth * 0.47) / marco.offsetWidth).toFixed(4));
  const recorrido = hero.offsetHeight - innerHeight;
  const p = Math.min(1, Math.max(0, scrollY / (recorrido * 0.75)));
  const e = quieto ? (p > 0.5 ? 1 : 0) : 1 - Math.pow(1 - p, 3);
  marco.style.setProperty("--p", e.toFixed(4));
  const t = Math.min(1, p * 2.2);
  heroTxt.style.opacity = String(1 - t);
  heroTxt.style.transform = `translateY(calc(-46% - ${t * 60}px))`;
  heroScroll.style.opacity = String(1 - t * 2);
}
addEventListener("scroll", () => {
  if (!tic) {
    tic = true;
    requestAnimationFrame(alScroll);
  }
}, { passive: true });
movil.addEventListener("change", () => {
  marco.style.removeProperty("--p");
  alScroll();
});
addEventListener("resize", alScroll);
alScroll();

// Video: pausado fuera de pantalla para no gastar batería.
const video = $(".hero-video");
new IntersectionObserver(([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause()), { threshold: 0.05 }).observe(video);

// ── Rangos con relleno de color ──────────────────────────────────────────
const pintarRango = (r) => r.style.setProperty("--lleno", `${((r.value - r.min) / (r.max - r.min)) * 100}%`);
$$("input[type=range]").forEach((r) => {
  pintarRango(r);
  r.addEventListener("input", () => pintarRango(r));
});

// ── Probador 3D (se carga al acercarse) ──────────────────────────────────
const p3d = { api: null, id: "rosa", cm: 9, zona: "Antebrazo derecho" };
const lienzo = $("#p3d-lienzo");
const ayuda = $(".p3d-ayuda", lienzo);
if (matchMedia("(pointer: coarse)").matches) ayuda.innerHTML = ayuda.dataset.tactil;
const tam = $("#p3d-tam");
const giro = $("#p3d-giro");

$("#p3d-disenos").innerHTML = FLASH.map(
  (f) => `<button type="button" data-id="${f.id}" aria-pressed="${f.id === p3d.id}" aria-label="${f.nombre}">${svgDiseno(f.d)}</button>`,
).join("");

const marcar = (el, txt) => {
  if (el.textContent === txt) return;
  el.textContent = txt;
  el.classList.remove("cambio");
  void el.offsetWidth;
  el.classList.add("cambio");
};
function pintarResumen() {
  const { horas, precio } = estimar(p3d.id, p3d.cm);
  marcar($("#p3d-zona"), p3d.zona || "Haz clic en el cuerpo");
  marcar($("#p3d-horas"), horasTxt(horas));
  marcar($("#p3d-precio"), soles(precio));
  $("#p3d-cm").textContent = `${p3d.cm} cm`;
  $$("#p3d-disenos button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.id === p3d.id)));
}
pintarResumen();

function elegirDiseno(id) {
  const f = porId(id);
  p3d.id = id;
  p3d.cm = f.cm;
  tam.value = f.cm;
  pintarRango(tam);
  pintarResumen();
  p3d.api?.setTamano(f.cm);
  p3d.api?.setDiseno(id);
}
$("#p3d-disenos").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-id]");
  if (b) elegirDiseno(b.dataset.id);
});
tam.addEventListener("input", () => {
  p3d.cm = +tam.value;
  pintarResumen();
  p3d.api?.setTamano(p3d.cm);
});
giro.addEventListener("input", () => {
  $("#p3d-giro-v").textContent = `${giro.value}°`;
  p3d.api?.setGiro(+giro.value);
});
$$(".p3d-vistas button").forEach((b) =>
  b.addEventListener("click", () => {
    $$(".p3d-vistas button").forEach((x) => x.classList.toggle("activo", x === b));
    p3d.api?.vista(b.dataset.vista);
  }),
);

let cargando = null;
function cargarProbador() {
  cargando ??= import("./probador3d.js")
    .then(({ iniciarProbador }) =>
      iniciarProbador(lienzo, {
        idInicial: p3d.id,
        cmInicial: p3d.cm,
        alCambiar: (s) => {
          Object.assign(p3d, s);
          pintarResumen();
        },
      }),
    )
    .then((api) => {
      p3d.api = api;
      lienzo.classList.add("listo");
      return api;
    })
    .catch((err) => {
      console.error(err);
      $(".p3d-cargando", lienzo).textContent = "Tu navegador no pudo abrir el 3D. Puedes reservar igual con el formulario.";
    });
  return cargando;
}
new IntersectionObserver(([e], o) => {
  if (e.isIntersecting) {
    cargarProbador();
    o.disconnect();
  }
}, { rootMargin: "600px 0px" }).observe(lienzo);
// Con la página ya cargada, se bajan los módulos 3D en segundo plano para que el probador abra al instante.
addEventListener("load", () => setTimeout(() => import("./probador3d.js").catch(() => {}), 2500), { once: true });

// Botones «Probar en 3D» / «Reservar» de las tarjetas.
grid.addEventListener("click", (e) => {
  const probar = e.target.closest("[data-probar]");
  const reservar = e.target.closest("[data-reservar]");
  if (probar) {
    $("#probador").scrollIntoView({ behavior: quieto ? "auto" : "smooth" });
    cargarProbador().then(() => elegirDiseno(probar.dataset.probar));
  }
  if (reservar) {
    prellenar({ id: reservar.dataset.reservar, cm: porId(reservar.dataset.reservar).cm });
    $("#reserva").scrollIntoView({ behavior: quieto ? "auto" : "smooth" });
  }
});

$("#p3d-reservar").addEventListener("click", () => {
  prellenar({ id: p3d.id, cm: p3d.cm, zona: p3d.zona });
  irAPaso(2);
  $("#reserva").scrollIntoView({ behavior: quieto ? "auto" : "smooth" });
});

// ── Reserva en 5 pasos ───────────────────────────────────────────────────
const form = $("#res-form");
const ZONAS = ["Antebrazo", "Brazo", "Hombro", "Muñeca", "Mano", "Pecho", "Costillas", "Abdomen", "Espalda alta", "Espalda baja", "Cadera", "Muslo", "Pantorrilla", "Espinilla", "Tobillo", "Pie", "Cuello", "Nuca", "Otra / no sé aún"];
const selZona = $("#res-zona");
selZona.innerHTML = ZONAS.map((z) => `<option>${z}</option>`).join("");

$("#res-flash").innerHTML = FLASH.map(
  (f, i) =>
    `<label title="${f.nombre}"><input type="radio" name="flash" value="${f.id}" ${i === 0 ? "checked" : ""} ${f.estado === "reservado" ? "disabled" : ""} aria-label="${f.nombre}${f.estado === "reservado" ? " (reservado)" : ""}"><span>${svgDiseno(f.d)}</span></label>`,
).join("");

const resCm = $("#res-cm");
const pintarCm = () => ($("#res-cm-v").textContent = `${resCm.value} cm`);
resCm.addEventListener("input", pintarCm);

function prellenar({ id, cm, zona }) {
  form.elements.tipo.value = "flash";
  mostrarSegunTipo();
  const op = form.querySelector(`input[name=flash][value="${id}"]`);
  if (op && !op.disabled) op.checked = true;
  if (cm) {
    resCm.value = cm;
    pintarRango(resCm);
    pintarCm();
  }
  if (zona) {
    if (![...selZona.options].some((o) => o.value === zona)) selZona.add(new Option(zona, zona, true, true), 0);
    selZona.value = zona;
  }
}

function mostrarSegunTipo() {
  const tipo = form.elements.tipo.value;
  $$("[data-si]", form).forEach((el) => (el.hidden = !el.dataset.si.split(" ").includes(tipo)));
}
$$("input[name=tipo]", form).forEach((r) => r.addEventListener("change", mostrarSegunTipo));

// Referencias: arrastrar y soltar, con vista previa local.
const archivos = [];
const soltar = $("#soltar");
const entradaArch = $("#res-archivos");
function agregarArchivos(lista) {
  for (const f of lista) {
    if (!f.type.startsWith("image/") || archivos.length >= 5) continue;
    archivos.push({ f, url: URL.createObjectURL(f) });
  }
  pintarMiniaturas();
}
function pintarMiniaturas() {
  $("#miniaturas").innerHTML = archivos
    .map((a, i) => `<figure><img src="${a.url}" alt="Referencia ${i + 1}"><button type="button" data-quitar="${i}" aria-label="Quitar referencia ${i + 1}">×</button></figure>`)
    .join("");
}
$("#miniaturas").addEventListener("click", (e) => {
  const b = e.target.closest("[data-quitar]");
  if (!b) return;
  const [a] = archivos.splice(+b.dataset.quitar, 1);
  URL.revokeObjectURL(a.url);
  pintarMiniaturas();
});
entradaArch.addEventListener("change", () => {
  agregarArchivos(entradaArch.files);
  entradaArch.value = "";
});
["dragenter", "dragover"].forEach((t) => soltar.addEventListener(t, (e) => (e.preventDefault(), soltar.classList.add("encima"))));
["dragleave", "drop"].forEach((t) => soltar.addEventListener(t, () => soltar.classList.remove("encima")));
soltar.addEventListener("drop", (e) => {
  e.preventDefault();
  agregarArchivos(e.dataTransfer.files);
});

// Agenda: martes a sábado, cupos de ejemplo estables por fecha.
const HORAS = ["11:00", "13:30", "16:00", "18:30"];
const sel = { dia: null, hora: null };
const semilla = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const ocupada = (clave, hora, artista) => semilla(clave + hora + artista) % 3 === 0;
const fmtDia = new Intl.DateTimeFormat("es-PE", { weekday: "short" });
const fmtLargo = new Intl.DateTimeFormat("es-PE", { weekday: "long", day: "numeric", month: "long" });

function pintarDias() {
  const artista = form.elements.artista.value;
  const hoy = new Date();
  const dias = [];
  for (let i = 1; dias.length < 12; i++) {
    const d = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 1) continue;
    const clave = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const libres = HORAS.filter((h) => !ocupada(clave, h, artista)).length;
    dias.push({ d, clave, libres });
  }
  if (sel.dia && !dias.some((x) => x.clave === sel.dia && x.libres)) sel.dia = sel.hora = null;
  $("#dias").innerHTML = dias
    .map(
      ({ d, clave, libres }) =>
        `<button type="button" class="dia" role="radio" data-dia="${clave}" aria-checked="${sel.dia === clave}" ${libres ? "" : "disabled"}><small>${fmtDia.format(d).replace(".", "")}</small><b>${d.getDate()}</b><i>${libres ? `${libres} cupo${libres > 1 ? "s" : ""}` : "lleno"}</i></button>`,
    )
    .join("");
  pintarHoras();
}
function pintarHoras() {
  const artista = form.elements.artista.value;
  $("#horas").innerHTML = sel.dia
    ? HORAS.map(
        (h) =>
          `<button type="button" class="hora" role="radio" data-hora="${h}" aria-checked="${sel.hora === h}" ${ocupada(sel.dia, h, artista) ? "disabled" : ""}>${h}</button>`,
      ).join("")
    : `<p class="vacio">Elige un día para ver las horas libres.</p>`;
}
$("#dias").addEventListener("click", (e) => {
  const b = e.target.closest("[data-dia]");
  if (!b) return;
  sel.dia = b.dataset.dia;
  sel.hora = null;
  $$(".dia").forEach((x) => x.setAttribute("aria-checked", String(x === b)));
  pintarHoras();
});
$("#horas").addEventListener("click", (e) => {
  const b = e.target.closest("[data-hora]");
  if (!b) return;
  sel.hora = b.dataset.hora;
  $$(".hora").forEach((x) => x.setAttribute("aria-checked", String(x === b)));
});
form.elements.artista.addEventListener("change", pintarDias);
pintarDias();

// Botones «Reservar con …» de las artistas.
$$("[data-artista]").forEach((a) =>
  a.addEventListener("click", () => {
    const op = [...form.elements.artista.options].find((o) => o.value.startsWith(a.dataset.artista));
    if (op && !op.disabled) {
      form.elements.artista.value = op.value;
      pintarDias();
    }
  }),
);

// Navegación entre pasos y validación de cada uno.
let paso = 1;
const TOTAL = 5;
const error = $("#res-error");
function datos() {
  const fd = new FormData(form);
  const tipo = fd.get("tipo");
  const id = tipo === "flash" ? fd.get("flash") : null;
  const cm = +fd.get("cm");
  return {
    tipo,
    id,
    idea: (fd.get("idea") || "").trim(),
    zona: fd.get("zona"),
    cm,
    estilos: fd.getAll("estilo"),
    nombre: (fd.get("nombre") || "").trim(),
    whatsapp: (fd.get("whatsapp") || "").trim(),
    mayor: !!fd.get("mayor"),
    artista: fd.get("artista"),
    pago: fd.get("pago"),
    ...estimar(id, cm),
  };
}
function validar(n) {
  const d = datos();
  $$(".invalido", form).forEach((el) => el.classList.remove("invalido"));
  const mal = (el, msg) => (el?.classList.add("invalido"), el?.focus(), msg);
  if (n === 1 && d.tipo !== "flash" && d.idea.length < 8) return mal(form.elements.idea, "Cuéntanos tu idea en una o dos frases.");
  if (n === 2 && !d.estilos.length) return "Elige al menos un estilo.";
  if (n === 3) {
    if (d.nombre.length < 2) return mal(form.elements.nombre, "Escribe tu nombre.");
    if (d.whatsapp.replace(/\D/g, "").length < 9) return mal(form.elements.whatsapp, "Revisa tu número de WhatsApp (9 dígitos).");
    if (!d.mayor) return "Para tatuarte necesitas tener 18 años o más.";
  }
  if (n === 4 && !(sel.dia && sel.hora)) return "Elige un día y una hora.";
  return "";
}
function irAPaso(n) {
  paso = n;
  $$(".paso", form).forEach((f) => f.classList.toggle("activo", +f.dataset.paso === n));
  $$("#res-mapa li").forEach((li, i) => {
    li.classList.toggle("activo", i + 1 === n);
    li.classList.toggle("hecho", i + 1 < n);
  });
  $("#res-barra").style.width = `${(n / TOTAL) * 100}%`;
  $("#res-atras").hidden = n === 1;
  $("#res-sig").hidden = n === TOTAL;
  $("#res-enviar").hidden = n !== TOTAL;
  error.textContent = "";
  if (n === TOTAL) pintarTicket();
}
$("#res-sig").addEventListener("click", () => {
  const msg = validar(paso);
  error.textContent = msg;
  if (!msg) {
    irAPaso(paso + 1);
    form.scrollIntoView({ block: "start", behavior: quieto ? "auto" : "smooth" });
  }
});
$("#res-atras").addEventListener("click", () => irAPaso(paso - 1));

function fechaTxt() {
  if (!sel.dia) return "";
  const [y, m, d] = sel.dia.split("-").map(Number);
  return `${fmtLargo.format(new Date(y, m - 1, d))}, ${sel.hora}`;
}
function pintarTicket() {
  const d = datos();
  const f = d.id ? porId(d.id) : null;
  const titulo = f ? f.nombre : d.tipo === "cover" ? "Cover-up" : "Diseño propio";
  $("#ticket").innerHTML = `
    <div class="ticket-arte${f ? "" : " texto"}">${f ? svgDiseno(f.d) : "?"}</div>
    <dl>
      <dt>Diseño</dt><dd>${titulo}</dd>
      <dt>Zona</dt><dd>${d.zona} · ${d.cm} cm</dd>
      <dt>Cita</dt><dd>${fechaTxt()}</dd>
      <dt>Artista</dt><dd>${d.artista}</dd>
      <dt>Sesión</dt><dd>${horasTxt(d.horas)} · desde ${soles(d.precio)}</dd>
      <div class="total"><span>Depósito hoy</span><b>${soles(DEPOSITO)}</b></div>
    </dl>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = datos();
  const f = d.id ? porId(d.id) : null;
  const lineas = [
    "Hola Aurora Hub Perú, vi el concepto «Casa Golondrina». Quiero reservar:",
    `• Diseño: ${f ? `flash «${f.nombre}»` : d.tipo === "cover" ? "cover-up" : "diseño propio"}`,
    d.idea && `• Idea: ${d.idea}`,
    `• Zona: ${d.zona}, unos ${d.cm} cm`,
    `• Estilo: ${d.estilos.join(", ")}`,
    `• Artista: ${d.artista}`,
    `• Cita: ${fechaTxt()}`,
    `• Depósito: ${soles(DEPOSITO)} por ${d.pago}`,
    archivos.length && `• Tengo ${archivos.length} referencia${archivos.length > 1 ? "s" : ""}: las envío por aquí.`,
    `Soy ${d.nombre} (${d.whatsapp}).`,
  ].filter(Boolean);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join("\n"))}`, "_blank", "noopener");
  $$("#res-mapa li").forEach((li) => (li.classList.remove("activo"), li.classList.add("hecho")));
  form.innerHTML = `<div class="res-ok">
    <div class="cinta-ok">${svgDiseno(CINTA_CIERRE, { anim: !quieto })}</div>
    <h3>¡Listo, ${d.nombre.split(" ")[0]}!</h3>
    <p>Te abrimos WhatsApp con todo el detalle. Tu artista te responde con el boceto y el enlace del depósito.</p>
    <button type="button" class="btn btn-linea-oscuro" onclick="location.reload()">Hacer otra reserva</button>
  </div>`;
  requestAnimationFrame(() => $(".res-ok .flash-svg")?.classList.add("dibujar"));
});

// Enlaces genéricos de WhatsApp.
$$("[data-wa]").forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Aurora Hub Perú, vi el concepto «Casa Golondrina». Tengo una consulta sobre un tatuaje.")}`;
  a.target = "_blank";
  a.rel = "noopener";
});

irAPaso(1);
