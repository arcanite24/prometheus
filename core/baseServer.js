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

function startServer({address, port, version}, callback) {
  app.listen(port, address, () => {
    console.log(debugStrings.serverStartMessage(version, port, address))
    callback()
  })
}

module.exports = {
  startServer,
  app
}