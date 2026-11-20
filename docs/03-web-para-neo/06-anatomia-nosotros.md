# Anatomía · Nosotros (`/nosotros/` + `/nosotros/gonzalo-castro/` + `/nosotros/carla-fresch-pons/`)

Hub con dos subpáginas de autor. Las bios son el activo de credibilidad más fuerte de la marca.

**Copy final**: [`../04-copy/02-bio-gonzalo.md`](../04-copy/02-bio-gonzalo.md) y [`../04-copy/03-bio-carla.md`](../04-copy/03-bio-carla.md).

---

## `/nosotros/` · Hub

### 1. Hero compartido
- H1: "Un consultor de marketing y una ex-abogada del Poder Judicial".
- Subtitle: historia conjunta en 2 frases.
- Dos retratos (Gonzalo + Carla) lado a lado.

### 2. Historia breve
- Cómo se conocieron (pendiente de narrativa oficial: `[COMPLETAR: Gonzalo/Carla deciden el framing]`).
- Por qué decidieron co-fundar esta marca.
- 150–250 palabras.

### 3. Dos cards de fundadores
- Card de Gonzalo: foto + rol de una línea + CTA "Conoce a Gonzalo" → `/nosotros/gonzalo-castro/`.
- Card de Carla: foto + rol de una línea + CTA "Conoce a Carla" → `/nosotros/carla-fresch-pons/`.

### 4. Valores / principios compartidos
- 3–4 principios en lista corta:
  - "Diagnosticamos antes de proponer."
  - "Ejecutamos lo que recomendamos."
  - "No prometemos resultados específicos; vendemos capacidad y proceso."
  - "Respetamos el tiempo del cliente: menos reuniones, más entregas."

### 5. CTA final
- "Agenda una consulta de 30 min" → `/contacto/`.

---

## `/nosotros/gonzalo-castro/` · Bio Gonzalo

### 1. Hero
- Foto grande de Gonzalo (horizontal o retrato según diseño).
- H1: "Gonzalo Castro".
- Subtitle: "Consultor de crecimiento | Fundador de The Funnel Box".
- Links sociales: LinkedIn, Twitter/X si aplica.

### 2. Bio en 3 bloques
**Bloque A — Quién soy ahora** (presente):
- 150–200 palabras.
- Rol actual, qué hace hoy, con qué perfil de cliente trabaja.

**Bloque B — De dónde vengo** (pasado):
- 150–200 palabras.
- Trayectoria TFB, experiencia transversal con marketing + IA, casos relevantes.
- Mención de GCE y ORJ con contexto.

**Bloque C — A dónde vamos** (futuro):
- 100–150 palabras.
- Visión del proyecto, por qué esta marca ahora, con quién trabaja (Carla).

### 3. Casos acompañados (snippet)
- 2–3 cards cortas con casos (GCE, ORJ) + link a `/casos/`.

### 4. Áreas de expertise
- Lista en 2 columnas: Marketing digital, Google Ads, SEO, IA aplicada, Funnels, CRM, Analítica, Automatización.
- No más de 10 ítems; evitar lista exhaustiva de 30.

### 5. Donde he hablado / escrito
- Si aplica: congresos, podcasts, medios donde Gonzalo ha publicado.
- Si no hay nada aún, omitir sección.

### 6. CTA final
- "Agenda una consulta conmigo" → `/contacto/?preferencia=gonzalo` (query param para que el formulario lo registre).

---

## `/nosotros/carla-fresch-pons/` · Bio Carla

### 1. Hero
- Foto grande de Carla.
- H1: "Carla Fresch Pons".
- Subtitle: "Ex-abogada del Poder Judicial de Argentina | Consultora de crecimiento".
- Links sociales: LinkedIn.

### 2. Bio en 3 bloques

**Bloque A — Quién soy ahora**:
- 150–200 palabras.
- Rol actual en el proyecto, tipo de clientes que atiende.
- Enfoque: conoce el sector desde adentro porque fue abogada activa 10+ años.

**Bloque B — De dónde vengo**:
- 150–250 palabras.
- Trayectoria en el Poder Judicial AR: `[COMPLETAR: fuero específico, ciudad, años, cargo (secretaria letrada, prosecretaria, oficial)]`.
- Año aproximado de transición: `[COMPLETAR]`.
- Por qué el cambio: narrativa pública.
- Trabajo con Gonzalo: cómo empezó esa colaboración.

**Bloque C — Por qué ahora**:
- 100–150 palabras.
- Qué le aporta a un despacho que contrata a Carla vs a cualquier consultor.
- Mensaje clave: "entiendo cómo piensa un abogado porque fui abogada 10+ años".

### 3. Áreas de expertise
- Lista corta: Gestión de despacho, Comunicación cliente-profesional, Liderazgo de equipos legales, Transición digital para abogados, Formación a socios-directores, Comprensión de marcos regulatorios (incluir CPACF AR).

### 4. Cita destacada (pull quote)
- Una frase propia de Carla, breve, memorable. `[COMPLETAR: pedir a Carla una frase que resuma su filosofía]`.

### 5. Mi recorrido profesional (timeline)
- Línea de tiempo visual con hitos:
  - Año X: ingreso al Poder Judicial.
  - Año Y: rol / cargo específico.
  - Año Z: transición fuera del Poder Judicial.
  - Año W: colaboración con Gonzalo.
  - Año actual: co-fundadora de la marca.
- Mantener corto, 4–6 hitos.

### 6. Donde he hablado / escrito
- `[COMPLETAR: medios, charlas, publicaciones si aplican]`.

### 7. CTA final
- "Agenda una consulta conmigo" → `/contacto/?preferencia=carla` (query param).

---

## Consideraciones técnicas

### Metadata por bio
- Title de cada bio único.
- Schema.org `Person` con `name`, `jobTitle`, `description`, `url`, `sameAs` (LinkedIn), `image`, `worksFor` (Organization).
- OG image por bio (foto del fundador respectivo).

### Reutilización de componentes
- `<BioHero>`, `<BioBlock>`, `<ExpertiseList>`, `<Timeline>`, `<CTAFinal>`: componentes reutilizables para las dos bios.
- Diferencia: contenido, no estructura.

### Performance
- Foto hero WebP + lazy load del resto de imágenes.
- Fuentes del sistema o bien cacheadas.

### Placeholders a resolver
- Fotos de Carla (sesión nueva).
- Fuero / cargo específico de Carla.
- Narrativa de "cómo se conocieron Gonzalo y Carla".
- Cita destacada de Carla.
- Permisos para mencionar a Mónica (GCE) y Orejas (ORJ) en el snippet de casos.
