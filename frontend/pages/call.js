// call.js
export function call() {
    return `
        <div class="container">
            <h2>Call with <span id="callFriendName"></span></h2>
            <video id="localVideo" autoplay></video>
            <video id="remoteVideo" autoplay></video>
            <button id="startCallBtn">Start Call</button>
            <button id="endCallBtn">End Call</button>
        </div>
    `;
}
