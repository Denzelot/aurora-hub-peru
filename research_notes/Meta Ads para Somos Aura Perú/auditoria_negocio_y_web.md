# Auditoría del negocio y de la web de Aura (somosauraperu.com) para Meta Ads — noviembre 2026

**Método y fecha.** Todo lo que aparece como "verificado" se leyó de primera mano el 12/11/2026: HTML de 17 URLs del sitio descargado con `curl` (portada, `/nosotros`, `/servicios` y sus 3 subpáginas, `/pr-talentos` y sus 4 perfiles, `/hablemos`, `/proyectos`, `/aurora`, `/balu`, `/privacidad`, más `robots.txt`, `sitemap.xml`, `llms.txt`, `manifest.webmanifest`), los 14 archivos JavaScript que cargan la portada y `/hablemos`, y un render con Chromium headless (Playwright) emulando un Pixel 7 para el sitio de Aura. Instagram, la página de Facebook y la Biblioteca de Anuncios se abrieron con Chromium en configuración por defecto, sin iniciar sesión. Los buscadores (WebSearch) no devolvieron ningún resultado sobre esta agencia. No se envió el formulario de contacto (habría generado un lead falso). LinkedIn y TikTok no se pudieron abrir (hosts fuera de la red permitida de la sesión).

## 1. ¿Qué vende Aura exactamente? (servicios, precios, público, propuesta de valor, casos, clientes, talentos, equipo, ubicación, antigüedad)

### Takeaway
Aura es una agencia creativa pequeña de Lima, liderada por su fundadora Leslie Arboleda, que vende cuatro servicios a marcas (Branding, Redes sociales, PR Talentos / influencer marketing y Ads) y representa un roster de solo 4 talentos; no publica ningún precio, paquete, testimonio ni cifra de resultados. Su prueba más fuerte es el portafolio de branding (13 proyectos, varios de marcas de Oxapampa); el servicio de influencers es el menos respaldado (4 perfiles, solo 1 con datos de audiencia, ningún caso de campaña con creadores).

### Cited Findings

