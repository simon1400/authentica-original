/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.NODE_ENV === "production" ? "https://authentica-strapi.hardart.cz" : "https://authentica-strapi.hardart.cz",
    APP_DOMAIN: process.env.NODE_ENV === "production" ? "https://authentica.cz" : "http://localhost:3009"
  },
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
