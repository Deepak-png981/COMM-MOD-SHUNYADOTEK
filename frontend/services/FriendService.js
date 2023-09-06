class FriendService {
    static async searchUsers(query) {
        const response = await fetch(`/users/search?query=${query}`);
        return response.json();
    }

    static async addFriend(userId, friendId) {
        const response = await fetch(`/friends/${userId}/add/${friendId}`, {
            method: "POST"
        });
        return response.json();
    }

    static async listFriends(userId) {
        const response = await fetch(`/friends/${userId}/list`);
        return response.json();
    }
}

export default FriendService;
