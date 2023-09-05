import { sendMessage } from '../events/socketEvents';

class ChatController {
    static async displayChatWith(friendId) {
        const messages = await ChatService.getMessagesBetween('currentUserId', friendId);
        const chatDiv = document.getElementById('chatMessages');
        chatDiv.innerHTML = ''; // clear previous messages

        messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `${msg.from.username}: ${msg.content}`;
            chatDiv.appendChild(messageDiv);
        });

        const sendBtn = document.getElementById('sendBtn');
        const chatInput = document.getElementById('chatInput');
        sendBtn.addEventListener('click', () => {
            const content = chatInput.value;
            if (content) {
                sendMessage(friendId, content);
                const messageDiv = document.createElement('div');
                messageDiv.textContent = `You: ${content}`;
                chatDiv.appendChild(messageDiv);
                chatInput.value = ''; // clear the input
            }
        });
    }
}

export default ChatController;
