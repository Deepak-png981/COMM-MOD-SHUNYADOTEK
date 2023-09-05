const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        console.log(`Created directory: ${dirPath}`);
    }
};

const createFileWithContent = (filePath, content) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
        console.log(`Created file: ${filePath}`);
    }
};

const frontendStructure = {
    frontend: {
        public: {
            'index.html': '',
        },
        src: {
            pages: {
                'login.html': '',
                'signup.html': '',
                'profile.html': '',
                'friends.html': '',
                'chat.html': '',
            },
            styles: {
                'main.css': '',
            },
            controllers: {
                'AuthController.js': '',
                'UserController.js': '',
                'FriendController.js': '',
                'ChatController.js': '',
            },
            services: {
                'AuthService.js': '',
                'UserService.js': '',
                'FriendService.js': '',
                'ChatService.js': '',
            },
            apis: {
                'api.js': '',
            },
            events: {
                'socketEvents.js': '',
            },
            'router.js': '',
        },
    },
    'package.json': '',
    'README.md': '',
};

const createNestedStructure = (baseDir, structure) => {
    for (const item in structure) {
        const itemPath = path.join(baseDir, item);
        if (typeof structure[item] === 'object') {
            createDirectory(itemPath);
            createNestedStructure(itemPath, structure[item]);
        } else if (typeof structure[item] === 'string') {
            createFileWithContent(itemPath, structure[item]);
        }
    }
};

const rootDirectory = '.';
createNestedStructure(rootDirectory, frontendStructure);

console.log('Directory structure created successfully!');
