//all server-side sockets functions will be written here;

module.exports.initSockets= function(socket){
  var clickCount= 0;
  socket.on('joinRoom', function(data){
    console.log(data);
    socket.join(data.room);
  });

}