const connectDB = require('./config/config');
const Admin = require('./models/adminModel'); 
const bcrypt = require('bcrypt');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

async function createAdmin() {
  try {
    

    const name = await prompt('Enter admin name: ');
    const email = await prompt('Enter admin email: ');
    const mobile = await prompt('Enter admin mobile: ');
    const password = await prompt('Enter admin password: ');

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({
      username: name,
      email: email,
      password: hashedPassword,
      mobile: mobile,
    });

    await admin.save();
    console.log('Admin account created successfully');
  } catch (error) {
    console.error(`Error creating admin account: ${error.message}`);
  } finally {
    readline.close();
  }
}

async function setup() {
    try {
      await connectDB();
      console.log('Connected to database successfully.');
      await createAdmin();
      console.log('Admin created successfully.');
    } catch (error) {
      console.error('Error during setup:', error);
    }
  }
  
  setup();