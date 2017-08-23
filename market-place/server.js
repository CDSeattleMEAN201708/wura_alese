var express = require('express')
var body_parser = require('body-parser')
var path = require('path')
var app = express()
var session = require('express-session')
app.use(session({secret: 'I dont care', resave: false, saveUninitialized: true}))
app.use(body_parser.json())
app.use(express.static(path.join(__dirname, './client/dist')))


require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)


app.listen(8000)
