/* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const withTM = require("next-transpile-modules")([
  "@peaze-labs/react",
  "@peaze-labs/ui",
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
