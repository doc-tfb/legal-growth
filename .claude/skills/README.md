# `.claude/skills/` — skills de diseño instaladas

Este directorio contiene las skills de diseño frontend que se cargan automáticamente al abrir una sesión de Claude Code en este repo.

## Instaladas

### `emilkowalski/skills` — Design + Animation (Emil Kowalski)

20 skills de **Emil Kowalski** (design engineer en Vercel/Linear, creador de Vaul y Sonner). Enfocadas en polish de UI, decisiones de animación, "taste" aplicado. Licencia **MIT**.

Origen: <https://github.com/emilkowalski/skills>

Skills incluidas (una por carpeta):

| Skill | Qué hace |
|---|---|
| `emil-design-eng` | Principal. Decisiones de UI y animación con el framework de Emil. |
| `learn-taste` | Recolecta correcciones de diseño de una sesión y las vuelca a `DESIGN.md`. |
| `animate` | Construye una animación desde cero eligiendo curve, duración, propiedades. |
| `animate-expo` | Lo mismo pero para React Native / Expo. |
| `review-animations` | Review estricta de animaciones según las reglas de Emil. |
| `improve-animations` | Audita animaciones del codebase y propone fixes priorizados. |
| `find-animation-opportunities` | Busca lugares que se beneficiarían de motion. |
| `remove-animations` | Elimina animaciones que no aportan (lo opuesto a la anterior). |
| `choreograph` | Coordina varios elementos que animan juntos. |
| `animation-performance` | Arregla animaciones que droppean frames. |
| `animation-vocabulary` | Darle a la IA el vocabulario correcto para pedir animaciones. |
| `apple-design` | Principios de Apple para interface + motion, traducidos a web. |
| `gestures` | Drag, swipe, sheet que siguen el dedo 1:1. |
| `pick-ui-library` | Elegir librería correcta según task. |
| `prototype` | Construye varias versiones de una pieza UI y las compara. |
| `mobile-native` | Hacer que la web se sienta nativa en móvil. |
| `break-ui` | Testing adversarial con datos de borde. |
| `ask-emil` | Router: describís la situación y te dice qué skill usar. |
| `ask-sonner` | Guía para Sonner (toasts). |
| `write-swift` | Para proyectos en Swift (no aplicable a esta web). |

**Perfil de riesgo**: BAJO. Cada skill es un único archivo `SKILL.md`. Cero scripts, cero hooks, cero dependencias. Es prompt engineering empaquetado.

**Para actualizar**:
```bash
cd /tmp && git clone --depth 1 https://github.com/emilkowalski/skills.git && \
  rsync -av --delete skills/skills/ /ruta/al/repo/.claude/skills/ \
  --exclude 'README.md' --exclude 'LICENSE-emilkowalski-skills' \
  --exclude 'README-emilkowalski-skills.md'
```

## NO instaladas (requieren decisión)

### `Leonxlnx/taste-skill` — Design Taste Frontend (Leonxlnx)

Auditada el 23-nov-2026. **No instalada** pendiente de decisión explícita de Gonzalo.

Origen: <https://github.com/Leonxlnx/taste-skill>

**Perfil de riesgo**: MEDIO.

- No es sólo markdown. Es un paquete Node 22+ con scripts activos en `scripts/`:
  - `scripts/gate.mjs` — declarado como **Stop hook** (se ejecuta automáticamente al terminar cada turno de Claude en este repo).
  - `scripts/consistency.mjs` — ejecuta Chrome/Chromium headless para checks visuales.
  - `scripts/perf.mjs`, `scripts/shoot.mjs`, `scripts/start.mjs`, etc.
- Requiere Node 22+ y Chrome/Chromium instalados. Opcional ffmpeg.
- El autor declara: "It installs nothing and uses no API keys."
- Licencia MIT. Sponsors públicos (Vercel OSS, interfaces.dev, Kimi, IMG.LY).

**Por qué no está instalada todavía**: agregar un Stop hook al repo cambia el perfil de ejecución del entorno. Cada vez que Claude termine un turno trabajando sobre este repo, correría código Node + Chrome. Es transparente (el autor lo documenta) y el repo tiene sponsors reputados, pero la decisión de dejar ejecución automática en el entorno la tiene que tomar Gonzalo con información completa.

## Atribución

- `LICENSE-emilkowalski-skills` — MIT License, copyright 2026 Emil Kowalski.
- `README-emilkowalski-skills.md` — README original del repo upstream.

Estas skills son trabajo de terceros reusado bajo MIT. No modificar las `SKILL.md` individuales — si hay que personalizar guidance para TFB Legal, hacerlo en un archivo aparte (ej. `.claude/skills/tfb-legal-taste/SKILL.md`) o en el `CLAUDE.md` del repo.
