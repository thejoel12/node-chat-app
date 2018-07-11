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

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'hey. what is going on',
        createdAt: 123
    });

    socket.on('disconnect', () => {
        console.log('connection dropped');
        
    })

    socket.on('createMessage', (message) => {
        console.log('got createmessage from client', message);
        
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });