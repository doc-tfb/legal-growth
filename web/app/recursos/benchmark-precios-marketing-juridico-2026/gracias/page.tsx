import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import Interactions from "../../../components/Interactions";

export const metadata: Metadata = {
  title: "Benchmark enviado · TFB Legal",
  description: "Revisá tu bandeja de entrada. El PDF llega en menos de 5 minutos.",
  robots: { index: false, follow: false },
};

export default function MagnetGraciasPage() {
  return (
    <>
      <SiteHeader />

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Benchmark enviado</div>
              <h1 className="hero-title">Revisá tu bandeja.</h1>
              <p className="hero-sub">
                El PDF llega en menos de 5 minutos. Si no está, mirá spam o pedíselo directamente
                a <a href="mailto:gonzalo@thefunnelbox.com" style={{ color: "var(--ink)" }}>gonzalo@thefunnelbox.com</a>.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">
                  Agendar consulta para aplicarlo a tu despacho
                </Link>
                <Link href="/blog/" className="btn btn-ghost">Leer el journal</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SiteFooter />
      <Interactions />
    </>
  );
}
