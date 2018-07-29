const isControllerAction = (modelName, id) => prometheus.info.actions.indexOf(id) >= 0 ? prometheus.info.actionsFunctions[id] : false

module.exports = {

  // Rename to registerModelBlueprints
  registerRoutes(app, modelName, controller) {

    app.get(`${prometheus.config.server.urlBase}/${modelName}`, (req, res) => {
      controller.findAll(global[modelName], req, res)
    })

    app.get(`${prometheus.config.server.urlBase}/${modelName}/:id?`, (req, res) => {
      const isAction = isControllerAction(modelName, req.params.id)
      isAction ? isAction(req, res) : controller.findOne(global[modelName], req, res)
    })

    app.post(`${prometheus.config.server.urlBase}/${modelName}`, (req, res) => {
      controller.create(global[modelName], req, res)
    })

    app.put(`${prometheus.config.server.urlBase}/${modelName}/:id`, (req, res) => {
      const isAction = isControllerAction(modelName, req.params.id)
      isAction ? isAction(req, res) : controller.update(global[modelName], req, res)
    })

    app.delete(`${prometheus.config.server.urlBase}/${modelName}/:id`, (req, res) => {
      isAction ? isAction(req, res) : controller.delete(global[modelName], req, res)
      controller.delete(global[modelName], req, res)
    })

  },

  // Following the Sails spec for controller, every action loads a GET, POST, PUT and DELETE route
  registerControllerBlueprints(app, controllerName, actions) {

    // Iterate over all actions
    for (const actionName in actions) {

      // Shorthand
      const a = actions[actionName]

      // Register all routes for every action
      app.get(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.get(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.post(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.put(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.delete(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      
    }

  }

}