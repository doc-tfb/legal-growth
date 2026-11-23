import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Aviso legal · TFB Legal",
  description:
    "Aviso legal de tfblegal.com: titular, objeto, propiedad intelectual, exención de responsabilidad, enlaces externos, jurisdicción y legislación aplicable.",
  alternates: { canonical: "/politicas/aviso-legal/" },
};

export default function AvisoLegalPage() {
  return (
    <>
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
              <strong>Razón social:</strong> [COMPLETAR].<br />
              <strong>NIF / CIF:</strong> [COMPLETAR].<br />
              <strong>Domicilio:</strong> [COMPLETAR].<br />
              <strong>Email de contacto:</strong>{" "}
              <a href="mailto:gonzalo@thefunnelbox.com">gonzalo@thefunnelbox.com</a>.<br />
              <strong>Dominio:</strong> tfblegal.com.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              2. Objeto
            </h2>
            <p>
              El presente sitio web tiene por objeto la presentación de los servicios de
              consultoría, marketing jurídico, formación y ponencias para despachos de abogados
              ofrecidos por el titular. El acceso y navegación del sitio implica la aceptación de
              las presentes condiciones.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, logotipos, diseño, código fuente,
              bases de datos) son titularidad del titular o están bajo licencia. Su uso sin
              autorización expresa queda prohibido fuera de los supuestos legalmente previstos.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              4. Exención de responsabilidad
            </h2>
            <p>
              Los contenidos publicados tienen carácter informativo general y no constituyen
              asesoramiento jurídico ni consultivo personalizado. La aplicación de cualquier
              recomendación requiere análisis específico del caso. El titular no se responsabiliza
              por decisiones adoptadas sin contacto profesional directo.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              5. Enlaces a terceros
            </h2>
            <p>
              El sitio puede incluir enlaces a sitios de terceros. El titular no se responsabiliza
              del contenido, políticas o prácticas de dichos sitios, cuya navegación es bajo
              responsabilidad del usuario.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              6. Modificaciones
            </h2>
            <p>
              El titular se reserva el derecho a modificar el contenido del sitio y las presentes
              condiciones en cualquier momento, publicando la versión actualizada en esta misma
              página.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              7. Legislación y jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de
              cualquier controversia, las partes se someten a los juzgados y tribunales del
              domicilio del titular, salvo que la normativa aplicable establezca otra competencia.
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
