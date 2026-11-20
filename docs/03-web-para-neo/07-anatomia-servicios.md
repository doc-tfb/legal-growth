# Anatomía · Servicios (`/servicios/` + 4 subpáginas)

Hub con cuatro páginas pillar. Son las primeras páginas que van a rankear por SEO y las que más conversión directa deberían generar.

**Copy final**:
- [`../04-copy/04-marketing-juridico.md`](../04-copy/04-marketing-juridico.md).
- [`../04-copy/05-consultoria-estrategica.md`](../04-copy/05-consultoria-estrategica.md).
- [`../04-copy/06-formacion.md`](../04-copy/06-formacion.md).
- [`../04-copy/07-speaker.md`](../04-copy/07-speaker.md).

---

## `/servicios/` · Hub

### 1. Hero corto
- H1: "Servicios".
- Subtitle: "Marketing jurídico, consultoría estratégica, formación para despachos y speaker en congresos legaltech. Cuatro servicios bajo una misma marca."
- Sin CTA — es hub, no es landing de conversión.

### 2. Grid de 4 servicios
- Mismas 4 cards que la home pero más grandes y con más texto.
- Cada card: icono / ilustración, H2, 2–3 bullets de lo que incluye, CTA "Ver detalle" → página del servicio.

### 3. Para quién trabajamos
- Breve sección (3–4 frases) sobre el perfil de cliente ideal: despacho mediano (5–30 abogados), socio-director decisor, mercado hispano.

### 4. Casos relacionados
- 2 cards de casos (GCE, ORJ) → `/casos/[slug]/`.

### 5. CTA final
- "Agenda una consulta de 30 min" → `/contacto/`.

---

## `/servicios/marketing-juridico/` · Pillar 1

**Keywords**: `marketing jurídico` (70/mes, KD 1), `marketing para abogados` (200/mes, KD 1), `marketing para despachos` (150/mes, KD 4).

### 1. Hero
- H1: "Marketing jurídico para despachos medianos".
- Subtitle: beneficio tangible + diferenciación.
- CTA principal: "Agenda consulta" → `/contacto/`.

### 2. Introducción (above the fold extendido)
- 3 párrafos sobre qué es marketing jurídico bien hecho y qué no es.
- Listas: "Lo que incluye" vs "Lo que no incluye".

### 3. Sub-servicios cubiertos (Fase 1 no desdobla, pero menciona)
- SEO para abogados.
- Google Ads jurídico.
- Web para despachos.
- Email marketing.
- LinkedIn para profesionales legales.
- Contenido editorial.

(En fase 2 cada uno tendrá su subpágina. Ahora son bullets con descripción corta.)

### 4. Cómo trabajamos
- Breve descripción del proceso (diagnóstico → plan → ejecución → medición).
- Link a `/metodologia/` para detalle completo.

### 5. Caso de éxito
- Card del caso GCE (es el más alineado con este pillar) → `/casos/gce-gestores-concursales/`.

### 6. FAQ (schema.org `FAQPage`)
- 5–7 preguntas frecuentes:
  - "¿Cuánto cuesta el marketing para un despacho en España?" → CTA al benchmark.
  - "¿Cuánto tarda en traer resultados el SEO para abogados?" → expectativa 4–6 meses.
  - "¿Qué canales usan para un despacho mediano?" → mix según cliente.
  - "¿Trabajan con despachos fuera de Madrid o Barcelona?" → sí, caso ORJ.
  - Resto a definir con Gonzalo.

### 7. Lead magnet
- Benchmark precios marketing jurídico 2026.

### 8. CTA final
- "Agenda consulta de 30 min".

---

## `/servicios/consultoria-estrategica/` · Pillar 2

**Keywords**: `consultoría despachos abogados` (long tail), `crecimiento despacho abogados`, `gestión despacho abogados` (hueco Navarro).

### Estructura similar al pillar 1
- Hero con H1 "Consultoría estratégica para despachos".
- Diferencia frente al marketing: aquí vendemos diagnóstico y acompañamiento, no ejecución.
- Sub-áreas:
  - Diagnóstico de crecimiento.
  - Gestión del despacho (operaciones, rentabilidad, equipo).
  - Estrategia comercial.
- Proceso más orientado a sesiones y entregables (vs ejecución mensual).
- Caso que encaja: ORJ (SEO local + expansión con poca estructura).
- FAQ: diferencias entre consultoría y agencia, duración típica del engagement, qué entregables se dan.
- CTA: "Solicita diagnóstico inicial gratuito".

---

## `/servicios/formacion-para-despachos/` · Pillar 3

**Keywords**: `cursos para abogados` (30/mes), `formación para abogados`, `formación in-company despacho`.

### Estructura
- Hero con H1 "Formación práctica para despachos".
- Formatos:
  - **In-company**: formación cerrada para un despacho específico (socios + equipo).
  - **Online abierto**: curso digital, cohortes pequeñas, 4–8 semanas.
  - **Diploma con partner académico** (fase 2, mencionar como "próximamente" si no está firmado): ESADE Law School (ES), Anáhuac Derecho (MX), ESEADE (AR).
- Qué se aprende:
  - Marketing jurídico aplicado.
  - Gestión del despacho y pricing.
  - Comunicación del profesional.
  - IA aplicada al despacho (preparación para MX).
- Casos / testimonios de formaciones previas (si aplica, si no omitir).
- FAQ: duración, modalidad, precio, cohortes.
- CTA: "Reserva tu plaza" o "Solicita información".

---

## `/servicios/speaker-conferencias/` · Pillar 4

**Keywords**: brand + topical (vol bajo o cero en SEO; esta página se encuentra por LinkedIn / referido / búsqueda por nombre).

### Estructura
- Hero con H1 "Speaker · Ponencias en marketing jurídico e IA".
- Temas sobre los que hablamos:
  - Marketing para despachos: cómo construir un sistema de captación.
  - IA para despachos: qué hace realmente, qué no, qué riesgos.
  - Gestión del despacho: operaciones, rentabilidad, equipo.
  - Transición del abogado: de la práctica a la gestión.
- Formatos:
  - Keynote (45–60 min).
  - Workshop (medio día).
  - Mesa redonda / panel.
- Dónde hemos hablado: congresos, universidades, programas académicos (`[COMPLETAR: lista real]`).
- Materiales: foto profesional para póster, bio corta, bio larga, 2–3 títulos de referencia por conferencia.
- Fee indicativo: no publicar públicamente (solicitar).
- CTA: "Solicita a Gonzalo" / "Solicita a Carla" (según quién habla sobre qué tema).

---

## Consideraciones transversales

### Metadata y SEO
- Title único por pillar con keyword principal al inicio.
- Meta description 150–160 caracteres.
- Schema.org `Service` por cada pillar: `name`, `description`, `provider` (Organization), `areaServed` (list de países), `serviceType`, `offers` (sin precio público).

### Internal linking
- Cada pillar linkea:
  - De vuelta a `/servicios/`.
  - A los otros 3 pillars (menos énfasis).
  - A metodología.
  - A 1–2 casos relevantes.
  - Al lead magnet.
  - A contacto (en el CTA final).

### Componentes reutilizables
- `<ServicePillarHero>`, `<ServicePillarContent>`, `<SubServicesList>`, `<ServiceProcess>`, `<ServiceCaseCard>`, `<ServiceFAQ>`, `<ServiceCTA>`.

### Performance
- Cada pillar debe cargar < 2 s LCP.
- Imágenes WebP optimizadas.
- FAQ con JavaScript mínimo (acordeón accesible, no librerías pesadas).
