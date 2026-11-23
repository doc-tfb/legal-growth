# web/ — TFB Legal website

Código del sitio institucional de **TFB Legal**. Vive dentro del repo `legal-growth` (que ya contenía la planificación en `docs/`).

Dominio: [`tfblegal.com`](https://tfblegal.com).

## Stack

- Next.js 15 (App Router, React Server Components)
- React 19
- TypeScript
- CSS en `app/globals.css` (tokens + estilos, sin framework por ahora)
- Deploy: Vercel

## Dev local

```bash
cd web
pnpm install
pnpm dev
```

Abre http://localhost:3000.

## Build

```bash
cd web
pnpm build
pnpm start
```

## Deploy en Vercel

Vercel project apunta a este repo con **Root Directory = `web/`**. Push a la rama por defecto dispara deploy. Cada PR genera un preview URL.

## Estructura

```
web/
├── app/
│   ├── layout.tsx            ← metadata, fonts, structure
│   ├── page.tsx              ← home (Server Component)
│   ├── globals.css           ← tokens + estilos
│   ├── components/
│   │   └── Interactions.tsx  ← client (nav scroll, theme, form)
│   ├── sitemap.ts
│   └── robots.ts
├── public/
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Estado

Fase 1 MVP · Home en construcción. Copy provisorio y placeholders hasta que Neo pase contenido final (textos, fotos, testimonios, logos).

Planificación completa del sitio: [`docs/`](../docs/).
