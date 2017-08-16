var mongoose = require('mongoose')
var PlayerSchema = new mongoose.Schema({
  name: String
}, {timestamps: true})

mongoose.model('Player', PlayerSchema)
