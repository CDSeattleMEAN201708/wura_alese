var user = require('../controllers/git_methods.js')
var path = require('path')

module.exports = function (app) {
  app.post('/create_user', user.create)
  app.get('/all_users', user.all)

  app.all("*", (request, response) => {
    response.sendFile(path.resolve('./public/dist/index.html'))
  })
}
 
