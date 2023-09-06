export function createNavbar() {
    
    return `
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/profile/:userId">Profile</a></li>
                <li><a href="/friends">Friends</a></li>
                <li><a href="/chat/:friendId">Chat</a></li>
                <li><a href="/call/:friendId">Call</a></li>
            </ul>
        </nav>
    `;
}
