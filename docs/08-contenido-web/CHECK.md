# CHECK · revisión del copy

Ejecutado el 23 de noviembre de 2026 (Europe/Skopje, UTC+1) con `python3 docs/08-contenido-web/check.py`.

**Resultado: APTO.** Cero hallazgos en el copy público de las páginas 01 a 16 (fuera de los blockquotes «Nota para Iris»).

El script busca voseo (vendés, tenés, querés, agendá, conocé, etc.), «firma(s)» usada como despacho (excluye «firma digital» y verbos de firmar), «cohorte», rayas largas, cifras retiradas (+100, +80, 5 empresas, +340 %, +800 %) y frases prohibidas (en un mundo donde, no es X es Y, potenciar, transformar, revolucionar, impulsar, partner estratégico, transformación digital, miembro de Forbes).

Los 11 hallazgos en notas y los 11 en documentos meta citan esas formas para decir que no se usen. No son copy de la web.

## Salida del script

```
Archivos revisados: 20
Hallazgos en copy público (páginas 01-16, fuera de blockquotes): 0
Hallazgos en notas para Iris (blockquote): 11
Hallazgos en documentos meta (INDICE, FUENTES, LEEME-IRIS, INDICE-FOTOS): 11

Criterio de aprobación: cero hallazgos en copy público. Las notas y los docs meta pueden citar las formas prohibidas para advertir que no se usen.

Detalle:
- `01-home.md:49` [nota] «miembro de Forbes» (usar perfil preaprobado): > **Nota para Iris:** Di siempre «perfil preaprobado», nunca «miembro de Forbes» ni «publicado en Forbes». Si el diseño pide una fila de logos y aún no hay autorización de clientes, deja solo los reco
- `01-home.md:97` [nota] voseo: > **Nota para Iris:** El imperativo es «Conoce» (tú, español neutro), no «Conocé». No inventes un nombre de método. Si el nombre aún no está, usa el H2 «Cómo trabajamos» y deja el placeholder del fram
- `01-home.md:221` [nota] partner estratégico: > **Nota para Iris:** No uses en el pie la fórmula de thefunnelbox.com «Partner estratégico para empresas que quieren crecer…». Esa frase está en la lista de lo que no se dice en `docs/05-brand/01-ton
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: 5 empresas fundadas: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: +100 proyectos: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: +80 con IA: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `04-nosotros-carla-fresch-pons.md:7` [nota] voseo: > **Nota para Iris:** Bio tomada del speaker v3 (diapositiva del equipo) y de las frases que Gonzalo usa en los mails. No uses el voseo de `docs/04-copy/03-bio-carla.md` («Agendá»). No tomes como fuen
- `07-servicios-consultoria-estrategica.md:7` [nota] voseo: > **Nota para Iris:** No uses el voseo del borrador de Iris («querés», «Captás», «hacés»). No publiques un precio de diagnóstico hasta que esté en [COMPLETAR] resuelto.
- `08-servicios-formacion-para-despachos.md:7` [nota] cohorte: > **Nota para Iris:** No uses la palabra «cohortes». El formato se describe con «grupos de 10 a 40 abogados», como en los mails a universidades. No prometas ECTS, CLE, título oficial ni descuentos.
- `12-casos-gce-gestores-concursales.md:9` [nota] cifra de versión descartada (+800 %): > **Nota para Iris:** No publiques esta URL con métricas hasta el OK de Gonzalo. No tomes +800 %, «0 € en anuncios» ni otras cifras de `speaker-pdf/descartado-con-casos/` o de `fotos/descartado-casos/
- `13-casos-orj-orejas-abogados.md:9` [nota] cifra de versión descartada (+340 %): > **Nota para Iris:** No publiques esta URL con métricas hasta el OK de Gonzalo. No tomes +340 %, «Top 3 en Google» ni «más de 12 consultas por semana» de `speaker-pdf/descartado-con-casos/` o de `fot
- `FUENTES.md:99` [meta] cifra retirada: 5 empresas fundadas: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `FUENTES.md:99` [meta] cifra retirada: +100 proyectos: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `FUENTES.md:99` [meta] cifra retirada: +80 con IA: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `INDICE.md:75` [meta] cohorte: - `CHECK.md`: resultado del script de revisión (voseo, «firma(s)» como despacho, «cohorte», cifras retiradas y frases prohibidas).
- `LEEME-IRIS.md:17` [meta] cohorte: `INDICE.md` dice el estado de cada página, las decisiones a validar y los [COMPLETAR]. `FUENTES.md` dice de dónde sale cada dato. `CHECK.md` es el resultado del filtro de voseo, «firmas», «cohorte», c
- `LEEME-IRIS.md:23` [meta] voseo: - Español neutro, trato **tú** (ustedes en plural). Cero voseo: nada de vendés, tenés, conocé, agendá, querés, operés.
- `LEEME-IRIS.md:25` [meta] frase prohibida: «en un mundo donde»: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] giro «no es X, es Y»: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] partner estratégico: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] transformación digital: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:26` [meta] «miembro de Forbes» (usar perfil preaprobado): - «Perfil preaprobado» de Forbes Business Council, nunca «miembro de Forbes».
```
