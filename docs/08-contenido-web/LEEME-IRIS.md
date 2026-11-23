# Leer primero · Cómo usar este paquete

Iris, esto es el copy de la web de **TFB Legal**, colaboración directa entre los fundadores de The Funnel Box (Gonzalo Castro) y de Brandly (Carla Fresch Pons). Listo para construir. No mergees esta PR hasta el OK de Gonzalo.

La carpeta es `docs/08-contenido-web/`. No toca código ni otras carpetas del repo.

---

## Qué es copy final y qué no

En cada `01-…md` … `17-…md` hay tres capas. Sepáralas al maquetar.

1. **Copy final (para la web).** Meta title, meta description, H1, H2, cuerpo, texto de los botones y destinos. Eso se pega. No lo reescribas para «mejorarlo» ni le devuelvas el voseo del copy anterior de Iris (`docs/04-copy/` era un borrador; esta carpeta lo sustituye para producción).
2. **Placeholders `[COMPLETAR]`.** Van en el texto cuando falta un dato. No los rellenes tú. La lista viva está en `INDICE.md`.
3. **Notas para Iris.** Están en blockquote, con el rótulo «Nota para Iris». No son copy. No las publiques, no las dejes en un alt ni en un `aria-label`. Sirven para diseño, recorte de fotos, qué ocultar y qué no inventar.

`INDICE.md` dice el estado de cada página, las decisiones a validar y los [COMPLETAR]. `FUENTES.md` dice de dónde sale cada dato. `CHECK.md` es el resultado del filtro de voseo, «firmas», «cohorte», cifras retiradas y frases que Gonzalo no quiere.

---

## Reglas de tono que no se negocian en el maquetado

- Español neutro, trato **tú** (ustedes en plural). Cero voseo: nada de vendés, tenés, conocé, agendá, querés, operés.
- Siempre **despachos**, nunca «firmas» como sinónimo de bufete. «Firma digital» sí (es la firma de un documento).
- Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- «Perfil preaprobado» de Forbes Business Council, nunca «miembro de Forbes».
- La marca del sitio es **TFB Legal**. No uses «Legal Growth» ni «Práxis Legal» como marca. El dominio sigue en [COMPLETAR]. Legal Growth System sí se mantiene: es el nombre del programa de formación, no de la marca.
- Echo Routes, en dos palabras.
- HB Abogados es un despacho ficticio de la demo. El alt y el pie de cualquier captura de `fotos/demo/` deben decirlo si se ve esa marca.
- No uses avatares de Iris o Atlas. No uses `fotos/descartado-casos/`.

---

## Qué foto va en qué sección

La tabla fina, con origen y restricciones, está en `fotos/INDICE-FOTOS.md`. Aquí, el mapa rápido:

| Uso | Archivo |
|-----|---------|
| Retrato de Gonzalo (home, nosotros, bio, autor) | `fotos/gonzalo-castro-retrato.jpg` (recorte: fuera el logo del portátil) |
| Retrato de Carla (home, nosotros, bio) | `fotos/carla-fresch-pons-retrato.jpg` |
| Ponente / speaker | `fotos/gonzalo-castro-ponente.jpg`, `fotos/charla-gonzalo-medio.jpg`, `fotos/charla-en-sala-publico.jpg` |
| Contacto y cierre más cercano | `fotos/gonzalo-castro-taza-loft153.jpg` |
| Formación y metodología | `fotos/charla-sala-formacion.jpg`, `fotos/charla-dinamica-grupo.jpg`, `fotos/charla-loft153-sesion-mesa.jpg`, `fotos/charla-sesion-trabajo.jpg` |
| CEAJ y prueba de charlas | `fotos/brochure-ceaj-portada.jpg`, logos en `fotos/logos/logo-ceaj-abogacia-joven.jpg`, `logo-loft-153.png`, `logo-la-maquinita-co.png` |
| OpenAI Select Partner | `fotos/logos/logo-openai-select-partner.svg` y, si hace falta contexto, `fotos/demo/captura-equipo-reconocimientos.jpg` |
| Demo del sistema (siempre como demo) | `fotos/demo/captura-demo-despacho-abogados-desktop.jpg`, `captura-sistema-despachos-desktop.jpg` |
| Juliana Perez y Santiago Herrera | `fotos/juliana-perez-retrato.jpg`, `fotos/santiago-herrera-retrato.jpg`. **Equipo TFB, confirmar uso**. No son fundadores de esta web. |
| Casos GCE / Orejas / M20 | No hay foto o logo aprobado en este paquete. No uses `fotos/descartado-casos/`. Como referencia visual puedes apuntar a las capturas ya publicadas en thefunnelbox.com (Search Console, ChatGPT). |

El footer lleva el nombre TFB Legal. Puede usar `fotos/logos/tfb-wordmark.png` o el isotipo hasta que exista el wordmark de TFB Legal ([COMPLETAR]).

---

## Orden de construcción que más ayuda

1. Home, nosotros y las dos bios (el hero de dos caras es lo más delicado).
2. Servicios, formación, speaker y metodología (la demo va enlazada, no hace falta reconstruirla).
3. Contacto (formulario + correo público).
4. Casos: las fichas de Gestores Concursales, Orejas Abogados y M20 ya tienen copy a partir de thefunnelbox.com. Maquétalas con esos datos. El slug de M20 (`/casos/m20-pedro-miralles/`) no estaba en el sitemap Fase 1: no lo indexar hasta incorporarlo. Benchmark: sigue en [COMPLETAR].
5. Blog en estado mínimo.

Cualquier duda de dato, `FUENTES.md`. Cualquier duda de qué falta, `INDICE.md`. Si un texto de `docs/04-copy/` choca con esta carpeta, gana esta carpeta.
