import io from "./socket.io"

const apiUrl = "http://155.41.31.211:3050";
 
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