const express = require('express')
const dotenvConfig = require('./config/env')
const mongodbConfig = require('./config/mongodb')
const middleware = require('./config/middleware')

dotenvConfig.config()
mongodbConfig.connect()

const app = express()

middleware.apply(app)

module.exports = app
