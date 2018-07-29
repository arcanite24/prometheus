const glob = require('require-glob')
const routes = require('./routes')
const _ = require('lodash')
const helpers = require('./helpers')

module.exports = {

  formatControllerName(name) {
    return name.toLowerCase().replace('controller', '')
  },

  registerControllers(app, path) {
    return new Promise(async (resolve, reject) => {

      try {

        // Require all controllers in provided path with the syntax SomethingController.js
        const controllers = await glob('*Controller.js', {cwd: path})

        // Iterating over each required controller
        for (const controllerName in controllers) {

          // Shorthand
          const c = controllers[controllerName]

          // Register blueprint routes
          routes.registerControllerBlueprints(app, this.formatControllerName(controllerName), c)
          
        }

        const registeredActions = _.flatten(Object.values(controllers).map(c => Object.keys(c)))
        const actionsFunctions = _.merge({}, ...Object.values(controllers))

        resolve({actions: registeredActions, actionsFunctions})
        
      } catch (error) {
        console.log(error)
        reject(error)
      }

    })
  }

}