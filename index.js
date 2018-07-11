const server = require('./core/baseServer')
const models = require('./core/models')

module.exports = {
  startServer: server.startServer,
  app: server.app,
  models
}