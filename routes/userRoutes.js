const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.user_index);
//User Routes
//register form
router.get('/register', userController.user_register_get);

//Register process
router.post('/', userController.user_register_post);

router.get('/login', userController.login);

module.exports = router;

