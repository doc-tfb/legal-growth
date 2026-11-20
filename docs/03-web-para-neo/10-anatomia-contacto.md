# Anatomía · Contacto (`/contacto/`)

Página de conversión principal. Simplicidad absoluta. Dos vías: agendar directo (Calendly) o enviar mensaje (formulario).

---

## Estructura

### 1. Hero corto
- H1: "Hablemos".
- Subtitle: "Agenda una consulta de 30 minutos sin compromiso. Diagnóstico inicial gratuito."

### 2. Dos vías de conversión (lado a lado)

**Columna A · Agenda directa**
- Widget Calendly embebido (o link si el embed afecta performance).
- Dos opciones:
  - "Reunión con Gonzalo" (para temas de marketing, SEO, Ads, IA, ejecución).
  - "Reunión con Carla" (para temas de gestión, cultura del despacho, Argentina).
- Disclaimer: "La primera reunión es gratuita, 30 minutos, por videollamada."

**Columna B · Formulario**
- Campos:
  - Nombre (obligatorio).
  - Apellido (obligatorio).
  - Email (obligatorio, validación).
  - Despacho / empresa (obligatorio).
  - Rol (opcional: socio-director, abogado, marketing, otro).
  - País (select: España, México, Argentina, otro).
  - Teléfono (opcional, con prefijo).
  - Mensaje (obligatorio, textarea, 300 caracteres mín recomendado).
  - Checkbox RGPD: "He leído y acepto la política de privacidad".
- Botón submit: "Enviar mensaje".
- Submit envía a HubSpot + email a `gonzalo@thefunnelbox.com` (+ `[COMPLETAR: email de Carla]`) vía Resend.
- Redirección post-submit a `/contacto/gracias/` (noindex).

### 3. Datos de contacto directo
- Emails:
  - Gonzalo: `gonzalo@thefunnelbox.com`
  - Carla: `[COMPLETAR: email de Carla]`
- LinkedIn Gonzalo y Carla.
- Ciudad base: `[COMPLETAR: Madrid / Barcelona / otra]`.

### 4. Qué esperar de la primera reunión
- 3–4 bullets cortos:
  - "Entenderemos tu despacho (5 minutos)."
  - "Diagnosticaremos el reto de crecimiento principal (10 minutos)."
  - "Propondremos 2–3 palancas accionables (10 minutos)."
  - "Decidís si querés avanzar o no (5 minutos)."

### 5. Preguntas frecuentes (opcional, 3–5 FAQ)
- "¿La primera reunión es gratuita?" → Sí.
- "¿Puedo traer a mi socio?" → Sí.
- "¿Qué pasa si no quiero avanzar después?" → Nada; te quedas con el diagnóstico.
- "¿Trabajan con despachos fuera de España?" → Sí, también con México y Argentina.

### 6. Footer con enlaces legales
- Política de privacidad.
- Política de cookies.
- Aviso legal.

---

## `/contacto/gracias/` (confirmación post-envío)

- `noindex, nofollow` en meta robots.
- H1: "Gracias por escribirnos".
- Mensaje: "Hemos recibido tu mensaje. Te responderemos en menos de 24h hábiles. Mientras tanto, [agenda directo en Calendly / descarga el benchmark]."
- CTAs: Calendly + lead magnet.
- Evento GTM: `form_submit` + `event_category: contact` + `conversion_id: contact_form`.
- Evento Meta Pixel: `Lead`.

---

## Consideraciones técnicas

### Metadata
- Title: "Contacto · Agenda una consulta de 30 minutos".
- Meta description: "Agenda una consulta sin compromiso. Diagnóstico inicial gratuito con Gonzalo o Carla."
- Schema.org `ContactPage` + `Organization`.

### Performance
- Calendly embebido lazy load (carga sólo cuando el usuario llega a la sección).
- Formulario sin librerías pesadas (React Hook Form o nativo).

### Submit del formulario (flujo técnico)

1. Cliente envía datos a `POST /api/contact`.
2. API route valida con Zod.
3. API route llama a HubSpot API para crear/actualizar contacto con propiedades + nota de mensaje.
4. API route envía email vía Resend a `gonzalo@thefunnelbox.com` + copia a Carla.
5. API route responde 200.
6. Cliente redirige a `/contacto/gracias/`.
7. En `/contacto/gracias/` dispara evento GTM `form_submit`.

Si HubSpot falla, el email a Gonzalo sigue enviándose. Nunca perder un lead.

### Accesibilidad
- Labels asociados a cada input.
- Mensajes de error inline.
- Focus en el primer campo en error tras submit fallido.
- Botón submit con `aria-busy="true"` durante envío.

### Anti-spam
- Honeypot invisible.
- Rate limiting en el API route (max 3 submits / IP / hora).
- Validación email obligatoria.
- Opcional: hCaptcha o reCAPTCHA v3 si entra spam real (evitar añadirlo prematuramente).

### Variables de entorno
```
HUBSPOT_PORTAL_ID
HUBSPOT_ACCESS_TOKEN
HUBSPOT_FORM_ID_CONTACT (opcional si se usa HubSpot Forms embed)
RESEND_API_KEY
CONTACT_NOTIFICATION_EMAIL_PRIMARY   # gonzalo@thefunnelbox.com
CONTACT_NOTIFICATION_EMAIL_SECONDARY # email de Carla
```
