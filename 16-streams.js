const { createReadStream } = require('fs');
// https://nodejs.org/docs/latest-v15.x/api/fs.html#fs_class_fs_readstream

const stream = createReadStream(
    './content/big.txt', 
    { 
        highWaterMark: 90000,
        // encoding: 'utf8' // Without this, it will just show numbers.
    }
);

// Buffer, Chunk Size, Default 64kb
// last butter - remainder
// highWaterMark - control size of buffer:
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' });

// Event: 'data'
stream.on(
    'data', // Data Event, Event: 'data' in Node JS Docs: https://nodejs.org/docs/latest-v15.x/api/stream.html#stream_event_data
    (result) => {
        // The data is read in chunks
        console.log(result);
    }
);

// Event: 'error'
stream.on(
    'error',
    (err) => console.log(err)
)