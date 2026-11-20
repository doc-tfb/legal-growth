# Anatomía · Casos (`/casos/` + 2 subpáginas)

Hub de prueba social cualitativa y cuantitativa. En el MVP sólo hay 2 casos activos (GCE y ORJ). En fase 2+ se añaden más.

**Nota crítica**: ambos casos requieren autorización expresa de los clientes (Mónica Usón / Leticia Montalvo para GCE; Orejas para ORJ) antes de publicar. Hasta entonces, mantener la página en `noindex`.

---

## `/casos/` · Hub

### 1. Hero
- H1: "Despachos que hemos acompañado".
- Subtitle: "Dos casos reales de despachos medianos en España. Más en construcción."
- Sin CTA directo — es hub.

### 2. Grid de casos
- Card GCE: logo + titular ("Migración integral y SEO técnico") + 1 métrica destacada + CTA "Ver caso completo".
- Card ORJ: logo + titular ("SEO local y expansión provincial") + 1 métrica destacada + CTA "Ver caso completo".
- Si en fase 2 hay más casos, se añaden.

### 3. "Qué hacemos con cada despacho que acompañamos"
- Breve resumen del proceso con enlace a `/metodologia/`.

### 4. CTA final
- "¿Queremos acompañar a tu despacho?" → `/contacto/`.

---

## `/casos/gce-gestores-concursales/` · Caso GCE

### 1. Hero
- H1: "Gestores Concursales · Migración integral y SEO técnico".
- Subtitle: "Un despacho de concurso de acreedores en España. Migración WordPress → stack nuevo, SEO técnico post-cutover, atribución de leads a HubSpot EU."
- Logo del cliente + foto del proyecto o captura de dashboard (sin exponer datos sensibles).

### 2. Ficha del cliente
- Tabla con: Cliente, Sector, Tamaño, Mercado, Servicios TFB involucrados, Fecha de inicio.
- Datos reales (confirmar con Mónica/Leticia qué se puede publicar).

### 3. El reto
- 2–3 párrafos: qué problema tenía el despacho antes de empezar a trabajar.
- Mencionar: web WordPress antigua, falta de datos de atribución, posicionamiento SEO tradicional, canónicas rotas, etc.

### 4. Qué hicimos
- Sección estructurada con sub-secciones:
  - **Migración técnica**: resumen del trabajo de GCE_New_Website (WordPress → CRA/Vite + React + Sanity, SSR, 404 real, redirects 301).
  - **SEO técnico**: title/meta/canonical/JSON-LD por URL, sitemap, robots, Core Web Vitals.
  - **Atribución**: integración con HubSpot EU, Lead Vault, GTM, Meta Pixel, GA4.
  - **Tracking de conversión**: GraciasPage, lead_conversion, atribución primer toque.

### 5. Resultados
- `[COMPLETAR: cifras reales post-GSC consolidado (3–6 meses post-cutover)]`.
- Mientras no haya datos: marcar como "Caso en construcción · métricas finales disponibles a partir de [fecha]".
- No inventar cifras.

### 6. Testimonio del cliente
- `[COMPLETAR: pedir cita a Mónica Usón o Leticia Montalvo]`.
- Formato: foto + nombre + cargo + cita breve (2–4 frases).

### 7. Lecciones aprendidas
- 3–5 insights para otros despachos que lean el caso.
- Ejemplos: "la migración no es un proyecto técnico, es un proyecto de SEO", "el 404 real importa más de lo que parece", "la atribución desde el día 1 vale oro".

### 8. CTA final
- "¿Estás ante un reto parecido? Hablemos" → `/contacto/`.

---

## `/casos/orj-orejas-abogados/` · Caso ORJ

### 1. Hero
- H1: "Orejas Abogados · SEO local y expansión provincial".
- Subtitle: "Un despacho mediano en Oviedo. Reclamación de tarjetas revolving a nivel nacional + Ley de Segunda Oportunidad en Asturias."
- Logo del cliente.

### 2. Ficha del cliente
- Tabla con datos (confirmar con Orejas qué se puede publicar).

### 3. El reto
- Despacho fuera del eje Madrid/Barcelona.
- Dos servicios con targets distintos (nacional + regional).
- Necesidad de posicionamiento sin un presupuesto de agencia grande.

### 4. Qué hicimos
- **SEO local Oviedo + Asturias**: GMB, listados locales, páginas de servicio por ciudad.
- **SEO nacional para revolving**: pillar + clusters, backlinks, blog.
- **Atribución**: tracking de lead por servicio, cross-check GHL.
- **Content strategy**: artículos educativos para cada tipo de cliente (persona vs empresa con deudas).

### 5. Resultados
- `[COMPLETAR: cifras GSC reales]`.
- Lo que sí podemos decir mientras tanto: el despacho posiciona top X en keywords de provincia asturiana y en keyword nacional específica.

### 6. Testimonio del cliente
- `[COMPLETAR: pedir cita a Orejas]`.

### 7. Lecciones aprendidas
- 3–5 insights específicos de este caso: SEO local funciona si el despacho tiene presencia física real, páginas por ciudad valen la pena para un despacho con área geográfica concreta, etc.

### 8. CTA final
- "¿Tu despacho opera en provincia o fuera de los grandes centros? Hablemos" → `/contacto/`.

---

## Consideraciones técnicas

### Metadata
- Title único por caso con nombre del cliente al inicio.
- Meta description con cifra destacada + años de trabajo.
- Schema.org `Article` + `Organization` (cliente) + referencia a nosotros como `author`.
- `noindex` hasta que el cliente autorice publicación pública.

### Componentes
- `<CaseHero>`, `<CaseFactSheet>`, `<CaseChallenge>`, `<CaseWhatWeDid>`, `<CaseResults>`, `<CaseTestimonial>`, `<CaseLessons>`, `<CaseCTA>`.

### Autorización previa
- Antes de publicar cualquiera de los 2 casos:
  1. Email formal pidiendo autorización al cliente con draft del caso adjunto.
  2. Guardar autorización por escrito (email o documento firmado).
  3. Cualquier dato numérico que se publique debe estar validado por el cliente.

### Internal linking
- Caso → servicio relacionado + bio del autor principal + otros casos + contacto.
