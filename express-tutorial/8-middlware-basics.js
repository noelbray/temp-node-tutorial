// Notes: 
// Middleware is all throughout Express JS
// Middle are functions that execute during the request to the server. Each middleware has access to the req and res object.

// When you work with middleware, you Must pass it on to the next middleware unless you are terminating the whole cycle by sending back a response, res.

const express = require('express');

const app = express();

// req => middleware => res
// Middleware sits in between.
// Request comes in, do something, then send response.

// Two Routes home and about.

const logger = (req, res, next) => {
    // Express will supply the request, response, and next to this middleware function.
    // we have to set up the request, response, and next in the middlware function we create
    // You can write this middleware function before the routes that use it. 
    const method = req.method;
    const url = req.ur;
    const time = new Date().getFullYear();
    console.log("method: ", method, "url: ", url, "time: ", time);
    
    // Either terminate or pass on the middleware

    // Terminate The Cycle, To Not Pass On The Middleware:
    // res.send('When you work with middleware, you Must pass it on to the next middleware unless you are terminating the whole cycle by sending back a response, res.')

    // To Pass On The Middleware:
    next(); 
}

app.get(
    '/',
    logger,// Middleware function
    (req, res) => {
        // const method = req.method;
        // const url = req.url;
        // const time = new Date().getFullYear();

        console.log("method: ", method, "url: ", url, "time: ", time);

        res.send('Home Page');
    }
);

app.get(
    '/about',
    logger,// Middlware function
    (req, res) => {
        res.send('About Page');
    }
);

const port = 5000;

app.listen(
    port,
    () => {
        console.log('\nThis Express App Concerning Middleware Basics Is Working. TYGG.\n')
    }
);