# CLAUDE.md — Instrucciones para agentes IA en este repo

> Este archivo se carga automáticamente en cada sesión de Claude Code (y es el documento de referencia para cualquier otro agente, como Neo/Grok). Leerlo entero antes de escribir una sola línea de código, copy o contenido.

---

## 1. Qué es este proyecto

Repo de planificación para una **nueva marca personal** co-fundada por Gonzalo Castro y Carla Fresch Pons, orientada a consultoría de crecimiento para despachos de abogados en España, México y Argentina. El repo contiene toda la documentación estratégica, SEO, copy, branding y playbook. El código de la web vivirá en un repo separado que construya Neo (Grok) a partir de los briefs de `docs/03-web-para-neo/`.

**Fundadores:**
- **Gonzalo Castro** — director de The Funnel Box (agencia de marketing digital y consultoría de IA, España).
- **Carla Fresch Pons** — ex-abogada con más de 10 años en el Poder Judicial de Argentina.

**Hueco de mercado:** nadie cubre marketing + consultoría + formación + speaker bajo marca personal con ejecución operativa real. Eugenia Navarro cubre 3 de 4 ejes pero sin ejecución.

---

## 2. Lectura obligatoria antes de cualquier output

En este orden:

1. [`docs/01-estrategia/00-propuesta-de-valor.md`](./docs/01-estrategia/00-propuesta-de-valor.md) — qué vendemos y a quién.
2. [`docs/01-estrategia/01-fundadores.md`](./docs/01-estrategia/01-fundadores.md) — quiénes son Gonzalo y Carla, datos verificados.
3. [`docs/01-estrategia/02-mercados.md`](./docs/01-estrategia/02-mercados.md) — ES, MX, AR con sus particularidades.
4. [`docs/05-brand/01-tono-de-voz.md`](./docs/05-brand/01-tono-de-voz.md) — cómo suena la marca.

Si vas a escribir código (Neo), sumá:

5. [`docs/03-web-para-neo/00-brief-neo.md`](./docs/03-web-para-neo/00-brief-neo.md).
6. [`docs/03-web-para-neo/01-stack-recomendado.md`](./docs/03-web-para-neo/01-stack-recomendado.md).
7. Todo `docs/03-web-para-neo/` y `docs/04-copy/`.

---

## 3. Reglas no negociables

### Español neutro

Preferencia explícita de Gonzalo. Todo texto público (web, LinkedIn, emails, lead magnets):

- "¿Cómo están?" NO "¿Cómo estáis?"
- "Pueden descargar" NO "Podéis descargar"
- "Tú" como trato formal amistoso, "ustedes" en plural, "usted" en formal distante.
- Evitar "vos" rioplatense en copy público (en conversaciones internas está permitido).

### Nunca commitear secrets

- API keys, tokens, passwords, service accounts: **jamás** en el repo.
- Las variables sensibles viven en Vercel Environment Variables o en el password manager del usuario.
- Si un archivo de este repo documenta "dónde está un secret", documenta el **lugar**, nunca el **valor**.

### Datos personales de Gonzalo y Carla

- Sólo usar datos verificados en `docs/01-estrategia/01-fundadores.md` y `docs/04-copy/02-bio-gonzalo.md` / `03-bio-carla.md`.
- Si falta un dato (ejemplo: fuero específico de Carla, número exacto de casos de Gonzalo), marcar como `[COMPLETAR: descripción]` y pedir a Gonzalo o Carla que lo llenen.
- Prohibido inventar credenciales, títulos académicos, experiencias laborales o clientes.

### Clientes reales referenciables

Casos de TFB que se pueden usar como caso de éxito en esta marca (con permiso explícito de los clientes antes de publicar):

- **GCE — Gestores Concursales** (España, despacho de concurso de acreedores).
- **ORJ — Orejas Abogados** (España, Oviedo).

Otros clientes de TFB (DRM, M&C, KET, BMB, TAX, BRA, VER, ILP, SAB, PAS, ECH, BLY) **no son despachos** o están fuera del nicho — no mencionarlos como casos legales.

### Competencia

- **Eugenia Navarro / LOIS / ESADE** es la referente a desplazar. Se puede mencionar en documentación interna, **jamás** comparar directamente en copy público (se traduce como "ataque" y le da aire gratis).
- No replicar su mensaje literal ni su estructura de servicios. Diferenciarse: lo que ella NO hace (ejecución operativa) es nuestro territorio.

### Sin emojis en copy público

Salvo que Gonzalo lo pida explícitamente. En documentación interna del repo (tablas de estado, checklists) se admiten ✅ / ❌ / ⚠️ con moderación.

