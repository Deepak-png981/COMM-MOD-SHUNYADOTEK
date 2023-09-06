// login.js
export function login() {
    return `
        <div class="container">
            <h2>Login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" required>

                <button type="submit">Login</button>
            </form>
        </div>
    `;
}
