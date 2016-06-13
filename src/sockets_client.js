import io from 'socket.io-client';
var socket= io();

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
//all client-side socket listeners will be be contained here
//initSockets will be exported to client-side index
export function initSockets(store){
  console.log('inside initSockets Client');
  socket.on('newUser', function(data) {
  	store.dispatch({action: CREATE_NEW_USER, payload: data.newUser })
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

export function createUsername(username) {
	socket.emit('createUsername', { username });
}

