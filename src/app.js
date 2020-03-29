const express = require('express')
const dotenvConfig = require('./config/env')
const middleware = require('./config/middleware')

dotenvConfig.config()

const app = express()

middleware.apply(app)

module.exports = app
