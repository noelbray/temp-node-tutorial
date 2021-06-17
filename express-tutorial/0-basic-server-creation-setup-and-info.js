// console.log("\nExpress Tutorial -- Express App Is Working --\n\n");

const http = require('http');

const server = http.createServer(
    (req, res) => {
        // This function runs every time the use hits the server.
        // req: user makes request to server
        // res: response from the server to the user

        console.log('User hit the server.\n');

        console.log('Always include the method "end." without res.end(optional-argument), the browser loading, spinner in the tab will just keep spinning.');

        // response.end([data[,encoding]][,callback]) method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end() MUST BE CALLED ON EACH RESPONSE.

        res.end('home page');
    }
);

// specify a port (communication endpoint), calling customer service, 
// use any number you want except 0 or 1000 for development.
server.listen(5000); // .listen method
// Common Port Examples:
// 20 File Transfer Protocol (FTP) Data Transfer
// 22 Secure Shell (SSH) Secure Login
// 80 Hyper Text Transfer Protocol (HTTP)
// 443 Secure Hyper Text Transfer Protocol (HTTPS)
// For more:https://en.wikipedia.org/wiki/Port_(computer_networking) 