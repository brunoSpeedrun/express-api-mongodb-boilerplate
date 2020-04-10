const express = require('express')
const startup = require('./startup')

const app = express()

startup.configureServices()
startup.configureApp(app)

module.exports = app
