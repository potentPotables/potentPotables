export default function joinRoom(room){
  socket.emit('joinRoom', {room: room});
}