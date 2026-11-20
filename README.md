# Legal Growth (nombre provisional)

Marca personal doble co-fundada por **Gonzalo Castro** (director de The Funnel Box) y **Carla Fresch Pons** (ex-abogada con más de 10 años en el Poder Judicial de Argentina). Consultor integral de crecimiento para despachos medianos de 5–30 abogados en España, México y Argentina. Cuatro ejes: marketing digital, consultoría estratégica, formación y speaker/ponencias. El hueco de mercado existe porque ningún actor cubre los cuatro bajo una misma marca personal con ejecución real: Eugenia Navarro cubre consultoría y formación pero no ejecuta marketing; las agencias ejecutan sin diagnóstico estratégico. Esta marca une las dos capas y añade a Carla como traductora cultural: conoce cómo piensan los abogados desde adentro. The Funnel Box queda como brazo ejecutor operativo detrás.

---

## Estado del proyecto

**Fase de planificación.** Documentación completa, sin código ni web construida todavía. La decisión de lanzamiento depende de la aprobación final de Gonzalo y Carla sobre naming, presupuesto y bandwidth.

- Setup estimado: **12.000 EUR** (branding + web + fotos + 2 videos + copy + 3 meses ads).
- Operativo año 1: **20.000–30.000 EUR**.
- Primer cliente esperado: **mes 3** vía LinkedIn/network.
- Break-even: **mes 6** con 3–4 retainers.
- Consolidación España: **mes 12**.

Assets de marca:
- **Dossier de marca con fotos existe** — pedir a Gonzalo acceso antes de maquetar páginas que usan retratos.

---

## Estructura del repo

```
legal-growth/
├── README.md                   ← este archivo
├── CLAUDE.md                   ← instrucciones para agentes IA
├── .gitignore
├── docs/
│   ├── 01-estrategia/          ← propuesta de valor, fundadores, mercados, competencia
│   ├── 02-seo/                 ← keyword research completo ES/MX/AR + pillars + content plan
│   ├── 03-web-para-neo/        ← brief técnico para Neo (Grok) + sitemaps + anatomía de páginas
│   ├── 04-copy/                ← copy final listo para producción
│   ├── 05-brand/               ← naming, tono de voz, paleta, elementos visuales
│   └── 06-playbook/            ← playbook 90 días, LinkedIn outreach, lead magnets
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

---

## Cómo usar este repo

### Si sos Neo (Grok) y vas a construir la web

1. Leer **primero** [`docs/03-web-para-neo/00-brief-neo.md`](./docs/03-web-para-neo/00-brief-neo.md).
2. Después [`docs/01-estrategia/00-propuesta-de-valor.md`](./docs/01-estrategia/00-propuesta-de-valor.md) y [`docs/01-estrategia/01-fundadores.md`](./docs/01-estrategia/01-fundadores.md).
3. Repasar todo el contenido de `docs/03-web-para-neo/` y `docs/04-copy/`.
4. Elegir stack según [`docs/03-web-para-neo/01-stack-recomendado.md`](./docs/03-web-para-neo/01-stack-recomendado.md).
5. Construir **sólo la Fase 1 MVP** (13 páginas listadas en [`02-sitemap-fase1-mvp.md`](./docs/03-web-para-neo/02-sitemap-fase1-mvp.md)).
6. Entregar en un repo nuevo (ej. `gonzalocastro-com-website` o el nombre que decida Gonzalo), con **Pull Request**. Nunca push directo a `main`.

### Si sos otro colaborador (diseño, copy, SEO)

1. Leer `docs/01-estrategia/` completo.
2. Ir a la carpeta de tu disciplina:
   - Diseñador → `docs/05-brand/`.
   - Copywriter → `docs/04-copy/`.
   - SEO / contenido → `docs/02-seo/`.
   - Growth / lanzamiento → `docs/06-playbook/`.
3. Cualquier cambio: rama propia + Pull Request + revisión de Gonzalo antes de merge.

### Si sos Gonzalo o Carla revisando

Ver [`docs/01-estrategia/`](./docs/01-estrategia/) para la foto global. Confirmar o corregir cualquier dato personal (bio, fuero específico de Carla, casos usables) en los archivos `04-copy/02-bio-gonzalo.md` y `04-copy/03-bio-carla.md`.

---

## Reglas no negociables

- **Español neutro** en todo lo que publique la marca. Ni "vosotros" ni "vos" porteño.
- **Ningún secret en el repo** (API keys, tokens, credenciales). Las variables sensibles viven en Vercel o el password manager.
- **Nunca push directo a `main`.** Rama + PR + revisión + `OK para merge` explícito de Gonzalo.
- **No inventar datos personales** de Gonzalo ni Carla. Si falta algo, marcarlo como `[COMPLETAR: …]`.
- **Sin emojis en copy público** salvo que Gonzalo lo pida explícitamente.

---

## Mercados priorizados

| Mercado | Volumen B2B | CPC | Eje de entrada | Rol |
|---|---|---|---|---|
| España | ~4.600/mes | €1,45 | Marketing jurídico + Web para despachos | Prioridad 1 |
| México | ~2.300/mes | USD 0,42 | **IA para despachos** (no marketing) | Prioridad 2, pivote |
| Argentina | ~700/mes | USD 0,30–0,70 | LinkedIn + eventos + referidos | Prioridad 3, canal alterno |

Detalle completo en [`docs/02-seo/`](./docs/02-seo/) y [`docs/01-estrategia/02-mercados.md`](./docs/01-estrategia/02-mercados.md).

---

## Contacto

- **Gonzalo Castro** — `gonzalo@thefunnelbox.com`
- **Carla Fresch Pons** — `[COMPLETAR: email de Carla]`
