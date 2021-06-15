const http = require('http');

const server = http.createServer(
    (req, res) => {
        console.log('User requested Event that will be run, delivered after the immediate, non-asynchronous code is run.');
        res.end('Howdie');
    }
);

server.listen(8888,
    () => {
        console.log('Server listening on port: 8888.... This runs before the asychronous callback in the http.createServer method, function.\n\nThe Event Loop will keep listening for events.')
    }
);