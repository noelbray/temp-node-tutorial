// HTTP module built-in node.js module
// Setting up your own web server:

const http = require('http');

// createServer, http method, 
// 1st parameter is a callback
// which takes 2 parameters:
// req which is short for request
// res which is short for response
const server = http.createServer(
    (req, res) => {
        // console.log(req);
        // // res.write('Welcome to our home page.');
        // // res.end();

        // I was getting an error: 'ERR_STREAM_WRITE_AFTER_END'


        if(req.url === '/') {
            // '/' means homepage
            res.end('Welcome to our home page.');
        }
       
        else if(req.url === '/about') {
            // The code line just above was originally an if statement
            // but it was part of the reason 'ERR_STREAM_WRITE_AFTER_END' was thrown at js292
            // so I changed it to an else if based on this stack overflow article: 
            // https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end

            // about page
            // He took a shortcut and placed the text directly into
            // res.end('') instead of writing: res.write('text here'); res.end();
            res.end('Here is our short history:');
        }
        // Default Response for a page that does not exist; a user request a page that does not exist: 
        else { 
            // I put res.end in an else statement because it was
            // attributing to the 'ERR_STREAM_WRITE_AFTER_END' being right after the two if statements,
            // one of which is know an else if statement to fix the error.

            // He wrote the html directly into res.end() instead of writing it in res.write('text here'); res.end();
            res.end(`
                <h1 style="color: green;">Oops!</h1>
                <p style="font-style: italic">We can't seem to find the page you are looking for.</p>
                <a href="/">Back to Homepage.</a>
            `);
        }
    }
);

// Create A Port that your server will be listening too. 
server.listen(5000);
// Go to your browser and type: 
// localhost:5000

