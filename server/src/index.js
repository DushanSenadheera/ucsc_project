require('dotenv').config()

const express = require('express');
const app = express();
const connectDB = require('./config/config');
const cors = require('cors');
const bodyParser = require('body-parser');

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/', require('./routes/userRoute'));
app.use('/', require('./routes/adminRoute'));

app.listen(`${process.env.PORT}`, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})