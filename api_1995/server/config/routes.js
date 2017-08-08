var names = require('../controllers/name_methods.js')
module.exports = function (app) {
  app.get('/', names.show)
  app.get('/new/:name/', names.create)
  app.get('/remove/:name/', names.remove)
  app.get('/:name', names.show_one)
}
