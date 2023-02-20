/**
 * This file is expected to be used in next.config.js only
 */

const path = require('path')
const merge = require('deepmerge')
const importCwd = require('import-cwd')

function withCoineConfig(nextConfig = {}) {
    const coin = nextConfig.coin || {}
    const { provider } = coin

    if (!provider) {
        throw new Error(
            `The commerce provider is missing, please add a valid provider name`
        )
    }

    // get next.config folder packages/local or packages/cryptocompare
    const coinNextConfig = importCwd(path.posix.join(provider, 'next.config'))

    const config = merge(nextConfig, coinNextConfig)
    const features = merge(
        config.coin.features,
        config.coin[provider]?.features ?? {}
    )

    config.env = config.env || {}

    Object.entries(features).forEach(([k, v]) => {
        if (v) config.env[`COIN_${k.toUpperCase()}_ENABLED`] = true
    })

    return config
}

module.exports = { withCoineConfig }
