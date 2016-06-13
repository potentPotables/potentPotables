//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index
module.exports.initSockets= function(socket){
  var isButtonClicked= false;

  socket.emit('test', { hello: 'world' });

  socket.on('joinRoom', function(data){
    console.log(data);
    socket.join(data.room);
  });

  socket.on('createUsernameSockets', function(data) {
  	socket.to(data.room).emit('newUser', { newUser : data.username} );
  });

}