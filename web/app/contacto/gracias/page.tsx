import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Mensaje recibido · TFB Legal",
  description: "Hemos recibido tu mensaje. Gonzalo o Carla te responde en menos de 24 h hábiles.",
  robots: { index: false, follow: false },
};

export default function ContactoGraciasPage() {
  return (
    <>
      <SiteHeader />

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Mensaje recibido</div>
              <h1 className="hero-title">Gracias.</h1>
              <p className="hero-sub">
                Hemos recibido tu mensaje. Gonzalo o Carla te responde en menos de 24 horas
                hábiles. Mientras tanto, dos cosas que podés hacer:
              </p>
              <div className="hero-actions">
                <Link href="/recursos/benchmark-precios-marketing-juridico-2026/" className="btn btn-primary btn-arrow">
                  Descargar el benchmark 2026
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
