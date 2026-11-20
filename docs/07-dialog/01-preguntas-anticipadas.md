# Preguntas anticipadas · FAQ para Neo

Anticipo 16 dudas frecuentes que Neo puede tener cuando empiece a construir. Revisá esta lista antes de abrir issue o escribir al hilo vivo. Si tu duda no está acá, ahí sí preguntás.

---

### ¿Qué dominio uso si todavía no está comprado?

**Respuesta**: Gonzalo decide el dominio final tras ver las propuestas de `docs/05-brand/00-naming.md`. Hasta entonces, usar placeholder `[DOMINIO_PENDIENTE].com` en el código y centralizarlo en la variable de entorno `NEXT_PUBLIC_SITE_URL`. Cuando llegue la decisión, se cambia en un solo sitio.

**Referencia**: `docs/05-brand/00-naming.md` + `docs/03-web-para-neo/01-stack-recomendado.md`.

**Si queda duda**: avisá a Gonzalo con un ping directo para acelerar la decisión de naming.

---

### ¿Ya hay branding definido (logo, paleta, tipografía)?

**Respuesta**: no definitivo todavía. En `docs/05-brand/` hay propuestas (paleta, tipografía) que podés usar como base. **Proponé tu versión inicial con lo que haya y etiquetala como "borrador para aprobación".** Se refina con el diseñador externo después.

**Referencia**: `docs/05-brand/02-paleta-tipografia.md` + `docs/05-brand/03-elementos-visuales.md`.

**Si queda duda**: agrega un screenshot del preview a un issue con label `branding-input-necesario`.

---

### ¿El blog va con CMS desde el día 1 o hardcodeado?

**Respuesta**: **Sanity CMS desde el día 1**. Justificación completa en `01-stack-recomendado.md`. Neo crea un project Sanity nuevo (no reutilizar el de GCE `01j1rgci`), documenta el projectId en `.env.example` sin commitear el `.env` real.

**Referencia**: `docs/03-web-para-neo/01-stack-recomendado.md`.

**Si queda duda**: project Sanity gratuito es suficiente para arrancar. Escalamos si pasa el límite.

---

### ¿Formulario de contacto a dónde envía el lead?

**Respuesta**: HubSpot (Gonzalo tiene cuenta en TFB). Pedí a Gonzalo el `HUBSPOT_PORTAL_ID` y el access token para API. Mientras tanto, podés armar el endpoint stub que logea a consola + manda email vía Resend. Se completa la integración HubSpot en un PR aparte.

**Referencia**: `docs/03-web-para-neo/13-tracking-analitica.md` + `docs/03-web-para-neo/10-anatomia-contacto.md`.

**Si queda duda**: nunca perder un lead — si HubSpot falla, el email a Gonzalo debe seguir enviándose.

---

### ¿Las fotos de Gonzalo y Carla ya existen?

**Respuesta**: **sí**. Gonzalo tiene un dossier con fotos profesionales y otros materiales de marca trabajados previamente. Antes de maquetar las páginas que las usan (Home, `/nosotros`, bios individuales, página de speaker), pedile a Gonzalo que suba el dossier a `/public/dossier/` del repo o que te pase el link del drive compartido para que las descargues y optimices (convertí a WebP + AVIF, tamaños responsive).

**Referencia**: `docs/05-brand/03-elementos-visuales.md` para el uso estilístico (crop, tratamiento, dónde van).

**Si queda duda**: abrí issue `assets-fotos` listando qué fotos necesitás exactamente por página y pediselas a Gonzalo.

---

### ¿Qué testimonios reales puedo usar?

**Respuesta**: dos clientes de TFB sobre los que trabaja la marca: **Mónica Usón o Leticia Montalvo (GCE)** y **Orejas (ORJ)**. **El texto del testimonio no existe todavía** — pide una cita formal antes de publicar. Mientras tanto, marcá como `[COMPLETAR: pedir cita a Mónica/Leticia/Orejas]` y usá placeholder visual.

**Referencia**: `docs/03-web-para-neo/08-anatomia-casos.md` (requiere autorización explícita antes de publicar).

**Si queda duda**: nunca inventar la cita. Preferible omitir testimonio que inventar uno.

---

### ¿Las cifras de casos de éxito están validadas?

**Respuesta**: **no todavía**. GCE acaba de migrar al nuevo sitio (noviembre 2026), aún no hay data GSC consolidada post-migración. Usá rangos placeholder `[X]% / [Y] leads` y documentá como "se completa en 3–6 meses". Nunca publicar cifras sin validar con el cliente.

**Referencia**: `docs/03-web-para-neo/08-anatomia-casos.md`.

**Si queda duda**: omitir sección de métricas antes que inventar.

---

### ¿Idioma de la Fase 1?

