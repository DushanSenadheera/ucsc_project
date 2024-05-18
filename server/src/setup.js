const User = require('./models/userModel');
const bcrypt = require('bcrypt');
const connectDB = require('./config/config');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

connectDB();

readline.question('Enter admin email: ', async (email) => {
    readline.question('Enter admin password: ', async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new User({
            name: 'Admin',
            email,
            password: hashedPassword,
            mobile: '0111231234',
            role: 'admin'
        });

        try {
            await admin.save();
            console.log('Admin account created successfully');
        } catch (error) {
            console.error(`Error creating admin account: ${error.message}`);
        }

        readline.close();
    });
});