const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", function (socket) {
  console.log("A user connected");

  io.sockets.emit("MyBroadcast", "Hello broadcast from server");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3003, () => {
  console.log("listening on 3003");
});
