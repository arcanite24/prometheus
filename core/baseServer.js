const express = require('express')
const debugStrings = require('../config/debugStrings')
const _ = require('lodash')

// middlewares
const bodyParser = require('body-parser')

const app = express()

// Base Middlewares register
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

function startServer({address, port, version}, callback) {

  // Handle middlewares
  app.use('*', (req, res, next) => {

    

  })

  app.listen(port, address, () => {
    console.log(debugStrings.serverStartMessage(version, port, address))
    callback()
  })

}

module.exports = {
  startServer,
  app
}