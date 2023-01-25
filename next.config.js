/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      ...{topLevelAwait: true}
    }
    return config
  },
}

module.exports = nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
// });
// module.exports = withBundleAnalyzer(nextConfig);
