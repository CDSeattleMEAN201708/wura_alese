var mongoose = require('mongoose')
var User = mongoose.model('User')
var Bike = mongoose.model('Bike')


module.exports = {
  create_user: (request, response) => {
    User.findOne({email: request.body.email})
      .then(data => {
        if (data) {
          response.json({message: 'Email already exist from server'})
        } else {
          var user = new User({
            first_name: request.body.first_name, last_name: request.body.last_name,
            email: request.body.email, password: request.body.password
          })
          user.save()
            .then(data => {
              request.session.user_id = data._id
              response.json({data: data, status: true})
            })
            .catch(error => {response.json({data: error.errors, status: false})})
        }
      })
  },
  log_in: (request, response) => {
    User.findOne({email: request.body.email})
      .then(data => {
        if(data) {
          if(request.body.password == data.password) {
            request.session.user_id = data._id
            response.json({data: data, status: true})
          } else {
            response.json({data: 'Invalid Credentials!!!', status: false})
          }
        } else{
          response.json({data: 'Invalid Credentials!!!', status: false})
        }
      })
  },
  create_bike: (request, response) => {
    User.findOne({_id: request.session.user_id})
      .then(user => {
        console.log(user);
        var bike = new Bike({
          title: request.body.title, description: request.body.description,
          price: request.body.price, location: request.body.location,
          _user: user._id
        })
        bike.save()
          .then(data => {
            user.market.push(data)
            user.save()
              .then(saved => {
                if(saved) {
                  response.json(data)
                } else {
                  response.json({data: 'Invalid Saving', status: false})
                }
              })
          })
          .catch(error => {response.json({data: 'Invalid Bike', status: false})})
      })
      .catch(err => response.status(500).json(err))
  },
  user_bike: (request, response) => {
    Bike.find({_user: request.session.user_id})
      .then(data => {
        response.json(data)
      })
      .catch(err => response.status(500).json(err))
  },
  update_bike: (request, response) => {
    Bike.updateOne({_id: request.body._id}, {
      title: request.body.title, description: request.body.description,
      price: request.body.price, location: request.body.location
    } )
    .then(data => {
      response.json(data)
    })
    .catch(err => response.status(500).json(err))
  }


}
