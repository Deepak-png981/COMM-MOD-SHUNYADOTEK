class UserService {
    static async getUserProfile(userId) {
        // API call to backend to get user profile details
        const response = await fetch(`/users/${userId}`);
        return response.json();
    }

    static async updateUserProfile(userId, profileData) {
        // API call to backend to update user profile
        const response = await fetch(`/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profileData)
        });

        return response.json();
    }
}

export default UserService;
