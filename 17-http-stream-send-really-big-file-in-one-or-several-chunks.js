var http = require('http');

var fs = require('fs');

http
    .createServer(function (req, res) {
        // This sends the "really-big-file.txt" in 1 large chunk, all at once to the webpage:
        // const text = fs.readFileSync('./content/really-big-file.txt');
        // res.end(text);
        const fileStream = fs.createReadStream(
            './content/really-big-file.txt', 'utf8'
        );

        fileStream.on(
            'open',
            () => {
                fileStream.pipe(res); 
                // piping data into a writeable stream. 
                // pushing from readstream to the write stream. 
                // pass in response (res) object
                // response Headers are sent back in chunks
            });

        fileStream.on(
            'error',
            (err) => {
                res.end(err);
            }
        )
    })
    .listen(5000);