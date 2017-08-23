const mongoose = require('mongoose')
const User = mongoose.model('User')
const Bike = mongoose.model('Bike')

module.exports = {
  create_user: (request, response) => {
    User.findOne({name: request.body.name})
      .then(data => {
        if(data) {
          response.json({data: 'User already exists', status: false})
        } else {
          var user = new User({name: request.body.name, password: request.body.password})
          user.save()
            .then(data => {
              request.session.user_id = data._id
              response.json({data: data, status: true})
            })
            .catch(error => {  response.json({data: error, status: false})  })
        }
      })
  },
  validate_user: (request, response) => {
    User.findOne({name: request.body.name, password: request.body.password})
      .then(data => {
        if(data) {
          request.session.user_id = data._id
          response.json({data: data, status: true})
        } else {
          response.json({data: 'User doesnt exists', status: false})
        }
      })
  },
  log_out: (request, response) => {
    request.session.destroy()
    response.redirect('/')
  },
  create_bike: (request, response) => {
    User.findOne({_id: request.session.user_id})
      .then(user => {
        if(user) {
          var bike = new Bike({price: request.body.price, description: request.body.description, title: request.body.title, _user: user._id})
          bike.save()
            .then(data => {
              if(data) {
                user._bikes.push(data)
                user.save()
                  .then(saved => {
                    if(saved) {
                      response.json({data: data, status: true})
                    } else { response.json({data: 'Unable to add bike to user', status: false}) }
                  })
              } else {  response.json({data: 'Unable to save bike', status: false}) }
            })
        } else {
          response.redirect('/')
        }
      })
  },
  user_bikes: (request, response) => {
    User.findOne({_id: request.session.user_id})
      .populate('_bikes')
      .exec()
      .then(data => {
        if(data) {
            response.json({data: data, status: true})
        } else {
          response.redirect('/')
        }
      })
  },
  current_user: (request, response) => {
    User.findOne({_id: request.session.user_id})
      .then(data => {
        if(data) {
            response.json({data: data, status: true})
        } else {
          response.redirect('/')
        }
      })
  },
  all_bikes: (request, response) => {
    User.find()
      .populate('_bikes')
      .exec()
      .then(data => {
        if(data) {
            response.json({data: data, status: true})
        } else {
          response.json({data: 'No bikes yet', status: false})
        }
      })
  },
  delete_bike: (request, response) => {
    Bike.remove({_id: request.params.id})
      .then(data => {  response.json(true) })
      .catch(error => {  response.json(false) })
  },
  update_bike: (request, response) => {
    Bike.update({_id: request.params.id}, {$set: {price: request.body.price, description: request.body.description, title: request.body.title}})
      .then(data => { response.json({data: data, status: true}) })
      .catch(error => { response.json({data: error, status: false}) })
  }

}
