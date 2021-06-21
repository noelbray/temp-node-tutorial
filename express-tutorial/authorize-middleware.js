const { join } = require("lodash");

const authorize = (req, res, next) => {
    const { user } = req.query;

    console.log('\nauthorize - middleware function has been called --\n');
    
    if ( user === 'john') {
        req.user = { name: 'john', id: 3}

        // console.log(req.user);
        
        next();
    }
    else {
        // 401 means unauthorized
        res.status(401).send('Status 401: Unauthorized\n\nSorry, but you are NOT authorized to use this\n\nYou are not allowed to access this resource.')
    }
    
    // next(); // Always call next unless you are going to terminate the middleware function.
}

module.exports = authorize;