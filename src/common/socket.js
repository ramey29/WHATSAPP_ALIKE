let socket = io();
socket = io.connect('http://localhost:3000');
export const emit = (eventname,data) => {
    socket.emit(eventname, data);
};