import {WebSocketServer} from "ws";

const ws = new WebSocketServer({port : 3001});

ws.on("connection" , (socket)=>{
    socket.send("Hello welcome to websocket layer")
})