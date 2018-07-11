const glob = require('require-glob')
const serverConfig = require('../config/serverConfig')
const debugStrings = require('../config/debugStrings')
const routes = require('./routes')
const blueprints = require('./blueprints')

module.exports = {

  types: [
    'string',
    'number',
    'boolean'
  ],

  registerModels(app, path) {
    return new Promise(async (resolve, reject) => {

      try {

        // Requiring all the models on the provided path
        const models = await glob('*.js', {cwd: path})

        // Iterating over each required model
        for (const model in models) {

          // Debug Info
          if (serverConfig.debug) console.log(debugStrings.debugMessage(`${model} model successfully registered`, 'debug'))

          // Validate model & attributes
          for (const attrName in models[model].attributes) {

            let attribute = models[model].attributes[attrName]

            // Transform all the attributes to the object notation
            if (typeof attribute == 'string') attribute = {type: attribute}
            
            
          }

          // Register Blueprints routes
          // TODO: Load default blueprint controller from another file
          routes.registerRoutes(app, model, blueprints.controller)

          // Register Models

          // Handle connectors and ORM
          
        }

        resolve(Object.keys(models))
        
      } catch (error) {
        console.log(error)
        reject(error)
      }

    })
  }
  
}