const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const {generateMessage} = require('./utils/message');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app.'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined chat'));

    socket.on('disconnect', () => {
        console.log('connection dropped');

    })

    socket.on('createMessage', (message, callback) => {
        console.log('got createmessage from client', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');

    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});