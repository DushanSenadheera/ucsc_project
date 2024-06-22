require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/my_database');
        console.log('Database connection successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;