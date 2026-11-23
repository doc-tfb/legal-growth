# Brief para Neo (Grok) · constructor de la web

**Este es el documento más importante del repo para ti.** Si solo podés leer una cosa antes de empezar a escribir código, que sea esta.

---

## Qué construir

**Fase 1 MVP: 13 páginas en español neutro (variante España) sobre dominio nuevo.** Lista exacta en [`02-sitemap-fase1-mvp.md`](./02-sitemap-fase1-mvp.md).

Resumen:
1. `/` — Home.
2. `/nosotros/` — Hub de fundadores.
3. `/nosotros/gonzalo-castro/` — Bio Gonzalo.
4. `/nosotros/carla-fresch-pons/` — Bio Carla.
5. `/servicios/` — Hub servicios.
6. `/servicios/marketing-juridico/` — Pillar 1.
7. `/servicios/consultoria-estrategica/` — Pillar 2.
8. `/servicios/formacion-para-despachos/` — Pillar 3.
9. `/servicios/speaker-conferencias/` — Pillar 4.
10. `/metodologia/` — Framework propio.
11. `/casos/` — Hub casos + 2 subpáginas (GCE, ORJ).
12. `/blog/` — Shell del blog (sin posts en MVP; se llenan en fase 2).
13. `/contacto/` — Formulario + Calendly.

Más 1 página adicional de lead magnet: `/recursos/benchmark-precios-marketing-juridico-2026/`.

---

## Qué NO construir todavía

- **Fase 2 (expansión)**: ~40 páginas con subservicios desdoblados, clusters completos de blog, biblioteca de recursos. Documentada en `03-sitemap-fase2-expansion.md` para referencia futura.
- **Fase 3 (multi-país)**: subcarpetas `/mx/` y `/ar/`. Documentada en `04-sitemap-fase3-multipais.md` y `14-i18n-multipais.md` como preparación. **La arquitectura i18n sí se deja lista en código; el contenido localizado no se publica.**
- **Más posts del blog** más allá del shell: los posts se llenan en las semanas 1–26 según el content plan (`docs/02-seo/05-content-plan-6-meses.md`). El MVP solo necesita la plantilla de post funcionando.

---

## Orden de lectura obligatorio antes de escribir código

1. **Este archivo** (`00-brief-neo.md`).
2. [`../01-estrategia/00-propuesta-de-valor.md`](../01-estrategia/00-propuesta-de-valor.md) — qué vende la marca.
3. [`../01-estrategia/01-fundadores.md`](../01-estrategia/01-fundadores.md) — datos verificados de Gonzalo y Carla.
4. [`../05-brand/01-tono-de-voz.md`](../05-brand/01-tono-de-voz.md) — cómo suena.
5. [`01-stack-recomendado.md`](./01-stack-recomendado.md) — stack técnico.
6. [`02-sitemap-fase1-mvp.md`](./02-sitemap-fase1-mvp.md) — las 13 páginas con title/meta/KW.
7. Todo `./05-anatomia-*.md` hasta `./11-anatomia-*.md` — anatomía de cada página.
8. [`12-seo-tecnico-checklist.md`](./12-seo-tecnico-checklist.md) — 30 puntos obligatorios.
9. [`13-tracking-analitica.md`](./13-tracking-analitica.md) — GTM + GA4 + HubSpot + eventos.
10. Todo `../04-copy/*.md` — copy final de cada página.

---

### Alcance del copy

El copy final de cada página es **tu responsabilidad** (con aprobación de Gonzalo y Carla). La carpeta `docs/04-copy/` tiene borradores sugeridos que podés tomar como punto de partida, reescribir o descartar según tu criterio. Son brief, no producción.

### Qué NO decidís vos

- **SEO**: lo decide Iris. Si tu componente necesita title, meta, canonical, schema, estructura de URL, hreflang o redirect — primero revisás `docs/02-seo/*` y los specs por página en `docs/03-web-para-neo/02-sitemap-fase1-mvp.md`. Si falta un dato SEO que no está en los docs, abrí issue `seo-input-necesario` y esperá respuesta antes de hacer algo que lo toque.
- **Copy final**: lo decidís vos con aprobación de Gonzalo y Carla. Los borradores de `docs/04-copy/` son brief.
- **Marca**: nombre, dominio, metodología, paleta final — Gonzalo y Carla.

### Dossier de marca

Gonzalo tiene un dossier con fotos de Gonzalo y Carla y otros materiales de marca trabajados antes del lanzamiento de esta marca. **Antes de empezar a maquetar**, pedile el link al dossier o pedile que lo suba a `/public/dossier/` del repo del código. No uses placeholders — los assets reales existen.

