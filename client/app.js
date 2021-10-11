const socket = new WebSocket('ws://localhost:3000');
socket.onmessage = ({data}) => {
    console.log(`Message from server ${data}`);
}
document.querySelector('button').onclick = () => {
    socket.send('hello');
}