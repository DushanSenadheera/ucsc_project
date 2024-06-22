const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/showRoom', roomController.showRoom);
router.post('/addRoom', roomController.addRoom);
router.post('/editRoom', roomController.editRoom);
router.post('/deleteRoom', roomController.deleteRoom);

module.exports = router;