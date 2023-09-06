import { home } from './pages/home.js'; // Import your HTML modules
import { login } from './pages/login.js';
import { signup } from './pages/signup.js';
import { profile } from './pages/profile.js';
import { friends } from './pages/friends.js';
import { chat } from './pages/chat.js';
import { call } from './pages/call.js';
import { createNavbar } from './partials//navbar.js';

// Define your route handlers using page()
page('/', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
            ${createNavbar()} <!-- Include the navigation bar -->
            ${home()}
        </div>
    `;
});

page('/login', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
            ${createNavbar()} <!-- Include the navigation bar -->
            ${login()}
        </div>
    `;
});

page('/signup', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
            ${createNavbar()} <!-- Include the navigation bar -->
            ${signup()}
        </div>
    `;
});

page('/profile/:userId', (ctx) => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
        ${createNavbar()} <!-- Include the navigation bar -->
            ${profile()}
        </div>
    `;
    // You can access ctx.params.userId to get the user ID from the URL
    // Example: const userId = ctx.params.userId;
});

page('/friends', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
        ${createNavbar()} <!-- Include the navigation bar -->    
        ${friends()}
        </div>
    `;
    // Add your logic for displaying friends here
});

page('/chat/:friendId', (ctx) => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
        ${createNavbar()} <!-- Include the navigation bar -->
            ${chat()}
        </div>
    `;
    // You can access ctx.params.friendId to get the friend ID from the URL
    // Example: const friendId = ctx.params.friendId;
});

page('/call/:friendId', (ctx) => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <div class="container">
        ${createNavbar()} <!-- Include the navigation bar -->
            ${call()}
        </div>
    `;
    // You can access ctx.params.friendId to get the friend ID from the URL
    // Example: const friendId = ctx.params.friendId;
});

// Start the routing
page();
