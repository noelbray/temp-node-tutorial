// Don't forget to make sure you are in the express-tutorial folder before launching the app through node app.js or npm start (nodemon script: nodemon app.js)

console.log("\nExpress Tutorial -- Express App Is Working --\n\n");

// 1st spin at Express JS

const express = require('express');

const app = express(); // Invoke express

// alternative way to invoke: const app = require('express')();

app.get(
    '/',
    (req, res) => {
        console.log("User hit the resource, made requst.\n");
        // 200 means successful
        res.status(200).send('Home Page - Learning Express Basics');
    }
);

app.get(
    '/about',
    (req, res) => {
        res.status(200).send('About Page - Learning Express Basics');
    }
);

app.all(// handles all http verbs.
    '*',
    (req, res) => {
        // If there is an error in retrieving any information or doing anything with http verbs get, post, push, etc. this will cover it all

        // explicitly state the status code and you can chain send to it:
        res.status(404).send('<h1>Resource Is Not Found.</h1>')
    }
)

const port = 5000;

app.listen(
    port,
    () => {
        console.log(`The server is listening on port ${port}.
        `);
    }
)

// http verbs: Get, Post, Put, Delete, All (Covers all verbs)
// app.get // user request
// app.post
// app.put
// app.delete
// app.all // works with all the http methods
// app.use // middleware
// app.listen