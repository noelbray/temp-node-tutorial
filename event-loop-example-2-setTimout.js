// Started operating syster process
console.log('First Operation, console.log is complete.\n');

setTimeout(() => {
    console.log('Second Operation, SetTimout function, Asynchronous Operation, is offloaded to the browser, node event loop, will run, console.log, after all "immediate code is run."\n');
}, 0);

console.log('Third non-asychronous operation. Immediate code.\n');