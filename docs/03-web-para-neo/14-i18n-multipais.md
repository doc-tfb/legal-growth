# Internacionalización y multi-país

**Nota de alcance**: la **Fase 1 MVP NO lanza multipais**. Este documento es preparatorio para que la arquitectura técnica del MVP no bloquee la expansión a `/mx/` y `/ar/` en Fase 3.

Cuando llegue Fase 3 (mes 13+), este documento se convierte en la guía de ejecución.

---

## Decisión de arquitectura: subcarpetas, no subdominios

Elegimos `/es/`, `/mx/`, `/ar/` sobre el mismo dominio. **No** `mx.tfblegal.com` ni `ar.tfblegal.com`.

**Por qué**:
- Preserva autoridad del dominio (subdominios son vistos por Google como semi-independientes).
- hreflang más simple de declarar y mantener.
- Setup técnico más limpio (una sola propiedad en Search Console vale, aunque podemos declarar 3 subcarpetas aparte).

---

## Mapa de rutas (Fase 3)

### `/es/` — España (default canónico)
- Content en español de España.
- Terminología: "despacho".
- Es la versión principal. URL raíz `/` sirve este contenido.

### `/mx/` — México
- Content en español de México.
- Terminología: "despacho" o "bufete".
- Eje principal: IA para despachos (gold mine, keyword `ia para abogados` 1.300/mes KD 1,2).

### `/ar/` — Argentina
- Content en español rioplatense neutro.
- Terminología: "estudio jurídico" (NUNCA "despacho").
- Carla al frente como cara principal.

---

## hreflang

Declarar en cada página con equivalentes en otros países:

```html
<link rel="alternate" hreflang="es-es" href="https://tfblegal.com/servicios/marketing-juridico/" />
<link rel="alternate" hreflang="es-mx" href="https://tfblegal.com/mx/marketing-juridico/" />
<link rel="alternate" hreflang="es-ar" href="https://tfblegal.com/ar/marketing-estudio-juridico/" />
<link rel="alternate" hreflang="x-default" href="https://tfblegal.com/servicios/marketing-juridico/" />
```

Convención: `x-default` apunta a la versión ES (mercado principal).

Página sin equivalente localizado (ej. `/casos/gce-gestores-concursales/` es ES específico): **no** declarar hreflang.

---

## Qué localizar

### Localizar sí

| Elemento | ES | MX | AR |
|---|---|---|---|
| Terminología core | despacho | despacho/bufete | **estudio jurídico** |
| Moneda | EUR | MXN | ARS |
| Regulación citada | RGPD | LFPDPPP | Ley 25.326 |
| Eventos mencionados | Legal Tech Expo, ICAB | Legaltech CDMX | Legaltech AR |
| Casos de éxito mostrados | GCE, ORJ | caso MX | caso AR (Carla network) |
| Pillar principal | Marketing jurídico | IA para despachos | LinkedIn / network |
| Casos ancla en home | GCE + ORJ | Caso MX piloto | Caso AR |

### NO localizar

| Elemento | Misma versión los 3 países |
|---|---|
| Identidad visual | Logo, paleta, tipografía |
| Tono de voz | Español neutro + ajuste terminológico mínimo |
| Nombre del framework | Único (lo que decida brand en `docs/05-brand/00-naming.md`) |
| Bio Gonzalo | Misma estructura, misma historia |
| Bio Carla | Misma estructura; en AR aparece primera, en MX/ES segunda |
| Propuesta de valor | Misma propuesta; cambia el eje de entrada por país |

---

## Qué dejar preparado en MVP

Aunque no se construya multipais hasta Fase 3, Neo debe dejar estas piezas listas en el código del MVP:

### 1. Estructura de rutas tolerante

App Router con posibilidad futura de prefijo `[locale]`. Si el MVP usa `/servicios/marketing-juridico/`, la arquitectura debe permitir migración a `/[locale]/servicios/marketing-juridico/` sin reescribir toda la lógica.

Patrón: encapsular toda la UI en un layout + componentes que reciben `locale` como prop o lo leen de un contexto. En MVP `locale = "es-es"` hardcoded; en Fase 3 se parametriza.

### 2. Sanity schema con `locale`

Campo `locale` en cada document type que sea localizable (post, author, case, service si se mueve a CMS).

```typescript
{
  _type: 'post',
  locale: {
    type: 'string',
    options: {
      list: [
        { title: 'España', value: 'es-es' },
        { title: 'México', value: 'es-mx' },
        { title: 'Argentina', value: 'es-ar' },
      ],
    },
    initialValue: 'es-es',
  },
  // ... resto de campos
}
```

### 3. `app/sitemap.ts` con lógica de locales

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es-es']; // en Fase 3: ['es-es', 'es-mx', 'es-ar']
  return locales.flatMap(locale => [
    // páginas de ese locale
  ]);
}
```

En MVP, `locales` tiene sólo `es-es`. La función ya itera sobre array. Fase 3 sólo añade los otros 2.

### 4. Metadata API con `params.locale`

Cada `generateMetadata` acepta `params` y puede leer `params.locale` cuando la ruta se parametrice.

### 5. Assets localizables

Estructura `public/locales/[locale]/` prevista para assets (OG images, PDFs del lead magnet localizado).

En MVP: todos los assets viven en `public/` directo. En Fase 3 se mueven a `public/locales/es-es/`, `public/locales/es-mx/`, etc., con fallback al default.

### 6. Calendly por país

En Fase 3, 3 links de Calendly distintos (uno por zona horaria). Preparar componente `<CalendlyEmbed locale={locale} />` con conditional en el link.

---

## Checklist de activación (cuando toque Fase 3)

### Antes de activar

- [ ] Carla validó demanda AR con 3–5 conversaciones iniciales.
- [ ] Partner académico MX firmado.
- [ ] Caso MX piloto en ejecución (al menos 3 meses).
- [ ] Localizar 40–60 páginas (incluyendo blog) con terminología correcta.
- [ ] Revisar CPACF AR antes de activar ads.
- [ ] Fotos localizadas si aplica (ej. Carla al frente en AR con foto específica).

### Al activar

- [ ] `hreflang` en todas las páginas con equivalentes.
- [ ] Sanity con posts localizados por `locale`.
- [ ] 3 dashboards distintos en GSC (uno por subcarpeta).
- [ ] 3 campañas Ads distintas, con presupuesto por país.
- [ ] 3 Calendly distintos para reuniones por zona horaria.
- [ ] Nota de lanzamiento multipais en el blog + LinkedIn (ES, MX, AR).

### Post-lanzamiento

- [ ] Dashboard consolidado en Looker Studio con tráfico/conversión por país.
- [ ] Revisar hreflang errors en GSC Coverage.
- [ ] Monitor de rankings por país en Ahrefs Rank Tracker.

---

## Cosas que NO hacer en Fase 3

- NO traducir con máquina sin revisión humana. Terminología del sector es sensible.
- NO lanzar los 3 países simultáneamente. Lanzar MX primero (mes 13), AR después (mes 18).
- NO replicar 1:1 la home ES en MX/AR. Cada home debe arrancar con el pillar del país.
- NO olvidar el `locale` en Sanity. Posts sin locale pueden confundir el sistema.
- NO dejar enlaces internos cruzados entre locales (un post ES linkeando a un servicio MX). Cada locale es su propio mundo.
