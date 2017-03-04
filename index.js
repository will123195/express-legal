var express = require('express')
var bleh = require('bleh')

/**
 * Gets an express app that services TOS and privacy policy
 * @param config
 * - companyName
 * - domain
 * - lastModified
 * @returns app
 */
module.exports = function (config) {
  var app = express()
  config.COMPANYNAME = config.companyName.toUpperCase()

  var root = __dirname

  // because npm > 3.x has flat node_modules
  var paths = __dirname.split('node_modules/')
  if (paths.length >= 3) {
    root = [paths[0], paths[paths.length - 1]].join('node_modules/')
  }

  console.log('[express-legal] root:', root)

  app.use(bleh({
    helpers: config,
    root: root,
    dist: 'public/dist/legal'
  }))
  return app
}
