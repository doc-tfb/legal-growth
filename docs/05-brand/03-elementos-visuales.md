# Elementos visuales

> **Nota**: hay dossier existente con fotos y materiales previamente
> trabajados con Gonzalo y Carla. Pedir a Gonzalo acceso antes de generar
> assets nuevos.

Fotografía, iconografía, ilustraciones, do's and don'ts. Material de referencia para quien produzca assets.

---

## Fotografía

### Fotos de los fundadores

**Dossier existente**: Gonzalo tiene un dossier con fotos de ambos ya trabajadas. Neo debe pedir el link al drive (o pedir que lo suba a `/public/dossier/` del repo del código) antes de maquetar cualquier página que use retratos.

**Convención de uso según página**:
- Home (hero): dos retratos lado a lado, foto horizontal media/larga.
- `/nosotros/` (hub): dos retratos lado a lado, misma proporción, mismo tratamiento.
- Bios individuales: retrato grande de la persona, formato cuadrado o 4:5.
- Speaker: foto en escenario / dando ponencia si existe; si no, retrato formal.
- Autor en blog: retrato cuadrado 400×400, buena resolución.

**Tratamiento visual**:
- Procesado consistente: misma temperatura, mismo contraste, misma profundidad.
- Fondo neutro o desenfocado.
- Mirada directa al objetivo en al menos 1 foto por fundador (genera conexión).
- Sonrisas sutiles, nada forzado, nada de "foto corporativa de archivo".

**Si en algún momento se necesitan fotos adicionales** (ej. fotos de ambos juntos para una campaña específica):
- Sesión dedicada con fotógrafo profesional.
- Locación acorde al tono de marca (no stock de "oficina moderna").
- Guardar los RAW + las versiones editadas.

### Fotos de ambiente / stock

Cuando se necesiten imágenes de contexto (hero de artículos, bloques editoriales):

**Preferir**:
- Unsplash o Pexels con licencia abierta.
- Fotos auténticas, no "profesional sonriente con laptop".
- Despachos reales, libros reales, documentos reales.
- Palette compatible con la paleta de la marca.

**Evitar**:
- Fotos obvias de banco de imágenes ("equipo diverso apuntando a pantalla").
- Ilustraciones vectoriales genéricas de "crecimiento" (flechas, cohetes, bombillas).
- Fotos de "abogado golpeando el martillo" (clichéico).
- Balanzas de la justicia (demasiado obvio).

---

## Iconografía

### Set recomendado

**Lucide React** o **Heroicons v2** (ambos open source, buena cobertura).

**Estilo**:
- Línea fina (1.5px).
- Esquinas levemente redondeadas.
- Trazo consistente en todos los iconos.

**Tamaños estándar**:
- Inline con texto: 16–20 px.
- Card feature: 24–32 px.
- Hero icon: 40–48 px.

**Color**:
- Default: color primario de texto (`--fg-soft`).
- En estado hover o selección: accent primario.
- Nunca multicolor en un mismo icono.

### Iconos obligatorios (mínimo MVP)

- Navegación: menu, close.
- CTAs: arrow-right, external-link, calendar, mail.
- Social: linkedin, twitter/x, youtube.
- Legal: scale (uso muy puntual, no abusar), gavel (prohibido, clichéico).
- Formación: book-open, academic-cap.
- Marketing: chart-bar, megaphone, lightbulb (no abusar).
- Consultoría: clipboard-check, users, briefcase.

---

## Ilustraciones

**Recomendación en MVP**: **no usar ilustraciones vectoriales custom**. Son caras, requieren un ilustrador sénior y suelen leer como "marketing genérico" si no están perfectas.

**Alternativa**: usar **fotografía** + **iconografía** + **tipografía** como lenguaje visual. Es suficiente para una marca consultora premium.

**Si en fase 2 se decide invertir en ilustración**:
- Contratar ilustrador con portfolio editorial (no infografías).
- Estilo: línea simple + 1–2 colores de la paleta + white space.
- Usarlas con moderación: 2–3 por página máximo.

---

## Fotografía de producto / dashboards

Para casos de éxito y ejemplos técnicos (screenshots de GSC, GA4, dashboards):

- Difuminar datos sensibles.
- Mantener contexto visible (branding del cliente si está autorizado).
- Captura en pantalla retina (2x resolución).
- Guardar screenshots en `public/casos/[slug]/screenshots/`.

---

## Do's and Don'ts

### Do's

- ✅ Usar el dossier existente de fotos antes de pedir sesión nueva.
- ✅ Mantener consistencia visual entre todas las páginas (misma paleta, misma tipografía, mismo espaciado).
- ✅ Dar espacio al blanco. Nada de páginas abarrotadas.
- ✅ Usar fotos reales de Gonzalo y Carla en todas las páginas de "nosotros / autor / speaker".
- ✅ Respetar la paleta elegida. Si se añade un color, documentarlo en este archivo.

### Don'ts

- ❌ Fotos de stock corporativas con "equipo profesional sonriente".
- ❌ Iconos multicolor o emoji disfrazados de icono.
- ❌ Ilustraciones genéricas de "crecimiento" / "innovación".
- ❌ Balanzas de la justicia, martillos de juez, togas (clichéico).
- ❌ Fondos de gradientes violeta-azul (cluster AI design).
- ❌ Mezclar más de 2 tipografías.
- ❌ Usar emojis en elementos de UI (botones, nav, cards).
- ❌ Decoraciones ornamentales sin propósito (líneas sueltas, puntos decorativos).

---

## Organización de assets en el repo de código

Estructura sugerida:

```
public/
├── dossier/                        ← fotos existentes de Gonzalo y Carla
│   ├── gonzalo/
│   ├── carla/
│   └── ambos/
├── logos/
│   ├── logo-horizontal.svg
│   ├── logo-icon.svg
│   ├── logo-horizontal-dark.svg
│   └── favicon.ico
├── casos/
│   ├── gce/
│   │   ├── logo-cliente.svg
│   │   └── screenshots/
│   └── orj/
├── og-images/
│   ├── home.png
│   ├── servicios-marketing-juridico.png
│   └── ...
├── recursos/
│   └── benchmark-precios-marketing-juridico-2026.pdf
└── icons/
    └── (si se usan sets custom)
```

---

## Checklist de assets antes del lanzamiento

- [ ] Dossier de fotos recibido de Gonzalo (link o carga al repo).
- [ ] Fotos optimizadas a WebP + AVIF con `next/image`.
- [ ] Logotipo en 3 variantes (color, blanco, negro).
- [ ] Favicon 32x32 + 180x180 (apple-touch-icon).
- [ ] OG images únicas por página (1200x630).
- [ ] Icono set decidido y consistente.
- [ ] Mínimo 1 foto profesional disponible por cada fundador.
- [ ] Screenshots de casos (si se publican) con permisos.
