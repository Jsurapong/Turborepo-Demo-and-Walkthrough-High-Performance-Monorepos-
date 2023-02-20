/**
 * This file is expected to be used in next.config.js only
 */

function withEnvConfig(nextConfig = {}) {

  config.env = config.env || {}

  const features = {
    "hero": true,
    "eth": true,
    "doge": false
  }

  Object.entries(features).forEach(([k, v]) => {
    if (v) config.env[`COIN_${k.toUpperCase()}_ENABLED`] = true
  })

  return config
}

module.exports = { withEnvConfig }
