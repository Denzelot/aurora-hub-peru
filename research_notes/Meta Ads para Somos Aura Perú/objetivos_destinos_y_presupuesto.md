# Meta Ads para Somos Aura Perú: objetivos, destinos de conversión, medición y presupuesto (estado a noviembre de 2026)

> **Nota de método (leer antes de usar las cifras).** En esta sesión la herramienta de lectura de páginas (WebFetch) estuvo bloqueada por la red para todos los dominios probados (developers.facebook.com, blog.mercately.com, kom.pe, felipevergara.co). Por eso **todo lo citado proviene de los resúmenes que devolvió el buscador, no de la lectura completa de cada página**. Consecuencias: (1) no pude abrir el Centro de Ayuda de Meta para Empresas, así que casi todo lo "oficial" está citado a través de terceros, salvo tres páginas de Meta/WhatsApp cuyo extracto sí apareció; (2) cuando un resultado agrupaba varias fuentes, la atribución a una URL concreta puede ser imperfecta y lo marco con "(atribución probable)"; (3) la mayoría de los benchmarks son de blogs de proveedores o agencias, sin metodología publicada. Nivel de confianza indicado en cada bloque. Tipo de cambio de trabajo: **S/ 3.40 por US$ 1** (últimos datos hallados: SBS 13-jul-2026 S/ 3.388 compra / S/ 3.397 venta y BCRP 12-ago-2026 S/ 3.37; no hallé el dato de noviembre de 2026) — [TuCambista, SBS 13-jul-2026](https://tucambista.pe/tipo-de-cambio-sbs-hoy); [TuCambista, 12-ago-2026](https://tucambista.pe/noticias/dolares-a-soles-hoy-12-agosto-2026).

## 1. Estructura actual de Meta Ads Manager en 2026: objetivos, ubicaciones de conversión, objetivos de rendimiento, Advantage+ y cambios 2025–2026

### Takeaway
La estructura sigue siendo la de 6 objetivos (Reconocimiento, Tráfico, Interacción, Clientes potenciales, Promoción de app, Ventas); la decisión que más pesa es la **ubicación de conversión** dentro del objetivo, porque fija qué objetivos de rendimiento quedan disponibles y dónde se captura el lead. En 2025–2026 Meta empujó la automatización (Advantage+ por defecto en campañas de leads, fin de la selección manual de ubicaciones), la optimización "más abajo en el embudo" (leads de conversión vía CRM/API de Conversiones, optimización de compras/leads en WhatsApp) y lanzó un agente de IA para WhatsApp y Messenger.

### Cited Findings
**Objetivos y ubicaciones de conversión**
- Las guías de 2026 siguen describiendo 6 objetivos de campaña (estructura ODAX) — [Flighted, "Every Meta Campaign Objective Explained for 2026"](https://www.flighted.co/blog/every-meta-campaign-objective-explained); [MB Adv, "Meta Ads Campaign Objectives: 6 ODAX Guide 2026"](https://www.mbadv.agency/meta-ads/meta-ads-campaign-objectives).
- Flujo para leads: Crear → Clientes potenciales → elegir ubicación de conversión y objetivo de rendimiento → elegir la Página → adjuntar formulario. La ubicación de conversión se describe como la decisión más importante de la configuración porque determina dónde se captura el lead (atribución probable) — [AdsUploader, cómo crear Lead Ads](https://adsuploader.com/es/blog/how-to-create-facebook-lead-ads).
- Las ubicaciones "Sitio web" requieren el Píxel de Meta con un evento de lead; las campañas puras de formulario instantáneo no. Todo formulario instantáneo exige enlace a política de privacidad. Existe la opción combinada "Formularios instantáneos y Messenger" (atribución probable) — [AdsUploader](https://adsuploader.com/es/blog/how-to-create-facebook-lead-ads).
- Elegir "Sitio web y llamadas" bloquea el objetivo de rendimiento en "Maximizar el número de conversiones"; para acceder a objetivos más avanzados hay que usar una única ubicación de conversión (guía de terceros; atribución probable) — [LeadSync](https://leadsync.me/blog/create-facebook-lead-ad-campaign/).
- Con formularios instantáneos, el objetivo de rendimiento por defecto es "Maximizar el número de clientes potenciales" (atribución probable) — [LeadEnforce](https://leadenforce.com/blog/how-to-create-a-lead-ad-in-meta-ads-manager).
- Meta añadió la ubicación "Sitio web y formularios instantáneos" en campañas de leads: el algoritmo dirige a cada persona al camino que más probablemente complete; un proveedor reporta 14–24 % menos costo por lead (dato de proveedor, no verificado) — [SwipeInsight](https://web.swipeinsight.app/posts/meta-launches-dual-path-optimization-for-lead-ads-with-website-and-instant-forms-16608).
- Para WhatsApp, una guía LatAm indica: objetivo Clientes potenciales (o Interacción) → ubicación "Apps de mensajería" → WhatsApp como destino; solo se puede usar si hay un número de WhatsApp conectado a la Página (atribución probable; no pude leer el artículo) — [Felipe Vergara, campañas de mensajes a WhatsApp](https://felipevergara.co/blogs/whatsapp/campanas-de-mensajes-a-whatsapp-en-facebook-ads/).
- Una guía de 2026 describe que los objetivos de optimización de Messenger / Instagram Direct / WhatsApp viven bajo Interacción, y que el objetivo Ventas también admite una ubicación de conversión de mensajería (descripción de terceros, no un changelog de Meta) — [Flighted](https://www.flighted.co/blog/every-meta-campaign-objective-explained); [MB Adv](https://www.mbadv.agency/meta-ads/meta-ads-campaign-objectives).

**Objetivos de rendimiento**
- Jon Loomer contabiliza 21 objetivos de rendimiento únicos y 71 combinaciones posibles de objetivo + ubicación de conversión; el objetivo de "maximizar conversaciones" sirve cuando se quieren más chats sin una acción específica, y advierte que hace falta personal para atenderlos. **Guía fechada en febrero de 2024 (antigua).** — [Jon Loomer, "21 Performance Goals"](https://www.jonloomer.com/performance-goals/).
- "Maximizar el número de clientes potenciales de conversión" (conversion leads) le pide a Meta encontrar personas con probabilidad de convertirse en clientes, no solo de llenar un formulario — [Coinis](https://coinis.com/how-to/best-way-to-set-facebook-ads-objective-for-leads).
- **Fuente oficial:** la documentación de desarrolladores de Meta dice que la integración de la API de Conversiones para CRM "no es un requisito para empezar" a usar el objetivo de rendimiento Conversion Leads, pero que los resultados son mejores con la integración completa; y que el objetivo no está disponible en cuentas publicitarias personales ni en interfaces ligeras — [Meta for Developers, Conversion Leads / CRM integration](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/2-getting-started-with-integration).
- Reporte de terceros **no confirmado**: Meta retiraría el objetivo de leads de conversión para campañas nuevas sin integración de API de Conversiones desde abril de 2026, y las campañas existentes se verían afectadas en agosto de 2026 — [Coinis](https://coinis.com/how-to/best-way-to-set-facebook-ads-objective-for-leads); [EasyInsights](https://easyinsights.ai/blog/lead-gen-shifts-profitable-meta-ads-2026/). Contradice parcialmente el texto de Meta citado arriba (que podría estar desactualizado).
- Meta estaría empujando a los anunciantes hacia el objetivo de rendimiento Conversion Leads — [Click Here Digital](https://www.clickheredigital.com/insights/meta-shift-to-lead-optimization).

**Advantage+ y automatización (2025–2026)**
- Advantage+ está activado por defecto en campañas de leads; Advantage+ Shopping pasó a llamarse Advantage+ Sales y la nueva experiencia aplica Advantage+ en Ventas, App y Leads (blogs de actualizaciones de octubre de 2026) — [AdsUploader, Meta Ads Updates (oct. 2026)](https://adsuploader.com/blog/meta-ads-updates); [AdAdvisor](https://adadvisor.ai/blog/meta-ads-updates-2026).
- La selección manual de ubicaciones a nivel de conjunto de anuncios se elimina en campañas de Ventas, Leads, Interacción y App; el reemplazo son exclusiones a nivel de cuenta, configurables por objetivo (terceros que citan el Centro de Ayuda de Meta) — [Growth-onomics](https://growth-onomics.com/meta-advantage-plus-placements-2026-changes/); [Qwestyon](https://www.qwestyon.com/blog/meta-ads-updates).
- Las campañas Advantage+ de leads reportan ~10 % menos costo por lead calificado en promedio (cifra de Meta repetida por proveedores, no verificada de forma independiente) — [LeadEnforce](https://leadenforce.com/blog/how-to-leverage-meta-advantage-lead-campaigns-for-higher-quality-leads).
- Meta cambió la definición de atribución por clic en marzo de 2026 — [Jon Loomer, Meta Ads Attribution 2026](https://www.jonloomer.com/meta-ads-attribution-2026/amp/).

**WhatsApp: optimización de embudo bajo e IA**
- **Fuente oficial (blog de WhatsApp Business):** la API de Conversiones para mensajería empresarial permite ver leads y ventas provenientes de anuncios de clic a mensaje, hacer pruebas A/B y usar optimizaciones de embudo bajo; la optimización de compras busca generar más ventas y bajar costos llegando a quienes tienen más probabilidad de comprar — [WhatsApp Business, "New Ways for Businesses to Do More with Messaging"](https://whatsappbusiness.com/blog/new-ways-for-businesses-to-do-more-with-messaging/). Hay además una página oficial en español sobre el tema que no pude abrir — [WhatsApp Business, optimizaciones de embudo bajo](https://whatsappbusiness.com/es-la/resources/resource-library/down-funnel-optimizations-whatsapp/?lang=es_LA).
- Implementación técnica: el resultado se envía del lado del servidor con el identificador de clic `ctwa_clid`, con `action_source` "business_messaging" y `messaging_channel` "whatsapp" — [Aixel, WhatsApp Conversions API](https://aixel.io/blog/whatsapp-conversions-api).
- En la app gratuita WhatsApp Business, las etiquetas predefinidas (Nuevo cliente, Nuevo pedido, Pago pendiente, Pedido finalizado) sirven de señal para esta optimización; las etiquetas personalizadas no cuentan (guía de terceros; nombres vistos solo en inglés) — [AsisteClick, CTWA 2026](https://asisteclick.com/en/blog/click-to-whatsapp-ads-ctwa-conversion-2026/); [Spur](https://www.spurnow.com/en/blogs/click-to-whatsapp-ads).
- Meta lanzó en junio de 2026 un agente de IA para negocios en WhatsApp y Messenger que responde preguntas, califica leads y ayuda a cerrar ventas — [AdsUploader, Meta Ads Updates](https://adsuploader.com/blog/meta-ads-updates); [PingTalks](https://pingtalks.com/updates/meta-ads-updates/).
- Los anuncios en Estados de WhatsApp ahora optimizan para conversiones fuera del sitio en Ventas, Leads e Interacción y admiten carruseles de 10 tarjetas (tercero que cita el post de lanzamiento de la v26 de Meta) — [AdAdvisor](https://adadvisor.ai/blog/meta-ads-updates-2026).

### Inferences
- Para Aura, las combinaciones realistas son cuatro: (i) Clientes potenciales → Sitio web (evento Lead/Schedule), (ii) Clientes potenciales → Formularios instantáneos, (iii) Clientes potenciales o Interacción → WhatsApp (maximizar conversaciones), (iv) Clientes potenciales → Sitio web y formularios instantáneos. Tráfico a perfil de Instagram o "visitas al perfil" no optimiza hacia un resultado comercial medible.
- El objetivo "leads de conversión" es el estado final deseable, pero exige volumen y señal de CRM; con presupuesto pequeño conviene empezar con "maximizar leads/conversaciones" y devolver señales de calidad desde el día 1 para migrar después.
- Como la selección manual de ubicaciones desapareció en Leads, el control de dónde aparece el anuncio pasa por el creativo (formatos verticales pensados para Reels/Stories) y por exclusiones a nivel de cuenta.

### Gaps
- No pude abrir el Centro de Ayuda de Meta para Empresas: la lista oficial y vigente (noviembre de 2026) de ubicaciones de conversión y objetivos de rendimiento por objetivo queda sin verificar en fuente primaria. Verificar directamente en Ads Manager al crear la campaña.
- No hallé confirmación oficial de un cambio "de Interacción a mensajería" ni del nombre exacto de los objetivos de rendimiento de "compras" o "leads" en WhatsApp dentro de Ads Manager.
- La fecha y el alcance del retiro del objetivo "leads de conversión" sin API de Conversiones (abril/agosto de 2026) están reportados solo por terceros.
- No hallé documentación sobre flujos/formularios nativos dentro de WhatsApp (WhatsApp Flows) aplicados a anuncios en cuentas pequeñas.

## 2. Pros, contras y evidencia de cada destino para un servicio de ticket alto con venta consultiva

### Takeaway
La evidencia disponible (casi toda de practicantes y proveedores) coincide en la dirección: formulario instantáneo y WhatsApp dan más volumen a menor costo; la landing con Píxel + API de Conversiones da menos leads pero de mejor calidad posterior. Para B2B de ticket alto la recomendación más repetida es landing propia o formulario de "mayor intención" con preguntas de calificación, y medir por costo por reunión/cliente, no por costo por lead. No encontré datos independientes específicos de Perú ni de agencias de branding.

### Cited Findings
**(a) Sitio web con Píxel + API de Conversiones**
- Los leads de landing suelen costar más (más pasos y abandono) pero convierten mejor en ventas en algunos negocios; se sugiere correr ambos formatos en paralelo y comparar costo por lead y tasa de cierre (atribución probable) — [AdsUploader](https://adsuploader.com/es/blog/how-to-create-facebook-lead-ads).
- Un practicante recomienda un enfoque híbrido para B2B y ticket alto: mantener el objetivo Leads pero enviar a una landing propia cuando la oferta vale más de ~£500 de valor de vida (atribución probable) — [Trio Media, lead forms vs website conversions](https://trio-media.co.uk/meta-lead-forms-vs-website-conversions).
- Para demos/ventas de alta consideración, una guía B2B afirma que los leads de formulario instantáneo llegan a reunión a "una fracción" de la tasa de los leads de landing — [Growthspree, Meta Lead Ads for B2B SaaS 2026](https://www.growthspreeofficial.com/blogs/meta-lead-ads-b2b-saas-2026).

**(b) Formulario instantáneo de Meta**
- El costo por lead suele ser menor por la menor fricción y los campos prellenados; en B2B/SaaS se cita ~30–50 % más barato que enviar tráfico a una landing (benchmark de proveedor; atribución probable) — [Benly, Meta Ads B2B lead generation](https://benly.ai/learn/meta-ads/meta-ads-b2b-lead-generation).
- Una agencia reporta que los formularios instantáneos generan más leads a menor costo pero convierten a cliente 20–30 % peor que una landing y traen más basura (atribución probable) — [Trio Media](https://trio-media.co.uk/meta-lead-forms-vs-website-conversions).
- El formulario de "Mayor intención" añade una pantalla de revisión antes de enviar; un proveedor estima que reduce el volumen 20–40 % y mejora la calidad al filtrar toques accidentales. Se entrega solo en el feed de Facebook e Instagram en móvil. "Más volumen" y "Mayor intención" admiten lógica condicional (saltar o terminar el formulario según respuestas) — [Relevant Audience](https://www.relevantaudience.com/facebook-ads/facebook-lead-ads-instant-forms-guide/); [Growthspree](https://www.growthspreeofficial.com/blogs/meta-lead-ads-b2b-saas-2026).
- Proveedores recomiendan exigir correo corporativo válido (y verificación por SMS) para filtrar leads falsos; con buena calificación, la calidad del formulario nativo "puede acercarse" a la de la landing — [Growthspree](https://www.growthspreeofficial.com/blogs/meta-lead-ads-b2b-saas-2026); [Stackmatix, lead gen ad formats compared](https://stackmatix.com/blog/lead-gen-ad-formats-compared).
- Referencia de otra plataforma (LinkedIn, no Meta): en 2025 el costo por lead fue US$ 193 con formularios nativos frente a US$ 346 con landing — [Metadata.io, B2B Benchmark Report 2026](https://metadata.io/benchmark-report-2026/insights/forms-beat-pages).

**(c) Clic a WhatsApp**
- Contexto Perú: 77 % de penetración de WhatsApp en procesos de compra (Chile y Brasil 83 %, Colombia 74 %, Argentina 71 %, México 53 %) — [Perú Retail](https://www.peru-retail.com/whatsapp-es-el-canal-en-el-que-apuestan-las-empresas-en-2025/).
- WhatsApp concentra 21 % del gasto total del e-commerce peruano, detrás de los canales híbridos (41 %), según Worldpanel by Numerator 2026 — [Infobae Perú, 4-jun-2026](https://www.infobae.com/peru/2026/06/04/desde-el-sofa-el-gasto-se-dispara-compras-online-en-peru-duplican-el-promedio-de-ir-a-la-tienda-en-fisico/).
- Penetración de WhatsApp de 98 % entre usuarios urbanos peruanos (dato citado por Andina sin fuente desglosada) — [Andina](https://andina.pe/agencia/noticia-whatsapp-business-acelera-atencion-las-empresas-peru-1038733.aspx).
- Los anuncios de clic a WhatsApp ayudan a reconocimiento y a hacer crecer la lista de prospectos, pero sus tasas de conversión pueden ser más bajas que las de anuncios optimizados para clientes potenciales (atribución probable) — [Rework, guía CTWA](https://resources.rework.com/es/guides/chat-funnel-setup/click-to-whatsapp-ads).
- Empezar optimizando a mensajes tiene sentido cuando no hay datos ni conexión de API de Conversiones; el paso siguiente es optimizar a resultados de embudo bajo — [AsisteClick](https://asisteclick.com/en/blog/click-to-whatsapp-ads-ctwa-conversion-2026/); respaldo oficial del concepto en [WhatsApp Business blog](https://whatsappbusiness.com/blog/new-ways-for-businesses-to-do-more-with-messaging/).
- El objetivo de conversaciones requiere personal para atender los chats — [Jon Loomer](https://www.jonloomer.com/performance-goals/) (2024).
- Las tasas de conversión de 45–60 % o "5x más leads" que publican blogs de proveedores de CTWA son autopromocionales y sin fuente verificable — p. ej. [ChatDaddy](https://www.chatdaddy.tech/blog/click-to-whatsapp-ads).

**(d)(e)(f) Instagram Direct, visitas al perfil / seguidores, página de Facebook**
- No hallé evidencia cuantitativa específica sobre calidad de leads de Instagram Direct, campañas de visitas al perfil o tráfico a la página de Facebook para servicios B2B. La única referencia estructural: los destinos de mensajería (Messenger, Instagram Direct, WhatsApp) comparten el mismo objetivo de rendimiento de conversaciones — [Flighted](https://www.flighted.co/blog/every-meta-campaign-objective-explained).

### Inferences
- Con las dos cifras citadas (formulario 30–50 % más barato por lead; 20–30 % peor conversión a cliente), el costo por cliente del formulario instantáneo quedaría entre ~0.63× y ~1.0× el de la landing: el formulario no es necesariamente peor, pero otras fuentes ("una fracción de la tasa") lo contradicen. Hay que resolverlo con una prueba propia, midiendo costo por reunión agendada.
- Para Aura (venta consultiva, decisor = dueño o gerente de marketing), el orden sugerido por la evidencia es: destino principal medible con calificación (landing con formulario/agenda, o formulario instantáneo de mayor intención con 2–3 preguntas: rubro, presupuesto mensual, plazo), y WhatsApp como segundo paso (botón en la página de gracias o en el formulario) o como conjunto de prueba, dado el peso cultural del canal en Perú.
- Instagram Direct tiene la misma mecánica que WhatsApp pero sin número telefónico ni CRM tan directo; visitas al perfil/seguidores y tráfico a la página de Facebook no generan un evento de conversión que el algoritmo pueda optimizar hacia clientes, por lo que sirven como apoyo de marca o para alimentar audiencias de retargeting, no como campaña principal de captación.
- Si no hay nadie que responda WhatsApp en minutos durante horario laboral, el destino WhatsApp pierde su ventaja; en ese caso es más seguro formulario/landing con agenda automática.

### Gaps
- Sin estudios independientes de calidad de lead por destino en Perú o LatAm para servicios B2B; todo es opinión de practicantes o cifras de proveedores (confianza baja–media).
- Sin datos de tasa de respuesta / calificación de conversaciones de clic a WhatsApp en B2B.
- Sin evidencia sobre Instagram DM vs WhatsApp en calidad de lead, ni sobre campañas de seguidores como palanca de ventas B2B.

## 3. Benchmarks para Perú (o LatAm, etiquetado): CPM, CPC, CTR, costo por conversación, costo por lead, tasas de reunión y cierre, estacionalidad

### Takeaway
No existe un benchmark oficial de Meta para Perú; las guías de agencias peruanas de 2026 sitúan el CPM en S/ 8–25 (≈ US$ 2.4–7.4), el CPC en S/ 0.30–1.50, el costo por mensaje de WhatsApp en S/ 2–12 y el costo por lead en S/ 3–40, cifras referenciales y sesgadas hacia B2C. Para B2B de ticket alto conviene asumir la mitad superior de esos rangos o más, y recordar que noviembre–diciembre es la época más cara del año y enero la más barata.

### Cited Findings
**Perú (confianza baja: blogs de agencias, sin metodología)**
- Tabla 2026 de una agencia peruana: CPM S/ 8–25; CPC S/ 0.30–1.50; costo por mensaje S/ 2–12 en campañas de WhatsApp; costo por lead S/ 3–40; piso práctico de inversión S/ 600 al mes para pymes (la fuente aclara que son montos referenciales) — [3R Core, costo de publicidad en Facebook en Perú 2026](https://3rcore.com/es/blogs/cuanto-cuesta-publicidad-facebook-instagram-peru-2026).
- CPM S/ 8–30 en Instagram — [Flama Creators](https://flamacreators.com/cuanto-cuesta-meta-ads-peru).
- CPC "saludable" S/ 0.20–0.70 y ejemplo de cálculo con S/ 2.50 por mensaje — [Ads Academy Perú, 2026](https://adsacademy.pe/cuanto-cuesta-una-campana-de-facebook-ads-en-peru-2026/).
- CPM estimado US$ 2–4 en Perú — [Somos Itera](https://somositera.com/cuanto-cuesta-publicidad-meta-ads-facebook-instagram/).
- Tablas internacionales por país: Perú con CPM promedio US$ 3.70, CPC US$ 0.36 y rango típico US$ 3.00–4.60 (proyección 2026 basada en datos de fines de 2025; atribución probable) — [Adamigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026); otra tabla da US$ 1.40–3.40 con +9 % interanual (no pude identificar con certeza cuál de estas dos la publica) — [Adligator](https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks); [Lebesgue](https://lebesgue.io/facebook-ads/facebook-cpm-by-country).

**LatAm (referencia, no Perú)**
- CPM de Facebook: Brasil US$ 2.50–4.00; México US$ 2.00–3.50; Argentina US$ 1.50–3.00; Colombia US$ 1.80–3.00; Chile US$ 3.00–4.50 — [Stackmatix, CPM by country 2026](https://www.stackmatix.com/blog/facebook-ads-cpm-by-country-2026).
- Costo referencial por conversación de WhatsApp en LatAm "por debajo de US$ 0.50", sin datos verificables (atribución probable; artículo no leído) — [Felipe Vergara](https://felipevergara.co/blogs/whatsapp/campanas-de-mensajes-a-whatsapp-en-facebook-ads/).

**Global (solo contexto; mercados mucho más caros)**
- Octubre de 2026, mediana de todos los países: CPM US$ 8.83 y CPC US$ 0.33 (más de 1,600 anunciantes y 8,700 campañas) — [AdKit Benchmarks](https://adkit.so/benchmarks).
- WordStream (octubre de 2025), promedio de todas las industrias: CPC US$ 0.70 en campañas de tráfico, US$ 1.92 en campañas de leads y costo por lead US$ 27.66 — citado en [Influee, benchmarks 2026](https://influee.co/es/blog/facebook-ads-benchmarks).
- Medianas 2025 de Meta según un agregador: CPM US$ 14.19 (+20 % interanual), CTR 2.19 % — [PaceAds, Meta Ads Statistics 2026](https://paceads.com/research/meta-ads-statistics-2026) (atribución probable).

**Tasas de reunión y cierre (EE. UU./global, no Perú)**
- Agencias de marketing: tasa de reunión a cierre 10–15 % y típicamente 2–8 semanas entre primera reunión y contrato firmado (proveedor, metodología no publicada) — [CIENCE, marketing agencies](https://cience-www.pages.dev/lead-generation/marketing-agencies).
- Leads inbound de marketing: 10–25 % pasan a reunión — [Prospeo, leads-to-meetings 2026](https://prospeo.io/s/leads-to-meetings-conversion-rate) (atribución probable); mediana de 62 % para leads inbound *calificados* a reunión agendada — [RevenueHero](https://www.revenuehero.io/blog/what-is-a-good-lead-to-meeting-conversion-rate-in-2026).
- Servicios profesionales: 3.1 % de lead a cierre; mediana general de oportunidad a cierre 22 % (First Page Sage 2024, citado por tercero) — [LeadHaste, lead-to-close benchmarks 2026](https://leadhaste.com/blog/lead-to-close-rate-benchmarks-2026).

**Estacionalidad (datos sobre todo de EE. UU.)**
- Los CPM suben 25–66 % entre Black Friday y Cyber Monday; el Q4 promedia ~26 % por encima del Q1; noviembre corre ~40 % sobre enero (fuentes distintas, magnitudes no coincidentes) — [Stackmatix, seasonal strategy](https://stackmatix.com/blog/meta-ads-seasonal-strategy); [Geist, Q4 2025 rate trends](https://geistm.com/blog/meta-rate-trends-q4-2025/); [Clouted](https://clouted.com/blog/meta-advertising-CPM-inflation-statistics).
- En enero los CPM caen 25–35 % frente al pico de diciembre; Meta promueve el "Q5" (fines de diciembre a mediados de enero) como ventana en que los CPM bajan por debajo de los niveles previos a la campaña navideña — [Mobile Marketing Reads, Meta y AppsFlyer sobre Q5](https://mobilemarketingreads.com/?p=49306); [Stackmatix](https://stackmatix.com/blog/meta-ads-seasonal-strategy).

### Inferences
- Rango de trabajo para Aura (B2B, Lima, decisores): CPM S/ 15–30; CPC de enlace S/ 0.70–2.00 en campañas optimizadas a lead (aplicando a Perú la relación ~2.7× entre CPC de leads y CPC de tráfico que muestra WordStream); costo por conversación de WhatsApp iniciada S/ 5–12; costo por lead S/ 20–60 (formulario en la parte baja, landing en la alta). Son supuestos derivados, no datos medidos: reemplazarlos con los de la cuenta tras 2 semanas.
- Lanzar a mediados de noviembre implica pagar el CPM más caro del año (Black Friday, campaña navideña y eventos locales de comercio electrónico); el mismo presupuesto rinde más desde la última semana de diciembre y en enero. Para un servicio B2B, además, diciembre es mes de cierre presupuestal y vacaciones: una lectura razonable es usar noviembre–diciembre como fase de prueba barata en volumen y escalar en enero.
- La cadena de conversión combinada (lead → reunión 10–25 %; reunión → cierre 10–15 %) implica ~1–4 clientes por cada 100 leads, coherente con el 3.1 % de servicios profesionales.

### Gaps
- No hay benchmark primario (Meta, Varos, Triple Whale, Revealbot/Birch, Databox) con corte Perú; no pude consultar esos paneles. Los rangos peruanos provienen de agencias que venden gestión de pauta.
- Sin CTR ni costo por lead B2B específicos de Perú; sin costo por conversación de WhatsApp de reportes de Gupshup/Wati/Kommo/Leadsales para LatAm.
- Sin datos de inflación de CPM en Perú para Cyber Wow / Navidad; las magnitudes citadas son de EE. UU.
- Las tasas de reunión y cierre son de EE. UU./SaaS; no hallé datos de agencias peruanas o latinoamericanas.

## 4. Reglas de presupuesto: mínimos, fase de aprendizaje, estructura con poco presupuesto, impuestos y comisiones en Perú

### Takeaway
Los mínimos técnicos de Meta son irrelevantes (≈ US$ 1–5 al día); lo que manda es la fase de aprendizaje (~50 eventos de optimización por conjunto en 7 días), que con un costo por lead de S/ 20–60 no se alcanza con presupuestos pequeños. Por eso se recomienda una sola campaña con 1–2 conjuntos y pocos creativos, y optimizar a un evento alcanzable. A la inversión hay que sumarle 18 % de IGV salvo que la cuenta tenga un RUC válido de persona jurídica (20…), en cuyo caso el IGV se autoliquida y es crédito fiscal.

### Cited Findings
**Mínimos y fase de aprendizaje**
- Mínimos diarios citados de la documentación de Meta por un tercero: US$ 1/día para impresiones; US$ 1/día para clics, "me gusta" y reproducciones; US$ 5/día para conversiones e instalaciones; US$ 40/día para eventos de baja frecuencia. Otra fuente da ~US$ 10–20/día para conversiones (discrepancia) — [Vizup, minimum budget requirements 2026](https://www.tryvizup.com/blog/meta-ads-minimum-budget-requirements-2026); [Stackmatix](https://www.stackmatix.com/blog/how-much-to-run-ads-on-facebook).
- Si se fija un objetivo de costo por resultado, el presupuesto diario del conjunto debería ser al menos 5× ese objetivo (dos fuentes de terceros; no confirmado en Meta) — [Vizup](https://www.tryvizup.com/blog/meta-ads-minimum-budget-requirements-2026).
- Un conjunto de anuncios necesita en general unos 50 eventos de optimización dentro de los 7 días posteriores a su última edición significativa para salir de la fase de aprendizaje; si no puede alcanzarlos, Meta lo marca como "Aprendizaje limitado" — [AdManage, learning phase guide](https://admanage.ai/blog/facebook-ads-learning-phase-guide); [Adtribute, glosario](https://www.adtribute.io/glossary/learning-phase).
- Regla práctica: presupuesto diario por conjunto ≈ costo por resultado objetivo × 50 ÷ 7 (ejemplo: US$ 3 por acción ≈ US$ 21.50/día) — [Podvector](https://podvector.ai/articles/ads/scaling-and-diagnosis/meta-ads-minimum-daily-budget-per-ad-set-2026); [AdManage, budget calculator](https://admanage.ai/blog/facebook-ads-budget-calculator).
- Voz disidente: la regla de 50 conversiones sería un consejo desactualizado — [RocketShip HQ](https://www.rocketshiphq.com/?p=18931).

**Guías peruanas de presupuesto**
- Piso práctico S/ 600 al mes para pymes — [3R Core](https://3rcore.com/es/blogs/cuanto-cuesta-publicidad-facebook-instagram-peru-2026).
- Campañas locales: S/ 500–1,000 al mes de inversión; la gestión de agencia se cobra aparte desde S/ 334 al mes; un negocio pequeño suele gastar S/ 800–1,500 al mes en total — [Nur Creative](https://www.nurcreativelatam.com/blog/cuanto-cuesta-publicidad-meta-ads-peru/).
- S/ 30–50 diarios para que el algoritmo tenga datos suficientes — [Freelo](https://freelo.pe/facebook-e-instagram-ads-para-pymes-con-poco-presupuesto/).

**Impuestos (Perú)**
- El Decreto Legislativo 1623 (publicado en El Peruano el 4 de agosto de 2024) grava con 18 % de IGV los servicios digitales prestados por no domiciliados; el proveedor extranjero se inscribe en SUNAT y actúa como agente de percepción — [Sovos](https://sovos.com/es/blog/iva/decreto-legislativo-1623-de-sunat-grava-servicios-digitales-prestados-por-residentes-en-el-extranjero/); [Gestión](https://gestion.pe/opinion/uber-airbnb-netflix-meta-igv-a-los-servicios-digitales-comentarios-al-reglamento-noticia/); [El Peruano](https://elperuano.pe/noticia/258817-plataformas-digitales-extranjeras-deberan-recaudar-el-igv-desde-diciembre-que-significa-para-ti).
- Desde diciembre de 2024 se aplica 18 % de IGV al gasto publicitario en cuentas de Meta registradas en Perú, salvo que la cuenta tenga cargado en el centro de pagos un RUC válido que empiece con 20 (persona jurídica); si el RUC es inválido, incompleto o no empieza con 20, el IGV se cobra automáticamente. Ejemplo ilustrativo repetido: S/ 1,000 de pauta se convierten en S/ 1,180 (prensa local y blogs; no hallé la página oficial de Meta) — [Diario Tresmil](https://diariotresmil.com/facebook-ahora-te-cobra-18-de-igv-por-anuncios-en-peru-lo-que-debes-saber/); [RetabloWeb](https://www.retabloweb.com/sunat-cobrara-18-de-impuestos-por-anuncios-en-facebook/); [Taxpla Info](https://taxplainfo.com/impuestos-publicidad-facebook-en-peru/).
- Para empresas con RUC válido: se descarga el documento de Meta Ads y se paga el IGV por "utilización de servicios prestados por no domiciliados" con el Formulario 1662, código de tributo 1041; el efecto neto suele ser cero o casi cero para una empresa que vende con IGV, porque lo paga y lo recupera como crédito fiscal en el mismo mes (blog; verificar con contador) — [Kom.pe, factura de Google Ads y Meta Ads ante SUNAT](https://kom.pe/factura-google-ads-meta-ads-sunat/).
- El reglamento incluye la publicidad en línea entre los servicios digitales — [Kom.pe, IGV servicios digitales](https://kom.pe/igv-servicios-digitales-ia-peru/).

### Inferences
- **Implicancia de la fase de aprendizaje** (fórmula citada × rangos de la sección 3): a S/ 5–12 por conversación de WhatsApp, un conjunto necesita S/ 36–86 al día (S/ 1,070–2,570 al mes) para completar 50 eventos semanales; a S/ 20–60 por lead, necesitaría S/ 143–430 al día (S/ 4,300–12,900 al mes). Con menos de ~S/ 4,000 mensuales, una campaña optimizada a lead vivirá en "aprendizaje limitado": es funcional, pero menos estable, y obliga a no fragmentar.
- **Estructura sugerida con presupuesto pequeño:** 1 campaña con presupuesto de campaña Advantage, 1 conjunto amplio (Advantage+ audiencia con sugerencias: Lima y principales ciudades, 25–55, intereses de negocio) y, como máximo, 1 conjunto de retargeting cuando haya audiencia; 3–6 creativos; sin editar durante 7 días.
- **Presupuesto propuesto (pauta neta, sin IGV; con IGV entre paréntesis, a S/ 3.40 por dólar):**
  - Piloto mínimo: S/ 1,200 al mes ≈ S/ 40/día ≈ US$ 353 (S/ 1,416 con IGV).
  - Recomendado: S/ 2,400 al mes ≈ S/ 80/día ≈ US$ 706 (S/ 2,832 con IGV).
  - Escala (desde el mes 2–3 si el costo por reunión es aceptable): S/ 4,500 al mes ≈ S/ 150/día ≈ US$ 1,324 (S/ 5,310 con IGV).
- **Resultados esperados con S/ 2,400 de pauta (caso base; supuestos explícitos, confianza baja):**
  - *Landing (evento Lead/Schedule):* CPC S/ 1.00–2.00 → 1,200–2,400 clics; conversión de landing 2.4–6.1 % (ver sección 7) → 29–146 leads; base ≈ 60 leads a ≈ S/ 40.
  - *Formulario instantáneo de mayor intención:* costo por lead 30–50 % menor que landing → base ≈ 85–120 leads a S/ 20–28, con calidad inferior.
  - *Clic a WhatsApp:* S/ 6–12 por conversación → 200–400 conversaciones; **supuesto sin fuente:** 15–30 % se convierten en lead con datos y necesidad real → base ≈ 60 leads.
  - *Embudo comercial común:* lead → reunión 10–25 % → ≈ 6–15 reuniones (base ≈ 10, costo por reunión ≈ S/ 240); reunión → cierre 10–15 % → ≈ 1–2 clientes nuevos por mes de pauta, con costo de adquisición ≈ S/ 1,200–2,400 más IGV; contraste: 3.1 % lead a cierre × 60 leads ≈ 1.9 clientes. El cierre llega 2–8 semanas después de la primera reunión, es decir, en el mes 2–3.
  - Con el piloto de S/ 1,200 cabe esperar la mitad (≈ 30 leads, ≈ 5 reuniones, 0–1 cliente); en noviembre–diciembre, descontar además el encarecimiento estacional del CPM.
- El mes 1 debería tratarse como prueba (validar oferta, creativos y destino con S/ 1,200–2,400) y decidir el escalamiento con el costo por reunión real, no con el costo por lead.

### Gaps
- No hallé el mínimo diario de Meta expresado en soles ni la página oficial de mínimos; verificar en el campo de presupuesto de Ads Manager.
- No hallé la página oficial de Meta sobre IGV en Perú ni un pronunciamiento de SUNAT específico para Meta Ads; el tratamiento (percepción por Meta vs. autoliquidación con RUC 20) proviene de blogs y prensa. Confirmar con el contador de Aura y en el centro de pagos de la cuenta.
- Sin fuente sobre comisiones de tarjeta por operación en moneda extranjera ni sobre facturación en soles vs. dólares en cuentas peruanas (la moneda se fija al crear la cuenta; no verificado en esta sesión).
- No conozco el ticket promedio ni el margen de Aura; sin eso no se puede afirmar si un costo de adquisición de S/ 1,200–2,400 es rentable.
- La tasa de conversación → lead calificado en WhatsApp es un supuesto sin respaldo.

## 5. Costos de WhatsApp: precios de la plataforma, ventana gratuita de anuncios, y app vs. API/CRM

### Takeaway
Para una agencia pequeña, la app WhatsApp Business sigue siendo gratuita y suficiente para empezar. En la API, Meta cobra por mensaje desde el 1 de julio de 2025 y, **desde el 1 de octubre de 2026, también cobra los mensajes de servicio** (antes gratuitos), con una franquicia reportada de 1,000 mensajes de servicio al mes por número; la ventana gratuita de 72 horas tras un clic en anuncio de WhatsApp se mantiene. Un CRM como Kommo cuesta desde ~US$ 20–25 por usuario al mes y se justifica cuando el volumen o la necesidad de atribución lo exijan.

### Cited Findings
- **Fuente oficial:** desde el 1 de julio de 2025 Meta cobra por mensaje (reemplaza el cobro por conversación); los cambios de tarifa se avisan con al menos tres meses — [Meta for Developers, WhatsApp pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).
- **Fuente oficial:** desde el 1 de octubre de 2026 Meta cobra por mensaje todos los mensajes de servicio, de forma consistente con las plantillas; estos mensajes no se cobraban desde el 1 de noviembre de 2024 — [Meta for Developers, "Upcoming pricing updates for Meta Business Agent, service and utility messages"](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages).
- Las plantillas de utilidad enviadas dentro de la ventana de atención de 24 horas también pasan a cobrarse desde el 1 de octubre de 2026 — [Wati, soporte](https://support.wati.io/en/articles/16954666-whatsapp-business-platform-api-pricing-changes-service-messages-and-click-to-message-ads).
- Franquicia: 1,000 mensajes de servicio gratuitos al mes por número de teléfono de empresa, sin acumulación — [Voltade](https://voltade.com/learn/whatsapp/whatsapp-api-pricing-changes-october-2026); confirmado en prensa peruana ("cuando las empresas superen los 1,000 mensajes gratuitos mensuales") — [El Peruano](https://www.elperuano.pe/noticia/296474-whatsapp-lidera-la-revolucion-conversacional-en-peru-y-america-latina).
- Tarifa de servicio para Perú: US$ 0.03 por mensaje según tres proveedores — [Voltade](https://voltade.com/learn/whatsapp/whatsapp-api-pricing-changes-october-2026); [YCloud](https://www.ycloud.com/blog/whatsapp-api-message-pricing-update-effective-october-1-2026); [Kemeny Studio](https://kemenystudio.com/whatsapp-service-message-pricing); una calculadora peruana estima US$ 0.02 usando la tarifa de utilidad como aproximación — [Paul Siccha](https://paulsiccha.com/en/tools/whatsapp-business-cost-calculator). **Conflicto no resuelto.**
- Tarifa de marketing para Perú: US$ 0.0703 por mensaje (resto de LatAm US$ 0.0740; utilidad ≈ US$ 0.0113), tarifas de lista vigentes desde el 1 de octubre de 2026 según un proveedor — [Mercately](https://blog.mercately.com/?p=30248).
- Los mensajes que el cliente envía a la empresa siguen siendo gratuitos — [Wati, blog](https://www.wati.io/en/blog/whatsapp-business-api-pricing-changes-2026-what-meta-s-two-new-fees-actually-cost-you/).
- **Ventana gratuita por anuncio:** los mensajes enviados dentro de la ventana de 72 horas que abre un anuncio de clic a WhatsApp (o un botón de llamada a la acción de Facebook) siguen siendo gratuitos tras el cambio de octubre; dentro de ella son gratuitos los mensajes de marketing, utilidad, autenticación y servicio. Excepción: el agente de IA de Meta (Business Agent) no es gratuito ni en la ventana de 24 horas ni en la de 72 (terceros que citan la página de precios de Meta del 25 de agosto de 2026) — [SleekFlow](https://help.sleekflow.io/en_US/whatsapp/understanding-click-to-whatsapp-ads-ctwa-and-the-72-hour-free-window); [Chattigo](https://chattigo.com/en/blog/How-much-does-WhatsApp-Business-charge-per-message-in-2026/); [Mercately](https://blog.mercately.com/?p=30248).
- Reporte **no confirmado**: la ventana gratuita se habría ampliado a 7 días hacia el 28 de septiembre de 2026, con despliegue cuenta por cuenta — [PowerAds](https://powerads.group/news/click-to-whatsapp-ads-7-day-free-window-service-message-fees/).
- Agente de IA de Meta: precio por tokens, US$ 2.00 por millón de tokens; las fuentes discrepan en la fecha (1 de agosto vs. octubre de 2026) — [Zernio](https://zernio.com/blog/meta-business-agent-pricing); [Ecosistema Startup](https://ecosistemastartup.com/?p=106522).
- **App vs. API:** los mensajes enviados desde la app WhatsApp Business siguen siendo gratuitos; los enviados por la API se facturan a tarifa de API. La "coexistencia" permite usar la app y la API en el mismo número a la vez; está pensada para números ya activos en la app; límite de 20 mensajes por segundo; grupos, llamadas y etiquetas siguen solo en la app; los mensajes enviados desde la app no abren ni extienden la ventana de 24 horas de la API — [Chakra, coexistence 2026](https://chakrahq.com/article/whatsapp-business-app-api-coexistence-2026); [Broadnet](https://www.broadnet.me/blog/whatsapp-business-app-vs-api-coexistence-2026); [YCloud](https://www.ycloud.com/blog/whatsapp-business-app-coexistence-meta-update).
- **Kommo:** desde el 1 de septiembre de 2026 el plan Básico cuesta US$ 20 y el Avanzado US$ 30 por usuario al mes según el blog en español (el blog en inglés dice US$ 25 y US$ 35; un tercero lo explica por precios regionales). Sin facturación mensual según un competidor. Desde el 1 de junio de 2026 los usuarios nuevos del plan Básico no tienen agente de IA — [Kommo, actualización de precios](https://www.kommo.com/es/blog/actualizacion-precios-kommo/); [Kommo (inglés)](https://www.kommo.com/blog/kommo-pricing-update/); [Setsmart](https://setsmart.io/blog/kommo-precios); [Clientify](https://clientify.com/comparativa-crm-clientify-vs-kommo).

### Inferences
- Para el volumen esperado de Aura (decenas a pocos cientos de conversaciones al mes), el costo de mensajería de la API sería marginal: las respuestas dentro de las 72 horas posteriores al clic son gratuitas y hay 1,000 mensajes de servicio gratis al mes. El costo real de la API es el software (CRM) y la configuración, no los mensajes.
- Ruta recomendable: empezar con la app WhatsApp Business (número dedicado, mensaje de bienvenida, respuestas rápidas con 3 preguntas de calificación y etiquetas predefinidas) y un registro manual de leads en hoja de cálculo o CRM; pasar a coexistencia + CRM (Kommo u otro) cuando haya más de una persona atendiendo, cuando se quiera automatizar la calificación, o cuando se necesite devolver a Meta eventos de lead calificado/compra por API de Conversiones.
- Kommo para 2 usuarios costaría alrededor de US$ 40–70 al mes (≈ S/ 136–238), con pago adelantado por varios meses; es comparable a ~3–8 % de la pauta recomendada.
- El agente de IA de Meta puede calificar leads fuera de horario, pero se cobra aparte por tokens y no entra en la ventana gratuita; para una venta consultiva conviene que solo haga el primer filtro y derive a una persona.

### Gaps
- No pude abrir la tarjeta de tarifas oficial de Meta para confirmar el precio por mensaje de servicio en Perú (US$ 0.03 vs. 0.02).
- La ampliación de la ventana gratuita a 7 días no está confirmada.
- No hallé información sobre cómo Kommo registra la fuente del anuncio en leads de clic a WhatsApp ni su integración con la API de Conversiones para mensajería.
- No hallé comparativas de precios de alternativas (Leadsales, Wati, Mercately) para Perú.

## 6. Seguimiento y medición para la opción de "conversión"

### Takeaway
La configuración mínima es Píxel + API de Conversiones con un evento estándar de lead en la página de gracias, y, en cuanto sea posible, devolver a Meta las etapas del CRM (lead calificado, reunión, cliente) para optimizar por calidad. La configuración manual de Medición de eventos agregados fue retirada a mediados de 2025 según varias fuentes, por lo que ya no habría que priorizar 8 eventos ni verificar el dominio para ello.

### Cited Findings
- Las ubicaciones de conversión "Sitio web" requieren el Píxel de Meta con un evento de lead (atribución probable) — [AdsUploader](https://adsuploader.com/es/blog/how-to-create-facebook-lead-ads).
- "Lead" es el evento estándar para la conversión principal en generación de prospectos — [MB Adv, Meta Pixel & Conversions API 2026](https://www.mbadv.agency/meta-ads/meta-pixel-and-conversion-tracking).
- Para negocios de generación de leads, las etapas del CRM (MQL, SQL, convertido) son señales más útiles que un evento genérico de Lead — [Adamigo, first-party data con Conversions API](https://www.adamigo.ai/blog/first-party-data-use-meta-conversions-api).
- **Fuente oficial:** la integración de API de Conversiones para CRM no es requisito para empezar con el objetivo Conversion Leads, pero mejora los resultados cuando está completa — [Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/2-getting-started-with-integration).
- Meta retiró la configuración manual de Medición de eventos agregados en junio de 2025 y ahora agrega automáticamente los eventos elegibles; la verificación de dominio ya no es necesaria para configurar eventos, aunque puede seguir haciendo falta para otros fines (control de edición de enlaces, verificación del negocio) — [PixelYourSite](https://www.pixelyoursite.com/docs/meta-facebook-settings-setup); [meta-ads.si](https://meta-ads.si/what-is-aggregated-event-measurement/); [MB Adv](https://www.mbadv.agency/meta-ads/meta-pixel-and-conversion-tracking). **Contradicho** por guías de 2026 que aún describen el tope de 8 eventos por dominio verificado, probablemente desactualizadas — [Segwise](https://segwise.ai/blog/facebook-aggregated-event-measurement); [Keepers Digital](https://keepersdigital.com/en-us/resources/paid-social/meta-aggregated-event-measurement/).
- Para WhatsApp, la API de Conversiones para mensajería permite medir leads y ventas de anuncios de clic a mensaje y optimizar por ellos — [WhatsApp Business blog](https://whatsappbusiness.com/blog/new-ways-for-businesses-to-do-more-with-messaging/); requiere enviar el `ctwa_clid` — [Aixel](https://aixel.io/blog/whatsapp-conversions-api).
- Meta cambió la definición de atribución por clic en marzo de 2026, lo que afecta la comparación de resultados con periodos anteriores — [Jon Loomer](https://www.jonloomer.com/meta-ads-attribution-2026/amp/).
- Recomendación práctica repetida: comparar destinos por costo por oportunidad calificada usando retroalimentación de CRM o API de Conversiones, no por costo por lead — [Stackmatix](https://stackmatix.com/blog/lead-gen-ad-formats-compared).

### Inferences
- Definición de conversión sugerida para Aura: evento principal **Lead** al enviar el formulario de diagnóstico (página de gracias) y evento secundario **Schedule** al confirmar la reunión en el calendario; clic en el botón de WhatsApp como **Contact** (solo como señal auxiliar, no como evento de optimización, porque es un clic y no un lead). *Schedule* y *Contact* son eventos estándar de Meta según conocimiento general, pero no los pude verificar en fuente durante esta sesión.
- Con volumen bajo, optimizar al evento más frecuente (Lead) y usar Schedule y las etapas del CRM como eventos reportados; subir el evento de optimización solo cuando haya ~50 por semana.
- Convención de UTM recomendable (práctica habitual, sin fuente específica): `utm_source=meta`, `utm_medium=paid_social`, `utm_campaign={{campaign.name}}`, `utm_content={{ad.name}}`, `utm_term={{adset.name}}`, y guardar esos valores en campos ocultos del formulario para que lleguen al CRM.
- Aunque la verificación de dominio ya no sea obligatoria para eventos, conviene verificar somosauraperu.com en el Administrador de negocios por control y confianza de la cuenta.
- Circuito de calidad: marcar cada lead en el CRM (calificado / reunión / propuesta / cliente) y subir esos estados a Meta (API de Conversiones para CRM o carga de conversiones offline) al menos semanalmente.

### Gaps
- No pude verificar en documentación oficial la lista vigente de eventos estándar (Lead, Contact, Schedule, CompleteRegistration) ni el estado exacto de la Medición de eventos agregados en 2026.
- No hallé documentación sobre carga manual de conversiones offline en 2026 (formato, ventana, si sigue existiendo como conjunto de eventos offline o está unificada en el conjunto de datos).
- No hallé convenciones oficiales de UTM de Meta; lo anotado es práctica común.
- No sé con qué plataforma está construido www.somosauraperu.com, lo que condiciona la forma de instalar la API de Conversiones (integración nativa, pasarela o etiquetado del lado del servidor).

## 7. Arquitectura de embudo recomendada para una agencia pequeña

### Takeaway
La evidencia hallada respalda un embudo corto: prospección en frío con una oferta de bajo compromiso y alto valor percibido (diagnóstico o auditoría), un destino con calificación y un retargeting pequeño; la landing de una agencia convierte poco (mediana histórica 2.4 %, frente a 6.6 % de todas las industrias), por lo que la oferta y la prueba social pesan más que el formato. No encontré evidencia cuantitativa sobre tipos de creativo (reels del fundador, casos, UGC) para agencias.

### Cited Findings
- Mediana de conversión de landing pages en todas las industrias: 6.6 % (informe 2024 de Unbounce; ~41,000 páginas y 57 millones de conversiones) — [PR Newswire, Unbounce 2024](https://prnewswire.com/news-releases/unbounces-2024-conversion-benchmark-report-proves-that-attention-spans-are-declining-and-so-are-conversion-rates-302239407.html); [Search Engine Land](https://searchengineland.com/how-does-your-landing-page-performance-compare-453224).
- Landing pages de agencias: mediana de 2.4 % en un estudio anterior de Unbounce de 16 industrias (**dato antiguo, ~2021**) — [MarketingProfs](https://www.marketingprofs.com/charts/2021/44860/landing-page-conversion-benchmarks-for-16-industries).
- Servicios profesionales: mediana ≈ 6.1 % (fuente secundaria que atribuye el dato a Unbounce, edición no confirmada); SaaS: 3.8 % — [Colorlib](https://colorlib.com/wp/?p=344702); [MarketingProfs, 2024](https://marketingprofs.com/charts/2024/52374/landing-page-conversion-benchmarks).
- La combinación "Sitio web y formularios instantáneos" permite que Meta elija el camino por persona — [SwipeInsight](https://web.swipeinsight.app/posts/meta-launches-dual-path-optimization-for-lead-ads-with-website-and-instant-forms-16608).
- Ciclo de venta típico en agencias de marketing: 2–8 semanas entre la primera reunión y la firma — [CIENCE](https://cience-www.pages.dev/lead-generation/marketing-agencies).
- El agente de IA de Meta en WhatsApp/Messenger (junio de 2026) puede responder preguntas y calificar leads — [AdsUploader, Meta Ads Updates](https://adsuploader.com/blog/meta-ads-updates).
- La ventana "Q5" (fines de diciembre a mediados de enero) ofrece CPM por debajo de los niveles previos a las fiestas — [Mobile Marketing Reads](https://mobilemarketingreads.com/?p=49306).

### Inferences
- **Oferta de entrada:** "Diagnóstico de marca e influencers" gratuito de 20–30 minutos o auditoría express con entregable, antes que "contáctanos"; alternativas de menor fricción para retargeting: caso de éxito en PDF, tarifario o guía de presupuestos de campañas con influencers en Perú. (Sin evidencia cuantitativa específica; es la lógica estándar de imán de leads para servicios.)
- **Prospección en frío (≈ 80 % del presupuesto):** 3–6 creativos que cubran ángulos distintos: reel del fundador explicando un error frecuente de marca, caso con cifras antes/después, testimonio de cliente en formato UGC, carrusel de "cómo trabajamos / cuánto cuesta". Dejar que Advantage+ creativo y el presupuesto de campaña asignen entrega.
- **Retargeting (≈ 20 %, o nada hasta tener audiencia):** quienes vieron 50 % o más de los videos, interactuaron con Instagram en 90 días o visitaron la web en 30 días; mensaje de prueba social + invitación directa a agendar o escribir por WhatsApp.
- **Conversión de landing esperable:** 2–6 % con tráfico frío de Meta (entre la mediana histórica de agencias y la de servicios profesionales); usar 3–4 % como base de planificación.
- **Secuencia temporal:** semanas 1–2, prueba de oferta y creativos con S/ 40–80 al día; semanas 3–4, consolidar el ganador y activar retargeting; desde fines de diciembre y enero, escalar aprovechando el CPM más bajo.
- **Atención:** responder cada lead en menos de una hora en horario laboral y proponer la reunión en el primer contacto; si no es posible, usar agenda automática en la página de gracias.

### Gaps
- No hallé evidencia cuantitativa sobre qué tipos de creativo rinden mejor para agencias o servicios B2B en Meta (reels del fundador vs. casos vs. UGC vs. carruseles), ni tasas de conversión de imanes de leads como auditorías, media kits o tarifarios.
- La cifra de conversión de landing de agencias (2.4 %) es antigua; el informe vigente de Unbounce está cerrado tras formulario y no pude consultarlo.
- No hallé casos documentados de agencias de branding o de marketing de influencers en Perú o LatAm con resultados de Meta Ads.
- No pude revisar el sitio www.somosauraperu.com ni los perfiles sociales de Aura para evaluar el punto de partida (prueba social, casos, velocidad de la web, audiencias existentes).
