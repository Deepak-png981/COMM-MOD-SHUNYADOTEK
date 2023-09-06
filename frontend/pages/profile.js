// profile.js
export function profile() {
    return `
        <div class="container">
            <h2>Profile</h2>
            <div id="profileDetails">
                <img id="profilePicture" src="#" alt="Profile Picture" />
                <p id="profileBio"></p>
                <button id="editProfileBtn">Edit Profile</button>
            </div>
            <div id="editProfileForm" style="display: none;">
                <input type="file" id="newProfilePicture" />
                <textarea id="newBio"></textarea>
                <button id="saveProfileBtn">Save</button>
            </div>
        </div>
    `;
}
