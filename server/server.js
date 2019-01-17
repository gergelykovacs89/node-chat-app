const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketio(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('admin', 'welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('create message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('this is from server');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('admin', coords.latitude, coords.longitude));
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