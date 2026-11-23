# CHECK · revisión del copy

Ejecutado de nuevo el 23 de noviembre de 2026 (Europe/Skopje, UTC+1) con `python3 docs/08-contenido-web/check.py`, tras la decisión de Gonzalo (vía Neo) de dejar fuera un caso y aprobar Gestores Concursales y Orejas Abogados.

**Resultado: APTO.** Cero hallazgos en el copy público de las páginas 01 a 16. Cero menciones del caso excluido (M20, Miralles, Pedro García) en el copy público, en INDICE.md y en FUENTES.md, salvo la frase de cierre «M20 queda fuera» en INDICE.md.

El script busca voseo, «firma(s)» usada como despacho, «cohorte», rayas largas, cifras retiradas (+100, +80, 5 empresas, +340 %), el nombre provisorio «Práxis»/«Praxis», las formas M20 / Miralles / Pedro García y frases prohibidas. El +800 % de Gestores Concursales no se marca como cifra retirada: está en la ficha publicada de thefunnelbox.com.

Los hallazgos en notas y en documentos meta citan formas prohibidas para decir que no se usen, o transcriben una fuente. No son copy de la web.

## Salida del script

```
Archivos revisados: 20
Hallazgos en copy público (páginas 01-16, fuera de blockquotes): 0
Hallazgos en notas para Iris (blockquote): 13
Hallazgos en documentos meta (INDICE, FUENTES, LEEME-IRIS, INDICE-FOTOS): 18
Hallazgos de caso excluido (copy público, INDICE o FUENTES): 0

Criterio de aprobación: cero hallazgos en copy público y cero menciones del caso excluido en copy, INDICE o FUENTES (salvo la frase de cierre «M20 queda fuera» en INDICE.md). Las notas y los demás docs meta pueden citar las formas prohibidas para advertir que no se usen.

Detalle:
- `01-home.md:7` [nota] nombre provisorio «Práxis»/«Praxis» (la marca es TFB Legal): > **Nota para Iris:** La marca es **TFB Legal** (decisión de Gonzalo, 23/11/2026, vía Neo). No uses «Legal Growth» ni «Práxis Legal» como marca. El dominio sigue en [COMPLETAR]. El trato de esta págin
- `01-home.md:49` [nota] «miembro de Forbes» (usar perfil preaprobado): > **Nota para Iris:** Di siempre «perfil preaprobado», nunca «miembro de Forbes» ni «publicado en Forbes». Si el diseño pide una fila de logos y aún no hay autorización de clientes, deja solo los reco
- `01-home.md:97` [nota] voseo: > **Nota para Iris:** El imperativo es «Conoce» (tú, español neutro), no «Conocé». No inventes un nombre de método. Si el nombre aún no está, usa el H2 «Cómo trabajamos» y deja el placeholder del fram
- `01-home.md:226` [nota] partner estratégico: > **Nota para Iris:** No uses en el pie la fórmula de thefunnelbox.com «Partner estratégico para empresas que quieren crecer…». Esa frase está en la lista de lo que no se dice en `docs/05-brand/01-ton
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: 5 empresas fundadas: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: +100 proyectos: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `03-nosotros-gonzalo-castro.md:7` [nota] cifra retirada: +80 con IA: > **Nota para Iris:** Esta bio sigue el speaker v3 y las frases que Gonzalo usa en sus mails. No uses el copy de Iris en `docs/04-copy/02-bio-gonzalo.md` (tiene voseo y material no validado). No agreg
- `04-nosotros-carla-fresch-pons.md:7` [nota] voseo: > **Nota para Iris:** Bio tomada del speaker v3 (diapositiva del equipo) y de las frases que Gonzalo usa en los mails. No uses el voseo de `docs/04-copy/03-bio-carla.md` («Agendá»). No tomes como fuen
- `07-servicios-consultoria-estrategica.md:7` [nota] voseo: > **Nota para Iris:** No uses el voseo del borrador de Iris («querés», «Captás», «hacés»). No publiques un precio de diagnóstico hasta que esté en [COMPLETAR] resuelto.
- `08-servicios-formacion-para-despachos.md:7` [nota] cohorte: > **Nota para Iris:** No uses la palabra «cohortes». El formato se describe con «grupos de 10 a 40 abogados», como en los mails a universidades. No prometas ECTS, CLE, título oficial ni descuentos.
- `11-casos.md:7` [nota] cifra de versión descartada (+340 %): > **Nota para Iris:** Gestores Concursales y Orejas Abogados están aprobados (decisión de Gonzalo, 23/11/2026, vía Neo), con los datos de thefunnelbox.com. Orejas se muestra aunque el despacho sea de 
- `13-casos-orj-orejas-abogados.md:9` [nota] voseo: > **Nota para Iris:** Fuente principal: https://thefunnelbox.com/blog/caso-de-exito-orejas-abogados (fecha visible: 1 sept 2026) y la card de https://thefunnelbox.com/casos-de-exito. No uses +340 %, «
- `13-casos-orj-orejas-abogados.md:9` [nota] cifra de versión descartada (+340 %): > **Nota para Iris:** Fuente principal: https://thefunnelbox.com/blog/caso-de-exito-orejas-abogados (fecha visible: 1 sept 2026) y la card de https://thefunnelbox.com/casos-de-exito. No uses +340 %, «
- `FUENTES.md:125` [meta] raya larga (—): **No usado, aunque está en thefunnelbox.com:** el artículo https://thefunnelbox.com/blog/marketing-para-abogados (fecha visible: 21 jul 2026) publica, para este despacho, «el resultado en doce meses»,
- `FUENTES.md:137` [meta] cifra de versión descartada (+340 %): **No usado, de la versión descartada del speaker:** +340 % de tráfico orgánico en 12 meses; Top 3 en Google en Asturias; más de 12 consultas nuevas por semana. No aparecen en las páginas publicadas. T
- `FUENTES.md:147` [meta] cifra retirada: 5 empresas fundadas: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `FUENTES.md:147` [meta] cifra retirada: +100 proyectos: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `FUENTES.md:147` [meta] cifra retirada: +80 con IA: - «+100 proyectos», «+80 con IA», «5 empresas fundadas»: brochure LGS y speaker anterior o descartado; retirados del speaker v3; el criterio de Gonzalo pide no poner conteo de empresas ni inventar cif
- `FUENTES.md:148` [meta] cifra de versión descartada (+340 %): - Cifras de la versión descartada del speaker que no coinciden con thefunnelbox.com: +340 %, Top 3, más de 12 consultas por semana, 0 € en anuncios, y el plazo de 12 meses pegado al +800 %. Las miniat
- `INDICE.md:59` [meta] cifra de versión descartada (+340 %): 2. **Casos de Gestores Concursales y Orejas Abogados.** Aprobados, con los datos publicados en thefunnelbox.com (Orejas incluida, aunque el despacho sea de Asturias). El +800 % de GCE se toma solo de 
- `INDICE.md:62` [meta] nombre provisorio «Práxis»/«Praxis» (la marca es TFB Legal): 5. **Marca.** «TFB Legal» es la marca definitiva. Se sustituyó `[COMPLETAR: nombre de marca]` y no se usa «Práxis Legal» ni «Legal Growth» como marca del sitio. Legal Growth System se mantiene como no
- `INDICE.md:84` [meta] cohorte: - `CHECK.md`: resultado del script de revisión (voseo, «firma(s)» como despacho, «cohorte», cifras retiradas, «Práxis»/«Praxis» y frases prohibidas).
- `INDICE.md:84` [meta] nombre provisorio «Práxis»/«Praxis» (la marca es TFB Legal): - `CHECK.md`: resultado del script de revisión (voseo, «firma(s)» como despacho, «cohorte», cifras retiradas, «Práxis»/«Praxis» y frases prohibidas).
- `LEEME-IRIS.md:17` [meta] cohorte: `INDICE.md` dice el estado de cada página, las decisiones a validar y los [COMPLETAR]. `FUENTES.md` dice de dónde sale cada dato. `CHECK.md` es el resultado del filtro de voseo, «firmas», «cohorte», c
- `LEEME-IRIS.md:23` [meta] voseo: - Español neutro, trato **tú** (ustedes en plural). Cero voseo: nada de vendés, tenés, conocé, agendá, querés, operés.
- `LEEME-IRIS.md:25` [meta] frase prohibida: «en un mundo donde»: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] giro «no es X, es Y»: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] partner estratégico: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:25` [meta] transformación digital: - Sin «Partner estratégico», sin «boutique», sin «transformación digital», sin «en un mundo donde», sin «no es X, es Y», sin rayas largas, sin promesas de clientes o de plazos.
- `LEEME-IRIS.md:26` [meta] «miembro de Forbes» (usar perfil preaprobado): - «Perfil preaprobado» de Forbes Business Council, nunca «miembro de Forbes».
- `LEEME-IRIS.md:27` [meta] nombre provisorio «Práxis»/«Praxis» (la marca es TFB Legal): - La marca del sitio es **TFB Legal**. No uses «Legal Growth» ni «Práxis Legal» como marca. El dominio sigue en [COMPLETAR]. Legal Growth System sí se mantiene: es el nombre del programa de formación,
```
