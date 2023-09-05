page('/', () => {
    document.getElementById('app').innerHTML = 'Home Page';
});

// page('/login', () => {
//     document.getElementById('app').innerHTML = 'Login Page';
// });

// page('/signup', () => {
//     document.getElementById('app').innerHTML = 'Signup Page';
// });
page('/login', () => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/login.html') + '</div>';
    AuthController.login();
});

page('/signup', () => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/signup.html') + '</div>';
    AuthController.signup();
});
page('/profile/:userId', (ctx) => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/profile.html') + '</div>';
    UserController.displayProfile(ctx.params.userId);
});
page('/friends', () => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/friends.html') + '</div>';
    FriendController.searchAndDisplayUsers();
    FriendController.displayFriends('currentUserId');  // replace 'currentUserId' with the actual logged-in user ID
});
page('/chat/:friendId', (ctx) => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/chat.html') + '</div>';
    ChatController.displayChatWith(ctx.params.friendId);
});
page('/call/:friendId', (ctx) => {
    document.getElementById('app').innerHTML = '<div class="container">' + require('./pages/call.html') + '</div>';
    CallController.initializeCallControls();
    document.getElementById('callFriendName').textContent = ctx.params.friendId; // This is a placeholder. Typically, you'd look up the friend's name.
});

page.start();
