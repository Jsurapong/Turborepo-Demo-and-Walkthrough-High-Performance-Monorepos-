/**
 * This file is expected to be used in next.config.js only
 */

const path = require('path')
const fs = require('fs')
const merge = require('deepmerge')
const prettier = require('prettier')
const core = require('coin/config.cjs')

const PROVIDERS = [
    'local',
    'cryptocompare'
]

function getProviderName() {
    return (
        process.env.COMMERCE_PROVIDER || 'local'
    )
}

function withCoinConfig(nextConfig = {}) {
    const config = merge(
        { coin: { provider: getProviderName() } },
        nextConfig
    )
    const { coin } = config
    const { provider } = coin

    if (!provider) {
        throw new Error(
            `The coin provider is missing, please add a valid provider name or its environment variables`
        )
    }
    if (!PROVIDERS.includes(provider)) {
        throw new Error(
            `The coin provider "${provider}" can't be found, please use one of "${PROVIDERS.join(
                ', '
            )}"`
        )
    }

    return core.withCoineConfig(config)
}

module.exports = { withCoinConfig, getProviderName }
