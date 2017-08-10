var mongoose = require('mongoose')
var validate = require('mongoose-validator');
var bcrypt = require('bcrypt')

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 100],
    message: 'Your name should be more than {ARGS[0]} characters'
  })
]
var emailValidator = [
  validate({
    validator: 'matches',
    message: 'Your email is invalid',
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

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    validate: nameValidator
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    validate: nameValidator
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: emailValidator
  },
  gender: {
    type: String,
    enum: ['Female', 'Male', 'Mix of Both'],
    trim: true,
    default: 'Mix of Both'
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: passwordValidator
  },
}, {timestamps: true})
UserSchema.methods.hash_password = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}
UserSchema.pre('save', function (done) {
  this.password = this.hash_password(this.password)
  done()
})
var User = mongoose.model('User', UserSchema)
