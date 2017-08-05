var express = require('express')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, './static')))

app.get('/', (request, response) => {
  response.render('index.html')
})


var server = app.listen(8000)
var chat_room = {}
var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
  socket.on('join_chat', function (data) { //2
    chat_room[socket.id] = [data.user]
    socket.emit('chat_room', {data: chat_room}) //3 - showing all pre existing chats from other users
  })
  socket.on('posting_form', function (data) { //6
    chat_room[socket.id].push(data.post_data)
    socket.broadcast.emit('new_data', {data: chat_room[socket.id]}) //7.1 - showing everyone asides from user the post of the current user 
    socket.emit('user_data', {data: chat_room[socket.id]}) //7.2 - showing current user his current post
  })
})
