var player = require('../controllers/player_methods.js')
var path = require("path")

module.exports = function (app) {
  app.post('/create_player', player.create)
  app.get('/all_players', player.all)
  app.get('/delete/:id', player.delete)

  app.all("*", (request, response) => {
    response.sendFile(path.resolve('./public/dist/index.html'))
  })
}