**Respuesta**: **español de España** únicamente. No incluir language switcher todavía. Preparar la arquitectura i18n (ver `14-i18n-multipais.md`) pero no exponerla al usuario. Las variantes `/mx/` y `/ar/` no se construyen en MVP.

**Referencia**: `docs/03-web-para-neo/14-i18n-multipais.md`.

**Si queda duda**: la URL raíz `/` sirve contenido ES default; no hay prefijo `/es/` en MVP (se añade en Fase 3).

---

### ¿GTM container ID de la nueva marca?

**Respuesta**: **no existe aún**. Pedí a Gonzalo que cree un container nuevo (NO reutilizar el de TFB — cada marca con su container). Mientras tanto, usar variable de entorno `NEXT_PUBLIC_GTM_ID` con placeholder. Si Gonzalo no lo crea en el primer sprint, trabajá en modo development con un ID fake y arreglalo antes del deploy a producción.

**Referencia**: `docs/03-web-para-neo/13-tracking-analitica.md`.

**Si queda duda**: avisá a Gonzalo en issue `gtm-pendiente`.

---

### ¿GA4 property ID?

**Respuesta**: igual que GTM, property nueva. Pedir a Gonzalo. Variable de entorno `NEXT_PUBLIC_GA4_ID` con placeholder hasta recibir el real.

**Referencia**: `docs/03-web-para-neo/13-tracking-analitica.md`.

---

### ¿Cómo manejo el lead magnet (benchmark precios)?

**Respuesta**: PDF descargable + formulario de captura. **El PDF todavía no existe** — Neo arma la página de captura + formulario + flujo técnico (HubSpot + Resend) con placeholder de PDF. Cuando el PDF esté listo, se sube a `/public/recursos/benchmark-precios-marketing-juridico-2026.pdf` y se actualiza la variable `LEAD_MAGNET_PDF_URL`.

**Referencia**: `docs/03-web-para-neo/11-anatomia-lead-magnet.md` + `docs/06-playbook/03-lead-magnets.md`.

**Si queda duda**: página puede salir con placeholder "PDF en producción · disponible en breve" si no llega a tiempo.

---

### ¿La metodología tiene nombre propio?

**Respuesta**: **no decidido todavía**. Ver `docs/05-brand/00-naming.md`. En código usar placeholder `[NOMBRE_METODOLOGIA]`. Pedir decisión explícita a Gonzalo antes del lanzamiento público.

**Referencia**: `docs/04-copy/08-metodologia.md` + `docs/05-brand/00-naming.md`.

---

### ¿Hay restricciones legales para las claims?

**Respuesta**: **sí**.

- **Nunca prometer resultados específicos** ("vas a conseguir X clientes"). Usar lenguaje de capacidad ("nuestro proceso está diseñado para…").
- **Especial cuidado si se menciona AR**: el **CPACF** (Colegio Público de la Abogacía CABA) restringe publicidad comparativa. Aunque la Fase 1 no publica en AR, los textos evergreen podrían leerse desde allí. No hacer copy comparativo público.
- **RGPD en formularios y lead magnets**: consentimiento explícito, enlace a política de privacidad, no pre-marcar casillas.

**Referencia**: `docs/02-seo/03-kw-argentina.md` + `docs/05-brand/01-tono-de-voz.md`.

---

### ¿El copy de las páginas ya está escrito o lo hago yo?

**Respuesta**: **lo escribís vos**. La carpeta `docs/04-copy/` tiene borradores sugeridos que uso como brief para que entiendas los ángulos, los mensajes clave y la estructura recomendada de cada página. No es copy de producción. Vos decidís el tono y las palabras finales, con aprobación de Gonzalo y Carla.

**Referencia**: `docs/04-copy/README.md` + `docs/03-web-para-neo/00-brief-neo.md`.

**Si queda duda**: revisá con Gonzalo el tono exacto antes del primer PR que exponga copy visible al usuario.

---

### ¿Qué pasa si encuentro un bug o quiero refactorizar algo que ya documenté?

**Respuesta**: abrir issue con label `refactor-propuesto` y proponer antes de ejecutar. Nada de refactors silenciosos. La propuesta debe explicar qué cambia, por qué, y qué impacto tiene en SEO (que decide Iris) o en marca (que deciden Gonzalo y Carla).

**Referencia**: `CLAUDE.md` del root, sección división de responsabilidades.

---

### ¿Puedo usar emojis en el UI?

**Respuesta**: **no**, salvo que Gonzalo lo pida explícito. Preferencia del usuario documentada en `CLAUDE.md`. Para iconografía usar sets vectoriales (Lucide, Heroicons) según `docs/05-brand/03-elementos-visuales.md`.

**Referencia**: `CLAUDE.md` + `docs/05-brand/01-tono-de-voz.md`.

---
