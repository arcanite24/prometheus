const express = require('express')
const serverConfig = require('../config/serverConfig')
const debugStrings = require('../config/debugStrings')

const app = express()

function startServer(callback) {
  app.listen(serverConfig.defaultPort, serverConfig.defaultAddress, () => {
    console.log(debugStrings.serverStartMessage(serverConfig.version, serverConfig.defaultPort, serverConfig.defaultAddress))
    callback()
  })
}

module.exports = {
  startServer,
  app
}