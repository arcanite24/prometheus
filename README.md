# Prometheus
Minimalist REST Framework built on-top of Express and heavily inspired by SailsJS

---------------------

**Installation**
> npm i --save @epsidev/prometheus


**Usage**
1. Clone the _prometheus-scaffold_ repo and _npm install_
2. Config your adapter on the _config/connections.js_ file
3. Attach your connection in the _config/models.js_ file
4. Start creating your models in the _models_ folder, for now, follow the _SailsJS/Waterline ORM_ specs
5. Define your controllers in the _controllers_ folder with a syntax like this:

```javascript
// TestController.js
// Only the files with a name like *Controller.js will be required for loading

module.exports = {

	testAction(req, res) {
    	// Do something
    }
	
}
```
6. Use the following command to start the server
> npm start


-----

**TODO**
1. Prometheus Cli
2. Types of Authentication
3. Middleware capabilities
4. MySQL/Postgre Adapter
5. Docs
6. ...