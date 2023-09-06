// signup.js
export function signup() {
    return `
        <div class="container">
            <h2>Signup</h2>
            <form id="signupForm">
                <label for="username">Username:</label>
                <input type="text" id="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" required>

                <button type="submit">Signup</button>
            </form>
        </div>
    `;
}
