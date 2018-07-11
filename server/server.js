const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.on('disconnect', () => {
        console.log('connection dropped');
        
    })

    socket.on('createMessage', (message) => {
        console.log('got createmessage from client', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });