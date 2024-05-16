require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB}`);
        console.log('Database connection successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;