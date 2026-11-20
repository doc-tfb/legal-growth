# Tracking y analítica

Stack de medición. Instrumentar desde el día 1; sin datos post-cutover no podemos medir el éxito de la Fase 1.

---

## Stack

- **Google Tag Manager (GTM)** — gestor central. Carga todo lo demás.
- **Google Analytics 4 (GA4)** — analítica principal.
- **HubSpot Tracking Code** — atribución CRM.
- **Meta Pixel** — pixel para Facebook/Instagram Ads (si se activan ads sociales).
- **Resend / email transaccional** — no es tracking per se, pero loguea entrega de emails.
- **Sentry** (opcional MVP) — monitoreo de errores en producción.

**No usar** Hotjar / Clarity / FullStory en MVP; añadir en fase 2 si hay insights que piden sesión grabada.

---

## Instalación GTM

- Container nuevo para la marca (no reutilizar el de TFB).
- Variable env: `NEXT_PUBLIC_GTM_ID`.
- Snippet GTM en `<head>` + noscript en `<body>` (según la guía oficial).
- Cargar con `next/script` estrategia `afterInteractive`.

```tsx
// app/layout.tsx (fragmento)
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){ ... })(window,document,'script','dataLayer','${GTM_ID}');`
  }}
/>
```

---

## Eventos personalizados a disparar

### Eventos globales

| Evento | Cuándo | Parámetros |
|---|---|---|
| `page_view` | Automático GA4 en cada navegación | (default) |
| `scroll_depth` | 25%, 50%, 75%, 100% de scroll | `percent: number` |
| `cta_click` | Click en cualquier CTA primario o secundario | `cta_name: string`, `cta_location: string`, `cta_destination: string` |
| `nav_click` | Click en nav principal | `nav_item: string` |

### Eventos de conversión

| Evento | Cuándo | Parámetros | Conversión GA4 |
|---|---|---|---|
| `contact_form_submit` | Form de `/contacto/` enviado | `form_name: contact`, `country: string`, `preference: 'gonzalo'/'carla'` | ✅ |
| `magnet_download_submit` | Form de lead magnet enviado | `magnet_slug: benchmark-precios-mkt-juridico-2026`, `country: string` | ✅ |
| `calendly_booked` | Booking confirmado en Calendly (webhook) | `event_type: string` | ✅ |
| `newsletter_subscribe` | Suscripción a newsletter (si existe en MVP) | `source: string` | — |

### Eventos de engagement

| Evento | Cuándo | Parámetros |
|---|---|---|
| `blog_post_read` | Usuario pasa >60s en un post + scroll > 50% | `post_slug: string`, `category: string` |
| `case_viewed` | Vista de página de caso | `case_slug: string` |
| `service_viewed` | Vista de página de servicio | `service_slug: string` |

---

## Configuración GA4

- Nueva property.
- Variable env: `NEXT_PUBLIC_GA4_ID` (formato `G-XXXXXXXXXX`).
- Marcar como conversiones: `contact_form_submit`, `magnet_download_submit`, `calendly_booked`.
- Audiencias iniciales:
  - "Visitó al menos una página de servicio" (para remarketing futuro).
  - "Descargó el lead magnet" (para email marketing).
  - "Visitó un caso" (interés alto en prueba social).

---

## Integración HubSpot

- Portal: `[COMPLETAR: Portal ID — reutilizar el de TFB inicialmente o crear nuevo]`.
- Tracking code: snippet HubSpot embebido vía GTM (no inline).
- Formularios: API call desde server-side (API route `/api/contact`) con `@hubspot/api-client`.
- Propiedades custom en contacto:
  - `preference` (gonzalo/carla).
  - `country` (es/mx/ar/otro).
  - `source_detail` (contact-form / magnet-benchmark / calendly).
  - `firstreferrer` (URL del referente de la primera visita).
- Workflow en HubSpot:
  - Lead magnet → enviar PDF + añadir a lista + notificar a Gonzalo.
  - Contact form → crear tarea para Gonzalo con deadline 24h.
  - Calendly booking → sincronizar en pipeline comercial.

---

## Meta Pixel (si se activan Meta Ads)

- Variable env: `NEXT_PUBLIC_META_PIXEL_ID`.
- Eventos:
  - `PageView` (automático).
  - `Lead` en `contact_form_submit`.
  - `Lead` en `magnet_download_submit`.
  - `Contact` cuando se usa Calendly.
- Vía GTM + Conversions API (server-side) para mejor matching y bypass de iOS 14.

---

## Dashboards recomendados

### GA4 reports custom
- Funnel: Visita → Vista de servicio → Click en CTA → Form submit.
- Origen de tráfico vs conversión por canal (organic, direct, referral, social, email, paid).
- Páginas más visitadas vs más convertidoras.

### HubSpot reports
- Leads por fuente (lead magnet vs contact form vs Calendly).
- Pipeline por país.
- Tiempo a primer contacto.

### Google Looker Studio (opcional fase 2)
- Dashboard consolidado GA4 + HubSpot + GSC.
- Informe mensual automatizado.

---

## Consent y privacidad

- Banner de cookies obligatorio (RGPD).
- GTM configurado con **consent mode v2**:
  - Default `denied` en todos los storage.
  - Actualiza a `granted` si el usuario acepta.
- Si usuario rechaza: GA4 funciona en modo anónimo (pingback agregado); HubSpot tracking desactivado; Meta Pixel desactivado.
- Opción recomendada para el banner: **CookieYes**, **Cookiebot** o un banner custom simple.

---

## Variables de entorno (resumen)

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXX  # opcional MVP
HUBSPOT_PORTAL_ID=XXXXXXXX
HUBSPOT_ACCESS_TOKEN=[secret]
RESEND_API_KEY=[secret]
CALENDLY_WEBHOOK_SECRET=[secret, cuando se integre]
SENTRY_DSN=[secret, opcional MVP]
```

---

## Checklist pre-lanzamiento

- [ ] GTM container creado y publicado en producción.
- [ ] GA4 property creada, verificada en Realtime con tráfico de test.
- [ ] HubSpot tracking code cargando en todas las rutas.
- [ ] Eventos personalizados probados manualmente (dispara el form, verifica evento en GA4 DebugView).
- [ ] Banner de cookies funcional (aceptar / rechazar / preferencias).
- [ ] Consent mode v2 implementado y probado.
- [ ] URL de política de cookies y privacidad enlazadas desde banner.
- [ ] Workflows HubSpot creados y probados.
- [ ] Email transaccional (Resend) con dominio verificado SPF/DKIM.
