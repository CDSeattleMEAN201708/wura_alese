var mongoose = require('mongoose')
var Player = mongoose.model('Player')

module.exports = {
  create: (request, response) => {
    var player = new Player({name: request.body.name})
    player.save()
    .then(data => response.json(data))
    .catch(errors => response.status(500).json(errors))
  },
  all: (request, response) => {
    Player.find()
    .then(data => response.json(data))
    .catch(errors => response.status(500).json(errors))
  },
  delete: (request, response) => {
    console.log(request.body, '******');
    Player.deleteOne({_id: request.params.id})
    .then(data => response.json(data))
    .catch(errors => response.status(500).json(errors))
  }

}
