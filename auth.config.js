const ORIGN_VERCEL = 'content.oacore.vercel.app'
const ORIGIN_GITHUB = 'oacore.github.io'

const config = {
  origin: [ORIGN_VERCEL, ORIGIN_GITHUB],
  completeUrl: `https://${ORIGN_VERCEL}/api/auth/complete`,
}

module.exports = config
