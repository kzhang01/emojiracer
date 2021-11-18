
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));

let player1X = 0;
let player2X = 0;

function getPositions() {
    return {
        player1X: player1X + "px",
        player2X: player2X + "px"
    }
}

io.on("connection", socket => {
    // send positions to new clients
    io.emit("join", getPositions());

    // update positions on click and send updated positions
    socket.on("click", data => {
        if(data.buttonClicked === "player1Btn") {
            player1X += 3;
        } else {
            player2X += 3;
        }

        io.emit("update", getPositions());
    });
});

server.listen(3000);
