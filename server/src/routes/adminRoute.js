const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;