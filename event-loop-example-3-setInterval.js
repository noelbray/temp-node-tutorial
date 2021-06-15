setInterval(
    () => {
        console.log('setInterval callback function is invoked every 2000 milliseconds.\nPress CONTROL + C to stop it.\n');
        console.log('You can do this, keep on, everything will work out.\n');
    }, 2000
);

console.log('This runs before the setInterval callback function is run.');

// process stays alive unless
// terminate process: CONTRONL + C
// unexpected error will stop the process too