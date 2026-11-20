# Anatomía · Home (`/`)

Página más crítica. Es la primera impresión, debe cargar en < 1,5s, transmitir "consultor senior" en 3 segundos, y mostrar las dos caras de los fundadores sin ambigüedad.

**Copy final listo**: [`../04-copy/01-home.md`](../04-copy/01-home.md). Neo pega los textos textualmente; no reescribir.

---

## Secciones (orden obligatorio)

### 1. Hero con dos caras

**Componente**: `<Hero>`.

**Contenido**:
- H1 corto (máximo 12 palabras): la propuesta de valor en una línea.
- Subtitle de 1–2 líneas.
- CTA principal: "Agenda una consulta de 30 min" → `/contacto/`.
- CTA secundario: "Ver casos" → `/casos/`.
- Dos retratos de Gonzalo y Carla en el fondo o al lado (según diseño; usar placeholders mientras no haya fotos finales).
- Logos de clientes ancla (GCE, ORJ) debajo como prueba social inicial.

**Acción**: CTA principal es el hero de la conversión global del sitio. Prioridad 1.

**Rendimiento**: imagen hero < 150 KB, formato WebP, `fetchpriority="high"`. Reserva de espacio para evitar CLS.

---

### 2. Prueba social inmediata

**Componente**: `<LogoCloud>` o `<TrustBar>`.

**Contenido**:
- Fila con 4–6 logos (GCE, ORJ + logos de partners futuros o editoriales donde Gonzalo/Carla publicaron).
- Cifra fuerte si existe: "X despachos acompañados", "Y leads cualificados generados", "Z años sumados de experiencia". **Mientras no haya cifras validadas, usar placeholder `[X]` o eliminar sección.**

**Acción**: validación social antes de pedir compromiso.

---

### 3. Cuatro servicios en grid

**Componente**: `<ServiceGrid>` (4 `<ServiceCard>`).

**Contenido** (orden de izquierda a derecha, arriba-abajo):
1. **Marketing jurídico** — "Ejecutamos SEO, Google Ads, LinkedIn, web y email. Con equipo detrás." → `/servicios/marketing-juridico/`.
2. **Consultoría estratégica** — "Diagnóstico de crecimiento, gestión del despacho, estrategia comercial." → `/servicios/consultoria-estrategica/`.
3. **Formación para despachos** — "Programas in-company y online. El socio-director deja de ser el cuello de botella." → `/servicios/formacion-para-despachos/`.
4. **Speaker · Ponencias** — "Keynotes en marketing jurídico, IA para despachos y transformación del sector." → `/servicios/speaker-conferencias/`.

**Acción**: no usar acordeón; mostrar los 4 completos arriba del fold en desktop.

---

### 4. Metodología con nombre propio

**Componente**: `<MethodologySection>`.

**Contenido**:
- H2: "Nuestro proceso" o "Cómo trabajamos".
- Nombre del framework: `[COMPLETAR: nombre decidido en docs/05-brand/00-naming.md]`.
- 4 pasos en línea o en cards (según diseño): Diagnóstico → Estrategia → Ejecución → Formación.
- Un párrafo corto por paso (ver `../04-copy/08-metodologia.md`).
- CTA: "Conoce la metodología completa" → `/metodologia/`.

**Acción**: construir diferenciación conceptual, no solo visual.

---

### 5. Caso destacado

**Componente**: `<FeaturedCase>`.

**Contenido**:
- Caso GCE o ORJ (el que esté más maduro al momento del lanzamiento).
- Foto del cliente (con permiso) o logo grande.
- Cita textual del cliente (`[COMPLETAR: pedir cita a Mónica Usón GCE o a Orejas]`).
- 2–3 métricas clave (`[COMPLETAR: cifras post-cutover, disponibles mes 3–6]`).
- Link: "Ver caso completo" → `/casos/[slug]/`.

**Acción**: prueba social cualitativa + cuantitativa.

---

### 6. Testimonios cortos

**Componente**: `<TestimonialCarousel>` o lista estática de 2–3 testimonios.

**Contenido**:
- Testimonio de Mónica Usón (GCE) o Leticia Montalvo (GCE).
- Testimonio de socio-director de ORJ.
- Foto + nombre + cargo + despacho.
- Texto breve (2–3 frases máximo).

