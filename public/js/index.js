var socket = io();

socket.on('connect', function () {
    console.log('connected to server');    
    
    socket.emit('createMessage', {
        from: 'test@test.com',
        text: 'this is the text'
    
    });

});

socket.on('newMessage', function (message) {
    console.log('got NewMessage', message);
    
});



socket.on('disconnect', function () {
    console.log('connection dropped'); 
});

