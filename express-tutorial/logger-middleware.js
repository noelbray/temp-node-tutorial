const logger = (req, res, next) => {
    // Express will supply the request, response, and next to this middleware function.
    // we have to set up the request, response, and next in the middlware function we create
    // You can write this middleware function before the routes that use it. 
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log("the logger middleware function has been invoked and its console.log is: ", "method:\n", method, "url: ", url, "time: ", time);
    
    // Either terminate or pass on the middleware

    // Terminate The Cycle, To Not Pass On The Middleware:
    // res.send('When you work with middleware, you Must pass it on to the next middleware unless you are terminating the whole cycle by sending back a response, res.')

    // To Pass On The Middleware:
    next(); 
}

module.exports = logger;