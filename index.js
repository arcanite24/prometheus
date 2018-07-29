const server = require('./core/baseServer')
const models = require('./core/models')
const controllers = require('./core/controllers')
const helpers = require('./core/helpers')

module.exports = {
  startServer: server.startServer,
  app: server.app,
  models,
  controllers,
  helpers
}