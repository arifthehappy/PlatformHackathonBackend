const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.user_index);
//User Routes
//register form
router.get('/register', userController.user_register_get);

//Register process
router.post('/register', userController.user_register_post);

router.get('/login', userController.login);

module.exports = router;

