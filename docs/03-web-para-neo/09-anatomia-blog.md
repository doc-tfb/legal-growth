# Anatomía · Blog (`/blog/` + `/blog/[slug]/`)

En el MVP, el blog es un **shell funcional** sin posts publicados todavía. La primera tanda de posts (26 piezas en 6 meses según `docs/02-seo/05-content-plan-6-meses.md`) se publica después del launch.

Pero la plantilla, el schema de Sanity y el sistema de categorías deben estar listos desde el día 1.

---

## `/blog/` · Hub

### 1. Hero
- H1: "Blog".
- Subtitle: "Marketing jurídico, gestión de despachos, SEO, Google Ads e IA aplicada al sector legal."
- Sin CTA directo (es hub editorial).

### 2. Si hay posts
- Grid de posts más recientes (3 columnas en desktop, 1 en mobile).
- Cada card: imagen, categoría, título, fecha, autor, excerpt.
- Paginación en el pie (si más de 12 posts).

### 3. Si no hay posts (MVP primeras semanas)
- Mensaje: "Pronto · Primer artículo publicado en [fecha prevista]."
- Formulario de suscripción a newsletter (opcional MVP).
- CTA al lead magnet: "Mientras tanto, descarga el benchmark de precios 2026".

### 4. Filtro por categoría (opcional MVP, obligatorio fase 2)
- Chips con categorías: Marketing jurídico, Web, SEO, Google Ads, Gestión del despacho, IA para despachos, Casos.

---

## `/blog/[slug]/` · Plantilla de post

### 1. Hero
- Imagen destacada (ratio 16:9 o 4:3).
- Categoría (chip arriba del título).
- H1: título del post.
- Metadatos: fecha, autor (con foto chica), tiempo de lectura estimado.

### 2. TOC (table of contents) en desktop
- Columna lateral sticky con los H2 del artículo.
- Scrollspy que resalta la sección activa.
- Sólo visible en desktop; en mobile se omite o se convierte en acordeón arriba del cuerpo.

### 3. Cuerpo del post
- Renderizado desde Portable Text de Sanity.
- Tipografía legible, 65 caracteres por línea aprox.
- Soporta: párrafos, H2, H3, listas ordenadas y desordenadas, citas, código inline y bloque, imágenes con pie de foto, tablas, embeds de Twitter/YouTube opcional, callouts (nota, advertencia, consejo).

### 4. Autor box
- Al final del cuerpo: foto + nombre del autor + bio corta + links a LinkedIn.
- Link a otros posts del mismo autor.

### 5. FAQs del post (si aplican)
- Sección `FAQPage` schema con 3–5 preguntas específicas del tema.
- Útil para SEO + para el usuario.

### 6. Posts relacionados
- 3 cards con posts del mismo cluster o categoría.

### 7. Lead magnet contextual
- CTA al lead magnet más relevante según la categoría del post.
- Ejemplo: post sobre SEO → CTA al checklist SEO despachos. Post sobre precios → benchmark.

### 8. CTA final de servicios
- "¿Necesitás ayuda con esto? Hablemos" → `/contacto/`.

### 9. Compartir
- Botones share: LinkedIn (prioridad 1), Twitter/X, WhatsApp, email, copiar URL.

---

## Schema de Sanity

```typescript
// post
{
  _type: 'post',
  title: string,
  slug: { current: string },
  excerpt: string,
  body: PortableText,
  publishedAt: datetime,
  modifiedAt: datetime,
  author: reference → author,
  categories: reference[] → category,
  mainImageUrl: image,
  ogImage: image,
  seoTitle: string (fallback title),
  metaDescription: string,
  canonical: url,
  faqs: array<{ question, answer }>,
  locale: 'es-es' | 'es-mx' | 'es-ar',  // preparación fase 3
}

// author
{
  _type: 'author',
  name: string,
  slug: { current: string },
  bio: PortableText,
  imageUrl: image,
  linkedinUrl: url,
}

// category
{
  _type: 'category',
  title: string,
  slug: { current: string },
  description: string,
  pillarUrl: string,  // URL del pillar al que linkea este cluster
}
```

---

## Categorías iniciales (6 pillars)

1. Marketing jurídico
2. Web para despachos
3. SEO para abogados
4. Google Ads jurídico
5. Gestión del despacho
6. IA para despachos

Cada categoría tiene su propia URL `/blog/[categoria]/` (fase 2) que listará los posts de ese cluster. En MVP, las categorías existen en Sanity pero la ruta `/blog/[categoria]/` puede no estar implementada todavía — si no se implementa, filtrar desde `/blog/` con query param.

---

## Consideraciones técnicas

### Metadata por post
- Title: usa `seoTitle` de Sanity; fallback a `title`.
- Meta description: `metaDescription`.
- Canonical: `canonical` o derivado de slug.
- OG: `ogImage` o fallback a `mainImageUrl`.
- Schema.org: `BlogPosting` con `author`, `datePublished`, `dateModified`, `image`, `headline`, `description`, `publisher` (Organization).
- Si tiene FAQs: también `FAQPage` schema aparte.

### Performance
- Imagen hero con `fetchpriority="high"`.
- Fuentes autohospedadas.
- Portable Text renderizado en RSC (sin JS extra cliente para contenido estático).
- TOC generado en build time, sin hidratación pesada.

### URL y canonicals
- Preservar slugs de Sanity 1:1.
- Canonical obligatorio en cada post.
- Si se actualiza fecha de publicación o se cambia slug, redirigir con 301.

### Internal linking
- Cada post linkea de vuelta a su pillar (si la ruta existe).
- Post → 2–3 otros posts relacionados.
- Post → al menos 1 página de servicio.
- Post → lead magnet contextual.

### Webhook rebuild
- Configurar webhook Sanity → Vercel Deploy Hook para que publicar/editar un post en Sanity dispare rebuild automático.
- Documentado en `docs/DEPLOY-WORKFLOW.md` (que Neo crea en el repo de código, tomando como referencia el del repo GCE).

---

## Qué no va en el blog

- Posts patrocinados o guest posts pagados.
- Keyword stuffing.
- Contenido genérico de marketing sin aplicación al sector legal.
- Posts sobre temas legales técnicos (no vendemos derecho, no damos opinión jurídica).
- Clickbait.
