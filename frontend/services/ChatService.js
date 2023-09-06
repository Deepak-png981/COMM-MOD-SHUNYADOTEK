class ChatService {
    static async getMessagesBetween(userId1, userId2) {
        const response = await fetch(`/chat/${userId1}/with/${userId2}`);
        return response.json();
    }
}

export default ChatService;
