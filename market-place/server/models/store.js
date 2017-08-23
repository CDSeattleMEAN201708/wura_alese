var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  _bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
})

var BikeSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

mongoose.model('User', UserSchema)
mongoose.model('Bike', BikeSchema)
