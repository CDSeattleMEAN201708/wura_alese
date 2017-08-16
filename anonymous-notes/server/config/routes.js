var note = require('../controllers/note_methods.js')
var path = require("path")

module.exports = function (app) {

    app.post('/create_note', note.create)
    app.get('/all_notes', note.find)

    app.all("*", (request, response) => {
      response.sendFile(path.resolve('./public/dist/index.html'))
    })
}
