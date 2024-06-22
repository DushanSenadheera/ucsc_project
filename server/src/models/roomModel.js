const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomId: {
        type: String,
        required: true,
        unique: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    adult: {
        type: Number,
        required: true,
    },
    child: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Available',
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Room', roomSchema);