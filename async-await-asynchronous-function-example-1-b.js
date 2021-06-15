const { readFile, writeFile } = require('fs');

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// getText is no longer needed after adding the two lines of code (3 and 5) above:
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     });
// }

// asynce function:
const start = async () => {
// const start = async function 0asyncfunctionexpression() {

    // always wrap the code in a "try catch" block:
    try {

        // const first = await getText('./content/first.txt');
        const first = await readFilePromise('./content/first.txt', 'utf8');

        // const second = await getText('./content/second.txt');
        const second = await readFilePromise('./content/second.txt', 'utf8');

        // writeFile will creat a file if it doesn't exist or overwrite the file if it does exist; if I recall correctly, you have to add the parameter, argument options {"flag": "a"} to get it to append to an existing file.  
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME !!!! \n\nHere is first.txt's text:\n\n${first}\n\nAnd Here is second.txt's text:\n\n${second}`);

        console.log("\n", first, "\n\n", second, "\n");

    }
    catch (error) {
        
        console.log(error);
        
    }
}

start();