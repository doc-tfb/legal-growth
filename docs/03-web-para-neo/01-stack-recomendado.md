# Stack recomendado

Pila técnica para Fase 1 MVP y expansión futura. Justificado por elección, no por moda.

---

## Framework: Next.js 15 (App Router)

**Elegido**: Next.js 15 con App Router (React Server Components).

**Por qué**:
- SSR/SSG de serie: cada ruta se sirve pre-renderizada (crítico para SEO).
- App Router con layouts anidados: simplifica `/nosotros`, `/servicios`, `/casos` como hubs con subpáginas.
- Imágenes optimizadas con `next/image` (Core Web Vitals).
- Metadata API nueva: title/description/OG/canonical declarados en el `layout.ts` o `page.ts` de cada ruta.
- Internacionalización built-in con subcarpetas `/[lang]/…` cuando llegue Fase 3.
- Soporte nativo en Vercel (deploy preview por PR, edge functions).

**Alternativas descartadas**:
- Astro: excelente para contenido estático pero menos ágil para formularios interactivos y capa de dashboard futura.
- Vite + React (sin SSR nativo): obliga a montar un prerender manual; ya hicimos esa migración en GCE y sabemos que agrega fricción. Para una web nueva, mejor empezar con SSR de serie.
- Gatsby: rezagado en adopción, build times altos.

---

## Styling: Tailwind CSS v4

**Elegido**: Tailwind CSS v4 (o v3.4 LTS si v4 no es estable al momento de construir).

**Por qué**:
- Velocidad de desarrollo alta.
- Design tokens en `@theme` directive (v4) o `tailwind.config.ts` (v3): deja la paleta y la tipografía centralizadas y consistentes.
- Mobile-first por defecto.
- Compatible con dark mode trivial.
- Sin CSS huérfano: cada clase usada se emite.

**Complementos**:
- `@tailwindcss/typography` para estilar el cuerpo de los posts del blog.
- `@tailwindcss/forms` para inputs accesibles de serie.

**Alternativas descartadas**:
- CSS Modules puro: más código, menos consistencia.
- Styled Components / Emotion: runtime overhead, incompatible con React Server Components sin wrappers.

---

## CMS: Sanity

**Elegido**: Sanity v3 con Sanity Studio embebido en el proyecto.

**Por qué**:
- Gonzalo ya conoce la herramienta (lo usa en GCE, project `01j1rgci`).
- Studio self-hosted en el mismo repo (`/studio` o similar), deploy en Vercel sin fricción.
- GROQ potente, CDN rápido, API cacheada.
- Structured content con schemas en código.
- Portable Text para el blog: contenido rico sin markdown.

**Schemas iniciales** (mínimo viable para MVP):
- `post` — artículos del blog (campos: title, slug, excerpt, body (Portable Text), publishedAt, modifiedAt, author (ref), categories (ref), mainImageUrl, seoTitle, metaDescription, canonical, faqs).
- `author` — autor (Gonzalo, Carla).
- `category` — categorías de blog.
- `case` — casos de éxito (GCE, ORJ).
- `leadMagnet` — lead magnets con archivo descargable y formulario asociado.

Opcional en MVP (se puede diferir):
- `testimonial` — testimonios con autor, cargo, texto, cita visual.
- `service` — si se quiere mover el copy de las páginas de servicio a CMS.

**Alternativas descartadas**:
- Contentful: más caro, más vendor-lock.
- Strapi / Payload: self-hosted, requiere operar un server más.
- Markdown en `/content/`: válido para equipos técnicos pero deja fuera a Carla y a Gonzalo cuando quieran editar directo.

---

## Hosting: Vercel

**Elegido**: Vercel con integración GitHub.

**Por qué**:
- Deploy preview automático en cada Pull Request.
- CDN global, edge functions si hace falta.
- Zero config con Next.js.
- Ambiente de variables por entorno (preview, production, development).
- Integración con Sanity vía webhook (rebuild automático al publicar).

**Alternativas descartadas**:
- Cloudflare Pages: válido, pero Vercel es donde ya vive GCE y Gonzalo ya opera allí.
- Netlify: segundo nivel, menos ventajas sobre Vercel para Next.js.

---

## Analítica y tracking

