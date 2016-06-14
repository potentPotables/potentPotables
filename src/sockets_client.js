import io from 'socket.io-client';
var socket= io();

export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SET_ACTIVE_USER= 'SET_ACTIVE_USER';
export const DISABLE_BUTTON= 'DISABLE_BUTTON';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const ACTIVATE_GAME = 'ACTIVATE_GAME';

//all client-side socket listeners will be be contained here
//initSockets will be exported to client-side index
export function initSockets(store){
  console.log('inside initSockets Client');
  socket.on('newUser', function(data) {
    console.log('newUser is', data.users);
  	store.dispatch({action: ADD_NEW_USER, payload: data})
  })
  socket.on('setActiveUser', function(data){
    store.dispatch({action: SET_ACTIVE_USER, payload: data.username})
    store.dispatch({action: DISABLE_BUTTON, payload: data.isButtonClicked})
  	store.dispatch({action: CREATE_NEW_USER, payload: data.newUser })
  });

  socket.on('gameActive', function(data) {
    store.dispatch({type: ACTIVATE_GAME, payload: true});
  });

  socket.on('currentClue', function(data) {
    
  })

  socket.on('test', function(data){
    console.log('data is', data);
    console.log('store is', store);
    //store.dispatch()
  })
}

//all client-side socket emitters will be contained here
//functions will be exported to appropriate files
export function joinRoom(room){
  console.log('insideJoinRoom');
  console.log('socket.emit', socket.emit);
  socket.emit('joinRoom', {room: room});
}

// called inside /actions/index.js => createUsername
export function createUsernameSockets(username, room) {
  console.log('room is', room);
  console.log('inside UsernameSockeetEmitter', room)
	socket.emit('createUsernameSockets', {username: username, room: room});
}

export function sendButtonClick(username, room) {
  socket.emit('sendButtonClick', {username: username, room: room});
}
// called inside /actions/index.js => fetchGame
export function startGame(room) {
  socket.emit('startGame', { room });
}

// will be called inside /actions/index.js => 
export function activeClue(activeClue, room) {
  socket.emit('activeClue', { activeClue, room });
}
