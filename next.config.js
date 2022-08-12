/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  env: {
    // APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://localhost:1340",
    APP_API: process.env.NODE_ENV === "production" ? "https://authentica-strapi.hardart.cz" : "https://authentica-strapi.hardart.cz",
    APP_DOMAIN: process.env.NODE_ENV === "production" ? "https://authentica-org.hardart.cz" : "http://localhost:3009"
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextTranslate(nextConfig)
