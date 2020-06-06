const socket_io = require('socket.io');

module.exports.socketio = (server) => {
  const io = socket_io(server);
  io.on('connection', (socket) => {
    console.log(socket);

    socket.on('INIT_CONNECTION', (data) => {});

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
