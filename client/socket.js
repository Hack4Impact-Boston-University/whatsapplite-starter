import io from "./socket.io"

const apiUrl = "http://localhost:3050";
 
class Socket {

    socket = null;
    
    constructor() {
        this.socket = io(apiUrl);
    }

    sendMessage(message) {
        this.socket.emit("message", message);
    }

}
export default Socket;