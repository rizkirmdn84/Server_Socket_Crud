const express = require('express');

const app = express();


const server = require('http').createServer(app);


const io = require('socket.io')(server, {
    cors: { origin: "*"}
});

const PORT = 3000;


io.on('connection', (socket) => {
    console.log('A client connected with id: ' + socket.id);

    socket.on('refreshData', () => {
        console.log(`Client ${socket.id} manipulate data`);

        socket.broadcast.emit('refreshData');
    });


    socket.on('disconnect', (socket) => {
        console.log('A client disconnect');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});