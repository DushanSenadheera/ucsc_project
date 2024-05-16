const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');

router.get('/admin', checkRole('admin'), (req, res) => {
    res.send('Hello World!');
});

module.exports = router;