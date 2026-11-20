# Anatomía · Lead magnet (`/recursos/benchmark-precios-marketing-juridico-2026/`)

Único lead magnet del MVP. Página dedicada + formulario de captura + descarga. En fase 2 habrá 2–3 más (checklist SEO despachos, plantilla plan marketing anual, calculadora ROI).

---

## Estructura

### 1. Hero
- H1: "Benchmark precios marketing jurídico 2026".
- Subtitle: "Rangos reales de presupuesto de marketing para despachos medianos en España. Descarga gratuita."
- Mockup del PDF (portada 3D o flat).
- CTA principal: botón "Descargar gratis" que hace scroll al formulario.

### 2. Qué incluye el benchmark
- Lista con 5–7 ítems de lo que contiene el PDF:
  - Rangos de precios por servicio (web, SEO retainer, Ads retainer, consultoría hora, formación in-company).
  - Benchmarks por tamaño de despacho (5, 10, 20, 30 abogados).
  - Comparativa agencia vs in-house vs freelance.
  - Preguntas que un despacho debe hacer antes de contratar.
  - Casos tipo (3 perfiles de despacho).

### 3. Vista previa
- 2–3 páginas del PDF renderizadas como imagen (blurred o con marca de agua "preview").
- O gráfico extraído del PDF (ej. gráfico de rangos de precios).

### 4. Formulario de captura
- Campos:
  - Nombre (obligatorio).
  - Email (obligatorio, validación).
  - Despacho / empresa (obligatorio).
  - Rol (opcional).
  - País (select, default: España).
  - Checkbox RGPD obligatorio.
- Submit: "Descargar ahora".
- Al enviar:
  - Crea contacto HubSpot con tag `lead-magnet-benchmark-precios`.
  - Envía email transaccional vía Resend con link al PDF.
  - Redirige a `/recursos/benchmark-precios-marketing-juridico-2026/gracias/`.
  - Dispara eventos GTM `magnet_download` + `lead`.

### 5. Autor y credibilidad
- Mini bio de Gonzalo y Carla al pie: foto + 1 línea.
- "Creadores de este benchmark. Consultores especializados en despachos de abogados."

### 6. Testimonios o prueba social (opcional)
- Si hay testimonios de alguien que ya descargó: 1–2 citas cortas.
- Si no, omitir.

### 7. CTA secundario a servicios
- "¿Quieres aplicar el benchmark a tu despacho? Agenda consulta" → `/contacto/`.

### 8. Preguntas frecuentes
- "¿El PDF es realmente gratis?" → Sí.
- "¿Cómo se construyen los datos?" → Transparencia sobre fuente.
- "¿Se actualiza?" → Sí, anualmente.
- "¿Cubre México y Argentina?" → Versión 2026 es ES; MX y AR en 2027.

---

## `/recursos/benchmark-precios-marketing-juridico-2026/gracias/` (post-descarga)

- `noindex, nofollow`.
- H1: "Benchmark enviado a tu email".
- Mensaje: "Revisa tu bandeja (y la de spam si no llega en 5 minutos)."
- Botón descarga directa alternativa: "Descargar ahora" → PDF directo.
- CTAs secundarios:
  - "Agenda una consulta para aplicarlo a tu despacho" → `/contacto/`.
  - "Léenos en el blog" → `/blog/`.
- Evento GTM: `magnet_download` confirmado.

---

## Consideraciones técnicas

### El PDF
- Diseño limpio, profesional, 15–25 páginas.
- Diseño alineado con la marca (paleta, tipografía del manual de `docs/05-brand/02-paleta-tipografia.md`).
- Datos reales (no inventados). Fuentes documentadas al final.
- Versión 1 (MVP): `[COMPLETAR: PDF producido por diseñador externo o in-house]`.
- Asset path: `/public/recursos/benchmark-precios-marketing-juridico-2026.pdf`.

### Metadata de la página
- Title: "Benchmark precios marketing jurídico 2026 · Descarga gratuita".
- Meta description: "Rangos reales de presupuesto de marketing para despachos medianos en España. 20 páginas en PDF. Descarga gratuita."
- OG image: portada del PDF o composición con mockup.
- Schema.org `Article` + `Offer` (price: 0).

### Performance
- Mockup del PDF como WebP optimizado.
- Preview como imagen, no como iframe del PDF (demasiado pesado).
- Formulario renderizado server-side con hidratación mínima.

### Flujo técnico del submit

1. Cliente envía datos a `POST /api/lead-magnet`.
2. API route valida con Zod.
3. API route crea contacto HubSpot con tag específico.
4. API route envía email transaccional con link al PDF usando Resend.
5. API route responde 200.
6. Cliente redirige a página de gracias.
7. En la página de gracias se dispara `magnet_download` en GTM.

### Variables de entorno adicionales
```
HUBSPOT_LEAD_MAGNET_TAG=benchmark-precios-mkt-juridico-2026
LEAD_MAGNET_PDF_URL=/recursos/benchmark-precios-marketing-juridico-2026.pdf
```

### Internal linking
- Lead magnet linkea a:
  - Pillar `/servicios/marketing-juridico/` (es el pillar más relacionado).
  - `/contacto/`.
  - `/blog/` (posts sobre precios y marketing jurídico).
  - `/nosotros/` para contextualizar quiénes son los autores.
