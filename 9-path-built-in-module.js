
const path = require('path');

// Get the separator for your, user system: 
console.log("My, user, path separator: ", path.sep);

// Create, join a file path: 
// const filePath = path.join('/content', 'subfolder', 'test.txt');
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// Get base filepath, the end of the file path
const base = path.basename(filePath);
console.log(base);

// Get the root, directory path: 
const directory = path.dirname(__dirname);

console.log("The directory name: ", directory);

// Access Absolute filepath: 
// This is going to point where the app.js, file, module is located: 
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log("The absolute path, url to for text.txt: ", absolutePath);