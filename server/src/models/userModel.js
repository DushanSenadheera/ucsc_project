const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a Room subdocument schema
const roomSchema = new Schema({
    count: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['Single', 'Double', 'Family'],
        required: true,
    }
});

// Adjust the userSchema to include an array of room subdocuments
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    adult: {
        type: Number,
        required: true,
    },
    child: {
        type: Number,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    rooms: [roomSchema] // Use an array of room subdocuments
});

module.exports = mongoose.model('User', userSchema);