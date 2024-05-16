// setup.js
const User = require('./models/User');
const bcrypt = require('bcrypt');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter admin email: ', async (email) => {
    readline.question('Enter admin password: ', async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new User({
            email,
            password: hashedPassword,
            role: 'admin'
        });

        try {
            await admin.save();
            console.log('Admin account created');
        } catch (error) {
            console.error(`Error creating admin account: ${error.message}`);
        }

        readline.close();
    });
});