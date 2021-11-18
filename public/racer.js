
const socket = io();

// update emoji positions
function updatePositions(data) {
    const player1 = document.querySelector(".player1");
    player1.style.position = "relative";
    player1.style.left = data.player1X;
    const player2 = document.querySelector(".player2");
    player2.style.position = "relative";
    player2.style.left = data.player2X;
}

// get current positions on joining
socket.on("join", updatePositions);

// update positions of emojis
socket.on("update", updatePositions);

// send name of button clicked to server
function handleClick() {
    socket.emit("click", { buttonClicked: this.className });
}

function main() {
    document.querySelector(".player1Btn").addEventListener("click", handleClick);
    document.querySelector(".player2Btn").addEventListener("click", handleClick);
}

document.addEventListener("DOMContentLoaded", main);
