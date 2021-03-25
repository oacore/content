const {
  createVercelCompleteHandler
} = require('netlify-cms-oauth-provider-node')

const config = require('../../auth.config')

module.exports = createVercelCompleteHandler(config, { useEnv: true })
