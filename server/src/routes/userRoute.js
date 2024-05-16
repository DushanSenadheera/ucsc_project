const express = require('express');
const router = express.Router();

router.post('/register', userController.createUser);
router.get('/login', userController.loginUser);
router.get('/:user', userController.loginUser);

module.exports = router;