var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  show: (request, response) => {
    User.find({}, (error, users) => {
      console.log(users);
      response.render('index', {users: users, errors: ''})
    })
  },
  create: (request, response) => {
    if (request.body.password != request.body.confirm_password) {
      response.render( 'index', {errors: {'error': {message: 'Password dont match'}}} )
    }
    User.findOne({email: request.body.email}, (error, user) => {

      if (user) {
        response.render( 'index', {errors: {'error': {message: 'Email already exist'}}} )
      } else {
        var user = new User({first_name: request.body.first_name, last_name: request.body.last_name,
                    email: request.body.email, gender: request.body.gender, password: request.body.password})
           user.save(function (error) {
             if (error) {
               response.render('index', {errors: user.errors})
             } else {
               console.log(user);
               response.redirect('/')
             }
           })
      }

    })
  }
}
