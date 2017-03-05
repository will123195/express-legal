var fs = require('fs')
var Handlebars = require('handlebars')
var dir = __dirname
var template = {
  privacyPolicy: Handlebars.compile(fs.readFileSync(dir + '/privacy-policy.html', 'utf8')),
  termsOfService: Handlebars.compile(fs.readFileSync(dir + '/terms-of-service.html', 'utf8'))
}

var head = fs.readFileSync(dir + '/head.html', 'utf8')

/**
 * Gets an express router that services TOS and privacy policy
 * @param config
 * - companyName
 * - domain
 * - lastModified
 * @returns app
 */
module.exports = function (config) {
  config.COMPANYNAME = config.companyName.toUpperCase()
  config.head = head

  var router = require('express').Router()

  router.get('/privacy-policy', function (req, res, next) {
    res.send(template.privacyPolicy(config))
  })

  router.get('/terms-of-service', function (req, res, next) {
    res.send(template.termsOfService(config))
  })

  return router
}
