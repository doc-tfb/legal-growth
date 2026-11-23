import type { NextConfig } from "next";

const TFB_URL = "https://thefunnelbox.com/";

const config: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/casos/gce-gestores-concursales",
        destination: TFB_URL,
        permanent: true,
      },
      {
        source: "/casos/gce-gestores-concursales/",
        destination: TFB_URL,
        permanent: true,
      },
      {
        source: "/casos/orj-orejas-abogados",
        destination: TFB_URL,
        permanent: true,
      },
      {
        source: "/casos/orj-orejas-abogados/",
        destination: TFB_URL,
        permanent: true,
      },
    ];
  },
};

export default config;
