const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  //   socket.on("disconnect", () => {
  //     console.log("User disconnected");
  //   });

  //   setTimeout(() => {
  //     socket.send("data send from server to client");
  //   }, 1000);

  let date = new Date();
  //   setInterval(() => {
  //     let date = new Date();
  //     let time = date.getTime();
  //     console.log(time);
  //     socket.send(time);
  //   }, 2000);

  setInterval(() => {
    let date = new Date();
    let time = date.getTime();
    socket.emit("myEvent", date);
  }, 2000);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("listening on: 3000");
});
