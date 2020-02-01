const port = 3050; 
const io = require("socket.io")(port);

console.log("Server running on port " + port);

io.on("connection", function(socket) {

    console.log("User connected");

     socket.on("message", function(data){
         console.log("Message received");
         socket.emit()
     })
 })

