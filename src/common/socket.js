export const emit = (eventname, data) => {
    socket.emit(eventname, data);
};