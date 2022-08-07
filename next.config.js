/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    // APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://localhost:1340",
    APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://authentica-strapi.hardart.cz",
    APP_DOMAIN: process.env.NODE_ENV === "production" ? "http://authentica-org.hardart.cz" : "http://localhost:3009"
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
