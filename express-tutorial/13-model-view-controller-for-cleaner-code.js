// Model, View, Controller - Pattern, Convention MVC

// Keep in mind that when you are building the API, node - express - etc., that people are going to be using it.

// GET - Read Data 
// POST - Insert Data
// PUT - Update Data
// DELETE - Delete Data

// GET - www.store.com/api/orders - get all orders
// POST - store.com/api/orders - place an order (send data)
// PUT store.com/api/orders/:id - update specific order (params + send data)
// DELETE store.com/api/orders/:id - delete order (path params)

// methods-public folder contains a working application to demonstrate how to use the post method. 

// In POST request it is very crucial to have a body to be able to add something to the server.
// The name attribute in the input element of the form is the key, property that will show up in the body of the POST request along with the value that was submitted for it.

// Whatever is sent in the POST request canNot be accessed without middleware.

const express = require('express');

const app = express();

// For Express Router, require the routes
// const peopleRouter = require('./routes/people');
// const auth = require('./routes/auth');
const peopleRouter = require('./routes-for-controllers/people.js');
const auth = require('./routes-for-controllers/auth.js');

// app.use() is for middleware, used to apply middleware to the routes that are below it or that are specified within it.

// static asset:
app.use(express.static('./methods-public'));

// To access the POST Data use built-in express method urlencoded()
// parse form data with middleware to get the POST data
// apply it to all request.
// parse the form data
app.use(express.urlencoded({ extended: false }));
// The documentation for urlencoded method: 
// https://expressjs.com/en/4x/api.html#express.urlencoded
// https://www.npmjs.com/package/qs#readme

// You can check if the input values are empty on the front-end but it is demonstrated here to get a better understanding of how POST works on the server.

// This is for javascript.html
// parse the json data:
app.use(express.json());

// For Express Router:

// setting up the base path for peopleRouter which contains
// All The routes that use /api/people
// here, '/api/people' route, path will be passed to all the methods in required from ./routes/people.js file 
app.use(
    '/api/people', peopleRouter
);
// setting up the base route for login, authorization, auth
// here the route 'login' will be passed to all methods retrieved from ./routes/auth.js file
app.use('/login', auth);

const port = 5000;

app.listen(
    port,
    () => {
        console.log('\nThis Express App Demonstrates Model View Controller (MVN) Which Helps To Make The Code Look Cleaner. TYGG.\n')
    }
);