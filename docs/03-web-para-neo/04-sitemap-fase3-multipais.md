# Sitemap Fase 3 · Multi-país (NO construir en MVP)

Documento de referencia para cuando se ejecute fase 3 (mes 13+ post-lanzamiento, tras haber consolidado España). **Neo no debe construir esto en el MVP.** La arquitectura i18n sí se deja preparada en código; el contenido localizado no se publica.

---

## Estructura propuesta

Subcarpetas `/es/`, `/mx/`, `/ar/` sobre el mismo dominio (no subdominios — perderían autoridad).

### `/es/` — España (default canónico)

El idioma por defecto. La URL raíz `/` sirve el contenido ES sin exponer la subcarpeta al usuario. Cuando llega fase 3, `/` redirige o reescribe transparentemente a `/es/` (depende del patrón que elija Neo; preferible: la URL raíz sigue siendo `/` y `/es/` es un alias para `hreflang`).

### `/mx/` — México (pivote a IA)

- `/mx/` — home mexicana con eje IA al frente.
- `/mx/ia-para-despachos/` — **pillar principal MX**. Keyword `ia para abogados` 1.300/mes KD 1,2.
- `/mx/marketing-juridico/` — pillar secundario, adaptado con terminología mexicana (despacho/bufete).
- `/mx/consultoria/` — consultoría con contexto regulatorio mexicano (CNBV, SAT).
- `/mx/formacion/` — con mención del partner académico (Anáhuac Derecho, ITAM, Tec de Monterrey).
- `/mx/publicidad-para-despachos-de-abogados/` — landing comercial del outlier `abogados publicidad` CPC USD 13.
- `/mx/blog/` — cluster IA mexicano.
- `/mx/casos/[caso-piloto-mx]/` — primer caso mexicano.
- `/mx/contacto/` — con hora mexicana y Calendly configurado por zona horaria.

### `/ar/` — Argentina (Carla al frente)

- `/ar/` — home argentina con Carla como cara principal.
- `/ar/marketing-estudio-juridico/` — con terminología "estudio jurídico" (NUNCA "despacho").
- `/ar/consultoria/` — consultoría con contexto regulatorio argentino (CPACF).
- `/ar/legaltech/` — pillar del cluster `legaltech` (200/mes AR).
- `/ar/blog/` — cluster localizado.
- `/ar/casos/[caso-ar]/` — primer caso argentino vía network Carla.
- `/ar/contacto/` — con hora argentina.

---

## hreflang

Cada página con equivalente en otro país debe declarar `hreflang`:

```html
<link rel="alternate" hreflang="es-es" href="https://[dominio].com/servicios/marketing-juridico/" />
<link rel="alternate" hreflang="es-mx" href="https://[dominio].com/mx/marketing-juridico/" />
<link rel="alternate" hreflang="es-ar" href="https://[dominio].com/ar/marketing-estudio-juridico/" />
<link rel="alternate" hreflang="x-default" href="https://[dominio].com/servicios/marketing-juridico/" />
```

Convención: `x-default` apunta a la versión ES (mercado principal).

Página que NO tiene equivalente en otro país (ej. `/casos/gce-gestores-concursales/` que es específico ES): no se declara hreflang.

---

## Qué localizar y qué no

### Localizar

- **Terminología crítica**: despacho vs estudio jurídico (ES vs AR), despacho/bufete en MX.
- **Precios y monedas**: EUR vs MXN vs ARS.
- **Regulación citada**: RGPD vs LFPDPPP (MX) vs Ley 25.326 (AR).
- **Eventos y organizaciones**: Legal Tech Expo (ES) vs Legaltech CDMX (MX) vs Legaltech AR.
- **Casos y testimonios**: usar el caso del país correspondiente.
- **Pillar principal**: ES marketing, MX IA, AR LinkedIn (reflejado en el primer servicio que aparece en cada home).

### NO localizar

- **Identidad de marca**: logo, paleta, tipografía, tono de voz, nombre del framework metodológico.
- **Bio de Gonzalo**: igual en los 3. Solo cambia la cita del final si aplica.
- **Bio de Carla**: igual en los 3. En AR aparece primera; en MX y ES, segunda.
- **Mensaje central**: el "qué vendemos" es el mismo. Cambia el eje de entrada por país.

---

## Prerrequisitos antes de fase 3

- Haber consolidado España con 6–8 retainers y break-even sólido (mes 12).
- Partner académico mexicano firmado (contrato con Anáhuac / ITAM / Tec).
- Carla con 1 charla pública en Legaltech AR o un medio legal AR publicado (visibilidad previa).
- Primer prospect mexicano en conversación avanzada.
- Validación de que facturación cross-border está resuelta con contador.

---

## Qué dejar preparado en MVP (fase 1)

Aunque no se construya multipais en MVP, la arquitectura de Next.js debe tolerar su llegada sin reescritura:

1. **App Router con route groups** que soporten `[locale]` futuro: dejar `(marketing)/` como route group y preparar la migración a `[locale]/(marketing)/` cuando toque.
2. **Metadata API** declarada por página usando funciones (no estática) para que pueda recibir `params.locale` cuando llegue.
3. **Sanity schemas** con campo `locale` opcional desde el inicio: `post.locale: "es-es" | "es-mx" | "es-ar"` para que los posts sepan a qué país pertenecen.
4. **Sitemap generator** (`app/sitemap.ts`) con lógica preparada para iterar sobre locales.
5. **Componentes que reciben `locale` como prop** o lo leen del contexto, para que mañana sean reutilizables sin reescribir.
6. **Estructura de `public/`**: `public/locales/[locale]/` para assets localizados cuando apliquen.
7. **CTA de contacto** con Calendly configurable por `locale` (distintos links de Calendly por país).

---

## Lanzamiento multipais: checklist de activación

Cuando llegue el momento:

- [ ] Carla valida 3–5 conversaciones AR antes de lanzar.
- [ ] Partner académico MX firmado.
- [ ] Caso mexicano piloto cerrado (al menos 3 meses de ejecución).
- [ ] Localizar 40–60 páginas (incluyendo blog) con terminología correcta.
- [ ] `hreflang` activado en todas las páginas con equivalente.
- [ ] Verificar en Search Console cada propiedad (ES, MX, AR).
- [ ] Ajustar Google Ads por país.
- [ ] Revisar CPACF antes de activar ads AR.
- [ ] Preparar nota de lanzamiento multipais en el blog + LinkedIn.
