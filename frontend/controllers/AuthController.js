import AuthService from '../services/AuthService';

class AuthController {
    static login() {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await AuthService.login(username, password);
            if (response.token) {
                // Save token and redirect to profile or chat
            } else {
                // Handle login error
            }
        });
    }

    static signup() {
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await AuthService.signup(username, password);
            if (response.token) {
                // Save token and redirect to login or profile
            } else {
                // Handle signup error
            }
        });
    }
}

export default AuthController;
