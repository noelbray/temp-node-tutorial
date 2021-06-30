// all methods that have /people routes
// this is going to be a "router instance" that takes care of the routing instead of the app
// the specific url for routing people
// setting up the router in one file allows us to separate multiple functionalities

const express = require('express');

const router = express.Router();

// object destructuring to get the array of objects, people objects
let { people } = require('../data');

// The Base path, route that is applied to each of these methods is in the app.js, what filename your app is is called.
// For example: app.use('/api/people', peopleRouter) is in the file 12-express-router.js and the route in the app.use will be applied to all the methods in peopleRouter that was required within 12-express-router.js.

// app.get(
router.get(
    // '/api/people', originally
    '/',
    (req, res) => {
        // res.status(200).json({
            //     httpMethod: req.method, 
            //     success: true,
            //     data: people,
            //     // dataType: `Array.isArray(people): ${Array.isArray(people)}`
            // });
            req.body.data = people;
            return res.status(200).json({success: true, data: people})
        console.log("get - /api/people:", people);
    }
);

// For javascript.html file that uses Axios which is similar to the built-in fetch JS method but has some added benefits of using.
// Maybe, I should look into Axios.
// app.post('/api/people'...) is not the same as app.get('/api/people'...); even though the url is the same.
// just because the urls are the same for get, post, put, etc. doesn't mean they are the same; The methods get and post and etc. are different.
// app.post(
router.post(
    // here we are adding data
    // '/api/people', originally
    '/',
    (req, res) => {
        const { name } = req.body; // this is what was causing the post route not to work right. I forgot to put name in curly brackets of which without, the name variable was returning the entire req.body object, data.

        console.log("app.js - post - /api/peoeple:", name);
        // console.log("Empty submission: ", name);
        if (!name) { // his original condition
        // if (name.name === '' || !name) {
            return res.status(400).send({success: false, msg: 'please refresh this webpage and provide name value'});
        }
        // 201 means a succesful "post" request
        // res.status(201).send({ success: true, msg: 'Successful Post Request. Data Sent, Posted.', person: name });

        // res.status(201).json({ success: true, msg: 'Successful Post Request. Data Sent, Posted to Server.', person: name});
        res.status(201).json({ success: true, msg: 'Successful Post Request. Data Sent, Posted to Server', /* data: people,*/ person: name });
    }
)

// Postman prevents you from having to build a front-end webpage to test your routes. You can test all of your routes easily with postman.
// How to test your routes in Postman: 
// postman.txt
// Route Created, After Postman was downloaded and after trying out postman, before 7:28:13 in the video:
// This code works:
// app.post(
//     '/api/postman/people',
//     (req, res) => {
//         const { name } = req.body;
//         if (!name) {
//             return res.status(400).json({ success: false, msg: 'please provide name value'})
//         }
//         res.status(201).send({ success: true, data: [...people, name] });
//     }
// );

// Express Router, Code Structure
// app.post(
router.post(
    // '/api/people/postman', originally
    '/postman',
    (req, res) => {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, msg: 'please provide name value' });
        }
        res.status(201).send({ success: true, data: [...people, name] });
    }
)



// Now PUT Method
// PUT is for updating, editing the data
// Convention: if we have a list such as /api/orders/, if we want to edit or delete we go with our route parameter: /api/orders/:id and this will get you the item:
// We look for the specific item and then we update, change the item
// Note: This data is not being persisted
// app.put(
router.put(
    // '/api/people/:id', originally
    '/:id', 
    (req, res) => {
        const {id} = req.params;
        
        const {name: nameInBody} = req.body;
        
        // console.log("id", id, "name", nameInBody);

        // res.send("Howdie partner!");
        // We are searching through an array so use the .find() method
        const person = people.find((person) =>  person.id === Number(id));

        if (!person) {
            return res.status(404).json({ success: false, msg: `no person with id ${id}` });
        }
        const newPeople = people.map(person => {
            if (person.id === Number(id)) {
                person.name = nameInBody;
            }
            return person;
        })
        res.status(200).json({ success: true, data: newPeople})
    }
);

// DELETE mehtod:
// When we delete, we are not expecting anything in the request body, req.body.
// For example: If a user hits api/people/1 the person with id = 1 will be removed.
// Note: Remmeber that even if the routes's text are the same, the routes are different because the methdos are different, GET, POST, PUT, DELETE are different methods and use different routes even if the routes have the same text, same path.
// app.delete(
router.delete(
    // '/api/people/:id', originally
    '/:id',
    (req, res) => {
        // const { id } = req.params;

        // const { name: nameInBody } = req.body;

        // Access Params Directly
        const person = people.find(person => person.id === Number(req.params.id));

        if (!person) {
            // If the person object, the id, doesn't exist, send back the 404 response.
            return res.status(404).json( { success: false, msg: `no person with id ${ req.params.id }`});
        }
        // Keep, return all the people who don't have the id = Number(req.params.id)
        const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
        return res.status(200).json({success: true, data: newPeople });
    }
);

// Export the router: 
module.exports = router;
