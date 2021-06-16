const http = require('http');

// http createServer:
// const server = http.createServer((req, res) => {
//     resizeBy.end('Welcome');
// });

// Event Emitter API for server:
const server = http.createServer()
// User makes a request to the server, page, etc.
server.on(
    'request', // listening for request event
    (request, response) => {
        response.end(`Welcome to our home page.
        
        This server that is listening on http://localhost:5000 was created with:
        
        "Event Emitter API."`);
    }
);

server.listen(5000);