# SEO técnico · checklist 30 puntos

Todos los puntos son **obligatorios** antes del merge a `main` de cada PR que toque páginas públicas. Iris revisa puntos de SEO en cada PR.

---

## Meta tags y head (6)

- [ ] **1. Title único por página** entre 30 y 65 caracteres. Keyword principal al inicio. Formato: `[Keyword principal] · [Modificador si aplica] | [Marca]`.
- [ ] **2. Meta description única** por página entre 120 y 160 caracteres. Incluye keyword + propuesta de valor + CTA implícito.
- [ ] **3. Meta robots** correcta: `index, follow` para páginas públicas; `noindex, nofollow` para `/contacto/gracias/`, `/recursos/[slug]/gracias/`, `/404`.
- [ ] **4. Canonical** declarado en cada página, apuntando a sí misma salvo redirects conscientes.
- [ ] **5. Open Graph** completo: `og:title`, `og:description`, `og:url`, `og:image` (1200x630), `og:type`, `og:site_name`.
- [ ] **6. Twitter Card** `summary_large_image` con `twitter:title`, `twitter:description`, `twitter:image`.

---

## Schema.org / JSON-LD (5)

- [ ] **7. `Organization`** en todas las páginas con `name`, `url`, `logo`, `sameAs` (LinkedIn de la marca y de Gonzalo/Carla), `founder` (ambos como `Person`).
- [ ] **8. `Person`** para Gonzalo y Carla con `name`, `jobTitle`, `url`, `sameAs`, `image`, `worksFor`.
- [ ] **9. `WebSite`** en la home con `name`, `url`, `potentialAction` (`SearchAction` si hay buscador).
- [ ] **10. `Service`** en cada página de servicio con `name`, `provider`, `areaServed`, `description`.
- [ ] **11. `BlogPosting`** / `Article` en cada post del blog con `author`, `datePublished`, `dateModified`, `image`, `headline`, `description`, `publisher`.
- [ ] **12. `FAQPage`** en páginas con FAQ (pillars de servicio, posts con FAQ).
- [ ] **13. `BreadcrumbList`** en toda página que no sea la home.

---

## Sitemap y robots (3)

- [ ] **14. `sitemap.xml`** generado dinámicamente con todas las URLs públicas. Prioridad y changefreq coherentes. Endpoint: `/sitemap.xml`.
- [ ] **15. `robots.txt`** servido en `/robots.txt`. Allow todo; disallow `/contacto/gracias/`, `/recursos/*/gracias/`. Incluye referencia al sitemap.
- [ ] **16. Verificación Search Console** registrada (meta tag en `<head>` o archivo de verificación).

---

## URLs y estructura (4)

- [ ] **17. URLs limpias**: minúsculas, guiones (no underscores), sin parámetros innecesarios, sin extensiones `.html`.
- [ ] **18. Trailing slash** consistente: todas las URLs terminan con `/`. Vercel gestiona redirect 308 de versión sin slash a versión con slash.
- [ ] **19. 404 real**: URLs que no existen devuelven HTTP 404 (no 200 con shell SPA). Página 404 con `noindex`.
- [ ] **20. Redirects 301 preparados** en `next.config.ts` para cualquier URL legacy que aparezca.

---

## Core Web Vitals (3)

- [ ] **21. LCP** (Largest Contentful Paint) < 2,5 s en mobile 4G.
  - Hero image prioritaria (`priority` prop en `next/image`).
  - Fuentes autohospedadas o con `font-display: swap`.
  - CSS crítico inline.
- [ ] **22. CLS** (Cumulative Layout Shift) < 0,1.
  - Reserva de espacio en imágenes (width + height o aspect-ratio).
  - Reserva de espacio en embeds (Calendly, etc.).
  - Font loading sin FOUT (fallback con misma métrica).
- [ ] **23. INP** (Interaction to Next Paint) < 200 ms.
  - Hidratación progresiva (React Server Components donde se pueda).
  - Librerías cliente sólo donde hagan falta.

---

## Imágenes (3)

- [ ] **24. Formato moderno**: WebP o AVIF servido vía `next/image`.
- [ ] **25. Lazy load**: todas las imágenes bajo el fold con `loading="lazy"`.
- [ ] **26. Alt text** descriptivo en todas las imágenes de contenido (no decorativas). Imágenes decorativas: `alt=""`.

---

## Multipais (preparación, 3)

- [ ] **27. `hreflang` preparado**: declaración estructural en código, aunque en MVP sólo haya versión ES. En fase 3 se activa con URLs reales.
- [ ] **28. Sanity schema con `locale`**: campo preparado desde el inicio.
- [ ] **29. Estructura de rutas tolerante** a `/[lang]/…` cuando llegue fase 3, sin reescritura.

---

## General (1)

- [ ] **30. Verificación en el preview de Vercel**: antes del merge a `main`, Neo abre el preview y pasa manualmente por cada URL del MVP, revisando title, meta, canonical y schema desde DevTools. Capturas o checklist adjunto al PR.

---

## Herramientas recomendadas de verificación

- **Lighthouse** (DevTools o PageSpeed Insights): para Core Web Vitals.
- **Ahrefs Site Audit** o Screaming Frog (local): para canonicals, meta, 404s, broken links.
- **Google Rich Results Test**: para validar JSON-LD.
- **Search Console URL Inspection**: para verificar indexabilidad.

---

## Qué pasa si un punto no se puede cumplir en MVP

Documentarlo como `[DEUDA TÉCNICA]` en el PR + abrir issue de seguimiento + comentar a Iris antes del merge. Iris aprueba la deuda o pide fix.

Lo que no puede pasar: mergear a `main` con deuda SEO no documentada.
