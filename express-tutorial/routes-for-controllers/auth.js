const express = require('express');
const router = express.Router();

const loginPeople = require('../controllers/auth.js');

router.post('/', loginPeople);

module.exports = router;