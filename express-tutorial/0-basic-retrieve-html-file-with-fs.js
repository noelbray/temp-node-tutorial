// console.log("\nExpress Tutorial -- Express App Is Working --\n\n");

const http = require('http');

// Retrieve, Read HTML File index-0.html:
const { readFileSync } = require('fs');

// Get All Files
const homePage = readFileSync('./0-basic-index.html');

const server = http.createServer(
    (req, res) => {

        const url = req.url;

        // Home Page
        if (url === '/') {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(homePage);
            res.end();
        }
        // About Page
        else if (url === '/about') {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('<h1>About Page</h1>');
            res.end();
        }
        // Resource not found:
        else {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write('<h1>404 - Page Not Found</h1>');
            res.end();
        }
    }
);

server.listen(5000);