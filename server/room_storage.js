module.exports.roomStorage = {
        hasClickedButton: false,
        activeUser: '',
        incorrectUserCount: 0,
        usersCount: 0,
        gameboard: null,
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
            declareIncorrect: function(room, username, clue){
              roomData[room].isButtonClicked= false;
              roomData[room].activeUser= '';
              roomData[room].users[username].score -= clue.value;
              roomData[room].generalUserTimeout.generalTimeoutFn(room);
              roomData[room].incorrectUserCount ++;
              ioAccess.in(room).emit('incorrect', {username: username, score: roomData[room].users[username].score} );
            },
            declareTimeout: null,
            activeTimeout: null,
            activeTimeoutFn: function(room, username, clue){
              var that= this;
              var tempFn= function(){return that.skipIncorrect(room, username, clue)};
              return this.activeTimeout= setTimeout(tempFn, 10000);
            },
            declareTimeoutFn: function(room, username, clue){
              var that= this;
              var tempFn= function(){return that.declareIncorrect(room, username, clue)};
              return this.declareTimeout= setTimeout(tempFn, 10000);
            },
            clearActiveTimeout: function(){
              var that= this;
              clearTimeout(that.activeTimeout);
            },
            clearDeclareTimeout: function(){
              var that= this;
              clearTimeout(that.declareTimeout);
            }
          }
      };