**Identidad y posicionamiento**
- Título del sitio: "Aura — Agencia creativa · Lima, Perú". Meta descripción: "Estrategia, creatividad e influencia para construir marcas con identidad, presencia y propósito. Branding, redes sociales, PR talentos y ads." — [Portada](https://somosauraperu.com/)
- Titular de `/nosotros`: "Una agencia creativa para marcas con algo que decir." Descripción: "Aura es una agencia creativa con base en Lima. Unimos estrategia, creatividad e influencia para construir marcas con identidad, presencia y propósito: desde la idea y la identidad visual hasta el contenido, el talento y la publicidad que las lleva a las personas correctas." — [Nosotros](https://somosauraperu.com/nosotros)
- Titular de `/servicios`: "Soluciones reales para ideas con alma. Creamos, conectamos y potenciamos marcas y creadores a través de estrategia, diseño, contenido y tecnología." — [Servicios](https://somosauraperu.com/servicios)
- Ubicación declarada: "Lima, Perú" (sin distrito ni dirección física). El JSON-LD de la portada declara `Organization` con `addressLocality: Lima`, `areaServed: Perú`, teléfono +51936309038 y correo hola@somosauraperu.com. — [Portada](https://somosauraperu.com/)

**Servicios (los cuatro, con lo que incluye cada uno)**
- **Branding** — "Construimos marcas que se reconocen". Incluye: Estrategia de marca, Naming, Identidad visual, Rebranding, Dirección de arte, Aplicaciones, Manual de marca. Para quién: "Marcas que están naciendo y quieren construirse bien desde el inicio"; "Marcas que crecieron y ya no se ven como lo que son"; "Negocios que necesitan ordenar su imagen antes de invertir en contenido o publicidad". Proceso: Escuchar → Definir → Diseñar → Entregar. Titular: "Una marca no empieza con un logo." — [Branding](https://somosauraperu.com/servicios/branding)
- **Redes sociales** — "Hacemos que tu marca tenga algo que decir". Incluye: Estrategia, Contenido, Diseño, Copywriting, Gestión. Para quién: "Marcas que publican sin un plan claro"; "Marcas con una identidad definida que necesitan llevarla al contenido"; "Negocios que no tienen tiempo para sostener sus redes con constancia". Proceso: Diagnóstico → Estrategia → Producción → Gestión y ajuste. Titular: "Estar en redes no es lo mismo que tener presencia." — [Redes sociales](https://somosauraperu.com/servicios/redes-sociales)
- **PR Talentos / Influencer marketing** — "Conectamos tu marca con el talento correcto. Seleccionamos creadores según su audiencia, estilo y afinidad con la marca para desarrollar campañas y colaboraciones que se sientan auténticas." Incluye: Campañas, Content creators, Embajadores, Partnerships, Eventos. — [PR Talentos](https://somosauraperu.com/pr-talentos); [Servicios](https://somosauraperu.com/servicios)
- **Ads** — "Hacemos que tu marca llegue más lejos". Incluye: Meta Ads, Campañas, Audiencias, Remarketing, Optimización. Para quién: "Marcas que quieren llegar a nuevas personas"; "Negocios que necesitan generar consultas, ventas o reservas"; "Marcas que ya invierten en publicidad y quieren hacerlo con más criterio". Proceso: Objetivo → Estrategia → Lanzamiento → Optimización. La página dice literalmente "No se prometen cifras." Titular: "Publicar no es lo mismo que llegar." — [Ads](https://somosauraperu.com/servicios/ads)
- Línea adicional "Aura × Aurora": IA, webs/tiendas/apps, chatbots y automatizaciones, presentada como "un ecosistema independiente de Aura" operado con Aurora Hub Perú. — [Aura × Aurora](https://somosauraperu.com/aurora)
- Alianza "Aura × Balu" (invitaciones, papelería y detalles para bodas y celebraciones) marcada como "Próximamente. Estamos preparando la alianza Aura × Balu." — [Balu](https://somosauraperu.com/balu)

**Precios y paquetes**
- No hay ningún precio, tarifa, paquete ni rango de inversión en ninguna de las páginas leídas; los botones de servicio dicen "Cotizar" o "Hablemos de [servicio]" y llevan al formulario. — [Servicios](https://somosauraperu.com/servicios); [Portada](https://somosauraperu.com/)

**Dos públicos distintos**
- Marcas/negocios: es el público de los cuatro servicios (ver "Para quién es" arriba). — [Branding](https://somosauraperu.com/servicios/branding)
- Creadores que quieren representación: la página de talentos tiene un segundo botón "Quiero ser parte" que lleva a `/hablemos?servicio=roster`. No hay página propia para creadores ni requisitos publicados. — [PR Talentos](https://somosauraperu.com/pr-talentos)

**Roster de talentos (4 perfiles; el sitio no muestra número de seguidores de ninguno)**
- Yvonne Frayssinet — @yfrayssinet (Instagram) — categoría "Actuación" — "Actriz y amante de las historias que conectan con las personas." Sin datos de audiencia en su ficha. — [Ficha](https://somosauraperu.com/pr-talentos/yvonne-frayssinet)
- Marcelo Oxenford — @marcelooxenford (Instagram) — "Actuación y teatro" — "Actor, director y profesor de teatro." Sin datos de audiencia. — [Ficha](https://somosauraperu.com/pr-talentos/marcelo-oxenford)
- Elizabeth Melgarejo "EliLumeli" — @elilumeli (Instagram) y @elilumelii (TikTok) — "Arquitectura e interiorismo". Es la única ficha con métricas: "Reproducciones de los últimos 365 días"; Mujeres 63.4 % / Hombres 36.6 %; Perú 77.5 %, Chile 12.5 %, México 10 %; edades 18–24: 31 %, 25–34: 45 %, 35–44: 18.3 %, 45–54: 5 %; "Alcance 267 K"; "Engagement 1,5 %". — [Ficha](https://somosauraperu.com/pr-talentos/eli-lumeli)
- Giomar Faichin — @giomar.faichin.designer (Instagram) — "Diseño de moda". Su ficha menciona ocho looks para «Instinto Salvaje» de Bigioni (2026, con Marina Mora) y haber sido jurado de Miss Teen Model Perú 2021 y Little Queen Perú. Sin datos de audiencia. — [Ficha](https://somosauraperu.com/pr-talentos/giomar-faichin)

**Portafolio y clientes**
- `/proyectos` declara "13 proyectos · 2018 – 2026". Lista: La Nidada (2026, branding; huevos de gallinas libres, Oxapampa); Canepa & Girbau (2026, branding y dirección creativa; café de especialidad, Oxapampa); KaneFoods (2026, branding; snacks para perros); Abeejita (2025, branding y redes; miel, Oxapampa); Optometry Center (2025, logotipo e identidad); Kalevisión — distribuidor oficial Prats (2025, dirección creativa y contenido para redes); Café Lunara (2024–2025, branding); Dossis (2024, branding; restaurante en San Isidro); Abeejita — tienda online (2026, web, "trabajo conjunto con Aurora Hub Perú"); Aurora Hub Perú (2026, web); Cubierto ("En curso", publicidad digital en Meta); Canepa & Girbau — web (2026, "acompañada de una serie de anuncios para Meta"); Adriana Ríos ("En lanzamiento", web). — [Proyectos](https://somosauraperu.com/proyectos)
- Único caso de Ads: Cubierto. "Llevamos la publicidad digital de Cubierto en Meta: la estrategia, la configuración de la cuenta publicitaria y la gestión de las campañas en Facebook e Instagram. La cuenta está activa, así que los números cambian cada semana; por eso aquí no hay ninguno." — [Proyectos](https://somosauraperu.com/proyectos)
- La franja "Marcas que confían en nosotros" de la portada carga 15 logotipos (por nombre de archivo): la-nidada, canepa-girbau, kanefoods, optometry-center, abeejita, kalevision, cafe-lunara, aurora-hub, cubierto, adriana-rios, gf, mango, mova, mimitos, rdc-group. — [Portada](https://somosauraperu.com/)
- Contexto del socio técnico: Aurora Hub Perú publica, para Abeejita (cliente de branding de Aura), "+4,000 leads por WhatsApp desde anuncios… S/ 1.03 por lead en promedio" con campañas de Meta Ads hacia WhatsApp. — [Aurora Hub Perú · Proyectos](https://www.aurorahubperu.com/proyectos/#caso-abeejita) (leído de la copia del repositorio local)

**Equipo y antigüedad**
- Leslie Arboleda — "Fundadora & Directora Creativa"; "licenciada en Diseño Gráfico… Desde 2018 trabajo en branding, campañas, rebranding y contenido para redes, en agencias, empresas y proyectos independientes." Enlace a linkedin.com/in/lesliearboleda. — [Nosotros](https://somosauraperu.com/nosotros)
- Denzel Mesias — "Director of GenAI & Agentic AI"; aparece ligado a Aurora Hub Perú, "la alianza tecnológica de Aura… De ahí sale la infraestructura que sostiene lo que hacemos, esta misma web incluida." — [Nosotros](https://somosauraperu.com/nosotros)
- Pie de página: "© Aura 2026 · Design by Aura × Aurora Hub Perú". — [Portada](https://somosauraperu.com/)

**Lo que NO existe en el sitio**
- No hay testimonios, reseñas de clientes, FAQ, blog (`/blog` devuelve 404), lead magnet descargable, página de precios ni enlace de agenda (Calendly o similar). El JSON-LD no incluye reseñas ni valoraciones. — [Portada](https://somosauraperu.com/); [Sitemap](https://somosauraperu.com/sitemap.xml)

### Inferences
- El año de fundación de la agencia no está publicado. "2018" es el inicio de la carrera de Leslie y el arranque del rango del portafolio, pero los proyectos listados con fecha van de 2024 a 2026; junto con los 23 posts y 141 seguidores de Instagram (ver sección 4), todo apunta a una marca de agencia muy reciente.
- Es, en la práctica, un estudio de una persona (fundadora diseñadora) apoyado en un socio técnico (Aurora Hub Perú); no se listan más integrantes.
- La oferta más creíble para tráfico pagado es Branding (8 de 13 proyectos) y, en segundo lugar, Redes sociales. PR Talentos tiene roster corto y sin casos de campaña; Ads tiene un solo caso sin cifras.
- El nicho de portafolio es consistente: marcas de alimentos/consumo de origen (Oxapampa), óptica, cafés y restaurantes; es decir, pymes y emprendimientos, no grandes anunciantes.
- Al no haber precios ni cifras, el anuncio tendrá que precalificar por sí mismo (tipo de negocio, etapa, presupuesto); de lo contrario llegarán consultas de bajo ticket.

### Gaps
- Año de constitución, razón social y RUC: no figuran en el sitio.
- Seguidores de los 4 talentos: el sitio no los muestra y no se abrieron sus perfiles.
- Qué marcas son "gf", "mango", "mova", "mimitos" y "rdc-group" (solo se ve el nombre del archivo del logo) y qué trabajo se hizo para ellas.
- Si hay contrato de representación exclusiva con los talentos (en especial figuras conocidas como Yvonne Frayssinet): el sitio solo dice "roster".
- Tarifas reales: no publicadas.

## 2. ¿Qué llamados a la acción tiene la web y cómo es el recorrido hasta el contacto?

### Takeaway
Hay tres vías de contacto —formulario en `/hablemos`, WhatsApp +51 936 309 038 con mensaje prellenado y correo— y páginas propias por servicio, pero el recorrido está pensado para explorar la marca, no para convertir tráfico pagado: el botón principal lleva a un formulario que queda bajo el primer pliegue, pide correo (no teléfono) y promete respuesta solo por email. Lo más aprovechable para anuncios es el parámetro `?servicio=`, que preselecciona el servicio en el formulario, y las páginas por servicio.

### Cited Findings
- **WhatsApp:** número +51 936 309 038; enlace `https://wa.me/51936309038?text=Hola Aura, vengo desde la web y me gustaría conversar sobre un proyecto.` El mismo texto prellenado se usa en todas las ubicaciones (menú, sección de contacto, pie, botón flotante); no cambia por servicio. — [Portada](https://somosauraperu.com/)
- **Botón flotante de WhatsApp ("Escríbenos"):** existe, de 52 px, abajo a la derecha, pero en móvil está oculto (opacidad 0, sin clic) en la primera pantalla; en la prueba seguía oculto a 514 px de scroll y ya era visible a 1.028 px. — [Portada](https://somosauraperu.com/) (render con Chromium, viewport 412×839)
- **CTA principal de la portada:** "Trabaja con Aura" → `/hablemos`, visible en la primera pantalla (a ~333 px del tope en móvil); el secundario es "Conoce Aura" → `/nosotros`. En el hero no hay botón de WhatsApp visible. — [Portada](https://somosauraperu.com/)
- **Formulario (`/hablemos`):** campos Nombre*, Empresa / Marca, Email*, Instagram / Web (placeholder "@tumarca"), "¿Qué necesitas?"* (Branding, Redes sociales, PR Talentos, Ads, Otro), Mensaje* (máx. 2000 caracteres) y un campo trampa antispam; botón "Enviar mensaje". No pide teléfono ni WhatsApp. — [Hablemos](https://somosauraperu.com/hablemos)
- En móvil el formulario empieza a 824 px del tope (la pantalla mide 839 px), o sea, justo debajo del primer pliegue; antes aparecen el titular "¿Creamos algo juntos?", el correo y el WhatsApp. El botón de envío queda a ~1.719 px. — [Hablemos](https://somosauraperu.com/hablemos) (render con Chromium)
- **Preselección por URL:** `/hablemos?servicio=ads` marca "Ads" y `/hablemos?servicio=roster` marca "PR Talentos" (verificado en el render). El código admite `branding`, `redes-sociales`, `pr-talentos`, `roster` y `ads`. — [Hablemos](https://somosauraperu.com/hablemos?servicio=ads)
- **Tras enviar:** no hay página de gracias (`/gracias` devuelve 404); el formulario se reemplaza por "Gracias por escribirnos. Tu mensaje llegó a Aura. Te responderemos al correo que dejaste." El código trae un texto alterno: "Recibimos tus datos. Mientras terminamos de conectar el envío automático, también puedes escribirnos a hola@somosauraperu.com." — [Hablemos](https://somosauraperu.com/hablemos) (código JS del formulario)
- La página de privacidad confirma que el correo "es la única vía de respuesta" del formulario. — [Privacidad](https://somosauraperu.com/privacidad)
- **Correo:** hola@somosauraperu.com (enlace `mailto:`) en menú, contacto y pie. — [Portada](https://somosauraperu.com/)
- **Páginas por servicio:** `/servicios/branding`, `/servicios/redes-sociales`, `/servicios/ads` y `/pr-talentos` (la ruta `/servicios/pr-talentos` redirige a `/pr-talentos`). Cada una tiene: qué hacemos, para quién es, qué incluye, cómo trabajamos, qué puede esperar, proyectos relacionados y cierre con "Trabaja con Aura" → `/hablemos` (sin `?servicio=`, salvo en PR Talentos). — [Branding](https://somosauraperu.com/servicios/branding); [Ads](https://somosauraperu.com/servicios/ads); [PR Talentos](https://somosauraperu.com/pr-talentos)
- **PR Talentos** tiene dos botones en el hero: "Hablemos" → `/hablemos?servicio=pr-talentos` (marcas) y "Quiero ser parte" → `/hablemos?servicio=roster` (creadores). Ambos terminan en el mismo formulario con la misma opción "PR Talentos" marcada. — [PR Talentos](https://somosauraperu.com/pr-talentos)
- **Portafolio:** `/proyectos` con 13 proyectos, descripciones y entregables, sin cifras ni testimonios. — [Proyectos](https://somosauraperu.com/proyectos)
- **Política de privacidad:** "Este documento está en preparación." — [Privacidad](https://somosauraperu.com/privacidad)
- No hay enlace de agenda, chat en vivo, lead magnet, precios, testimonios ni FAQ (ver sección 1). — [Sitemap](https://somosauraperu.com/sitemap.xml)

### Inferences
- Para tráfico frío de Meta en Perú, donde la conversación por WhatsApp es el hábito dominante, el recorrido actual (anuncio → portada → `/hablemos` → scroll → 4 campos obligatorios → espera de un correo) añade mucha fricción; el WhatsApp es la vía más corta pero está relegado en el diseño.
- Las páginas de servicio funcionan como landings aceptables (mensaje claro, público, proceso, portafolio relacionado), pero su botón de cierre pierde el contexto del servicio; convendría que apunten a `/hablemos?servicio=…` o a un WhatsApp con texto específico por servicio.
- El texto alterno de éxito ("mientras terminamos de conectar el envío automático") sugiere que la entrega del formulario por correo podría no estar del todo conectada; hay que probar un envío real antes de pagar tráfico hacia el formulario.
- Marcas y creadores caen en la misma opción del formulario, así que hoy no se pueden distinguir los dos tipos de lead salvo por el texto del mensaje.
- La política de privacidad sin terminar es un pendiente previo si se usan formularios instantáneos de Meta (exigen enlazar una política) o si se instala el Pixel.

### Gaps
- No se envió el formulario: no se verificó que `/api/contacto` entregue el mensaje ni a qué correo llega.
- No se verificó si el número es WhatsApp Business, si tiene respuesta automática, catálogo u horario de atención, ni el tiempo real de respuesta.
- No se midió la tasa de conversión actual (no hay acceso a Analytics).

## 3. Preparación técnica (Pixel, API de Conversiones, Analytics, UTM, eventos, velocidad móvil, animaciones)

### Takeaway
El sitio NO tiene Meta Pixel ni ningún indicio de API de Conversiones; solo carga Google Analytics 4 (ID `G-Q6CQMS2KPS`) con un único evento propio, `generate_lead`, al enviar el formulario, y no mide los clics a WhatsApp ni guarda los UTM. En cambio es rápido y liviano (≈1 MB en la portada, videos con carga diferida), así que el freno para la pauta es de medición y de recorrido, no de velocidad.

### Cited Findings
- **Meta Pixel: ausente.** En el HTML de las 17 URLs y en los 14 archivos JS no aparece `fbq(`, `connect.facebook.net`, `facebook-domain-verification` ni un contenedor `GTM-`; en el navegador, `window.fbq` y `window._fbq` son `undefined` y no se hizo ninguna petición a dominios de Facebook. — [Portada](https://somosauraperu.com/); [Hablemos](https://somosauraperu.com/hablemos)
- **Otros píxeles: ausentes.** Tampoco hay TikTok Pixel (`ttq`), Microsoft Clarity ni Hotjar. — [Portada](https://somosauraperu.com/)
- **Google Analytics 4: presente** en todas las páginas leídas, cargado con `gtag.js` (`https://www.googletagmanager.com/gtag/js?id=G-Q6CQMS2KPS`); el `dataLayer` muestra `config G-Q6CQMS2KPS`. No se usa Google Tag Manager. — [Portada](https://somosauraperu.com/)
- **Evento de conversión:** al enviar bien el formulario se dispara `gtag('event', 'generate_lead', { necesidad })`, donde `necesidad` es el servicio elegido. Es la única llamada a eventos propios en el código descargado. — [Hablemos](https://somosauraperu.com/hablemos) (código JS)
- **Clics a WhatsApp, correo o redes:** no tienen ningún evento propio en el código. — [Portada](https://somosauraperu.com/) (código JS)
- **UTM y click IDs:** el código no contiene `utm_`, `fbclid` ni `gclid`; el formulario envía a `/api/contacto` solo nombre, empresa, email, perfil, necesidad, mensaje y el campo trampa. Una visita con `?utm_source=facebook&utm_medium=paid&utm_campaign=test` cargó con normalidad pero esos valores no pasan al lead. — [Hablemos](https://somosauraperu.com/hablemos?servicio=ads&utm_source=facebook&utm_medium=paid&utm_campaign=test)
- **Sin página de gracias** con URL propia (`/gracias` → 404); el éxito se muestra en la misma página. — [Hablemos](https://somosauraperu.com/hablemos)
- **Cookies y consentimiento:** no hay aviso de cookies; con Analytics bloqueado por la red de la prueba, `document.cookie` quedó vacío. — [Portada](https://somosauraperu.com/)
- **Plataforma:** Next.js prerenderizado, alojado en Vercel (cabeceras `server: Vercel`, `x-nextjs-prerender: 1`, `x-vercel-cache: HIT`). — [Portada](https://somosauraperu.com/)
- **Redirección:** `https://www.somosauraperu.com/` responde 308 hacia `https://somosauraperu.com/` (la URL canónica es sin `www`). — [www](https://www.somosauraperu.com/)
- **Peso y tiempos de la portada (móvil emulado, sin limitar red ni CPU):** 61 peticiones, ~985 KB comprimidos en total (JS ~284 KB, imágenes y texturas ~550 KB, fuentes ~113 KB), respuesta inicial en ~0,2 s, primer contenido visible a ~0,6 s, carga completa a ~1,65 s. — [Portada](https://somosauraperu.com/) (render con Chromium)
- **`/hablemos`:** 25 peticiones, ~499 KB, primer contenido a ~0,6 s, carga a ~0,93 s. — [Hablemos](https://somosauraperu.com/hablemos) (render con Chromium)
- **Videos:** la portada tiene 4 videos MP4 de fondo (uno por servicio) con `preload="none"` y sin autoplay al cargar; no se descargaron en la carga inicial. — [Portada](https://somosauraperu.com/)
- **Animaciones:** usa GSAP con ScrollTrigger y Lenis (scroll suavizado), con una rama para "menos movimiento" (`prefers-reduced-motion`). La portada mide 12.183 px de alto en móvil (~14,5 pantallas) y la navegación lateral lista 6 escenas: Aura, Servicios, Marcas, PR Talentos, Aurora, Hablemos. — [Portada](https://somosauraperu.com/) (código JS y render)
- **SEO/metadatos correctos:** `robots: index, follow`, canonical, Open Graph con imagen 1200×630 (`/og/aura.jpg`), JSON-LD de organización y servicios, `sitemap.xml` (portada actualizada el 07/11/2026) y `llms.txt`. — [Sitemap](https://somosauraperu.com/sitemap.xml); [llms.txt](https://somosauraperu.com/llms.txt)

### Inferences
- Sin Pixel no se puede optimizar por conversiones en la web, ni crear audiencias de remarketing de visitantes, ni atribuir leads a anuncios: hoy una campaña con destino web solo podría optimizar por clics o visitas a la página. Instalar Pixel + API de Conversiones (y verificar el dominio en Meta) es requisito previo para mandar tráfico pagado al sitio.
- El evento `generate_lead` ya existe en GA4, así que añadir el evento `Lead` de Meta en el mismo punto del código y un `Contact` en los clics a WhatsApp es un cambio pequeño.
- Como los UTM no viajan con el lead ni con el mensaje de WhatsApp, no habrá forma de saber qué anuncio generó cada consulta; conviene capturarlos en el formulario y variar el texto prellenado de WhatsApp por campaña o servicio.
- La velocidad no es un problema: la portada pesa alrededor de 1 MB. Los tiempos medidos son de un navegador en centro de datos sin limitación; en un celular de gama media con 4G serán mayores, y el scroll animado con Lenis puede sentirse más pesado, pero no hay señales de un sitio lento.
- El riesgo de conversión viene del formato: una portada de ~14 pantallas con escenas animadas invita a recorrer, y el botón flotante de WhatsApp no aparece hasta que el usuario baja. Es mejor aterrizar en una página de servicio o en `/hablemos?servicio=…` que en la portada.
- Los anuncios deben usar la URL sin `www` para evitar el salto de redirección.

### Gaps
- No se pudo ver la configuración de GA4 (si `generate_lead` está marcado como evento clave, si la medición mejorada registra clics salientes a wa.me), porque requiere acceso a la cuenta.
- La API de Conversiones vive en el servidor: desde fuera solo puede afirmarse que no hay ningún indicio en el código del navegador.
- No se obtuvo puntaje de PageSpeed/Lighthouse ni Core Web Vitals de campo (la API de PageSpeed devolvió error 429); los tiempos son de una sola corrida sin throttling.
- No se sabe si existe un dominio verificado, un Business Manager o un conjunto de datos (Pixel) ya creado en Meta para Aura.

## 4. Perfiles sociales (Instagram, Facebook, TikTok, LinkedIn) y si el Instagram sirve como destino

### Takeaway
El único perfil verificado es Instagram @somosaura_pe: 141 seguidores, 10 seguidos y 23 publicaciones al 12/11/2026, con bio clara y enlace a la web. Es un perfil demasiado nuevo y pequeño para dar confianza como destino principal de tráfico pagado; sirve como apoyo, no como página de aterrizaje. Facebook exige iniciar sesión y no se pudo ver; LinkedIn no se abrió; la agencia no enlaza ningún TikTok propio.

### Cited Findings
- **Instagram @somosaura_pe** — nombre "AURA | Agencia creativa & PR"; "141 Followers, 10 Following, 23 Posts" (metadatos de la página pública, vista sin sesión el 12/11/2026). — [Instagram](https://www.instagram.com/somosaura_pe/)
- Bio: "👩🏻‍💻Branding · Marketing · IA · PR Influencers / ✦ Creamos presencia que trasciende / 📲 hola@somosauraperu.com / Partner @aurorahub.pe". Enlace de la bio: www.somosauraperu.com. Historias destacadas: Influencers, Alianzas, Collab, Servicios. — [Instagram](https://www.instagram.com/somosaura_pe/)
- La bio no incluye WhatsApp ni un enlace directo a `/hablemos`; el enlace usa la versión con `www`, que redirige. — [Instagram](https://www.instagram.com/somosaura_pe/); [www](https://www.somosauraperu.com/)
- **Facebook `somosaura.pe`:** es la página que enlaza el sitio; al abrirla sin sesión redirige al inicio de sesión de Facebook ("Log into Facebook"), igual que el plugin público de página. No se vio ningún dato. — [Facebook](https://www.facebook.com/somosaura.pe)
- **LinkedIn:** el sitio enlaza `linkedin.com/company/aura-agencia` (etiqueta "Aura Agencia") y el perfil personal `linkedin.com/in/lesliearboleda`. — [Portada](https://somosauraperu.com/); [Nosotros](https://somosauraperu.com/nosotros)
- **TikTok:** el sitio no enlaza ninguna cuenta de TikTok de la agencia; el único TikTok que aparece es el de la talento EliLumeli (@elilumelii). El `sameAs` del JSON-LD lista solo Instagram, Facebook y LinkedIn. — [Portada](https://somosauraperu.com/); [Ficha EliLumeli](https://somosauraperu.com/pr-talentos/eli-lumeli)
- Las búsquedas web de "somosaura_pe", "somosaura.pe" y "somosauraperu" no devolvieron ningún resultado de la agencia. — [Instagram](https://www.instagram.com/somosaura_pe/) (único resultado directo; los buscadores no la indexan)

### Inferences
- Con 141 seguidores y 23 posts, mandar tráfico pagado al perfil de Instagram daría poca prueba social; un visitante frío vería una cuenta casi nueva. Para anuncios con destino "perfil de Instagram" haría falta antes más contenido de casos y fijar publicaciones clave.
- Sí es razonable usar la cuenta como identidad de los anuncios y recibir mensajes por Instagram Direct, porque el anuncio en sí lleva la propuesta y la conversación ocurre en privado; el tamaño del perfil pesa menos ahí.
- La coherencia de marca entre bio y web es buena (mismos servicios, mismo correo, socio @aurorahub.pe), pero la bio agrega "Marketing" e "IA", que la web presenta como línea aparte (Aurora).
- Añadir a la bio un enlace directo a WhatsApp o a `/hablemos` reduciría un paso.

### Gaps
- Frecuencia de publicación, fechas de los posts, tipo de contenido (reels, carruseles) y engagement de Instagram: no se pudieron ver; la cuadrícula no cargó sin sesión (las imágenes vienen de dominios de Instagram fuera de la red permitida).
- Facebook: seguidores, actividad, botón de acción y si la página está vinculada a WhatsApp, sin verificar (muro de inicio de sesión).
- LinkedIn de empresa: seguidores y actividad sin verificar (no se abrió).
- Si la cuenta de Instagram es profesional y está conectada a la página de Facebook y a un Business Manager (requisito para anunciar): no se puede saber desde fuera.

## 5. ¿Aura tiene o ha tenido anuncios en la Biblioteca de Anuncios de Meta?

### Takeaway
No se encontró ningún anuncio de Aura: cinco búsquedas por palabra clave en Perú (activos e inactivos) devolvieron "No ads match your search criteria". No es una prueba definitiva, porque no se pudo buscar por la página anunciante (el ID de la página de Facebook quedó detrás del inicio de sesión).

### Cited Findings
- Búsqueda por palabra clave, país Perú, todos los anuncios, activos e inactivos, el 12/11/2026: "somosaura.pe", "somosauraperu", "somosauraperu.com", "somosaura_pe" y "AURA Agencia creativa" → en los cinco casos "No ads match your search criteria". — [Biblioteca de Anuncios](https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=PE&q=somosauraperu.com&search_type=keyword_unordered&media_type=all)
- Búsqueda de control "Somos Aura" con los mismos filtros → sí devolvió anuncios, todos de anunciantes ajenos (Starshort, Drama al Instante, Practical AI), lo que confirma que la búsqueda funcionaba; ninguno es de la agencia. — [Biblioteca de Anuncios](https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=PE&q=Somos%20Aura&search_type=keyword_unordered&media_type=all)
- Una búsqueda de "Canepa Girbau" (cliente para el que Aura dice haber hecho "una serie de anuncios para Meta") tampoco devolvió resultados por palabra clave. — [Biblioteca de Anuncios](https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=PE&q=Canepa%20Girbau&search_type=keyword_unordered&media_type=all); [Proyectos](https://somosauraperu.com/proyectos)
- El sitio no tiene Meta Pixel (sección 3), lo que es coherente con que no haya habido campañas con destino web optimizadas por conversión. — [Portada](https://somosauraperu.com/)

### Inferences
- Lo más probable es que Aura no haya pautado para sí misma todavía: no hay anuncios que mencionen su dominio o su usuario, no hay Pixel y la cuenta de Instagram tiene 141 seguidores. Sería una cuenta publicitaria sin historial ni audiencias, con fase de aprendizaje desde cero.
- Su experiencia en Meta Ads es para clientes (Cubierto, Canepa & Girbau) y a través de su socio Aurora Hub Perú, no para la propia marca.

### Gaps
- La búsqueda por palabra clave compara el texto de los anuncios; un anuncio de Aura que no mencione su dominio ni su usuario no aparecería. Falta la comprobación por página anunciante (requiere el ID de la página o una sesión iniciada para elegirla en el buscador; el autocompletado de anunciantes no respondió en el navegador automatizado).
- La Biblioteca mostró un aviso de "bloqueador de anuncios" porque parte de sus recursos no cargó en esta red; los resultados sí se renderizaron, pero conviene repetir la consulta en un navegador normal.
- La Biblioteca solo conserva anuncios comerciales inactivos por tiempo limitado fuera de la UE, así que campañas antiguas podrían no figurar.

## 6. Reseñas, prensa, perfil de Google Business y menciones de terceros

### Takeaway
No se encontró ninguna reseña, nota de prensa, ficha de directorio ni perfil de Google Business de esta agencia: las búsquedas solo devuelven otras empresas llamadas "Aura". La única mención de terceros verificada es la de su socio Aurora Hub Perú, que la lista como proyecto de portafolio.

### Cited Findings
- Aurora Hub Perú la presenta en su portafolio como "Aura · Agencia de branding e influencia — Marcas con algo que decir. Web de agencia con escenas a pantalla completa, transiciones al hacer scroll, sección de talentos y servicios", con etiquetas "Web" y "Meta Ads". — [Aurora Hub Perú · Proyectos](https://www.aurorahubperu.com/proyectos/) (leído de la copia del repositorio local)
- Aurora Hub Perú también la menciona en su página de diseño web: "Aura — Web de agencia con animaciones al hacer scroll y sección de talentos." — [Aurora Hub Perú · Diseño web](https://www.aurorahubperu.com/servicios/diseno-web/) (copia del repositorio local)
- Las búsquedas web con el dominio, los usuarios de redes, el lema y el nombre de la fundadora no devolvieron ninguna página de la agencia; los resultados corresponden a homónimos que NO son esta empresa: Aura Creativa (auracreativa.com, marketing digital, fundada en 2019), Aura Agency (auraagency.pe, diseño web), Aura Agencia Creativa (aura-agenciacreativa.com) y Aura Influence (España). — [Aura Creativa](https://auracreativa.com/nosotros/); [Aura Agency](https://auraagency.pe/nosotros/); [Aura Agencia Creativa](https://aura-agenciacreativa.com/); [Aura Influence](https://aurainfluence.blog/)
- El sitio no enlaza ni incrusta un perfil de Google Maps/Google Business, y su JSON-LD no declara dirección de calle, horario ni valoraciones. — [Portada](https://somosauraperu.com/)
- El sitio no muestra testimonios ni logotipos de medios. — [Proyectos](https://somosauraperu.com/proyectos)

### Inferences
- La prueba social externa es prácticamente nula; un prospecto que busque "Aura agencia Lima" encontrará primero a los homónimos (sobre todo Aura Creativa, que también vende branding en Perú). Los anuncios deberían usar siempre "somosauraperu" o el usuario de Instagram para evitar la confusión, y apoyarse en el portafolio y en casos concretos.
- Conseguir 3–5 testimonios de clientes del portafolio y abrir un perfil de Google Business serían mejoras baratas antes o durante la pauta.
- El sitio fue actualizado hace días (sitemap con fecha 07/11/2026) y los buscadores aún no lo muestran, lo que refuerza que la presencia digital de la marca es muy reciente.

### Gaps
- No se pudo consultar Google Maps directamente; la ausencia de perfil de Google Business se deduce de que no aparece en búsquedas ni está enlazado, no de una comprobación en Maps.
- No se revisaron menciones dentro de Instagram, TikTok o LinkedIn (por ejemplo, etiquetas de clientes o talentos).
- No se encontró prensa; puede existir cobertura sobre los talentos (Yvonne Frayssinet, Marcelo Oxenford, Giomar Faichin) que no nombre a la agencia.
