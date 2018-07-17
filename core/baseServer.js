const express = require('express')
const serverConfig = require('../config/serverConfig')
const debugStrings = require('../config/debugStrings')

// middlewares
const bodyParser = require('body-parser')

const app = express()

// Base Middlewares register
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

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