// Instead of using ansynchronous nested callbacks, here is a cleaner way to do it:

const { readFile } = require('fs');

// Wrapper Function is what I recall him calling getText:
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                // console.log(err);
                reject(err);
            }
            else {
                // console.log("Here's the data from the :\n", data);
                // alert(data);
                resolve(data);
            }
        })
    })
}

// Incorrect Path, Argument in getText's parameter (Node wont be able to find the file):
// getText('../content/first.txt')
//     .then((result) => {
//         console.log("\n", result, "\n");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Correct Path, Argument for getText function expression:
getText('./content/first.txt')
    .then((result) => {
        console.log("\n", result, "\n");
    })
    .catch((err) => {
        console.log(err)
    });

// Place the readFile method, function below into the Promise's callback, and change the 1st parameter to the 1st parameter of the function expression getText and put reject in place of console.log(err) in the if block and put resolve into the else block
// readFile("./content/first.txt", 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     else {
//         console.log(data);
//     }
// });