// OS built-in node module
// With Node, You Can 
// Get information about the users Operating System
const os = require('os');
// Use object destructuring to access only what you want from os:
// E.g.: const { platform, freemem, loadavg} = require('os');

// Info about current user: 
const user = os.userInfo();
console.log(user);

// You don't always have to save buit-ins in a variable,
// you can immediately invoke a built-in too. 
// uptime() method returns the system uptime in seconds:
// The last to digits of the uptime is run in 100 seconds and not 60 seconds
console.log(`The System Uptime is ${os.uptime} seconds.`);

const currentOS = {
    name:os.type(), // user type of operarting system
    release:os.release(), // os release
    totalMemory: os.totalmem(), // total system memory
    freeMemory: os.freemem() // total free memory
}

console.log(currentOS);



