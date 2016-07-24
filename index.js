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
  app.use(bleh({
    helpers: config
  }))
  return app
}
