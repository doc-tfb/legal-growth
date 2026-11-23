import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfblegal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TFB Legal · Consultoría para despachos de abogados",
    template: "%s · TFB Legal",
  },
  description:
    "Marketing, consultoría estratégica, formación y speaker para despachos de abogados medianos en España, México y Argentina. Ejecución operativa, atribución real.",
  applicationName: "TFB Legal",
  authors: [{ name: "The Funnel Box OÜ", url: SITE_URL }],
  creator: "The Funnel Box OÜ",
  publisher: "The Funnel Box OÜ",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
    url: SITE_URL,
    title: "TFB Legal · Consultoría para despachos de abogados",
    description:
      "Marketing, consultoría estratégica, formación y speaker para despachos medianos en España, México y Argentina.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TFB Legal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TFB Legal · Consultoría para despachos de abogados",
    description:
      "Marketing, consultoría, formación y speaker para despachos medianos en ES · MX · AR.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  category: "business",
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
