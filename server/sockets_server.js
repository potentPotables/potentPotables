//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index
var roomData= {};

module.exports.initSockets= function(socket, clients, ioAccess){
  var isButtonClicked= false;

  socket.emit('test', { hello: 'world' });

  socket.on('joinRoom', function(data){
    console.log(data);
    if (!roomData[data.room]){
      roomData[data.room]= {
        hasClickedButton: false,
        activeUser: ''
      }
    }
    socket.join(data.room);
    //console.log('clients', clients);
    var clientsFin= clients.rooms[data.room].sockets;
    console.log('Clients in room include', clientsFin);
  });

  socket.on('createUsernameSockets', function(data) {
    if(!roomData[data.room].users){
      roomData[data.room].users= {};
    }
    roomData[data.room].users[data.username]= {username: data.username, score: 0};
  	ioAccess.in(data.room).emit('newUser', {users : roomData[data.room].users} );
  });

  socket.on('sendButtonClick', function(data) {
    if (!roomData[data.room].isButtonClicked){
      roomData[data.room].isButtonClicked= true;
      roomData[data.room].activeUser= data.username;
    }
    socket.to(data.room).emit('setActiveUser', {username: roomData[data.room].activeUser, isButtonClicked: true});
  })

}