### Copy final

**La responsabilidad del copy final** de cada página es de **Neo** (con aprobación de Gonzalo + Carla). Los archivos en `docs/04-copy/` son borradores sugeridos escritos por Iris durante la planificación — sirven como brief y referencia, no como producción final.

---

## División de responsabilidades

- **Iris (Claude)** es owner de **SEO**: keyword research, title/meta por página, canonical, OG, Twitter cards, schema.org/JSON-LD, estructura de URLs, enlazado interno, redirects 301, sitemap.xml, robots.txt, hreflang (Fase 3).
- **Neo (Grok)** es owner de **implementación técnica**: código, arquitectura, componentes, performance, Core Web Vitals, accesibilidad técnica (contraste, aria, focus), integraciones (CMS, formularios, analítica), deploy.
- **Gonzalo + Carla** son owners de **marca y producto**: nombre, dominio, metodología, copy final, decisiones estratégicas.

Si una decisión cae en el borde (ej. "¿esta URL debería ser `/abogados/` o `/para-abogados/`?"), es SEO → la decide Iris. Si es "¿este componente debería ser Server Component o Client Component?", es implementación → la decide Neo.

---

## 4. Flujo de trabajo (gobernanza)

Obligatorio para cualquier cambio en el repo:

1. **Rama propia** desde `main` con identificador de tarea: `iris/[ID-tarea]-breve-descripcion` o `neo/[ID-tarea]-breve-descripcion`.
2. **Commit atómico** con mensaje descriptivo en español.
3. **Pull Request** hacia `main` con:
   - Alcance autorizado.
   - Resumen del diff.
   - Tests ejecutados (si aplica).
   - Limitaciones conocidas.
   - Riesgos residuales.
   - Rollback.
4. **Revisión** por otro agente o por Gonzalo.
5. **`OK para merge` explícito de Gonzalo** identificando la PR.
6. Merge por `doc-tfb` (u otro propietario).

**Prohibido**: push directo a `main`, auto-merge, saltar la revisión "porque es un cambio chico".

---

## 5. Instrucciones específicas para Neo (Grok)

Cuando Neo reciba esta tarea de construir la web:

- **Leer primero** `docs/03-web-para-neo/00-brief-neo.md`. Ese archivo manda sobre este CLAUDE.md para la parte técnica.
- Construir **sólo Fase 1 MVP** (13 páginas). Fase 2 y 3 están documentadas pero no se construyen todavía.
- El código vive en **repo separado**, no en este. Este repo sólo tiene docs.
- Ninguna página debe quedar con lorem ipsum. Si falta copy, consultar `docs/04-copy/` o marcar como `[COMPLETAR: …]`.
- SEO técnico al 100% desde el día 1: title, meta, canonical, OG, Twitter, sitemap, robots, schema.org Organization + Person + Service.
- Mobile-first. Core Web Vitals en verde antes del merge.
- Accesibilidad: contraste AA mínimo, foco visible, navegación con teclado.

---

## 6. Cuándo pedir a Gonzalo vs cuándo decidir solo

**Pedir siempre:**
- Elección final del nombre de marca y dominio.
- Antes de lanzar ads, comprar media o firmar con un proveedor.
- Antes de publicar un post que mencione a un cliente específico (incluso GCE y ORJ).
- Antes de hacer merge a `main`.

**Decidir solo (y documentar):**
- Estructura de carpetas internas del repo.
- Elección de componentes técnicos que no cambien el resultado visible.
- Micro-copy de UI (botones, etiquetas de formulario).
- Tipografía cuando hay una regla clara en `05-brand/02-paleta-tipografia.md`.

---

## Hilo de comunicación con Iris

Para dudas asíncronas durante la construcción, existe un canal dedicado entre Neo e Iris en `docs/07-dialog/`. Antes de escribir una pregunta, revisar `docs/07-dialog/01-preguntas-anticipadas.md` — ahí están ya respondidas 16 dudas que Iris anticipó.

El canal primario en vivo es **GitHub Issues del repo `doc-tfb/legal-growth`** una vez que el repo exista en GitHub (label `pregunta-para-iris`). Mientras tanto, append a `docs/07-dialog/00-hilo-abierto.md` con firma al pie (fecha + autor). Todas las decisiones que afecten al proyecto se registran también en `docs/07-dialog/02-log-decisiones.md`.

---

## 7. Cómo actualizar este archivo

Si al trabajar detectás una regla implícita que falta acá, agregala con una línea indicando fecha y razón. No reemplazar las secciones existentes sin discutirlo con Gonzalo.

---

Este archivo vive en `/CLAUDE.md` y se versiona con Git.
