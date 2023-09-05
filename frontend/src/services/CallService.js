let localStream;
let peerConnection;
const configuration = {
    iceServers: [{
        urls: 'stun:stun.l.google.com:19302' // Using Google's public STUN server
    }]
};

async function startCall() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('localVideo').srcObject = localStream;

    peerConnection = new RTCPeerConnection(configuration);
    peerConnection.addStream(localStream);

    // Handle the creation of the offer
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(new RTCSessionDescription(offer));

    // Here, you'd typically send the offer to the other peer using your signaling server

    peerConnection.onaddstream = (event) => {
        document.getElementById('remoteVideo').srcObject = event.stream;
    };

    // Handle ICE Candidate events
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            // Here, you'd send the ICE Candidate to the other peer using your signaling server
        }
    };
}

function endCall() {
    peerConnection.close();
    localStream.getTracks().forEach(track => track.stop());
    document.getElementById('localVideo').srcObject = null;
    document.getElementById('remoteVideo').srcObject = null;
}

export { startCall, endCall };
