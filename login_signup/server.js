var express = require('express')
var body_parser = require('body-parser')
var path = require('path')
var bcrypt = require('bcrypt')
var session = require('express-session')
var app = express()
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './client/static')))
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)


app.listen(8000)
