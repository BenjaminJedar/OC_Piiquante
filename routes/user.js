const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();


const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;