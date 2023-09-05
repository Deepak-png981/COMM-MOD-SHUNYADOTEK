const socket = io('http://localhost:3000'); // or your server's address

socket.on('messageReceived', (message) => {
    const chatDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.from.username}: ${message.content}`;
    chatDiv.appendChild(messageDiv);
});

// Function to send a message through WebSocket
function sendMessage(to, content) {
    socket.emit('sendMessage', { from: 'currentUserId', to, content });
}

export { socket, sendMessage };
