# Paleta y tipografía

**Propuestas, no decisión final.** Las tres opciones de paleta + tres opciones de tipografía deberían ir a un diseñador gráfico para validación y refinamiento antes de la producción visual definitiva.

---

## Propuestas de paleta

### Opción A · Legal clásico modernizado

Para una marca que se posiciona como premium pero accesible. Azul tinta profundo como color dominante, dorado apagado como acento, crema como fondo editorial.

| Rol | HEX | RGB | Uso |
|---|---|---|---|
| Fondo principal | `#FAF7F2` | 250, 247, 242 | Cream, lectura cómoda |
| Fondo surface | `#FFFFFF` | 255, 255, 255 | Cards, formularios |
| Texto principal | `#111827` | 17, 24, 39 | Alta legibilidad |
| Texto soft | `#4B5563` | 75, 85, 99 | Subtítulos, meta |
| Accent primario | `#0F2545` | 15, 37, 69 | Botones, títulos |
| Accent secundario | `#B88A2A` | 184, 138, 42 | Enlaces, highlights |
| Acierto / success | `#2F6A52` | 47, 106, 82 | Validaciones |
| Alerta | `#C44536` | 196, 69, 54 | Errores (sobrio) |

**Ventajas**: lee como "despacho serio", apropiado para legal. Gold suave sin caer en gold ordinario.
**Riesgos**: cerca de lo que hacen Lefebvre y Thomson Reuters; diferenciar con tipografía y espaciado.

---

### Opción B · Modernista seco

Para una marca que quiere destacar por la severidad editorial, no por el ornamento. Negro y crema puros, un solo acento llamativo.

| Rol | HEX | RGB | Uso |
|---|---|---|---|
| Fondo principal | `#F5F3EC` | 245, 243, 236 | Cream puro |
| Surface | `#FFFFFF` | — | Cards |
| Texto principal | `#0A0A0A` | 10, 10, 10 | Negro profundo |
| Texto soft | `#525252` | 82, 82, 82 | — |
| Accent único | `#D44500` | 212, 69, 0 | Vermilion, usado con moderación |
| Línea | `#E5E1D4` | 229, 225, 212 | Divisores sutiles |

**Ventajas**: diferencia radical. Mínimalista, editorial puro.
**Riesgos**: muy exigente en ejecución visual. Requiere diseñador sénior. Puede leer frío.

---

### Opción C · Cálido contemporáneo

Más contemporáneo, más cercano. Tonos tierra con un acento azul-verde sutil. Pensado para un consultor que conecta rápido.

| Rol | HEX | RGB | Uso |
|---|---|---|---|
| Fondo principal | `#FBF5EB` | 251, 245, 235 | Warm cream |
| Surface | `#FFFFFF` | — | — |
| Texto principal | `#1F1A14` | 31, 26, 20 | Negro cálido |
| Texto soft | `#5C5345` | 92, 83, 69 | Beige oscuro |
| Accent primario | `#2E5E5A` | 46, 94, 90 | Teal profundo |
| Accent secundario | `#D88E3C` | 216, 142, 60 | Terracotta claro |
| Línea | `#E8E0D0` | 232, 224, 208 | — |

**Ventajas**: cercano, editorial, menos frío que las dos anteriores.
**Riesgos**: cerca del patrón "warm cream + serif" que cluster común de AI design; hay que romper con tipografía poco obvia.

---

## Propuestas de tipografía

### Opción 1 · Fraunces + Inter

Fraunces para headings (serif variable con personalidad editorial), Inter para body (sans-serif legible).

**Ventajas**: contraste claro entre heading y cuerpo. Fraunces tiene variantes (opsz, wght, soft) que permiten jugar con peso y estilo sin cargar otra fuente. Buena pareja para legal moderno.

**Riesgos**: Fraunces puede leer "nuevo editorial 2023", muy visto en SaaS. Mitigar con uso discreto en títulos grandes.

**Font loading**: Google Fonts.

---

### Opción 2 · PT Serif + PT Sans

Clásica pareja ParaType. PT Serif tiene cuerpo de libro, PT Sans es sans-serif técnica.

**Ventajas**: lee tradicional legal sin ser pesado. Muy legible. Gratis.

**Riesgos**: no diferencia por sí sola. Hay 10 webs legales con PT Serif.

---

### Opción 3 · Bricolage Grotesque + Instrument Serif

Más moderno editorial. Bricolage Grotesque variable (sans), Instrument Serif para títulos editoriales.

**Ventajas**: diferenciación visual real. Pocos competidores del sector legal usan esta combinación.

**Riesgos**: Instrument Serif es muy distintivo; si se abusa, el cliente lo asocia con tech startups, no con legal.

---

## Mi recomendación personal (sujeta a diseñador)

**Paleta**: **Opción A · Legal clásico modernizado** o **Opción C · Cálido contemporáneo**. La A gana si queremos leer como "premium legal"; la C gana si queremos leer como "consultor cercano".

**Tipografía**: **Opción 1 · Fraunces + Inter**. Buen balance entre personalidad y legibilidad; disponible en Google Fonts (gratis y sin lock-in).

**Combo recomendado para iniciar**: A + 1.

---

## Tamaños y escala tipográfica

Escala base en rem (`1rem = 16px`):

| Rol | Tamaño | Peso | Line-height |
|---|---|---|---|
| H1 hero | 3.5–4.5rem | 500–600 | 1.05 |
| H1 regular | 2.5–3rem | 500 | 1.1 |
| H2 | 1.875–2.25rem | 500 | 1.15 |
| H3 | 1.375–1.625rem | 500 | 1.25 |
| H4 | 1.125rem | 600 | 1.3 |
| Body | 1rem | 400 | 1.55 |
| Body lg | 1.125–1.25rem | 400 | 1.55 |
| Small | 0.875rem | 400 | 1.5 |
| Caption | 0.75rem | 500 | 1.4 |
| Eyebrow / label | 0.75rem | 500 | 1.3 (uppercase, letter-spacing 0.1em) |

---

## Logotipo (propuesta direccional)

**Dos variantes a diseñar**:
1. **Horizontal**: wordmark + símbolo pequeño a la izquierda. Para header y firma.
2. **Simbólico (icon only)**: solo el símbolo. Para favicon, redes sociales, elementos compactos.

**Color del logo**:
- Versión principal: color del accent primario.
- Versión monocroma blanco: sobre fondos oscuros.
- Versión monocroma negro: sobre fondos claros.

**Clear space**: altura del logo × 0.5 de margen a cada lado.

**Variantes de nombre según decisión final**:
- Si va "Práxis Legal": wordmark con énfasis en "Práxis".
- Si va "Castro Fresch · Consultores": wordmark con separador entre apellidos.
- Si va otra opción: diseñar según rationale.

---

## Qué pedir al diseñador

Cuando llegue el diseñador externo:

1. Validar paleta (ajustar HEX si los propuestos no funcionan en impresión / dark mode / accesibilidad AA).
2. Probar tipografías alternativas.
3. Diseñar logo con 3 variantes.
4. Crear mini-sistema visual: botones, cards, inputs, iconos.
5. Entregar manual de marca básico (1–2 páginas) con reglas de uso.
6. Exportar tokens de color en formato Figma / JSON / Tailwind config para Neo.

**Formato de entrega**: Figma file + export de assets (SVG + PNG) + tokens exportables.
