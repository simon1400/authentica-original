/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://localhost:1340"
    // APP_API: process.env.NODE_ENV === "production" ? "http://authentica-strapi.hardart.cz" : "http://authentica-strapi.hardart.cz"
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
