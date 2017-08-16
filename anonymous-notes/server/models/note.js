var mongoose = require('mongoose')
var NoteSchema = new mongoose.Schema({
  note: String,
  user: String
}, {timestamps: true})

mongoose.model('Note', NoteSchema)
