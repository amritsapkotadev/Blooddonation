const User = require('../model/user');
const bcrypt = require('bcryptjs');

// Handle signup
const signupHandler = async (req, res) => {
  const {name, phonenumber, password} = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({phonenumber});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      phonenumber,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();

    // If user creation is successful
    console.log('user created sucessfully');
  } catch (err) {
    // Log the error to the console
    console.log('Error during signup:', err);

    // Send a 500 response with an error message
    res.status(500).json({message: 'Something went wrong', error: err.message});
  }
};

module.exports = signupHandler;
