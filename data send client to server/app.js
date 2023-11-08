const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// handle web socket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // handle form data requests
  socket.on("formData", (formData) => {
    console.log("Form data received", formData.data);

    io.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
