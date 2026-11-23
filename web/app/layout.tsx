import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TFB Legal",
  description:
    "Consultoría de crecimiento para despachos de abogados medianos en España, México y Argentina. Dirigida por Gonzalo Castro y Carla Fresch Pons. Impulsada por The Funnel Box y Brandly.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfblegal.com"),
  openGraph: {
    title: "TFB Legal",
    description:
      "Consultoría de crecimiento para despachos de abogados medianos en España, México y Argentina.",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
  twitter: {
    card: "summary_large_image",
    title: "TFB Legal",
    description:
      "Consultoría de crecimiento para despachos de abogados medianos en España, México y Argentina.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
