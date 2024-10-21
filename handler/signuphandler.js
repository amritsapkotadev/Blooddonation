const User = require('../model/user');
const bcrypt = require('bcryptjs');

// Handle signup
const signupHandler = async (req, res) => {
  const {name, phonenumber, password} = req.body;

  try {
    // If user already exists
    const existingUser = await User.findOne({phonenumber});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(12); // Correct bcrypt method: genSalt
    const hashedPassword = await bcrypt.hash(password, salt);

    // New user creation
    const newUser = new User({
      name, // saving name
      phonenumber, // saving phone number
      password: hashedPassword, // saving hashed password for security reasons
    });

    // Save the info in the database
    await newUser.save(); // .save is a method to save the data in MongoDB

    // If user is created successfully
    res.status(200).json({message: 'User created successfully'});
  } catch (err) {
    // If there is an error
    res.status(500).json({message: 'Something went wrong'});
  }
};

module.exports = signupHandler;
