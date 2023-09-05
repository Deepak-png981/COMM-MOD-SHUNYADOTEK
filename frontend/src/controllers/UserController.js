import UserService from '../services/UserService';

class UserController {
    static async displayProfile(userId) {
        const profile = await UserService.getUserProfile(userId);
        document.getElementById('profilePicture').src = profile.profilePicture || 'default_image_path_here';
        document.getElementById('profileBio').textContent = profile.bio;

        const editBtn = document.getElementById('editProfileBtn');
        editBtn.addEventListener('click', () => {
            document.getElementById('profileDetails').style.display = 'none';
            document.getElementById('editProfileForm').style.display = 'block';
        });

        const saveBtn = document.getElementById('saveProfileBtn');
        saveBtn.addEventListener('click', async () => {
            const newBio = document.getElementById('newBio').value;
            // Handle profile picture update logic here

            await UserService.updateUserProfile(userId, { bio: newBio });
            UserController.displayProfile(userId);  // refresh profile view
        });
    }
}

export default UserController;
