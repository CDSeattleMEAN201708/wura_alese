var mongoose = require('mongoose')
var validate = require('mongoose-validator')
var Schema = mongoose.Schema

var emailValidator = [
  validate({
    validator: 'matches',
    message: 'Your email is invalid from server',
    arguments: /\S+@\S+\.\S+/

  })
]
var passwordValidator = [
  validate({
    validator: 'matches',
    message: 'Your password must have at least 1 number, uppercase and a special character',
    arguments: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%.,*?&])[A-Za-z\d$@$!%*?&]{8,32}/

  })
]

var BikeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, trim: true,  validate: emailValidator},
  password: {type: String, required: true, trim: true,  validate: passwordValidator},
  market: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
}, {timestamps: true})

var Bike = mongoose.model('Bike', BikeSchema)
var User = mongoose.model('User', UserSchema)
