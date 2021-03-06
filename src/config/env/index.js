const dotenv = require('dotenv')

function getPathEnv(nodeEnv) {
  if (nodeEnv === 'development') {
    return '.env.development'
  }

  return '.env'
}

module.exports = {
  config() {
    const path = getPathEnv(process.env.NODE_ENV)

    dotenv.config({
      path
    })
  }
}
