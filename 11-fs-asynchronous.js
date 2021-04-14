// Asynchronous fs method. 
const { readFile, writeFile } = require('fs');
console.log('start');
// readFile: 
// 1st parameter: file path of file
// 2nd parameter: utf-8 or some other encoding of your choice. 
// 3rd parameter: provide a callback: 
// The cb will run when whatever functionality, algorithm, or etc. finishes, then the cb will be called, invoked, run which works similar to how addEventListener works for a button click, etc.
// in the cb, pass two arguments: error, result

// He calls this callback hell: 

readFile(
    './content/first.txt', 
    'utf-8',
    (err, result) => {
    if(err) {
        console.log(err);
        // return null;
        return;
    }
    // This is where you will set up the functionality, etc. 
    //  console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            // return null;
            return;
        }
        const second = result;
        writeFile(
            './content/result-of-asyncyhronous-demonstration.txt',
            `God, I know I'm not perfect, and ultimately I don't deserver anything, but I thank You for all the blessings, gifts, and etc. that You give me and do for me that I am aware of and not aware of. This is ${4 > 1}.`
            //, { flag: 'a' }
            , (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(result);  // result in this case will return undefined.
                console.log('done with writeFile task');
            }
        )
    })
});
console.log('starting next task');