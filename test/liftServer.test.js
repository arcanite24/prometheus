const prometheus = require('../index')
const path = require('path')

prometheus.models.registerModels(prometheus.app, path.resolve(__dirname, 'models'), 'prometheus-mongo', 'mongodb://admin:metaltrxtrx123A@ds131531.mlab.com:31531/prometheus-test').then(models => {

  prometheus.startServer(() => {


  })

})