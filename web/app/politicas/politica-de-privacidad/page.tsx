import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Política de privacidad · TFB Legal",
  description:
    "Política de privacidad y protección de datos personales de tfblegal.com conforme al RGPD y la LOPDGDD. Responsable, finalidades, base jurídica, destinatarios, conservación y derechos.",
  alternates: { canonical: "/politicas/politica-de-privacidad/" },
};

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { label: "Privacidad" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="eyebrow">Legal · RGPD</div>
          <h1 className="hero-title">Política de privacidad.</h1>
          <p className="hero-sub">
            Qué datos recogemos, para qué los usamos, con qué base jurídica, cuánto los
            conservamos, con quién los compartimos y qué derechos tenés sobre ellos.
          </p>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="prose">
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "0 0 14px" }}>
              Responsable del tratamiento
            </h2>
            <p>
              <strong>Razón social:</strong> [COMPLETAR].<br />
              <strong>NIF / CIF:</strong> [COMPLETAR].<br />
              <strong>Dirección:</strong> [COMPLETAR].<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:gonzalo@thefunnelbox.com">gonzalo@thefunnelbox.com</a>.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Datos que recogemos
            </h2>
            <p>
              Según el formulario utilizado: nombre, apellido, email, teléfono (opcional), despacho
              o empresa, rol, país, preferencia de contacto y mensaje. Adicionalmente, datos de
              navegación agregados (IP, dispositivo, páginas visitadas) a través de herramientas de
              analítica.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Finalidades
            </h2>
            <ul style={{ margin: "0 0 18px 20px" }}>
              <li>Atender solicitudes de contacto y agendar reuniones iniciales.</li>
              <li>Enviar recursos descargables solicitados (lead magnets).</li>
              <li>Informar puntualmente sobre contenidos y actividades propias.</li>
              <li>Mejorar el sitio mediante analítica agregada.</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Base jurídica
            </h2>
            <p>
              Consentimiento del interesado (art. 6.1.a RGPD) para las comunicaciones comerciales y
              envío de recursos. Interés legítimo del responsable (art. 6.1.f RGPD) para analítica
              agregada y mejora del sitio.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Conservación
            </h2>
            <p>
              Los datos de contacto se conservan mientras no se solicite su supresión o mientras
              exista una relación comercial activa. Los datos de analítica agregada, según la
              política de la herramienta utilizada (habitualmente 14–26 meses para Google
              Analytics).
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Destinatarios
            </h2>
            <p>
              Los datos pueden ser tratados por encargados contratados por el responsable para
              funciones técnicas: proveedor de hosting (Vercel), proveedor de CRM (HubSpot),
              proveedor de email transaccional (Resend), proveedor de analítica (Google). Todos
              ellos operan conforme al RGPD con cláusulas contractuales estándar cuando
              corresponda.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Derechos del interesado
            </h2>
            <p>
              Tenés derecho a acceder, rectificar, suprimir, oponerte, limitar el tratamiento y
              portar tus datos personales. Podés ejercer estos derechos enviando un correo a{" "}
              <a href="mailto:gonzalo@thefunnelbox.com">gonzalo@thefunnelbox.com</a> con el asunto
              &quot;RGPD&quot; y acreditando tu identidad. Asimismo, podés reclamar ante la Agencia
              Española de Protección de Datos ({" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>) si
              considerás vulnerados tus derechos.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Transferencias internacionales
            </h2>
            <p>
              Algunos encargados de tratamiento (Vercel, HubSpot, Google) pueden alojar datos fuera
              del Espacio Económico Europeo. En esos casos, se aplican las cláusulas contractuales
              tipo aprobadas por la Comisión Europea y los mecanismos de adecuación vigentes.
            </p>
          </div>

          <div style={{ marginTop: "32px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-soft)" }}>
              Ver también:{" "}
              <Link href="/politicas/aviso-legal/" style={{ color: "var(--ink)", textDecoration: "underline" }}>Aviso legal</Link>
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
