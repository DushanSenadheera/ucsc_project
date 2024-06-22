const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.get('/getUsers', userController.getUsers);
router.post('/checkout', userController.checkout);
router.post('/mail', userController.mail);

module.exports = router;