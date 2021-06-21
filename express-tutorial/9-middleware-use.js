// Notes:
// Middleware use method vs route

// Middleware is all throughout Express JS
// Middle are functions that execute during the request to the server. Each middleware has access to the req and res object.

// When you work with middleware, you Must pass it on to the next middleware unless you are terminating the whole cycle by sending back a response, res.

const express = require('express');

const app = express();

const logger = require('./logger-middleware.js');

const authorize = require('./authorize-middleware');

// req => middleware => res
// Middleware sits in between.
// Request comes in, do something, then send response.

// Apply Middleware To Multiple Routes:
// use the Express method .use()
// Order Matters Here!!!!
// the .use() method has to be placed before all routes that you want it to apply to.
// All app.use()s and middleware functions must be at above the browser methods such as get and post that will use them
// .use() methods are usually placed at the top of the document.

// app.use(logger);

//Execute Multiple Middleware, Place them in an array in the use method, and the Middleware Functions will be executed in the order they are in the array:

app.use([logger, authorize]); // Applies to All browser methods such as get and post and etc.

// You can type path into the use() method and it will be applied to anything, route, path after that:

// app.use('/api', logger); 

// The above use method will be applied only to all routes that have /api/and-all-paths-after-it

// Learn More About Express's Use() Method:
// https://expressjs.com/en/4x/api.html#app.use

// Express Built-in Middleware Function, static() method:
// app.use(express.static('./public'));

app.get(
    '/',
    // logger,// Middleware function
    (req, res) => {
        // const method = req.method;
        // const url = req.url;
        // const time = new Date().getFullYear();

        // console.log("method: ", method, "url: ", url, "time: ", time);

        res.send('Home Page');
    }
);

app.get(
    '/about',
    // logger,// Middlware function
    (req, res) => {
        res.send('About Page');
    }
);

app.get(
    '/api/products',
    // logger,
    (req, res) => {
        console.log(req.user);
        
        res.send('Products');
    }
);

app.get(
    '/api/items',
    // logger,
    // [logger, authorize], // Add Multiple Middleware Functions // This will only be applied here if the use method is not used for all the get and such methods.
    (req, res) => {
        console.log(req.user);

        res.send('Items')
    }
);

const port = 5000;

app.listen(
    port,
    () => {
        console.log('\nThis Express App Concerning Middleware "Use" Method Is Working. TYGG.\n')
    }
);