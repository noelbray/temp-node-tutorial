// Interact with FileSystem, FS, fs:
// Two Options: 
// 1. Asynchronous (non-blocking) fs
// 2. Synchronous (blocking) fs

const {readFileSync, writeFileSync} = require('fs');
// Other way to access fs methods and things. 
// const fs = require('fs');
// fs.method
console.log('start');

// Access content of a file with readFileSync by providing two parameters: 
// file path and encoding (utf-8 is default, but you can specify others): 
const first = readFileSync('./content/first.txt', 'utf-8' );
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first, second);

// Create a new file with writeFileSync by providing it:
// two parameters, 
// the path with file-name at the end,
// and the value you want to pass, it to have
// If the file is not there, node will create a new file.
// If the file is ther, node will overwrite the values in the file. 
// writeFileSync('./content/result-of-using-writeFileSync.txt', `Thanks You God for helping me to learn code. You are great God. Please.... God, I love You, but I know, and confess to You, that my love for You is severly lacking and is nowhere near how great and perfectly You love me. Thank You God for loving me better and more than I love You. You are awesome God. Lord Have Mercy On Me. \n\nHere is the text from first.txt: ${first} \n\nHere is the content from second.txt: ${second}`
// );

// the options object when { flag: 'a' } specified, it allows you to append to the file. 
writeFileSync(
    './content/result-of-using-writeFileSync.txt', // 1st parameter
`
This was Appended by setting the 3rd parameter, options object, to { flag: 'a' } which appends informaiton to an existing file.`, // 2nd parameter
{ flag: 'a' } // 3rd option's object parameter
);

console.log('done with this task');
console.log('starting the next one');