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
        activeUser: '',
        incorrectUserCount: 0,
        usersCount: 0,
        generalUserTimeout: {
              skip: function(room){
                roomData[room].isButtonClicked= false;
                roomData[room].activeUser= '';
                roomData[room].incorrectUserCount= 0;
                ioAccess.in(room).emit('skip', {isButtonClicked: false, activeUser: ''});
              },
              generalTimeout: null,
              generalTimeoutFn: function(room){
                var that= this;
                var tempFn= function (){return that.skip(room);}
                return this.generalTimeout= setTimeout(tempFn, 10000);
              },
              clearGeneralTimeout: function(){
                var that= this;
                clearTimeout(that.generalTimeout);
              }
          },
        activeUserTimeout: {
            skipIncorrect: function(room, username, clue){
              roomData[room].isButtonClicked= false;
              roomData[room].activeUser= '';
              roomData[room].users[username].score -= clue.value;
              roomData[room].incorrectUserCount= 0;
              ioAccess.in(room).emit('skipIncorrect', {username: username, score: roomData[room].users[username].score});
            },
            activeTimeout: null,
            activeTimeoutFn: function(room, username, clue){
              var that= this;
              var tempFn= function(){return that.skipIncorrect(room, username, clue)};
              return this.activeTimeout= setTimeout(tempFn, 10000);
            },
            clearActiveTimeout: function(){
              var that= this;
              clearTimeout(that.activeTimeout);
            }
          }
      }
    }
    socket.join(data.room);
    var clientsFin= clients.rooms[data.room].sockets;
    console.log('Clients in room include', clientsFin);
  });
  socket.on('createUserSockets', function(data) {
    if(!roomData[data.room].users){
      roomData[data.room].users= {};
    }
    roomData[data.room].users[data.username]= {username: data.username, score: 0, photo: data.photo};
    roomData[data.room].usersCount ++;
    ioAccess.in(data.room).emit('newUser', {users : roomData[data.room].users} );
  });
  socket.on('sendButtonClick', function(data) {
    if (!roomData[data.room].isButtonClicked){
      roomData[data.room].isButtonClicked= true;
      roomData[data.room].activeUser= data.username;
      roomData[data.room].generalUserTimeout.clearGeneralTimeout();
      roomData[data.room].activeUserTimeout.activeTimeoutFn(data.room, data.username, data.clue);
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
      roomData[data.room].activeUserTimeout.skipIncorrect(data.room, data.username, data.clue);
    }
    else{
      roomData[data.room].isButtonClicked= false;
      roomData[data.room].activeUser= '';
      roomData[data.room].users[data.username].score -= data.clue.value;
      roomData[data.room].activeUserTimeout.clearActiveTimeout();
      roomData[data.room].generalUserTimeout.generalTimeoutFn(data.room);
      ioAccess.in(data.room).emit('incorrect', {username: data.username, score: roomData[data.room].users[data.username].score} );
    }
  });
  socket.on('correct', function(data) {
    console.log('inside socket correct');
    roomData[data.room].isButtonClicked= false;
    roomData[data.room].activeUser= '';
    roomData[data.room].users[data.username].score += data.value;
    roomData[data.room].activeUserTimeout.clearActiveTimeout();
    roomData[data.room].incorrectUserCount= 0;
    ioAccess.in(data.room).emit('correct', {username: data.username, score: roomData[data.room].users[data.username].score} );
  });
  socket.on('skip', function(data) {
    roomData[data.room].isButtonClicked= false;
    roomData[data.room].activeUser= '';
    console.log('inside server sockets');
    ioAccess.in(data.room).emit('skip', {isButtonClicked: false, activeUser: ''});
  });
  socket.on('skipIncorrect', function(data) {
    console.log(data);
    console.log('roomData', roomData[data.room]);
    roomData[data.room].isButtonClicked= false;
    roomData[data.room].activeUser= '';
    console.log('data.room', data);
    roomData[data.room].users[data.username].score -= data.clue.value;
    consonle.log('insideserverskipincorrect');
    ioAccess.in(data.room).emit('skipIncorrect', {username: data.username, score: roomData[data.room].users[data.username].score});
  })
  socket.on('activateButtons', function(data) {
    roomData[data.room].generalUserTimeout.generalTimeoutFn(data.room);
    ioAccess.in(data.room).emit('enableButtons');
  });
}