const coin = require('./coin.config.json')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  coin,
  reactStrictMode: true,
}

module.exports = nextConfig