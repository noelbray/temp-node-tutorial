// Event Loop Example:

const { readFile } = require('fs'); // built-in Node JS

console.log('started a first task\n');

//CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task - This was an asynchronous task, code within the callback function of readFile(...).\n');
});

console.log('starting next task - \nruns, prints, logs before asynchrous callback from readFile(...) is run.\n');