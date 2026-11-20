# Sitemap Fase 1 · MVP

13 páginas públicas + 1 lead magnet. Español neutro, variante España.

**Todas las URLs terminan con trailing slash** (convención consistente, mejor para canonicals y para redirecciones Vercel).

---

## Tabla completa de páginas

| # | Path | Title SEO | Meta description | KW primaria (vol/KD) | Intent | Tipo |
|---|---|---|---|---|---|---|
| 1 | `/` | [Nombre marca] · Consultoría de crecimiento para despachos de abogados | Ejecutamos el marketing, diagnosticamos el negocio y formamos al equipo. Para despachos medianos en España, México y Argentina. | `marketing para abogados` (200/mes, KD 1) | brand + com | Home |
| 2 | `/nosotros/` | Nosotros · [Nombre marca] | Gonzalo Castro y Carla Fresch Pons. Un consultor de marketing y una ex-abogada del Poder Judicial de Argentina. | brand | brand | Hub autor |
| 3 | `/nosotros/gonzalo-castro/` | Gonzalo Castro · Consultor de crecimiento para despachos | Director de The Funnel Box y consultor especializado en marketing jurídico e IA aplicada. | `gonzalo castro consultor` (brand) | brand | Bio |
| 4 | `/nosotros/carla-fresch-pons/` | Carla Fresch Pons · Ex-abogada del Poder Judicial AR, consultora | Más de 10 años en el Poder Judicial de Argentina. Hoy ayuda a estudios y despachos a crecer desde adentro. | `carla fresch pons` (brand) | brand | Bio |
| 5 | `/servicios/` | Servicios · Marketing, consultoría, formación y speaker | Marketing jurídico, consultoría estratégica, formación para despachos y speaker en congresos legaltech. | `servicios marketing para abogados` | com | Hub servicio |
| 6 | `/servicios/marketing-juridico/` | Marketing jurídico para despachos · [Nombre marca] | Marketing digital para despachos de abogados: SEO, Google Ads, web, LinkedIn, email. Ejecución real con casos. | `marketing jurídico` (70/mes, KD 1) · `marketing para abogados` (200/mes, KD 1) | com + trans | Pillar |
| 7 | `/servicios/consultoria-estrategica/` | Consultoría estratégica para despachos de abogados | Diagnóstico de crecimiento, gestión del despacho y estrategia comercial para socios-directores. | `consultoría despachos abogados` | trans | Pillar |
| 8 | `/servicios/formacion-para-despachos/` | Formación para despachos · In-company y online | Formación práctica para socios-directores. En tu despacho o en programa abierto. | `formación para abogados` · `cursos para abogados` (30/mes) | com | Pillar |
| 9 | `/servicios/speaker-conferencias/` | Speaker · Ponencias en marketing jurídico e IA | Ponencias y keynotes en congresos legaltech, programas académicos y eventos corporativos. | brand + topical | brand | Servicio |
| 10 | `/metodologia/` | Nuestra metodología de crecimiento para despachos | [Nombre framework]: el proceso en 4 fases que usamos con cada despacho que acompañamos. | brand + topical | brand | Brand page |
| 11 | `/casos/` | Casos · Despachos que hemos acompañado | Casos reales de despachos de concurso de acreedores, SEO local de provincia y transformación digital. | brand + proof | proof | Hub |
| 11.1 | `/casos/gce-gestores-concursales/` | Gestores Concursales · Migración y SEO técnico | Caso de éxito: migración integral del WordPress original + SEO técnico + atribución de leads. | caso real | proof | Caso |
| 11.2 | `/casos/orj-orejas-abogados/` | Orejas Abogados · SEO local y expansión provincial | Caso de éxito: despacho mediano fuera de Madrid que posiciona en nacional y provincia. | caso real | proof | Caso |
| 12 | `/blog/` | Blog · Marketing jurídico, gestión de despachos y legaltech | Artículos sobre marketing jurídico, gestión del despacho, SEO, Google Ads e IA aplicada al sector legal. | brand + topical | brand | Hub blog |
| 13 | `/contacto/` | Contacto · Agenda una consulta de 30 minutos | Agenda una consulta sin compromiso. Diagnóstico inicial gratuito. | brand | trans | Conversión |
| LM | `/recursos/benchmark-precios-marketing-juridico-2026/` | Benchmark precios marketing jurídico 2026 (ES) | Rangos reales de presupuesto de marketing para despachos en España. Descarga gratuita. | `cuanto cuesta marketing abogados` (long tail) | trans | Lead magnet |

---

## Páginas de sistema (sin indexar)

| Path | Función | `noindex` |
|---|---|---|
| `/contacto/gracias/` | Confirmación tras envío de formulario | ✅ |
| `/recursos/benchmark-precios-marketing-juridico-2026/gracias/` | Confirmación tras descarga del lead magnet | ✅ |
| `/404` | Página 404 personalizada | ✅ |
| `/politicas/aviso-legal/` | Legales obligatorios | ❌ (indexable, baja prioridad) |
| `/politicas/politica-de-privacidad/` | RGPD | ❌ |
| `/politicas/politica-de-cookies/` | Cookies | ❌ |

Las 3 legales son obligatorias por RGPD pero no se consideran páginas MVP; se incluyen en el entregable MVP pero no entran en el conteo de las 13.

---

## Redirects previstos

Ninguno en MVP (dominio nuevo, sin URLs históricas). Preparar la infraestructura de redirects (Vercel `vercel.json` o `next.config.ts`) para fase 2+ cuando se añadan localizaciones.

---

## Internal linking obligatorio

- Home → 4 servicios + 2 casos + lead magnet + contacto.
- Cada página de servicio → home + otros 3 servicios + casos relacionados + lead magnet + contacto.
- Bios Gonzalo y Carla → metodología + casos (donde aparezcan) + contacto.
- Casos → servicio relacionado + bio del autor + contacto.
- Blog (shell) → home + servicios.
- Lead magnet → contacto + servicio marketing jurídico (el pillar que más se relaciona).

---

## Checklist de entrega MVP

- [ ] Las 13 páginas en producción con copy final (no placeholder).
- [ ] Las 3 legales (aviso, privacidad, cookies) publicadas.
- [ ] Sitemap XML generado automáticamente (`app/sitemap.ts`).
- [ ] `robots.txt` servido (`app/robots.ts`).
- [ ] 404 personalizado.
- [ ] Core Web Vitals verde en las 13 páginas (mobile + desktop).
- [ ] Formularios: contacto funcional (envía a HubSpot + email) + lead magnet (captura + descarga PDF).
- [ ] GTM + GA4 cargando en todas las rutas.
- [ ] OG images únicas por página (o placeholder marcado para revisar).
- [ ] Verificación de Search Console configurada.
- [ ] Deploy preview revisado y aprobado por Gonzalo.
