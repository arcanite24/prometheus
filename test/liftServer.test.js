const prometheus = require('../index')
const path = require('path')

prometheus.models.registerModels(prometheus.app, path.resolve(__dirname, 'models')).then(models => console.log(models))

prometheus.startServer(() => {
  
})