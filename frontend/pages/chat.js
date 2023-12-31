// chat.js
export function chat() {
    return `
        <div class="container">
            <h2>Chat with <span id="chatFriendName"></span></h2>
            <div id="chatMessages"></div>
            <textarea id="chatInput" placeholder="Type a message..."></textarea>
            <button id="sendBtn">Send</button>
        </div>
    `;
}
