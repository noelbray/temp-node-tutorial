const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    });
}

// asynce function:
const start = async () => {
// const start = async function 0asyncfunctionexpression() {

    // always wrap the code in a "try catch" block:
    try {

        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log("\n", first, "\n\n", second, "\n");

    }
    catch (error) {
        
        console.log(error);
        
    }
}

start();