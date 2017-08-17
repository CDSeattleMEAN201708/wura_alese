var mongoose = require('mongoose')
var GitSchema = new mongoose.Schema({
  name: String,
  score: Number,
  image: String
}, {timestamps: true})

mongoose.model('Git', GitSchema)
