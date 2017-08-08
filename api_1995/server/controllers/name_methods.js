var mongoose = require('mongoose')
var Name = mongoose.model('Name')

module.exports = {
  show: (request, response) => {
    Name.find({}, (error, names) => {
      response.json(names)
    })
  },
  create: (request, response) => {
    var name = new Name({name: request.params.name})
    name.save(function (error) {
      if (error) {
        response.json(error)
      } else{
        response.redirect('/')
      }
    })
  },
  remove: (request, response) => {
    Name.deleteOne({name: request.params.name}, (error) => {
      if (error) {
        response.json(error)
      } else {
        response.redirect('/')
      }
    })
  },
  show_one: (request, response) => {
    Name.findOne({name: request.params.name}, (error, name) => {
      if (error) {
        response.json(error)
      } else {
        response.json(name)
      }
    })
  }
}
