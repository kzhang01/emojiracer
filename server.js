
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

/* events
-connect: server sends x-coordinate of emojis
-click: client sends name of button clicked
*/

let player1X = 0;
let player2X = 0;

io.on("connection", socket => {
    io.emit("join", {
        player1X: player1X,
        player2X: player2X
    });
    socket.on("click", data => {
        if(data.buttonClicked === "player1Btn") {
            player1X++;
        } else {
            player2X++;
        }
        console.log("p1x", player1X);
        console.log("p2x", player2X);
    });
});

server.listen(3000);