**Acción**: validación emocional.

**Si no hay testimonios aún**: sección opcional, no la rellenés con stock. Eliminar hasta que haya.

---

### 7. Lead magnet ancla

**Componente**: `<LeadMagnetCTA>`.

**Contenido**:
- Imagen de la portada del PDF del benchmark.
- H2: "Benchmark precios marketing jurídico 2026".
- Subtítulo: "Rangos reales de presupuesto de marketing para despachos en España. Descarga gratuita."
- Formulario inline (email + nombre + empresa) o CTA a página dedicada.
- Botón: "Descargar el benchmark".

**Acción**: capturar email a cambio de valor de referencia. Prioridad 2 (después de CTA de consulta).

---

### 8. Sobre nosotros (preview)

**Componente**: `<FoundersPreview>`.

**Contenido**:
- Dos cards: Gonzalo y Carla, cada uno con foto, nombre, rol de una línea.
- Breve párrafo compartido: "Un consultor de marketing con 10+ años de agencia detrás, y una ex-abogada del Poder Judicial de Argentina con experiencia directa en el sector".
- CTA: "Conócenos" → `/nosotros/`.

**Acción**: humanizar la marca, invitar a profundizar.

---

### 9. Blog / contenido

**Componente**: `<LatestPosts>` (3 cards).

**Contenido**:
- 3 últimos posts del blog.
- Si no hay posts todavía (MVP), **ocultar esta sección** o mostrar placeholder "Artículos próximamente — suscríbete abajo".
- CTA: "Ver blog completo" → `/blog/`.

**Acción**: autoridad editorial.

---

### 10. CTA final

**Componente**: `<FinalCTA>`.

**Contenido**:
- Fondo contrastante (acento de marca).
- H2: "¿Hablamos?" o similar.
- Un párrafo corto.
- CTA único: "Agenda una consulta de 30 min" → `/contacto/`.

**Acción**: cierre con la misma conversión que el hero.

---

### 11. Footer

**Componente**: `<Footer>` global.

**Contenido**:
- Logo.
- Navegación secundaria (servicios, casos, blog, contacto).
- Legales (`/politicas/aviso-legal/`, `/politicas/politica-de-privacidad/`, `/politicas/politica-de-cookies/`).
- LinkedIn de Gonzalo + Carla.
- Copyright.
- Mención discreta: "Un proyecto de [Nombre marca]. Operación ejecutiva por The Funnel Box."

**Acción**: info legal y acceso directo al network.

---

## Consideraciones técnicas

### Metadata
- `<title>` único (ver `02-sitemap-fase1-mvp.md`).
- Meta description 150–160 caracteres.
- Open Graph image: 1200x630, custom con dos caras + propuesta de valor.
- Twitter card `summary_large_image`.
- Schema.org `Organization` + `Person` (ambos fundadores) + `WebSite` + `SearchAction`.

### Performance
- LCP target < 2 s en 4G móvil.
- Hero image prioritaria.
- Fuentes autohospedadas o con `font-display: swap`.
- Tailwind JIT para no cargar CSS innecesario.
- Lazy load de testimonios, lead magnet, latest posts (todo lo que está bajo el fold).

### Accesibilidad
- Alt text en todas las imágenes.
- Contraste texto/fondo mínimo 4,5:1.
- Foco visible con contorno (nunca `outline: none` sin sustituto).
- Navegación con Tab.
- `aria-label` en cards y CTAs cuando el texto visible no es descriptivo.

### Mobile (400px)
- Grid de servicios: 1 columna.
- Hero: foto encima o detrás del H1 (no al lado).
- Footer: acordeón o columnas apiladas.
- Sin scroll horizontal.
- Padding lateral mínimo 16px.

---

## Qué no va en la home

- "Nuestro equipo" con fotos de stock.
- Testimonios genéricos sin cara ni nombre.
- Precios públicos (ticket alto, conversión cualificada).
- Mapa de oficinas.
- "Clientes destacados" si no son reales.
- Blog con lorem ipsum.
- Chatbot genérico (molesta, no convierte).
