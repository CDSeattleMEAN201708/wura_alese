var mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')                      //below: this will avoid the deprecation error 
mongoose.connect('mongodb://localhost/names', {useMongoClient: true})
var models_path = path.join(__dirname, '../models')
fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file)
  }
})
