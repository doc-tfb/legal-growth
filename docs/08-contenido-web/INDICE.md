# Índice del contenido web

Entrega del 23 de noviembre de 2026 (Europe/Skopje, UTC+1). Copy final de las páginas del sitemap Fase 1, más las dos fichas de caso previstas y el lead magnet. No mergear hasta el OK de Gonzalo.

El nombre de marca y el nombre del framework metodológico siguen pendientes (`docs/05-brand/00-naming.md`). En los títulos se usa `[COMPLETAR: nombre de marca]`.

---

## Páginas

| # | Archivo | Path | Estado del copy |
|---|---------|------|-----------------|
| 01 | `01-home.md` | `/` | Final, con secciones 5, 6 y 7 a la espera de casos, testimonios y benchmark |
| 02 | `02-nosotros.md` | `/nosotros/` | Final |
| 03 | `03-nosotros-gonzalo-castro.md` | `/nosotros/gonzalo-castro/` | Final; snippet de casos pendiente |
| 04 | `04-nosotros-carla-fresch-pons.md` | `/nosotros/carla-fresch-pons/` | Final; pull quote, fechas de timeline y listado de apariciones pendientes |
| 05 | `05-servicios.md` | `/servicios/` | Final; bloque de casos pendiente |
| 06 | `06-servicios-marketing-juridico.md` | `/servicios/marketing-juridico/` | Final; caso, precio y desglose fino de canales pendientes |
| 07 | `07-servicios-consultoria-estrategica.md` | `/servicios/consultoria-estrategica/` | Final; caso, precio y condición comercial del diagnóstico pendientes |
| 08 | `08-servicios-formacion-para-despachos.md` | `/servicios/formacion-para-despachos/` | Final; alcance in-company y precio pendientes |
| 09 | `09-servicios-speaker-conferencias.md` | `/servicios/speaker-conferencias/` | Final; presencial y política de charla gratuita pendientes de confirmar |
| 10 | `10-metodologia.md` | `/metodologia/` | Final; nombre del framework y plazo de implementación pendientes |
| 11 | `11-casos.md` | `/casos/` | Estructura final; grid sin métricas hasta el OK |
| 12 | `12-casos-gce-gestores-concursales.md` | `/casos/gce-gestores-concursales/` | Solo estructura. No publicar con cifras hasta el OK de Gonzalo |
| 13 | `13-casos-orj-orejas-abogados.md` | `/casos/orj-orejas-abogados/` | Solo estructura. No publicar con cifras hasta el OK de Gonzalo |
| 14 | `14-blog.md` | `/blog/` | Final en estado mínimo (MVP sin posts) |
| 15 | `15-contacto.md` | `/contacto/` | Final; teléfono comercial (si existe, distinto de la demo) pendiente |
| 16 | `16-recursos-benchmark-precios-marketing-juridico-2026.md` | `/recursos/benchmark-precios-marketing-juridico-2026/` | Estructura final; PDF, portada y cifras pendientes |

Las URLs 12 y 13 son las fichas 11.1 y 11.2 del sitemap. No entran en el conteo de «13 páginas + lead magnet», pero tienen slug y anatomía propios, así que tienen pieza.

Páginas de sistema (gracias, 404, legales) no tienen pieza de copy largo en esta entrega, salvo la mención de los tres legales en el footer y en contacto.

---

## [COMPLETAR] pendientes

Agrupados por tema, no por repetición en cada página.

1. **Nombre de marca** y dominio, handles y wordmark definitivo.
2. **Nombre del framework** metodológico.
3. **Casos GCE y Orejas:** texto, métricas, logos, fotos, citas y permiso. Hoy solo hay estructura. Esas cifras aparecen únicamente en la versión retirada `speaker-pdf/descartado-con-casos/` (y en `fotos/descartado-casos/`, que no se publica).
4. **Testimonios** para la home (sección 6) y para las fichas de caso. No hay textos aprobados para esta web.
5. **Benchmark 2026:** PDF, portada, índice, cifras y si incluye o no las tarifas propias.
6. **Precios** de marketing, consultoría, diagnóstico, formación y speaker.
7. **Alcance de la formación in-company** (duración y condiciones).
8. **Charlas presenciales** y política fija de charla gratuita para colegios.
9. **Plazo de implementación** del sistema. En thefunnelbox.com se lee «2-4 semanas»; aquí no se publica como promesa hasta confirmarlo.
10. **Cita y timeline con fechas** de Carla; listado de apariciones.
11. **Teléfono comercial** de agenda, si existe uno público que no sea la demo de voz +1 (571) 724-5677.
12. **Campos extra del formulario** de contacto (por ejemplo número de abogados), sin usar vosotros.
13. **Permiso de uso** de las fotos de Juliana Perez y Santiago Herrera en esta web (están en thefunnelbox.com/equipo; ver `fotos/INDICE-FOTOS.md`).

---

## Decisiones a validar (no resueltas en el copy)

1. **Trato tú (sitio) frente a usted (mails de Gonzalo).** El repo fija «tú» para el sitio público. Los mails reales de Gonzalo, en `/workspace/lgs`, van en usted/ustedes. Esta entrega respeta el trato del repo. No se unificó. Si Gonzalo prefiere usted también en la web, hay que revisitar todas las piezas.
2. **Bio de Carla en esta web frente a thefunnelbox.com/equipo.** Aquí se usa la bio del speaker v3 (UBA, Poder Judicial, Brandly OÜ, Top Voice, LGS). En /equipo de TFB solo figura LinkedIn, comunicación y Top Voice. Se asume que para esta web vale el speaker v3. Conviene un OK explícito de Carla y Gonzalo.
3. **Grafía Echo Routes** (dos palabras), como pidió este encargo. En thefunnelbox.com aparece «Echoroutes».
4. **Cuándo publicar las URLs de caso.** El sitemap las da por existentes en el MVP. Sin métricas aprobadas, o se dejan en estructura visible, o no se indexan hasta el OK.
5. **Si el benchmark puede lanzarse en el MVP** sin PDF. Hoy la página está en estructura. Publicarla vacía no aporta.
6. **Quién atiende la consulta de 30 minutos** (Gonzalo, Carla o ambos) cuando el visitante no lo indica.
7. **Si los reconocimientos de OpenAI y Forbes se presentan como de The Funnel Box** (así están en las fuentes) en un sitio cuya marca paraguas aún no tiene nombre.

---

## Cómo está armada la carpeta

- Un `.md` por página, numerado según el orden del sitemap.
- En cada página: meta title, meta description y, por sección, títulos, cuerpo, CTA (texto y destino), foto sugerida y notas para Iris en blockquote («Nota para Iris»).
- `LEEME-IRIS.md`: cómo usar este paquete.
- `FUENTES.md`: cada dato publicado, con ruta o URL.
- `fotos/` + `fotos/INDICE-FOTOS.md`.
- `CHECK.md`: resultado del script de revisión (voseo, «firma(s)» como despacho, «cohorte», cifras retiradas y frases prohibidas).
