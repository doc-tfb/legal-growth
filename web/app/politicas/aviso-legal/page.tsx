import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema } from "../../components/Schema";

export const metadata: Metadata = {
  title: "Aviso legal · TFB Legal",
  description:
    "Aviso legal de tfblegal.com. Titular: The Funnel Box OÜ (Estonia). Objeto, propiedad intelectual, exención de responsabilidad, enlaces, jurisdicción.",
  alternates: { canonical: "/politicas/aviso-legal/" },
  openGraph: {
    title: "Aviso legal · TFB Legal",
    description:
      "Aviso legal de tfblegal.com. Titular, propiedad intelectual y condiciones de uso del sitio.",
    url: "/politicas/aviso-legal/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso legal · TFB Legal",
    description: "Aviso legal de tfblegal.com. The Funnel Box OÜ.",
  },
};

export default function AvisoLegalPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Aviso legal", url: "/politicas/aviso-legal/" },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { label: "Aviso legal" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="eyebrow">Legal</div>
          <h1 className="hero-title">Aviso legal.</h1>
          <p className="hero-sub">
            Información general sobre el titular del sitio, su objeto y condiciones de uso.
            Última actualización: 2026.
          </p>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="prose">
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "0 0 14px" }}>
              1. Titular del sitio
            </h2>
            <p>
              <strong>Razón social:</strong> The Funnel Box OÜ.<br />
              <strong>Marca comercial:</strong> TFB Legal.<br />
              <strong>Forma jurídica:</strong> Osaühing (sociedad limitada estonia).<br />
              <strong>País de constitución:</strong> Estonia.<br />
              <strong>Número de registro (Estonia · Äriregister):</strong>{" "}
              [COMPLETAR · registry code TFB OÜ].<br />
              <strong>VAT EU (si aplica):</strong> [COMPLETAR · VAT EU de TFB OÜ si está registrado].<br />
              <strong>Domicilio social:</strong> [COMPLETAR · dirección completa de TFB OÜ en Estonia].<br />
              <strong>Email de contacto:</strong>{" "}
              <a href="mailto:gonzalo@thefunnelbox.com">gonzalo@thefunnelbox.com</a>.<br />
              <strong>Teléfono:</strong> [COMPLETAR · teléfono de contacto empresarial].<br />
              <strong>Dominio:</strong> tfblegal.com.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              2. Objeto
            </h2>
            <p>
              El presente sitio web tiene por objeto la presentación de los servicios de
              consultoría, marketing jurídico, formación y ponencias para despachos de abogados
              ofrecidos por The Funnel Box OÜ bajo la marca comercial <strong>TFB Legal</strong>.
              El acceso y navegación del sitio implica la aceptación de las presentes condiciones.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, logotipos, diseño, código fuente,
              bases de datos) son titularidad de The Funnel Box OÜ o están bajo licencia. Su uso
              sin autorización expresa queda prohibido fuera de los supuestos legalmente
              previstos.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              4. Exención de responsabilidad
            </h2>
            <p>
              Los contenidos publicados tienen carácter informativo general y no constituyen
              asesoramiento jurídico ni consultivo personalizado. La aplicación de cualquier
              recomendación requiere análisis específico del caso. The Funnel Box OÜ no se
              responsabiliza por decisiones adoptadas sin contacto profesional directo.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              5. Enlaces a terceros
            </h2>
            <p>
              El sitio puede incluir enlaces a sitios de terceros. The Funnel Box OÜ no se
              responsabiliza del contenido, políticas o prácticas de dichos sitios, cuya
              navegación es bajo responsabilidad del usuario.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              6. Modificaciones
            </h2>
            <p>
              The Funnel Box OÜ se reserva el derecho a modificar el contenido del sitio y las
              presentes condiciones en cualquier momento, publicando la versión actualizada en
              esta misma página.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              7. Legislación y jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación estonia, sin perjuicio de la
              normativa imperativa del país de residencia del usuario cuando corresponda. Para la
              resolución de cualquier controversia, las partes se someten a los tribunales
              competentes del domicilio del titular, salvo que la normativa aplicable (en
              particular, en materia de consumo y de protección de datos) establezca otra
              competencia.
            </p>
          </div>

          <div style={{ marginTop: "32px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-soft)" }}>
              Ver también:{" "}
              <Link href="/politicas/politica-de-privacidad/" style={{ color: "var(--ink)", textDecoration: "underline" }}>Privacidad</Link>
              {" · "}
              <Link href="/politicas/politica-de-cookies/" style={{ color: "var(--ink)", textDecoration: "underline" }}>Cookies</Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
