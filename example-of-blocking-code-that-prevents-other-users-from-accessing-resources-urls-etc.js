// Strive to get your data asynchronously so that other code and users are not blocked.
// Try to avoid using synchronous code because one thread, code line, executionable code that takes a long time to run will block others.

const http = require('http');

const server = http.createServer(
    (req, res) => {
        if(req.url === '/') {
            res.end("home page");
        }
        // if (req.url === "/about") { // I got the error I got before so I had to change it to else if and else to get it to work.
        else if (req.url === "/about") {
            // BLOCKING CODE !!!!
            for (let i = 0; i < 1000; i++) {
                for (let j = 0; j < 1000; j++) {
                    console.log(`Press CONTROL + C TO STOP THIS BLOCKING CODE. ${i} ${j}`);
                }
            }

            res.end('about page');
        }
        else {
            res.end('Oops, the page could not be found or you have requested a page that does not exist, please make sure you are using the correct url.');
        }
    }
)

server.listen(8000, ()=> {
    console.log('Server is listening on port 8000...');
})