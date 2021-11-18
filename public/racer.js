
const socket = io();

function handleClick() {
    console.log("hello");
    const buttonClicked = this.className;
    socket.emit("click", { buttonClicked: buttonClicked });
}

function main() {
    document.querySelector(".player1Btn").addEventListener("click", handleClick);
    document.querySelector(".player2Btn").addEventListener("click", handleClick);
}

document.addEventListener("DOMContentLoaded", main);