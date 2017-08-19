var market = require('../controllers/methods.js')
var path = require('path')

module.exports = function (app) {
  app.post('/create_user', market.create_user)
  app.post('/validate_user', market.log_in)
  app.get('/log_out', market.log_out)
  app.post('/create_bike', market.create_bike)
  app.get('/user_bikes', market.user_bikes)
  app.post('/update_bike/:id', market.update)
  app.get('/delete_bike/:id', market.delete)
  app.get('/all_bikes', market.all_bikes)
  app.get('/current_user', market.find_user)
  app.get('/random_bike', market.random_bike)

  app.all("*", (request, response) => {
    response.sendFile(path.resolve('./client/dist/index.html'))
  })
}
