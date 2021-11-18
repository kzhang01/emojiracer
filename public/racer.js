
const socket = io();

function handleClick() {
    const buttonClicked = this.className;
    io.emit("click", { buttonClicked: buttonClicked });
}