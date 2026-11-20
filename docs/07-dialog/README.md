# 07 · Dialog Neo ↔ Iris

Protocolo de comunicación asíncrona entre **Neo (Grok, constructor de la web)** e **Iris (Claude, planificación / revisión / SEO)**. Esta carpeta es la memoria compartida entre los dos agentes.

---

## Dos canales

### Canal primario · GitHub Issues del repo `doc-tfb/legal-growth`

Cuando el repo esté en GitHub (tras el primer push por Gonzalo), **GitHub Issues es el canal en vivo**.

- Neo abre un issue con label `pregunta-para-iris` y título corto.
- Iris responde con comentario en el mismo issue.
- Cuando se resuelve, Neo cierra el issue.
- Las decisiones importantes se trasladan también a `02-log-decisiones.md` para que no se pierdan en scroll.

### Canal secundario · Archivos de esta carpeta

Antes de que el repo esté en GitHub, o para preguntas largas que exceden el formato de issue, usamos `00-hilo-abierto.md`.

- Ambos agentes pueden editar el archivo append-only.
- Nunca editar mensajes pasados del otro; solo agregar al final.

---

## Convenciones de mensajes

1. **Firma al pie de cada mensaje**:
   ```
   — Neo (2026-11-20 14:35)
   ```
   ```
   — Iris (2026-11-20 15:02)
   ```

2. **Nunca editar mensajes pasados del otro.** Solo agregar al final. Si cambiás de opinión, lo decís en un mensaje nuevo con la fecha actual.

3. **Si una duda requiere decisión de Gonzalo** (contenido de una página, nombres de marca, datos faltantes como el fuero de Carla), marcar la respuesta como `[REQUIERE GONZALO]` para que ninguno de los dos invente.

4. **Idioma**: español neutro. Preferencia explícita de Gonzalo documentada en `CLAUDE.md`.

5. **Sin secrets**: nunca pegar API keys, tokens, passwords ni service accounts en el hilo. Si hace falta un secret, el que necesita lo pide a Gonzalo o lo lee de su propia `.env.local` sin exponerlo.

6. **Formato**: markdown limpio. Code blocks con triple backtick para fragmentos de código. Referencias cruzadas con links relativos.

---

## Cadencia

- No hay SLA fijo. Son agentes asíncronos.
- Iris responde en el siguiente turno de la sesión activa.
- Neo debería revisar el hilo al arrancar cada sesión de trabajo, antes de escribir código nuevo.
- Decisiones urgentes bloqueantes: Neo pinga a Gonzalo directamente (email o chat), no espera a Iris.

---

## Archivos de esta carpeta

- **`README.md`** · este archivo. Protocolo.
- **`00-hilo-abierto.md`** · hilo vivo append-only. Ambos agentes escriben acá.
- **`01-preguntas-anticipadas.md`** · FAQ con dudas que Iris anticipó que Neo iba a tener, ya respondidas. **Revisar primero antes de abrir issue o escribir al hilo.**
- **`02-log-decisiones.md`** · registro append-only de decisiones tomadas en el hilo que afectan el proyecto. Para que no se pierdan en scroll.

---

## Antes de preguntar

Antes de abrir un issue o escribir al hilo, revisá en este orden:

1. **`01-preguntas-anticipadas.md`** — la duda puede estar ya respondida.
2. **`docs/01-estrategia/`** — contexto estratégico.
3. **`docs/02-seo/`** — keyword research y content plan.
4. **`docs/03-web-para-neo/`** — brief técnico y anatomía por página.
5. **`docs/04-copy/`** — borradores de copy.
6. **`docs/05-brand/`** — identidad visual y tono.

Si tu duda no está cubierta en ninguno de los 5, **entonces** abrí issue o escribí al hilo.

---

## Qué sí va a este canal

- Preguntas técnicas de implementación que no están en el brief.
- Decisiones ambiguas que caen en el borde entre responsabilidades (ver `CLAUDE.md` división Iris/Neo).
- Reportes de bugs o problemas estructurales que detecta Neo durante la construcción.
- Propuestas de refactor o cambios de alcance (requieren aprobación antes de ejecutar).
- Notificación de que una página está lista para revisión de SEO por parte de Iris.

## Qué NO va a este canal

- Secrets, credenciales, tokens.
- Datos personales de Gonzalo o Carla (salvo que ya estén en `01-fundadores.md`).
- Cualquier cosa que debería ir a GitHub como issue público del repo del código (p.ej. bugs puros del repo del código).
- Chat casual sin propósito.

---

## Checklist antes de escribir al hilo

- [ ] Revisé `01-preguntas-anticipadas.md`.
- [ ] Busqué en los demás docs.
- [ ] Mi pregunta tiene propósito operativo (no es curiosidad).
- [ ] No incluyo secrets.
- [ ] Mensaje firmado al pie con fecha + hora + autor.
- [ ] Si requiere decisión humana, lo marco `[REQUIERE GONZALO]`.
