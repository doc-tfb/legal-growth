# Sitemap Fase 2 · Expansión (NO construir en MVP)

Documento de referencia para cuando se ejecute fase 2 (meses 3–6 post-lanzamiento). **Neo no debe construir esto en el MVP.** La arquitectura debe dejar hueco para crecer, no implementarlo todavía.

---

## Qué se añade en Fase 2

### Servicios desdoblados en subservicios

**Marketing jurídico** se desdobla en 5 subservicios:

- `/servicios/marketing-juridico/web-para-despachos/` — pillar con score top (keyword `diseño web para abogados`, 150/mes, KD 7).
- `/servicios/marketing-juridico/seo-para-abogados/` — pillar KD 26.
- `/servicios/marketing-juridico/google-ads-para-abogados/` — pillar comercial.
- `/servicios/marketing-juridico/email-marketing-para-abogados/` — soporte (150/mes).
- `/servicios/marketing-juridico/linkedin-para-abogados/` — soporte.

**Consultoría estratégica** se desdobla en 3:

- `/servicios/consultoria-estrategica/diagnostico-crecimiento/`.
- `/servicios/consultoria-estrategica/gestion-de-despacho/` — pillar, hueco Navarro.
- `/servicios/consultoria-estrategica/estrategia-comercial/`.

**Formación** se desdobla en 3:

- `/servicios/formacion-para-despachos/curso-crecimiento-despacho/`.
- `/servicios/formacion-para-despachos/formacion-in-company/`.
- `/servicios/formacion-para-despachos/diploma-con-partner-academico/` — con ESADE, Anáhuac o ESEADE según mercado.

### Blog con clusters completos

- `/blog/marketing-juridico/` — cluster pillar 1, con 6 artículos de soporte.
- `/blog/web-para-despachos/` — cluster pillar 2, con 5 artículos.
- `/blog/seo-para-abogados/` — cluster pillar 3, con 5 artículos.
- `/blog/google-ads-juridico/` — cluster pillar 4, con 5 artículos.
- `/blog/gestion-del-despacho/` — cluster pillar 5, con 5 artículos.
- `/blog/ia-para-despachos/` — cluster pillar 6 (preparación MX), con 6 artículos.

Cada artículo bajo su cluster.

### Recursos (biblioteca de lead magnets)

- `/recursos/benchmark-precios-marketing-juridico-2026/` (ya en MVP).
- `/recursos/checklist-seo-despachos/` — segundo lead magnet (mes 4).
- `/recursos/plantilla-plan-marketing-anual/` — tercer lead magnet (mes 7).
- `/recursos/calculadora-roi-marketing/` — opcional, herramienta interactiva.

### Casos nuevos

- `/casos/[caso-piloto-mx]/` cuando haya cliente mexicano piloto (mes 15+).
- `/casos/[caso-provincia-es]/` si entra un tercer despacho español.

---

## Conteo estimado Fase 2

- MVP base: 13 páginas + 1 lead magnet.
- + 5 subservicios marketing.
- + 3 subservicios consultoría.
- + 3 subservicios formación.
- + 6 clusters blog con ~5 artículos promedio = ~30 artículos.
- + 3 lead magnets adicionales.
- + 1 caso nuevo.

**Total Fase 2: ~70 URLs** (14 MVP + 11 subservicios + 30 blog articles + 4 recursos + 1 caso + misceláneos).

---

## Prerrequisitos antes de ejecutar Fase 2

- Haber superado el mes 6 con break-even (3–4 retainers activos).
- Haber publicado los 26 primeros contenidos del content plan (`docs/02-seo/05-content-plan-6-meses.md`).
- Casos de GCE y ORJ con datos post-cutover reales (GSC data consolidada).
- Partner académico español firmado para el diploma (ESADE Law School o IE Law School).

---

## Internal linking expandido

Cuando se ejecute fase 2, el internal linking se densifica:
- Cada pillar linkea a 5–6 artículos de su cluster.
- Cada artículo linkea de vuelta al pillar + 2–3 artículos del mismo cluster + 1 lead magnet.
- Los subservicios linkean al pillar padre + a 1–2 casos relevantes.

Objetivo: cada página debe tener al menos 2 links internos entrantes y 3 salientes a páginas relevantes del propio sitio.

---

## Arquitectura técnica para que fase 2 no requiera reescritura

Cosas a dejar previstas en el MVP para que fase 2 no implique refactor:

- Rutas `/servicios/[slug]/[subslug]/` deben funcionar de inicio. En MVP sólo hay un nivel, pero el `[slug]` dinámico debe tolerar subslug.
- Blog con rutas `/blog/[cluster]/[post-slug]/` para que los clusters tengan hub propio.
- Schema Sanity con campo `category` que permita agrupar artículos por cluster.
- Componentes genéricos `<ServicePage>`, `<BlogArticle>`, `<CasePage>`, `<LeadMagnetPage>` que se puedan reutilizar.

---

## Fases posteriores

Tras fase 2 viene fase 3 (multipais), documentada en [`04-sitemap-fase3-multipais.md`](./04-sitemap-fase3-multipais.md).

Entre fase 2 y fase 3 puede haber una fase 2.5 opcional: ampliación de recursos (más lead magnets, calculadoras, mini-cursos gratuitos) y primera versión de la plataforma de formación online (si se decide monetizar formación como producto SaaS).
