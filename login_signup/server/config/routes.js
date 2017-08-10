var users = require('../controllers/user_methods.js')

module.exports = function (app) {
  app.get('/', (request, response) => {
    users.show(request, response)
  })
  app.post('/create_user', (request, response) => {
    users.create(request, response)
  })
}
