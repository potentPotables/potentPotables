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
    var clientsFin= clients.rooms[data.room].sockets;
    console.log('Clients in room include', clientsFin);
  });

  socket.on('createUsernameSockets', function(data) {
    if(!roomData[data.room].users){
      roomData[data.room].users= {};
      roomData[data.room].users.count= 0;
    }
    roomData[data.room].users[data.username]= {username: data.username, score: 0};
    roomData[data.room].users.count ++;
  	ioAccess.in(data.room).emit('newUser', {users : roomData[data.room].users} );
  });

  socket.on('sendButtonClick', function(data) {
    if (!roomData[data.room].isButtonClicked){
      roomData[data.room].isButtonClicked= true;
      roomData[data.room].activeUser= data.username;
    }
    ioAccess.in(data.room).emit('setActiveUser', {username: roomData[data.room].activeUser, isButtonClicked: true});
  });

  socket.on('startGame', function(data) {
  	ioAccess.in(data.room).emit('gameActive');
  });

  socket.on('activeClue', function(data) {
    console.log('inside server activeClue');
  	ioAccess.in(data.room).emit('currentClue', {currentClue: data.activeClue});
  })

  socket.on('incorrect', function(data) {
    roomData[data.room].isButtonClicked= false;
    roomData[data.room].activeUser= '';
    roomData[data.room][data.username].score -= data.value;
  	ioAccess.to(data.room).emit('incorrect', {username: data.username, score: roomData[data.room][data.username].score} );
  });

  socket.on('correct', function(data) {
    roomData[data.room].isButtonClicked= false;
    roomData[data.room].activeUser= '';
    roomData[data.room][data.username].score += data.value
  	socket.to(data.room).emit('correct', {username: data.username, score: roomData[data.room][data.username].score} );
  });

  socket.on('skip', function(data) {
  	socket.to(data.room).emit('skip');
  });

}