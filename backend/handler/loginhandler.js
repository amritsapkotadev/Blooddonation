const User = require('../model/user'); // Adjust the path to your User model
const bcrypt = require('bcryptjs');

// Handle login
const loginHandler = async (req, res) => {
    const { phonenumber, password } = req.body;

    try {
        // Find user by phone number
        const user = await User.findOne({ phonenumber });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If login is successful
        res.status(200).json({ message: 'Login successful', user: { name: user.name, phonenumber: user.phonenumber } });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = loginHandler;