### Google Tag Manager (GTM)
- Container nuevo para la marca (no reutilizar el de TFB).
- Variable env: `NEXT_PUBLIC_GTM_ID`.
- Carga inline en `app/layout.tsx` con el snippet oficial.

### Google Analytics 4 (GA4)
- Property nueva.
- Configurar vía GTM, no inline.
- Eventos: `page_view` (automático), `form_submit`, `magnet_download`, `cta_click`, `scroll_depth`.

### HubSpot
- Portal de TFB sirve para arrancar (o crear uno nuevo si Gonzalo decide separar).
- Formularios embed con `@hubspot/api-client` o endpoint custom que llame a HubSpot API.
- Lead magnet: formulario de captura → crea contacto en HubSpot con tag `lead-magnet-benchmark-precios`.

### Alternativa transaccional
- Resend para emails transaccionales (confirmación lead magnet, agradecimiento consulta agendada).
- Mailchimp o ConvertKit como alternativa si HubSpot se descarta.

---

## Formularios y lead magnets

### Contacto
- Formulario simple (nombre, email, empresa, mensaje).
- Submit → HubSpot API + email a `gonzalo@thefunnelbox.com` vía Resend.
- Agenda Calendly embebida como alternativa.

### Lead magnet (benchmark precios)
- Página dedicada con formulario inline.
- Submit → HubSpot con tag + envía PDF por email con Resend.
- Página de agradecimiento `/recursos/[slug]/gracias/` con `noindex, nofollow`.

### Calendly
- Widget embebido en `/contacto/` y en la home.
- Enlace alternativo para emails.

---

## Otros

### Sentry (opcional en MVP, recomendado desde fase 2)
- Error monitoring en producción.
- Free tier suficiente al arrancar.

### Resend (transaccional)
- Para emails de confirmación y envío de lead magnet.
- Dominio verificado en SPF/DKIM.

### Package manager
- **pnpm** preferido (más rápido, menos disco).
- Alternativa: npm o yarn, según costumbre del equipo.

### Node version
- Node 20 LTS mínimo. Vercel soporta hasta 22 ya.

---

## Estructura inicial del repo de código

```
gonzalocastro-com-website/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                      ← home
│   │   ├── nosotros/
│   │   │   ├── page.tsx
│   │   │   ├── gonzalo-castro/page.tsx
│   │   │   └── carla-fresch-pons/page.tsx
│   │   ├── servicios/
│   │   │   ├── page.tsx
│   │   │   ├── marketing-juridico/page.tsx
│   │   │   ├── consultoria-estrategica/page.tsx
│   │   │   ├── formacion-para-despachos/page.tsx
│   │   │   └── speaker-conferencias/page.tsx
│   │   ├── metodologia/page.tsx
│   │   ├── casos/
│   │   │   ├── page.tsx
│   │   │   ├── gce-gestores-concursales/page.tsx
│   │   │   └── orj-orejas-abogados/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── recursos/
│   │   │   └── benchmark-precios-marketing-juridico-2026/page.tsx
│   │   └── contacto/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── lead-magnet/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── Hero.tsx
│   ├── CTA.tsx
│   ├── FounderCard.tsx
│   ├── ServiceCard.tsx
│   ├── CaseCard.tsx
│   ├── LeadMagnetForm.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── sanity.ts
│   ├── hubspot.ts
│   └── resend.ts
├── public/
│   ├── placeholders/
│   │   ├── gonzalo-hero.jpg
│   │   └── carla-hero.jpg
│   └── recursos/
│       └── benchmark-precios-marketing-juridico-2026.pdf
├── studio/
│   ├── schemas/
│   └── sanity.config.ts
├── .env.example
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## Checklist para arrancar

- [ ] Crear repo nuevo en GitHub (Gonzalo decide nombre final tras naming).
- [ ] `pnpm create next-app` con App Router + TypeScript + Tailwind.
- [ ] Añadir Sanity Studio en `/studio/` siguiendo [docs oficiales](https://www.sanity.io/docs).
- [ ] Crear project Sanity nuevo (no reutilizar el de GCE, `01j1rgci`).
- [ ] Configurar `.env.example` con todas las variables pendientes.
- [ ] Primer deploy preview en Vercel.
- [ ] Abrir primera Pull Request con scaffold + home vacía.
