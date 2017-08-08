var express = require('express')
var mongoose = require('mongoose')
var validate = require('mongoose-validator');
var body_parser = require('body-parser')
var path = require('path')

var app = express()
mongoose.connect('mongodb://localhost/message2_db')
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

var Schema = mongoose.Schema
var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
}, {timestamps: true} )

var MessageSchema = new mongoose.Schema({
  text: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: []
}, {timestamps: true} )


mongoose.model('User', UserSchema)
mongoose.model('Message', MessageSchema)

var User = mongoose.model('User')
var Message = mongoose.model('Message')


app.get('/', (request, response) => {
  User.find({})
  .populate('messages')
  .exec(function (error, users) {

    response.render('index', {errors: '', users: users})
  })
})

app.post('/post_message', (request, response) => {
  var user = new User({name: request.body.name})
  user.save(function (error) {
    var message = new Message({text: request.body.message, _user: user._id})
    message.save(function (error) {
      user.messages.push(message)
      user.save(function (error) {
        if (error) {
          console.log('^^^^^^^^');
        } else {
          response.redirect('/')
        }
      })
    })
  })
})

app.post('/post_comment/:id', (request, response) => {
  Message.findOne({_id: request.params.id}, (error, message) => {
    message.comments.push({text: request.body.comment, user: request.body.user})
    message.save(function (error) {
      if (error) {
        console.log('***');
      } else{
        response.redirect('/')
      }
    })
  })
})


app.listen(8000)
