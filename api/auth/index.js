const { createVercelBeginHandler } = require('netlify-cms-oauth-provider-node')

const config = require('../../auth.config')

module.exports = createVercelBeginHandler(config, { useEnv: true })
