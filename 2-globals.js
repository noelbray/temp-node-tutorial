// GLOBALS - NO WINDOW!!! in Node.JS

// Some Global Variables:
// _dirname - path to current directory
// require - function to use modules (CommonJS)
// module - infor about current module (file)
// process - info about env where the program is being executed
// setTimeout(callback function, time-delay)
// setInterval(callback function, time-delay-repeat)

console.log(__dirname);
// console.log(process);
// console.log(require);
// console.log(module);
console.log(__filename);

setInterval(()=>{
    console.log('You are Great God');
}, 1000);