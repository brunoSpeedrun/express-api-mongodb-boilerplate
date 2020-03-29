const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const expressStatusMonitor = require('express-status-monitor')
const morgan = require('morgan')
const cors = require('cors')
const router = require('../router')

module.exports = {
  apply(app) {
    app.use(cors({
      allowedHeaders: '*',
      credentials: true,
      exposedHeaders: '*',
      methods: ['GET, POST, PUT, PATCH, DELETE, OPTIONS'],
      origin: '*'
    }))
    app.use(helmet())
    app.use(expressStatusMonitor())
    app.use(compression())
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    router.config(app)
  }
}
