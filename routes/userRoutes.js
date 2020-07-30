const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


//User Routes
router.get('/', userController.user_index);

//register form
router.get('/register', userController.user_register_get);

//Register process
router.post('/', userController.user_register_post);

//Login form
router.get('/login', userController.login);

//Login process
router.post('/login', userController.login_post);



module.exports = router;

