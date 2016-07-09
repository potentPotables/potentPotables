const RoomStorage = require('./room_storage');
//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index
var roomData = {};
module.exports.initSockets = function(socket, clients, ioAccess){
  var isButtonClicked = false;
  socket.emit('test', { hello: 'world' });
  socket.on('joinRoom', function(data){
    if (!roomData[data.room]){
      roomData[data.room] = RoomStorage.roomStorage;
    }
    socket.join(data.room);
    var clientsFin = clients.rooms[data.room].sockets;
  });
  socket.on('createUserSockets', function(data) {
    if(!roomData[data.room].users){
      roomData[data.room].users = {};
    }
    roomData[data.room].users[data.username] = {username: data.username, score: 0, photo: data.photo};
    roomData[data.room].usersCount ++;
    ioAccess.in(data.room).emit('newUser', {users : roomData[data.room].users} );
  });
  socket.on('sendButtonClick', function(data) {
    if (!roomData[data.room].isButtonClicked){
      roomData[data.room].isButtonClicked = true;
      roomData[data.room].activeUser= data.username;
      roomData[data.room].generalUserTimeout.clearGeneralTimeout();
      if (roomData[data.room].incorrectUserCount === roomData[data.room].usersCount -1){
        roomData[data.room].activeUserTimeout.activeTimeoutFn(data.room, data.username, data.clue);
      }else{
        roomData[data.room].activeUserTimeout.declareTimeoutFn(data.room, data.username, data.clue);
      }
    }
    ioAccess.in(data.room).emit('setActiveUser', {username: roomData[data.room].activeUser, isButtonClicked: true});
  });
  socket.on('startGame', function(data) {
    ioAccess.in(data.room).emit('gameActive');
  });
  socket.on('activeClue', function(data) {
    socket.to(data.room).emit('currentClue', {clue: data.activeClue});
  });
  socket.on('incorrect', function(data) {
    roomData[data.room].incorrectUserCount ++;
    if (roomData[data.room].incorrectUserCount === roomData[data.room].usersCount){
      roomData[data.room].activeUserTimeout.clearActiveTimeout();
      roomData[data.room].activeUserTimeout.clearDeclareTimeout();
      roomData[data.room].activeUserTimeout.skipIncorrect(data.room, data.username, data.clue);
    }
    else{
      roomData[data.room].isButtonClicked = false;
      roomData[data.room].activeUser = '';
      roomData[data.room].users[data.username].score -= data.clue.value;
      roomData[data.room].activeUserTimeout.clearActiveTimeout();
      roomData[data.room].activeUserTimeout.clearDeclareTimeout();
      roomData[data.room].generalUserTimeout.generalTimeoutFn(data.room);
      ioAccess.in(data.room).emit('incorrect', {username: data.username, score: roomData[data.room].users[data.username].score} );
    }
  });
  socket.on('correct', function(data) {
    roomData[data.room].isButtonClicked = false;
    roomData[data.room].activeUser = '';
    roomData[data.room].users[data.username].score += data.value;
    roomData[data.room].activeUserTimeout.clearActiveTimeout();
    roomData[data.room].activeUserTimeout.clearDeclareTimeout();
    roomData[data.room].incorrectUserCount = 0;
    ioAccess.in(data.room).emit('correct', {username: data.username, score: roomData[data.room].users[data.username].score} );
  });
  socket.on('skip', function(data) {
    roomData[data.room].isButtonClicked = false;
    roomData[data.room].activeUser = '';
    ioAccess.in(data.room).emit('skip', {isButtonClicked: false, activeUser: ''});
  });
  socket.on('skipIncorrect', function(data) {
    roomData[data.room].isButtonClicked = false;
    roomData[data.room].activeUser = '';
    roomData[data.room].users[data.username].score -= data.clue.value;
    consonle.log('insideserverskipincorrect');
    ioAccess.in(data.room).emit('skipIncorrect', {username: data.username, score: roomData[data.room].users[data.username].score});
  });
  socket.on('activateButtons', function(data) {
    roomData[data.room].generalUserTimeout.generalTimeoutFn(data.room);
    ioAccess.in(data.room).emit('enableButtons');
  });
  socket.on('dbl', function(data) {
    ioAccess.in(data.room).emit('dbl');
  });
  socket.on('host', function(data) {
    ioAccess.in(data.room).emit('host');
  })
  socket.on('cluesToClients', function(data) {
    ioAccess.in(data.room).emit('clues', {categories: data.categories, clues: data.clues});
  })
}