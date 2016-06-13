import io from 'socket.io-client';
var socket= io();


//all client-side socket functions will be contained here
export default function joinRoom(room){
  console.log('insideJoinRoom');
  console.log('socket.emit', socket.emit);
  socket.emit('joinRoom', {room: room});
}



