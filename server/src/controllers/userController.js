const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    const { name, email, password, mobile } = req.body;

    const user = new User({
        name,
        email,
        password,
        mobile, 
        role
    });

    try {
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send(`Server error: ${error.message}`);
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User logged in');
    } catch (error) {
        res.status(500).send(`Server error: ${error.message}`);
    }
};
