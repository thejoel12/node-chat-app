var socket = io();

socket.on('connect', function () {
    console.log('connected to server');    

    

});

socket.on('newMessage', function (message) {
    console.log('got NewMessage', message);
    
});



socket.on('disconnect', function () {
    console.log('connection dropped'); 
});

