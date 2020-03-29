const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const expressStatusMonitor = require('express-status-monitor')
const morgan = require('morgan')

module.exports = {
  apply(app) {
    app.use(helmet())
    app.use(expressStatusMonitor())
    app.use(compression())
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
  }
}
