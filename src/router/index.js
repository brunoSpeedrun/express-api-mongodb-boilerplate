/* eslint-disable import/no-dynamic-require */
const express = require('express')
const fs = require('fs')

function controllerRoute(file) {
  const expressRouter = express.Router()

  // eslint-disable-next-line import/no-dynamic-require
  // eslint-disable-next-line global-require
  const include = require(`./routes/${file}`)

  if (!include.path || !Array.isArray(include.routes)) {
    return null
  }

  include.routes.forEach((route) => {
    if (!route.path || !route.method || !(route.handle instanceof Function)) {
      return
    }

    expressRouter[route.method.toLowerCase()](route.path, route.handle)
  })

  return {
    path: include.path,
    router: expressRouter
  }
}

module.exports = {
  config(app) {
    const routes = fs
      .readdirSync(`${__dirname}/routes`)
      .map(controllerRoute)
      .filter((x) => x !== null)

    routes.forEach((route) => app.use(route.path, route.router))
  }
}
