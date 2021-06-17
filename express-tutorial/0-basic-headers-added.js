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

        // res.end('home page'); // passing a string directly in the 'end' method.

        // Provide meta-data, more information, to the browser by adding more methods:

        // You can change the status code, but make sure you use the appropriate status code.
        // Status Code: 200 means OK
        // Use the appropriate MEDIA TYPE, MIME TYPE in the object, 2nd argument, in writeHead() method ex: 'content-type': 'text/html' if you want to write html in the response, for the server to respond with html: 
        res.writeHead(200, { 'content-type': 'text/html' });  // The object specifies the MIME TYPE / MEDIA TYPE

        // res.writeHead(200, { 'content-type': 'text/plain' });

        let test = res.write('<h1>Home Page</h1>'); // The html, message, text could be pased directly into res.end('here');
        
        console.log(test, 'typeof:', typeof test);
        // It seems if there is an argument in res.write, it returns the boolen true based on the test I just did,
        // but if nothing is in in res.write() an error will be thrown. 

        res.end(); // You Must Call "end"
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