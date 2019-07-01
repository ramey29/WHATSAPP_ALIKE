let socket = io();
socket = io.connect('http://localhost:3000');
socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
 });
export const emit = (eventname, data) => {
    socket.emit(eventname, data);
};