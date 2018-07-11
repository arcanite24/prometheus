const serverConfig = require('../config/serverConfig')

module.exports = {

  // TODO: Adjust every route to its corresponding parameters
  registerRoutes(app, modelName, controller) {

    app.get(`${serverConfig.urlBase}/${modelName}`, (req, res) => {
      controller.findAll(modelName, req, res)
    })

    app.get(`${serverConfig.urlBase}/${modelName}/:id`, (req, res) => {
      controller.findOne(modelName, req, res)
    })

    app.post(`${serverConfig.urlBase}/${modelName}`, (req, res) => {
      controller.create(modelName, req, res)
    })

    app.put(`${serverConfig.urlBase}/${modelName}/:id`, (req, res) => {
      controller.update(modelName, req, res)
    })

    app.delete(`${serverConfig.urlBase}/${modelName}/:id`, (req, res) => {
      controller.delete(modelName, req, res)
    })

  }

}