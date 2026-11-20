# Pull Request

## Identificador de la tarea

<!-- Formato: iris/SYS-YYYYMMDD-NN o neo/SYS-YYYYMMDD-NN. Enlazar al issue o tarea que autoriza este cambio. -->

Tarea: `[ID]`

## Alcance autorizado

<!-- Qué autorizó Gonzalo explícitamente. Nada fuera de este alcance debería estar en el diff. -->

- [ ] El alcance de esta PR coincide 1:1 con lo autorizado.

## Resumen del diff

<!-- Qué cambia. Qué archivos. Qué comportamiento nuevo o modificado. En viñetas, concreto. -->

-
-

## Tests ejecutados

<!-- Qué probaste. Resultado. Si no hay tests automatizados, qué revisaste a mano. -->

- [ ] Build local pasa (`pnpm build` o equivalente).
- [ ] Lint pasa.
- [ ] Preview de Vercel desplegado y revisado.
- [ ] Copy revisado contra `docs/04-copy/` correspondiente.
- [ ] SEO técnico verificado (title, meta, canonical, OG).
- [ ] Mobile 400px sin scroll horizontal.
- [ ] Core Web Vitals en verde (LCP, CLS, INP).

## Limitaciones conocidas

<!-- Qué NO cubre esta PR. Qué quedó fuera de scope. Qué funciona a medias. -->

-

## Riesgos residuales

<!-- Qué podría romperse. Qué conviene mirar después del merge. Dependencias externas que podrían cambiar. -->

-

## Rollback

<!-- Cómo revertir si algo sale mal en producción. Comando concreto o pasos. -->

```bash
git revert <commit-hash>
```

## Checklist final antes del merge

- [ ] Sin secrets commiteados (API keys, tokens, passwords).
- [ ] Sin lorem ipsum ni placeholders sin resolver.
- [ ] Sin `console.log`, `TODO`, `FIXME` sin ticket asociado.
- [ ] Datos personales de Gonzalo y Carla verificados contra `docs/01-estrategia/01-fundadores.md`.
- [ ] Español neutro en todo el copy público.
- [ ] Revisado por otro agente o colaborador.
- [ ] **`OK para merge` explícito de Gonzalo** en el hilo de la PR.

---

Al mergear esta PR, declaro que leí el [`CLAUDE.md`](../CLAUDE.md) del repo y respeto las reglas de gobernanza.
