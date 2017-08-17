var mongoose = require('mongoose')
var Git = mongoose.model('Git')

module.exports = {
  create: (request, response) => {
    Git.findOne({name: request.body.name})
      .then(data => {
        if(data) {
          response.json(true)
        } else{
          var user = new Git({name: request.body.name,
                              score: request.body.score,
                              image: request.body.image})
            user.save()
              .then(data => {
                response.json(data)
              })
              .catch(errors => response.status(500).json(errors))
        }
      })
  },

  all: (request, response) => {
    Git.find().sort({score: -1})
      .then(data => response.json(data))
      .catch(errors => response.status(500).json(errors))
  }

}
