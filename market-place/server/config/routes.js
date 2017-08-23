const store = require('../controllers/methods.js')
const path = require('path')

module.exports = function (app) {
  app.post('/sign_up', store.create_user)
  app.post('/log_in', store.validate_user)
  app.get('/log_out', store.log_out)
  app.post('/create_bike', store.create_bike)
  app.get('/user_bikes', store.user_bikes)
  app.get('/current_user', store.current_user)
  app.get('/all_bikes', store.all_bikes)
  app.get('/delete_bike/:id', store.delete_bike)
  app.post('/update_bike/:id', store.update_bike)

  app.all('*', (request, response) => {
    response.sendFile(path.resolve('./client/dist/index.html'))
  })

}
