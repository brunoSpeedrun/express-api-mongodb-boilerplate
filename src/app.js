const express = require('express')
const dotenvConfig = require('./config/env')
const middleware = require('./config/middleware')
const routes = require('./controllers')

dotenvConfig.config()

const app = express()

middleware.apply(app)

routes.config(app)

module.exports = app
