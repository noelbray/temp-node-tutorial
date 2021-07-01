const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people'); 
// people.js

// 1st way to do the routes for, associated with, ../controllers/people.js:

// router.get('/', getPeople);

// router.post('/', createPerson);

// router.post('/', createPersonPostman);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

// 2nd way to do routes for, associated with, ../controllers/people.js:

// Since get and post have the same route, they can be chained together: 
// Any methods that have the exact same route, urls, the functions, methods can be chained together:
// router.route('samepath').chainfunction1(callback).chainfunction2(callback)...and so on
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router;