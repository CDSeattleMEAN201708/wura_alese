var express = require('express')
var body_parser = require('body-parser')
var path = require('path')
var app = express()
app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)


app.listen(8000)
