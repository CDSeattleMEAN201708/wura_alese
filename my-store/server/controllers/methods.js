var mongoose = require('mongoose')
var User = mongoose.model('User')
var Bike = mongoose.model('Bike')

module.exports = {
  create_user: (request, response) => {
    User.findOne({email: request.body.email})
      .then(data => {
        if(data) {
          response.json({data: 'Email already exist', status: false})
        } else {
          var user = new User({
            name: request.body.name, email: request.body.email, password: request.body.password
          })
          user.save()
            .then(data => {
              console.log(data.name);
              request.session.user_id = user._id
              response.json({data: data, status: true})
            })
            .catch(error => {
              response.json({data: error.errors, status: false})
            })
        }
      })
  },
  log_in: (request, response) => {
    User.findOne({email: request.body.email})
      .then(data => {
        if(data) {
          if(request.body.password == data.password){
            request.session.user_id = data._id
            response.json({data: data, status: true})
          } else {
            response.json({data: 'Invalid Credentials', status: false})
          }
        } else {
          response.json({data: 'Invalid Credentials', status: false})
        }
      })
  },
  log_out: (request, response) => {
    console.log('Im hereeeeee *~*~*~*~*');
    // request.session.destroy()
    response.redirect('/')
  },
  create_bike: (request, response) => {
    var bike = new Bike({title: request.body.title, description: request.body.description, _user: request.session.user_id})
    bike.save()
      .then(data => {
        if(data) {
          User.findOne({_id: request.session.user_id})
            .then(user => {
              user.market.push(data)
              user.save()
                .then(saved => {
                  response.json({data: data, status: true})
                })
                .catch(error => {
                  response.json({data: error, status: false})
                })
            })
            .catch(error => {
              response.json({data: error, status: false})
            })
        } else {
          response.json({data: 'Invalid bike', status: false})
        }
      })
  },
  user_bikes: (request, response) => {
    User.findOne({_id: request.session.user_id})
      .populate('market')
      .exec()
      .then(data => response.json({data: data, status: true}))
      .catch(error => response.json({data: error, status: false}))

  },
  update: (request, response) => {
    Bike.update({_id: request.params.id}, {$set: {title: request.body.title, description: request.body.description}})
      .then(data => response.json({data: data, status: true}))
      .catch(error => response.json({data: error, status: false}))
  },
  delete: (request, response) => {
    Bike.remove({_id: request.params.id})
    .then(data => {
      response.json({data: data, status: true})
    })
    .catch(error => response.json({data: error, status: false}))
  },
  all_bikes: (request, response) => {
    User.find({})
      .populate('market')
      .exec()
      .then(data => {
        console.log(data);
        response.json(data)
      })
      .catch(error => {
        console.log(error);
        response.json(false)
      })
  },
  find_user: (request, response) => {
    response.json(request.session.user_id)
  },
  random_bike: (request, response) => {
    Bike.find()
    .then(data => response.json({data: data, status: true}))
    .catch(error => response.json({data: error, status: false}))
  }
}
