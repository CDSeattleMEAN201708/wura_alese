var names = require('../controllers/name_methods.js')
module.exports = function (app) {
  app.get('/', (request, response) => {
    names.show(request, response)
  })
  app.get('/new/:name/', (request, response) => {
    names.create(request, response)
  })
  app.get('/remove/:name/', (request, response) => {
    names.remove(request, response)
  })
  app.get('/:name', (request, response) => {
    names.show_one(request, response)
  })
}
