module.exports = {

  // Rename to registerModelBlueprints
  registerRoutes(app, modelName, controller) {

    app.get(`${prometheus.config.server.urlBase}/${modelName}`, (req, res) => {
      controller.findAll(global[modelName], req, res)
    })

    app.get(`${prometheus.config.server.urlBase}/${modelName}/:id?`, (req, res) => {
      controller.findOne(global[modelName], req, res)
    })

    app.post(`${prometheus.config.server.urlBase}/${modelName}`, (req, res) => {
      controller.create(global[modelName], req, res)
    })

    app.put(`${prometheus.config.server.urlBase}/${modelName}/:id`, (req, res) => {
      controller.update(global[modelName], req, res)
    })

    app.delete(`${prometheus.config.server.urlBase}/${modelName}/:id`, (req, res) => {
      controller.delete(global[modelName], req, res)
    })

  },

  // Following the Sails spec for controller, every action loads a GET, POST, PUT and DELETE route
  registerControllerBlueprints(app, controllerName, actions) {

    // Iterate over all actions
    for (const actionName in actions) {

      // Shorthand
      const a = actions[actionName]

      // FIXME: Controller routes aren't working, probably because model blueprints with the .findOne() route
      // Register all routes for every action
      app.get(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.post(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.put(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      app.delete(`${prometheus.config.server.urlBase}/${controllerName}/${actionName}/:id?`, a)
      
    }

  }

}