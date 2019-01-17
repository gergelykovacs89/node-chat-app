const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketio(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'gergo',
        text: 'from server hii 2.',
        createdAt: 123
    });


    socket.on('createMessage', (message) => {
        console.log('create message', message);
    });

    socket.on('disconnect', () => {
        console.log('client disconnected')
    });
});






app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Started on port: ${port}`);
});

module.exports = {
    app: app
};