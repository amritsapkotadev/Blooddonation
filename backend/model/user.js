const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,  // Changed to String to preserve all characters in phone numbers
    required: true,
    unique: true,  // Ensure that phone numbers are unique
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
