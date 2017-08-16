var mongoose = require('mongoose')
var Note = mongoose.model('Note')

module.exports = {
  create: (request, response) => {
    var note = new Note({note: request.body.note, user: request.body.user})
    note.save()
        //this data is what comes back if the note saved correctly
        .then(data => {
          request.session.note_id = note._id
          //this below is what returns back to the angular
          response.json(data)
        })
        .catch(errors => response.status(500).json(errors))
  },
  find: (request, response) => {

    Note.find()
    .then(data => response.json(data))
    .catch(errors => response.status(500).json(errors))

  }

}
