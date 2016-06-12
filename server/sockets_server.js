//Sockets logic will be writtten in this module
module.exports.initSockets= function(io, socket){
  io.on('joinRoom', function(data){
    socket.join(data);
  });

}