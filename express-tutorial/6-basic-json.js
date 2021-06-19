const express = require('express');

const app = express();

const { products} = require('./data'); // array, data

// 1. Manually typed array in res.json():
app.get( 
    // get is the browser default request verb, method
    '/',
    (req, res) => {
        res.json(
            [
                {name:'John'}, 
                {name:'Susan'}
            ]
        );
    }
);

const port = 5000;

app.listen(
    port,
    () => {
        console.log(`\nThe server is listening on port ${port}, http://localhost:${port}\n`);
    }
);