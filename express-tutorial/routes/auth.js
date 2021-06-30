// auth: authorization, login
// boilerplate code: 
const express = require('express');
const router = express.Router();

// The Base path, route that is applied to each of these methods is in the app.js, what filename your app is is called.
// For example: app.use('/login', auth) is in the file 12-express-router.js and the route in the app.use will be applied to all the methods in peopleRouter that was required within 12-express-router.js.

// Putting the login here, above all your other routes, makes it a bit clearer what we are doing concerning "Express Router", Code Refactoring
router.post(
    // '/login',
    '/',
    (req, res) => {
        // console.log(req.body);

        // name came from the name attribute of the input element in the form
        const { name } = req.body;

        console.log("post - name variable:", name);

        if (name) {
            return res.status(200).send(`Welcome ${name}`);
        }

        res.status(401).send('Please Provide Credentials.')
        // Type in something in the form and submit it to see this:
        // res.send('POST METHOD');
        // He used "anna" to test the submission form to see if it was working properly. "Welcome anna"

        // Front-end in index.html:
        // <form action="/login" method="POST">
        // If the page, response is located on the same server, use a relative path in action attribute.
        // If the page, response is located on a different server, use the absolute path, full url in acction attribute.
    }
);

// Export the router:
module.exports = router;