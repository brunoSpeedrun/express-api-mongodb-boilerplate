const express = require('express')
const dotenvConfig = require('./config/env')
const mongodbConfig = require('./config/mongodb')
const startup = require('./startup')

dotenvConfig.config()
mongodbConfig.connect()

const app = express()

startup.configureApp(app)

module.exports = app
