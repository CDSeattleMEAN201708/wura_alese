var express = require('express')
var mongoose = require('mongoose')
var validate = require('mongoose-validator');
var body_parser = require('body-parser')
var path = require('path')

var app = express()
mongoose.connect('mongodb://localhost/dojo_app_db')
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
]

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, validate: nameValidator},
  quote: {type: String, required: true}
}, {timestamps: true})
mongoose.model('User', UserSchema)
var User = mongoose.model('User')


app.get('/', (request, response) => {
  response.render('index', {errors: ''})
})
app.get('/quotes', (request, response) => {
  User.find({}, (error, users) => {
    if(error){
      response.redirect('/')
    } else {
      response.render('quotes', {users: users})
    }
  })
})

app.post('/process', (request, response) => {
  var user = new User({name: request.body.name, quote: request.body.quote})
  user.save( (error) => {
    if (error) {
      response.render('index', {errors: user.errors})
    } else {
      response.redirect('/quotes')
    }
  })
})

app.get('/skip', (request, response) => {
  response.redirect('/quotes')
})


app.listen(8000)
