// Normally You don't setup seperate methods for the Parameters, Params (req.params) and Query (req.query), normally you can just add them to where you are getting a list. if params or if query ... then do ... and if not params or queries send back the whole list of products.

// They are demonstrated separately here so that you can get a better grasp of each of them.

const express = require('express');
const { join } = require('lodash');

const app = express();

const { products} = require('./data'); // array, data

app.get(
    '/',
    (req, res) => {
        // res.json(products);
        // res.status(200).json(products); // I decided to go ahead and put the status code in there.
        res.send('<h1>Home Page</h1><a href="/api/products">View Products</a>');
    }
);

// Return All The Products Data:
app.get(
    '/api/all-products-data',
    (req, res) => {
        res.status(200).json(products);
    }
)

// Select Only Certain Properties From The Data Object With Object Destructuring:
app.get(
    '/api/products',
    (req, res) => {
        const newProducts = products.map((product) => {
            // You can be Selective about what you are sending about the product or etc. You can use object destructuring to select just what you want from the data:
            const { id, name, image } = product;
            return { id, name, image };
        });
        res.json(newProducts); // products variable by itself will pass in everything.
    }
);

// Find One Item From The Data Object With The Find Method:
app.get(
    '/api/products/1',
    (req, res) => {
        console.log(req);

        console.log(req.params);

        const singleProduct = products.find(
            (product) => product.id === 1
        );

        res.json(singleProduct);
    }
);

// Instead of Hard Coding Every Item, Product
// Set Up A Route Parameter
// url-route/:parameter
// Parameters always comeback as "strings"
// Name the parameter anything you want url-route/:anyNameForParameter
app.get(
    // '/api/products/:productID' // His original line of code
    '/api/get-products-by-parameter/:productID',
    (req, res) => {
        // Log The Entire Request Object:
        // console.log(req);

        // Log The Request Objects Parameters:
        // console.log(req.params);

        const { productID } = req.params;

        // const singleProduct = products.find(
        //     (product) => product.id === 1
        // );

        const singleProduct = products.find(
            (product) => product.id === Number(productID)
        )
        
        console.log(singleProduct);

        // I added this before he started talking about doing something like this.
        // if (!req.params.productID) {
        //     res.send(`<h1>No Parameter, ID Was Give At The End Of The URL.</h1>`);
        //     return;
        // }

        // I added this
        // res.send(`<h1>The parameterID is: ${req.params.productID}, typeof: ${typeof req.params.productID}.</h1>` );

        if (!singleProduct) {
            return res.status(404).send('Product Does Not Exist. Please Enter A Valid ID.');
        }
        
        return res.json(singleProduct);
    }
);

// Input Several Parameters

app.get(
    // the url's routes and parameters have to type in the correct order
    // E.g. if the user types review inplace of reviews in the address bar, a 404 error will be given
    '/api/use-several-parameters/:productID/reviews/:reviewID',
    (req, res) => {
        console.log("Parameters:\n", req.params);
        
        res.send('Dummy Data');
    }
);


// Query Parameters:

// The server side has to be set up to receive query, search paramaters.
// http://hn.algolia.com/api/v1/serarch?query=foot&tags=story
// ? specific info about the data you'll send out data to server
// everything afterwards are values to search for.
// The access point and the keys have to be set up on the server.
// & allows you add, chain multiple search parameters.
// The server can access those query parameters and send back, serve, data in response to it.

app.get(
    '/api/v1/query',
    (req, res) => {
        console.log("Query Parameters:\n", req.query);

        const { search, limit } = req.query;

        let sortedProducts = [...products];

        if(search) {
            sortedProducts = sortedProducts.filter(
                (product) => {
                    return product.name.startsWith(search);
                }
            );
        }

        if(limit) {
            sortedProducts = sortedProducts.slice(
                0, Number(limit)
            );
        }

        if(sortedProducts.length < 1) {
            // You Can Send Back A String:
            // res.status(200).send('no products matche your search, query');

            // More Common To Send Back Something Like This, Set Up An Object:
            return res.status(200).json(
                {
                    success: true,
                    data: []
                }
            )
        }

        res.status(200).json(sortedProducts);

        // res.send("YAAGGA!");
    }
);

// Important Note: 
// If you are using if conditions, 
// Javascript reads through them one after another
// if there is no return statement in them which
// will cause an error
// because it can't send back multiple, 2 or more, respsonses in the same request.
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// Remember: Only One Response Per Request Is Allowed. So Always Use Return to exit the callback function.

const port = 5000;

app.listen(
    port,
    () => {
        console.log(`\nThe server is listening on port ${port}, http://localhost:${port}\n`);
    }
);