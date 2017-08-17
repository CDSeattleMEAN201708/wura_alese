var market = require('../controllers/market_methods.js')
var path = require('path')

module.exports = function (app) {
  app.post('/create_user', market.create_user)
  app.post('/log_in', market.log_in)
  app.post('/create_bike', market.create_bike)
  app.get('/user_bike', market.user_bike)
  app.post('/update_bike', market.update_bike)
  app.all("*", (request, response) => {
    response.sendFile(path.resolve('./client/dist/index.html'))
  })
}
