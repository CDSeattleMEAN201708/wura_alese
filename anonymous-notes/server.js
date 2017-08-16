var express = require('express')
var body_parser = require('body-parser')
var path = require('path')
var session = require('express-session')
var app = express()
// app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, '/public/dist')))
app.use(session({secret: 'God is awesome', resave: false, saveUninitialized: true}))
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)


app.listen(8000)