---

## Criterios de calidad

- **Mobile-first**. Breakpoint 400px sin scroll horizontal.
- **Core Web Vitals en verde** antes del merge (LCP < 2,5 s, CLS < 0,1, INP < 200 ms).
- **Accesibilidad AA mínima**: contraste 4,5:1 en texto, foco visible, nav con teclado, alt text en imágenes.
- **SEO técnico al 100%** desde el día 1: title único por página, meta description, canonical, OG, Twitter, sitemap, robots, schema.org (Organization + Person + Service + Article para el blog).
- **Sin lorem ipsum**. Si falta copy, consultá `../04-copy/` o marcá `[COMPLETAR: descripción]` con comentario HTML.
- **Sin secrets commiteados**. Variables sensibles en `.env.local` y documentadas en `.env.example`.
- **Sin dependencias innecesarias**. Cada librería pinned a versión exacta.
- **Preview por Pull Request** antes del merge. Nunca push directo a `main`.

---

## Entrega esperada

1. **Repo nuevo** (sugerencia: `gonzalocastro-com-website` o el nombre final de dominio tras decisión de Gonzalo). Este repo (`legal-growth`) es solo documentación; el código va en un repo separado.
2. **Primera Pull Request** con el scaffold (Next.js + Tailwind + Sanity CMS configurado + 1–2 páginas live).
3. **Pull Requests sucesivas** por página o por grupo lógico de páginas.
4. Cada PR con su descripción completa (alcance, diff, tests, limitaciones, riesgos, rollback). Template en `.github/PULL_REQUEST_TEMPLATE.md` de este repo.
5. **`OK para merge` explícito de Gonzalo** antes de cada merge. Ningún auto-merge.

---

## Qué hacer con el dominio y variables de entorno

- **Dominio comprado**: `tfblegal.com` (decisión de Gonzalo, 23-nov-2026). El nombre de marca sigue abierto — "TFB Legal" es la opción natural pero no cerrada; ver `../05-brand/00-naming.md`.
- Centralizar la URL en la variable de entorno `NEXT_PUBLIC_SITE_URL`.
- Variables necesarias a documentar en `.env.example`:
  ```
  NEXT_PUBLIC_SITE_URL=https://tfblegal.com
  NEXT_PUBLIC_GTM_ID=GTM-[PENDIENTE]
  NEXT_PUBLIC_GA4_ID=G-[PENDIENTE]
  HUBSPOT_PORTAL_ID=[PENDIENTE]
  HUBSPOT_FORM_ID_LEAD_MAGNET=[PENDIENTE]
  SANITY_PROJECT_ID=[creado por Neo en nuevo project de Sanity]
  SANITY_DATASET=production
  SANITY_API_VERSION=2024-11-01
  SANITY_API_TOKEN=[PENDIENTE — solo si se necesita para writes]
  RESEND_API_KEY=[PENDIENTE — para transaccional opcional]
  ```
- Nunca commitear `.env.local`. Sólo `.env.example` con placeholders.

---

## i18n y multipais en Fase 1

**NO** se lanza multipais en MVP.

Pero la arquitectura sí se deja preparada:
- Next.js App Router con `/es/` como ruta por defecto (sin exposer al usuario que es "es"; la URL raíz `/` sirve el contenido ES).
- Estructura lista para añadir `/mx/` y `/ar/` en fase 3 sin reescribir.
- `hreflang` tags preparados (ver `14-i18n-multipais.md`), pero sólo publicados cuando haya contenido real por país.

---

## Dudas antes o durante la construcción

Ver `docs/07-dialog/README.md` (protocolo de comunicación entre Neo e Iris). Antes de abrir una duda nueva:

1. Revisar `docs/07-dialog/01-preguntas-anticipadas.md` (FAQ con dudas anticipadas y respondidas).
2. Buscar en los demás `docs/0*/` por si ya está respondida.
3. Si no está cubierta: abrir GitHub Issue con label `pregunta-para-iris` (canal primario) o agregar al final de `docs/07-dialog/00-hilo-abierto.md` con fecha y tu firma.

---

## Resumen de 30 segundos

Construir una web limpia, rápida, con SEO técnico perfecto, 13 páginas de contenido real sin placeholder, lista para captar leads vía LinkedIn/network y para empezar a rankear SEO a los 4–6 meses. Next.js + Tailwind + Sanity. Sin alarde, sin templates obvios, sin marketing de agencia. Debe sentirse como la web de un consultor senior, no como la de una agencia más.
