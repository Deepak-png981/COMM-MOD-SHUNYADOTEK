import FriendService from '../services/FriendService';

class FriendController {
    static async searchAndDisplayUsers() {
        const searchInput = document.getElementById('searchUserInput');
        searchInput.addEventListener('keyup', async () => {
            const query = searchInput.value;
            const users = await FriendService.searchUsers(query);
            const resultsDiv = document.getElementById('searchResults');
            resultsDiv.innerHTML = ''; // clear previous results

            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.textContent = user.username;
                userDiv.addEventListener('click', async () => {
                    await FriendService.addFriend('currentUserId', user._id); // replace 'currentUserId' with the actual logged-in user ID
                    FriendController.displayFriends('currentUserId');
                });
                resultsDiv.appendChild(userDiv);
            });
        });
    }

    static async displayFriends(userId) {
        const friends = await FriendService.listFriends(userId);
        const friendListDiv = document.getElementById('friendList');
        friendListDiv.innerHTML = ''; // clear previous friends

        friends.forEach(friend => {
            const friendDiv = document.createElement('div');
            friendDiv.textContent = friend.username;
            friendListDiv.appendChild(friendDiv);
        });
    }
}

export default FriendController;
