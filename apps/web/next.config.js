const coin = require('./coin.config.json');
const { withCoinConfig } = require('./coin-config');


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  coin,
  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = withCoinConfig(nextConfig)

console.log('next.config.js', JSON.stringify(module.exports, null, 2))