class AuthService {
    static async login(username, password) {
        // API call to backend to authenticate user
        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        return response.json();
    }

    static async signup(username, password) {
        // API call to backend to register user
        const response = await fetch("/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        return response.json();
    }
}

export default AuthService;
