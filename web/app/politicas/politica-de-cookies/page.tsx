import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema } from "../../components/Schema";

export const metadata: Metadata = {
  title: "Política de cookies · TFB Legal",
  description:
    "Qué cookies usa tfblegal.com, para qué, con qué proveedores (Google, HubSpot, Vercel) y cómo aceptarlas, rechazarlas o configurarlas.",
  alternates: { canonical: "/politicas/politica-de-cookies/" },
  openGraph: {
    title: "Política de cookies · TFB Legal",
    description:
      "Cookies técnicas, analíticas y de marketing en tfblegal.com. Consent Mode v2.",
    url: "/politicas/politica-de-cookies/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de cookies · TFB Legal",
    description: "Cookies y Consent Mode v2 en tfblegal.com.",
  },
};

export default function CookiesPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Cookies", url: "/politicas/politica-de-cookies/" },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { label: "Cookies" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="eyebrow">Legal · Cookies</div>
          <h1 className="hero-title">Política de cookies.</h1>
          <p className="hero-sub">
            Qué cookies usamos, para qué, con qué proveedores y cómo aceptarlas, rechazarlas o
            configurarlas en cualquier momento desde el banner de cookies.
          </p>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="prose">
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "0 0 14px" }}>
              Qué es una cookie
            </h2>
            <p>
              Una cookie es un pequeño fichero de texto que un sitio web guarda en tu navegador al
              visitarlo. Se utilizan para recordar información sobre tu visita, medir cómo se usa
              el sitio y, en su caso, mostrar contenido relevante.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Responsable
            </h2>
            <p>
              <strong>The Funnel Box OÜ</strong> (marca comercial TFB Legal). Datos de contacto en
              el <Link href="/politicas/aviso-legal/">aviso legal</Link>.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Tipos de cookies que usamos
            </h2>
          </div>

          <div className="kv-table" style={{ marginTop: "16px" }}>
            <div className="kv-row">
              <div className="kv-k">Técnicas</div>
              <div className="kv-v">
                Necesarias para el funcionamiento básico del sitio (preferencia de tema, estado del
                banner de cookies). Servidas por el propio dominio y por Vercel (hosting). No
                requieren consentimiento.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Analíticas</div>
              <div className="kv-v">
                Google Analytics 4 vía Google Tag Manager (Google LLC). Miden visitas agregadas y
                comportamiento de navegación para mejorar el sitio. Requieren consentimiento.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Marketing / CRM</div>
              <div className="kv-v">
                HubSpot Inc. — cookies de tracking para atribuir conversiones a canales de origen.
                Requieren consentimiento.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Terceros · Social</div>
              <div className="kv-v">
                Si se activa Meta Pixel u otros píxeles sociales, se detallarán aquí con su
                finalidad. Actualmente: no activos.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">CDN y hosting</div>
              <div className="kv-v">
                Vercel Inc. y Google Fonts (Google LLC) pueden colocar cookies técnicas para
                entrega de contenido y tipografías.
              </div>
            </div>
          </div>

          <div className="prose" style={{ marginTop: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "0 0 14px" }}>
              Consentimiento
            </h2>
            <p>
              Al entrar por primera vez al sitio se muestra un banner con las opciones de aceptar,
              rechazar o configurar las cookies no estrictamente necesarias. El sitio implementa
              Google Consent Mode v2: hasta que no aceptes explícitamente, las cookies analíticas y
              de marketing funcionan en modo anónimo o están desactivadas.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Cómo cambiar tus preferencias
            </h2>
            <p>
              Podés modificar tu consentimiento en cualquier momento desde el enlace
              &quot;Cookies&quot; del pie del sitio, que reabre el banner. También podés borrar
              las cookies existentes desde las opciones de tu navegador.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", margin: "32px 0 14px" }}>
              Conservación
            </h2>
            <p>
              Las cookies tienen una duración variable según su proveedor y finalidad. Las
              analíticas típicamente conservan datos agregados entre 14 y 26 meses. Las técnicas
              expiran al cerrar sesión o tras períodos cortos.
            </p>
          </div>

          <div style={{ marginTop: "32px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-soft)" }}>
              Ver también:{" "}
              <Link href="/politicas/aviso-legal/" style={{ color: "var(--ink)", textDecoration: "underline" }}>Aviso legal</Link>
              {" · "}
              <Link href="/politicas/politica-de-privacidad/" style={{ color: "var(--ink)", textDecoration: "underline" }}>Privacidad</Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
