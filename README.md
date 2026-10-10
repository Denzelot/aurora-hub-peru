# Aurora Hub Perú

Web oficial de **Aurora Hub Perú** — tecnología y marketing que enciende tu negocio.
www.aurorahubperu.com · WhatsApp +51 932 462 537

## Qué incluye
- Web de una sola página (`index.html`), sin dependencias: todo el diseño, la animación de partículas (WebGL), el sonido y el asistente están dentro del archivo.
- 21 servicios, diagnóstico interactivo, cursos (próximamente), formulario a WhatsApp.
- Modo claro y oscuro, cursor de luz, nave asistente y salto al hiperespacio.
- Logotipos en SVG en `assets/logos/`.

## Publicación (Vercel)
- La web está alojada en Vercel, en el proyecto `aurora-hub-peru`, conectado a este repositorio: cada push a `main` se publica solo.
- Dominios: `www.aurorahubperu.com` (principal) y `aurorahubperu.com`, que redirige a `www`. El DNS del dominio se administra en Vercel.
- **Web Analytics** y **Speed Insights** de Vercel están activados; sus scripts (`/_vercel/insights/script.js` y `/_vercel/speed-insights/script.js`) van en el `<head>` de `index.html` y solo funcionan en Vercel.
