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

let { people } = require('./data.js');
// console.log(people);

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

app.get(
    '/api/people',
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
app.post(
    // here we are adding data
    '/api/people',
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
app.post(
    '/api/postman/people',
    (req, res) => {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ success: false, msg: 'please provide name value'})
        }
        res.status(201).send({ success: true, data: [...people, name] });
    }
)

app.post(
    '/login',
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


// Now PUT Method
// PUT is for updating, editing the data
// Convention: if we have a list such as /api/orders/, if we want to edit or delete we go with our route parameter: /api/orders/:id and this will get you the item:
// We look for the specific item and then we update, change the item
// Note: This data is not being persisted
app.put(
    '/api/people/:id', 
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
app.delete(
    '/api/people/:id',
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
)

const port = 5000;

app.listen(
    port,
    () => {
        console.log('\nThis Express App Concerning The POST Method Is Working. TYGG.\n')
    }
);