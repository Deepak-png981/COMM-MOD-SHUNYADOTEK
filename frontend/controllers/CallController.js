import * as CallService from '../services/CallService';

class CallController {
    static initializeCallControls() {
        const startCallBtn = document.getElementById('startCallBtn');
        startCallBtn.addEventListener('click', CallService.startCall);

        const endCallBtn = document.getElementById('endCallBtn');
        endCallBtn.addEventListener('click', CallService.endCall);
    }
}

export default CallController;
