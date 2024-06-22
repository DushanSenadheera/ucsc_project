const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

exports.adminLogin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(400).json({ message: "An error occurred, please try again later." });
    }
};