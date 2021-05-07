import openSocket from "socket.io-client";

const socketURL = "http://localhost:3001";
let socket;

export function initSocket() {
    socket = openSocket(socketURL);
}

export function getSocket() {
    return socket;
}

export function onMessageSocket(cb) {
    return new Promise((resolve, reject) => {
        if(socket) {
            socket.on("chat message", cb);
        }
        else {
            reject();
        }
    })
    
}

export function sendMsg(msg) {
    socket.emit("chat message", msg);
}

export function disconnectSocket() {
    socket.disconnect();
}