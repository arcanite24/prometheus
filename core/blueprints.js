module.exports = {

  controller: {

    // TODO: Handle validations

    async findAll(model, req, res) {
      try {
        const objects = await model.find()
        return res.json(objects)
      } catch (error) {
        console.log(error)
        return res.status(500).json(error)
      }
    },

    // TODO: Adjust error handling
    async findOne(model, req, res) {
      try {
        const object = await model.findOne({[model.primaryKey]: req.params.id})
        return object ? res.json(object) : res.status(404).json({err: 'Not found'})
      } catch (error) {
        console.log(error)
        return res.status(500).json(error)
      }
    },

    async create(model, req, res) {
      try {
        const object = await model.create(req.body)
        return res.status(201).json(object)
      } catch (error) {
        console.log(error)
        return res.json(500).json(error)
      }
    },

    async update(model, req, res) {
      try {
        const objects = await model.update({[model.primaryKey]: req.params.id}, req.body)
        return res.json(objects)
      } catch (error) {
        console.log(error)
        return res.status(500).json(error)
      }
    },

    async delete(model, req, res) {
      try {
        const objects = await model.delete({[model.primaryKey]: req.params.id})
        return res.json(objects)
      } catch (error) {
        console.log(error)
        return res.status(500).json(error)
      }
    },

  }

}