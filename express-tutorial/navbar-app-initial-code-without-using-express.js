// console.log("\nExpress Tutorial -- Express App Is Working --\n\n");

const http = require('http');

// Retrieve, Read HTML File index-0.html:
const { readFileSync } = require('fs');

// Get All Files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer(
    (req, res) => {

        const url = req.url;
        console.log("url", url); // /broswer-app.js

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
        // Styles CSS
        else if (url === '/styles.css') {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(200, { 'content-type': 'text/css' });
            res.write(homeStyles);
            res.end();
        }
        // Image / Logo
        else if (url === '/logo.svg') {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(200, { 'content-type': 'image/svg+xml' });
            res.write(homeImage);
            res.end();
        }
        // Logic
        else if (url === '/browser-app.js') {
            console.log("\n req.method:", req.method);
            console.log("\n req.url:", req.url);
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.write(homeLogic);
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