// Don't forget to make sure you are in the express-tutorial folder before launching the app through node app.js or npm start (nodemon script: nodemon app.js)

console.log("\nExpress Tutorial -- Express App Is Working --\n\n");

const express = require('express');

const path = require('path'); // path module // Node built-in

const app = express();

// Coding typing things up several times helps you remember them better. Yep.

// Setup Static And Middleware:
// Static means that the server doesn't have to change it such as images, css, javascript, etc.
// use method must be declared before all get methods and such in order to work:
// Put all your Static files in a folder named public or static and then use them:
app.use(express.static('./public')) // "public" a.k.a "static" folder contains all the static, premade files, such as styles css, etc.
// Since the index html file is a static file, put it in the public folder, so no need to access it like this through sendFile:
// app.get(
//     '/',
//     (req, res) => {
//         res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//      Add this to static, public assets folder
//      res.sendFile will be use in Server Side Rendering
//     }
// );

app.all(
    '*',
    (req, res) => {
        // 404 = Not Found
        res.status(404).send('<h1>Sorry, Resource Not Found</h1>');
    }
);

const port = 5000;

app.listen(
    port,
    () => {
        console.log(`The server is listening on ${port}.`);
    }
);